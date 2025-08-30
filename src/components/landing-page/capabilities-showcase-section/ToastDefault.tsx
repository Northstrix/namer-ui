"use client";

import React, { useEffect } from "react";

const HELP_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-question"> <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/> <path d="M12 17h.01"/> </svg>`;

const CLOSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon"> <path d="M18 6 6 18"/> <path d="m6 6 12 12"/> </svg>`;

interface ToastDefaultProps {
  title?: string;
  content?: string;
  isRTL?: boolean;
  bodyBorderRadius?: string;
  typeIconContainerBorderRadius?: string;
  closeIconBorderRadius?: string;
}

export default function ToastDefault({
  title = "Need some help?",
  content = "This is the default Help Toast.",
  isRTL = false,
  bodyBorderRadius = "8px",
  typeIconContainerBorderRadius = "50%",
  closeIconBorderRadius = "0.4rem",
}: ToastDefaultProps) {
  useEffect(() => {
    if (document.getElementById("splashed-toast-css")) return;
    const style = document.createElement("style");
    style.id = "splashed-toast-css";
    style.innerHTML = `
.toast {
  position: relative;
  width: 355px;
  padding: 1rem 2rem 1.5rem 6rem;
  background: #0070e0;
  color: #f5f5f5;
  font-family: inherit;
  border-radius: ${bodyBorderRadius};
  overflow: visible;
  box-sizing: border-box;
  --clr: #05478a;
  /* transition optional */
  transition: transform 0.3s ease;
}

.toast.rtl {
  direction: rtl;
  padding: 1rem 6rem 1.5rem 2rem;
  transform: scaleX(-1);
}

.toast.rtl > * {
  transform: scaleX(-1);
  display: inline-block;
}

/* Keep original LTR splash background */
.toast:before {
  content: "";
  position: absolute;
  width: 5.5rem;
  height: 6rem;
  bottom: 0;
  left: 0;
  border-radius: 1rem 0 0 ${bodyBorderRadius};
  background: radial-gradient(circle at 22% 3.8rem, var(--clr) 0.75rem, transparent calc(0.75rem + 1px)),
    radial-gradient(circle at 95% 1.9rem, var(--clr) 0.07rem, transparent calc(0.07rem + 1px)),
    radial-gradient(circle at 80% 2.25rem, var(--clr) 0.18rem, transparent calc(0.18rem + 1px)),
    radial-gradient(circle at 80% 75%, var(--clr) 0.35rem, transparent calc(0.35rem + 1px)),
    radial-gradient(circle at 43% 2.3rem, var(--clr) 0.07rem, transparent calc(0.07rem + 1px)),
    radial-gradient(circle at 40% 1rem, var(--clr) 0.12rem, transparent calc(0.12rem + 1px)),
    radial-gradient(circle at 20% 1.5rem, var(--clr) 0.25rem, transparent calc(0.25rem + 1px)),
    radial-gradient(circle at 64% 51%, var(--clr) 0.45rem, transparent calc(0.45rem + 1px)),
    radial-gradient(circle at 100% 100%, transparent 0.9rem, var(--clr) calc(0.9rem + 1px) 1.25rem, transparent calc(1.25rem + 1px) 100%),
    radial-gradient(circle at 0% 0%, transparent 0.9rem, var(--clr) calc(0.9rem + 1px) 1.25rem, transparent calc(1.25rem + 1px) 100%),
    radial-gradient(circle at 0% 120%, var(--clr) 4rem, transparent calc(4rem + 1px)),
    #f000;
  background-repeat: no-repeat;
  background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 1.625rem 1.625rem,
    1.625rem 1.625rem, 100% 100%, 100% 100%;
  background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0,
    calc(100% - 1.75rem) 2.85rem, calc(100% - 1.75rem) 2.95rem, 0 0, 0 0;
  z-index: 0;
}

/* Splash background for RTL, mirror the LTR splash */
.toast.rtl:before {
  left: auto;
  right: 0;
  border-radius: 0 1rem ${bodyBorderRadius} 0;
  background: inherit;
  background-repeat: no-repeat;
  background-size: inherit;
  background-position: inherit;
  /* Mirror horizontally */
  transform: scaleX(-1);
  transform-origin: center;
}

.toast:after {
  content: "";
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  background: var(--clr);
  top: -1.75rem;
  left: 2rem;
  border-radius: ${typeIconContainerBorderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  box-sizing: border-box;
  z-index: 1;
}

/* Move after container to right for RTL */
.toast.rtl:after {
  left: auto;
  right: 2rem;
}

.toast h3 {
  font-size: 1.35rem;
  margin: 0;
  line-height: 1.35rem;
  font-weight: inherit;
  position: relative;
  z-index: 2;
}

/* Align text properly for RTL */
.toast.rtl h3,
.toast.rtl p {
  text-align: right;
  direction: rtl;
}

.toast p {
  margin-top: 0.25rem;
  font-size: 0.95rem;
  font-weight: inherit;
  position: relative;
  z-index: 2;
}

.closeButton {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  height: 34px;
  width: 34px;
  cursor: pointer;
  border-radius: ${closeIconBorderRadius};
  background: #fff;
  border: 0 none;
  transform: scale(0.7);
  color: #242424;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 3;
}

/* Move close button to left in RTL and unflip icon */
.toast.rtl .closeButton {
  right: auto;
  left: 0.4rem;
  transform: scaleX(-1) scale(0.7);
}

.icon-center {
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  top: -1.75rem;
  left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
}

/* Move icon container to right in RTL and unflip icon */
.toast.rtl .icon-center {
  left: auto;
  right: 2rem;
  transform: scaleX(-1);
}

.timer {
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 4px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
  overflow: hidden;
  z-index: 2;
  width: 80%;
}

.timer > div {
  height: 100%;
  width: 50%;
  background: rgba(255,255,255,0.8);
}
    `;
    document.head.appendChild(style);
  }, [bodyBorderRadius, closeIconBorderRadius, typeIconContainerBorderRadius]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={`toast${isRTL ? " rtl" : ""}`}>
      <div
        className="icon-center"
        dangerouslySetInnerHTML={{ __html: HELP_ICON }}
      />
      <button
        className="closeButton"
        dangerouslySetInnerHTML={{ __html: CLOSE_SVG }}
        onClick={() => console.log("Toast closed")}
        aria-label="Close toast"
      />
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="timer">
        <div />
      </div>
    </div>
  );
}
