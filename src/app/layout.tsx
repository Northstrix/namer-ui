import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/context/app-context";
import { Suspense } from "react";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Namer UI",
  description:
    "Namer UI is a collection of reusable Next.js/React components made to empower developers to quickly build beautiful UIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased">
        {/* Wrapping entire app in Suspense so any useSearchParams in providers/layouts is safe */}
        <Suspense fallback={null}>
          <AppProvider>
            {children}
            <Toaster />
            <Analytics />
          </AppProvider>
        </Suspense>
      </body>
    </html>
  );
}
