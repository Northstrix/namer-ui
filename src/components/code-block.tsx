"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

type CodeBlockProps = {
  filename: string;
  highlightLines?: number[];
} & (
  | { code: string; tabs?: never }
  | { code?: never; tabs: Array<{ name: string; code: string; filename: string; highlightLines?: number[] }> }
);

export const CodeBlock = ({ filename, code, highlightLines = [], tabs = [] }: CodeBlockProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const { toast } = useToast();
  const t = useTranslation();

  const tabsExist = tabs.length > 0;

  const getLanguage = (filename: string) => {
    const extension = filename.split(".").pop();
    switch (extension) {
      case "css":
        return "css";
      case "ts":
      case "tsx":
        return "typescript";
      default:
        return "tsx";
    }
  };

  const removeLastEmptyLine = (code: string) => {
    const lines = code.split("\n");
    if (lines.length > 1 && lines[lines.length - 1].trim() === "") {
      return lines.slice(0, -1).join("\n");
    }
    return code;
  };

  const activeCode = removeLastEmptyLine(tabsExist ? tabs[activeTab].code : code || "");
  const activeFilename = tabsExist ? tabs[activeTab].filename : filename;
  const activeLanguage = getLanguage(activeFilename);
  const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines;

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(activeCode)
        .then(() => {
          setCopied(true);
          toast({
            title: t("namer_ui"),
            description: t("toast_copy_success"),
          });
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          setCopied(false);
          toast({
            title: t("namer_ui"),
            description: t("toast_copy_error"),
          });
        });
    } else {
      toast({
        title: t("namer_ui"),
        description: t("toast_clipboard_unsupported"),
      });
    }
  };

  const customStyle = {
    margin: 0,
    padding: "1rem",
    background: "transparent",
    fontSize: "0.9rem",
    borderRadius: "0.5rem",
    overflow: "auto",
    fontFamily: "monospace",
  };

  const codeTagProps = { style: { fontFamily: "monospace" } };

  return (
    <div className="relative w-full rounded-lg bg-[#0a0a0a] border border-border font-mono text-sm">
      <div className="flex justify-between items-center px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground">{activeFilename}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? <Check size={16} /> : <Clipboard size={16} />}
        </button>
      </div>
      {tabsExist && (
        <div className="flex border-b border-border">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-xs transition-colors font-sans ${
                activeTab === index ? "text-white bg-muted" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}
      <SyntaxHighlighter
        language={activeLanguage}
        style={vscDarkPlus}
        customStyle={customStyle}
        codeTagProps={codeTagProps}
        wrapLines={true}
        showLineNumbers={true}
        lineNumberStyle={{ color: "hsl(var(--accent))", paddingRight: "1em" }}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber) ? "rgba(255, 255, 255, 0.05)" : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {activeCode}
      </SyntaxHighlighter>
    </div>
  );
};
