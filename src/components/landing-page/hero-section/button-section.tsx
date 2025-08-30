"use client";

import RefinedChronicleButton from "@/components/landing-page/CustomizedRefinedChrnicleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Star } from "lucide-react";
import Counter from "@/components/landing-page/counter";
import { useEffect, useRef, useState } from "react";
import { useTranslation, useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import { useMetrics } from "@/hooks/useMetrics";

export default function ButtonSection() {
  const [stars, setStars] = useState<number>(0);
  const t = useTranslation();
  const { lang } = useApp();
  const isRTL = useIsRTL();

  const { sendAnalyticsIncrement } = useMetrics();

  const logLockRef = useRef(false);

  useEffect(() => {
    fetch("https://api.github.com/repos/Northstrix/namer-ui")
      .then((r) => r.json())
      .then((data) => setStars(data.stargazers_count || 0))
      .catch(() => setStars(0));
  }, []);

  const getLinkWithLang = (href: string) => {
    const langParam = lang === "en" ? "" : `?lang=${lang}`;
    return `${href}${langParam}`;
  };

  // Safe logger with 120ms discard lock that fires analytics increment
  const safeLog = (metricKey: string) => {
    if (logLockRef.current) return;
    logLockRef.current = true;
    sendAnalyticsIncrement(metricKey);
    setTimeout(() => {
      logLockRef.current = false;
    }, 120);
  };

  function handleGitHubButtonClick() {
    window.open("https://github.com/Northstrix/namer-ui", "_blank", "noopener,noreferrer");
    safeLog("hero-section-github-button:clicked");
  }

  function handleGetStartedButtonClick() {
    window.open(getLinkWithLang("/components"), "_self");
  }

  return (
    <div
      className={`mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 max-w-xl mx-auto lg:mx-0 ${
        isRTL ? "rtl" : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Get Started Button */}
      <RefinedChronicleButton
        backgroundColor="hsl(var(--foreground))"
        textColor="hsl(var(--background))"
        hoverTextColor="hsl(var(--foreground))"
        borderColor="hsl(var(--border))"
        borderWidth={1}
        borderRadius={8}
        fontSize="1rem"
        padding="0.75rem 1.5rem"
        iconSize={18}
        iconStrokeWidth={2}
        href={getLinkWithLang("/components")}
        onClick={handleGetStartedButtonClick}
        style={{ width: "100%" }}
        isRTL={isRTL}
      >
        {t("hero_get_started")}
      </RefinedChronicleButton>

      {/* GitHub Button */}
      <RefinedChronicleButton
        backgroundColor="hsl(var(--background))"
        textColor="hsl(var(--foreground))"
        hoverTextColor="hsl(var(--foreground))"
        borderColor="hsl(var(--border))"
        borderVisible
        hoverBorderVisible
        hoverBorderColor="hsl(var(--accent))"
        hoverBackgroundColor="hsl(var(--accent))"
        borderWidth={1}
        borderRadius={8}
        fontSize="1rem"
        padding="0.75rem 1.5rem"
        iconSize={18}
        iconStrokeWidth={2}
        iconTextGap={isRTL ? "0.875rem" : "0.6725rem"}
        href="https://github.com/Northstrix/namer-ui"
        onClick={handleGitHubButtonClick}
        style={{ width: "100%" }}
        isRTL={isRTL}
      >
        <FontAwesomeIcon icon={faGithub} size="lg" /> {t("hero_star_on_github")}
        {isRTL ? " |" : "⠀|"}{" "}
        <Star size={18} strokeWidth={2} className="text-foreground fill-foreground" />{" "}
        <Counter targetValue={stars} />
      </RefinedChronicleButton>
    </div>
  );
}
