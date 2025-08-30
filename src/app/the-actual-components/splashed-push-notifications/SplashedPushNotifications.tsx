"use client"

import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react';

export type NotificationType = 'help' | 'success' | 'warning' | 'error';

export interface SplashedPushNotificationsHandle {
  createNotification: (type: NotificationType, title: string, content: string) => void;
  createRtlNotification: (type: NotificationType, title: string, content: string) => void;
}

export interface SplashedPushNotificationsProps {
  maxWidth?: string;
  bodyBorderRadius?: string;
  typeIconContainerBorderRadius?: string;
  closeIconBorderRadius?: string;
  timerColor?: string;
  timerBgColor?: string;
  horizontalMargin?: string;
  verticalGap?: string;
  lowestContainerBottomMarginAdjustment?: string;
  customIcons?: Partial<Record<NotificationType, string>>;
}

// SVGs as strings (default set)
const DEFAULT_ICONS: Record<NotificationType, string> = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-question-icon lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-x-icon lucide-shield-x"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m14.5 9.5-5 5"/><path d="m9.5 9.5 5 5"/></svg>`,
};

const CLOSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

export const SplashedPushNotifications = forwardRef<SplashedPushNotificationsHandle, SplashedPushNotificationsProps>(
  ({ maxWidth = "436px", bodyBorderRadius = "8px", typeIconContainerBorderRadius = "50%", closeIconBorderRadius = "0.4rem", timerColor = "rgba(255,255,255,0.8)", timerBgColor = "rgba(255,255,255,0.3)", horizontalMargin = "1.5rem", verticalGap = "1.5rem", lowestContainerBottomMarginAdjustment = "-0.25rem", customIcons = {} }, ref) => {
    const notificationContainerRef = useRef<HTMLDivElement | null>(null);
    const rtlNotificationContainerRef = useRef<HTMLDivElement | null>(null);

    const ICON_SVGS: Record<NotificationType, string> = {
      ...DEFAULT_ICONS,
      ...customIcons,
    };

    useEffect(() => {
      if (document.getElementById('splashed-toast-css')) return;
      const style = document.createElement('style');
      style.id = 'splashed-toast-css';
      style.innerHTML = `
        .wrapper { margin: 0; padding: 0; width: 100vw; height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .buttonContainer { display: flex; }
        .buttonContainer button { background-color: #fff; font-weight: bold; color: #1d2232; cursor: pointer; font-family: inherit; padding: 1rem; border-radius: 5px; border: 3px solid #fff; margin:14px; }
        .buttonContainer button:hover { transform: scale(1.05); border: 3px solid #007fff; }
        .notificationContainer { display: flex; flex-direction: column; align-items: flex-end; position: fixed; bottom: ${lowestContainerBottomMarginAdjustment}; left: auto; right: 0; max-width: ${maxWidth}; z-index: 2000; }
        .rtlNotifications{ left: 0; right: auto; transform: scale(-1, 1); }
        .toast { color: #f5f5f5; padding: 1rem 2rem 1.5rem 6rem; text-align: left; position: relative; font-weight: inherit; margin: ${verticalGap} ${horizontalMargin}; opacity: 1; overflow: visible; border-radius: ${bodyBorderRadius}; }
        .timer { position: absolute; bottom: 0; left: 10%; right: 10%; width: 80%; height: 4px; background: var(--splashed-toast-timer-bg, rgba(255,255,255,0.3)); border-radius: 2px; overflow: hidden; }
        .timerLeft, .timerRight { position: absolute; top: 0; height: 100%; left: 0; background-color: var(--splashed-toast-timer, rgba(255,255,255,0.8)); }
        .toast:before { content: ""; position: absolute; width: 5.5rem; height: 6rem; --drop: radial-gradient( circle at 64% 51%, var(--clr) 0.45rem, #fff0 calc(0.45rem + 1px) ), radial-gradient( circle at 100% 100%, #fff0 0.9rem, var(--clr) calc(0.9rem + 1px) 1.25rem, #fff0 calc(1.25rem + 1px) 100% ), radial-gradient( circle at 0% 0%, #fff0 0.9rem, var(--clr) calc(0.9rem + 1px) 1.25rem, #fff0 calc(1.25rem + 1px) 100% ), radial-gradient(circle at 0% 120%, var(--clr) 4rem, #fff0 calc(4rem + 1px)); background: radial-gradient( circle at 22% 3.8rem, var(--clr) 0.75rem, #fff0 calc(0.75rem + 1px) ), radial-gradient( circle at 95% 1.9rem, var(--clr) 0.07rem, #fff0 calc(0.07rem + 1px) ), radial-gradient( circle at 80% 2.25rem, var(--clr) 0.18rem, #fff0 calc(0.18rem + 1px) ), radial-gradient( circle at 80% 75%, var(--clr) 0.35rem, #fff0 calc(0.35rem + 1px) ), radial-gradient( circle at 43% 2.3rem, var(--clr) 0.07rem, #fff0 calc(0.07rem + 1px) ), radial-gradient( circle at 40% 1rem, var(--clr) 0.12rem, #fff0 calc(0.12rem + 1px) ), radial-gradient( circle at 20% 1.5rem, var(--clr) 0.25rem, #fff0 calc(0.25rem + 1px) ), var(--drop), #f000; background-repeat: no-repeat; background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 1.625rem 1.625rem, 1.625rem 1.625rem, 100% 100%, 100% 100%; background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, calc(100% - 1.75rem) 2.85rem, calc(100% - 1.75rem) 2.95rem, 0 0, 0 0; bottom: 0rem; left: 0rem; z-index: 0; border-radius: 1rem 0 0 ${bodyBorderRadius}; }
        .toast:after { content: ""; position: absolute; width: 3.5rem; height: 3.5rem; background: var(--clr); top: -1.75rem; left: 2rem; border-radius: ${typeIconContainerBorderRadius}; padding-top: 0.2rem; display: flex; align-items: center; justify-content: center; font-size: 2.25rem; box-sizing: border-box; }
        .toast h3 { font-size: 1.35rem; margin: 0; line-height: 1.35rem; font-weight: inherit; position: relative; }
        .toast p { position: relative; font-size: 0.95rem; z-index: 1; margin: 0.25rem 0 0; font-weight: inherit; }
        .toast.help { --clr: #05478a; background: #0070e0; }
        .toast.success { --clr: #005e38; background: #03a65a; }
        .toast.warning { --clr: #c24914; background: #fc8621; }
        .toast.error { --clr: #851d41; background: #db3056; }
        .timer-left, .timer-right { position: absolute; top: 0; height: 100%; width: 50%; background: var(--splashed-toast-timer, rgba(255,255,255,0.8)); border-radius: 2px; }
        .timer-left { left: 0; transform-origin: right; }
        .timer-right { right: 0; transform-origin: left; }
        .closeButton { position:absolute; top:0.4rem; right:0.4rem; height: 34px; width: 34px; cursor: pointer; border-radius: ${closeIconBorderRadius}; background: #fff; border: 0px solid #fff; transform: scale(0.7); color: #242424; font-size: 18px; display: flex; align-items: center; justify-content: center; padding: 0; }
        .toast .icon-center { position: absolute; width: 3.5rem; height: 3.5rem; top: -1.75rem; left: 2rem; display: flex; align-items: center; justify-content: center; z-index: 2; pointer-events: none; }
        @keyframes slideInWithBounce { 0% { transform: translateX(150%); opacity: 0; } 60% { transform: translateX(-12%); opacity: 1; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideOutWithBounce { 0% { transform: translateX(0); opacity: 1; } 40% { transform: translateX(-12%); opacity: 1; } 100% { transform: translateX(150%); opacity: 0; } }
      `;
      document.head.appendChild(style);
    }, []);

    // Set CSS variables for timer color/background on the containers
    useEffect(() => {
      const setVars = (el: HTMLDivElement | null) => {
        if (!el) return;
        if (timerColor) el.style.setProperty('--splashed-toast-timer', timerColor);
        else el.style.removeProperty('--splashed-toast-timer');
        if (timerBgColor) el.style.setProperty('--splashed-toast-timer-bg', timerBgColor);
        else el.style.removeProperty('--splashed-toast-timer-bg');
      };
      setVars(notificationContainerRef.current);
      setVars(rtlNotificationContainerRef.current);
    }, [timerColor, timerBgColor]);

    const setTimerAnimation = (timerLeft: HTMLElement, timerRight: HTMLElement, duration: number, uniqueId: number) => {
      const stylesheet = document.createElement("style");
      stylesheet.type = "text/css";
      stylesheet.innerHTML = `
        @keyframes timerShrink-${uniqueId} {
          from { width: 100%; }
          to { width: 0; }
        }
      `;
      document.head.appendChild(stylesheet);
      timerLeft.style.animation = `timerShrink-${uniqueId} ${duration}ms linear forwards`;
      timerRight.style.animation = `timerShrink-${uniqueId} ${duration}ms linear forwards`;
    };

    const removeNotification = (notif: HTMLElement) => {
      notif.style.animation = 'slideOutWithBounce 0.6s ease forwards';
      setTimeout(() => { notif.remove(); }, 600);
    };

    const createNotification = (type: NotificationType, notificationTitle: string, notificationContent: string) => {
      if (notificationContainerRef.current) {
        const notif = document.createElement('div');
        notif.classList.add('toast', type);

        // ICON
        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon-center';
        iconDiv.innerHTML = ICON_SVGS[type];

        // Title and content
        const title = document.createElement('h3');
        title.textContent = notificationTitle;
        title.style.margin = '0';

        const content = document.createElement('p');
        content.textContent = notificationContent;
        content.style.margin = '0.25rem 0';

        // Timer and close button
        const timerContainer = document.createElement('div');
        timerContainer.classList.add('timer');

        const closeButton = document.createElement('button');
        closeButton.classList.add('closeButton');
        closeButton.innerHTML = CLOSE_SVG;
        closeButton.onclick = () => { removeNotification(notif); };

        notif.appendChild(iconDiv);
        notif.appendChild(closeButton);
        notif.appendChild(title);
        notif.appendChild(content);
        notif.appendChild(timerContainer);

        // Timer halves
        const timerLeft = document.createElement('div');
        timerLeft.classList.add('timerLeft');
        const timerRight = document.createElement('div');
        timerRight.classList.add('timerRight');
        timerContainer.appendChild(timerRight);
        timerContainer.appendChild(timerLeft);

        notificationContainerRef.current.appendChild(notif);
        notif.style.animation = 'slideInWithBounce 0.6s ease forwards';

        const duration = 5000;
        const uniqueId = Date.now();
        setTimerAnimation(timerLeft, timerRight, duration, uniqueId);

        let timeoutId: NodeJS.Timeout;
        timeoutId = setTimeout(() => removeNotification(notif), duration);
        let remainingTime = duration;

        notif.addEventListener("mouseenter", () => {
          clearTimeout(timeoutId);
          const computedWidth = parseFloat(getComputedStyle(timerLeft).width);
          const totalWidth = parseFloat(getComputedStyle(timerContainer).width);
          const elapsedTime = (computedWidth / totalWidth) * duration;
          remainingTime = duration - elapsedTime;
          (timerLeft as HTMLElement).style.animationPlayState = "paused";
          (timerRight as HTMLElement).style.animationPlayState = "paused";
        });

        notif.addEventListener("mouseleave", () => {
          if (remainingTime > 0) {
            setTimerAnimation(timerLeft, timerRight, duration, uniqueId);
            timeoutId = setTimeout(() => removeNotification(notif), duration - remainingTime);
            (timerLeft as HTMLElement).style.animationPlayState = "running";
            (timerRight as HTMLElement).style.animationPlayState = "running";
          }
        });
      }
    };

    const createRtlNotification = (type: NotificationType, notificationTitle: string, notificationContent: string) => {
      if (rtlNotificationContainerRef.current) {
        const notif = document.createElement('div');
        notif.classList.add('toast', type, 'rtl');

        // ICON
        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon-center';
        iconDiv.innerHTML = ICON_SVGS[type];

        // Title and content
        const title = document.createElement('h3');
        title.textContent = notificationTitle;
        title.style.margin = '0';
        title.style.transform = 'scale(-1, 1)';
        title.style.textAlign = 'right';
        title.style.direction = 'rtl';

        const content = document.createElement('p');
        content.textContent = notificationContent;
        content.style.margin = '0.25rem 0';
        content.style.transform = 'scale(-1, 1)';
        content.style.textAlign = 'right';
        content.style.direction = 'rtl';

        // Timer and close button
        const timerContainer = document.createElement('div');
        timerContainer.classList.add('timer');

        const closeButton = document.createElement('button');
        closeButton.classList.add('closeButton');
        closeButton.innerHTML = CLOSE_SVG;
        closeButton.onclick = () => { removeNotification(notif); };

        notif.appendChild(iconDiv);
        notif.appendChild(closeButton);
        notif.appendChild(title);
        notif.appendChild(content);
        notif.appendChild(timerContainer);

        // Timer halves
        const timerLeft = document.createElement('div');
        timerLeft.classList.add('timerLeft');
        const timerRight = document.createElement('div');
        timerRight.classList.add('timerRight');
        timerContainer.appendChild(timerRight);
        timerContainer.appendChild(timerLeft);

        rtlNotificationContainerRef.current.appendChild(notif);
        notif.style.animation = 'slideInWithBounce 0.6s ease forwards';

        const duration = 5000;
        const uniqueId = Date.now();
        setTimerAnimation(timerLeft, timerRight, duration, uniqueId);

        let timeoutId: NodeJS.Timeout;
        timeoutId = setTimeout(() => removeNotification(notif), duration);
        let remainingTime = duration;

        notif.addEventListener("mouseenter", () => {
          clearTimeout(timeoutId);
          const computedWidth = parseFloat(getComputedStyle(timerLeft).width);
          const totalWidth = parseFloat(getComputedStyle(timerContainer).width);
          const elapsedTime = (computedWidth / totalWidth) * duration;
          remainingTime = duration - elapsedTime;
          (timerLeft as HTMLElement).style.animationPlayState = "paused";
          (timerRight as HTMLElement).style.animationPlayState = "paused";
        });

        notif.addEventListener("mouseleave", () => {
          if (remainingTime > 0) {
            setTimerAnimation(timerLeft, timerRight, duration, uniqueId);
            timeoutId = setTimeout(() => removeNotification(notif), duration - remainingTime);
            (timerLeft as HTMLElement).style.animationPlayState = "running";
            (timerRight as HTMLElement).style.animationPlayState = "running";
          }
        });
      }
    };

    useImperativeHandle(ref, () => ({
      createNotification,
      createRtlNotification,
    }));

    return (
      <>
        <div ref={notificationContainerRef} className="notificationContainer"></div>
        <div ref={rtlNotificationContainerRef} className="notificationContainer rtlNotifications"></div>
      </>
    );
  }
);
