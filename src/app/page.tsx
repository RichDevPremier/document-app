// src/app/page.tsx

import AdPlaceholder from "@/components/AdPlaceholder";
import Link from "next/link";

const supportedFormats = [
  {
    name: "PDF to DOCX",
    description: "Convert PDF to Word",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7O_J4Lun63rzfd-ioFkbMxou2m8taSbPc6tACa4sh93DNJX_DTjojDTJsyKCEMeSqKBYWo3--nAfEi1W1iqHpdAs0FxjFFHZYXbcKeFdHINRucJ2y7uVfxk3AeV-eEN8dNIAhESc-HRBvTd7fgmRbSA96agwSGYZvtclpg9DZhDClnBsKaNlpMv7SsoNsUn9Fj06kubxjZsX86INEE5Ef-em8dpEQlx-sd1bHnoWTgX4qlZahpAMZULj6ezWa6bzUoo4kCwo0JiQf",
    href: "/convert/pdf-to-docx",
  },
  {
    name: "DOCX to PDF",
    description: "Convert Word to PDF",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMm_Uye68v9onmXr66f55AWeQ1USatszL5cA4F_OBnsq7kkKAIZYgNka6oWns5UZ3KHQKkGkVM3oqzHPRTngZk95NCoTkE90lI_JCVAuzXN1XRmDoqy7tU5U1S4GxX4g6JrwpGCMDbGMlUdJfFeOsnACGo7578DYXJjDqckx2tZHKYKlWXIQPPw_5jnw70G6-UEF_X5QuPf46ijwTyydJroGYjaZE2JV-f8TJYa46VggXAIbEkP045A8rphSV-t_KeQSk3rqUoC05m",
    href: "/convert/docx-to-pdf",
  },
  {
    name: "MD to HTML",
    description: "Convert Markdown to HTML",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpXN5R61q6FOp9xEb4ddEh3qE_1n22L1dtuZN3IgruXms9DRCJQCrxxLhQYWXu0OUs8IvAv7HMDGQCa-kCvr7wGZJ4zKSo_6s8KHsHgzqaFTrRUtsvGRfkjzdit7xnqTiqbRH_igr_A2azlEcjfApc8OdWCPLA0HP19Zizu8npFYankSo4t_OO3fdC-nA6wH7Lf2JI3vVr3xL5yIXIekvyxpBygxjK3kPthonH_CAuONLRQzXXWbGm4RQwq1dVVcPDp3crvUXiCS6",
    href: "/convert/md-to-html",
  },
  {
    name: "HTML to MD",
    description: "Convert HTML to Markdown",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASP-2_bUED3Bzxx87m6VUAH6L4MDYuimcNMxCrKmEbx-Rit5S083oqywp4qnA45LZOqipdFY-J62Xy9l3LAMl_AbQnG6aEvA_HKm0W6kDD589ESkG-9_D2Jlk2CWeoHXtPGJCYlHWt9OqtQki2QuDROPs0NIwR5bzDPvjHLb7w2hhqa3rZ1JzZh_U4K_C-9Doa3pzpKR64TMq7b7OHIdZhfDttmXXy4c2IJ9GarjTQ_tYYux0NizceEliN-I_AiQK3-oxeSOHwQ0Zf",
    href: "/convert/html-to-md",
  },
];

const processSteps = [
  {
    icon: "upload_file",
    title: "1. Upload File",
    description:
      "Drag and drop your document or click to select a file from your device.",
  },
  {
    icon: "autorenew",
    title: "2. Select Format & Convert",
    description:
      "Choose the output format you need from our extensive list of supported types.",
  },
  {
    icon: "download",
    title: "3. Download",
    description:
      "Your new file will be ready to download in just a few moments, securely and quickly.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* HeroSection */}
        <div className="relative flex w-full flex-col @container">
          <div className="p-4">
            <div className="flex min-h-[480px] flex-col gap-8 items-center justify-center p-4 rounded-xl">
              <div className="flex flex-col gap-2 text-center max-w-2xl">
                <h1 className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                  Effortless Document Conversion
                </h1>
                <h2 className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal @[480px]:text-lg">
                  Convert your files to any format. Free, fast, and secure.
                </h2>
              </div>
              <div className="w-full max-w-lg">
                <div className="relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-xl border-border-light dark:border-border-dark bg-white dark:bg-background-dark/30">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">
                    cloud_upload
                  </span>
                  <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
                    Drag & Drop a File Here
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 mb-4">
                    - OR -
                  </p>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Choose File</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SectionHeader for Supported Formats */}
        <h2 className="text-text-light dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">
          Supports All Major Formats
        </h2>

        {/* ImageGrid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4 container mx-auto">
          {supportedFormats.map((format) => (
            <Link
              href={format.href}
              key={format.href}
              className="flex flex-col gap-3 p-4 rounded-lg bg-white dark:bg-background-dark/30 border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style={{ backgroundImage: `url("${format.imageUrl}")` }}
              ></div>
              <div>
                <p className="text-text-light dark:text-white text-base font-medium leading-normal">
                  {format.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  {format.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* AdSense Placeholder In-Content */}
        <div className="container mx-auto px-4 py-10 flex items-center justify-center">
          <AdPlaceholder
            width={300}
            height={250}
            text="AdSense Rectangle (300x250)"
          />
        </div>

        {/* FeatureSection */}
        <div className="flex flex-col gap-10 px-4 py-10 @container container mx-auto">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-text-light dark:text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black max-w-[720px]">
              Simple 3-Step Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal max-w-[720px]">
              Our conversion process is designed to be quick and intuitive. Just
              follow these simple steps to get your file in the desired format.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-0">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/30 p-6 flex-col text-center items-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-text-light dark:text-white text-lg font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
