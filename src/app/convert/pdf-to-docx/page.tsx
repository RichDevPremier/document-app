// src/app/convert/pdf-to-docx/page.tsx
import { Metadata } from "next";
import PdfToDocxClientPage from "./PdfToDocxClientPage";
import FAQSection from "@/components/FAQSection";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Convert PDF to DOCX Free | Online PDF to Word Converter",
  description:
    "Easily convert your PDF files to editable DOCX (Word) documents for free. High-quality, fast, and secure online conversion.",
  keywords: [
    "pdf to docx",
    "convert pdf to word",
    "online converter",
    "free pdf to docx",
  ],
  openGraph: {
    title: "Convert PDF to DOCX Free | Online PDF to Word Converter",
    description:
      "Easily convert your PDF files to editable DOCX (Word) documents for free. High-quality, fast, and secure online conversion.",
    url: "/convert/pdf-to-docx",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert PDF to DOCX for free?",
    answer:
      'Simply upload your PDF file using our tool, and click the "Convert" button. Your editable DOCX file will be ready to download in seconds. Our service is completely free.',
  },
  {
    question: "Is my file secure?",
    answer:
      "Yes, your security is our priority. All uploaded files are processed securely and are automatically deleted from our servers after a short period.",
  },
  {
    question:
      "Will the formatting be preserved when converting from PDF to DOCX?",
    answer:
      "Our advanced conversion technology aims to preserve the original layout, text, and images of your PDF as accurately as possible in the resulting DOCX file. However, complex PDFs may have some variations.",
  },
];

const PdfToDocxPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Convert PDF to DOCX
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Turn your PDF documents into editable Microsoft Word (.docx) files
          quickly and easily.
        </p>
      </section>

      <div className="my-8">
        <PdfToDocxClientPage />
      </div>

      <AdPlaceholder
        width={300}
        height={250}
        text="AdSense Rectangle (300x250)"
      />

      <section className="w-full max-w-4xl mx-auto mt-12 text-left">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
          Why Convert PDF to DOCX?
        </h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Converting a PDF to a DOCX file allows you to easily edit the
            content of the document. This is useful when you need to make
            changes to a document that you only have in PDF format.
          </p>
          <p>
            Our tool simplifies this process, allowing you to get an editable
            Word document in just a few clicks, while aiming to keep your
            original formatting intact.
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

export default PdfToDocxPage;
