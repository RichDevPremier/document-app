// src/app/convert/html-to-md/page.tsx
import { Metadata } from "next";
import HtmlToMdClientPage from "./HtmlToMdClientPage";
import FAQSection from "@/components/FAQSection";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Convert HTML to Markdown Free | Online HTML to MD Converter",
  description:
    "Easily convert your HTML files to clean, readable Markdown (.md) for free. A useful tool for developers and content managers.",
  keywords: [
    "html to md",
    "convert html to markdown",
    "online converter",
    "free html to md",
  ],
  openGraph: {
    title: "Convert HTML to Markdown Free | Online HTML to MD Converter",
    description:
      "Easily convert your HTML files to clean, readable Markdown (.md) for free.",
    url: "/convert/html-to-md",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert HTML to Markdown?",
    answer:
      'Simply upload your HTML file, click the "Convert" button, and your Markdown file will be generated for you to download instantly. It is fast and free.',
  },
  {
    question: "Why would I convert HTML to Markdown?",
    answer:
      "Converting HTML to Markdown is useful for simplifying content, making it easier to read and edit. It is often used for documentation, blog posts, and other content that needs to be maintained in a simple text format.",
  },
  {
    question: "Does this tool handle complex HTML?",
    answer:
      "Our tool is designed to handle a wide range of HTML tags and structures, converting them into the corresponding Markdown syntax. However, very complex or non-standard HTML may have some variations in the output.",
  },
];

const HtmlToMdPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Convert HTML to Markdown
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Simplify your content by converting your HTML files into easy-to-read
          Markdown.
        </p>
      </section>

      <div className="my-8">
        <HtmlToMdClientPage />
      </div>

      <AdPlaceholder
        width={300}
        height={250}
        text="AdSense Rectangle (300x250)"
      />

      <section className="w-full max-w-4xl mx-auto mt-12 text-left">
        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
          From Webpage to Plain Text
        </h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            This tool strips down the complexity of HTML into the simplicity of
            Markdown. It is perfect for extracting the content from a webpage
            for use in documentation or a content management system.
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

export default HtmlToMdPage;
