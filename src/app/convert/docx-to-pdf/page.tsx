// src/app/convert/docx-to-pdf/page.tsx
import { Metadata } from "next";
import DocxToPdfClientPage from "./DocxToPdfClientPage";
import FAQSection from "@/components/FAQSection";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Convert DOCX to PDF Free | Online Word to PDF Converter",
  description:
    "Easily convert your DOCX (Word) files to PDF for free. High-quality, fast, and secure online conversion without needing any software.",
  keywords: [
    "docx to pdf",
    "convert word to pdf",
    "online converter",
    "free docx to pdf",
  ],
  openGraph: {
    title: "Convert DOCX to PDF Free | Online Word to PDF Converter",
    description:
      "Easily convert your DOCX (Word) files to PDF for free. High-quality, fast, and secure online conversion.",
    url: "/convert/docx-to-pdf",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert DOCX to PDF for free?",
    answer:
      'Simply upload your DOCX file using our tool, and click the "Convert" button. Your PDF will be ready to download in seconds. Our service is completely free.',
  },
  {
    question: "Is my file secure?",
    answer:
      "Yes, your security is our priority. All uploaded files are processed securely and are automatically deleted from our servers after a short period.",
  },
  {
    question: "Will the formatting of my document be preserved?",
    answer:
      "Our conversion tool is designed to maintain the original formatting of your Word document as closely as possible in the final PDF file.",
  },
];

const DocxToPdfPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Convert DOCX to PDF
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Convert your Microsoft Word (.docx) documents into high-quality,
          searchable PDF files that are easy to share and print.
        </p>
      </section>

      <div className="my-8">
        <DocxToPdfClientPage />
      </div>

      <AdPlaceholder
        width={300}
        height={250}
        text="AdSense Rectangle (300x250)"
      />

      <section className="w-full max-w-4xl mx-auto mt-12 text-left">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
          Why Convert DOCX to PDF?
        </h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Converting your DOCX files to PDF offers several advantages. PDFs
            maintain consistent formatting across all devices and operating
            systems, ensuring your document looks the same everywhere. They are
            also more secure and can be password-protected.
          </p>
          <p>
            Our tool makes this process simple. Just upload your file, and we
            will handle the rest, providing you with a professional-quality PDF
            in seconds.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <div className="my-8">
        <AdPlaceholder
          width={728}
          height={90}
          text="AdSense Leaderboard (728x90)"
        />
      </div>
    </div>
  );
};

export default DocxToPdfPage;
