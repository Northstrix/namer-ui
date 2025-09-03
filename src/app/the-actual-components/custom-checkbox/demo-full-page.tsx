"use client";

import { useState } from "react";
import CustomCheckbox from "@/app/the-actual-components/custom-checkbox/CustomCheckbox";

export default function CustomCheckboxDemo() {
  // ---------- State for single checkboxes ----------
  const [customCheckboxCheckedLTR, setCustomCheckboxCheckedLTR] = useState(false);
  const [customCheckboxCheckedRTL, setCustomCheckboxCheckedRTL] = useState(false);
  const [customCheckboxCheckedAR, setCustomCheckboxCheckedAR] = useState(false);
  const [customCheckboxCheckedNoOutline, setCustomCheckboxCheckedNoOutline] = useState(false);
  const [customCheckboxCheckedFullRounding, setCustomCheckboxCheckedFullRounding] = useState(false);
  const [customCheckboxCheckedNoRounding, setCustomCheckboxCheckedNoRounding] = useState(false);

  // Disabled checkboxes
  const [customCheckboxCheckedDisabled, setCustomCheckboxCheckedDisabled] = useState(false);
  const [customCheckboxCheckedDisabledWhiteRed, setCustomCheckboxCheckedDisabledWhiteRed] = useState(false);

  // ---------- Groups ----------
  const [customCheckboxSelectedLTR, setCustomCheckboxSelectedLTR] = useState<string[]>([]);
  const customCheckboxLTROptions = [
    { value: "next", label: "Next.js" },
    { value: "ts", label: "TypeScript" },
    { value: "namer", label: "Namer UI" }
  ];

  const [customCheckboxSelectedRTL, setCustomCheckboxSelectedRTL] = useState<string[]>([]);
  const customCheckboxRTLOptions = [
    { value: "midbar", label: "מדבר" },
    { value: "lakhash", label: "לחש" },
    { value: "blueberryloom", label: "בלוברי לום" }
  ];

  const [customCheckboxSelectedMax, setCustomCheckboxSelectedMax] = useState<string[]>([]);
  const customCheckboxMaxOptions = [
    { value: "one", label: "1st" },
    { value: "two", label: "2nd" },
    { value: "three", label: "3rd" }
  ];

  const [customCheckboxSelectedFive, setCustomCheckboxSelectedFive] = useState<string[]>([]);
  const customCheckboxFiveOptions = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
    { value: "five", label: "Five" }
  ];

  const [customCheckboxSelectedDisabledGroup, setCustomCheckboxSelectedDisabledGroup] = useState<string[]>([]);
  const customCheckboxDisabledGroupOptions = [
    { value: "a", label: "Enabled" },
    { value: "b", label: "Disabled", checkboxProps: { disabled: true } },
    { value: "c", label: "Enabled" }
  ];

  return (
    <div className="flex flex-col gap-10 items-center justify-center relative">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* ---------- Checkbox Groups ---------- */}
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
          <div style={{direction: "ltr"}}>
            <div style={{ color: "#aaa", margin: "40px 0 10px", fontSize: 15 }}>Checkbox group (LTR, vertical)</div>
            <CustomCheckbox
              options={customCheckboxLTROptions}
              values={customCheckboxSelectedLTR}
              onGroupChange={setCustomCheckboxSelectedLTR}
              direction="ltr"
              groupGap={18}
              groupDirection="column"
            />
          </div>
        </div>

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
          <div style={{direction: "ltr"}}>
            <div style={{ color: "#aaa", margin: "40px 0 10px", fontSize: 15 }}>Checkbox group (RTL, Hebrew, vertical)</div>
            <CustomCheckbox
              options={customCheckboxRTLOptions}
              values={customCheckboxSelectedRTL}
              onGroupChange={setCustomCheckboxSelectedRTL}
              direction="rtl"
              groupGap={18}
              groupDirection="column"
            />
          </div>
        </div>

        <div style={{ minWidth: 260 }}>
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Custom gap, background, text color, font size, font weight, checkmark appearance duration 2s</div>
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
                labelFontWeight: 800,
                checkmarkColor: "#333",
                borderRadius: 16,
                checkmarkDuration: 2,
                labelSpacing: 20,
              },
            }))}
            values={customCheckboxSelectedMax}
            onGroupChange={setCustomCheckboxSelectedMax}
            direction="ltr"
            groupGap={50}
            groupDirection="row"
          />
        </div>

        <div style={{ minWidth: 260 }}>
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>5-item group, max 3</div>
          <CustomCheckbox
            options={customCheckboxFiveOptions}
            values={customCheckboxSelectedFive}
            onGroupChange={setCustomCheckboxSelectedFive}
            direction="ltr"
            groupGap={12}
            groupDirection="row"
            maxSelected={3}
          />
          <div style={{ color: "#aaa", margin: "18px 0 10px", fontSize: 15 }}>Vertical version</div>
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

        <div style={{ minWidth: 260 }}>
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled item in group</div>
          <CustomCheckbox
            options={customCheckboxDisabledGroupOptions}
            values={customCheckboxSelectedDisabledGroup}
            onGroupChange={setCustomCheckboxSelectedDisabledGroup}
            direction="ltr"
            groupGap={12}
            groupDirection="column"
          />
        </div>

        {/* Disabled */}
        <div style={{ minWidth: 260 }}>
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled (default)</div>
          <CustomCheckbox
            checked={customCheckboxCheckedDisabled}
            onChange={setCustomCheckboxCheckedDisabled}
            label="Disabled example"
            disabled
          />
        </div>
        <div style={{ minWidth: 260 }}>
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled with white/red outline</div>
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
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>No outline</div>
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

        {/* 5px outline */}
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

        {/* No rounding */}
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

      {/* ---------- Single Demos ---------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          alignItems: "center",
          marginTop: "32px",
        }}
      >
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
          <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (RTL, Arabic, mirrored)</div>
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
  );
}
