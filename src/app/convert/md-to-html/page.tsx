// src/app/convert/md-to-html/page.tsx
import { Metadata } from "next";
import MdToHtmlClientPage from "./MdToHtmlClientPage";
import FAQSection from "@/components/FAQSection";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Convert Markdown to HTML Free | Online MD to HTML Converter",
  description:
    "Easily convert your Markdown (.md) files to HTML for free. A simple and fast tool for web developers and content creators.",
  keywords: [
    "md to html",
    "convert markdown to html",
    "online converter",
    "free md to html",
  ],
  openGraph: {
    title: "Convert Markdown to HTML Free | Online MD to HTML Converter",
    description:
      "Easily convert your Markdown (.md) files to HTML for free. A simple and fast tool for web developers and content creators.",
    url: "/convert/md-to-html",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert Markdown to HTML?",
    answer:
      'Upload your .md file, click "Convert", and your HTML file will be ready for download. It is that simple and completely free.',
  },
  {
    question: "Why would I convert Markdown to HTML?",
    answer:
      "Markdown is a simple way to write formatted text, but for it to be displayed on a website, it needs to be converted to HTML. This tool automates that process for you.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, our Markdown to HTML converter is completely free to use without any limitations.",
  },
];

const MdToHtmlPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Convert Markdown to HTML
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Quickly and easily convert your Markdown files into clean,
          well-formatted HTML.
        </p>
      </section>

      <div className="my-8">
        <MdToHtmlClientPage />
      </div>

      <AdPlaceholder
        width={300}
        height={250}
        text="AdSense Rectangle (300x250)"
      />

      <section className="w-full max-w-4xl mx-auto mt-12 text-left">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
          Why Convert Markdown to HTML?
        </h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Markdown is a lightweight markup language that you can use to add
            formatting elements to plaintext text documents. Converting it to
            HTML allows you to render this formatted text on a webpage.
          </p>
          <p>
            Our converter is perfect for developers, writers, and anyone needing
            to quickly see their Markdown rendered as a webpage.
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

export default MdToHtmlPage;
