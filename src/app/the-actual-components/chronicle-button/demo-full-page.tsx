"use client";

import { useState, useEffect } from "react";
import ChronicleButton from "@/app/the-actual-components/chronicle-button/ChronicleButton";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function ChronicleButtonDemo() {
  const [isClient, setIsClient] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const { toast } = useToast();
  const t = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Force remount (full re-render) when component reenters viewport
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Increment key to force full remount
            setRenderKey((k) => k + 1);
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // trigger when 10% visible
      }
    );

    const el = document.getElementById("chronicle-buttons-wrapper");
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div
      id="chronicle-buttons-wrapper"
      key={renderKey}
      className="flex flex-wrap gap-6 items-center justify-center relative"
    >
      <ChronicleButton
        text="Hover Me"
        onClick={() =>
          toast({ title: t("namer_ui"), description: t("chronicle_toast_1") })
        }
      />
      <ChronicleButton
        text="Blue (1.4em)"
        onClick={() =>
          toast({ title: t("namer_ui"), description: t("chronicle_toast_2") })
        }
        width="200px"
        hoverColor="#90BAFD"
        borderRadius="1.4em"
      />
      <ChronicleButton
        text="Outlined (-6px)"
        onClick={() =>
          toast({ title: t("namer_ui"), description: t("chronicle_toast_3") })
        }
        hoverColor="#CC8DFD"
        width="200px"
        outlined={true}
        outlinePaddingAdjustment="6px"
      />
      <ChronicleButton
        text="Custom Padding"
        onClick={() =>
          toast({ title: t("namer_ui"), description: t("chronicle_toast_4") })
        }
        width="auto"
        outlined={true}
        outlinePaddingAdjustment="0px"
        borderRadius="2.5em"
        outlineBorderWidth="3px"
        customBackground="#7c3aed"
        customForeground="#fff"
        outlinedButtonBackgroundOnHover="#ede9fe"
        hoverColor="#a21caf"
        fontSize="1.2em"
        fontFamily="Arial Black, Arial, sans-serif"
        padding="1.5em 2.5em"
        hoverForeground="#222"
      />
      <ChronicleButton
        text="Oceanic"
        onClick={() =>
          toast({ title: t("namer_ui"), description: t("chronicle_toast_5") })
        }
        width="210px"
        borderRadius="2em"
        customBackground="#00a0d8"
        customForeground="#fff"
        hoverColor="#fff"
        hoverForeground="#0a0a0a"
        fontSize="1.1em"
        fontFamily="Verdana, Geneva, sans-serif"
        padding="1.3em 2em"
      />
    </div>
  );
}
