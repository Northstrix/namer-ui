"use client";

import React, { useState } from "react";
import ShowcaseFloatingLabelInput from "./ShowcaseFloatingLabelInput";

export default function ShowcaseFloatingLabelInputPreview() {
  const [username, setUsername] = useState("");

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#fff]">
      <div className="w-[260px] max-w-full">
        <ShowcaseFloatingLabelInput
          value={username}
          onValueChange={setUsername}
          label="Username"
          parentBackground="#fff"
          inputOutlineColor="#919191"
          inputFocusOutlineColor="#2e2b36"
          outlineWidth="3px"
          foregroundColor="#333"
          mutedForegroundColor="#888"
          rounding="8px"
          inputPadding="14px 16px"
          inputFontSize="1.125rem"
          labelFontSize="1rem"
          labelActiveFontSize="15px"
          labelPadding="0 8px"
          labelActivePadding="0 7px"
        />
      </div>
    </div>
  );
}
