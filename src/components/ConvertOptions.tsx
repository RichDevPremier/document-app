// src/components/ConvertOptions.tsx
"use client";

interface ConvertOptionsProps {
  fromFormat: string;
  toFormat: string;
  onConvert: () => void;
  isConverting: boolean;
  inputFile: File | null;
}

const ConvertOptions: React.FC<ConvertOptionsProps> = ({
  fromFormat,
  toFormat,
  onConvert,
  isConverting,
  inputFile,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-8 text-center">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <span className="px-4 py-2 bg-gray-200 dark:bg-background-dark/50 text-text-light dark:text-text-dark rounded-md font-semibold">
          {fromFormat.toUpperCase()}
        </span>
        <span className="material-symbols-outlined text-2xl text-gray-500 dark:text-gray-400">
          arrow_forward
        </span>
        <span className="px-4 py-2 bg-primary/20 text-primary rounded-md font-semibold">
          {toFormat.toUpperCase()}
        </span>
      </div>
      <button
        onClick={onConvert}
        disabled={!inputFile || isConverting}
        className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        <span className="truncate">
          {isConverting ? "Converting..." : "Convert"}
        </span>
      </button>
    </div>
  );
};

export default ConvertOptions;
