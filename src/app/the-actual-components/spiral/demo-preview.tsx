"use client";

import React from "react";
import Spiral from "@/app/the-actual-components/spiral/Spiral";

export default function SpiralPreviewDemo() {


  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#fff]">
        <div
            className="flex items-center justify-center max-w-[400px] aspect-square cursor-pointer"
        >
            <Spiral
            spiralColor="0, 167, 250"
            defaultDistortion={1}
            hoverDistortion={4.4}
            clickDistortion={5}
            strokeWidth={2.84}
            />
        </div>
    </div>
  );
}