'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SimpleDropzone.tsx" file
import SimpleDropzone from '@/app/the-actual-components/simple-dropzone/SimpleDropzone'

const handleFilesFromSimpleDropzone = (files: File[]) => {
  files.forEach(file => {
    console.log('File:', file.name); // Print the name of each file
  });
};

<div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
  <SimpleDropzone 
    onFilesAdded={handleFilesFromSimpleDropzone}
  />
  <SimpleDropzone 
    onFilesAdded={handleFilesFromSimpleDropzone}
    activeInscription="שחרר את הקבצים כאן..."
    defaultInscription="גרור ושחרר קבצים כאן או לחץ לבחירת קבצים"
    borderColor="#888" 
    borderWidth="4px"
    textColor="#fff" 
    borderRadius="2.5rem" 
  />
</div>

// Note: The SimpleDropzone component accepts the following props:
// - onFilesAdded: (files: File[]) => void (required) - Callback function that is triggered when files are added, receiving an array of File objects.
// - activeInscription: string (optional) - Inscription displayed when files are dragged over the dropzone (default: "Drop the files here...").
// - defaultInscription: string (optional) - Inscription displayed when the dropzone is not active (default: "Drag & drop files here, or click to select files").
// - borderColor: string (optional) - Color of the border around the dropzone (default: '#e1e1e1').
// - textColor: string (optional) - Color of the text inside the dropzone (default: '#eee').
// - borderRadius: string (optional) - Border radius for the dropzone (default: '0.5em').
// - borderWidth: string (optional) - Width of the border around the dropzone (default: '2px').
`,
code: [
  {
    filename: 'SimpleDropzone.tsx',
    content: `'use client'

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
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};
`
  },
],
  dependencies: 'npm install @tabler/icons-react --legacy-peer-deps',
  credit: (
    <span>
    </span>
  ),
}

export { metadata }