// src/components/FileUploader.tsx
"use client";

import { useState, ChangeEvent, DragEvent } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
  supportedFormats: string[];
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileSelect,
  supportedFormats,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    validateAndSetFile(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0] || null;
    validateAndSetFile(file);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const validateAndSetFile = (file: File | null) => {
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension && supportedFormats.includes(fileExtension)) {
        setSelectedFile(file);
        onFileSelect(file);
        setError(null);
      } else {
        setSelectedFile(null);
        onFileSelect(null);
        setError(
          `Invalid file type. Please select one of: ${supportedFormats
            .join(", ")
            .toUpperCase()}`
        );
      }
    } else {
      setSelectedFile(null);
      onFileSelect(null);
      setError(null);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-xl border-border-light dark:border-border-dark bg-white dark:bg-background-dark/30 transition-colors ${
          isDragging ? "border-primary" : ""
        }`}
      >
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={supportedFormats.map((f) => `.${f}`).join(",")}
        />
        <span className="material-symbols-outlined text-4xl text-primary mb-4">
          cloud_upload
        </span>
        <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
          Drag & Drop a File Here
        </p>
        <p className="text-gray-400 dark:text-gray-500 mb-4">- OR -</p>
        <label
          htmlFor="file-upload"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">Choose File</span>
        </label>
      </div>
      {selectedFile && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Selected file: {selectedFile.name}
        </p>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUploader;
