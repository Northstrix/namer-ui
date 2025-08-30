"use client";

import React, { useState } from 'react';
import { RadioGroup } from "@/components/ui/radio-group-custom";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent } from "@/components/card/card";
import { useTranslation } from "@/context/app-context";
import { cn } from '@/lib/utils';
import useIsRTL from '@/hooks/useIsRTL';

interface ComponentPreviewProps {
  demo: React.ReactNode;
  componentCode: string;
  componentCodeFilename: string;
  noPadding?: boolean;
}

// Original Clapperboard SVG component
const ClapperboardSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-clapperboard-icon lucide-clapperboard"
  >
    <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
    <path d="m6.2 5.3 3.1 3.9" />
    <path d="m12.4 3.4 3.1 4" />
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  </svg>
);

// Horizontally mirrored Clapperboard SVG component
const ClapperboardSVGMirrored = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: "scaleX(-1)" }}
    className="lucide lucide-clapperboard-icon lucide-clapperboard"
  >
    <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
    <path d="m6.2 5.3 3.1 3.9" />
    <path d="m12.4 3.4 3.1 4" />
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  </svg>
);

// Original FileCode SVG component
const FileCodeSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-file-code-icon lucide-file-code"
  >
    <path d="M10 12.5 8 15l2 2.5" />
    <path d="m14 12.5 2 2.5-2 2.5" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
  </svg>
);

// Horizontally mirrored FileCode SVG component
const FileCodeSVGMirrored = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: "scaleX(-1)" }}
    className="lucide lucide-file-code-icon lucide-file-code"
  >
    <path d="M10 12.5 8 15l2 2.5" />
    <path d="m14 12.5 2 2.5-2 2.5" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
  </svg>
);

interface ComponentPreviewProps {
  demo: React.ReactNode;
  componentCode: string;
  componentCodeFilename: string;
  noPadding?: boolean;
}

export function ComponentPreview({ 
  demo, 
  componentCode,
  componentCodeFilename,
  noPadding = false,
}: ComponentPreviewProps) {
  const t = useTranslation();
  const [activeTab, setActiveTab] = useState('preview');
  const isRTL = useIsRTL();

  const options = [
    { value: 'preview', label: t('preview'), icon: isRTL ? ClapperboardSVGMirrored : ClapperboardSVG },
    { value: 'code', label: t('code'), icon: isRTL ? FileCodeSVGMirrored : FileCodeSVG },
  ];

  return (
    <div className="w-full space-y-4">
      <RadioGroup
        options={options}
        value={activeTab}
        onChange={setActiveTab}
      />
      
      <div>
        {activeTab === 'preview' && (
          <Card className={cn("border-dashed overflow-hidden", noPadding && "p-0")}>
            <CardContent className={cn(
              "flex items-center justify-center min-h-[300px]",
              !noPadding && "p-8",
              noPadding && "p-0"
            )}>
              {demo}
            </CardContent>
          </Card>
        )}
        {activeTab === 'code' && (
          <CodeBlock code={componentCode} filename={componentCodeFilename} />
        )}
      </div>
    </div>
  );
}
