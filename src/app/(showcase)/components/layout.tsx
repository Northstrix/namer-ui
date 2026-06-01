"use client";

import * as React from "react";
import AppSidebar from "@/components/app-sidebar";
import TruncatingNavbar from "@/components/CustomizedTruncatingNavbar";
import LimitedWidthWrapper from "@/components/landing-page/limited-width-wrapper";
import { usePathname } from "next/navigation";
import { useTranslation, useApp } from "@/context/app-context";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const t = useTranslation();
  const { lang } = useApp();

  const getLinkWithLang = (href: string) =>
    lang === "en" ? href : `${href}?lang=${lang}`;

  if (isMobile) {
    return (
      <div className="flex h-screen flex-col overflow-hidden">
        <div
          className="border-b"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            width: "100%",
          }}
        >
          <LimitedWidthWrapper>
            <TruncatingNavbar
              icon="/logo.png"
              appName={t("namer_ui")}
              routes={[
                { name: t("components"), link: getLinkWithLang("/components") },
                {
                  name: t("vue-components"),
                  link: "https://namer-ui-for-vue.netlify.app/",
                  external: true,
                },
                { name: t("showcase"), link: getLinkWithLang("/showcase") },
              ]}
              homeRoute={getLinkWithLang("/")}
              scrolledBg="hsl(var(--background))"
              mobileBg="hsl(var(--background))"
              outlineColor="hsl(var(--border))"
              navbarHoverOutline="var(--hovered-border)"
              placeholderText={t("search_placeholder_text")}
              shortcutKey="K"
              buttonBg="hsl(var(--background))"
              buttonOutline="hsl(var(--border))"
              buttonHoverBg="hsl(var(--accent))"
              keyAreaBg="hsl(var(--background))"
              keyAreaOutline="hsl(var(--border))"
              keyAreaHoverOutline="var(--hovered-border)"
              keyAreaHoverBg="hsl(var(--background))"
              buttonIconGap={28}
              buttonHoverOutline="hsl(var(--accent))"
            />
          </LimitedWidthWrapper>
        </div>

        <main className="flex-1 overflow-y-auto overflow-x-hidden px-4">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar key={pathname} />
      <main className="flex-1 overflow-y-auto overflow-x-hidden px-8">
        {children}
      </main>
    </div>
  );
}