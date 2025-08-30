"use client";

import React, { useEffect, useState, useCallback } from "react";
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker";
import "@ncdai/react-wheel-picker/style.css";
import ChronicleButton from "@/app/the-actual-components/refined-chronicle-button/RefinedChronicleButton";
import { AnimatePresence, motion } from "framer-motion";
import { ModalOverlay } from "./modal-overlay";
import { useApp } from "@/context/app-context";

export interface LanguageSelectorHandle {
  open: () => void;
  close: () => void;
}

interface LanguageSelectorProps {
  onClose?: () => void;
}

const ANIMATION_DURATION = 0.3;

// Hardcoded languages with per-language Apply button text and styling vars
const LANGUAGES = [
  { code: "en", label: "English", applyText: "Apply" },
  { code: "he", label: "עברית", applyText: "החל" },
  { code: "es", label: "Español", applyText: "Aplicar" },
];

// CSS variables for backgrounds
// --language-selector-list-bg: for the wheel picker background area
// --language-selector-center-line-bg: for the highlight center line

function WheelPicker({
  classNames,
  ...props
}: React.ComponentProps<typeof WheelPickerPrimitive.WheelPicker>) {
  return (
    <WheelPickerPrimitive.WheelPicker
      classNames={{
        optionItem: "text-muted-foreground",
        highlightWrapper:
          "bg-[var(--language-selector-center-line-bg,#39bdff)] text-[hsl(var(--accent-foreground))]",
        ...classNames,
      }}
      {...props}
    />
  );
}

export const LanguageSelector = React.forwardRef<
  LanguageSelectorHandle,
  LanguageSelectorProps
>(function LanguageSelector({ onClose }, ref) {
  const { lang, setLang } = useApp();
  const [open, setOpen] = useState(false);
  const [tempSelectedValue, setTempSelectedValue] = useState(lang);

  React.useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  useEffect(() => {
    setTempSelectedValue(lang);
  }, [lang]);

  const handleValueChange = useCallback((value: string) => {
    setTempSelectedValue(value);
  }, []);

  const handleApply = async () => {
    if (tempSelectedValue !== lang) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setLang(tempSelectedValue);
    }
    setOpen(false);
    onClose?.();
  };

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  // Get apply button text for selected language or fallback English
  const applyButtonText =
    LANGUAGES.find((l) => l.code === tempSelectedValue)?.applyText || "Apply";

  const options = LANGUAGES.map((l) => ({
    label: l.label,
    value: l.code,
  }));

  return (
    <AnimatePresence>
      {open && (
        <ModalOverlay onClose={handleClose}>
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-lg shadow-xl p-4 md:p-6 min-w-[240px] max-w-[90vw] border flex flex-col items-center outline-none"
            style={{
              backgroundColor: `hsl(var(--background))`,
              borderColor: `hsl(var(--border))`,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="w-full rounded-md mb-4 md:mb-7 overflow-hidden flex justify-center"
              style={{
                backgroundColor: "var(--language-selector-list-bg, hsl(var(--card), 0.95))",
                border: `1px solid hsl(var(--border))`,
              }}
            >
              <WheelPicker
                options={options}
                value={tempSelectedValue}
                onValueChange={handleValueChange}
              />
            </div>

            <ChronicleButton
              onClick={handleApply}
              className="w-full"
              variant="default"
              backgroundColor="hsl(var(--foreground))"
              hoverBackgroundColor="hsl(var(--accent))"
              textColor="hsl(var(--background))"
              hoverTextColor="hsl(var(--foreground))"
              borderVisible={false}
              borderRadius="var(--radius)"
              fontWeight={600}
            >
              {applyButtonText}
            </ChronicleButton>
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
});
