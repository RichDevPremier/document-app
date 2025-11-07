// src/app/convert/pdf-to-html/page.tsx
import { Metadata } from "next";
import PdfToHtmlClientPage from "./PdfToHtmlClientPage";
import FAQSection from "@/components/FAQSection";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Convert PDF to HTML Free | Online PDF to Webpage Converter",
  description:
    "Convert your PDF documents into HTML files that can be easily viewed in any web browser. Free, fast, and secure.",
  keywords: [
    "pdf to html",
    "convert pdf to html",
    "online converter",
    "free pdf to html",
  ],
  openGraph: {
    title: "Convert PDF to HTML Free | Online PDF to Webpage Converter",
    description:
      "Convert your PDF documents into HTML files that can be easily viewed in any web browser.",
    url: "/convert/pdf-to-html",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert a PDF to HTML?",
    answer:
      'Upload your PDF file, click the "Convert" button, and we will generate an HTML file for you to download. It is a straightforward process and completely free.',
  },
  {
    question: "Why convert a PDF to HTML?",
    answer:
      "Converting a PDF to HTML makes the content accessible on the web. It allows search engines to index the content and makes it easier to integrate into a website. It also makes the content responsive and accessible on different devices.",
  },
  {
    question: "Will the HTML file be a single file?",
    answer:
      "Our tool aims to create a self-contained HTML file. However, for complex PDFs with many images, the output might be a zip file containing the HTML and associated image assets.",
  },
];

const PdfToHtmlPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Convert PDF to HTML
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Transform your PDF documents into web-friendly HTML files.
        </p>
      </section>

      <div className="my-8">
        <PdfToHtmlClientPage />
      </div>

      <AdPlaceholder
        width={300}
        height={250}
        text="AdSense Rectangle (300x250)"
      />

      <section className="w-full max-w-4xl mx-auto mt-12 text-left">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
          Make Your Documents Web-Ready
        </h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Unlock the content in your PDFs by converting them to HTML. This
            makes your documents viewable in any browser, and allows the text to
            be indexed by search engines, increasing its reach.
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

export default PdfToHtmlPage;
