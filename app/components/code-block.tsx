"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        filename: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const getLanguage = (filename: string) => filename.endsWith('.css') ? 'css' : 'tsx';

  const removeLastEmptyLine = (code: string) => {
    const lines = code.split('\n');
    if (lines[lines.length - 1].trim() === '') {
      return lines.slice(0, -1).join('\n');
    }
    return code;
  };
  
  const activeCode = removeLastEmptyLine(tabsExist ? tabs[activeTab].code : code || '');
  
  const activeFilename = tabsExist ? tabs[activeTab].filename : filename;
  const activeLanguage = getLanguage(activeFilename);
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div className="relative w-full rounded-lg bg-[#080810] p-4 font-mono text-sm">
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={a11yDark}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "1rem", // text-sm equivalent
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
