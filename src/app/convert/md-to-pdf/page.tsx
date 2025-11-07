// src/app/convert/md-to-pdf/page.tsx
import { Metadata } from "next";
import MdToPdfClientPage from "./MdToPdfClientPage";
import FAQSection from "@/components/FAQSection";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Convert Markdown to PDF Free | Online MD to PDF Converter",
  description:
    "Easily convert your Markdown (.md) files to professional-quality PDF documents for free. Ideal for reports, articles, and documentation.",
  keywords: [
    "md to pdf",
    "convert markdown to pdf",
    "online converter",
    "free md to pdf",
  ],
  openGraph: {
    title: "Convert Markdown to PDF Free | Online MD to PDF Converter",
    description:
      "Easily convert your Markdown (.md) files to professional-quality PDF documents for free.",
    url: "/convert/md-to-pdf",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert Markdown to PDF?",
    answer:
      'Upload your .md file, click the "Convert" button, and your PDF will be generated for you to download. The process is quick, easy, and free.',
  },
  {
    question: "Why convert Markdown to PDF?",
    answer:
      "Converting Markdown to PDF is great for creating documents with consistent formatting that can be easily shared, printed, or archived. PDFs are universally compatible and maintain their layout on any device.",
  },
  {
    question: "Will my formatting be preserved?",
    answer:
      "Yes, our tool is designed to accurately translate your Markdown syntax into a well-formatted PDF document, preserving headings, lists, code blocks, and other elements.",
  },
];

const MdToPdfPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Convert Markdown to PDF
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Create professional, shareable PDF documents from your Markdown files
          in just a few clicks.
        </p>
      </section>

      <div className="my-8">
        <MdToPdfClientPage />
      </div>

      <AdPlaceholder
        width={300}
        height={250}
        text="AdSense Rectangle (300x250)"
      />

      <section className="w-full max-w-4xl mx-auto mt-12 text-left">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
          From Simple Text to Professional Documents
        </h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Take your easy-to-write Markdown files and turn them into
            universally accessible PDF documents. This is perfect for
            documentation, reports, or any situation where you need a polished,
            printable format.
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

export default MdToPdfPage;
