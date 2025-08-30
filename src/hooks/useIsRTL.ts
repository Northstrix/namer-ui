"use client";

import { useMemo } from "react";
import { useApp } from "@/context/app-context";

/**
 * Custom hook that determines if the current language is Right-To-Left (RTL).
 * It does NOT apply any DOM modifications — only returns true/false.
 *
 * @returns {boolean} true if RTL, false if LTR
 */
export default function useIsRTL(): boolean {
  const { lang } = useApp();

  return useMemo(() => {
    // Expandable: add more RTL languages here if needed
    const rtlLanguages = ["he", "ar", "fa", "ur"];
    return rtlLanguages.includes(lang);
  }, [lang]);
}
