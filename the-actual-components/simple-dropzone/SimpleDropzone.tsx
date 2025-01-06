'use client'

import React, { useState, useRef } from 'react';
import { IconUpload } from '@tabler/icons-react';

// Define the props for the SimpleDropzone component
interface SimpleDropzoneProps {
  onFilesAdded: (files: File[]) => void;
  activeInscription?: string; // Optional inscription when files are dragged over
  defaultInscription?: string; // Optional default inscription
  borderColor?: string; // Optional border color
  textColor?: string; // Optional text color
  borderRadius?: string; // Optional border radius
  borderWidth?: string; // Optional border width (default: '2px')
}

const SimpleDropzone: React.FC<SimpleDropzoneProps> = ({
  onFilesAdded,
  activeInscription = "Drop the files here...", // Default active inscription
  defaultInscription = "Drag & drop files here, or click to select files", // Default inscription
  borderColor = '#e1e1e1', // Default border color
  textColor = '#eee', // Default text color
  borderRadius = '0.5em', // Default border radius
  borderWidth = '2px', // Default border width
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    onFilesAdded(droppedFiles);
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      onFilesAdded(selectedFiles);
    }
  }

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className="border-dashed p-8 text-center cursor-pointer w-full mx-auto"
      style={{
        borderWidth,
        borderColor: isDragActive ? '#6a0dad' : borderColor, // Default active color directly in code
        backgroundColor: 'transparent',
        borderRadius,
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        multiple
        className="hidden"
      />
      <IconUpload className="mx-auto text-4xl mb-4" style={{ color: textColor }} /> {/* Default icon color */}
      <p style={{ color: textColor }} dir={isRTLCheck(isDragActive ? activeInscription : defaultInscription) ? 'rtl' : 'ltr'}>
        {isDragActive ? activeInscription : defaultInscription}
      </p>
    </div>
  );
}

export default SimpleDropzone;

// Utility function to determine if text is RTL
const isRTLCheck = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};
