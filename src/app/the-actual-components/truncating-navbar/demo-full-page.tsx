"use client";

import { useRef } from "react";
import TruncatingNavbar from "@/app/the-actual-components/truncating-navbar/TruncatingNavbar";
import { useTranslation } from "@/context/app-context";
import { useToast } from "@/hooks/use-toast";

export default function TruncatingNavbarDemo() {
  const t = useTranslation();
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} className="w-full h-screen overflow-y-auto p-6 bg-[#060507]">
      <div className="sticky top-0 z-20 w-full">
        <TruncatingNavbar
          icon="/logo.png"
          appName={t("namer_ui")}
          routes={[
            {
              name: t("truncating_navbar_link"),
              link: "https://maxim-bortnikov.netlify.app/",
              external: true, // Open that link in a new tab
            },
          ]}
          homeRoute="/"
          scrolledBg="#151419"
          mobileBg="#060507"
          placeholderText={t("truncating_navbar_search_placeholder_text")}
          shortcutKey="M"
          desktopThreshold={1024}
          onOpenSearch={() => {
            toast({
              title: t("namer_ui"),
              description: t("truncating_navbar_toast_demo"),
            });
          }}
          scrollContainerRef={scrollRef}
          zIndex={1}
        />
      </div>

      <div className="h-[200vh] flex flex-col items-center justify-start text-white pt-[64px]">
        <p className="text-lg opacity-60">
          {t("truncating_navbar_scroll_down")}
        </p>
      </div>
    </div>
  );
}
