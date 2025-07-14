'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "CustomCheckbox.tsx" file
import CustomCheckbox from '@/app/the-actual-components/custom-checkbox/CustomCheckbox'

const [customCheckboxCheckedLTR, setCustomCheckboxCheckedLTR] = useState(false);
const [customCheckboxCheckedRTL, setCustomCheckboxCheckedRTL] = useState(false);
const [customCheckboxCheckedAR, setCustomCheckboxCheckedAR] = useState(false);
const [customCheckboxCheckedNoOutline, setCustomCheckboxCheckedNoOutline] = useState(false);
const [customCheckboxCheckedFullRounding, setCustomCheckboxCheckedFullRounding] = useState(false);
const [customCheckboxCheckedNoRounding, setCustomCheckboxCheckedNoRounding] = useState(false);

// Disabled checkboxes
const [customCheckboxCheckedDisabled, setCustomCheckboxCheckedDisabled] = useState(false);
const [customCheckboxCheckedDisabledWhiteRed, setCustomCheckboxCheckedDisabledWhiteRed] = useState(false);

// LTR group
const [customCheckboxSelectedLTR, setCustomCheckboxSelectedLTR] = useState<string[]>([]);
const customCheckboxLTROptions = [
  { value: "next", label: "Next.js" },
  { value: "ts", label: "TypeScript" },
  { value: "namer", label: "Namer UI" }
];

// RTL group
const [customCheckboxSelectedRTL, setCustomCheckboxSelectedRTL] = useState<string[]>([]);
const customCheckboxRTLOptions = [
  { value: "midbar", label: "מדבר" },
  { value: "lakhash", label: "לחש" },
  { value: "blueberryloom", label: "בלוברי לום" }
];

// Max selection group
const [customCheckboxSelectedMax, setCustomCheckboxSelectedMax] = useState<string[]>([]);
const customCheckboxMaxOptions = [
  { value: "one", label: "1st" },
  { value: "two", label: "2nd" },
  { value: "three", label: "3rd" }
];

// 5-item group, only three can be selected
const [customCheckboxSelectedFive, setCustomCheckboxSelectedFive] = useState<string[]>([]);
const customCheckboxFiveOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" }
];

// Disabled per item group
const [customCheckboxSelectedDisabledGroup, setCustomCheckboxSelectedDisabledGroup] = useState<string[]>([]);
const customCheckboxDisabledGroupOptions = [
  { value: "a", label: "Enabled" },
  { value: "b", label: "Disabled", checkboxProps: { disabled: true } },
  { value: "c", label: "Enabled" }
];

<div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-col gap-10 items-center justify-center relative">
  <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", width: "100%", justifyContent: "center" }}>
    {/* Checkbox group LTR (horizontal) */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Checkbox group (LTR, horizontal)</div>
      <CustomCheckbox
        options={customCheckboxLTROptions}
        values={customCheckboxSelectedLTR}
        onGroupChange={setCustomCheckboxSelectedLTR}
        direction="ltr"
        groupGap={18}
        groupDirection="row"
      />
      <div style={{ color: "#aaa", margin: "40px 0 10px 0", fontSize: 15 }}>Checkbox group (LTR, vertical)</div>
      <CustomCheckbox
        options={customCheckboxLTROptions}
        values={customCheckboxSelectedLTR}
        onGroupChange={setCustomCheckboxSelectedLTR}
        direction="ltr"
        groupGap={18}
        groupDirection="column"
      />
    </div>
    {/* Checkbox group RTL (Hebrew) */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Checkbox group (RTL, Hebrew, horizontal)</div>
      <CustomCheckbox
        options={customCheckboxRTLOptions}
        values={customCheckboxSelectedRTL}
        onGroupChange={setCustomCheckboxSelectedRTL}
        direction="rtl"
        groupGap={18}
        groupDirection="row"
      />
      <div style={{ color: "#aaa", margin: "40px 0 10px 0", fontSize: 15 }}>Checkbox group (RTL, Hebrew, vertical)</div>
      <CustomCheckbox
        options={customCheckboxRTLOptions}
        values={customCheckboxSelectedRTL}
        onGroupChange={setCustomCheckboxSelectedRTL}
        direction="rtl"
        groupGap={18}
        groupDirection="column"
      />
    </div>
    {/* Custom gap, background, text color, font size, max selection */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Custom gap, background, text color, font size, checkmark appearance duration 2s</div>
      <CustomCheckbox
        options={customCheckboxMaxOptions.map((opt) => ({
          ...opt,
          checkboxProps: {
            accentColor: "#fff",
            backgroundColor: "#7c3aed",
            borderColor: "#fff",
            outlineHoverColor: "#aaa",
            labelColor: "#7c3aed",
            labelFontSize: 22,
            checkmarkColor: "#333",
            borderRadius: 16,
            checkmarkDuration: 2,
            labelSpacing: 20,
          }
        }))}
        values={customCheckboxSelectedMax}
        onGroupChange={setCustomCheckboxSelectedMax}
        direction="ltr"
        groupGap={50}
        groupDirection="row"
      />
    </div>
    {/* 5-item group, only three can be selected */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>5-item group, only three can be selected</div>
      <CustomCheckbox
        options={customCheckboxFiveOptions}
        values={customCheckboxSelectedFive}
        onGroupChange={setCustomCheckboxSelectedFive}
        direction="ltr"
        groupGap={12}
        groupDirection="row"
        maxSelected={3}
      />
      <div style={{ color: "#aaa", margin: "18px 0 10px 0", fontSize: 15 }}>5-item group, vertical, only three can be selected</div>
      <CustomCheckbox
        options={customCheckboxFiveOptions}
        values={customCheckboxSelectedFive}
        onGroupChange={setCustomCheckboxSelectedFive}
        direction="ltr"
        groupGap={12}
        groupDirection="column"
        maxSelected={3}
      />
    </div>
    {/* Disabled per item group, vertical */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled per item in group (vertical)</div>
      <CustomCheckbox
        options={customCheckboxDisabledGroupOptions}
        values={customCheckboxSelectedDisabledGroup}
        onGroupChange={setCustomCheckboxSelectedDisabledGroup}
        direction="ltr"
        groupGap={12}
        groupDirection="column"
      />
    </div>
    {/* Disabled default */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled checkbox (default)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedDisabled}
        onChange={setCustomCheckboxCheckedDisabled}
        label="Disabled example"
        disabled
      />
    </div>
    {/* Disabled with white outline (red outline on hover) */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled checkbox with white outline (red outline on hover)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedDisabledWhiteRed}
        onChange={setCustomCheckboxCheckedDisabledWhiteRed}
        label="Disabled, white/red outline"
        disabled
        outlineColorDisabled="#fff"
        outlineHoverColorDisabled="#ff2800"
        disabledBackgroundColor="#2e2e2e"
        disabledBorderColor="#363636"
        disabledCheckmarkColor="#ff2800"
      />
    </div>
    {/* No outline */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>No outline (borderWidth = 0)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedNoOutline}
        onChange={setCustomCheckboxCheckedNoOutline}
        label="No outline"
        borderRadius={0}
        accentColor="#ff2800"
        borderColor="#ff2800"
        outlineHoverColor="#ff8400"
        backgroundColor="#232323"
        labelColor="#ff2800"
        labelFontSize={18}
        labelSpacing={12}
        checkmarkDuration={0.5}
        borderWidth={0}
      />
    </div>
    {/* 5px outline, full rounding */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>5px outline, full rounding</div>
      <CustomCheckbox
        checked={customCheckboxCheckedFullRounding}
        onChange={setCustomCheckboxCheckedFullRounding}
        label="5px outline"
        borderRadius={100}
        accentColor="#00bb3f"
        borderColor="#00bb3f"
        outlineHoverColor="#fff"
        backgroundColor="#232323"
        labelFontSize={18}
        labelSpacing={12}
        checkmarkDuration={0.7}
        borderWidth={5}
      />
    </div>
    {/* Default options, no rounding */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Default options, no rounding</div>
      <CustomCheckbox
        checked={customCheckboxCheckedNoRounding}
        onChange={setCustomCheckboxCheckedNoRounding}
        label="No rounding (borderRadius = 0)"
        borderRadius={0}
      />
    </div>
  </div>
  {/* Single checkboxes below all groups */}
  <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", alignItems: "center", marginTop: "32px" }}>
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (LTR)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedLTR}
        onChange={setCustomCheckboxCheckedLTR}
        label="I agree to the terms I never read and probably never will."
        direction="ltr"
        checkmarkDuration={0.4}
      />
    </div>
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (RTL, Hebrew)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedRTL}
        onChange={setCustomCheckboxCheckedRTL}
        label="אני מסכים לתנאים שמעולם לא קראתי וסביר להניח שלעולם לא אקרא."
        direction="rtl"
        accentColor="#7c3aed"
        labelFontSize={22}
        checkmarkDuration={0.6}
        labelSpacing={12}
      />
    </div>
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (RTL, Levantine Arabic, mirrored check, black checkmark)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedAR}
        onChange={setCustomCheckboxCheckedAR}
        label="أنا أوافق على الشروط التي لم أقرأها أبداً وربما لن أقرأها."
        direction="rtl"
        accentColor="#00bb3f"
        checkmarkColor="#050505"
        labelFontSize={18}
        checkmarkDuration={0.8}
        mirrorCheckmark
        labelSpacing={18}
      />
    </div>
  </div>
</div>

// Note: The CustomCheckbox component accepts the following props:

// --- Single Checkbox Props ---
// - checked: boolean (optional) - Whether the checkbox is checked (controlled).
// - onChange: (checked: boolean) => void (optional) - Callback when the checkbox is toggled.
// - label: React.ReactNode (optional) - The label/content shown next to the checkbox.
// - direction: "ltr" | "rtl" (optional) - Layout direction for checkbox and label (default: "ltr").
// - accentColor: string (optional) - Color used for the checked state and checkmark background (default: "#00a0d8").
// - checkmarkColor: string (optional) - Color of the checkmark SVG (default: "#fff").
// - backgroundColor: string (optional) - Checkbox background color (default: "#2e2e2e").
// - borderColor: string (optional) - Checkbox border color (default: "#363636").
// - borderRadius: number | string (optional) - Checkbox border radius (default: 8).
// - borderWidth: number | string (optional) - Checkbox border width (default: 2).
// - size: number (optional) - Checkbox size in px (default: 24).
// - labelColor: string (optional) - Label text color (default: "#fff").
// - labelFontSize: number | string (optional) - Label font size (default: 16).
// - labelSpacing: number (optional) - Gap between checkbox and label (default: 12).
// - disabled: boolean (optional) - If true, checkbox is disabled and not interactive.
// - style: React.CSSProperties (optional) - Additional styles for the label container.
// - className: string (optional) - Additional className for the label container.
// - checkmarkDuration: number (optional) - Duration in seconds for checkmark animation (default: 0.32).
// - mirrorCheckmark: boolean (optional) - If true, checkmark is mirrored horizontally.
// - checkedCoversOutline: boolean (optional) - If true, checked color covers the border (default: true).
// - outlineTransition: string (optional) - CSS transition for outline/border (default: "border-color 0.3s ease-in-out").
// - outlineHoverColor: string (optional) - Outline color on hover (default: "#494949").
// - outlineHoverColorDisabled: string (optional) - Outline color on hover when disabled (default: "#494949").
// - outlineColorDisabled: string (optional) - Outline color when disabled and not hovered (default: uses disabledBorderColor or borderColor).
// - borderStyle: string (optional) - CSS border style (default: "solid").
// - disabledBackgroundColor: string (optional) - Background color when disabled (default: uses backgroundColor).
// - disabledBorderColor: string (optional) - Border color when disabled (default: uses borderColor).
// - disabledCheckmarkColor: string (optional) - Checkmark color when disabled (default: uses checkmarkColor).

// --- Group Checkbox Props ---
// - options: { value: string; label: React.ReactNode; checkboxProps?: Partial<CustomCheckboxProps> }[] (optional)
//      - Array of options for group mode. Each option can override any CustomCheckboxProps.
// - values: string[] (optional) - Array of selected option values (controlled).
// - onGroupChange: (values: string[]) => void (optional) - Callback when group selection changes.
// - maxSelected: number (optional) - Maximum number of options that can be selected at once.
// - groupGap: number (optional) - Gap between checkboxes in a group (default: 18).
// - groupDirection: "row" | "column" (optional) - Layout direction for the group (default: "row").
`,
code: [
  {
    filename: 'CustomCheckbox.tsx',
    content: `"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  direction?: "ltr" | "rtl";
  accentColor?: string;
  checkmarkColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  size?: number;
  labelColor?: string;
  labelFontSize?: number | string;
  labelSpacing?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  checkmarkDuration?: number;
  mirrorCheckmark?: boolean;
  checkedCoversOutline?: boolean;
  outlineTransition?: string;
  outlineHoverColor?: string;
  outlineHoverColorDisabled?: string;
  outlineColorDisabled?: string; // <-- NEW PROP
  borderStyle?: string;
  disabledBackgroundColor?: string;
  disabledBorderColor?: string;
  disabledCheckmarkColor?: string;

  // Group
  options?: {
    value: string;
    label: React.ReactNode;
    checkboxProps?: Partial<CustomCheckboxProps>;
  }[];
  values?: string[];
  onGroupChange?: (values: string[]) => void;
  maxSelected?: number;
  groupGap?: number;
  groupDirection?: "row" | "column";
}

const DEFAULTS = {
  accentColor: "#00a0d8",
  checkmarkColor: "#fff",
  backgroundColor: "#2e2e2e",
  borderColor: "#363636",
  borderRadius: 8,
  borderWidth: 2,
  size: 24,
  labelColor: "#fff",
  labelFontSize: 16,
  labelSpacing: 12, // increased gap for clarity
  checkmarkDuration: 0.32,
  outlineTransition: "border-color 0.3s ease-in-out",
  outlineHoverColor: "#494949",
  outlineHoverColorDisabled: "#494949",
  outlineColorDisabled: undefined, // fallback to disabledBorderColor/borderColor
  borderStyle: "solid",
  disabledBackgroundColor: undefined, // fallback to backgroundColor
  disabledBorderColor: undefined,     // fallback to borderColor
  disabledCheckmarkColor: undefined,  // fallback to checkmarkColor
  groupGap: 18,
  groupDirection: "row" as "row" | "column",
};

const SingleCheckbox: React.FC<
  CustomCheckboxProps & { hovered?: boolean }
> = ({
  checked = false,
  label,
  direction = "ltr",
  accentColor = DEFAULTS.accentColor,
  checkmarkColor = DEFAULTS.checkmarkColor,
  backgroundColor = DEFAULTS.backgroundColor,
  borderColor = DEFAULTS.borderColor,
  borderRadius = DEFAULTS.borderRadius,
  borderWidth = DEFAULTS.borderWidth,
  size = DEFAULTS.size,
  labelColor = DEFAULTS.labelColor,
  labelFontSize = DEFAULTS.labelFontSize,
  labelSpacing = DEFAULTS.labelSpacing,
  disabled = false,
  checkmarkDuration = DEFAULTS.checkmarkDuration,
  mirrorCheckmark = false,
  checkedCoversOutline = true,
  outlineTransition = DEFAULTS.outlineTransition,
  outlineHoverColor = DEFAULTS.outlineHoverColor,
  outlineHoverColorDisabled = DEFAULTS.outlineHoverColorDisabled,
  outlineColorDisabled = DEFAULTS.outlineColorDisabled,
  borderStyle = DEFAULTS.borderStyle,
  disabledBackgroundColor,
  disabledBorderColor,
  disabledCheckmarkColor,
  hovered = false,
}) => {
  const flexDirection = direction === "rtl" ? "row-reverse" : "row";

  // Use fallback to normal colors if disabled colors are not provided
  const resolvedDisabledBackgroundColor = disabledBackgroundColor ?? backgroundColor;
  const resolvedDisabledBorderColor = disabledBorderColor ?? borderColor;
  const resolvedDisabledCheckmarkColor = disabledCheckmarkColor ?? checkmarkColor;
  const resolvedOutlineColorDisabled = outlineColorDisabled ?? resolvedDisabledBorderColor;

  // --- OUTLINE COLOR LOGIC ---
  let borderCol: string;
  if (disabled) {
    borderCol = hovered
      ? (outlineHoverColorDisabled ?? outlineHoverColor)
      : resolvedOutlineColorDisabled;
  } else {
    borderCol = checkedCoversOutline
      ? checked
        ? accentColor
        : hovered
        ? outlineHoverColor
        : borderColor
      : hovered
      ? outlineHoverColor
      : borderColor;
  }
  const border =
    borderWidth === 0 ? "none" : \`\${borderWidth}px \${borderStyle} \${borderCol}\`;

  // --- BACKGROUND COLOR LOGIC ---
  const boxBg = disabled
    ? resolvedDisabledBackgroundColor
    : checked
    ? checkedCoversOutline
      ? accentColor
      : \`linear-gradient(\${accentColor} 0 0) padding-box, \${backgroundColor} border-box\`
    : backgroundColor;

  // --- CHECKBOX RENDER ---
  const checkboxEl = (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: boxBg,
        border,
        borderRadius:
          typeof borderRadius === "number"
            ? \`\${borderRadius}px\`
            : borderRadius,
        transition: \`background 0.18s, \${outlineTransition}\`,
        position: "relative",
        boxSizing: "border-box",
        flexShrink: 0,
        outline: "none",
        pointerEvents: "none", // label handles all clicks
        opacity: 1,
      }}
      tabIndex={-1}
      role="presentation"
      aria-hidden="true"
    >
      <motion.svg
        width={size * 0.75}
        height={size * 0.75}
        viewBox="0 0 24 24"
        stroke={disabled ? resolvedDisabledCheckmarkColor : checkmarkColor}
        strokeWidth={3}
        fill="none"
        style={{
          display: "block",
          pointerEvents: "none",
          transform: mirrorCheckmark ? "scaleX(-1)" : "none",
        }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            checked
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: checkmarkDuration,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </motion.svg>
      {hovered && (
        // Overlay appears only on hover
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius:
              typeof borderRadius === "number"
                ? \`\${borderRadius}px\`
                : borderRadius,
            background: "rgba(24,24,27,0.18)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      )}
    </span>
  );

  const labelEl =
    label && (
      <span
        style={{
          color: labelColor,
          fontSize: labelFontSize,
          lineHeight: 1.5,
          whiteSpace: "pre-line",
          direction,
          textAlign: direction === "rtl" ? "right" : "left",
          cursor: disabled ? "not-allowed" : "pointer",
          userSelect: "text",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {label}
      </span>
    );

  const children = direction === "rtl" ? [labelEl, checkboxEl] : [checkboxEl, labelEl];
  return (
    <span
      dir={direction}
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection,
        gap: labelSpacing,
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "text",
        opacity: disabled ? 0.5 : 1,
        position: "relative",
      }}
      tabIndex={-1}
      role="presentation"
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  // GROUP MODE
  if (props.options && props.values && props.onGroupChange) {
    const {
      options,
      values,
      onGroupChange,
      direction = "ltr",
      maxSelected,
      groupGap = DEFAULTS.groupGap,
      groupDirection = DEFAULTS.groupDirection,
    } = props;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // For vertical layout and RTL, align items to the right
    const isVertical = groupDirection === "column";
    const isRTL = direction === "rtl";
    const groupAlignItems = isVertical && isRTL ? "flex-end" : "flex-start";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: groupDirection,
          gap: groupGap,
          alignItems: groupAlignItems,
        }}
      >
        {options.map((opt, idx) => {
          const isChecked = values.includes(opt.value);
          // Only disable if not checked and maxSelected reached
          const isDisabled =
            !!opt.checkboxProps?.disabled ||
            (!isChecked &&
              typeof maxSelected === "number" &&
              values.length >= maxSelected);

          return (
            <label
              key={opt.value}
              dir={direction}
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexDirection: direction === "rtl" ? "row-reverse" : "row",
                gap: opt.checkboxProps?.labelSpacing ?? DEFAULTS.labelSpacing,
                cursor: isDisabled ? "not-allowed" : "pointer",
                userSelect: "text",
                opacity: isDisabled ? 0.5 : 1,
                position: "relative",
              }}
              tabIndex={isDisabled ? -1 : 0}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={e => {
                if (!isDisabled) {
                  e.preventDefault();
                  if (isChecked) {
                    onGroupChange(values.filter(v => v !== opt.value));
                  } else {
                    onGroupChange([...values, opt.value]);
                  }
                }
              }}
              onKeyDown={e => {
                if ((e.key === " " || e.key === "Enter") && !isDisabled) {
                  e.preventDefault();
                  if (isChecked) {
                    onGroupChange(values.filter(v => v !== opt.value));
                  } else {
                    onGroupChange([...values, opt.value]);
                  }
                }
              }}
              role="checkbox"
              aria-checked={isChecked}
              aria-disabled={isDisabled}
            >
              <SingleCheckbox
                {...opt.checkboxProps}
                checked={isChecked}
                disabled={isDisabled}
                direction={direction}
                label={opt.label}
                hovered={hoveredIndex === idx}
              />
            </label>
          );
        })}
      </div>
    );
  }

  // SINGLE MODE
  const [hovered, setHovered] = useState(false);

  return (
    <label
      dir={props.direction ?? "ltr"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection: props.direction === "rtl" ? "row-reverse" : "row",
        gap: props.labelSpacing ?? DEFAULTS.labelSpacing,
        cursor: props.disabled ? "not-allowed" : "pointer",
        userSelect: "text",
        opacity: props.disabled ? 0.5 : 1,
        position: "relative",
        ...props.style,
      }}
      className={props.className}
      tabIndex={props.disabled ? -1 : 0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={e => {
        if (!props.disabled && props.onChange) {
          e.preventDefault();
          props.onChange(!props.checked);
        }
      }}
      onKeyDown={e => {
        if (
          (e.key === " " || e.key === "Enter") &&
          !props.disabled &&
          props.onChange
        ) {
          e.preventDefault();
          props.onChange(!props.checked);
        }
      }}
      role="checkbox"
      aria-checked={props.checked}
      aria-disabled={props.disabled}
    >
      <SingleCheckbox {...props} hovered={hovered} />
    </label>
  );
};

export default CustomCheckbox;
`
  },
],
  dependencies: 'npm install framer-motion',
  credit: (
    <span>
      <a href="https://21st.dev/Edil-ozi/custom-checkbox/default" target="_blank" rel="noopener noreferrer" className="link">Custom Checkbox</a> by <a href="https://21st.dev/Edil-ozi" target="_blank" rel="noopener noreferrer" className="link">Edil Ozi</a>
      <br/>
      <a href="https://codepen.io/ash_creator/pen/JjZReNm" target="_blank" rel="noopener noreferrer" className="link">チェックしないと押せないボタン</a> by <a href="https://codepen.io/ash_creator" target="_blank" rel="noopener noreferrer" className="link">あしざわ - Webクリエイター</a>
    </span>
  ),
}

export { metadata }