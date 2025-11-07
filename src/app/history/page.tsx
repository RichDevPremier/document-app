// src/app/history/page.tsx
"use client";

import { useState, useEffect } from "react";

interface ConversionHistory {
  fileName: string;
  from: string;
  to: string;
  date: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("conversionHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("conversionHistory");
    setHistory([]);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white md:text-5xl">
          Conversion History
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-300 md:text-lg">
          Here are your recent conversions. This data is stored only in your
          browser and will be lost if you clear your browser data.
        </p>
      </section>

      <div className="w-full max-w-4xl mx-auto mt-8">
        {history.length > 0 ? (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={clearHistory}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
              >
                Clear History
              </button>
            </div>
            <div className="bg-white dark:bg-background-dark/30 border border-border-light dark:border-border-dark shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-border-light dark:border-border-dark bg-gray-100 dark:bg-background-dark/50 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      File Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-border-light dark:border-border-dark bg-gray-100 dark:bg-background-dark/50 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Conversion
                    </th>
                    <th className="px-5 py-3 border-b-2 border-border-light dark:border-border-dark bg-gray-100 dark:bg-background-dark/50 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-light dark:text-text-dark">
                  {history.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-border-light dark:border-border-dark"
                    >
                      <td className="px-5 py-5 bg-transparent text-sm">
                        {item.fileName}
                      </td>
                      <td className="px-5 py-5 bg-transparent text-sm">
                        {item.from.toUpperCase()} to {item.to.toUpperCase()}
                      </td>
                      <td className="px-5 py-5 bg-transparent text-sm">
                        {new Date(item.date).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            You have no conversion history yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
