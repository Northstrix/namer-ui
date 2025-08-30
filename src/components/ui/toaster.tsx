
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useApp } from "@/context/app-context";

export function Toaster() {
  const { toasts } = useToast()
  const { lang } = useApp();
  const isRTL = lang === 'he';

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex items-center gap-3">
               <img src="/logo.png" alt="Namer UI Logo" className="w-8 h-8 flex-shrink-0"/>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>

            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport rtl={isRTL} />
    </ToastProvider>
  )
}
