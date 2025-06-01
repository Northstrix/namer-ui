'use client'
import React, { useMemo } from 'react'

type CodeBlockProps = {
  code: string
  filename: string
  codePadding?: string // e.g. "18px 18px 0 62px"
  lineNumberXShift?: string // e.g. "6px"
  filenameColor?: string // e.g. "#fff"
  backgroundColor?: string // e.g. "#17161c"
  borderColor?: string // e.g. "#312f3b"
  borderWidth?: string // e.g. "1px"
  rootBorderRadius?: string // e.g. "8px"
  rootPadding?: string // e.g. "10px 8px 20px 8px"
  lineNumberColor?: string // e.g. "#999"
  codeTextColor?: string // e.g. "#d4d4d4"
  fontFamily?: string // e.g. "'Roboto Mono', monospace"
  codeTextSize?: string // e.g. "1rem" (applies to code and line numbers)
  titleFontSize?: string // e.g. "1.125rem"
  codeLineHeight?: string // e.g. "1.5rem"
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default function CodeBlock({
  code,
  filename,
  codePadding = '16px 16px 16px 64px',
  lineNumberXShift = '0px',
  filenameColor = '#fff',
  backgroundColor = '#17161c',
  borderColor = '#312f3b',
  borderWidth = '1px',
  rootBorderRadius = '8px',
  rootPadding = '10px 8px 20px 8px',
  lineNumberColor = '#999',
  codeTextColor = '#d4d4d4',
  fontFamily = "'Roboto Mono', monospace",
  codeTextSize = '1rem',
  titleFontSize = '1.125rem',
  codeLineHeight = '1.5rem',
}: CodeBlockProps) {
  const codeLines = useMemo(() => {
    const lines = code.split('\n')
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
      lines.pop()
    }
    return lines
  }, [code])

  const plainCode = useMemo(() => {
    return codeLines.map(line => escapeHtml(line) || '&nbsp;').join('\n')
  }, [codeLines])

  return (
    <div
      className="codeblock-root"
      style={{
        background: backgroundColor,
        borderColor,
        borderRadius: rootBorderRadius,
        borderWidth,
        borderStyle: 'solid',
        padding: rootPadding,
        fontFamily,
      }}
    >
      {filename && (
        <div
          className="codeblock-header"
          style={{
            color: filenameColor,
            zIndex: 3,
            fontSize: titleFontSize,
          }}
        >
          <span
            className="codeblock-filename"
            style={{ color: filenameColor, fontSize: titleFontSize }}
          >
            {filename}
          </span>
        </div>
      )}
      <div className="codeblock-wrapper">
        <div
          className="codeblock-linenumbers-bg"
          style={{
            width: `calc(${lineNumberXShift} + 48px)`,
            background: backgroundColor,
          }}
        />
        <div
          className="codeblock-linenumbers"
          aria-hidden="true"
          style={{
            color: lineNumberColor,
            transform: `translateX(${lineNumberXShift})`,
            background: backgroundColor,
            zIndex: 2,
            fontSize: codeTextSize,
            lineHeight: codeLineHeight,
            fontFamily,
          }}
        >
          {codeLines.map((_, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="codeblock-scrollarea">
          <pre
            className="codeblock-pre"
            style={{
              background: backgroundColor,
              color: codeTextColor,
              padding: codePadding,
              marginRight: '16px',
              fontSize: codeTextSize,
              lineHeight: codeLineHeight,
              fontFamily,
            }}
          >
            <code dangerouslySetInnerHTML={{ __html: plainCode }} />
          </pre>
        </div>
      </div>
      <style jsx>{`
        .codeblock-root {
          width: 100%;
          box-sizing: border-box;
          overflow-x: auto;
          overflow-y: hidden;
          max-width: 100%;
          position: relative;
        }
        .codeblock-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8px 22px;
        }
        .codeblock-filename {
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .codeblock-wrapper {
          display: flex;
          position: relative;
          width: 100%;
        }
        .codeblock-linenumbers-bg {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }
        .codeblock-linenumbers {
          user-select: none;
          pointer-events: none;
          text-align: right;
          padding: 16px 12px 16px 0;
          min-width: 48px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          overflow: hidden;
        }
        .codeblock-scrollarea {
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
        }
        .codeblock-pre {
          margin: 0;
          border-radius: 0 0 10px 10px;
          overflow-x: hidden;
          overflow-y: hidden;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
        }
        .codeblock-pre code {
          display: block;
          white-space: pre;
          position: relative;
        }
      `}</style>
    </div>
  )
}
