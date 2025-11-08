// src/app/api/convert/route.ts

import { NextRequest, NextResponse } from "next/server";
import { marked } from "marked";
import TurndownService from "turndown";
import mammoth from "mammoth";
import puppeteer from "puppeteer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const inputFile = formData.get("inputFile") as File | null;
    const fromFormat = formData.get("fromFormat") as string | null;
    const toFormat = formData.get("toFormat") as string | null;

    if (!inputFile || !fromFormat || !toFormat) {
      return new NextResponse("Missing required form data", { status: 400 });
    }

    const inputBuffer = await inputFile.arrayBuffer();
    let outputContent: string | ArrayBuffer = "";
    let outputContentType = "text/plain";

    const conversionType = `${fromFormat}-to-${toFormat}`;

    switch (conversionType) {
      case "md-to-html":
        const markdown = await inputFile.text();
        outputContent = await marked(markdown);
        outputContentType = "text/html";
        break;

      case "html-to-md": {
        const html = await inputFile.text();
        const turndownService = new TurndownService();
        outputContent = turndownService.turndown(html);
        outputContentType = "text/markdown";
        break;
      }

      case "docx-to-html": {
        const result = await mammoth.convertToHtml({
          buffer: Buffer.from(inputBuffer),
        });
        outputContent = result.value;
        outputContentType = "text/html";
        break;
      }

      case "docx-to-pdf": {
        const { value: html } = await mammoth.convertToHtml({
          buffer: Buffer.from(inputBuffer),
        });
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html);
        const pdfBuffer = await page.pdf({ format: "A4" });
        outputContent = new Uint8Array(pdfBuffer).buffer;
        await browser.close();
        outputContentType = "application/pdf";
        break;
      }

      case "md-to-pdf": {
        const markdown = await inputFile.text();
        const html = await marked(markdown);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: "networkidle0" });
        const pdfBuffer = await page.pdf({ format: "A4" });
        outputContent = new Uint8Array(pdfBuffer).buffer;
        await browser.close();
        outputContentType = "application/pdf";
        break;
      }

      case "pdf-to-html": {
        const PDFParser = (await import("pdf2json")).default;
        const pdfParser = new PDFParser();
        const textContent = await new Promise<string>((resolve, reject) => {
          pdfParser.on("pdfParser_dataError", (errData: any) =>
            reject(errData.parserError)
          );
          pdfParser.on("pdfParser_dataReady", () => {
            resolve(pdfParser.getRawTextContent());
          });
          pdfParser.parseBuffer(Buffer.from(inputBuffer));
        });
        outputContent = `<!DOCTYPE html><html><head><title>${inputFile.name}</title></head><body><pre>${textContent}</pre></body></html>`;
        outputContentType = "text/html";
        break;
      }

      case "pdf-to-docx": {
        const PDFParser = (await import("pdf2json")).default;
        const pdfParser = new PDFParser();
        const textContent = await new Promise<string>((resolve, reject) => {
          pdfParser.on("pdfParser_dataError", (errData: any) =>
            reject(errData.parserError)
          );
          pdfParser.on("pdfParser_dataReady", () => {
            resolve(pdfParser.getRawTextContent());
          });
          pdfParser.parseBuffer(Buffer.from(inputBuffer));
        });
        outputContent = textContent;
        outputContentType =
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        break;
      }

      default:
        return new NextResponse(
          `Unsupported conversion type: ${conversionType}`,
          { status: 400 }
        );
    }

    const originalFileName = inputFile.name;
    const outputFileName = `${originalFileName.substring(
      0,
      originalFileName.lastIndexOf(".")
    )}.${toFormat}`;

    const blob = new Blob([outputContent], { type: outputContentType });

    const headers = new Headers();
    const encodedFileName = encodeURIComponent(outputFileName);
    headers.append(
      "Content-Disposition",
      `attachment; filename*=UTF-8''${encodedFileName}`
    );
    headers.append("Content-Type", outputContentType);

    return new NextResponse(blob, { headers });
  } catch (error) {
    console.error("Conversion API error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
