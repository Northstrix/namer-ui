"use client";

import { FishyButton } from "@/app/the-actual-components/fishy-button/FishyButton";

export default function FishyButtonPreview() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#fff]" style={{ transform: "scale(1.2)" }}>
      <FishyButton
        type="button"
        className="button--2"
        borderRadius="50px"
        fishSpeed="2.6s"
      >
        פישי
      </FishyButton>
    </div>
  );
}
