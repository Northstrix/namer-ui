"use client";
import React, { useState, useRef } from 'react';
import { IconUpload } from '@tabler/icons-react';

interface SimpleDropzoneProps {
  onFilesAdded: (files: File[]) => void;
  activeInscription?: string; // Optional inscription when files are dragged over
  defaultInscription?: string; // Optional default inscription
  borderColor?: string; // Optional border color
  activeBorderColor?: string; // Optional active border color
  textColor?: string; // Optional text color
  borderRadius?: string; // Optional border radius
  borderWidth?: string; // Optional border width (default: '2px')
  singleFileOnly?: boolean; // Optional prop to accept only a single file
  onMultipleFilesSelected?: (isMultiple: boolean) => void; // Optional callback for handling multiple file selections
  height?: string; // Optional height (e.g., '300px', '50vh', etc.)
}

const SimpleDropzone: React.FC<SimpleDropzoneProps> = ({
  onFilesAdded,
  activeInscription = "Drop the files here...", // Default active inscription
  defaultInscription = "Drag & drop files here, or click to select files", // Default inscription
  borderColor = '#e1e1e1', // Default border color
  activeBorderColor = '#6a0dad', // Default active border color
  textColor = '#eee', // Default text color
  borderRadius = '0.5em', // Default border radius
  borderWidth = '2px', // Default border width
  singleFileOnly = false,
  onMultipleFilesSelected,
  height = '164px', // Default height
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (singleFileOnly && droppedFiles.length > 1) {
      onMultipleFilesSelected?.(true);
      return;
    }
    onFilesAdded(droppedFiles);
    onMultipleFilesSelected?.(droppedFiles.length > 1);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (singleFileOnly && selectedFiles.length > 1) {
        onMultipleFilesSelected?.(true);
        return;
      }
      onFilesAdded(selectedFiles);
      onMultipleFilesSelected?.(selectedFiles.length > 1);
    }
  };

  const handleOverlayClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="relative w-full"
      style={{ height }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer"
        style={{ borderRadius }}
        onClick={handleOverlayClick}
      />
      <div
        className="border-dashed p-8 text-center cursor-pointer w-full h-full flex flex-col items-center justify-center"
        style={{
          borderWidth,
          borderColor: isDragActive ? activeBorderColor : borderColor,
          backgroundColor: 'transparent',
          borderRadius,
        }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          multiple={!singleFileOnly}
          className="hidden"
        />
        <IconUpload className="mx-auto text-4xl mb-4" style={{ color: textColor }} />
        <p
          style={{ color: textColor }}
          dir={
            /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(
              isDragActive ? activeInscription : defaultInscription
            )
              ? 'rtl'
              : 'ltr'
          }
        >
          {isDragActive ? activeInscription : defaultInscription}
        </p>
      </div>
    </div>
  );
};

export default SimpleDropzone;
