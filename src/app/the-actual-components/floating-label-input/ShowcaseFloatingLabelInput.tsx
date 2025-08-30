"use client";
import React, { useState, useEffect, useMemo, CSSProperties } from "react";

type FloatingLabelInputProps = {
  label: string;
  value: string;
  onValueChange: (val: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  textarea?: boolean;
  isRTL?: boolean;
  accentColor?: string;
  textareaHeight?: string;
  parentBackground?: string;
  inputOutlineColor?: string;
  inputFocusOutlineColor?: string;
  outlineWidth?: string;
  foregroundColor?: string;
  mutedForegroundColor?: string;
  rounding?: string;
  inputPadding?: string;
  inputFontSize?: string;
  labelFontSize?: string;
  labelActiveFontSize?: string;
  labelPadding?: string;
  labelActivePadding?: string;
  inputHeight?: string;
};

function detectRTL(text: string) {
  return /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(text);
}

function detectLabelDir(text: string) {
  return detectRTL(text) ? "rtl" : "ltr";
}

export default function FloatingLabelInput({
  label,
  value,
  onValueChange,
  type = "text",
  autoComplete = "off",
  required = false,
  disabled = false,
  textarea = false,
  isRTL,
  accentColor = "#00a0d8",
  textareaHeight = "152px",
  parentBackground = "#060507",
  inputOutlineColor = "#909090",
  inputFocusOutlineColor = "#fff",
  outlineWidth = "1.5px",
  foregroundColor = "#fff",
  mutedForegroundColor = "#aaa",
  rounding = "8px",
  inputPadding = "17px",
  inputFontSize = "1.025rem",
  labelFontSize = "1.025rem",
  labelActiveFontSize = "12px",
  labelPadding = "0 7px",
  labelActivePadding = "0 6px",
  inputHeight = "49px",
}: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false);
  const [rtlInput, setRtlInput] = useState<boolean>(isRTL ?? false);

  useEffect(() => {
    if (!value) {
      setRtlInput(isRTL ?? false);
    } else {
      setRtlInput(detectRTL(value));
    }
  }, [value, isRTL]);

  const labelDir = useMemo(() => detectLabelDir(label), [label]);

  const styleVars = useMemo<CSSProperties>(
    () => ({
      "--accent-color": accentColor,
      "--mobile-form-input-bg": parentBackground,
      "--input-outline": inputOutlineColor,
      "--input-outline-focus": inputFocusOutlineColor,
      "--input-outline-width": outlineWidth,
      "--foreground": foregroundColor,
      "--muted-foreground": mutedForegroundColor,
      "--parent-background": parentBackground,
      "--general-rounding": rounding,
      "--floating-input-layout-text-area-height": textareaHeight,
      "--input-padding": inputPadding,
      "--input-font-size": inputFontSize,
      "--label-font-size": labelFontSize,
      "--label-active-font-size": labelActiveFontSize,
      "--label-padding": labelPadding,
      "--label-active-padding": labelActivePadding,
      "--input-height": inputHeight,
    }),
    [
      accentColor,
      parentBackground,
      inputOutlineColor,
      inputFocusOutlineColor,
      outlineWidth,
      foregroundColor,
      mutedForegroundColor,
      rounding,
      textareaHeight,
      inputPadding,
      inputFontSize,
      labelFontSize,
      labelActiveFontSize,
      labelPadding,
      labelActivePadding,
      inputHeight,
    ]
  );

  return (
    <div
      className={[
        "mobile-form-group",
        rtlInput ? "rtl" : "",
        focused ? "active" : "",
        textarea ? "textarea" : "",
      ].join(" ")}
      style={styleVars}
    >
      {textarea ? (
        <textarea
          className="mobile-form-input"
          required={required}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoComplete={autoComplete}
          disabled={disabled}
          dir={rtlInput ? "rtl" : "ltr"}
          spellCheck={false}
          style={{ height: textareaHeight }}
        />
      ) : (
        <input
          className="mobile-form-input"
          type={type}
          required={required}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoComplete={autoComplete}
          disabled={disabled}
          dir={rtlInput ? "rtl" : "ltr"}
          spellCheck={false}
        />
      )}

      <label
        className={["mobile-form-label", textarea ? "label-textarea" : ""].join(
          " "
        )}
        dir={labelDir}
      >
        {label}
      </label>

      {/* Scoped styles */}
      <style jsx>{`
        .mobile-form-group {
          position: relative;
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 22px;
        }
        .mobile-form-group:last-child {
          margin-bottom: 0;
        }
        .mobile-form-input {
          width: 100%;
          height: var(--input-height);
          padding: var(--input-padding);
          font-size: var(--input-font-size);
          font-weight: 400;
          color: var(--foreground);
          background: var(--mobile-form-input-bg);
          border: var(--input-outline-width) solid var(--input-outline);
          border-radius: var(--general-rounding);
          outline: none;
          box-sizing: border-box;
          text-align: left;
          transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
            background 0.3s ease-in-out;
          resize: none;
          line-height: 1.4;
        }
        .mobile-form-input:focus {
          border-color: var(--input-outline-focus);
        }
        .mobile-form-input:disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .mobile-form-group.rtl .mobile-form-input {
          direction: rtl;
          text-align: right;
        }
        .mobile-form-group.textarea .mobile-form-input {
          height: var(--floating-input-layout-text-area-height);
          overflow-y: auto;
        }
        .mobile-form-label {
          position: absolute;
          left: 11px;
          transform: translateY(-50%);
          color: var(--accent-color);
          font-size: var(--label-active-font-size);
          font-weight: 600;
          pointer-events: none;
          background: var(--parent-background);
          padding: var(--label-active-padding);
          transition: color 0.3s ease-in-out;
          z-index: 2;
          max-width: calc(100% - 26px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mobile-form-group.rtl .mobile-form-label {
          right: 12px;
          left: auto;
          text-align: right;
        }
        .mobile-form-group.textarea .mobile-form-label {
          left: 12px;
          right: auto;
          padding: var(--label-active-padding);
        }
        .mobile-form-group.textarea.rtl .mobile-form-label {
          right: 12px;
          left: auto;
        }
        .mobile-form-group:hover .mobile-form-input {
          border-color: #2e2b36;
        }
      `}</style>
    </div>
  );
}
