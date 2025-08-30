"use client";
import React from "react";

export default function FallbackDemo() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/logo.png"
        alt="Fallback Logo"
        width={92}
        height={92}
        style={{ display: "block" }}
      />
    </div>
  );
}
