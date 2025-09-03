"use client";

import { useState } from "react";
import CustomCheckbox from "@/app/the-actual-components/custom-checkbox/CustomCheckbox";
import useIsRTL from "@/hooks/useIsRTL";
import { useTranslation } from "@/context/app-context";

export default function CustomCheckboxPreview() {
  const [checked, setChecked] = useState(true); // ✅ default checked
  const isRTL = useIsRTL();
  const t = useTranslation();

  return (
    <div className="flex items-center justify-center scale-[2] w-full h-screen bg-[#fff]">
      <CustomCheckbox
        checked={checked}
        onChange={setChecked}
        label={t("namer_ui")}
        direction={isRTL ? "rtl" : "ltr"} // ✅ hook used properly
        accentColor="#00a7fa"
        checkmarkColor="#fff"
        backgroundColor="#232323"
        borderColor="#00a7fa"
        borderRadius={8}
        size={28}
        labelColor="#0a0a0a"
        labelFontWeight="700"
        checkmarkDuration={0.4}
      />
    </div>
  );
}
