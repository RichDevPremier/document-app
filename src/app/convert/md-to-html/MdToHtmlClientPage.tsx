// src/app/convert/md-to-html/MdToHtmlClientPage.tsx
"use client";

import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import ConvertOptions from "@/components/ConvertOptions";

const MdToHtmlClientPage = () => {
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File | null) => {
    setInputFile(file);
    setError(null);
  };

  const handleConvert = async () => {
    if (!inputFile) {
      setError("Please select a file first.");
      return;
    }

    setIsConverting(true);
    setError(null);

    const formData = new FormData();
    formData.append("inputFile", inputFile);
    formData.append("fromFormat", "md");
    formData.append("toFormat", "html");

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Conversion failed. Please try again.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${inputFile.name.replace(/\.md$/, "")}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      // Save to history
      const history = JSON.parse(
        localStorage.getItem("conversionHistory") || "[]"
      );
      const newHistoryEntry = {
        fileName: inputFile.name,
        from: "md",
        to: "html",
        date: new Date().toISOString(),
      };
      history.unshift(newHistoryEntry);
      localStorage.setItem(
        "conversionHistory",
        JSON.stringify(history.slice(0, 20))
      );
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <>
      <FileUploader onFileSelect={handleFileSelect} supportedFormats={["md"]} />
      <ConvertOptions
        fromFormat="md"
        toFormat="html"
        onConvert={handleConvert}
        isConverting={isConverting}
        inputFile={inputFile}
      />
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </>
  );
};

export default MdToHtmlClientPage;
