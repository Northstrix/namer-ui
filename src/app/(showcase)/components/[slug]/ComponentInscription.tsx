"use client";

import { useTranslation, useApp } from "@/context/app-context";
import { useMetrics } from "@/hooks/useMetrics";
import React from "react";

export const INSCRIPTION_COMPONENTS: Record<string, "also" | "different"> = {
  "radio-button": "different",
  "halomot-button": "also",
  "inflected-card": "different",
  "splashed-push-notifications": "different",
  "fishy-button": "also",
  "fishy-file-drop": "also",
  "shamayim-toggle-switch": "different",
};

export const INSCRIPTION_LINKS: Record<string, string> = {
  "halomot-button": "https://21st.dev/maxim.bort.devel/halomot-button/default",
  "radio-button": "https://21st.dev/maxim.bort.devel/radio-group/default",
  "inflected-card": "https://21st.dev/maxim.bort.devel/inflected-card/default",
  "splashed-push-notifications":
    "https://21st.dev/maxim.bort.devel/splashed-push-notifications/default",
  "fishy-button": "https://21st.dev/maxim.bort.devel/fishy-button/default",
  "fishy-file-drop": "https://21st.dev/maxim.bort.devel/fishy-file-drop/default",
  "shamayim-toggle-switch":
    "https://21st.dev/maxim.bort.devel/shamayim-toggle-switch/default",
};

interface ComponentInscriptionProps {
  componentId: string;
}

/**
 * Renders inscription with 21st.dev link and fires analytics metric on click.
 */
export function ComponentInscription({ componentId }: ComponentInscriptionProps) {
  const t = useTranslation();
  const { lang } = useApp();
  const { sendAnalyticsIncrement } = useMetrics();

  const inscriptionType = INSCRIPTION_COMPONENTS[componentId];
  if (!inscriptionType) return null;

  const textKey =
    inscriptionType === "also"
      ? "component_inscription_also"
      : "component_inscription_different";

  const rawText = t(textKey);
  const linkHref = INSCRIPTION_LINKS[componentId];
  if (!linkHref) return null;

  // Split text at "21st.dev" for rendering link in between
  const parts = rawText.split("21st.dev");

  // Fire Firestore metric event for 21st.dev link click
  const handleClick = () => {
    const metricKey = `${componentId}:21st-dev-link:clicked`; // lang appended inside hook
    sendAnalyticsIncrement(metricKey);
  };

  return (
    <div>
      <p className="text-lg font-medium text-foreground">
        {parts[0]}
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
          onClick={handleClick}
        >
          21st.dev
        </a>
        {parts.slice(1).join("21st.dev")}
      </p>
    </div>
  );
}
