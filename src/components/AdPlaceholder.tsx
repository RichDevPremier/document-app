// src/components/AdPlaceholder.tsx
import React from 'react';

const AdPlaceholder = ({ width, height, text }: { width: number; height: number; text: string }) => (
  <div className="container mx-auto px-4 py-2 flex items-center justify-center">
    <div
      className={`flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-gray-200 dark:bg-background-dark/50 w-full`}
      style={{ maxWidth: `${width}px`, height: `${height}px` }}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  </div>
);

export default AdPlaceholder;

