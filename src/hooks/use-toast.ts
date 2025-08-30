'use client';

import * as React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// 🔹 Utility — detect if text has RTL characters (Hebrew, Arabic, Persian)
const isRTLCheck = (text: string): boolean =>
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text || '');

export type ToastActionElement = React.ReactNode;
export interface ToastProps {
  title?: string;
  description?: string;
  duration?: number;
}

function genId() {
  return Date.now().toString();
}

type Toast = ToastProps;

function toast({ title = '', description = '', duration = 3000 }: Toast) {
  const id = genId();

  // Detect page RTL
  const isPageRTL =
    typeof document !== 'undefined' &&
    document.documentElement.dir === 'rtl';

  // Detect text direction for semantic flow only
  const titleIsRTL = isRTLCheck(title);
  const descIsRTL = isRTLCheck(description);

  // SweetAlert2 toast config
  const DynamicSwalToast = Swal.mixin({
    toast: true,
    position: isPageRTL ? 'bottom-start' : 'bottom-end',
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
    customClass: { popup: 'my-toast' },
    didOpen: (toastEl) => {
      toastEl.onmouseenter = Swal.stopTimer;
      toastEl.onmouseleave = Swal.resumeTimer;
    },
  });

  // Fire toast
  DynamicSwalToast.fire({
    html: `
      <div class="toast-flex">
        <img src="/logo.png" alt="Logo" class="toast-logo" />
        <div class="toast-text">
          ${
            title
              ? `<div class="toast-title" style="
                    font-weight:bold;
                    direction:${titleIsRTL ? 'rtl' : 'ltr'};
                    text-align:${titleIsRTL ? 'right' : 'left'};">
                  ${title}
                </div>`
              : ''
          }
          ${
            description
              ? `<div class="toast-description" style="
                    direction:${descIsRTL ? 'rtl' : 'ltr'};
                    text-align:${descIsRTL ? 'right' : 'left'};">
                  ${description}
                </div>`
              : ''
          }
        </div>
      </div>
    `,
  });
  return {
    id,
    dismiss: () => Swal.close(),
    update: () => {}, // no-op
  };
}

function useToast() {
  return {
    toasts: [],
    toast,
    dismiss: () => Swal.close(),
  };
}

export { useToast, toast };

// 🔹 Inject styling + scrollbar offset fix
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    /* Scrollbar safe space */
    .swal2-container {
      padding: 0 1.5rem 1.25rem 1.5rem !important;
    }

    /* Toast box */
    .my-toast {
      background: #0a0a0a !important;
      outline: 1px solid #262626 !important;
      box-shadow: none !important;
      padding: 0.75em 1em !important;
      min-width: 220px;
      max-width: min(480px, 92vw);
    }

    /* Gradient text for title/content if used by default */
    .my-toast .swal2-title,
    .my-toast .swal2-html-container {
      background: hsl(var(--foreground));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }

    /* Timer progress bar color */
    .my-toast .swal2-timer-progress-bar {
      background: hsl(var(--accent)) !important;
    }

    /* Default icon tint */
    .my-toast .swal2-icon-content {
      color: hsl(var(--accent)) !important;
    }

    /* Flex layout for icon & text — same order in LTR & RTL */
    .my-toast .toast-flex {
      display: flex;
      align-items: center;
      flex-direction: row; /* icon always first */
      gap: 0.75em;
      background: transparent !important;
    }

    .my-toast .toast-logo {
      width: 32px;
      height: 32px;
      object-fit: contain;
      flex-shrink: 0;
      margin-left: 0;
      background: transparent !important;
    }

    /* Title */
    .my-toast .toast-title {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.3;
      margin-bottom: 0.1rem;
      text-align: left; /* hardcoded alignment */
    }

    /* Description (accent color) */
    .my-toast .toast-description {
      font-size: 0.85rem;
      line-height: 1.2;
      opacity: 0.9;
      color: hsl(var(--accent)) !important;
      -webkit-text-fill-color: hsl(var(--accent)) !important;
      background: none !important;
      text-align: left; /* hardcoded alignment */
    }

    /* Optional gradient message style */
    .my-toast .toast-message {
      font-size: 1rem;
      line-height: 1.3;
      background: hsl(var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
  `;
  document.head.appendChild(style);
}
