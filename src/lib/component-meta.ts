
import type { ComponentType } from "react";
import ChronicleButtonPreviewDemo from '@/app/the-actual-components/chronicle-button/demo-preview';
import ChronicleButtonFullPageDemo from '@/app/the-actual-components/chronicle-button/demo-full-page';
import RefinedChronicleButtonPreviewDemo from '@/app/the-actual-components/refined-chronicle-button/demo-preview';
import RefinedChronicleButtonFullPageDemo from '@/app/the-actual-components/refined-chronicle-button/demo-full-page';
import SliderHeroSectionFullPageDemo from '@/app/the-actual-components/slider-hero-section/demo-full-page';
import RadioButtonPreviewDemo from '@/app/the-actual-components/radio-button/demo-preview';
import RadioButtonFullPageDemo from '@/app/the-actual-components/radio-button/demo-full-page';
import BauhausFileCardFullPageDemo from '@/app/the-actual-components/bauhaus-file-card/demo-full-page';
import SpiralPreviewDemo from '@/app/the-actual-components/spiral/demo-preview';
import SpiralFullPageDemo from '@/app/the-actual-components/spiral/demo-full-page';
import HalomotButtonPreviewDemo from "@/app/the-actual-components/halomot-button/demo-preview";
import HalomotButtonFullPageDemo from "@/app/the-actual-components/halomot-button/demo-full-page";
import ProjectShowcaseFullPageDemo from "@/app/the-actual-components/project-showcase/demo-full-page"
import TruncatingNavbarFullPageDemo from "@/app/the-actual-components/truncating-navbar/demo-full-page";
import CircularTestimonialsFullPageDemo from "@/app/the-actual-components/circular-testimonials/demo-full-page";
import FloatingLabelInputPreviewDemo from '@/app/the-actual-components/floating-label-input/demo-preview';
import FloatingLabelInputFullPageDemo from '@/app/the-actual-components/floating-label-input/demo-full-page';
import InflectedCardFullPageDemo from '@/app/the-actual-components/inflected-card/demo-full-page';
import SplashedPushNotificationsFullPageDemo from '@/app/the-actual-components/splashed-push-notifications/demo-full-page';
import FishyButtonPreviewDemo from '@/app/the-actual-components/fishy-button/demo-preview';
import FishyButtonFullPageDemo from '@/app/the-actual-components/fishy-button/demo-full-page';
import FishyFileDropFullPageDemo from '@/app/the-actual-components/fishy-file-drop/demo-full-page';
import WonderlandCardFullPageDemo from '@/app/the-actual-components/wonderland-card/demo-full-page';
import BentoGridFullPageDemo from '@/app/the-actual-components/bento-grid/demo-full-page';
import ShamayimToggleSwitchFullPageDemo from '@/app/the-actual-components/shamayim-toggle-switch/demo-full-page';
import MagicTextPreviewDemo from '@/app/the-actual-components/magic-text/demo-preview';
import MagicTextFullPageDemo from '@/app/the-actual-components/magic-text/demo-full-page';
import MetamorphicLoaderPreviewDemo from '@/app/the-actual-components/metamorphic-loader/demo-preview';
import MetamorphicLoaderFullPageDemo from '@/app/the-actual-components/metamorphic-loader/demo-full-page';
import MultiColoredTextPreviewDemo from '@/app/the-actual-components/multi-colored-text/demo-preview';
import MultiColoredTextFullPageDemo from '@/app/the-actual-components/multi-colored-text/demo-full-page';
import PositionAwareButtonPreviewDemo from '@/app/the-actual-components/position-aware-button/demo-preview';
import PositionAwareButtonFullPageDemo from '@/app/the-actual-components/position-aware-button/demo-full-page';
import BaubleToggleFullPageDemo from '@/app/the-actual-components/bauble-toggle/demo-full-page';
import LoginFormFullPageDemo from '@/app/the-actual-components/login-form/demo-full-page';
import AnimatedTestimonialsFullPageDemo from "@/app/the-actual-components/animated-testimonials/demo-full-page";
import TextSwapPreviewDemo from '@/app/the-actual-components/text-swap/demo-preview';
import TextSwapFullPageDemo from '@/app/the-actual-components/text-swap/demo-full-page';
import CustomCheckboxPreviewDemo from '@/app/the-actual-components/custom-checkbox/demo-preview';
import CustomCheckboxFullPageDemo from '@/app/the-actual-components/custom-checkbox/demo-full-page';
import SatelliteToastFullPageDemo from '@/app/the-actual-components/satellite-toast/demo-full-page';
import CalendarPreviewDemo from '@/app/the-actual-components/calendar/demo-preview';
import CalendarFullPageDemo from '@/app/the-actual-components/calendar/demo-full-page';
import SubmitCardPreviewDemo from '@/app/the-actual-components/submit-card/demo-preview';
import SubmitCardFullPageDemo from '@/app/the-actual-components/submit-card/demo-full-page';
import HalloweenSubmitCardPreviewDemo from '@/app/the-actual-components/halloween-submit-card/demo-preview';
import HalloweenSubmitCardFullPageDemo from '@/app/the-actual-components/halloween-submit-card/demo-full-page';

import { TranslationKey } from "./translations";

export interface ComponentMetadata {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
  demo?: ComponentType;
  demoFullPage: ComponentType;
  dependencies?: string;
  credit?: string;
  usage: string;
  includeClassMerger?: boolean;
  code: string;
  props: Array<{
    name: string;
    type: string;
    description: TranslationKey;
    defaultValue?: string;
    required: boolean;
  }>;
  disclaimer?: TranslationKey;
  noPadding?: boolean;
  isPreviewImage?: boolean;
}

export const componentsMetadata: ComponentMetadata[] = [
  {
    id: "chronicle-button",
    title: "chronicle_button_title",
    description: "chronicle_button_desc",
    demo: ChronicleButtonPreviewDemo,
    demoFullPage: ChronicleButtonFullPageDemo,
    credit: `[Chronicle Button](https://codepen.io/Haaguitos/pen/OJrVZdJ) by [Haaguitos](https://codepen.io/Haaguitos)`,
    usage: `// Path to the "ChronicleButton.tsx" file
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'

<div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  {/* Original examples */}
  <ChronicleButton 
    text='Hover Me'
    onClick={() => console.log("The first button has been clicked")} 
  />
  <ChronicleButton 
    text='Blue (1.4em)'
    onClick={() => console.log('The blue button has been clicked')} 
    width="200px"
    hoverColor="#90BAFD"
    borderRadius="1.4em"
  />
  <ChronicleButton 
    text="Outlined (-6px)" 
    onClick={() => console.log("The outlined button has been clicked")} 
    hoverColor="#CC8DFD"
    width="200px"
    outlined={true}
    outlinePaddingAdjustment="6px"
  />
  <ChronicleButton
    text="Custom Padding"
    onClick={() => console.log("Custom Padding clicked")}
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
    hoverForeground = "#222"
  />
  <ChronicleButton
    text="Oceanic"
    onClick={() => console.log("Oceanic clicked")}
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
</div>`,
    code: `"use client";
import React, { useState } from "react";

interface ChronicleButtonProps {
  text: string;
  onClick?: (...args: any[]) => void;
  hoverColor?: string;
  hoverForeground?: string;
  width?: string;
  outlined?: boolean;
  outlinePaddingAdjustment?: string;
  borderRadius?: string;
  fontFamily?: string;
  outlinedButtonBackgroundOnHover?: string;
  customBackground?: string;
  customForeground?: string;
  fontSize?: string;
  lineHeight?: string;
  outlineBorderWidth?: string;
  padding?: string;
}

const ChronicleButton: React.FC<ChronicleButtonProps> = ({
  text,
  onClick,
  hoverColor = "#a594fd",
  hoverForeground,
  width = "160px",
  outlined = false,
  outlinePaddingAdjustment = "2px",
  borderRadius = "8px",
  fontFamily,
  outlinedButtonBackgroundOnHover = "transparent",
  customBackground = "#f0f0f1",
  customForeground = "#1a1a24",
  fontSize = "1.025rem",
  lineHeight = "1",
  outlineBorderWidth = "1px",
  padding,
}) => {
  // hover state (for outlined pseudo-element color swap)
  const [hovered, setHovered] = useState(false);

  // button base styles
  const buttonStyle: React.CSSProperties = {
    width,
    borderRadius,
    fontFamily,
    background: outlined ? "transparent" : customBackground,
    color: outlined ? customBackground : customForeground,
    padding: padding
      ? padding
      : outlined
      ? \`calc(1rem - \${outlinePaddingAdjustment}) 1.232rem\`
      : "1rem 1.232rem",
    border: outlined ? \`\${outlineBorderWidth} solid \${customBackground}\` : "none",
    transition:
      "background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out, padding 0.3s ease-in-out",
    position: "relative",
    ...(outlined && hovered
      ? { ["--chronicle-outlined-hover-bg" as any]: outlinedButtonBackgroundOnHover }
      : { ["--chronicle-outlined-hover-bg" as any]: "transparent" }),
  };

  const emStyle: React.CSSProperties = {
    fontSize,
    lineHeight,
    fontWeight: 700,
    color: outlined
      ? hovered
        ? hoverForeground || hoverColor
        : customBackground
      : undefined,
  };

  // hover handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(true);
    const btn = e.currentTarget;
    if (outlined) {
      btn.style.borderColor = hoverColor;
      btn.style.color = hoverForeground || hoverColor;
    } else {
      btn.style.background = hoverColor;
      btn.style.color = hoverForeground || customForeground;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(false);
    const btn = e.currentTarget;
    btn.style.background = outlined ? "transparent" : customBackground;
    btn.style.color = outlined ? customBackground : customForeground;
    if (outlined) {
      btn.style.borderColor = customBackground;
    }
  };

  return (
    <>
      <button
        className={\`chronicleButton\${outlined ? " outlined" : ""}\${
          outlined && hovered ? " chronicle-hovered" : ""
        }\`}
        onClick={onClick}
        style={buttonStyle}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {outlined ? (
          // OUTLINED: simple single span text
          <span>
            <em style={emStyle}>{text}</em>
          </span>
        ) : (
          // DEFAULT: flipping text animation (two stacked spans)
          <>
            <span className="chronicle-fade chronicle-fade-in">
              <em style={emStyle}>{text}</em>
            </span>
            <span>
              <em style={emStyle}>{text}</em>
            </span>
          </>
        )}
      </button>

      {/* 🔥 Styles embedded at render time (prevents flicker) */}
      <style jsx>{\`
        .chronicleButton {
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          line-height: 1;
          padding: 1rem 1.232rem;
          cursor: pointer;
          border: none;
          font-weight: 700;
          background: #f0f0f1;
          color: #1a1a24;
          transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
            border 0.3s ease-in-out, padding 0.3s ease-in-out;
          will-change: background, color, border, padding;
          position: relative;
        }

        .chronicleButton span {
          position: relative;
          display: block;
          perspective: 108px;
        }

        .chronicleButton .chronicle-fade {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .chronicleButton .chronicle-fade-in {
          opacity: 1;
        }

        .chronicleButton span:nth-of-type(2) {
          position: absolute;
        }

        .chronicleButton em {
          font-style: normal;
          display: inline-block;
          font-size: 1.025rem;
          line-height: 1;
          will-change: transform, opacity, color;
          transition: color 0.3s ease-in-out,
            transform 0.55s cubic-bezier(0.645, 0.045, 0.355, 1),
            opacity 0.35s linear 0.2s;
        }

        .chronicleButton span:nth-of-type(1) em {
          transform-origin: top;
        }

        .chronicleButton span:nth-of-type(2) em {
          opacity: 0;
          transform: rotateX(-90deg) scaleX(0.9) translate3d(0, 10px, 0);
          transform-origin: bottom;
        }

        .chronicleButton:hover span:nth-of-type(1) em {
          opacity: 0;
          transform: rotateX(90deg) scaleX(0.9) translate3d(0, -10px, 0);
        }

        .chronicleButton:hover span:nth-of-type(2) em {
          opacity: 1;
          transform: rotateX(0deg) scaleX(1) translateZ(0);
          transition: color 0.3s ease-in-out,
            transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1),
            opacity 0.35s linear 0.3s;
        }

        /* --- OUTLINED VARIANT --- */
        .chronicleButton.outlined {
          background: transparent;
          transition: border 0.3s ease-in-out, color 0.3s ease-in-out,
            background-color 0.3s ease-in-out, padding 0.3s ease-in-out;
          will-change: border, color, background, padding;
          position: relative;
          z-index: 0;
        }

        .chronicleButton.outlined em {
          transition: color 0.3s ease-in-out;
          position: relative;
          z-index: 1;
        }

        .chronicleButton.outlined::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: transparent;
          z-index: 0;
          transition: background 0.3s ease-in-out;
          pointer-events: none;
        }

        .chronicleButton.outlined.chronicle-hovered::before {
          background: var(--chronicle-outlined-hover-bg, transparent);
        }

        /* Disable flip animation for outlined */
        .chronicleButton.outlined span,
        .chronicleButton.outlined span:nth-of-type(2),
        .chronicleButton.outlined span:nth-of-type(1) em,
        .chronicleButton.outlined span:nth-of-type(2) em {
          transform: none !important;
          opacity: 1 !important;
          transition: color 0.3s ease-in-out;
        }
      \`}</style>
    </>
  );
};

export default ChronicleButton;
`,
    props: [
        { name: "text", type: "string", description: "chronicle_button_prop_text", required: true },
        { name: "onClick", type: "(...args: any[]) => void", description: "chronicle_button_prop_onclick", required: false },
        { name: "hoverColor", type: "string", defaultValue: "#a594fd", description: "chronicle_button_prop_hovercolor", required: false },
        { name: "hoverForeground", type: "string", description: "chronicle_button_prop_hoverforeground", required: false },
        { name: "width", type: "string", defaultValue: "160px", description: "chronicle_button_prop_width", required: false },
        { name: "outlined", type: "boolean", defaultValue: "false", description: "chronicle_button_prop_outlined", required: false },
        { name: "outlinePaddingAdjustment", type: "string", defaultValue: "2px", description: "chronicle_button_prop_outlinepadding", required: false },
        { name: "borderRadius", type: "string", defaultValue: "8px", description: "chronicle_button_prop_borderradius", required: false },
        { name: "fontFamily", type: "string", description: "chronicle_button_prop_fontfamily", required: false },
        { name: "outlinedButtonBackgroundOnHover", type: "string", defaultValue: "transparent", description: "chronicle_button_prop_outlinedhoverbg", required: false },
        { name: "customBackground", type: "string", defaultValue: "#f0f0f1", description: "chronicle_button_prop_custombg", required: false },
        { name: "customForeground", type: "string", defaultValue: "#1a1a24", description: "chronicle_button_prop_customfg", required: false },
        { name: "fontSize", type: "string", defaultValue: "1.025rem", description: "chronicle_button_prop_fontsize", required: false },
        { name: "lineHeight", type: "string", defaultValue: "1", description: "chronicle_button_prop_lineheight", required: false },
        { name: "outlineBorderWidth", type: "string", defaultValue: "1px", description: "chronicle_button_prop_borderwidth", required: false },
        { name: "padding", type: "string", description: "chronicle_button_prop_padding", required: false },
    ],
  },
  {
    id: "refined-chronicle-button",
    title: "refined_chronicle_button_title",
    description: "refined_chronicle_button_desc",
    demo: RefinedChronicleButtonPreviewDemo,
    demoFullPage: RefinedChronicleButtonFullPageDemo,
    dependencies: "npm install lucide-react",
    credit: `[Chronicle Button](https://codepen.io/Haaguitos/pen/OJrVZdJ) by [Haaguitos](https://codepen.io/Haaguitos)`,
    usage: `// Path to the "RefinedChronicleButton.tsx" file

import RefinedChronicleButton from "@/app/the-actual-components/refined-chronicle-button/RefinedChronicleButton";
import {
  Globe,
  Check,
  Trash2,
  Mail,
  Star,
  CloudLightning,
  Flame,
  Archive,
  Leaf,
  Heart,
  Home,
  Gem,
  Lock,
  Ghost
} from "lucide-react";

export default function RefinedChronicleButtonDemo() {
  return (
    <div
      id="refined-buttons-wrapper"
      className="flex flex-wrap gap-5 items-center justify-center p-12"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* 1 - Default */}
      <RefinedChronicleButton onClick={() => console.log("Button 1 clicked")}>
        Default
      </RefinedChronicleButton>

      {/* 2 - Info */}
      <RefinedChronicleButton
        backgroundColor="#0ea5e9"
        hoverBackgroundColor="#0369a1"
        textColor="#f0f9ff"
        hoverTextColor="#e0f2fe"
        borderRadius={12}
        fontWeight={600}
        onClick={() => console.log("Button 2 clicked")}
      >
        <Globe /> Info
      </RefinedChronicleButton>

      {/* 3 - Success */}
      <RefinedChronicleButton
        backgroundColor="#22c55e"
        hoverBackgroundColor="#15803d"
        textColor="#0a0a0a"
        hoverTextColor="#f0fdf4"
        borderRadius={20}
        iconSize={20}
        onClick={() => console.log("Button 3 clicked")}
      >
        <Check /> Success
      </RefinedChronicleButton>

      {/* 4 - Delete */}
      <RefinedChronicleButton
        variant="outline"
        backgroundColor="transparent"
        hoverBackgroundColor="#dc2626"
        borderColor="#dc2626"
        hoverBorderColor="#b91c1c"
        textColor="#dc2626"
        hoverTextColor="#fee2e2"
        borderRadius={10}
        onClick={() => console.log("Button 4 clicked")}
      >
        <Trash2 /> Delete
      </RefinedChronicleButton>

      {/* 5 - Inbox */}
      <RefinedChronicleButton
        backgroundColor="#0a0a0a"
        textColor="#fff"
        hoverTextColor="#fff"
        borderColor="#262626"
        borderVisible
        hoverBorderVisible
        hoverBorderColor="#00a7fa"
        hoverBackgroundColor="#00a7fa"
        borderWidth={1}
        borderRadius={8}
        onClick={() => console.log("Button 5 clicked")}
      >
        <Mail /> Inbox
      </RefinedChronicleButton>

      {/* 6 - Ghost */}
      <RefinedChronicleButton
        variant="ghost"
        backgroundColor="transparent"
        hoverBackgroundColor="#9333ea"
        textColor="#9ca3af"
        hoverTextColor="#fff"
        onClick={() => console.log("Button 6 clicked")}
      >
        <Ghost /> Ghost
      </RefinedChronicleButton>

      {/* 7 - Archive outline */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#6366f1"
        hoverBorderColor="#4338ca"
        textColor="#6366f1"
        hoverTextColor="#fff"
        hoverBackgroundColor="#6366f1"
        borderRadius={10}
        onClick={() => console.log("Button 7 clicked")}
      >
        <Archive /> Archive
      </RefinedChronicleButton>

      {/* 8 - RTL Success */}
      <RefinedChronicleButton
        backgroundColor="#22c55e"
        hoverBackgroundColor="#15803d"
        textColor="#fff"
        hoverTextColor="#d1fae5"
        borderRadius={20}
        isRTL
        onClick={() => console.log("Button 8 clicked")}
      >
        <Check /> הצלחה
      </RefinedChronicleButton>

      {/* 9 - Encrypt */}
      <RefinedChronicleButton
        backgroundColor="#0B87BF"
        hoverBackgroundColor="#A87EF3"
        textColor="#fff"
        hoverTextColor="#111"
        borderRadius={0}
        onClick={() => console.log("Button 9 clicked")}
      >
        <Lock /> Encrypt
      </RefinedChronicleButton>

      {/* 10 - Docs */}
      <RefinedChronicleButton
        backgroundColor="#6366f1"
        hoverBackgroundColor="#06b6d4"
        textColor="#fff"
        hoverTextColor="#f0fdfa"
        borderRadius={12}
        onClick={() => console.log("Button 10 clicked")}
      >
        <Archive /> Docs
      </RefinedChronicleButton>

      {/* 11 - Favorites */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#f43f5e"
        textColor="#f43f5e"
        hoverBackgroundColor="#f43f5e"
        hoverTextColor="#fff"
        borderRadius={8}
        onClick={() => console.log("Button 11 clicked")}
      >
        <Heart /> Favorites
      </RefinedChronicleButton>

      {/* 12 - RTL Love */}
      <RefinedChronicleButton
        backgroundColor="#ec4899"
        hoverBackgroundColor="#e11d48"
        textColor="#fff"
        hoverTextColor="#fce7f3"
        isRTL
        borderRadius={16}
        onClick={() => console.log("Button 12 clicked")}
      >
        <Heart /> אהבה
      </RefinedChronicleButton>

      {/* 13 - Highlight */}
      <RefinedChronicleButton
        backgroundColor="#2563eb"
        hoverBackgroundColor="#7e22ce"
        textColor="#fff"
        hoverTextColor="#fef3c7"
        onClick={() => console.log("Button 13 clicked")}
      >
        <Star /> Highlight
      </RefinedChronicleButton>

      {/* 14 - RTL Home */}
      <RefinedChronicleButton
        backgroundColor="#10b981"
        hoverBackgroundColor="#047857"
        textColor="#064e3b"
        hoverTextColor="#d1fae5"
        isRTL
        onClick={() => console.log("Button 14 clicked")}
      >
        <Home /> בית
      </RefinedChronicleButton>

      {/* 15 - Indigo */}
      <RefinedChronicleButton
        backgroundColor="#4338ca"
        hoverBackgroundColor="#312e81"
        textColor="#fff"
        hoverTextColor="#ede9fe"
        fontWeight={700}
        onClick={() => console.log("Button 15 clicked")}
      >
        Indigo
      </RefinedChronicleButton>

      {/* 16 - Deploy */}
      <RefinedChronicleButton
        backgroundColor="#fde047"
        hoverBackgroundColor="#ea580c"
        textColor="#0a0a0a"
        hoverTextColor="#fff"
        borderRadius={14}
        onClick={() => console.log("Button 16 clicked")}
      >
        Deploy
      </RefinedChronicleButton>

      {/* 17 - RTL Save */}
      <RefinedChronicleButton
        backgroundColor="#22c55e"
        hoverBackgroundColor="#0d9488"
        textColor="#0a0a0a"
        hoverTextColor="#ecfeff"
        isRTL
        onClick={() => console.log("Button 17 clicked")}
      >
        <Check /> שמור
      </RefinedChronicleButton>

      {/* 18 - Explore */}
      <RefinedChronicleButton
        backgroundColor="#06b6d4"
        hoverBackgroundColor="#2563eb"
        textColor="#ecfeff"
        hoverTextColor="#fff"
        fontSize={18}
        onClick={() => console.log("Button 18 clicked")}
      >
        Explore
      </RefinedChronicleButton>

      {/* 19 - Music */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#9333ea"
        textColor="#9333ea"
        hoverBackgroundColor="#9333ea"
        hoverTextColor="#fff"
        borderWidth={2}
        onClick={() => console.log("Button 19 clicked")}
      >
        <CloudLightning /> Music
      </RefinedChronicleButton>

      {/* 20 - RTL Mail */}
      <RefinedChronicleButton
        backgroundColor="#0a0a0a"
        hoverBackgroundColor="#00a7fa"
        textColor="#fff"
        hoverTextColor="#0a0a0a"
        isRTL
        onClick={() => console.log("Button 20 clicked")}
      >
        <Mail /> דואר
      </RefinedChronicleButton>

      {/* 21 - Emerald */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#10b981"
        textColor="#10b981"
        hoverBackgroundColor="#10b981"
        hoverTextColor="#fff"
        hoverBorderColor="#065f46"
        onClick={() => console.log("Button 21 clicked")}
      >
        <Gem /> Emerald
      </RefinedChronicleButton>

      {/* 22 - Subtle */}
      <RefinedChronicleButton
        backgroundColor="#f4f4f5"
        hoverBackgroundColor="#e4e4e7"
        textColor="#27272a"
        hoverTextColor="#111827"
        fontWeight={400}
        onClick={() => console.log("Button 22 clicked")}
      >
        Subtle
      </RefinedChronicleButton>

      {/* 23 - Pinky */}
      <RefinedChronicleButton
        backgroundColor="#f472b6"
        hoverBackgroundColor="#db2777"
        textColor="#fff"
        borderRadius={18}
        onClick={() => console.log("Button 23 clicked")}
      >
        Pinky
      </RefinedChronicleButton>

      {/* 24 - RTL Docs */}
      <RefinedChronicleButton
        backgroundColor="#06b6d4"
        hoverBackgroundColor="#0ea5e9"
        textColor="#fff"
        hoverTextColor="#f0fdfa"
        isRTL
        onClick={() => console.log("Button 24 clicked")}
      >
        <Archive /> מסמכים
      </RefinedChronicleButton>

      {/* 25 - Glow */}
      <RefinedChronicleButton
        backgroundColor="#7e22ce"
        hoverBackgroundColor="#4c1d95"
        textColor="#fff"
        iconStrokeWidth={1}
        onClick={() => console.log("Button 25 clicked")}
      >
        Glow
      </RefinedChronicleButton>

      {/* 26 - Lime */}
      <RefinedChronicleButton
        backgroundColor="#166534"
        hoverBackgroundColor="#84cc16"
        textColor="#dcfce7"
        hoverTextColor="#0a0a0a"
        onClick={() => console.log("Button 26 clicked")}
      >
        <Leaf /> Check
      </RefinedChronicleButton>

      {/* 27 - Bold Blue */}
      <RefinedChronicleButton
        backgroundColor="#1d4ed8"
        hoverBackgroundColor="#1e3a8a"
        textColor="#e0f2fe"
        fontWeight={900}
        onClick={() => console.log("Button 27 clicked")}
      >
        BoldBlue
      </RefinedChronicleButton>

      {/* 28 - RTL Flame */}
      <RefinedChronicleButton
        backgroundColor="#ea580c"
        hoverBackgroundColor="#c2410c"
        textColor="#fff"
        isRTL
        onClick={() => console.log("Button 28 clicked")}
      >
        <Flame /> אש
      </RefinedChronicleButton>

      {/* 29 - DarkGem */}
      <RefinedChronicleButton
        backgroundColor="#065f46"
        hoverBackgroundColor="#022c22"
        textColor="#a7f3d0"
        borderRadius={20}
        onClick={() => console.log("Button 29 clicked")}
      >
        <Gem /> DarkGem
      </RefinedChronicleButton>

      {/* 30 - Mint */}
      <RefinedChronicleButton
        backgroundColor="#99f6e4"
        hoverBackgroundColor="#2dd4bf"
        textColor="#064e3b"
        hoverTextColor="#fff"
        onClick={() => console.log("Button 30 clicked")}
      >
        Mint
      </RefinedChronicleButton>

      {/* 31 - LargeGray */}
      <RefinedChronicleButton
        size="lg"
        backgroundColor="#d4d4d8"
        hoverBackgroundColor="#a1a1aa"
        textColor="#111827"
        onClick={() => console.log("Button 31 clicked")}
      >
        LargeGray
      </RefinedChronicleButton>

      {/* 32 - OutlineMail */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#2563eb"
        hoverBackgroundColor="#2563eb"
        textColor="#2563eb"
        hoverTextColor="#fff"
        onClick={() => console.log("Button 32 clicked")}
      >
        <Mail /> OutlineMail
      </RefinedChronicleButton>

      {/* 33 - FunPink */}
      <RefinedChronicleButton
        backgroundColor="#db2777"
        hoverBackgroundColor="#9d174d"
        textColor="#fff"
        borderWidth={2}
        onClick={() => console.log("Button 33 clicked")}
      >
        FunPink
      </RefinedChronicleButton>

      {/* 34 - RTL Home */}
      <RefinedChronicleButton
        backgroundColor="#22c55e"
        hoverBackgroundColor="#166534"
        textColor="#d1fae5"
        isRTL
        onClick={() => console.log("Button 34 clicked")}
      >
        <Home /> דף הבית
      </RefinedChronicleButton>

      {/* 35 - Crystal */}
      <RefinedChronicleButton
        backgroundColor="#0ea5e9"
        hoverBackgroundColor="#0284c7"
        textColor="#f0fdfa"
        hoverTextColor="#1e3a8a"
        fontSize={18}
        fontWeight={700}
        borderRadius={25}
        padding="1rem 2.5rem"
        onClick={() => console.log("Button 35 clicked")}
      >
        <Gem /> Crystal
      </RefinedChronicleButton>

      {/* 36 - Titan */}
      <RefinedChronicleButton
        backgroundColor="#374151"
        hoverBackgroundColor="#111827"
        textColor="#f9fafb"
        hoverTextColor="#e5e7eb"
        fontWeight={900}
        fontSize={20}
        borderRadius={12}
        onClick={() => console.log("Button 36 clicked")}
      >
        Titanium
      </RefinedChronicleButton>

      {/* 37 - Neon Icon */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#a855f7"
        hoverBorderColor="#ec4899"
        textColor="#a855f7"
        hoverTextColor="#fff"
        backgroundColor="transparent"
        hoverBackgroundColor="#1d1d1d"
        borderWidth={3}
        borderRadius={500}
        size="lg"
        iconSize={34}
        iconStrokeWidth={2.35}
        padding="32px"
        onClick={() => console.log("Button 37 clicked")}
      >
        <Star />
      </RefinedChronicleButton>

      {/* 38 - RTL Lock */}
      <RefinedChronicleButton
        backgroundColor="#0f172a"
        hoverBackgroundColor="#1e293b"
        textColor="#38bdf8"
        hoverTextColor="#f0fdfa"
        borderColor="#38bdf8"
        hoverBorderColor="#06b6d4"
        borderVisible
        hoverBorderVisible
        borderWidth={2}
        fontWeight={600}
        fontSize={20}
        borderRadius={16}
        isRTL
        onClick={() => console.log("Button 38 clicked")}
      >
        <Lock /> הצפנה
      </RefinedChronicleButton>
    </div>
  );
}
`,
    code: `'use client';
import React, { ReactNode, useEffect, useRef } from 'react';

export interface RefinedChronicleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  borderWidth?: string | number;
  borderVisible?: boolean;
  hoverBorderVisible?: boolean;
  borderRadius?: string | number;
  fontSize?: string | number;
  fontWeight?: number | string;
  buttonHeight?: string | number;
  padding?: string;
  iconSize?: number;
  iconStrokeWidth?: number;
  iconTextGap?: string | number;
  isRTL?: boolean;
  width?: string | number;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function separateContent(children: ReactNode): ReactNode[] {
  if (typeof children === 'string' || typeof children === 'number') return [children];
  if (Array.isArray(children)) return children;
  if (React.isValidElement(children)) return [children];
  return [children];
}

const RefinedChronicleButton = React.forwardRef<HTMLButtonElement, RefinedChronicleButtonProps>(
  (
    {
      children,
      variant = 'default',
      size = 'default',
      backgroundColor = '#fafafa',
      hoverBackgroundColor = '#00a7fa',
      textColor = '#0a0a0a',
      hoverTextColor = '#fff',
      borderColor = '#cccccc',
      hoverBorderColor = '#999999',
      borderWidth = 1,
      borderVisible = false,
      hoverBorderVisible = false,
      borderRadius = 8,
      fontSize = '1rem',
      fontWeight = 500,
      buttonHeight = '2.5rem',
      padding = '0.75rem 1.5rem',
      iconSize = 18,
      iconStrokeWidth = 2,
      iconTextGap = '0.5rem',
      isRTL = false,
      width = 'auto',
      disabled = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLButtonElement | null>(null);
    const buttonRef = (ref as React.RefObject<HTMLButtonElement>) || internalRef;

    const contentChildren = separateContent(children);
    const buttonClasses = \`RefinedchronicleButton variant-\${variant} \${
      size !== 'default' ? \`size-\${size}\` : ''
    } \${className ?? ''}\`;

    const gapValue = typeof iconTextGap === 'number' ? \`\${iconTextGap}px\` : iconTextGap;
    const showBorder = borderVisible || variant === 'outline';
    const showHoverBorder = hoverBorderVisible || variant === 'outline';

    const resolvedBorder = showBorder
      ? \`\${typeof borderWidth === 'number' ? borderWidth + 'px' : borderWidth} solid \${borderColor}\`
      : '0px solid transparent';
    const resolvedHoverBorderColor = showHoverBorder ? hoverBorderColor : 'transparent';

    const resolvedFontSize =
      typeof fontSize === 'number'
        ? \`\${fontSize}px\`
        : typeof fontSize === 'string'
        ? fontSize
        : '1rem';

    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: gapValue,
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      borderRadius: typeof borderRadius === 'number' ? \`\${borderRadius}px\` : borderRadius,
      backgroundColor,
      color: textColor,
      border: resolvedBorder,
      fontSize: resolvedFontSize,
      fontWeight,
      height: typeof buttonHeight === 'number' ? \`\${buttonHeight}px\` : buttonHeight,
      padding,
      transition:
        'background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out, opacity 0.25s ease-in-out, transform 0.25s ease-in-out',
      direction: isRTL ? 'rtl' : 'ltr',
      userSelect: 'none',
      overflow: 'hidden',
      position: 'relative',
      width: typeof width === 'number' ? \`\${width}px\` : width,
    };

    const hoverStyle: React.CSSProperties = {
      backgroundColor: hoverBackgroundColor || backgroundColor,
      color: hoverTextColor || textColor,
      borderColor: resolvedHoverBorderColor,
    };

    const emStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: gapValue,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      willChange: 'transform, opacity',
      transition:
        'color 0.3s ease-in-out, transform 0.55s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.35s linear 0.2s',
    };

    const applyBaseStyle = (el: HTMLButtonElement | null) => {
      if (!el) return;
      Object.assign(el.style, baseStyle);
    };

    const applyHoverStyle = (el: HTMLButtonElement | null) => {
      if (!el) return;
      if (disabled) {
        applyBaseStyle(el);
        return;
      }
      Object.assign(el.style, hoverStyle);
    };

    useEffect(() => {
      const el = buttonRef.current;
      if (!el) return;
      if (disabled) {
        el.style.pointerEvents = 'none';
        applyBaseStyle(el);
        el.classList.remove('hover');
      } else {
        el.style.pointerEvents = '';
        applyBaseStyle(el);
      }
      el.style.cursor = disabled ? 'not-allowed' : 'pointer';
      el.style.opacity = String(disabled ? 0.6 : 1);
    }, [disabled, buttonRef]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      applyHoverStyle(e.currentTarget);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      applyBaseStyle(e.currentTarget);
    };

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
      applyBaseStyle(e.currentTarget);
    };

    return (
      <>
        <button
          {...props}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
          className={buttonClasses}
          type="button"
          style={baseStyle}
          disabled={disabled}
          onClick={(e) => !disabled && onClick?.(e)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onBlur={handleBlur}
        >
          {variant === 'default' ? (
            <span className="flip-wrapper">
              <span>
                <em style={emStyle}>
                  {contentChildren.map((child, i) =>
                    React.isValidElement(child)
                      ? React.cloneElement(child, {
                          key: \`\${i}-front\`,
                          style: { display: 'inline-block', ...(child.props.style || {}) },
                        })
                      : child
                  )}
                </em>
              </span>
              <span>
                <em style={emStyle}>
                  {contentChildren.map((child, i) =>
                    React.isValidElement(child)
                      ? React.cloneElement(child, {
                          key: \`\${i}-back\`,
                          style: { display: 'inline-block', ...(child.props.style || {}) },
                        })
                      : child
                  )}
                </em>
              </span>
            </span>
          ) : (
            <span style={emStyle}>
              {contentChildren.map((child, i) =>
                React.isValidElement(child)
                  ? React.cloneElement(child, {
                      key: i,
                      style: { display: 'inline-block', ...(child.props.style || {}) },
                    })
                  : child
              )}
            </span>
          )}
        </button>

        <style jsx>{\`
          .RefinedchronicleButton {
            border-radius: var(--radius, 8px);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.25s ease-in-out, color 0.25s ease-in-out,
              border-color 0.25s ease-in-out, opacity 0.25s ease-in-out,
              transform 0.25s ease-in-out;
            position: relative;
            height: 2.5rem;
            gap: 0.5rem;
            overflow: hidden;
          }
          .RefinedchronicleButton:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
          .RefinedchronicleButton.variant-default {
            background: transparent;
            border-color: transparent;
          }
          .RefinedchronicleButton.variant-outline {
            background: transparent;
          }
          .RefinedchronicleButton.variant-ghost {
            background: transparent;
            border-color: transparent;
          }
          .RefinedchronicleButton.size-lg {
            height: 2.75rem;
            padding-left: 2rem;
            padding-right: 2rem;
            font-size: 1.125rem;
          }
          .RefinedchronicleButton.size-sm {
            height: 2.25rem;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .flip-wrapper {
            position: relative;
            display: block;
            perspective: 108px;
          }
          .flip-wrapper span {
            display: block;
          }
          .flip-wrapper span:nth-of-type(2) {
            position: absolute;
            top: 0;
            left: 0;
          }
          .flip-wrapper em {
            font-style: normal;
            display: inline-flex;
            align-items: center;
            gap: var(--icon-text-gap, 0.5rem);
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
            will-change: transform, opacity;
            transition: color 0.3s ease-in-out,
              transform 0.55s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.35s linear 0.2s;
          }
          .flip-wrapper span:nth-of-type(1) em {
            transform-origin: top;
            opacity: 1;
            transform: rotateX(0deg);
          }
          .flip-wrapper span:nth-of-type(2) em {
            opacity: 0;
            transform: rotateX(-90deg) scaleX(0.9) translate3d(0, 10px, 0);
            transform-origin: bottom;
          }
          .RefinedchronicleButton:not(:disabled):hover .flip-wrapper span:nth-of-type(1) em {
            opacity: 0;
            transform: rotateX(90deg) scaleX(0.9) translate3d(0, -10px, 0);
          }
          .RefinedchronicleButton:not(:disabled):hover .flip-wrapper span:nth-of-type(2) em {
            opacity: 1;
            transform: rotateX(0deg) scaleX(1) translateZ(0);
            transition: color 0.3s ease-in-out,
              transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.35s linear 0.3s;
          }
        \`}</style>
      </>
    );
  }
);

RefinedChronicleButton.displayName = 'RefinedChronicleButton';
export default RefinedChronicleButton;
`,
    props: [
      { name: "children", type: "ReactNode", description: "refined_chronicle_button_prop_children", required: true },
      { name: "variant", type: "'default' | 'outline' | 'ghost'", defaultValue: "'default'", description: "refined_chronicle_button_prop_variant", required: false },
      { name: "size", type: "'default' | 'sm' | 'lg'", defaultValue: "'default'", description: "refined_chronicle_button_prop_size", required: false },
      { name: "backgroundColor", type: "string", defaultValue: "'#fafafa'", description: "refined_chronicle_button_prop_backgroundColor", required: false },
      { name: "hoverBackgroundColor", type: "string", defaultValue: "'#00a7fa'", description: "refined_chronicle_button_prop_hoverBackgroundColor", required: false },
      { name: "textColor", type: "string", defaultValue: "'#0a0a0a'", description: "refined_chronicle_button_prop_textColor", required: false },
      { name: "hoverTextColor", type: "string", defaultValue: "'#fff'", description: "refined_chronicle_button_prop_hoverTextColor", required: false },
      { name: "borderColor", type: "string", defaultValue: "'#cccccc'", description: "refined_chronicle_button_prop_borderColor", required: false },
      { name: "hoverBorderColor", type: "string", defaultValue: "'#999999'", description: "refined_chronicle_button_prop_hoverBorderColor", required: false },
      { name: "borderWidth", type: "string | number", defaultValue: "1", description: "refined_chronicle_button_prop_borderWidth", required: false },
      { name: "borderVisible", type: "boolean", defaultValue: "false", description: "refined_chronicle_button_prop_borderVisible", required: false },
      { name: "hoverBorderVisible", type: "boolean", defaultValue: "false", description: "refined_chronicle_button_prop_hoverBorderVisible", required: false },
      { name: "borderRadius", type: "string | number", defaultValue: "8", description: "refined_chronicle_button_prop_borderRadius", required: false },
      { name: "fontSize", type: "string | number", defaultValue: "'1rem'", description: "refined_chronicle_button_prop_fontSize", required: false },
      { name: "fontWeight", type: "number | string", defaultValue: "500", description: "refined_chronicle_button_prop_fontWeight", required: false },
      { name: "buttonHeight", type: "string | number", defaultValue: "'2.5rem'", description: "refined_chronicle_button_prop_buttonHeight", required: false },
      { name: "padding", type: "string", defaultValue: "'0.75rem 1.5rem'", description: "refined_chronicle_button_prop_padding", required: false },
      { name: "iconSize", type: "number", defaultValue: "18", description: "refined_chronicle_button_prop_iconSize", required: false },
      { name: "iconStrokeWidth", type: "number", defaultValue: "2", description: "refined_chronicle_button_prop_iconStrokeWidth", required: false },
      { name: "iconTextGap", type: "string | number", defaultValue: "'0.5rem'", description: "refined_chronicle_button_prop_iconTextGap", required: false },
      { name: "isRTL", type: "boolean", defaultValue: "false", description: "refined_chronicle_button_prop_isRTL", required: false },
      { name: "width", type: "string | number", defaultValue: "'auto'", description: "refined_chronicle_button_prop_width", required: false },
      { name: "disabled", type: "boolean", defaultValue: "false", description: "refined_chronicle_button_prop_disabled", required: false },
      { name: "onClick", type: "(event: React.MouseEvent<HTMLButtonElement>) => void", description: "refined_chronicle_button_prop_onClick", required: false }
    ],
  },
  {
    id: "circular-testimonials",
    title: "circular_testimonials_title",
    description: "circular_testimonials_desc",

    demoFullPage: CircularTestimonialsFullPageDemo,
    noPadding: true,
    dependencies: "npm install framer-motion gsap lucide-react",
    disclaimer: 'circular_testimonials_disclaimer',
    credit: `[Animated Testimonials](https://ui.aceternity.com/components/animated-testimonials) by [Aceternity UI](https://ui.aceternity.com/)
[Text Reveal Animation](https://codepen.io/swatiparge/pen/LYVMEag) by [Swati Parge](https://codepen.io/swatiparge)

Used photos:

- Photo by [Ilya Pavlov](https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/woman-standing-beside-lights-xE87C_OvVO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Bave Pictures](https://unsplash.com/@bavepictures?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-in-gray-crew-neck-t-shirt-standing-beside-white-wall-MbYgpI1D-cA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Allef Vinicius](https://unsplash.com/@seteph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/closed-eye-woman-wearing-brown-hat-YbzfTr0pwLE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)`,
    usage: `// Path to the "CircularTestimonials.tsx" file
    
import { CircularTestimonials } from "@/app/the-actual-components/circular-testimonials/CircularTestimonials";

export default function CircularTestimonialsDemo() {
  const darkTestimonials = [
    {
      id: "dark-testimonial-1",
      quote:
        "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
      name: "Tamar Mendelson",
      designation: "Restaurant Critic",
      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
    },
    {
      id: "dark-testimonial-2",
      quote:
        "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
      name: "Joe Charlescraft",
      designation: "Frequent Visitor",
      src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
    },
    {
      id: "dark-testimonial-3",
      quote:
        "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
      name: "Martina Edelweist",
      designation: "Satisfied Customer",
      src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#050505] p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div
          className="items-center justify-center relative flex"
          style={{ maxWidth: "1024px" }}
        >
          <CircularTestimonials
            testimonials={darkTestimonials}
            autoplay={true}
            autoplayInterval={7000}
            colors={{
              name: "#fafafa",
              designation: "#aaa",
              testimony: "#fff",
              arrowBackground: "#00A7FA",
              arrowForeground: "#0a0a0a",
              arrowHoverBackground: "#fff",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}`,
    code: `"use client";
    
    import { useEffect, useRef, useState, useMemo, useCallback } from "react";
    import gsap from "gsap";
    import { ArrowLeft, ArrowRight } from "lucide-react";
    import { motion } from "framer-motion";
    
    interface Testimonial {
      id: string;
      quote: string;
      name: string;
      designation: string;
      src: string;
    }
    interface Colors {
      name?: string;
      designation?: string;
      testimony?: string;
      arrowBackground?: string;
      arrowForeground?: string;
      arrowHoverBackground?: string;
    }
    interface FontSizes {
      name?: string;
      designation?: string;
      quote?: string;
    }
    interface CircularTestimonialsProps {
      testimonials: Testimonial[];
      autoplay?: boolean;
      autoplayInterval?: number;
      colors?: Colors;
      fontSizes?: FontSizes;
      isRTL?: boolean;
    }
    
    export function CircularTestimonials({
      testimonials,
      autoplay = true,
      autoplayInterval = 5000,
      colors = {},
      fontSizes = {},
      isRTL = false,
    }: CircularTestimonialsProps) {
      const colorName = colors.name ?? "#000";
      const colorDesignation = colors.designation ?? "#6b7280";
      const colorTestimony = colors.testimony ?? "#4b5563";
      const colorArrowBg = colors.arrowBackground ?? "#141414";
      const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
      const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
      const fontSizeName = fontSizes.name ?? "1.5rem";
      const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
      const fontSizeQuote = fontSizes.quote ?? "1.125rem";
    
      const [activeIndex, setActiveIndex] = useState(0);
      const [direction, setDirection] = useState(1);
      const [hoverPrev, setHoverPrev] = useState(false);
      const [hoverNext, setHoverNext] = useState(false);
    
      const imageContainerRef = useRef<HTMLDivElement>(null);
      const nameRef = useRef<HTMLHeadingElement>(null);
      const designationRef = useRef<HTMLParagraphElement>(null);
      const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
    
      const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
      const activeTestimonial = useMemo(
        () => testimonials[activeIndex],
        [activeIndex, testimonials]
      );
    
      const nameStyle = useMemo(
        () => ({ color: colorName, fontSize: fontSizeName }),
        [colorName, fontSizeName]
      );
      const designationStyle = useMemo(
        () => ({ color: colorDesignation, fontSize: fontSizeDesignation }),
        [colorDesignation, fontSizeDesignation]
      );
      const quoteStyle = useMemo(
        () => ({ color: colorTestimony, fontSize: fontSizeQuote }),
        [colorTestimony, fontSizeQuote]
      );
      const prevArrowStyle = useMemo(
        () => ({ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }),
        [hoverPrev, colorArrowBg, colorArrowHoverBg]
      );
      const nextArrowStyle = useMemo(
        () => ({ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }),
        [hoverNext, colorArrowBg, colorArrowHoverBg]
      );
    
      const calculateGap = useCallback((width: number) => {
        const minWidth = 1024;
        const maxWidth = 1456;
        const minGap = 60;
        const maxGap = 86;
        if (width <= minWidth) return minGap;
        if (width >= maxWidth)
          return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
        return (
          minGap +
          ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth)
        );
      }, []);
    
      const updateTestimonial = useCallback(
        (dir: number) => {
          setDirection(dir);
          setActiveIndex(
            (prev) => (prev + dir + testimonialsLength) % testimonialsLength
          );
        },
        [testimonialsLength]
      );
    
      const animateImages = useCallback(() => {
        if (!imageContainerRef.current) return;
        const containerWidth = imageContainerRef.current.offsetWidth;
        const gap = calculateGap(containerWidth);
        const maxStickUp = gap * 0.8;
    
        testimonials.forEach((_, index) => {
          const img = imageContainerRef.current!.querySelector(
            \`[data-index="\${index}"]\`
          ) as HTMLElement;
          if (!img) return;
          let offset = index - activeIndex;
    
          if (isRTL) {
            offset = -offset; // flip image direction for RTL
          }
    
          if (offset > testimonialsLength / 2) offset -= testimonialsLength;
          if (offset < -testimonialsLength / 2) offset += testimonialsLength;
    
          const zIndex = testimonialsLength - Math.abs(offset);
          const opacity = offset === 0 ? 1 : 0.7;
          const scale = offset === 0 ? 1 : 0.85;
    
          let translateX = "0%";
          let translateY = "0%";
          let rotateY = 0;
          if (offset > 0) {
            translateX = "20%";
            translateY = \`-\${(maxStickUp / img.offsetHeight) * 100}%\`;
            rotateY = -15;
          } else if (offset < 0) {
            translateX = "-20%";
            translateY = \`-\${(maxStickUp / img.offsetHeight) * 100}%\`;
            rotateY = 15;
          }
    
          gsap.to(img, {
            zIndex,
            opacity,
            scale,
            x: translateX,
            y: translateY,
            rotateY,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      }, [activeIndex, calculateGap, testimonials, testimonialsLength, isRTL]);
    
      const wrapLines = (element: HTMLElement, text: string) => {
        element.innerHTML = "";
        const parent = document.createElement("div");
        parent.classList.add("split-parent");
        const child = document.createElement("div");
        child.classList.add("split-child");
        child.textContent = text;
        parent.appendChild(child);
        element.appendChild(parent);
        return child;
      };
    
      const animateNameAndDesignation = useCallback(() => {
        if (!nameRef.current || !designationRef.current) return;
        const nameChild = wrapLines(nameRef.current, activeTestimonial.name);
        const designationChild = wrapLines(
          designationRef.current,
          activeTestimonial.designation
        );
    
        // Visual direction for text animation remains correct
        const visualDir = direction;
        const fromY = visualDir === 1 ? -100 : 100; // swapped earlier
    
        gsap.fromTo(
          nameChild,
          { yPercent: fromY, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out" }
        );
    
        gsap.fromTo(
          designationChild,
          { yPercent: fromY, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            delay: 0.05,
          }
        );
      }, [activeTestimonial, direction, isRTL]);
    
    // Always increment by 1 for next, decrement by 1 for prev
    const handleNext = useCallback(() => {
      updateTestimonial(1);
      stopAutoplay();
    }, [updateTestimonial]);
    
    const handlePrev = useCallback(() => {
      updateTestimonial(-1);
      stopAutoplay();
    }, [updateTestimonial]);
    
    
      const stopAutoplay = useCallback(() => {
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
      }, []);
    
      useEffect(() => {
        animateImages();
        animateNameAndDesignation();
      }, [activeIndex, activeTestimonial, animateImages, animateNameAndDesignation]);
    
      useEffect(() => {
        if (autoplay) {
          autoplayIntervalRef.current = setInterval(
            () => updateTestimonial(1),
            autoplayInterval
          );
        }
        const handleResize = () => animateImages();
        window.addEventListener("resize", handleResize);
        return () => {
          if (autoplayIntervalRef.current)
            clearInterval(autoplayIntervalRef.current);
          window.removeEventListener("resize", handleResize);
          gsap.killTweensOf("[data-index]");
        };
      }, [
        autoplay,
        autoplayInterval,
        updateTestimonial,
        animateImages,
        animateNameAndDesignation,
        isRTL,
      ]);
    
      return (
        <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
          <div className="testimonial-container">
            <div className="testimonial-grid">
              <div className="image-container" ref={imageContainerRef}>
                {testimonials.map((testimonial, index) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="testimonial-image"
                    data-index={index}
                    style={{
                      opacity: index === activeIndex ? 1 : 0.7,
                      zIndex: testimonialsLength - Math.abs(index - activeIndex),
                    }}
                  />
                ))}
              </div>
              <div className="testimonial-content">
                <div>
                  <h3 className="name" ref={nameRef} style={nameStyle}></h3>
                  <p
                    className="designation"
                    ref={designationRef}
                    style={designationStyle}
                  ></p>
                  <motion.p
                    key={activeTestimonial.id}
                    className="quote"
                    style={quoteStyle}
                  >
                    {activeTestimonial.quote.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
                <div className="arrow-buttons">
                  {isRTL ? (
                    <>
                      <button
                        className="arrow-button prev-button"
                        onClick={handlePrev}
                        style={prevArrowStyle}
                        onMouseEnter={() => setHoverPrev(true)}
                        onMouseLeave={() => setHoverPrev(false)}
                      >
                        <ArrowRight size={44} color={colorArrowFg} />
                      </button>
                      <button
                        className="arrow-button next-button"
                        onClick={handleNext}
                        style={nextArrowStyle}
                        onMouseEnter={() => setHoverNext(true)}
                        onMouseLeave={() => setHoverNext(false)}
                      >
                        <ArrowLeft size={44} color={colorArrowFg} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="arrow-button prev-button"
                        onClick={handlePrev}
                        style={prevArrowStyle}
                        onMouseEnter={() => setHoverPrev(true)}
                        onMouseLeave={() => setHoverPrev(false)}
                      >
                        <ArrowLeft size={44} color={colorArrowFg} />
                      </button>
                      <button
                        className="arrow-button next-button"
                        onClick={handleNext}
                        style={nextArrowStyle}
                        onMouseEnter={() => setHoverNext(true)}
                        onMouseLeave={() => setHoverNext(false)}
                      >
                        <ArrowRight size={44} color={colorArrowFg} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            <style jsx>{\`
              .testimonial-container {
                width: 100%;
                max-width: 56rem;
                padding: 2rem;
              }
              .testimonial-grid {
                display: grid;
                gap: 5rem;
              }
              .image-container {
                position: relative;
                width: 100%;
                height: 24rem;
                perspective: 1000px;
              }
              .testimonial-image {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1.5rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                transition: opacity 0.3s ease;
              }
              .testimonial-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
              .name {
                font-weight: bold;
                margin-bottom: 0.25rem;
              }
              .designation {
                margin-bottom: 2rem;
              }
              .quote {
                line-height: 1.75;
              }
              .arrow-buttons {
                display: flex;
                gap: 1.5rem;
                padding-top: 3rem;
              }
              .arrow-button {
                width: 2.7rem;
                height: 2.7rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: background-color 0.3s;
                border: none;
              }
              .split-parent {
                overflow: hidden;
              }
              .split-child {
                display: inline-block;
              }
              @media (min-width: 768px) {
                .testimonial-grid {
                  grid-template-columns: 1fr 1fr;
                }
                .arrow-buttons {
                  padding-top: 0;
                }
              }
            \`}</style>
          </div>
        </div>
      );
    }
    
    export default CircularTestimonials;
`,
    props: [
      { name: 'testimonials', type: 'Testimonial[]', description: 'circular_testimonials_prop_testimonials', required: true },
      { name: 'autoplay', type: 'boolean', defaultValue: 'true', description: 'circular_testimonials_prop_autoplay', required: false },
      { name: 'autoplayInterval', type: 'number', defaultValue: '5000', description: 'circular_testimonials_prop_autoplayInterval', required: false },
      { name: 'colors', type: 'Colors', description: 'circular_testimonials_prop_colors', required: false },
      { name: 'fontSizes', type: 'FontSizes', description: 'circular_testimonials_prop_fontSizes', required: false },
      { name: 'isRTL', type: 'boolean', description: 'circular_testimonials_prop_isRTL', required: false }
    ],
    isPreviewImage: true,
  },
  {
    id: 'slider-hero-section',
    title: 'slider_hero_title',
    description: 'slider_hero_desc',
    demoFullPage: SliderHeroSectionFullPageDemo,
    noPadding: true,
    disclaimer: 'slider_hero_disclaimer',
    dependencies: `npm install styled-components --legacy-peer-deps
npm install gsap --legacy-peer-deps`,
    credit: `Used photos:

- Photo by [Julian O'hayon](https://unsplash.com/@anckor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/space-black-case-apple-watch-silver-macbook-pro-jet-black-iphone-7-plus-and-silver-imac-with-corresponding-boxes-Bs-zngH79Ds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Daniel Romero](https://unsplash.com/@danielromero) on [Unsplash](https://unsplash.com/photos/white-and-blue-game-controller-TpXoTb1uR5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Daniel Romero](https://unsplash.com/@danielromero) on [Unsplash](https://unsplash.com/photos/person-holding-pink-and-black-iphone-case-jcJFOwBTEck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)`,
    usage: `// Path to the "SliderHeroSection.tsx" file
import SliderHeroSection from '@/app/the-actual-components/slider-hero-section/SliderHeroSection'

<SliderHeroSection
  title="Discover cutting-edge tech and top brands at NamerStore – your one-stop destination for brand new, refurbished, and pre-owned electronics"
  showcaseOptions={[
    { text: 'Brand New Electronics', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { text: 'Refurbished iPhones', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { text: 'Pre-owned Samsung Flagships', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]}
  onOptionClick={(option) => console.log(\`Clicked item: \${option}\`)}
  onOptionHover={(option) => console.log(\`Hovered item: \${option}\`)}
/>

<div className="w-[500px] overflow-hidden">
  <SliderHeroSection
    title="גלה טכנולוגיה חדשנית ומותגים מובילים בנמרסטור - היעד שלך למוצרי אלקטרוניקה חדשים, מחודשים ומשומשים."
    showcaseOptions={[
      { text: 'מוצרי אלקטרוניקה חדשים', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { text: 'אייפונים מחודשים', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { text: 'מכשירי סמסונג משומשים', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ]}
    onOptionClick={(option) => console.log(\`Clicked item: \${option}\`)}
    onOptionHover={(option) => console.log(\`Hovered item: \${option}\`)}
    activeOptionColor="#A031EB"
    textColor="#080810"
    imageChangeInterval={3000}
    imageTransitionDuration={0.51}
    darkenImages={-0.5}
    height="760px"
    borderRadius="2.5em"
    mobileTitleAlign="right"
    mobileShowcaseAlign="right"
  />
</div>`,
    code: `"use client"
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

interface ShowcaseOption {
  text: string;
  imageUrl: string;
}

interface SliderHeroSectionProps {
  title: string;
  showcaseOptions: ShowcaseOption[];
  activeOptionColor?: string;
  textColor?: string;
  imageChangeInterval?: number;
  imageTransitionDuration?: number;
  desktopFontSize?: string;
  mobileFontSize?: string;
  desktopShowcaseFontSize?: string;
  mobileShowcaseFontSize?: string;
  desktopVersionBottomThreshold?: number;
  darkenImages?: number;
  desktopPadding?: { top?: string; bottom?: string; leftRight?: string; };
  mobilePadding?: { top?: string; bottom?: string; leftRight?: string; };
  height?: string;
  isBoldFont?: boolean;
  borderRadius?: string;
  onOptionClick?: (index: number) => void;
  onOptionHover?: (index: number) => void;
  desktopTitleAlign?: string;
  mobileTitleAlign?: string;
  desktopShowcaseAlign?: string;
  mobileShowcaseAlign?: string;
}

const isRTLCheck = (text: string): boolean => {
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const SliderHeroSection: React.FC<SliderHeroSectionProps> = ({
  title,
  showcaseOptions,
  activeOptionColor = '#00a6fb',
  textColor = '#ffffff',
  imageChangeInterval = 4000,
  imageTransitionDuration = 0.76,
  desktopFontSize = '62px',
  mobileFontSize = '33px',
  desktopShowcaseFontSize = '36px',
  mobileShowcaseFontSize = '25px',
  desktopVersionBottomThreshold = 768,
  darkenImages = 0.5,
  desktopPadding = { top: '62px', bottom: '67px', leftRight: '24px' },
  mobilePadding = { top: '39px', bottom: '39px', leftRight: '10px' },
  height = '100vh',
  isBoldFont = true,
  borderRadius = 'none',
  onOptionClick,
  onOptionHover,
  desktopTitleAlign = 'left',
  mobileTitleAlign = 'center',
  desktopShowcaseAlign = 'left',
  mobileShowcaseAlign = 'center',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileView(window.innerWidth < desktopVersionBottomThreshold);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % showcaseOptions.length);
      }, imageChangeInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, imageChangeInterval, showcaseOptions.length]);

  useEffect(() => {
    if (imagesRef.current) {
      const images = imagesRef.current.children;
      gsap.to(images, { opacity: 0, duration: imageTransitionDuration, ease: 'power2.inOut', });
      gsap.to(images[activeIndex], { opacity: 1, duration: imageTransitionDuration, ease: 'power2.inOut', });
    }
    if (optionsRef.current) {
      const options = optionsRef.current.children;
      gsap.to(options, { color: textColor, duration: 0.3, ease: 'power2.inOut', });
      gsap.to(options[activeIndex], { color: activeOptionColor, duration: 0.3, ease: 'power2.inOut', });
    }
  }, [activeIndex, imageTransitionDuration, activeOptionColor, textColor]);

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
    onOptionClick?.(index);
  };

  const handleOptionHover = (index: number) => {
    setActiveIndex(index);
    setIsHovered(true);
    onOptionHover?.(index);
  };

  const handleOptionLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container ref={containerRef} $height={height} $isMobileView={isMobileView} $desktopPadding={desktopPadding} $mobilePadding={mobilePadding} $borderRadius={borderRadius}>
      <BackgroundImages ref={imagesRef}>
        {showcaseOptions.map((option, index) => (
          <BackgroundImage key={index} $imageUrl={option.imageUrl} $isActive={index === activeIndex} $borderRadius={borderRadius} />
        ))}
      </BackgroundImages>
      <Overlay $darkenImages={darkenImages} $borderRadius={borderRadius} />
      <Content>
        <Title
          $isRTL={isRTLCheck(title)}
          $isMobileView={isMobileView}
          $desktopFontSize={desktopFontSize}
          $mobileFontSize={mobileFontSize}
          $isBoldFont={isBoldFont}
          $color={textColor}
          $desktopAlign={desktopTitleAlign}
          $mobileAlign={mobileTitleAlign}
        >
          {title}
        </Title>
        <ShowcaseContainer
          ref={optionsRef}
          $isRTL={showcaseOptions.length > 0 ? isRTLCheck(showcaseOptions[0].text): false}
          $isMobileView={isMobileView}
          $desktopAlign={desktopShowcaseAlign}
          $mobileAlign={mobileShowcaseAlign}
        >
          {showcaseOptions.map((option, index) => (
            <ShowcaseOption
              key={index}
              onClick={() => handleOptionClick(index)}
              onMouseEnter={() => handleOptionHover(index)}
              onMouseLeave={handleOptionLeave}
              $isMobileView={isMobileView}
              $desktopShowcaseFontSize={desktopShowcaseFontSize}
              $mobileShowcaseFontSize={mobileShowcaseFontSize}
              $isBoldFont={isBoldFont}
              $isRTL={isRTLCheck(option.text)}
              $isActive={index === activeIndex}
              $activeColor={activeOptionColor}
              $textColor={textColor}
              $desktopAlign={desktopShowcaseAlign}
              $mobileAlign={mobileShowcaseAlign}
            >
              {option.text}
            </ShowcaseOption>
          ))}
        </ShowcaseContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ $height: string; $isMobileView: boolean; $desktopPadding: { top?: string; bottom?: string; leftRight?: string; }; $mobilePadding: { top?: string; bottom?: string; leftRight?: string; }; $borderRadius: string; }>\`
  height: \${props => props.$height};
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: \${props => props.$isMobileView
    ? \`\${props.$mobilePadding.top} \${props.$mobilePadding.leftRight} \${props.$mobilePadding.bottom}\`
    : \`\${props.$desktopPadding.top} \${props.$desktopPadding.leftRight} \${props.$desktopPadding.bottom}\`};
  border-radius: \${props => props.$borderRadius};
\`;

const BackgroundImages = styled.div\`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
\`;

const BackgroundImage = styled.div<{ $imageUrl: string; $isActive: boolean; $borderRadius: string }>\`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(\${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  opacity: \${props => props.$isActive ? 1 : 0};
  border-radius: \${props => props.$borderRadius};
\`;

const Overlay = styled.div<{ $darkenImages: number; $borderRadius: string }>\`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: \${props => 
    props.$darkenImages >= 0
      ? \`rgba(0, 0, 0, \${props.$darkenImages})\`
      : \`rgba(255, 255, 255, \${Math.abs(props.$darkenImages)})\`
  };
  z-index: 1;
  border-radius: \${props => props.$borderRadius};
\`;

const Content = styled.div\`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
\`;

const Title = styled.h1<{ $isRTL: boolean; $isMobileView: boolean; $desktopFontSize: string; $mobileFontSize: string; $isBoldFont: boolean; $color: string; $desktopAlign: string; $mobileAlign: string; }>\`
  font-size: \${props => props.$isMobileView ? props.$mobileFontSize : props.$desktopFontSize};
  text-align: \${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  margin: 0;
  font-weight: \${props => props.$isBoldFont ? 'bold' : 'normal'};
  color: \${props => props.$color};
  direction: \${props => props.$isRTL ? 'rtl' : 'ltr'};
\`;

const ShowcaseContainer = styled.div<{ $isRTL: boolean; $isMobileView: boolean; $desktopAlign: string; $mobileAlign: string; }>\`
  display: inline-flex;
  flex-direction: column;
  align-items: \${props => {
    if (props.$isMobileView) return props.$mobileAlign === 'left' ? 'flex-start' : props.$mobileAlign === 'right' ? 'flex-end' : 'center';
    return props.$desktopAlign === 'left' ? 'flex-start' : props.$desktopAlign === 'right' ? 'flex-end' : 'center';
  }};
  align-self: \${props => {
    if (props.$isMobileView) return props.$mobileAlign === 'left' ? 'flex-start' : props.$mobileAlign === 'right' ? 'flex-end' : 'center';
    return props.$desktopAlign === 'left' ? 'flex-start' : props.$desktopAlign === 'right' ? 'flex-end' : 'center';
  }};
  direction: \${props => props.$isRTL ? 'rtl' : 'ltr'};
\`;

const ShowcaseOption = styled.div<{ $isMobileView: boolean; $desktopShowcaseFontSize: string; $mobileShowcaseFontSize: string; $isBoldFont: boolean; $isRTL: boolean; $isActive: boolean; $activeColor: string; $textColor: string; $desktopAlign: string; $mobileAlign: string; }>\`
  cursor: pointer;
  font-size: \${props => props.$isMobileView ? props.$mobileShowcaseFontSize : props.$desktopShowcaseFontSize};
  font-weight: \${props => props.$isBoldFont ? 'bold' : 'normal'};
  text-align: \${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  direction: \${props => props.$isRTL ? 'rtl' : 'ltr'};
  color: \${props => props.$isActive ? props.$activeColor : props.$textColor};
  transition: color 0.3s ease;
\`;

export default SliderHeroSection;`,
    props: [
      { name: "title", type: "string", description: "slider_hero_prop_title", required: true },
      { name: "showcaseOptions", type: "ShowcaseOption[]", description: "slider_hero_prop_showcaseOptions", required: true },
      { name: "activeOptionColor", type: "string", defaultValue: "#00a6fb", description: "slider_hero_prop_activeOptionColor", required: false },
      { name: "textColor", type: "string", defaultValue: "#ffffff", description: "slider_hero_prop_textColor", required: false },
      { name: "imageChangeInterval", type: "number", defaultValue: "4000", description: "slider_hero_prop_imageChangeInterval", required: false },
      { name: "imageTransitionDuration", type: "number", defaultValue: "0.76", description: "slider_hero_prop_imageTransitionDuration", required: false },
      { name: "desktopFontSize", type: "string", defaultValue: "62px", description: "slider_hero_prop_desktopFontSize", required: false },
      { name: "mobileFontSize", type: "string", defaultValue: "33px", description: "slider_hero_prop_mobileFontSize", required: false },
      { name: "desktopShowcaseFontSize", type: "string", defaultValue: "36px", description: "slider_hero_prop_desktopShowcaseFontSize", required: false },
      { name: "mobileShowcaseFontSize", type: "string", defaultValue: "25px", description: "slider_hero_prop_mobileShowcaseFontSize", required: false },
      { name: "desktopVersionBottomThreshold", type: "number", defaultValue: "768", description: "slider_hero_prop_desktopVersionBottomThreshold", required: false },
      { name: "darkenImages", type: "number", defaultValue: "0.5", description: "slider_hero_prop_darkenImages", required: false },
      { name: "desktopPadding", type: "object", defaultValue: "{ top: '62px', bottom: '67px', leftRight: '24px' }", description: "slider_hero_prop_desktopPadding", required: false },
      { name: "mobilePadding", type: "object", defaultValue: "{ top: '39px', bottom: '39px', leftRight: '10px' }", description: "slider_hero_prop_mobilePadding", required: false },
      { name: "height", type: "string", defaultValue: "100vh", description: "slider_hero_prop_height", required: false },
      { name: "isBoldFont", type: "boolean", defaultValue: "true", description: "slider_hero_prop_isBoldFont", required: false },
      { name: "borderRadius", type: "string", defaultValue: "none", description: "slider_hero_prop_borderRadius", required: false },
      { name: "onOptionClick", type: "function", description: "slider_hero_prop_onOptionClick", required: false },
      { name: "onOptionHover", type: "function", description: "slider_hero_prop_onOptionHover", required: false },
      { name: "desktopTitleAlign", type: "string", defaultValue: "left", description: "slider_hero_prop_desktopTitleAlign", required: false },
      { name: "mobileTitleAlign", type: "string", defaultValue: "center", description: "slider_hero_prop_mobileTitleAlign", required: false },
      { name: "desktopShowcaseAlign", type: "string", defaultValue: "left", description: "slider_hero_prop_desktopShowcaseAlign", required: false },
      { name: "mobileShowcaseAlign", type: "string", defaultValue: "center", description: "slider_hero_prop_mobileShowcaseAlign", required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: 'radio-button',
    title: 'radio_button_title',
    description: 'radio_button_desc',
    demo: RadioButtonPreviewDemo,
    demoFullPage: RadioButtonFullPageDemo,
    usage: `// Path to the "RadioButton.tsx" file
import RadioButton from "@/app/the-actual-components/radio-button/RadioButton";
import { useState } from "react";
import { Home, Settings, Aperture } from "lucide-react";

export default function RadioButtonTabsDemo() {
  const [activeTab, setActiveTab] = useState("home");

  const tabOptions = [
    { value: "home", label: "Home", icon: Home },
    { value: "photos", label: "Photos", icon: Aperture },
    { value: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className="tab-switcher-demo"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
      }}
    >
      <div
        className="tab-switcher-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "14px",
          width: "auto",
          maxWidth: "480px",
        }}
      >
        <RadioButton
          options={tabOptions}
          onChange={(value: string) => setActiveTab(value)}
          defaultValue="home"
          activeBg="#f7f7fa"
          activeFg="#24222b"
          inactiveBg="#24222b"
          inactiveFg="#f7f7fa"
          hoverBg="#00a7fa"
        />

        <div
          className="tab-switcher-content"
          style={{
            background: "#17161c",
            borderRadius: "10px",
            border: "1.5px solid #312f3b",
            padding: "16px",
            minHeight: "60px",
            color: "#fff",
            fontSize: "0.9rem",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <h3>
            Current tab:{" "}
            {activeTab === "home" && "Home"}
            {activeTab === "photos" && "Photos"}
            {activeTab === "settings" && "Settings"}
          </h3>
        </div>
      </div>
    </div>
  );
}
`,
    code: `"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

interface RadioOption {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface RadioButtonProps {
  options: RadioOption[];
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  activeBg?: string;
  activeFg?: string;
  inactiveBg?: string;
  inactiveFg?: string;
  hoverBg?: string;
  gap?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  iconSize?: number;
  iconStrokeWidth?: number;
  itemGap?: string;
  enableOutline?: boolean;
  outlineWidth?: string;
  outlineColor?: string;
  height?: string | null;
}

export default function RadioButton({
  options,
  onChange,
  value,
  defaultValue = options[0]?.value,
  activeBg = "#393643",
  activeFg = "#fff",
  inactiveBg = "none",
  inactiveFg = "#aaa",
  hoverBg = "#23222a",
  gap = "14px",
  borderRadius = "8px",
  padding = "0 20px",
  fontSize = "1rem",
  iconSize = 20,
  iconStrokeWidth = 2,
  itemGap = "8px",
  enableOutline = false,
  outlineWidth = "1px",
  outlineColor = "#403d4d",
  height = "40px",
}: RadioButtonProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hovered, setHovered] = useState<string | null>(null);
  const activeTab = value !== undefined ? value : internalValue;

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const getButtonStyle = (optionValue: string): React.CSSProperties => {
    const isActive = activeTab === optionValue;
    const isHovered = hovered === optionValue;

    const style: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: itemGap,
      padding,
      fontSize,
      border: enableOutline ? \`\${outlineWidth} solid \${outlineColor}\` : "none",
      borderRadius,
      fontWeight: 500,
      cursor: "pointer",
      outline: "none",
      userSelect: "none" as React.CSSProperties["userSelect"],
      margin: 0,
      background: isActive ? activeBg : isHovered ? hoverBg : inactiveBg,
      color: isActive ? activeFg : inactiveFg,
      transition: "background 0.2s ease, color 0.2s ease",
    };
    if (height) style.height = height;
    return style;
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 0,
        marginTop: "18px",
        gap,
      }}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={option.label}
          onClick={() => handleChange(option.value)}
          onMouseEnter={() => setHovered(option.value)}
          onMouseLeave={() => setHovered(null)}
          style={getButtonStyle(option.value)}
        >
          <span style={{ display: "inline-flex" }}>
            <option.icon
              color={activeTab === option.value ? activeFg : inactiveFg}
              size={iconSize}
              strokeWidth={iconStrokeWidth}
            />
          </span>
          <span style={{ display: "inline-block", verticalAlign: "middle" }}>
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
}
`,
    props: [
      { name: "options", type: "RadioOption[]", description: "radio_button_prop_options", required: true },
      { name: "onChange", type: "(value: string) => void", description: "radio_button_prop_onchange", required: false },
      { name: "value", type: "string", description: "radio_button_prop_value", required: false },
      { name: "defaultValue", type: "string", description: "radio_button_prop_defaultvalue", required: false },
      { name: "activeBg", type: "string", defaultValue: "#393643", description: "radio_button_prop_activebg", required: false },
      { name: "activeFg", type: "string", defaultValue: "#fff", description: "radio_button_prop_activefg", required: false },
      { name: "inactiveBg", type: "string", defaultValue: "none", description: "radio_button_prop_inactivebg", required: false },
      { name: "inactiveFg", type: "string", defaultValue: "#aaa", description: "radio_button_prop_inactivefg", required: false },
      { name: "hoverBg", type: "string", defaultValue: "#23222a", description: "radio_button_prop_hoverbg", required: false },
      { name: "gap", type: "string", defaultValue: "14px", description: "radio_button_prop_gap", required: false },
      { name: "borderRadius", type: "string", defaultValue: "8px", description: "radio_button_prop_borderradius", required: false },
      { name: "padding", type: "string", defaultValue: "0 20px", description: "radio_button_prop_padding", required: false },
      { name: "fontSize", type: "string", defaultValue: "1rem", description: "radio_button_prop_fontsize", required: false },
      { name: "iconSize", type: "number", defaultValue: "20", description: "radio_button_prop_iconsize", required: false },
      { name: "iconStrokeWidth", type: "number", defaultValue: "2", description: "radio_button_prop_iconstrokewidth", required: false },
      { name: "itemGap", type: "string", defaultValue: "8px", description: "radio_button_prop_itemgap", required: false },
      { name: "enableOutline", type: "boolean", defaultValue: "false", description: "radio_button_prop_enableoutline", required: false },
      { name: "outlineWidth", type: "string", defaultValue: "1px", description: "radio_button_prop_outlinewidth", required: false },
      { name: "outlineColor", type: "string", defaultValue: "#403d4d", description: "radio_button_prop_outlinecolor", required: false },
      { name: "height", type: "string | null", defaultValue: "40px", description: "radio_button_prop_height", required: false }
    ],
  },
  {
    id: "bauhaus-file-card",
    title: "bauhaus_card_title",
    description: "bauhaus_card_desc",
    demoFullPage: BauhausFileCardFullPageDemo,
    noPadding: true,
    dependencies: `npm install @fontsource/roboto-mono --legacy-peer-deps
npm install @fontsource/alef --legacy-peer-deps
[Chronicle Button](/components/chronicle-button)`,
    credit: `[Text scroll and hover effect with GSAP and clip](https://codepen.io/Juxtoposed/pen/mdQaNbG) by [Juxtoposed](https://codepen.io/Juxtoposed)
[Vercel app border hover effect](https://codepen.io/Juxtoposed/pen/xxQNozB) by [Juxtoposed](https://codepen.io/Juxtoposed)
[Course design cards #scss](https://codepen.io/kristen17/pen/NPKrxBd) by [Kristen](https://codepen.io/kristen17)`,
    usage: `// Path to the "BauhausFileCard.tsx" file
import BauhausFileCard from '@/app/the-actual-components/bauhaus-file-card/BauhausFileCard'

<div className="bg-[#262630] p-16 w-full gap-9 flex flex-wrap items-center justify-center">
  <BauhausFileCard
    id="file1"
    topInscription="Size: 5.96 MB"
    fileName="Downtown Dallas.png"
    subMainText="A high-quality image featuring the stunning skyline of Downtown Dallas, showcasing its modern architecture and vibrant city life."
    filledButtonInscription="View"
    outlinedButtonInscription="Download"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file2"
    topInscription="Size: 15.5 MB"
    fileName="Important project.zip"
    subMainText="This small archive contains code, videos, and a presentation for a very important project."
    filledButtonInscription="Extract"
    outlinedButtonInscription="Info"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file3"
    topInscription="Grössi: 71.2 KB"
    fileName="BauhausFileCard.tsx"
    subMainText="En Code für en Bauhaus-inspirierte Datei-Container mit interaktiven Elementen."
    filledButtonInscription="Uuslade"
    outlinedButtonInscription="Teile"
    containerBorderRadius="1.76em"
    buttonRounding="0.76em"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file4"
    topInscription="Tamaño: 250 MB"
    fileName="App tutorial.mp4"
    subMainText="Video Tutorial - Este video proporciona una guía completa sobre el uso de la aplicación y sus características."
    filledButtonInscription="Descargar"
    outlinedButtonInscription="Detalles"
    backgroundColor="#f5f5f5"
    separatorColor="#d0d0d0"
    chronicleButtonBackground="#2a2a34"
    chronicleButtonForeground="#f5f5f5"
    descriptionColor="#333333"
    fileSizeColor="#555555"
    borderWidth="6px"
    ligtenButtonColor={-0.17}
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file5"
    topInscription="2.3 KB :גודל"
    fileName="bauhaus-file-card.js"
    subMainText="קופסה לאחסון בהשראת הבאוהאוס עם אלמנטים אינטראקטיביים."
    filledButtonInscription="פתח"
    outlinedButtonInscription="שתף"
    mirrored={true}
    swapButtons={true}
    borderWidth="4px"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file6"
    topInscription="Size: 5.7 MB"
    fileName="Financial Report.pdf"
    subMainText="The integrity of this file is compromised."
    filledButtonInscription="View"
    outlinedButtonInscription="Delete"
    metadataIntegrity={false}
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />
</div>`,
    code: `"use client";
import React, { useEffect, useRef } from "react";
import ChronicleButton from "@/app/the-actual-components/chronicle-button/chronicle-button";
import "@fontsource/roboto-mono/700.css";

interface FileType {
  color: string;
  type: string;
  extensions: string[];
}

const fileTypeClassification : FileType[] = [
    { color:'#2B579A', type:'Word Processing Document', extensions:['.doc', '.docx', '.docm', '.dot', '.dotx', '.dotm']},
    { color:'#2196F3', type:'Image', extensions:['.jpg', '.jpeg', '.jfif', '.pjpeg', '.pjp', '.png', '.gif', '.bmp', '.tiff', '.tif', '.webp', '.heif', '.heic', '.avif', '.eps']},
    { color:'#227447', type:'Spreadsheet', extensions:['.xls', '.xlsx', '.xlsm', '.xlsb', '.xlt', '.xltx', '.xltm', '.xla', '.xlam', '.xlw']},
    { color:'#A031EB', type:'Archive', extensions:['.zip','.rar','.7z','.tar','.gz','.bz2','.xz','.tar.gz','.tar.bz2','.tar.xz','.arc','.arj','.ace','.cab','.lz','.lzh']},
    { color:'#4332A2', type:'Binary File', extensions:['.bin']},
    { color:'#9525A5', type:'Java File', extensions:['.java','.class','.jar']},
    { color:'#D71064', type:'Presentation File ', extensions:['.ppt','.pptx','.pptm','.pps','.ppsx','.pot','.potx','.potm','.odp']},
    { color:'#D31A35', type:'PDF File ', extensions:['.pdf']},
    { color:'#E7013F', type:'Hypertext/Plaintext/Rich Text File ', extensions:['.html','.htm','.xhtml','.txt','.rtf']},
    { color:'#FEEA00', type:'JavaScript File ', extensions:['.js','.mjs','.cjs','.jsx','.es6','.es']},
    { color:'#FF5613', type:'TypeScript File ', extensions:['.ts','.tsx','.d.ts','.mts','.cts']},
    { color:'#29BF12', type:'Cascading Style Sheets ', extensions:['.css']},
    { color:'#06BE66', type:'Video File ', extensions:['.mp4','.mov','.wmv','.avi','.flv','.f4v','.mkv','.webm','.ogv','.ogg','.3gp','.m4v']},
    { color:'#41C3AA', type:'Audio File ', extensions:['.mp3','.wav','.aiff','.aac','.flac','.ogg','.m4a','.wma','.amr','.ape','.au','.ra','.rm']},
    { color:'#3D4785', type:'Unknown/Other', extensions:['']}
  ];

// Utility function to determine if text is RTL
const isRTLCheck = (text: string): boolean => {
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const lightenColor = (hex: string, percent: number): string => {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');
    
    // Parse the r, g, b values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Determine if we're lightening or darkening
    const isLightening = percent >= 0;
    const adjustment = Math.abs(percent);
  
    if (isLightening) {
        // Lighten each color component
        r = Math.min(255, Math.floor(r + (255 - r) * adjustment));
        g = Math.min(255, Math.floor(g + (255 - g) * adjustment));
        b = Math.min(255, Math.floor(b + (255 - b) * adjustment));
    } else {
        // Darken each color component
        r = Math.max(0, Math.floor(r * (1 - adjustment)));
        g = Math.max(0, Math.floor(g * (1 - adjustment)));
        b = Math.max(0, Math.floor(b * (1 - adjustment)));
    }
  
    // Convert back to hex and return
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}\`;
};

interface BauhausFileCardProps {
  id: string;
  containerBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  borderWidth?: string;
  topInscription: string;
  fileName: string;
  subMainText: string;
  filledButtonInscription?: string;
  outlinedButtonInscription?: string;
  onFilledButtonClick: (id: string) => void;
  onOutlinedButtonClick: (id: string) => void;
  onTitleClick: (id: string) => void;
  onDescriptionClick: (id: string) => void;
  onMoreOptionsClick: (id: string) => void;
  metadataIntegrity?: boolean;
  mirrored?: boolean;
  startingPatternPosition?: string;
  swapButtons?: boolean;
  buttonRounding?: string;
  fileSizeColor?: string;
  ligtenButtonColor?: number;
  chronicleButtonBackground?: string;
  chronicleButtonForeground?: string;
  descriptionColor?: string;
}

const BauhausFileCard: React.FC<BauhausFileCardProps> = ({
  id,
  containerBorderRadius = "2.25em",
  backgroundColor = "#151419",
  separatorColor = "#2F2B2A",
  borderWidth = "2px",
  topInscription = "Not Set!",
  fileName = "Not Set!",
  subMainText = "Not Set!",
  filledButtonInscription = "Not Set!",
  outlinedButtonInscription = "Not Set!",
  onFilledButtonClick,
  onOutlinedButtonClick,
  onTitleClick,
  onDescriptionClick,
  onMoreOptionsClick,
  metadataIntegrity = true,
  mirrored,
  startingPatternPosition = mirrored ? "2.1rad" : "4.2rad",
  swapButtons = false,
  buttonRounding = "1.76em",
  fileSizeColor = "#ddd",
  ligtenButtonColor = 0.32,
  chronicleButtonBackground = "#f0f0f1",
  chronicleButtonForeground = "#1a1a24",
  descriptionColor = "#f7f7ff",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isJavaScriptFile = /\.(js|mjs|cjs|jsx|es6|es)$/i.test(fileName);
  const hoverColor = isJavaScriptFile ? "#151419" : "white";
  const displayedTitle =
    fileName.length > 27 ? fileName.slice(0, 24) + "..." : fileName;
  const containerSize = "336px";
  const parsedContainerSize = parseFloat(containerSize.replace("px", ""));
  const parsedBorderWidth = parseFloat(borderWidth.replace("px", ""));
  const backgroundPatternSize = \`\${
    (parsedContainerSize - parsedBorderWidth * 2) / 16
  }px\`;

  const extension = fileName.split(".").pop() || "";
  const fileType = fileTypeClassification.find((type) =>
    type.extensions.includes("." + extension)
  );
  const accentColor = fileType ? fileType.color : "#3D4785";

  const buttonFontFamily = mirrored
    ? '"Arial", "Alef", sans-serif'
    : '"Roboto Mono", monospace';

  const filledChronicleButtonHoverColor = lightenColor(
    accentColor,
    ligtenButtonColor
  );
  const oulinedChronicleButtonHoverColor = lightenColor(
    accentColor,
    ligtenButtonColor
  );

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const angle = Math.atan2(-x, y);
        card.style.setProperty("--rotation", angle + "rad");
      }
    };
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className="card"
      style={
        {
          position: "relative",
          direction: "ltr",
          zIndex: 555,
          width: containerSize,
          height: containerSize,
          display: "grid",
          placeContent: "center",
          placeItems: "center",
          textAlign: "center",
          boxShadow: "1px 12px 25px rgba(0, 0, 0, 0.78)",
          borderRadius: containerBorderRadius,
          border: \`\${borderWidth} solid transparent\`,
          "--rotation": startingPatternPosition,
          backgroundImage: metadataIntegrity
            ? \`linear-gradient(45deg, \${backgroundColor} 25%, transparent 25%, transparent 75%, \${backgroundColor} 75%),
                linear-gradient(-45deg, \${backgroundColor} 25%, transparent 25%, transparent 75%, \${backgroundColor} 75%),
                linear-gradient(calc(var(--rotation)), \${accentColor} 0, \${backgroundColor} 29%, transparent 85%)\`
            : \`linear-gradient(45deg, \${backgroundColor} 25%, \${backgroundColor} 25%, \${backgroundColor} 75%, \${backgroundColor} 75%),
                linear-gradient(-45deg, \${backgroundColor} 25%, \${backgroundColor} 25%, \${backgroundColor} 75%, \${backgroundColor} 75%),
                linear-gradient(calc(var(--rotation)), #ff2026 0, #ff2026 100%, transparent 80%)\`,
          backgroundSize: metadataIntegrity
            ? \`\${backgroundPatternSize} \${backgroundPatternSize}, \${backgroundPatternSize} \${backgroundPatternSize}, 100% 100%\`
            : "100% 100%, 100% 100%",
          backgroundOrigin: "padding-box, padding-box, border-box",
          backgroundClip: "padding-box, padding-box, border-box",
          backgroundColor: backgroundColor,
          "--bauhaus-primary-color": "#f0f0f1",
          color: "var(--bauhaus-primary-color)",
          "--bauhaus-secondary-color": "#ddd",
          fontFamily: '"Roboto Mono", monospace',
          "--bauhaus-bg-color": backgroundColor,
          "--bauhaus-accent-color": accentColor,
          "--bauhaus-border-width": borderWidth,
        } as React.CSSProperties
      }
      ref={cardRef}
    >
      <div
        style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
        className="card-header"
      >
        <div
          className="date"
          style={{
            transform: mirrored ? "scaleX(-1)" : "none",
            color: fileSizeColor,
            fontFamily: mirrored
              ? '"Arial", "Alef", sans-serif'
              : '"Roboto Mono", monospace',
          }}
        >
          {topInscription}
        </div>
        <div className="moreOptions">
          <svg
            viewBox="0 0 24 24"
            fill={descriptionColor}
            onClick={() => onMoreOptionsClick(id)}
            className="size6"
          >
            {
              <path
                fillRule="evenodd"
                d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5"
                clipRule="evenodd"
              />
            }
          </svg>
        </div>
      </div>

      <div className="card-body">
        <h1
          style={{
            direction: isRTLCheck(displayedTitle) ? "rtl" : "ltr",
            color: accentColor,
            fontFamily: isRTLCheck(displayedTitle)
              ? '"Arial", "Alef", sans-serif'
              : '"Roboto Mono", monospace',
          }}
          className="text"
          onClick={() => onTitleClick(id)}
        >
          <span className="title" title={displayedTitle}>
            {displayedTitle}
          </span>
          <span
            className="text-effect"
            style={{ backgroundColor: accentColor }}
          ></span>
        </h1>
        <p
          style={{
            direction: isRTLCheck(subMainText) ? "rtl" : "ltr",
            color: descriptionColor,
            fontFamily: isRTLCheck(subMainText)
              ? '"Arial", "Alef", sans-serif'
              : '"Roboto Mono", monospace',
          }}
          className="description"
          onClick={() => onDescriptionClick(id)}
        >
          {subMainText}
        </p>
      </div>

      <div
        className="card-footer"
        style={{ borderTop: \`0.063rem solid \${separatorColor}\` }}
      >
        <div className="button-container">
          {swapButtons ? (
            <>
              <ChronicleButton
                text={outlinedButtonInscription}
                outlined={true}
                width="136px"
                onClick={() => onOutlinedButtonClick(id)}
                hoverColor={oulinedChronicleButtonHoverColor}
                outlinedButtonBackgroundOnHover={backgroundColor}
                fontFamily={buttonFontFamily}
                borderRadius={buttonRounding}
                customBackground={chronicleButtonBackground}
                customForeground={chronicleButtonForeground}
              />
              <ChronicleButton
                text={filledButtonInscription}
                width="136px"
                onClick={() => onFilledButtonClick(id)}
                hoverColor={filledChronicleButtonHoverColor}
                fontFamily={buttonFontFamily}
                borderRadius={buttonRounding}
                customBackground={chronicleButtonBackground}
                customForeground={chronicleButtonForeground}
              />
            </>
          ) : (
            <>
              <ChronicleButton
                text={filledButtonInscription}
                width="136px"
                onClick={() => onFilledButtonClick(id)}
                hoverColor={filledChronicleButtonHoverColor}
                fontFamily={buttonFontFamily}
                borderRadius={buttonRounding}
                customBackground={chronicleButtonBackground}
                customForeground={chronicleButtonForeground}
              />
              <ChronicleButton
                text={outlinedButtonInscription}
                outlined={true}
                width="136px"
                onClick={() => onOutlinedButtonClick(id)}
                hoverColor={oulinedChronicleButtonHoverColor}
                outlinedButtonBackgroundOnHover={backgroundColor}
                fontFamily={buttonFontFamily}
                borderRadius={buttonRounding}
                customBackground={chronicleButtonBackground}
                customForeground={chronicleButtonForeground}
              />
            </>
          )}
        </div>
      </div>

      <style jsx>{\`
        /* ========= MOVED CSS MODULE CONTENT ========= */

      .card::before {
          position: absolute;
          content: "";
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 2.25rem;
          z-index: -1;
          border: 0.155rem solid transparent;
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }
        
        .card-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8em 0.5em 0em 1.5em;
        }
        
        .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            padding-top: 7px;
            padding-bottom: 7px;
            transform: translateX(-2px);
        }
        
        .size6 {
          width: 2.5rem;
          cursor: pointer;
        }
        
        .card-body {
          width: 100%;
          display: block;
          padding: 0em 1.25em 0.5em 1.5em;
        }
        
        .card-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          justify-content: center;
            align-items: center;
          padding: 0.7em 1.25em 0.5em 1.5em;
          border-bottom-left-radius: 2.25rem;
          border-bottom-right-radius: 2.25rem;
        }
        
        .card-footer ul {
          display: flex;
          align-items: center;
        }
        
        .card-footer li {
          list-style-type: none;
          display: flex;
          margin-right: -0.625rem;
        }
        
        .card-footer li img {
          border-radius: 50%;
          width: 1.875rem;
          height: 1.875rem;
          object-fit: cover;
        }

        /* ========= ORIGINAL INLINE STYLES ========= */
        .text {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: -0.01em;
          line-height: normal;
          margin-bottom: -1px;
          width: auto;
          transition: color 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(-23px);
        }
        .text:hover {
          color: \${hoverColor} !important;
        }
        .title {
          position: relative;
          z-index: 10;
          font-size: 17.6px;
          padding: 2px 4px;
        }
        .text-effect {
          clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
          transform-origin: center;
          transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
          position: absolute;
          left: -4px;
          right: -4px;
          top: -4px;
          bottom: -4px;
          z-index: 0;
        }
        .text:hover > .text-effect {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        .filesize {
          font-size: 16px;
          color: white;
          padding-top: 16px;
        }
        .description {
          font-size: 17px;
          color: white;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(-4px);
        }
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          padding-top: 16px;
        }
      \`}</style>
    </div>
  );
};

export default BauhausFileCard;
`,
    props: [
        { name: "id", type: "string", description: "bauhaus_card_prop_id", required: true },
        { name: "containerBorderRadius", type: "string", defaultValue: "2.25em", description: "bauhaus_card_prop_containerBorderRadius", required: false },
        { name: "backgroundColor", type: "string", defaultValue: "#151419", description: "bauhaus_card_prop_backgroundColor", required: false },
        { name: "separatorColor", type: "string", defaultValue: "#2F2B2A", description: "bauhaus_card_prop_separatorColor", required: false },
        { name: "borderWidth", type: "string", defaultValue: "2px", description: "bauhaus_card_prop_borderWidth", required: false },
        { name: "topInscription", type: "string", description: "bauhaus_card_prop_topInscription", required: true },
        { name: "fileName", type: "string", description: "bauhaus_card_prop_fileName", required: true },
        { name: "subMainText", type: "string", description: "bauhaus_card_prop_subMainText", required: true },
        { name: "filledButtonInscription", type: "string", defaultValue: "Not Set!", description: "bauhaus_card_prop_filledButtonInscription", required: false },
        { name: "outlinedButtonInscription", type: "string", defaultValue: "Not Set!", description: "bauhaus_card_prop_outlinedButtonInscription", required: false },
        { name: "onFilledButtonClick", type: "(id: string) => void", description: "bauhaus_card_prop_onFilledButtonClick", required: true },
        { name: "onOutlinedButtonClick", type: "(id: string) => void", description: "bauhaus_card_prop_onOutlinedButtonClick", required: true },
        { name: "onTitleClick", type: "(id: string) => void", description: "bauhaus_card_prop_onTitleClick", required: true },
        { name: "onDescriptionClick", type: "(id: string) => void", description: "bauhaus_card_prop_onDescriptionClick", required: true },
        { name: "onMoreOptionsClick", type: "(id: string) => void", description: "bauhaus_card_prop_onMoreOptionsClick", required: true },
        { name: "metadataIntegrity", type: "boolean", defaultValue: "true", description: "bauhaus_card_prop_metadataIntegrity", required: false },
        { name: "mirrored", type: "boolean", description: "bauhaus_card_prop_mirrored", required: false },
        { name: "startingPatternPosition", type: "string", description: "bauhaus_card_prop_startingPatternPosition", required: false },
        { name: "swapButtons", type: "boolean", description: "bauhaus_card_prop_swapButtons", required: false },
        { name: "buttonRounding", type: "string", defaultValue: "1.76em", description: "bauhaus_card_prop_buttonRounding", required: false },
        { name: "fileSizeColor", type: "string", defaultValue: "#ddd", description: "bauhaus_card_prop_fileSizeColor", required: false },
        { name: "ligtenButtonColor", type: "number", defaultValue: "0.32", description: "bauhaus_card_prop_ligtenButtonColor", required: false },
        { name: "chronicleButtonBackground", type: "string", defaultValue: "#f0f0f1", description: "bauhaus_card_prop_chronicleButtonBackground", required: false },
        { name: "chronicleButtonForeground", type: "string", defaultValue: "#1a1a24", description: "bauhaus_card_prop_chronicleButtonForeground", required: false },
        { name: "descriptionColor", type: "string", defaultValue: "#f7f7ff", description: "bauhaus_card_prop_descriptionColor", required: false },
    ],
      isPreviewImage: true,
  },
  {
    id: "spiral",
    title: "spiral_title",
    description: "spiral_desc",
    demo: SpiralPreviewDemo,
    demoFullPage: SpiralFullPageDemo,
    noPadding: true,
    credit: `[UZUMAKI](https://codepen.io/Alansdead/pen/zxGyOmx) by [Jules](https://codepen.io/Alansdead)`,
    usage: `// Path to the "Spiral.tsx" file
"use client";
import React from "react";
import Spiral from "@/app/the-actual-components/spiral/Spiral";

export default function SpiralDemo() {
  const handleSpiralClick = (index: number) => {
    console.log(\`Clicked spiral: \${index}\`);
  };

  const handleSpiralHover = (index: number, isHovering: boolean) => {
    console.log(\`Spiral index \${index} hover state:\`, isHovering);
  };

  // Outer wrapper filling full width and centering the inner container
  const outerContainerStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
    boxSizing: "border-box",
  };

  // Inner container holding all spiral demos
  const innerContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    maxWidth: "900px",
  };

  const demoSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: "0.5rem",
    fontSize: "1rem",
    fontWeight: 500,
  };

  const spiralWrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "400px",
    cursor: "pointer",
  };

  const nestedWhiteContainerStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        {/* First Spiral */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>
            Distortion: 0.6 / 1.4 / 3.6; Stroke Width: 2
          </div>
          <div
            style={spiralWrapperStyle}
            onClick={() => handleSpiralClick(1)}
          >
            <Spiral
              spiralColor="71, 118, 203"
              defaultDistortion={0.6}
              hoverDistortion={1.4}
              clickDistortion={3.6}
              strokeWidth={2}
              onHover={(hover) => handleSpiralHover(1, hover)}
            />
          </div>
        </div>

        {/* Second Spiral */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>
            Distortion: 0.4 / 0.7 / 1.5; Stroke Width: 3.7
          </div>
          <div
            style={spiralWrapperStyle}
            onClick={() => handleSpiralClick(2)}
          >
            <Spiral
              spiralColor="161, 159, 229"
              defaultDistortion={0.4}
              hoverDistortion={0.7}
              clickDistortion={1.5}
              strokeWidth={3.7}
              onHover={(hover) => handleSpiralHover(2, hover)}
            />
          </div>
        </div>

        {/* Third Spiral */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>
            Distortion: 1.2 / 1.9 / 5; Stroke Width: 1.34
          </div>
          <div
            style={spiralWrapperStyle}
            onClick={() => handleSpiralClick(3)}
          >
            <Spiral
              spiralColor="108, 198, 6"
              defaultDistortion={1.2}
              hoverDistortion={1.9}
              clickDistortion={5}
              strokeWidth={1.34}
              onHover={(hover) => handleSpiralHover(3, hover)}
            />
          </div>
        </div>

        {/* Fourth Spiral inside a nested white container */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>
            Distortion: 0.5 / 1.0 / 2.0; Stroke Width: 2.5
          </div>
          <div style={nestedWhiteContainerStyle}>
            <div
              style={spiralWrapperStyle}
              onClick={() => handleSpiralClick(4)}
            >
              <Spiral
                spiralColor="10, 10, 10"
                defaultDistortion={0.5}
                hoverDistortion={1.0}
                clickDistortion={2.0}
                strokeWidth={2.5}
                onHover={(hover) => handleSpiralHover(4, hover)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    `,
    code: `"use client";
import React, { useRef, useEffect, useCallback } from "react";

interface SpiralProps {
  spiralColor: string;
  defaultDistortion?: number;
  hoverDistortion?: number;
  clickDistortion?: number;
  strokeWidth?: number;
  onHover?: (isHovering: boolean) => void;
}

const Spiral: React.FC<SpiralProps> = ({
  spiralColor,
  defaultDistortion = 0.8,
  hoverDistortion = 1.5,
  clickDistortion = 3.5,
  strokeWidth = 2,
  onHover,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const state = useRef({
    ctx: null as CanvasRenderingContext2D | null,
    width: 0,
    height: 0,
    time: 0,
    animationFrameId: null as number | null,
    mouseX: 0,
    mouseY: 0,
    cursorX: 0,
    cursorY: 0,
    cursorVelX: 0,
    cursorVelY: 0,
    isMouseHovering: false,
    isMouseDown: false,
  }).current;

  const cursorSpring = 0.3;
  const cursorFriction = 0.8;
  const spiralDensity = 6;
  const animationSpeed = 0.5;
  const tendrilCount = 3;

  const getCurrentDistortion = useCallback(() => {
    if (state.isMouseDown) return clickDistortion;
    if (state.isMouseHovering) return hoverDistortion;
    return defaultDistortion;
  }, [state, defaultDistortion, hoverDistortion, clickDistortion]);

  const drawSpiral = useCallback(
    (
      centerX: number,
      centerY: number,
      radius: number,
      density: number,
      distortion: number,
      rotation: number,
      color: string,
      baseLineWidth: number
    ) => {
      if (!state.ctx) return;
      const { ctx } = state;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = baseLineWidth;

      const maxRadius = radius;
      const angleStep = 0.05;

      for (let angle = 0; angle < Math.PI * 2 * density; angle += angleStep) {
        const currentRadius = (angle / (Math.PI * 2 * density)) * maxRadius;
        const distortedAngle =
          angle +
          Math.sin(angle * 3 + state.time * 0.2) * distortion * 0.1 +
          Math.cos(angle * 2 + state.time * 0.1) * distortion * 0.05;

        const distortedRadius =
          currentRadius *
          (1 + Math.sin(angle * 5 + state.time * 0.3) * distortion * 0.03);

        const x = centerX + Math.cos(distortedAngle + rotation) * distortedRadius;
        const y = centerY + Math.sin(distortedAngle + rotation) * distortedRadius;

        if (angle === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
    },
    [state]
  );

  const drawTendrils = useCallback(
    (
      centerX: number,
      centerY: number,
      count: number,
      timeVal: number,
      maxLength: number
    ) => {
      if (!state.ctx) return;
      const { ctx } = state;
      const angleStep = (Math.PI * 2) / count;

      for (let i = 0; i < count; i++) {
        const baseAngle = i * angleStep + timeVal * 0.2;
        const length =
          maxLength * (0.5 + Math.sin(timeVal * 0.3 + i) * 0.5);

        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0)";
        ctx.lineWidth =
          strokeWidth * (1 + Math.sin(timeVal * 0.5 + i * 2) * 0.2);

        let x = centerX;
        let y = centerY;
        ctx.moveTo(x, y);

        const currentDistortion = getCurrentDistortion();
        for (let j = 0; j < length; j += 3) {
          const distortion = j * 0.02 * currentDistortion;
          const angle =
            baseAngle +
            Math.sin(j * 0.1 + timeVal * 0.5) * distortion +
            Math.cos(j * 0.05 + timeVal * 0.3) * distortion;

          x += Math.cos(angle) * 3;
          y += Math.sin(angle) * 3;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    },
    [state, strokeWidth, getCurrentDistortion]
  );

  const animate = useCallback(() => {
    if (!state.ctx || !canvasRef.current) return;
    state.animationFrameId = requestAnimationFrame(animate);
    state.ctx.clearRect(0, 0, state.width, state.height);

    state.time += 0.01 * animationSpeed;

    const dx = state.mouseX - state.cursorX;
    const dy = state.mouseY - state.cursorY;
    state.cursorVelX += dx * cursorSpring;
    state.cursorVelY += dy * cursorSpring;
    state.cursorVelX *= cursorFriction;
    state.cursorVelY *= cursorFriction;
    state.cursorX += state.cursorVelX;
    state.cursorY += state.cursorVelY;

    const centerX = state.width / 2;
    const centerY = state.height / 2;
    const cursorDistX = (state.cursorX - centerX) / (state.width / 2);
    const cursorDistY = (state.cursorY - centerY) / (state.height / 2);
    const cursorDist = Math.sqrt(cursorDistX * cursorDistX + cursorDistY * cursorDistY);

    const mainRadius = Math.min(state.width, state.height) * 0.4;
    const mainDistortion = getCurrentDistortion() * (1 + cursorDist * 0.5);
    const mainRotation =
      state.time * 0.1 + Math.atan2(cursorDistY, cursorDistX) * 0.2;

    for (let i = 0; i < 3; i++) {
      const radius = mainRadius * (0.6 + i * 0.2);
      const density = spiralDensity * (0.8 + i * 0.1);
      const rotation = mainRotation + (i * Math.PI) / 4;
      const alpha = 0.7 - i * 0.2;
      const color = \`rgba(\${spiralColor},\${alpha.toFixed(2)})\`;
      const lineWidth = strokeWidth * (1 - i * 0.25);

      drawSpiral(centerX, centerY, radius, density, mainDistortion, rotation, color, lineWidth);
    }

    drawTendrils(state.cursorX, state.cursorY, tendrilCount, state.time, 100);
  }, [state, spiralColor, strokeWidth, getCurrentDistortion, drawSpiral, drawTendrils]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    state.ctx = canvas.getContext("2d");
    const container = canvas.parentElement;

    const onResize = () => {
      if (!canvas || !state.ctx) return;
      state.width = canvas.clientWidth;
      state.height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = state.width * dpr;
      canvas.height = state.height * dpr;
      state.ctx!.scale(dpr, dpr);

      state.mouseX = state.width / 2;
      state.mouseY = state.height / 2;
      state.cursorX = state.mouseX;
      state.cursorY = state.mouseY;
    };

    const onMouseEnter = () => {
      state.isMouseHovering = true;
      onHover?.(true);
    };
    const onMouseLeave = () => {
      state.isMouseHovering = false;
      state.isMouseDown = false;
      onHover?.(false);
    };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.mouseX = e.clientX - rect.left;
      state.mouseY = e.clientY - rect.top;
    };
    const onMouseDown = () => {
      if (state.isMouseHovering) state.isMouseDown = true;
    };
    const onMouseUp = () => {
      state.isMouseDown = false;
    };

    onResize();
    if (container) {
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("mouseup", onMouseUp);
    }
    window.addEventListener("resize", onResize);

    state.animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (state.animationFrameId) cancelAnimationFrame(state.animationFrameId);
      window.removeEventListener("resize", onResize);
      if (container) {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mousedown", onMouseDown);
        container.removeEventListener("mouseup", onMouseUp);
      }
    };
  }, [animate, onHover, state]);

  return (
    <div className="spiral-container">
      {/* Inline styles instead of external CSS */}
      <style jsx>{\`
        .spiral-container {
          width: 100%;
          height: auto;
          position: relative;
          overflow: hidden;
          cursor: default;
          aspect-ratio: 1 / 1;
        }
        .spiral-container:hover {
          cursor: pointer;
        }
        .spiral-canvas {
          width: 100%;
          height: 100%;
          display: block;
          user-select: none;
          -webkit-user-select: none;
        }
      \`}</style>
      <canvas ref={canvasRef} className="spiral-canvas"></canvas>
    </div>
  );
};

export default Spiral;
`,
    props: [
        { name: 'spiralColor', type: 'string', description: 'spiral_prop_spiralColor', required: true },
        { name: 'defaultDistortion', type: 'number', defaultValue: '0.8', description: 'spiral_prop_defaultDistortion', required: false },
        { name: 'hoverDistortion', type: 'number', defaultValue: '1.5', description: 'spiral_prop_hoverDistortion', required: false },
        { name: 'clickDistortion', type: 'number', defaultValue: '3.5', description: 'spiral_prop_clickDistortion', required: false },
        { name: 'strokeWidth', type: 'number', defaultValue: '2', description: 'spiral_prop_strokeWidth', required: false },
        { name: 'onHover', type: '(isHovering: boolean) => void', description: 'spiral_prop_onHover', required: false },
    ],
  },
  {
    id: "halomot-button",
    title: "halomot_button_title",
    description: "halomot_button_desc",
    demo: HalomotButtonPreviewDemo,
    demoFullPage: HalomotButtonFullPageDemo,
    dependencies: `npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons`,
    credit: `[BUTTONS](https://codepen.io/uchihaclan/pen/NWOyRWy) by [TAYLOR](https://codepen.io/uchihaclan)`,
    usage: `// Path to the "HalomotButton.tsx" file
import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

<div style={{
  display: 'flex',
  flexWrap: 'wrap', // Allows items to wrap to the next line
  gap: '36px', // Space between items
  justifyContent: 'center', // Center items horizontally
  padding: '32px', // Optional padding for the container
  backgroundColor: '#050505', // Background color of the container
  borderRadius: '8px', // Rounded corners for the container
  minHeight: '300px' // Minimum height for the container
}}>
  <HalomotButton 
    inscription="חלומות"
    onClick={() => console.log("The 1st Halomot button has been clicked.")}
  />
  <HalomotButton 
    inscription="עוד אחד"
    borderWidth="3px"
    gradient = "linear-gradient(135deg, #a123f4, #603dec)"
    outerBorderRadius="12.56px"
    innerBorderRadius="12px"
    onClick={() => console.log("The 2nd Halomot button has been clicked.")}
  />
  <div style={{ width: "52px" }}>
  <HalomotButton 
    inscription=""
    backgroundColor="#111014"
    gradient = "linear-gradient(135deg, #a123f4, #603dec)"
    fillWidth={true}
    href="https://github.com/Northstrix"
    icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
    onClick={() => console.log("The 3rd Halomot button has been clicked.")}
  />
  </div>
  <HalomotButton 
    inscription="Custom padding"
    padding="46px 24px"
    onClick={() => console.log("The 4th Halomot button has been clicked.")}
  />
</div>`,
    code: `"use client";
import React, { useState, useRef } from "react";

interface HalomotButtonProps {
  gradient?: string;
  inscription: string;
  fontWeight?: string;
  onClick?: () => void;
  fillWidth?: boolean;
  fixedWidth?: string;
  href?: string;
  backgroundColor?: string;
  icon?: React.ReactElement;
  borderWidth?: string;
  padding?: string;
  outerBorderRadius?: string;
  innerBorderRadius?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const HalomotButton: React.FC<HalomotButtonProps> = ({
  gradient = "linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)",
  inscription,
  fontWeight = "bold",
  onClick,
  fillWidth = false,
  fixedWidth,
  href,
  backgroundColor = "#000",
  icon,
  borderWidth = "1px",
  padding,
  outerBorderRadius = "6.34px",
  innerBorderRadius = "6px",
  textColor = "#fff",
  hoverTextColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayedColor, setDelayedColor] = useState<string | undefined>(undefined);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const containerStyle: React.CSSProperties = fixedWidth
    ? { width: fixedWidth, display: "inline-block" }
    : {};

  const buttonStyle: React.CSSProperties = {
    margin: fillWidth || fixedWidth ? "0" : "auto",
    padding: borderWidth,
    background: gradient,
    border: "0",
    borderRadius: outerBorderRadius,
    color: textColor,
    fontWeight, // USE PROP HERE
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    whiteSpace: "nowrap",
    transition: "all .3s",
    width: fillWidth || fixedWidth ? "100%" : "fit-content",
    flexDirection: "row",
    boxSizing: "border-box",
  };

  const spanStyle: React.CSSProperties = {
    background: isHovered ? "none" : backgroundColor,
    padding: padding ?? (fillWidth || fixedWidth ? "1rem 0" : "1rem 4rem"),
    border: "0",
    borderRadius: innerBorderRadius,
    width: "100%",
    height: "100%",
    transition: hoverTextColor ? "color 0.3s, background 300ms" : "background 300ms",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight, // USE PROP HERE
    color: delayedColor ? delayedColor : textColor,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "1rem",
    gap: icon ? "0.5em" : 0,
    flexDirection: "row",
    boxSizing: "border-box",
    cursor: "pointer",
  };

  const iconStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    height: "1em",
    width: "1em",
    fontSize: "1.1em",
    verticalAlign: "middle",
    flexShrink: 0,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (hoverTextColor) {
      setDelayedColor(hoverTextColor);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDelayedColor(undefined);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const ButtonContent = (
    <span
      style={spanStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && React.cloneElement(icon, { style: iconStyle })}
      {inscription}
    </span>
  );

  const ButtonElement = href ? (
    <a href={href} style={buttonStyle} onClick={handleClick}>
      {ButtonContent}
    </a>
  ) : (
    <button type="button" style={buttonStyle} onClick={handleClick}>
      {ButtonContent}
    </button>
  );

  return fixedWidth ? (
    <div style={containerStyle}>{ButtonElement}</div>
  ) : (
    ButtonElement
  );
};

export default HalomotButton;
`,
    props: [
      { name: "inscription", type: "string", description: "halomot_button_prop_inscription", required: true },
      { name: 'fontWeight', type: 'string', defaultValue: '"bold"', description: 'halomot_button_prop_fontWeight', required: false },
      { name: "onClick", type: "() => void", description: "halomot_button_prop_onClick", required: true },
      { name: "gradient", type: "string", defaultValue: "linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)", description: "halomot_button_prop_gradient", required: false },
      { name: "backgroundColor", type: "string", defaultValue: "#000", description: "halomot_button_prop_backgroundColor", required: false },
      { name: "borderWidth", type: "string", defaultValue: "1px", description: "halomot_button_prop_borderWidth", required: false },
      { name: "outerBorderRadius", type: "string", defaultValue: "6.34px", description: "halomot_button_prop_outerBorderRadius", required: false },
      { name: "innerBorderRadius", type: "string", defaultValue: "6px", description: "halomot_button_prop_innerBorderRadius", required: false },
      { name: "padding", type: "string", description: "halomot_button_prop_padding", required: false },
      { name: "icon", type: "React.ReactElement", description: "halomot_button_prop_icon", required: false },
      { name: "fillWidth", type: "boolean", defaultValue: "false", description: "halomot_button_prop_fillWidth", required: false },
      { name: "fixedWidth", type: "string", description: "halomot_button_prop_fixedWidth", required: false },
      { name: "href", type: "string", description: "halomot_button_prop_href", required: false },
      { name: "textColor", type: "string", defaultValue: "#fff", description: "halomot_button_prop_textColor", required: false },
      { name: "hoverTextColor", type: "string", description: "halomot_button_prop_hoverTextColor", required: false },
    ],
  },
  {
    id: "project-showcase",
    title: "project_showcase_title",
    description: "project_showcase_desc",
    demoFullPage: ProjectShowcaseFullPageDemo,
    dependencies: `npm install framer-motion
[Halomot Button](/components/halomot-button)`,
    credit: `[Animated Testimonials](https://ui.aceternity.com/components/animated-testimonials) by [Aceternity UI](https://ui.aceternity.com/)
[Text Reveal Animation](https://codepen.io/swatiparge/pen/LYVMEag) by [Swati Parge](https://codepen.io/swatiparge)`,
    noPadding: true,
    usage: `// Path to the "ProjectShowcase.tsx" file
import { ProjectShowcase } from '@/app/the-actual-components/project-showcase/ProjectShowcase';

export default function ProjectShowcaseDemo() {
  const testimonialsEn = [
    {
      name: "Blueberry Loom",
      quote: "A cryptographically reinforced form builder that utilizes ML-KEM-1024, as well as the \"ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512\" authenticated encryption scheme to enable end-to-end encryption for enhanced data protection.",
      designation: "Next.js + Nuxt Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp",
      link: "https://blueberry-loom.netlify.app/"
    },
    {
      name: "Namer UI",
      quote: "A comprehensive collection of modern, attractive, and unique reusable TypeScript components crafted specifically for Next.js.",
      designation: "Next.js Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp",
      link: "https://namer-ui.netlify.app/"
    },
    {
      name: "Namer UI For Vue",
      quote: "A collection of customizable, reusable TypeScript, vanilla CSS components for Vue 3.",
      designation: "Vue Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp",
      link: "https://namer-ui-for-vue.netlify.app/"
    },
    {
      name: "React Cryptographic Toolkit",
      quote: "A web app that\'s capable of encrypting user data, hashing strings, and calculating tags using the available HMAC algorithms. This was the first React app I made.",
      designation: "React Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp",
      link: "https://northstrix.github.io/React-Cryptographic-Toolkit/"
    },
    {
      name: "PHA5E-Inspired Hero Section",
      quote: "An unorthodox, customizable component to demonstrate my ability to create Angular apps.",
      designation: "Angular Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp",
      link: "https://pha5e-inspired-hero-section.netlify.app/"
    },
    {
      name: "Bootleg Website Localization Tool",
      quote: "A simple tool for localizing websites created with Bazium or vanilla HTML/CSS/JS.",
      designation: "Vanilla HTML/CSS/JS Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp",
      link: "https://codepen.io/Northstrix/full/mydWRJB"
    },
    {
      name: "Plum Cave",
      quote: "A cloud backup solution using \"ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512\" for data encryption and ML-KEM-1024 for quantum-resistant key exchange.",
      designation: "Next.js Project",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp",
      link: "https://plum-cave.netlify.app/"
    }
  ];

  const testimonialsHe = [
    {
      name: "בלוברי לום",
      quote: "בונה טפסים מחוזק קריפטוגרפית המשתמש ב-ML-KEM-1024 ובסכימת ההצפנה המאומתת \"ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512\" להצפנה מקצה לקצה.",
      designation: "פרויקט Next.js ו-Nuxt",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp",
      link: "https://blueberry-loom.netlify.app/"
    },
    {
      name: "נמר UI",
      quote: "אוסף רכיבי TypeScript מודרניים וייחודיים לשימוש חוזר ל-Next.js.",
      designation: "פרויקט Next.js",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp",
      link: "https://namer-ui.netlify.app/"
    },
    {
      name: "נמר UI ל-Vue",
      quote: "רכיבי TypeScript ו-CSS ונילה הניתנים להתאמה אישית עבור Vue 3.",
      designation: "פרויקט Vue",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp",
      link: "https://namer-ui-for-vue.netlify.app/"
    },
    {
      name: "React קריפטוגרפיק טולקיט",
      quote: "אפליקציית אינטרנט להצפנת נתונים, ביצוע האש וחישוב תגיות עם אלגוריתמי HMAC זמינים. האפליקציה הראשונה שיצרתי ב-React.",
      designation: "פרויקט React",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp",
      link: "https://northstrix.github.io/React-Cryptographic-Toolkit/"
    },
    {
      name: "מקטע גיבור בהשראת PHA5E",
      quote: "רכיב לא שגרתי וניתן להתאמה אישית שמדגים פיתוח Angular.",
      designation: "פרויקט Angular",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp",
      link: "https://pha5e-inspired-hero-section.netlify.app/"
    },
    {
      name: "בוטלג וובסייט לוקליזיישן טול",
      quote: "כלי פשוט ללוקליזציה לאתרי Bazium ו-HTML/CSS/JS ונילה.",
      designation: "פרויקט HTML/CSS/JS",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp",
      link: "https://codepen.io/Northstrix/full/mydWRJB"
    },
    {
      name: "פלאם קייב",
      quote: "פתרון גיבוי בענן עם \"HMAC-SHA3-512 + CBC Serpent-256 + ChaCha20\" להצפנה ו-ML-KEM-1024 לחילופי מפתחות עמידים לקוונטים.",
      designation: "פרויקט Next.js",
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp",
      link: "https://plum-cave.netlify.app/"
    }
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="bg-[#050505] p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1536px" }}>
          <ProjectShowcase
            testimonials={testimonialsEn}
            buttonInscriptions={{
              previousButton: 'Previous',
              nextButton: 'Next',
              openWebAppButton: 'Open Web App'
            }}
            fontSizes={{
              name: "28px",
              position: "20px",
              testimony: "20px",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "10px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            onItemClick={(link: string) => {
              console.log("Clicked project link:", link);
            }}
          />
        </div>
      </div>
      <div className="bg-[#f1f1f7] p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1152px" }}>
          <ProjectShowcase
            testimonials={testimonialsHe}
            colors={{
              name: "#0a0a0a",
              position: "#454545",
              testimony: "#171717",
            }}
            fontSizes={{
              name: "32px",
              position: "21px",
              testimony: "21px",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "12px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            buttonInscriptions={{
              previousButton: 'הקודם',
              nextButton: 'הבא',
              openWebAppButton: 'פתח אפליקציה'
            }}
            isRTL={true}
            halomotButtonGradient="linear-gradient(to right, #603dec, #a123f4)"
            halomotButtonBackground="#eee"
            halomotButtonTextColor="#111"
            halomotButtonOuterBorderRadius="16.2px"
            halomotButtonInnerBorderRadius="15px"
            halomotButtonHoverTextColor="#fff"
            onItemClick={(link: string) => {
              console.log("Clicked project link:", link);
            }}
          />
        </div>
      </div>
    </div>
  );
}
`,
    code: `"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import HalomotButton from "@/app/the-actual-components/halomot-button/HalomotButton";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link?: string;
};

type ProjectShowcaseProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: {
    name?: string;
    position?: string;
    testimony?: string;
  };
  fontSizes?: {
    name?: string;
    position?: string;
    testimony?: string;
  };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    positionTop?: string;
    positionBottom?: string;
    testimonyTop?: string;
    testimonyBottom?: string;
  };
  desktopVersionBottomThreshold?: number;
  mobile?: {
    fontSizes?: {
      name?: string;
      position?: string;
      testimony?: string;
    };
    spacing?: {
      top?: string;
      bottom?: string;
      lineHeight?: string;
      nameTop?: string;
      nameBottom?: string;
      positionTop?: string;
      positionBottom?: string;
      testimonyTop?: string;
      testimonyBottom?: string;
    };
  };
  imageAspectRatio?: number;
  isRTL?: boolean;
  onItemClick?: (link: string) => void;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  buttonInscriptions?: {
    previousButton: string;
    nextButton: string;
    openWebAppButton: string;
  };
  halomotButtonGradient?: string;
  halomotButtonBackground?: string;
  halomotButtonTextColor?: string;
  halomotButtonOuterBorderRadius?: string;
  halomotButtonInnerBorderRadius?: string;
  halomotButtonHoverTextColor?: string;
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = false,
  colors = { name: "#fff", position: "gray-500", testimony: "gray-500" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = {
    top: "20",
    bottom: "20",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em",
  },
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1.37,
  isRTL = false,
  onItemClick,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#33313d",
  hoverOutlineColor = "#403d4d",
  buttonInscriptions = {
    previousButton: "Previous",
    nextButton: "Next",
    openWebAppButton: "Open Web App",
  },
  halomotButtonGradient = "linear-gradient(to right, #a123f4, #603dec)",
  halomotButtonBackground = "#111014",
  halomotButtonTextColor = "#fff",
  halomotButtonOuterBorderRadius = "6.34px",
  halomotButtonInnerBorderRadius = "6px",
  halomotButtonHoverTextColor,
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [changeId, setChangeId] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const currentFontSizes =
    isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = {
    ...spacing,
    ...(isMobileView && mobile.spacing ? mobile.spacing : {}),
  };

  const handleNext = useCallback(() => {
    setDirection("forward");
    setChangeId((id) => id + 1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection("backward");
    setChangeId((id) => id + 1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current);
    }
    handleResize();
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current);
      }
    };
  }, [handleResize]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return (
      minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth)
    );
  };

  const textVariants = {
    initial: (dir: "forward" | "backward") =>
      dir === "forward"
        ? { y: -20, opacity: 0 }
        : { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: (dir: "forward" | "backward") =>
      dir === "forward"
        ? { y: 20, opacity: 0 }
        : { y: -20, opacity: 0 },
  };

  return (
    <div
      ref={componentRef}
      className={\`w-full mx-auto antialiased font-sans py-\${currentSpacing.top} pb-\${currentSpacing.bottom}\`}
      style={{
        lineHeight: currentSpacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: isMobileView ? "1fr" : "1fr 1fr",
          gap: \`\${calculateGap(componentWidth)}px\`,
        }}
      >
        {/* Image stack */}
        <div className="w-full">
          <div
            className="relative"
            style={{ paddingTop: \`\${(1 / imageAspectRatio) * 100}%\` }}
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <ImageContainer
                    src={testimonial.src}
                    alt={testimonial.name}
                    outerRounding={outerRounding}
                    innerRounding={innerRounding}
                    outlineColor={outlineColor}
                    hoverOutlineColor={hoverOutlineColor}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text content */}
        <div className="flex justify-between flex-col py-4 w-full">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={\`\${active}-\${changeId}\`}
              variants={textVariants}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3
                className="font-bold"
                style={{
                  fontSize: currentFontSizes.name,
                  color: colors.name,
                  marginTop: currentSpacing.nameTop,
                  marginBottom: currentSpacing.nameBottom,
                  textAlign: isRTL ? "right" : "left",
                }}
              >
                {testimonials[active].name}
              </h3>
              <p
                style={{
                  fontSize: currentFontSizes.position,
                  color: colors.position,
                  marginTop: currentSpacing.positionTop,
                  marginBottom: currentSpacing.positionBottom,
                  textAlign: isRTL ? "right" : "left",
                }}
              >
                {testimonials[active].designation}
              </p>
              <motion.p
                style={{
                  fontSize: currentFontSizes.testimony,
                  color: colors.testimony,
                  marginTop: currentSpacing.testimonyTop,
                  marginBottom: currentSpacing.testimonyBottom,
                  textAlign: isRTL ? "right" : "left",
                }}
              >
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div
            className={\`flex gap-4 \${
              isMobileView ? "pt-12" : "md:pt-0"
            } w-full\`}
            style={{
              justifyContent: isRTL ? "flex-end" : "flex-start",
            }}
          >
            <HalomotButton
              inscription={buttonInscriptions.previousButton}
              onClick={handlePrev}
              fixedWidth="172px"
              gradient={halomotButtonGradient}
              backgroundColor={halomotButtonBackground}
              textColor={halomotButtonTextColor}
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
              {...(halomotButtonHoverTextColor
                ? { hoverTextColor: halomotButtonHoverTextColor }
                : {})}
            />
            <HalomotButton
              inscription={buttonInscriptions.nextButton}
              onClick={handleNext}
              fixedWidth="172px"
              gradient={halomotButtonGradient}
              backgroundColor={halomotButtonBackground}
              textColor={halomotButtonTextColor}
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
              {...(halomotButtonHoverTextColor
                ? { hoverTextColor: halomotButtonHoverTextColor }
                : {})}
            />
            <HalomotButton
              inscription={buttonInscriptions.openWebAppButton}
              onClick={() =>
                onItemClick && onItemClick(testimonials[active].link || "")
              }
              fillWidth
              gradient={halomotButtonGradient}
              backgroundColor={halomotButtonBackground}
              textColor={halomotButtonTextColor}
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
              {...(halomotButtonHoverTextColor
                ? { hoverTextColor: halomotButtonHoverTextColor }
                : {})}
              href={testimonials[active].link}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: ImageContainerProps) => (
  <div
    className="relative h-full w-full"
    style={{
      borderRadius: outerRounding,
      padding: "1px",
      backgroundColor: outlineColor,
      transition: "background-color 0.3s ease-in-out",
    }}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: innerRounding,
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        draggable={false}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <style jsx>{\`
      div:hover {
        background-color: \${hoverOutlineColor} !important;
      }
    \`}</style>
  </div>
);

export default ProjectShowcase;
`,
    props: [
      { name: "testimonials", type: "Testimonial[]", description: "project_showcase_prop_testimonials", required: true },
      { name: "autoplay", type: "boolean", defaultValue: "false", description: "project_showcase_prop_autoplay", required: false },
      { name: "colors", type: "object", description: "project_showcase_prop_colors", required: false },
      { name: "fontSizes", type: "object", description: "project_showcase_prop_fontSizes", required: false },
      { name: "spacing", type: "object", description: "project_showcase_prop_spacing", required: false },
      { name: "desktopVersionBottomThreshold", type: "number", defaultValue: "1024", description: "project_showcase_prop_desktopVersionBottomThreshold", required: false },
      { name: "mobile", type: "object", description: "project_showcase_prop_mobile", required: false },
      { name: "imageAspectRatio", type: "number", defaultValue: "1.37", description: "project_showcase_prop_imageAspectRatio", required: false },
      { name: "isRTL", type: "boolean", defaultValue: "false", description: "project_showcase_prop_isRTL", required: false },
      { name: "onItemClick", type: "(link: string) => void", description: "project_showcase_prop_onItemClick", required: false },
      { name: "outerRounding", type: "string", defaultValue: "18.2px", description: "project_showcase_prop_outerRounding", required: false },
      { name: "innerRounding", type: "string", defaultValue: "18px", description: "project_showcase_prop_innerRounding", required: false },
      { name: "outlineColor", type: "string", defaultValue: "#33313d", description: "project_showcase_prop_outlineColor", required: false },
      { name: "hoverOutlineColor", type: "string", defaultValue: "#403d4d", description: "project_showcase_prop_hoverOutlineColor", required: false },
      { name: "buttonInscriptions", type: "object", description: "project_showcase_prop_buttonInscriptions", required: false },
      { name: "halomotButtonGradient", type: "string", description: "project_showcase_prop_halomotButtonGradient", required: false },
      { name: "halomotButtonBackground", type: "string", description: "project_showcase_prop_halomotButtonBackground", required: false },
      { name: "halomotButtonTextColor", type: "string", description: "project_showcase_prop_halomotButtonTextColor", required: false },
      { name: "halomotButtonOuterBorderRadius", type: "string", description: "project_showcase_prop_halomotButtonOuterBorderRadius", required: false },
      { name: "halomotButtonInnerBorderRadius", type: "string", description: "project_showcase_prop_halomotButtonInnerBorderRadius", required: false },
      { name: "halomotButtonHoverTextColor", type: "string", description: "project_showcase_prop_halomotButtonHoverTextColor", required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: "truncating-navbar",
    title: "truncating_navbar_title",
    description: "truncating_navbar_desc",
    demoFullPage: TruncatingNavbarFullPageDemo,
    noPadding: true,
    dependencies: "npm install lucide-react",
    credit: `[Resizable Navbar](https://ui.aceternity.com/components/resizable-navbar) by [Aceternity UI](https://ui.aceternity.com/)`,
    usage: `// Path to the "TruncatingNavbar.tsx" file
import TruncatingNavbar from "@/app/the-actual-components/truncating-navbar/TruncatingNavbar";
import { useRef } from "react";
export default function TruncatingNavbarDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="w-full h-screen overflow-y-auto p-6 bg-[#060507]"
    >
      <div className="sticky top-0 z-20 w-full">
        <TruncatingNavbar
          icon="/logo.png"
          appName="Namer UI"
          routes={[
            {
              name: "Portfolio",
              link: "https://maxim-bortnikov.netlify.app/",
              external: true, // Opens in new tab
            },
          ]}
          homeRoute="/"
          scrolledBg="#151419"
          mobileBg="#060507"
          placeholderText="Search..."
          shortcutKey="M"
          desktopThreshold={1024}
          onOpenSearch={() => {
            console.log("The search callback has been triggered.");
          }}
          scrollContainerRef={scrollRef}
          zIndex={1}
        />
      </div>

      <div className="h-[200vh] flex flex-col items-center justify-start text-white pt-[64px]">
        <p className="text-lg opacity-60">Scroll down</p>
      </div>
    </div>
  );
}
`,
    code: `'use client';
    
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Command, Minimize2, Menu } from 'lucide-react';

// ===========
// Button Component
// ===========
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  textColor?: string;
  outlineColor?: string;
  hoverBg?: string;
  hoverTextColor?: string;
  hoverOutlineColor?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      bg,
      textColor,
      outlineColor,
      hoverBg,
      hoverTextColor,
      hoverOutlineColor,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={\`custom-button \${className || ''}\`}
        style={{
          ['--btn-bg' as any]: bg,
          ['--btn-color' as any]: textColor,
          ['--btn-outline' as any]: outlineColor,
          ['--btn-hover-bg' as any]: hoverBg,
          ['--btn-hover-color' as any]: hoverTextColor,
          ['--btn-hover-outline' as any]: hoverOutlineColor,
          ...(style || {}),
        }}
      >
        {children}
        <style jsx>{\`
          .custom-button {
            background: var(--btn-bg);
            color: var(--btn-color);
            border: 1px solid var(--btn-outline);
            transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            border-radius: 6px;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12px;
            font-size: 0.85rem;
            height: 36px;
            cursor: pointer;
          }
          .custom-button:hover {
            background: var(--btn-hover-bg);
            color: var(--btn-hover-color);
            border-color: var(--btn-hover-outline);
          }
        \`}</style>
      </button>
    );
  }
);
Button.displayName = 'Button';

// =====================================================
// Navbar Types
// =====================================================
export interface RouteItem {
  name: string;
  link: string;
  external?: boolean;
}

export interface TruncatingNavbarProps {
  icon: string;
  appName: string;
  routes: RouteItem[];
  homeRoute?: string;
  scrolledBg?: string;
  outlineColor?: string;
  mobileBg?: string;
  shortcutKey?: string;
  onShortcut?: () => void;
  fontSize?: string;
  desktopThreshold?: number;
  zIndex?: number;
  onOpenSearch?: () => void;
  placeholderText?: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  // Button defaults
  buttonBg?: string;
  buttonTextColor?: string;
  buttonOutline?: string;
  buttonHoverBg?: string;
  buttonHoverText?: string;
  buttonHoverOutline?: string;
  buttonIconGap?: number;
  // Key area styling
  keyAreaBg?: string;
  keyAreaTextColor?: string;
  keyAreaOutline?: string;
  keyAreaHoverBg?: string;
  keyAreaHoverText?: string;
  keyAreaHoverOutline?: string;
  keyAreaPadding?: string;
  keyAreaRadius?: string;
  // Navbar
  navbarHoverOutline?: string;
}

// =====================================================
// Navbar Component
// =====================================================
export default function TruncatingNavbar({
  icon,
  appName,
  routes,
  homeRoute = '/',
  scrolledBg = '#151419',
  outlineColor = '#33313d',
  mobileBg = '#111014',
  shortcutKey = 'K',
  onShortcut,
  fontSize = '0.875rem',
  desktopThreshold = 910,
  zIndex = 10,
  onOpenSearch,
  placeholderText = 'Search components...',
  scrollContainerRef,
  // Button defaults
  buttonBg = '#151419',
  buttonTextColor = '#aaa',
  buttonOutline = '#33313d',
  buttonHoverBg = '#24222b',
  buttonHoverText = '#fff',
  buttonHoverOutline = '#403d4d',
  buttonIconGap = 22,
  // Key defaults
  keyAreaBg = '#24222b',
  keyAreaTextColor = '#aaa',
  keyAreaOutline = '#33313d',
  keyAreaHoverBg = '#17161c',
  keyAreaHoverText = '#fff',
  keyAreaHoverOutline = '#403d4d',
  keyAreaPadding = '1px 6px',
  keyAreaRadius = '4px',
  // Navbar
  navbarHoverOutline = '#403d4d',
}: TruncatingNavbarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const router = useRouter();
  const displayShortcutKey = shortcutKey.toUpperCase();

  const [buttonHovered, setButtonHovered] = useState(false);
  const mobileBreakpoint = desktopThreshold - 1;

  // Handlers
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < desktopThreshold);
    if (window.innerWidth >= desktopThreshold) setIsMobileMenuOpen(false);
  }, [desktopThreshold]);

  const handleScroll = useCallback(() => {
    const scrollY = scrollContainerRef?.current
      ? scrollContainerRef.current.scrollTop
      : window.scrollY;

    if (scrollY <= 0 && isScrolled) setIsScrolled(false);
    else if (scrollY > 8 && !isScrolled) setIsScrolled(true);
  }, [isScrolled, scrollContainerRef]);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toUpperCase() === displayShortcutKey) {
        e.preventDefault();
        if (onShortcut) onShortcut();
        if (onOpenSearch) onOpenSearch();
      }
    },
    [displayShortcutKey, onShortcut, onOpenSearch]
  );

  const handleRoute = useCallback(
    (item: RouteItem, closeMobile = false) => {
      if (!item.link) return;
      if (item.external) {
        window.open(item.link, '_blank', 'noopener,noreferrer');
      } else {
        router.push(item.link);
      }
      if (closeMobile) setIsMobileMenuOpen(false);
    },
    [router]
  );

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    const target = scrollContainerRef?.current || window;
    target.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('resize', handleResize);
      target.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleResize, handleScroll, handleKeydown, scrollContainerRef]);

  const navStyle: React.CSSProperties = {
    background: isMobile
      ? isScrolled
        ? scrolledBg
        : mobileBg
      : isScrolled
      ? scrolledBg
      : 'transparent',
    border: \`1px solid \${
      isScrolled ? (navHovered ? navbarHoverOutline : outlineColor) : 'transparent'
    }\`,
    borderRadius: isScrolled ? '8px' : '0',
    height: isMobile ? (isScrolled ? '52px' : '56px') : isScrolled ? '52px' : '64px',
    top: isMobile ? (isScrolled ? '8px' : '0') : isScrolled ? '16px' : '0',
    marginTop: isMobile ? (isScrolled ? '8px' : '0') : isScrolled ? '16px' : '0',
    paddingLeft: isMobile ? (isScrolled ? '12px' : '0') : isScrolled ? '24px' : '0',
    paddingRight: isMobile ? (isScrolled ? '12px' : '0') : isScrolled ? '24px' : '0',
    boxShadow: isScrolled ? '0 2px 16px 0 rgba(0,0,0,0.08)' : 'none',
    transition:
      'background 0.3s ease,border-color 0.3s ease,color 0.3s ease,height 0.3s ease,margin 0.3s ease,padding 0.3s ease',
    zIndex,
    position: 'sticky',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
    minWidth: '0',
    left: '0',
    right: '0',
  };

  // Render
  return (
    <>
      <nav
        className={\`resizable-navbar \${isScrolled ? 'scrolled' : ''} \${
          isMobile ? 'mobile' : ''
        }\`}
        style={navStyle}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
      >
        {/* Logo */}
        <a className="navbar-logo" href={homeRoute}>
          <img src={icon} alt="logo" width="32" height="32" />
          <span className="app-name">{appName}</span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <>
            <div className="nav-items">
              {routes.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute(item);
                  }}
                  className="nav-link"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  <span className="nav-link-text" style={{ fontSize }}>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop Search Button */}
            <Button
              bg={buttonBg}
              textColor={buttonTextColor}
              outlineColor={buttonOutline}
              hoverBg={buttonHoverBg}
              hoverTextColor={buttonHoverText}
              hoverOutlineColor={buttonHoverOutline}
              onClick={() => onOpenSearch && onOpenSearch()}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              <div
                className="button-flex"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  gap: \`\${buttonIconGap}px\`,
                }}
              >
                <div className="button-left flex items-center gap-2">
                  <Search size={14} />
                  <span>{placeholderText}</span>
                </div>
                <div
                  className="button-right key-area"
                  style={{
                    padding: keyAreaPadding,
                    borderRadius: keyAreaRadius,
                    border: \`1px solid \${buttonHovered ? keyAreaHoverOutline : keyAreaOutline}\`,
                    background: buttonHovered ? keyAreaHoverBg : keyAreaBg,
                    color: buttonHovered ? keyAreaHoverText : keyAreaTextColor,
                    transition:
                      'background 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Command size={12} /> <span>{displayShortcutKey}</span>
                </div>
              </div>
            </Button>
          </>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open navigation"
          >
            <Menu size={26} />
          </button>
        )}
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileMenuOpen(false);
          }}
        >
          <div className="mobile-nav-menu">
            <div className="mobile-nav-header">
              <a className="navbar-logo" href={homeRoute}>
                <img src={icon} alt="logo" width="32" height="32" />
                <span className="app-name">{appName}</span>
              </a>
              <button
                className="mobile-nav-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <Minimize2 size={26} />
              </button>
            </div>
            <div className="mobile-nav-links">
              {routes.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute(item, true);
                  }}
                  className="mobile-nav-link"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Search Button */}
            <Button
              bg={buttonBg}
              textColor={buttonTextColor}
              outlineColor={buttonOutline}
              hoverBg={buttonHoverBg}
              hoverTextColor={buttonHoverText}
              hoverOutlineColor={buttonHoverOutline}
              onClick={() => {
                if (onOpenSearch) onOpenSearch();
                setIsMobileMenuOpen(false);
              }}
              style={{ width: '100%' }}
            >
              <div
                className="button-flex"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div className="flex items-center gap-2">
                  <Search size={14} />
                  <span>{placeholderText}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Command size={12} /> <span>{displayShortcutKey}</span>
                </div>
              </div>
            </Button>
          </div>
        </div>
      )}

      <style jsx>{\`
        .resizable-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .app-name {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #fff;
        }
        .nav-items {
          display: flex;
          flex: 1 1 0;
          justify-content: flex-start;
          margin-inline-start: 46px;
          gap: 18px;
        }
        .nav-link {
          color: #aaa;
          text-decoration: none;
          font-size: 1rem;
          white-space: nowrap;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #fff;
        }
        .mobile-nav-toggle {
          display: none;
        }
        @media (max-width: \${mobileBreakpoint}px) {
          .nav-items {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block;
            color: #f4f4f5;
            background: none;
            border: none;
          }
        }
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: #111014;
        }
        .mobile-nav-menu {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 18px 23px 23px 23px;
          background: inherit;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-nav-link {
          padding: 10px;
          border-radius: 6px;
          color: #aaa;
          font-size: 1.1rem;
          text-decoration: none;
        }
        .mobile-nav-link:hover {
          background: #23232c;
          color: #fff;
        }
      \`}</style>
    </>
  );
}
`,
    props: [
      { "name": "icon", "type": "string", "description": "truncating_navbar_prop_icon", "required": true },
      { "name": "appName", "type": "string", "description": "truncating_navbar_prop_appName", "required": true },
      { "name": "routes", "type": "RouteItem[]", "description": "truncating_navbar_prop_routes", "required": true },
      { "name": "homeRoute", "type": "string", "defaultValue": "/", "description": "truncating_navbar_prop_homeRoute", "required": false },
      { "name": "scrolledBg", "type": "string", "defaultValue": "#151419", "description": "truncating_navbar_prop_scrolledBg", "required": false },
      { "name": "outlineColor", "type": "string", "defaultValue": "#33313d", "description": "truncating_navbar_prop_outlineColor", "required": false },
      { "name": "mobileBg", "type": "string", "defaultValue": "#111014", "description": "truncating_navbar_prop_mobileBg", "required": false },
      { "name": "shortcutKey", "type": "string", "defaultValue": "K", "description": "truncating_navbar_prop_shortcutKey", "required": false },
      { "name": "onShortcut", "type": "() => void", "description": "truncating_navbar_prop_onShortcut", "required": false },
      { "name": "fontSize", "type": "string", "defaultValue": "0.875rem", "description": "truncating_navbar_prop_fontSize", "required": false },
      { "name": "desktopThreshold", "type": "number", "defaultValue": "910", "description": "truncating_navbar_prop_desktopThreshold", "required": false },
      { "name": "zIndex", "type": "number", "defaultValue": "10", "description": "truncating_navbar_prop_zIndex", "required": false },
      { "name": "onOpenSearch", "type": "() => void", "description": "truncating_navbar_prop_onOpenSearch", "required": false },
      { "name": "placeholderText", "type": "string", "defaultValue": "Search components...", "description": "truncating_navbar_prop_placeholderText", "required": false },
      { "name": "scrollContainerRef", "type": "RefObject<HTMLElement>", "description": "truncating_navbar_prop_scrollContainerRef", "required": false },
      { "name": "buttonBg", "type": "string", "defaultValue": "#151419", "description": "truncating_navbar_prop_buttonBg", "required": false },
      { "name": "buttonTextColor", "type": "string", "defaultValue": "#aaa", "description": "truncating_navbar_prop_buttonTextColor", "required": false },
      { "name": "buttonOutline", "type": "string", "defaultValue": "#33313d", "description": "truncating_navbar_prop_buttonOutline", "required": false },
      { "name": "buttonHoverBg", "type": "string", "defaultValue": "#24222b", "description": "truncating_navbar_prop_buttonHoverBg", "required": false },
      { "name": "buttonHoverText", "type": "string", "defaultValue": "#fff", "description": "truncating_navbar_prop_buttonHoverText", "required": false },
      { "name": "buttonHoverOutline", "type": "string", "defaultValue": "#403d4d", "description": "truncating_navbar_prop_buttonHoverOutline", "required": false },
      { "name": "buttonIconGap", "type": "number", "defaultValue": "22", "description": "truncating_navbar_prop_buttonIconGap", "required": false },
      { "name": "keyAreaBg", "type": "string", "defaultValue": "#24222b", "description": "truncating_navbar_prop_keyAreaBg", "required": false },
      { "name": "keyAreaTextColor", "type": "string", "defaultValue": "#aaa", "description": "truncating_navbar_prop_keyAreaTextColor", "required": false },
      { "name": "keyAreaOutline", "type": "string", "defaultValue": "#33313d", "description": "truncating_navbar_prop_keyAreaOutline", "required": false },
      { "name": "keyAreaHoverBg", "type": "string", "defaultValue": "#17161c", "description": "truncating_navbar_prop_keyAreaHoverBg", "required": false },
      { "name": "keyAreaHoverText", "type": "string", "defaultValue": "#fff", "description": "truncating_navbar_prop_keyAreaHoverText", "required": false },
      { "name": "keyAreaHoverOutline", "type": "string", "defaultValue": "#403d4d", "description": "truncating_navbar_prop_keyAreaHoverOutline", "required": false },
      { "name": "keyAreaPadding", "type": "string", "defaultValue": "1px 6px", "description": "truncating_navbar_prop_keyAreaPadding", "required": false },
      { "name": "keyAreaRadius", "type": "string", "defaultValue": "4px", "description": "truncating_navbar_prop_keyAreaRadius", "required": false },
      { "name": "navbarHoverOutline", "type": "string", "defaultValue": "#403d4d", "description": "truncating_navbar_prop_navbarHoverOutline", "required": false }
    ]
  },
  {
    id: "floating-label-input",
    title: "floating_label_input_title",
    description: "floating_label_input_desc",
    demo: FloatingLabelInputPreviewDemo,
    demoFullPage: FloatingLabelInputFullPageDemo,
    noPadding: true,
    credit: `[Input Floating Label animation](https://codepen.io/Mahe76/pen/qBQgXyK) by [Elpeeda](https://codepen.io/Mahe76)`,
    usage: `// Path to the "FloatingLabelInput.tsx" file
import FloatingLabelInput from '@/app/the-actual-components/floating-label-input/FloatingLabelInput'

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [info, setInfo] = useState('');

<div
  style={{
    minHeight: 300,
    background: '#050505',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px',
    boxSizing: 'border-box',
  }}
>
  {/* Inputs row */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '32px',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      maxWidth: 1440,
    }}
  >
    <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
      <FloatingLabelInput
        label="Username"
        value={username}
        onValueChange={setUsername}
      />
    </div>
    <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
      <FloatingLabelInput
        label="אימייל"
        value={email}
        isRTL
        onValueChange={setEmail}
        type="email"
        rounding="0px"
        inputHeight="72px"
        inputFontSize="1.5rem"
        labelFontSize="1.125rem"
        labelActiveFontSize="14px"
        foregroundColor="#fff"
        mutedForegroundColor="#aaa"
        accentColor="#a259ff"
      />
    </div>
    <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
      <FloatingLabelInput
        label="Password"
        value={password}
        onValueChange={setPassword}
        type="password"
      />
    </div>
    <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
      <FloatingLabelInput
        label="Additional Info"
        value={info}
        onValueChange={setInfo}
        parentBackground="#050505"
        inputOutlineColor="#707070"
        inputFocusOutlineColor="#00a0d8"
        outlineWidth="3px"
        rounding="10px"
        accentColor="#fff"
        foregroundColor="#00a0d8"
        mutedForegroundColor="#909090"
        labelActiveFontSize="15px"
        textarea={true}
      />
    </div>
  </div>
  {/* Labels column, stacked and centered below */}
  <div
    style={{
      marginTop: 32,
      color: "#fafafa",
      width: "100%",
      maxWidth: 340,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '0.96rem',
      alignItems: 'stretch',
    }}
  >
    <div>
      <strong>Username:</strong> {username || <span style={{ opacity: 0.5 }}>—</span>}
    </div>
    <div>
      <strong>Email:</strong> {email || <span style={{ opacity: 0.5 }}>—</span>}
    </div>
    <div>
      <strong>Password:</strong> {password || <span style={{ opacity: 0.5 }}>—</span>}
    </div>
    <div>
      <strong>Additional Info:</strong> {info || <span style={{ opacity: 0.5 }}>—</span>}
    </div>
  </div>
</div>
`,
    code: `"use client";
import React, { useEffect, useState, useCallback } from "react";

export interface FloatingLabelInputProps {
  label: string;
  value: string;
  onValueChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  textarea?: boolean;
  isRTL?: boolean;
  accentColor?: string;
  textareaHeight?: string;
  parentBackground?: string; // Used as label background and input background
  inputOutlineColor?: string;
  inputFocusOutlineColor?: string; // Active/focused outline color
  outlineWidth?: string;
  foregroundColor?: string;
  mutedForegroundColor?: string;
  rounding?: string;
  inputPadding?: string;
  inputFontSize?: string;
  labelFontSize?: string;
  labelActiveFontSize?: string;
  labelPadding?: string;
  labelActivePadding?: string;
  inputHeight?: string;
}

function detectRTL(text: string): boolean {
  return /[\\u0591-\\u07FF\\uFB1D-\\uFDFD\\uFE70-\\uFEFC]/.test(text);
}
function detectLabelDir(text: string): "rtl" | "ltr" {
  return detectRTL(text) ? "rtl" : "ltr";
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onValueChange,
  type = "text",
  autoComplete = "off",
  required = false,
  disabled = false,
  textarea = false,
  isRTL,
  accentColor = "#00a0d8",
  textareaHeight = "152px",
  parentBackground = "#050505",
  inputOutlineColor = "#909090",
  inputFocusOutlineColor = "#fff",
  outlineWidth = "1.5px",
  foregroundColor = "#fff",
  mutedForegroundColor = "#aaa",
  rounding = "8px",
  inputPadding = "17px",
  inputFontSize = "1.025rem",
  labelFontSize = "1.025rem",
  labelActiveFontSize = "12px",
  labelPadding = "0 7px",
  labelActivePadding = "0 6px",
  inputHeight = "49px",
}) => {
  const [focused, setFocused] = useState(false);
  const [rtlInput, setRtlInput] = useState(isRTL ?? false);

  useEffect(() => {
    if (!value) setRtlInput(isRTL ?? false);
    else setRtlInput(detectRTL(value));
  }, [value, isRTL]);

  useEffect(() => {
    if (!value) setRtlInput(isRTL ?? false);
  }, [label, isRTL, value]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onValueChange(e.target.value);
    },
    [onValueChange]
  );

  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);

  const hasValue = value.length > 0;
  const labelDir = detectLabelDir(label);

  // inputBgColor always equals parentBackground
  const style: React.CSSProperties = {
    "--accent-color": accentColor,
    "--mobile-form-input-bg": parentBackground,
    "--input-outline": inputOutlineColor,
    "--input-outline-focus": inputFocusOutlineColor,
    "--input-outline-width": outlineWidth,
    "--foreground": foregroundColor,
    "--muted-foreground": mutedForegroundColor,
    "--parent-background": parentBackground,
    "--general-rounding": rounding,
    "--floating-input-layout-text-area-height": textareaHeight,
    "--input-padding": inputPadding,
    "--input-font-size": inputFontSize,
    "--label-font-size": labelFontSize,
    "--label-active-font-size": labelActiveFontSize,
    "--label-padding": labelPadding,
    "--label-active-padding": labelActivePadding,
    "--input-height": inputHeight,
  } as React.CSSProperties;

  return (
    <div
      className={[
        "mobile-form-group",
        rtlInput ? "rtl" : "",
        focused ? "active" : "",
        hasValue ? "has-value" : "",
        textarea ? "textarea" : "",
      ].join(" ")}
      style={style}
    >
      {textarea ? (
        <textarea
          className="mobile-form-input"
          required={required}
          value={value}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          dir={rtlInput ? "rtl" : "ltr"}
          spellCheck={false}
        />
      ) : (
        <input
          className="mobile-form-input"
          type={type}
          required={required}
          value={value}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          dir={rtlInput ? "rtl" : "ltr"}
          spellCheck={false}
        />
      )}
      <label
        className={"mobile-form-label" + (textarea ? " label-textarea" : "")}
        dir={labelDir}
      >
        {label}
      </label>
      <style jsx>{\`
        .mobile-form-group {
          position: relative;
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 22px;
        }
        .mobile-form-group:last-child {
          margin-bottom: 0;
        }
        .mobile-form-input {
          width: 100%;
          height: var(--input-height);
          padding: var(--input-padding);
          font-size: var(--input-font-size);
          font-weight: 400;
          color: var(--foreground);
          background: var(--mobile-form-input-bg);
          border: var(--input-outline-width) solid var(--input-outline);
          border-radius: var(--general-rounding);
          outline: none;
          box-sizing: border-box;
          text-align: left;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          resize: none;
          line-height: 1.4;
        }
        .mobile-form-input:focus {
          border-color: var(--input-outline-focus);
        }
        .mobile-form-input:disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .mobile-form-group.rtl .mobile-form-input {
          direction: rtl;
          text-align: right;
        }
        .mobile-form-group.textarea .mobile-form-input {
          height: var(--floating-input-layout-text-area-height);
          overflow-y: auto;
        }
        .mobile-form-label {
          position: absolute;
          left: 11px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted-foreground);
          font-size: var(--label-font-size);
          font-weight: 400;
          pointer-events: none;
          background: var(--parent-background);
          padding: var(--label-padding);
          transition: color 0.3s, background 0.3s, font-size 0.3s, top 0.3s, left 0.3s, right 0.3s, transform 0.3s;
          z-index: 2;
          max-width: calc(100% - 26px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mobile-form-group.rtl .mobile-form-label {
          right: 12px;
          left: auto;
          text-align: right;
        }
        /* Default (not active, not has-value) */
        .mobile-form-group:not(.active):not(.has-value) .mobile-form-label {
          top: 50%;
          transform: translateY(-50%);
          font-size: var(--label-font-size);
          color: var(--muted-foreground);
          background: var(--parent-background);
          padding: var(--label-padding);
        }
        /* Active (input focused) */
        .mobile-form-group.active .mobile-form-label,
        .mobile-form-group .mobile-form-input:focus + .mobile-form-label {
          top: 0;
          left: 12px;
          right: auto;
          font-size: var(--label-active-font-size);
          color: var(--accent-color);
          background: var(--parent-background);
          padding: var(--label-active-padding);
          z-index: 2;
        }
        .mobile-form-group.rtl.active .mobile-form-label,
        .mobile-form-group.rtl .mobile-form-input:focus + .mobile-form-label {
          right: 12px;
          left: auto;
        }
        /* Has value but not active */
        .mobile-form-group.has-value:not(.active) .mobile-form-label {
          top: 0;
          left: 12px;
          right: auto;
          font-size: var(--label-active-font-size);
          color: var(--muted-foreground);
          background: var(--parent-background);
          padding: var(--label-active-padding);
          z-index: 2;
        }
        .mobile-form-group.rtl.has-value:not(.active) .mobile-form-label {
          right: 12px;
          left: auto;
        }
        /* Textarea label placement */
        .mobile-form-group.textarea .mobile-form-label {
          left: 12px;
          right: auto;
          padding: var(--label-padding);
        }
        .mobile-form-group.textarea.rtl .mobile-form-label {
          right: 12px;
          left: auto;
        }
        .mobile-form-group.textarea:not(.active):not(.has-value) .mobile-form-label {
          top: 12px;
          left: 12px;
          right: auto;
          transform: none;
          font-size: var(--label-font-size);
          color: var(--muted-foreground);
          background: var(--parent-background);
          padding: var(--label-padding);
          text-align: left;
        }
        .mobile-form-group.textarea:not(.active):not(.has-value).rtl .mobile-form-label {
          right: 12px;
          left: auto;
          text-align: right;
        }
      \`}</style>
    </div>
  );
};

export default FloatingLabelInput;
`,
    props: [
        { name: "label", type: "string", description: "floating_label_input_prop_label", required: true },
        { name: "value", type: "string", description: "floating_label_input_prop_value", required: true },
        { name: "onValueChange", type: "(v: string) => void", description: "floating_label_input_prop_onValueChange", required: true },
        { name: "type", type: "string", defaultValue: "text", description: "floating_label_input_prop_type", required: false },
        { name: "autoComplete", type: "string", defaultValue: "off", description: "floating_label_input_prop_autoComplete", required: false },
        { name: "required", type: "boolean", defaultValue: "false", description: "floating_label_input_prop_required", required: false },
        { name: "disabled", type: "boolean", defaultValue: "false", description: "floating_label_input_prop_disabled", required: false },
        { name: "textarea", type: "boolean", defaultValue: "false", description: "floating_label_input_prop_textarea", required: false },
        { name: "isRTL", type: "boolean", description: "floating_label_input_prop_isRTL", required: false },
        { name: "accentColor", type: "string", defaultValue: "#00a0d8", description: "floating_label_input_prop_accentColor", required: false },
        { name: "textareaHeight", type: "string", defaultValue: "152px", description: "floating_label_input_prop_textareaHeight", required: false },
        { name: "parentBackground", type: "string", defaultValue: "#050505", description: "floating_label_input_prop_parentBackground", required: false },
        { name: "inputOutlineColor", type: "string", defaultValue: "#909090", description: "floating_label_input_prop_inputOutlineColor", required: false },
        { name: "inputFocusOutlineColor", type: "string", defaultValue: "#fff", description: "floating_label_input_prop_inputFocusOutlineColor", required: false },
        { name: "outlineWidth", type: "string", defaultValue: "1.5px", description: "floating_label_input_prop_outlineWidth", required: false },
        { name: "foregroundColor", type: "string", defaultValue: "#fff", description: "floating_label_input_prop_foregroundColor", required: false },
        { name: "mutedForegroundColor", type: "string", defaultValue: "#aaa", description: "floating_label_input_prop_mutedForegroundColor", required: false },
        { name: "rounding", type: "string", defaultValue: "8px", description: "floating_label_input_prop_rounding", required: false },
        { name: "inputPadding", type: "string", defaultValue: "17px", description: "floating_label_input_prop_inputPadding", required: false },
        { name: "inputFontSize", type: "string", defaultValue: "1.025rem", description: "floating_label_input_prop_inputFontSize", required: false },
        { name: "labelFontSize", type: "string", defaultValue: "1.025rem", description: "floating_label_input_prop_labelFontSize", required: false },
        { name: "labelActiveFontSize", type: "string", defaultValue: "12px", description: "floating_label_input_prop_labelActiveFontSize", required: false },
        { name: "labelPadding", type: "string", defaultValue: "0 7px", description: "floating_label_input_prop_labelPadding", required: false },
        { name: "labelActivePadding", type: "string", defaultValue: "0 6px", description: "floating_label_input_prop_labelActivePadding", required: false },
        { name: "inputHeight", type: "string", defaultValue: "49px", description: "floating_label_input_prop_inputHeight", required: false },
    ],
  },
  {
    id: "inflected-card",
    title: "inflected_card_title",
    description: "inflected_card_desc",
    demoFullPage: InflectedCardFullPageDemo,
    noPadding: true,
    dependencies: "npm install @tabler/icons-react",
    disclaimer: 'inflected_card_disclaimer',
    credit: `[Cards with inverted border-radius #scss](https://codepen.io/kristen17/pen/pomgrKp) by [Kristen](https://codepen.io/kristen17)

Used photos:

- Photo by [Zana Latif](https://www.pexels.com/@zana-latif-2772032/) from [Pexels](https://www.pexels.com/photo/unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy-18525574/)
- Photo by [Evgeny Opanasenko](https://unsplash.com/@n3gve?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/two-cell-phones-sitting-next-to-each-other-on-a-window-sill-cZye2sFqu5o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Matteo Fusco](https://unsplash.com/@matteofusco?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/jet-black-iphone-7-1giBTF3G4EE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Aidan Hancock](https://unsplash.com/@aidanmh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/turned-on-iphone-x-on-white-surface-EwKkZu18HPo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)`,
    usage: `// Path to the "InflectedCard.tsx" file
import InflectedCard from "@/app/the-actual-components/inflected-card/InflectedCard";
import React from "react";
import {
  IconBrandAppleFilled,
  IconBrandAndroid,
  IconDeviceMobile,
  IconCornerRightUp,
  IconFold,
  IconBoltFilled,
} from "@tabler/icons-react";

export default function InflectedCardDemo() {
  return (
    <section>
      {/* --- DARK THEME CARDS (row 1, only 2 cards now) --- */}
      <div className="bg-[#0a0a0a] min-h-[300px] flex flex-wrap gap-8 items-center justify-center p-8 rounded-lg">
        {/* iPhone 15 Pro (Dark) */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="iphone15pro-dark"
            image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color.jpeg"
            title="iPhone 15 Pro"
            description="Titanium smartphone with an advanced camera system and sleek design."
            tags={[
              { name: "Brand new", textColor: "#f7f7ff", backgroundColor: "#9F4EFF", rounding: 5 },
              { name: "10% off", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 5 },
            ]}
            parentBackgroundColor="#0a0a0a"
            cardRounding={15}
            buttonIcon={<IconCornerRightUp />}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#9F4EFF"
            buttonBackgroundHoverColor="#a960ff"
            price="$1,079"
            oldPrice="$1,199"
            onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>

        {/* Samsung Flip (Dark) */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="samsung-flip6-dark"
            image="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80"
            title="Samsung Galaxy Flip 6"
            description="Innovative foldable smartphone with sleek portable design."
            tags={[
              { name: "Pre-owned", textColor: "#f7f7ff", backgroundColor: "#00A6FB" },
              { name: "50% off", textColor: "#242424", backgroundColor: "#f1f1f7" },
            ]}
            parentBackgroundColor="#0a0a0a"
            buttonIcon={<IconFold />}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#00A6FB"
            buttonBackgroundHoverColor="#0582CA"
            price="$499"
            oldPrice="$991"
            onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>
      </div>

      {/* --- FULL WIDTH SHOWCASE card --- */}
      <div className="mt-10 w-full">
        <InflectedCard
          id="showcase-fullwidth"
          image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
          title="Full Width Showcase"
          description="This demo card is 30rem tall and spans entire width."
          tags={[{ name: "Showcase", textColor: "#fff", backgroundColor: "#111" }]}
          parentBackgroundColor="#0a0a0a"
          buttonIcon={<IconDeviceMobile />}
          imageContainerHeight="30rem"
          maxWidth="100%"
          buttonIconColor="#ffffff"
          buttonIconHoverColor="#EEEEEE"
          buttonBackgroundColor="#9F4EFF"
          buttonBackgroundHoverColor="#a960ff"
          onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
          onHover={(target, id, event) =>
            console.log("Hover event:", event, "target:", target, "card", id)
          }
        />
      </div>

      {/* --- LIVE CODE DEMO --- */}
      <div className="mt-10 flex justify-center w-full">
        <InflectedCard
          id="live-demo"
          title="Live Code Demo"
          description="A card showcasing live code demo. It has a fixed 1/1 aspect ratio."
          parentBackgroundColor="#0a0a0a"
          buttonIcon={<IconBoltFilled />}
          useAspectRatio
          aspectRatio="1/1"
          mediaNode={
            <div className="w-full h-full flex items-center justify-center rounded relative overflow-hidden bg-livepattern">
              <div className="live-text-container px-3 py-2 text-white text-2xl font-bold rounded transition-colors duration-500 z-10">
                Live Code Demo
              </div>
            </div>
          }
          buttonIconColor="#ffffff"
          buttonIconHoverColor="#EEEEEE"
          buttonBackgroundColor="#00A6FB"
          buttonBackgroundHoverColor="#0582CA"
          onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
          onHover={(target, id, event) =>
            console.log("Hover event:", event, "target:", target, "card", id)
          }
        />
      </div>

      {/* --- LIGHT THEME CARDS --- */}
      <div className="flex justify-center w-full mt-10">
        <div className="bg-[#f8f8fa] min-h-[300px] flex gap-8 p-8 rounded-lg w-full max-w-6xl">
          {/* iPhone 15 Pro (Light) */}
          <div className="flex-1">
            <InflectedCard
              id="iphone15pro-light"
              image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
              title="iPhone 15 Pro"
              description="Titanium smartphone with advanced camera system."
              tags={[
                { name: "Brand new", textColor: "#181818", backgroundColor: "#E0C3FC" },
                { name: "10% off", textColor: "#181818", backgroundColor: "#b49ad7", tagHoverBrightness: 0.18 },
              ]}
              parentBackgroundColor="#f8f8fa"
              buttonIcon={<IconBrandAppleFilled />}
              buttonIconSize={32}
              buttonIconColor="#181818"
              buttonBackgroundColor="#E0C3FC"
              buttonBackgroundHoverColor="#bca1e7"
              price="$1,079"
              oldPrice="$1,199"
              priceTagTextColor="#222"
              oldPriceTextColor="#555"
              priceTagRounding="25px"
              priceTagBackgroundColor="#f5e6ff"
              titleAlignment="center"
              descriptionAlignment="center"
              tagsAlignment="center"
              colors={{ title: "#0a0a0a", description: "#363636" }}
              fontSizes={{
                title: "1.625rem", description: "1.25rem", tags: "1rem", price: "1.3rem",
              }}
              onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
              onHover={(target, id, event) =>
                console.log("Hover event:", event, "target:", target, "card", id)
              }
            />
          </div>

          {/* Samsung Flip (Light) */}
          <div className="flex-1">
            <InflectedCard
              id="samsung-flip6-light"
              image="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80"
              title="סמסונג גלקסי פליפ 6"
              description="טלפון מתקפל חדשני עם עיצוב דקיק, תצוגה גדולה, ומאפשר חוויית צפייה וסביבת עבודה מרובת משימות."
              tags={[
                { name: "יד שניה", textColor: "#181818", backgroundColor: "#A2F9B8" },
                { name: "50% הנחה", textColor: "#181818", backgroundColor: "#6ccf8f", tagHoverBrightness: 0.18 },
              ]}
              parentBackgroundColor="#f8f8fa"
              buttonIcon={<IconBrandAndroid />}
              buttonIconSize={32}
              buttonIconColor="#181818"
              buttonBackgroundColor="#A2F9B8"
              buttonBackgroundHoverColor="#7ee6a2"
              mirrored
              price="₪1,499"
              oldPrice="₪2,999"
              priceTagTextColor="#181818"
              oldPriceTextColor="#565656"
              priceTagRounding="6px"
              priceTagBackgroundColor="#e1fbe6"
              titleAlignment="right"
              descriptionAlignment="right"
              colors={{ title: "#0a0a0a", description: "#363636" }}
              fontSizes={{
                title: "1.625rem", description: "1.25rem", tags: "1rem", price: "1.3rem",
              }}
              onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
              onHover={(target, id, event) =>
                console.log("Hover event:", event, "target:", target, "card", id)
              }
            />
          </div>
        </div>
      </div>

      {/* --- NEW DARK THEME ROW: iPhone 7 + iPhone X Hebrew --- */}
      <div className="bg-[#0a0a0a] min-h-[300px] flex flex-wrap gap-8 items-center justify-center p-8 rounded-lg mt-10">
        {/* iPhone 7 */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="iphone7-dark"
            image="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80"
            title="iPhone 7"
            description="Classic iPhone with 12MP camera and waterproof build."
            tags={[
              { name: "Refurbished", textColor: "#fff", backgroundColor: "#FF3900" },
              { name: "20% off", textColor: "#242424", backgroundColor: "#f1f1f7" },
            ]}
            parentBackgroundColor="#0a0a0a"
            buttonIcon={<IconCornerRightUp />}
            buttonIconSize={32}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#FF3900"
            buttonBackgroundHoverColor="#FF5733"
            price="$159"
            priceTagTextColor = "#0a0a0a"
            priceTagBackgroundColor = "rgba(255,255,255,0.64)"
            onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>

        {/* iPhone X Hebrew */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="iphonex-hebrew-dark"
            image="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80"
            title="iPhone X"
            description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
            tags={[
              { name: "משומש", textColor: "#f7f7ff", backgroundColor: "#00A6FB", rounding: 4 },
              { name: "40% הנחה", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 15, direction: "ltr" },
            ]}
            parentBackgroundColor="#0a0a0a"
            buttonIcon={<IconCornerRightUp />}
            mirrored
            swapPriceOrder={true}
            price="$599"
            oldPrice="$991"
            titleAlignment="center"
            descriptionAlignment="right"
            buttonIconSize={32}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#00A6FB"
            buttonBackgroundHoverColor="#0582CA"
            onClick={(target, id) => console.log("Clicked:", target, "on card", id)}
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
            imageHoverZoom={1.5}
          />
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{\`
        .bg-livepattern {
          background-color: #00a7fa;
        }
        .bg-livepattern::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 30%, white 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, white 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, transparent 40%);
          background-size: 200% 200%;
          animation: orbFloat 15s ease-in-out infinite alternate;
          z-index: 0;
          pointer-events: none;
        }
        @keyframes orbFloat {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .bg-livepattern:hover::before {
          background: radial-gradient(circle at 20% 30%, black 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, black 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(0,0,0,0.7) 0%, transparent 40%);
          animation: orbFloat 15s ease-in-out infinite alternate;
        }
        .live-text-container {
          background: #636363;
        }
        .live-text-container:hover {
          background: #fff;
          color: #636363;
        }
      \`}</style>
    </section>
  );
} 
`,
    code: `"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export interface Tag {
  name: string;
  textColor: string;
  backgroundColor: string;
  rounding?: number;
  alignment?: "left" | "center" | "right";
  tagHoverBrightness?: number;
  direction?: "ltr" | "rtl" | "auto";
}

export interface InflectedCardProps {
  id: string;
  image?: string;
  title: string;
  description: string;
  tags?: Tag[];
  parentBackgroundColor: string;

  onClick?: (target: string, id: string) => void;
  onHover?: (target: string, id: string, event: "enter" | "leave") => void;

  cardRounding?: number;

  fontSizes?: {
    title?: string;
    description?: string;
    tags?: string;
    price?: string;
  };
  colors?: {
    title?: string;
    description?: string;
  };

  // Margins
  titleMarginTop?: string;
  titleMarginBottom?: string;
  descriptionMarginBottom?: string;
  tagsMarginBottom?: string;

  buttonIcon: React.ReactElement;
  buttonIconSize?: number;
  buttonIconColor?: string;
  buttonIconHoverColor?: string;
  buttonBackgroundColor?: string;
  buttonBackgroundHoverColor?: string;

  imageHoverZoom?: number;
  mirrored?: boolean;

  titleAlignment?: "left" | "center" | "right";
  descriptionAlignment?: "left" | "center" | "right";
  tagsAlignment?: "left" | "center" | "right";

  maxWidth?: string;

  // Price handling
  price?: string;
  oldPrice?: string;
  swapPriceOrder?: boolean;
  priceTagTextColor?: string;
  oldPriceTextColor?: string;
  priceTagRounding?: string;
  priceTagBackgroundColor?: string;

  // Clamp lines
  titleLineClamp?: number;
  descriptionLineClamp?: number;

  // Image sizing
  imageContainerHeight?: string;
  useAspectRatio?: boolean;
  aspectRatio?: string;
  mediaNode?: React.ReactNode;
}

/* brighten/darken helper */
const adjustBrightness = (hex: string, amount: number) => {
  try {
    let col = hex.replace("#", "");
    if (col.length === 3) col = col.split("").map(c => c + c).join("");
    const num = parseInt(col, 16);
    let r = (num >> 16) + Math.round(255 * amount);
    let g = ((num >> 8) & 0x00ff) + Math.round(255 * amount);
    let b = (num & 0x0000ff) + Math.round(255 * amount);
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return \`rgb(\${r}, \${g}, \${b})\`;
  } catch {
    return hex;
  }
};

const InflectedCard: React.FC<InflectedCardProps> = ({
  id,
  image,
  title,
  description,
  tags = [],
  parentBackgroundColor,
  onClick,
  onHover,

  cardRounding = 20,
  fontSizes = {},
  colors = {},

  titleMarginTop = "0",
  titleMarginBottom = "0.5rem",
  descriptionMarginBottom = "1.125rem",
  tagsMarginBottom = "0",

  buttonIcon,
  buttonIconSize = 24,
  buttonIconColor = "#fff",
  buttonIconHoverColor = "#fff",
  buttonBackgroundColor = "#282828",
  buttonBackgroundHoverColor = "#484848",

  imageHoverZoom = 1.1,
  mirrored = false,

  titleAlignment = "left",
  descriptionAlignment = "left",
  tagsAlignment = "left",

  maxWidth = "100%",

  price,
  oldPrice,
  swapPriceOrder = false,
  priceTagTextColor = "#ffffff",
  oldPriceTextColor = "#c1c1c7",
  priceTagRounding = "5px",
  priceTagBackgroundColor = "rgba(0,0,0,0.7)",

  titleLineClamp,
  descriptionLineClamp,

  imageContainerHeight = "18.75rem",
  useAspectRatio = false,
  aspectRatio = "16/9",
  mediaNode,
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredTagIndex, setHoveredTagIndex] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isRTL = (text: string) =>
    /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text);

  // Mirror adjustments
  const effectiveTagsAlignment = mirrored
    ? tagsAlignment === "left"
      ? "right"
      : tagsAlignment === "right"
        ? "left"
        : tagsAlignment
    : tagsAlignment;
  const tagsToRender = mirrored ? [...tags].reverse() : tags;

  const showPriceFirst = mirrored ? !swapPriceOrder : swapPriceOrder;

  return (
    <div
      className="inflected-card"
      style={
        {
          "--card-rounding": \`\${cardRounding}px\`,
          maxWidth,
          "--parent-bg": parentBackgroundColor,
          direction:"ltr",
          transform: mirrored ? "scaleX(-1)" : "none",
        } as React.CSSProperties
      }
      onClick={() => onClick?.("card", id)}
      onMouseEnter={() => onHover?.("card", id, "enter")}
      onMouseLeave={() => onHover?.("card", id, "leave")}
    >
      <div
        className="inflected-cardInner"
        style={{
          aspectRatio: useAspectRatio ? aspectRatio : undefined,
          height: useAspectRatio ? undefined : imageContainerHeight,
        }}
      >
        <div className="inflected-box">
          {/* Image container */}
          <div
            className="inflected-imgBox"
            style={{
              borderRadius: cardRounding,
              aspectRatio: useAspectRatio ? aspectRatio : undefined,
              height: "100%",
            }}
            ref={imageRef}
            onMouseEnter={() => {
              setIsImageHovered(true);
              onHover?.("image", id, "enter");
            }}
            onMouseLeave={() => {
              setIsImageHovered(false);
              onHover?.("image", id, "leave");
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.("image", id);
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: isImageHovered ? \`scale(\${imageHoverZoom})\` : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              {mediaNode ? (
                mediaNode
              ) : (
                <Image
                  src={image || ""}
                  alt={title}
                  fill
                  style={{
                    objectFit: "cover",
                    transform: mirrored ? "scaleX(-1)" : "none",
                  }}
                />
              )}
            </div>

            {/* Price tag (part of image) */}
            {price && (
              <div
                className="inflected-priceTag"
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  backgroundColor: priceTagBackgroundColor,
                  padding: "9px 15px",
                  borderRadius: priceTagRounding,
                  fontSize: fontSizes.price || "1rem",
                  transform: mirrored ? "scaleX(-1)" : "none",
                }}
              >
                {showPriceFirst ? (
                  <>
                    <span style={{ fontWeight: "bold", color: priceTagTextColor }}>
                      {price}
                    </span>
                    {oldPrice && (
                      <span
                        style={{
                          marginLeft: 8,
                          fontWeight: "bold",
                          color: oldPriceTextColor,
                          textDecoration: "line-through",
                        }}
                      >
                        {oldPrice}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {oldPrice && (
                      <span
                        style={{
                          marginRight: 8,
                          fontWeight: "bold",
                          color: oldPriceTextColor,
                          textDecoration: "line-through",
                        }}
                      >
                        {oldPrice}
                      </span>
                    )}
                    <span style={{ fontWeight: "bold", color: priceTagTextColor }}>
                      {price}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Floating button */}
          <div
            className="inflected-icon"
            onMouseEnter={() => {
              setIsButtonHovered(true);
              onHover?.("button", id, "enter");
            }}
            onMouseLeave={() => {
              setIsButtonHovered(false);
              onHover?.("button", id, "leave");
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.("button", id);
            }}
          >
            <div
              className="inflected-iconBox"
              style={
                {
                  "--button-bg": buttonBackgroundColor,
                  "--button-hover-bg": buttonBackgroundHoverColor,
                } as React.CSSProperties
              }
            >
              {/* wrapper span to animate icon color */}
              <span
                className="inflected-iconInner"
                style={{ color: isButtonHovered ? buttonIconHoverColor : buttonIconColor }}
              >
                {React.cloneElement(buttonIcon, {
                  size: buttonIconSize,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="inflected-content"
        style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
      >
        <h3
          style={{
            fontSize: fontSizes.title,
            color: colors.title || "#f7f7ff",
            fontWeight: "bold",
            direction: isRTL(title) ? "rtl" : "ltr",
            textAlign: titleAlignment,
            marginTop: titleMarginTop,
            marginBottom: titleMarginBottom,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical" as any,
            overflow: "hidden",
            WebkitLineClamp: titleLineClamp,
          }}
          onMouseEnter={() => onHover?.("title", id, "enter")}
          onMouseLeave={() => onHover?.("title", id, "leave")}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.("title", id);
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: fontSizes.description,
            color: colors.description || "#c7c7cf",
            direction: isRTL(description) ? "rtl" : "ltr",
            textAlign: descriptionAlignment,
            marginBottom: descriptionMarginBottom,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical" as any,
            overflow: "hidden",
            WebkitLineClamp: descriptionLineClamp,
          }}
          onMouseEnter={() => onHover?.("description", id, "enter")}
          onMouseLeave={() => onHover?.("description", id, "leave")}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.("description", id);
          }}
        >
          {description}
        </p>
        <ul
          style={{
            marginBottom: tagsMarginBottom,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            justifyContent: effectiveTagsAlignment,
          }}
        >
          {tagsToRender.map((tag, idx) => {
            const isHovered = hoveredTagIndex === idx;
            const hoverAmt =
              tag.tagHoverBrightness !== undefined ? tag.tagHoverBrightness : -0.2;
            const bg = isHovered
              ? adjustBrightness(tag.backgroundColor, hoverAmt)
              : tag.backgroundColor;
            return (
              <li
                key={idx}
                dir={tag.direction || "auto"}
                style={{
                  background: bg,
                  color: tag.textColor,
                  borderRadius: \`\${tag.rounding || 5}px\`,
                  fontWeight: 700,
                  fontSize: fontSizes.tags,
                  padding: "0.375rem 0.625rem",
                  cursor: "default",
                  transition: "all 0.25s ease-in-out",
                }}
                onMouseEnter={() => {
                  setHoveredTagIndex(idx);
                  onHover?.(\`tag-\${idx}\`, id, "enter");
                }}
                onMouseLeave={() => {
                  setHoveredTagIndex(null);
                  onHover?.(\`tag-\${idx}\`, id, "leave");
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(\`tag-\${idx}\`, id);
                }}
              >
                {tag.name}
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{\`
        .inflected-card {
          position: relative;
          border-radius: var(--card-rounding);
          overflow: hidden;
        }
        .inflected-cardInner {
          position: relative;
          width: 100%;
          background: var(--parent-bg);
          border-radius: var(--card-rounding);
          border-bottom-right-radius: 0;
          overflow: hidden;
        }
        .inflected-box {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .inflected-imgBox {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .inflected-icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--parent-bg);
          border-top-left-radius: 50%;
        }
        .inflected-icon::before,
        .inflected-icon::after {
          position: absolute;
          content: "";
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-icon::before {
          bottom: 0.375rem;
          left: -1.25rem;
        }
        .inflected-icon::after {
          top: -1.25rem;
          right: 0.375rem;
        }
        .inflected-iconBox {
          position: absolute;
          inset: 0.625rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          background-color: var(--button-bg);
        }
        .inflected-iconBox:hover {
          background: var(--button-hover-bg);
          transform: scale(1.1);
        }
        .inflected-iconInner {
          display: flex;
          transition: color 0.3s ease;
        }
        .inflected-content {
          padding: 0.938rem 0.625rem;
        }
        .inflected-content ul {
          list-style: none;
          padding: 0;
        }
      \`}</style>
    </div>
  );
};

export default InflectedCard;
`,
    props: [
      { name: 'id', type: 'string', description: 'inflected_card_prop_id', required: true },
      { name: 'image', type: 'string', description: 'inflected_card_prop_image', required: false },
      { name: 'title', type: 'string', description: 'inflected_card_prop_title', required: true },
      { name: 'description', type: 'string', description: 'inflected_card_prop_description', required: true },
      { name: 'tags', type: 'Tag[]', description: 'inflected_card_prop_tags', required: false },
      { name: 'parentBackgroundColor', type: 'string', description: 'inflected_card_prop_parentBackgroundColor', required: true },
      { name: 'onClick', type: '(target: string, id: string) => void', description: 'inflected_card_prop_onClick', required: false },
      { name: 'onHover', type: '(target: string, id: string, event: "enter"|"leave") => void', description: 'inflected_card_prop_onHover', required: false },
      { name: 'cardRounding', type: 'number', defaultValue: '20', description: 'inflected_card_prop_cardRounding', required: false },
      { name: 'fontSizes', type: '{ title?: string; description?: string; tags?: string; price?: string; }', description: 'inflected_card_prop_fontSizes', required: false },
      { name: 'colors', type: '{ title?: string; description?: string; }', description: 'inflected_card_prop_colors', required: false },
      { name: 'titleMarginTop', type: 'string', defaultValue: '"0"', description: 'inflected_card_prop_titleMarginTop', required: false },
      { name: 'titleMarginBottom', type: 'string', defaultValue: '"0.5rem"', description: 'inflected_card_prop_titleMarginBottom', required: false },
      { name: 'descriptionMarginBottom', type: 'string', defaultValue: '"1.125rem"', description: 'inflected_card_prop_descriptionMarginBottom', required: false },
      { name: 'tagsMarginBottom', type: 'string', defaultValue: '"0"', description: 'inflected_card_prop_tagsMarginBottom', required: false },
      { name: 'buttonIcon', type: 'React.ReactElement', description: 'inflected_card_prop_buttonIcon', required: true },
      { name: 'buttonIconSize', type: 'number', defaultValue: '24', description: 'inflected_card_prop_buttonIconSize', required: false },
      { name: 'buttonIconColor', type: 'string', defaultValue: '"#fff"', description: 'inflected_card_prop_buttonIconColor', required: false },
      { name: 'buttonIconHoverColor', type: 'string', defaultValue: '"#fff"', description: 'inflected_card_prop_buttonIconHoverColor', required: false },
      { name: 'buttonBackgroundColor', type: 'string', defaultValue: '"#282828"', description: 'inflected_card_prop_buttonBackgroundColor', required: false },
      { name: 'buttonBackgroundHoverColor', type: 'string', defaultValue: '"#484848"', description: 'inflected_card_prop_buttonBackgroundHoverColor', required: false },
      { name: 'imageHoverZoom', type: 'number', defaultValue: '1.1', description: 'inflected_card_prop_imageHoverZoom', required: false },
      { name: 'mirrored', type: 'boolean', defaultValue: 'false', description: 'inflected_card_prop_mirrored', required: false },
      { name: 'titleAlignment', type: '"left"|"center"|"right"', defaultValue: '"left"', description: 'inflected_card_prop_titleAlignment', required: false },
      { name: 'descriptionAlignment', type: '"left"|"center"|"right"', defaultValue: '"left"', description: 'inflected_card_prop_descriptionAlignment', required: false },
      { name: 'tagsAlignment', type: '"left"|"center"|"right"', defaultValue: '"left"', description: 'inflected_card_prop_tagsAlignment', required: false },
      { name: 'maxWidth', type: 'string', defaultValue: '"100%"', description: 'inflected_card_prop_maxWidth', required: false },
      { name: 'price', type: 'string', description: 'inflected_card_prop_price', required: false },
      { name: 'oldPrice', type: 'string', description: 'inflected_card_prop_oldPrice', required: false },
      { name: 'swapPriceOrder', type: 'boolean', defaultValue: 'false', description: 'inflected_card_prop_swapPriceOrder', required: false },
      { name: 'priceTagTextColor', type: 'string', defaultValue: '"#ffffff"', description: 'inflected_card_prop_priceTagTextColor', required: false },
      { name: 'oldPriceTextColor', type: 'string', defaultValue: '"#c1c1c7"', description: 'inflected_card_prop_oldPriceTextColor', required: false },
      { name: 'priceTagRounding', type: 'string', defaultValue: '"5px"', description: 'inflected_card_prop_priceTagRounding', required: false },
      { name: 'priceTagBackgroundColor', type: 'string', defaultValue: '"rgba(0,0,0,0.7)"', description: 'inflected_card_prop_priceTagBackgroundColor', required: false },
      { name: 'titleLineClamp', type: 'number', description: 'inflected_card_prop_titleLineClamp', required: false },
      { name: 'descriptionLineClamp', type: 'number', description: 'inflected_card_prop_descriptionLineClamp', required: false },
      { name: 'imageContainerHeight', type: 'string', defaultValue: '"18.75rem"', description: 'inflected_card_prop_imageContainerHeight', required: false },
      { name: 'useAspectRatio', type: 'boolean', defaultValue: 'false', description: 'inflected_card_prop_useAspectRatio', required: false },
      { name: 'aspectRatio', type: 'string', defaultValue: '"16/9"', description: 'inflected_card_prop_aspectRatio', required: false },
      { name: 'mediaNode', type: 'React.ReactNode', description: 'inflected_card_prop_mediaNode', required: false }
    ],
    isPreviewImage: true,
  },
  {
    id: "splashed-push-notifications",
    title: "splashed_push_notifications_title",
    description: "splashed_push_notifications_desc",
    demoFullPage: SplashedPushNotificationsFullPageDemo,
    noPadding: true,
    credit: `[Splashed Toast Notifications - CSS](https://codepen.io/josetxu/pen/OJGXdzY) by [Josetxu](https://codepen.io/josetxu/pen/OJGXdzY)

[Push Notifications](https://codepen.io/FlorinPop17/pen/xxORmaB) by [Florin Pop](https://codepen.io/FlorinPop17)`,
    usage: `// Path to the "SplashedPushNotifications.tsx" file

import { SplashedPushNotifications, SplashedPushNotificationsHandle } from "@/app/the-actual-components/splashed-push-notifications/SplashedPushNotifications"
import React, { useRef } from "react";

const baseButton =
  "w-[172px] px-5 py-3 rounded-[5px] font-bold text-[1.1rem] mx-[2] my-1 " +
  "transition-colors duration-300 outline-none border-none text-white";

export default function SplashedPushNotificationsFullPageDemo() {
  const toastRef = useRef<SplashedPushNotificationsHandle>(null);

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden scrollbar-hide p-4 gap-2 box-border">
      <div>
        {/* English Buttons (LTR) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-1">
          <button
            className={\`\${baseButton} bg-[#0070E0] hover:bg-[#05478A]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "help",
                "James Matthew Barrie",
                "Would you like an adventure now, or would you like to have your tea first?"
              )
            }
          >
            Help (LTR)
          </button>
          <button
            className={\`\${baseButton} bg-[#03A65A] hover:bg-[#005E38]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "success",
                "Anaïs Nin",
                "We don't see things as they are, we see them as we are."
              )
            }
          >
            Success (LTR)
          </button>
          <button
            className={\`\${baseButton} bg-[#FC8621] hover:bg-[#C24914]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "warning",
                "Oscar Wilde",
                "There are only two tragedies in life: One is not getting what one wants, and the other is getting it."
              )
            }
          >
            Warning (LTR)
          </button>
          <button
            className={\`\${baseButton} bg-[#DB3056] hover:bg-[#851D41]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "error",
                "Lao Tzu",
                "When I let go of what I am, I become what I might be."
              )
            }
          >
            Error (LTR)
          </button>
        </div>

        {/* Hebrew Buttons (RTL) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-1">
          <button
            className={\`\${baseButton} bg-[#0070E0] hover:bg-[#05478A]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "help",
                "ג'יימס מתיו בארי",
                'האם תרצי את ההרפתקה שלך עכשיו, או שמא נשתה תה לפני כן?'
              )
            }
          >
            Help (RTL)
          </button>
          <button
            className={\`\${baseButton} bg-[#03A65A] hover:bg-[#005E38]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "success",
                "אנאיס נין",
                'אנחנו לא רואים את הדברים כפי שהם, אנחנו רואים אותם כפי שאנחנו.'
              )
            }
          >
            Success (RTL)
          </button>
          <button
            className={\`\${baseButton} bg-[#FC8621] hover:bg-[#C24914]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "warning",
                "אוסקר ויילד",
                'יש רק שתי טרגדיות בעולם הזה. האחת היא לא לקבל את מה שרוצים והשנייה היא לקבל.'
              )
            }
          >
            Warning (RTL)
          </button>
          <button
            className={\`\${baseButton} bg-[#DB3056] hover:bg-[#851D41]\`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "error",
                "לאו צה",
                'כשאני מרפה ממי שאני, אני הופך למה שאפשרי עבורי להיות.'
              )
            }
          >
            Error (RTL)
          </button>
        </div>

        <SplashedPushNotifications
          ref={toastRef}
        />
      </div>
    </div>
  );
}
`,
    code: `"use client"

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
  success: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>\`,
  help: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-question-icon lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>\`,
  warning: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>\`,
  error: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-x-icon lucide-shield-x"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m14.5 9.5-5 5"/><path d="m9.5 9.5 5 5"/></svg>\`,
};

const CLOSE_SVG = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>\`;

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
      style.innerHTML = \`
        .wrapper { margin: 0; padding: 0; width: 100vw; height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .buttonContainer { display: flex; }
        .buttonContainer button { background-color: #fff; font-weight: bold; color: #1d2232; cursor: pointer; font-family: inherit; padding: 1rem; border-radius: 5px; border: 3px solid #fff; margin:14px; }
        .buttonContainer button:hover { transform: scale(1.05); border: 3px solid #007fff; }
        .notificationContainer { display: flex; flex-direction: column; align-items: flex-end; position: fixed; bottom: \${lowestContainerBottomMarginAdjustment}; left: auto; right: 0; max-width: \${maxWidth}; z-index: 2000; }
        .rtlNotifications{ left: 0; right: auto; transform: scale(-1, 1); }
        .toast { color: #f5f5f5; padding: 1rem 2rem 1.5rem 6rem; text-align: left; position: relative; font-weight: inherit; margin: \${verticalGap} \${horizontalMargin}; opacity: 1; overflow: visible; border-radius: \${bodyBorderRadius}; }
        .timer { position: absolute; bottom: 0; left: 10%; right: 10%; width: 80%; height: 4px; background: var(--splashed-toast-timer-bg, rgba(255,255,255,0.3)); border-radius: 2px; overflow: hidden; }
        .timerLeft, .timerRight { position: absolute; top: 0; height: 100%; left: 0; background-color: var(--splashed-toast-timer, rgba(255,255,255,0.8)); }
        .toast:before { content: ""; position: absolute; width: 5.5rem; height: 6rem; --drop: radial-gradient( circle at 64% 51%, var(--clr) 0.45rem, #fff0 calc(0.45rem + 1px) ), radial-gradient( circle at 100% 100%, #fff0 0.9rem, var(--clr) calc(0.9rem + 1px) 1.25rem, #fff0 calc(1.25rem + 1px) 100% ), radial-gradient( circle at 0% 0%, #fff0 0.9rem, var(--clr) calc(0.9rem + 1px) 1.25rem, #fff0 calc(1.25rem + 1px) 100% ), radial-gradient(circle at 0% 120%, var(--clr) 4rem, #fff0 calc(4rem + 1px)); background: radial-gradient( circle at 22% 3.8rem, var(--clr) 0.75rem, #fff0 calc(0.75rem + 1px) ), radial-gradient( circle at 95% 1.9rem, var(--clr) 0.07rem, #fff0 calc(0.07rem + 1px) ), radial-gradient( circle at 80% 2.25rem, var(--clr) 0.18rem, #fff0 calc(0.18rem + 1px) ), radial-gradient( circle at 80% 75%, var(--clr) 0.35rem, #fff0 calc(0.35rem + 1px) ), radial-gradient( circle at 43% 2.3rem, var(--clr) 0.07rem, #fff0 calc(0.07rem + 1px) ), radial-gradient( circle at 40% 1rem, var(--clr) 0.12rem, #fff0 calc(0.12rem + 1px) ), radial-gradient( circle at 20% 1.5rem, var(--clr) 0.25rem, #fff0 calc(0.25rem + 1px) ), var(--drop), #f000; background-repeat: no-repeat; background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 1.625rem 1.625rem, 1.625rem 1.625rem, 100% 100%, 100% 100%; background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, calc(100% - 1.75rem) 2.85rem, calc(100% - 1.75rem) 2.95rem, 0 0, 0 0; bottom: 0rem; left: 0rem; z-index: 0; border-radius: 1rem 0 0 \${bodyBorderRadius}; }
        .toast:after { content: ""; position: absolute; width: 3.5rem; height: 3.5rem; background: var(--clr); top: -1.75rem; left: 2rem; border-radius: \${typeIconContainerBorderRadius}; padding-top: 0.2rem; display: flex; align-items: center; justify-content: center; font-size: 2.25rem; box-sizing: border-box; }
        .toast h3 { font-size: 1.35rem; margin: 0; line-height: 1.35rem; font-weight: inherit; position: relative; }
        .toast p { position: relative; font-size: 0.95rem; z-index: 1; margin: 0.25rem 0 0; font-weight: inherit; }
        .toast.help { --clr: #05478a; background: #0070e0; }
        .toast.success { --clr: #005e38; background: #03a65a; }
        .toast.warning { --clr: #c24914; background: #fc8621; }
        .toast.error { --clr: #851d41; background: #db3056; }
        .timer-left, .timer-right { position: absolute; top: 0; height: 100%; width: 50%; background: var(--splashed-toast-timer, rgba(255,255,255,0.8)); border-radius: 2px; }
        .timer-left { left: 0; transform-origin: right; }
        .timer-right { right: 0; transform-origin: left; }
        .closeButton { position:absolute; top:0.4rem; right:0.4rem; height: 34px; width: 34px; cursor: pointer; border-radius: \${closeIconBorderRadius}; background: #fff; border: 0px solid #fff; transform: scale(0.7); color: #242424; font-size: 18px; display: flex; align-items: center; justify-content: center; padding: 0; }
        .toast .icon-center { position: absolute; width: 3.5rem; height: 3.5rem; top: -1.75rem; left: 2rem; display: flex; align-items: center; justify-content: center; z-index: 2; pointer-events: none; }
        @keyframes slideInWithBounce { 0% { transform: translateX(150%); opacity: 0; } 60% { transform: translateX(-12%); opacity: 1; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideOutWithBounce { 0% { transform: translateX(0); opacity: 1; } 40% { transform: translateX(-12%); opacity: 1; } 100% { transform: translateX(150%); opacity: 0; } }
      \`;
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
      stylesheet.innerHTML = \`
        @keyframes timerShrink-\${uniqueId} {
          from { width: 100%; }
          to { width: 0; }
        }
      \`;
      document.head.appendChild(stylesheet);
      timerLeft.style.animation = \`timerShrink-\${uniqueId} \${duration}ms linear forwards\`;
      timerRight.style.animation = \`timerShrink-\${uniqueId} \${duration}ms linear forwards\`;
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
`,
    props: [
      { name: 'maxWidth', type: 'string', defaultValue: '"436px"', description: 'splashed_push_notifications_prop_maxWidth', required: false },
      { name: 'bodyBorderRadius', type: 'string', defaultValue: '"8px"', description: 'splashed_push_notifications_prop_bodyBorderRadius', required: false },
      { name: 'typeIconContainerBorderRadius', type: 'string', defaultValue: '"50%"', description: 'splashed_push_notifications_prop_typeIconContainerBorderRadius', required: false },
      { name: 'closeIconBorderRadius', type: 'string', defaultValue: '"0.4rem"', description: 'splashed_push_notifications_prop_closeIconBorderRadius', required: false },
      { name: 'timerColor', type: 'string', defaultValue: '"rgba(255,255,255,0.8)"', description: 'splashed_push_notifications_prop_timerColor', required: false },
      { name: 'timerBgColor', type: 'string', defaultValue: '"rgba(255,255,255,0.3)"', description: 'splashed_push_notifications_prop_timerBgColor', required: false },
      { name: 'horizontalMargin', type: 'string', defaultValue: '"1.5rem"', description: 'splashed_push_notifications_prop_horizontalMargin', required: false },
      { name: 'verticalGap', type: 'string', defaultValue: '"1.5rem"', description: 'splashed_push_notifications_prop_verticalGap', required: false },
      { name: 'lowestContainerBottomMarginAdjustment', type: 'string', defaultValue: '"-0.25rem"', description: 'splashed_push_notifications_prop_lowestContainerBottomMarginAdjustment', required: false },
      { name: 'customIcons', type: 'Partial<Record<NotificationType, string>>', description: 'splashed_push_notifications_prop_customIcons', required: false }
    ],
    isPreviewImage: true,
  },
  {
    id: "fishy-button",
    title: "fishy_button_title",
    description: "fishy_button_desc",
    demo: FishyButtonPreviewDemo,
    demoFullPage: FishyButtonFullPageDemo,
    noPadding: true,
    credit: `[深海なボタン](https://codepen.io/ash_creator/pen/GRGZYyV) by [あしざわ - Webクリエイター](https://codepen.io/ash_creator)`,
    usage: `// Path to the "FishyButton.tsx" file

import { FishyButton } from "@/app/the-actual-components/fishy-button/FishyButton";

export default function DemoFishyButton() {
  return (
    <div className="flex flex-col gap-12 w-full p-8 items-center justify-center">
      
      {/* 1st row — Basic buttons */}
      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <FishyButton
          type="button"
          className="button--1"
          onClick={() => console.log("The first button has been clicked")}
        >
          Ekhad
        </FishyButton>

        <FishyButton
          type="button"
          className="button--2"
          borderRadius="4px"
          fishSpeed="1.9s"
          onClick={() => console.log("The second button has been clicked")}
        >
          Two
        </FishyButton>

        <FishyButton
          type="button"
          className="button--3"
          onClick={() => console.log("The third button has been clicked")}
        >
          שלוש
        </FishyButton>
      </div>

      {/* 2nd row — Font customization */}
      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <FishyButton
          type="button"
          className="button--1"
          fontFamily="'Roboto Mono', monospace"
          borderRadius="40px"
          width="272px"
          onClick={() => console.log("Roboto Mono button clicked")}
        >
          Roboto Mono
        </FishyButton>

        <FishyButton
          type="button"
          className="button--2"
          fontFamily="'Impact', fantasy, sans-serif"
          borderRadius="10px"
          width="272px"
          onClick={() => console.log("Impact Bold button clicked")}
        >
          Impact Bold
        </FishyButton>
      </div>

      {/* 3rd row — Special demo */}
      <div className="flex justify-center w-full">
        <FishyButton
          type="button"
          className="button--3"
          width="216px"
          fishSpeed="6s"
          fontFamily="'Griffy', cursive"
          borderRadius="50px"
          onClick={() => console.log("Slow fish clicked")}
        >
          Slow Fish
        </FishyButton>
      </div>
    </div>
  );
}
`,
    code: `"use client";
import React, { useMemo } from "react";

interface FishyButtonProps {
  children: React.ReactNode;
  isDelete?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  fontFamily?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  fishSpeed?: string;
}

function getRandomId() {
  return Math.random().toString(36).substring(2, 8);
}

export const FishyButton: React.FC<FishyButtonProps> = ({
  children,
  isDelete = false,
  onClick,
  type = "button",
  className = "",
  fontFamily,
  borderRadius = "20px",
  width = "140px",
  height = "53px",
  fishSpeed = "2.3s",
}) => {
  // Generate a unique class for fish speed
  const fishSpeedClass = useMemo(() => \`fish-speed-\${getRandomId()}\`, []);

  // Inline style for font family, border radius, width, and height
  const buttonStyle: React.CSSProperties = {
    fontFamily: fontFamily ? fontFamily : undefined,
    borderRadius: borderRadius,
    width: width,
    height: height,
  };

  return (
    <button
      type={type}
      className={\`button \${isDelete ? "deleteButton" : ""} \${className} \${fishSpeedClass}\`}
      onClick={onClick}
      style={buttonStyle}
    >
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="fish"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <span className="button__text" style={{ fontFamily: fontFamily ? fontFamily : undefined }}>
        {children}
      </span>
      {/* Dynamic fish speed style */}
      <style>{\`
.\${fishSpeedClass}:hover .fish {
  animation: fish ease \${fishSpeed} forwards;
  opacity: 1;
}
\`}</style>
      {/* Main style */}
      <style>{\`
.button--1 {
  --color_1: #365fa8;
  --color_2: #4a76c5;
  --color_3: #5f8ce2;
  --color_4: #73a3ff;
  --color_5: #21488b;
  --color_6: #132a52;
}
.button--2 {
  --color_1: #0092a0;
  --color_2: #00afb4;
  --color_3: #00cbc9;
  --color_4: #00e7de;
  --color_5: #00768b;
  --color_6: #004c59;
}
.button--3 {
  --color_1: #1b70a1;
  --color_2: #368cc1;
  --color_3: #50a8e0;
  --color_4: #6bc4ff;
  --color_5: #005482;
  --color_6: #003654;
}
.button {
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: \${width};
  height: \${height};
  border-radius: \${borderRadius};
  text-decoration: none;
  overflow: hidden;
  background: var(--color_5);
  box-shadow: 0 0 12px rgba(0,0,0,.45), 0 0 8px rgba(0,0,0,.25) inset;
  transition: all ease .7s;
  border: none;
  cursor: pointer;
  margin: 0 5px;
}
.button::before {
  content: '';
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,25,85,0) 60%, rgba(0,25,85,.4));
}
.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 3px rgba(10, 60, 90, 0.8));
}
.wave:nth-child(1) { z-index: 1; }
.wave:nth-child(2) { z-index: 2; }
.wave:nth-child(3) { z-index: 3; }
.wave:nth-child(4) { z-index: 5; }
.wave:nth-child(1)::before, .wave:nth-child(1)::after {
  content: '';
  position: absolute;
  width: 120px;
  height: 65px;
  background: var(--color_1);
  clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z');
  animation: encrypted-space-wave_1 linear 3s infinite alternate;
}
.wave:nth-child(1)::before, .wave:nth-child(2)::before, .wave:nth-child(3)::before, .wave:nth-child(4)::before {
  transform: rotate(180deg);
  transition: all ease 4.4s;
}
.wave:nth-child(1)::after, .wave:nth-child(2)::after, .wave:nth-child(3)::after, .wave:nth-child(4)::after {
  transition: all ease 4.4s;
}
.wave:nth-child(1)::before { top: -16px; left: -16px; }
.wave:nth-child(2)::before { top: -20px; left: -20px; }
.wave:nth-child(3)::before { top: -20px; left: -20px; }
.wave:nth-child(4)::before { top: -20px; left: -20px; }
.wave:nth-child(1)::after { bottom: -16px; right: -16px; }
.wave:nth-child(2)::after { bottom: -20px; right: -20px; }
.wave:nth-child(3)::after { bottom: -20px; right: -20px; }
.wave:nth-child(4)::after { bottom: -20px; right: -20px; }
.wave:nth-child(2)::before, .wave:nth-child(2)::after {
  content: '';
  position: absolute;
  width: 139px;
  height: 61px;
  background: var(--color_2);
  clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z');
  animation: encrypted-space-wave_2 linear 3s infinite alternate;
}
.wave:nth-child(3)::before, .wave:nth-child(3)::after {
  content: '';
  position: absolute;
  width: 134px;
  height: 56px;
  background: var(--color_3);
  clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z');
  animation: encrypted-space-wave_3 linear 3s infinite alternate;
}
.wave:nth-child(4)::before, .wave:nth-child(4)::after {
  content: '';
  position: absolute;
  width: 129px;
  height: 47px;
  background: var(--color_4);
  clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z');
  animation: encrypted-space-wave_4 linear 3s infinite alternate;
}
.button__text {
  position: relative;
  z-index: 7;
  display: inline-block;
  font-size: 18px;
  letter-spacing: 8px;
  color: #fff;
  transition: all ease 1s;
  font-family: \${fontFamily ? fontFamily : "'Griffy', cursive"};
}
.button:hover {
  background: var(--color_6);
  box-shadow: 0 0 12px rgba(0,0,0,0), 0 0 12px rgba(0,0,0,.4) inset;
}
.button:hover .wave {
  animation: shadow ease 1s;
  animation-fill-mode: forwards;
}
.button:hover .button__text {
  letter-spacing: 9px;
  font-size: 19px;
}
.button:hover .wave:nth-child(1)::before { top: -2px; left: -2px; }
.button:hover .wave:nth-child(1)::after { bottom: -2px; right: -2px; }
.button:hover .wave:nth-child(2)::before { top: -2px; left: -2px; }
.button:hover .wave:nth-child(2)::after { bottom: -2px; right: -2px; }
.button:hover .wave:nth-child(3)::before { top: -3px; left: -3px; }
.button:hover .wave:nth-child(3)::after { bottom: -3px; right: -3px; }
.button:hover .wave:nth-child(4)::before { top: -4px; left: -4px; }
.button:hover .wave:nth-child(4)::after { bottom: -4px; right: -4px; }
.fish {
  position: absolute;
  z-index: 4;
  top: -80px;
  right: -20px;
  width: 52px;
  height: 78px;
  clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  background: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
}
@keyframes fish {
  0% {
      top: -80px;
      right: -20px;
      transform: rotate(0);
      clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    10% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    20% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    30% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    40% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    50% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    60% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    70% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    80% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    90% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    100%{
        top : 100px ;
        right : 80px ;
        transform : rotate(40deg) ;
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') ;
    }
}
.button .bubble {
  position: absolute;
  z-index: 7;
  top: 0;
  width: 30px;
  height: 80px;
}
.button .bubble::before, .button .bubble::after {
  content: '';
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0);
}
.button .bubble:nth-child(6) { left: 16px; }
.button .bubble:nth-child(7) { left: 48px; }
.button .bubble:nth-child(8) { right: 16px; }
.button .bubble:nth-child(9) { right: 48px; }
.button .bubble:nth-child(6)::before { width: 16px; height: 16px; left: 0; bottom: -60px; transition: all ease 3.7s; }
.button .bubble:nth-child(6)::after { width: 8px; height: 8px; right: 4px; bottom: -10px; transition: all ease 3.4s; }
.button .bubble:nth-child(7)::before { width: 10px; height: 10px; left: 0; bottom: -25px; transition: all ease 3.5s; }
.button .bubble:nth-child(7)::after { width: 14px; height: 14px; right: 0; bottom: -50px; transition: all ease 3.3s; }
.button .bubble:nth-child(8)::before { width: 16px; height: 16px; left: 0; bottom: -30px; transition: all ease 3.5s; }
.button .bubble:nth-child(8)::after { width: 8px; height: 8px; right: 4px; bottom: -70px; transition: all ease 3.3s; }
.button .bubble:nth-child(9)::before { width: 10px; height: 10px; left: 0; bottom: -40px; transition: all ease 3.6s; }
.button .bubble:nth-child(9)::after { width: 14px; height: 14px; right: 0; bottom: -15px; transition: all ease 3.7s; }
@keyframes shadow {
  0% { filter: drop-shadow(0 0 1.5px rgba(10, 60, 90, 0.4)); }
  100% { filter: drop-shadow(0 0 10px rgba(10, 60, 90, 0.35)); }
}
@keyframes encrypted-space-wave_1 {
  0% { clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z'); }
  100% { clip-path: path('M140.44,0c-17.21,3.05-17.35,17.42-35.08,14.77-16.69-2.49-23.72-6.62-50.13,7.7-13.98,6.99-26.83-2.07-39.76,8.45C4.54,39.98,3.29,48.5,0,62.64H140.44V0Z'); }
}
@keyframes encrypted-space-wave_2 {
  0% { clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z'); }
  100% { clip-path: path('M137.15,0c-17.21,10.16-17.24,10.78-37.72,9.6-14.61-.84-20.23,16.56-38.49,12.08-14.89-3.65-18.21,9.53-31.75,6.88C10.69,24.95,3.74,44.71,0,59.6H137.15V0Z'); }
}
@keyframes encrypted-space-wave_3 {
  0% { clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z'); }
  100% { clip-path: path('M132.53,0c-3.02,8.29-13.7,3.05-21.15,10.78-6.52,6.76-10.8,3.72-29.64,3.97-9.93,.13-15.11,7.85-26.94,9.14-10.81,1.18-15.58-4.27-28.13-1.99C8.04,25.29-.82,50.3,.06,54.49H132.53V0Z'); }
}
@keyframes encrypted-space-wave_4 {
  0% { clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z'); }
  100% { clip-path: path('M128.53,0c-13.22,12-19.04,5.96-27.62,4.3-12.9-2.5-14.51,2.69-29.7,10.84-8.75,4.7-15.33,2.81-28.21-.3-15.44-3.72-19.2,7.95-29.03,11.04C4.72,28.8,.76,37.83,0,43.72H128.53V0Z'); }
}
      \`}</style>
    </button>
  );
};
`,
    props: [
      { name: 'children', type: 'React.ReactNode', description: 'fishy_button_prop_children', required: true },
      { name: 'onClick', type: '() => void', description: 'fishy_button_prop_onClick', required: false },
      { name: 'type', type: '"button" | "submit" | "reset"', defaultValue: '"button"', description: 'fishy_button_prop_type', required: false },
      { name: 'className', type: 'string', defaultValue: '""', description: 'fishy_button_prop_className', required: false },
      { name: 'fontFamily', type: 'string', description: 'fishy_button_prop_fontFamily', required: false },
      { name: 'borderRadius', type: 'string', defaultValue: '"20px"', description: 'fishy_button_prop_borderRadius', required: false },
      { name: 'width', type: 'string', defaultValue: '"140px"', description: 'fishy_button_prop_width', required: false },
      { name: 'height', type: 'string', defaultValue: '"53px"', description: 'fishy_button_prop_height', required: false },
      { name: 'fishSpeed', type: 'string', defaultValue: '"2.3s"', description: 'fishy_button_prop_fishSpeed', required: false },
    ],
  },
  {
    id: "fishy-file-drop",
    title: "fishy_file_drop_title",
    description: "fishy_file_drop_desc",
    demoFullPage: FishyFileDropFullPageDemo,
    noPadding: true,
    dependencies: "npm install framer-motion",
    credit: `[深海なボタン](https://codepen.io/ash_creator/pen/GRGZYyV) by [あしざわ - Webクリエイター](https://codepen.io/ash_creator)
[Text scroll and hover effect with GSAP and clip](https://codepen.io/Juxtopposed/pen/mdQaNbG) by [Juxtopposed](https://codepen.io/Juxtopposed)
[Vercel app border hover effect](https://codepen.io/Juxtopposed/pen/xxQNozB) by [Juxtopposed](https://codepen.io/Juxtopposed)
Photo by [KATRIN BOLOVTSOVA](https://www.pexels.com/@ekaterina-bolovtsova/) from [Pexels](https://www.pexels.com/photo/different-sizes-of-christmas-tree-shaped-and-star-shaped-gingerbread-cookies-on-white-background-5702703/)
`,
    usage: `// Path to the "FishyFileDrop.tsx" file
import { FishyFileDrop } from "@/app/the-actual-components/fishy-file-drop/FishyFileDrop";

export default function MyPage() {
  const handleFilesSelected = (files: FileList | File[]) => {
    // Normalize to File[] for easier processing if needed
    const fileArray: File[] = Array.isArray(files)
      ? files
      : Array.from(files);

    console.log("Files selected:", fileArray);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="mt-4 text-sm text-[#aaa] flex flex-col items-center text-center max-w-md">
        <span>Check the console for the file handler callback.</span>
      </div>
      <div className="gap-10 flex items-center justify-center flex-wrap">
        {/* Dark Version Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "324px",
            width: "324px",
            background: "#161616",
            borderRadius: "22px",
          }}
        >
          <FishyFileDrop
            id="ffd-dark-version"
            width="324px"
            height="324px"
            padding="14px"
            backgroundImageWidth="96px"
            backgroundImage="https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png"
            backgroundRepeat="repeat"
            borderWidth="2px"
            borderColor="#363636"
            borderRadius="20px"
            shadow="0 2px 15px rgba(255, 255, 255, 0.1)"
            innerBorderRadius="10px"
            fishColor="white"
            waveColors={["#1b70a1", "#368cc1", "#50a8e0", "#6bc4ff"]}
            bubbleColor="rgba(255,255,255,0.8)"
            textColor="#fff"
            textStroke="#6BC4FF"
            textSize="24px"
            letterSpacingHover="10px"
            text="Add files"
            onFilesSelected={handleFilesSelected}
          />
        </div>

        {/* Light Version Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "324px",
            width: "324px",
            background: \`
              repeating-conic-gradient(
                #eee 0deg 90deg,
                #fff 90deg 180deg
              )
              0 0 / 36px 36px,
              #f0f0f0
            \`,
            borderRadius: "10px",
          }}
        >
          <FishyFileDrop
            id="ffd-light-version"
            width="324px"
            height="324px"
            padding="16px"
            backgroundImageWidth="94px"
            backgroundImage="https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png"
            backgroundRepeat="repeat"
            borderWidth="2px"
            borderColor="#0092a0"
            borderRadius="8px"
            shadow="0 2px 15px rgba(255, 255, 255, 0.1), 0 2px 18px #0092a0, 0 3px 12px #00cbc9"
            innerBorderRadius="6px"
            waveColors={["#0092a0", "#00afb4", "#00cbc9", "#00e7de"]}
            bubbleColor="rgba(0,0,0,0.5)"
            textColor="#182226"
            textStroke="#fff"
            textEffectColor="#00e7de"
            textSize="33px"
            textHoverSize="39px"
            letterSpacing="4px"
            letterSpacingHover="9px"
            text="רחף עליי"
            fishColor="#151419"
            fontFamily="'Varela Round', sans-serif"
            onFilesSelected={handleFilesSelected}
          />
        </div>
      </div>

      {/* Note below main container */}
      <div className="mt-4 text-sm text-[#aaa] flex flex-col items-center text-center max-w-md">
        <span>Only one instance is meant to be used at a time.</span>
        <span className="mt-1">Using multiple instances simultaneously</span>
        <span className="mt-1">may lead to unexpected behavior or errors.</span>
      </div>
    </div>
  );
}
`,
    code: `"use client";
import React, { useState, useRef, useCallback, CSSProperties } from "react";
import { motion, MotionStyle } from "framer-motion";

interface FishyFileDropProps {
  id: string;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundImageWidth?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  innerBorderRadius?: string;
  waveColors?: string[];
  bubbleColor?: string;
  textColor?: string;
  textStroke?: string;
  textEffectColor?: string;
  textSize?: string;
  textHoverSize?: string;
  letterSpacing?: string;
  letterSpacingHover?: string;
  text?: string;
  fishColor?: string;
  fishSpeed?: number;
  fontFamily?: string;
  onFilesSelected: (files: FileList | File[]) => void; // Accept FileList or array of Files
}

const FishyFileDrop: React.FC<FishyFileDropProps> = ({
  id,
  width = "300px",
  height = "300px",
  padding = "40px",
  backgroundColor = "transparent",
  backgroundImage =
    "https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png",
  backgroundRepeat = "repeat",
  backgroundImageWidth = "90px",
  borderWidth = "2px",
  borderColor = "#888",
  borderRadius = "20px",
  shadow = "0 2px 15px rgba(255, 255, 255, 0.1)",
  innerBorderRadius = "10px",
  waveColors = ["#1b70a1", "#368cc1", "#50a8e0", "#6bc4ff"],
  bubbleColor = "rgba(255,255,255,0.8)",
  textColor = "#fff",
  textStroke = "#6BC4FF",
  textEffectColor = "#6BC4FF",
  textSize = "22px",
  textHoverSize = "27px",
  letterSpacing = "4px",
  letterSpacingHover = "11px",
  text = "Add files",
  fishColor = "#fff",
  fishSpeed = 2.3,
  fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  onFilesSelected,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uniqueId = useRef(Math.random().toString(36).substring(2)).current;

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFilesSelected(e.dataTransfer.files);
      }
    },
    [onFilesSelected]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      onFilesSelected(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const waveAnimations = [
    {
      path:
        "M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z",
      color: waveColors[0],
      size: "140px 65px",
    },
    {
      path:
        "M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z",
      color: waveColors[1],
      size: "137px 60px",
    },
    {
      path:
        "M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z",
      color: waveColors[2],
      size: "132px 54px",
    },
    {
      path:
        "M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z",
      color: waveColors[3],
      size: "128px 44px",
    },
  ];

  const bubblePositions = [
    { left: "16px", bottom: "-60px", size: "16px" },
    { left: "16px", bottom: "-10px", size: "8px" },
    { left: "48px", bottom: "-25px", size: "10px" },
    { left: "48px", bottom: "-50px", size: "14px" },
    { right: "16px", bottom: "-30px", size: "16px" },
    { right: "16px", bottom: "-70px", size: "8px" },
    { right: "48px", bottom: "-40px", size: "10px" },
    { right: "48px", bottom: "-15px", size: "14px" },
  ];

  // Use React.CSSProperties for normal div style
  const containerStyle: CSSProperties = {
    width,
    height,
    padding,
    position: "relative" as "relative",
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    background: "transparent",
    border: \`\${borderWidth} solid \${borderColor}\`,
    borderRadius,
    boxShadow: shadow,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    overflow: "hidden",
    cursor: "pointer",
  };

  const borderGradientLayerStyle: CSSProperties = {
    position: "absolute" as "absolute",
    inset: 0,
    borderRadius: borderRadius,
    zIndex: -1,
  };

  const innerStyle: CSSProperties = {
    width: \`calc(100% - \${padding} * 2)\`,
    height: \`calc(100% - \${padding} * 2)\`,
    position: "absolute" as "absolute",
    top: padding,
    left: padding,
    borderRadius: innerBorderRadius,
    background: backgroundColor,
    backgroundImage: backgroundImage ? \`url(\${backgroundImage})\` : "none",
    backgroundRepeat,
    backgroundSize: \`\${backgroundImageWidth} auto\`,
    backgroundPosition: "center",
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    overflow: "hidden",
  };

  const buttonStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative" as "relative",
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  };

  const fishStyle: CSSProperties = {
    position: "absolute" as "absolute",
    zIndex: 4,
    width: "52px",
    height: "78px",
    background: fishColor,
    animation:
      isHovered || isDragActive
        ? \`\${uniqueId}-fish \${fishSpeed}s linear forwards\`
        : "none",
    opacity: isHovered || isDragActive ? 1 : 0,
    clipPath: "path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.10-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z')",
  };

  // Bubble style function with React.CSSProperties
  const bubbleStyle = (
    left?: string,
    right?: string,
    bottom?: string,
    size?: string
  ): CSSProperties => ({
    position: "absolute" as "absolute",
    zIndex: 7,
    width: size,
    height: size,
    left,
    right,
    bottom,
    background: bubbleColor,
    borderRadius: "50%",
  });

  // wave elements styles are normal CSSProperties
  const waveElements = waveAnimations.map((wave, i) => {
    const waveTopStyle: CSSProperties = {
      position: "absolute" as "absolute",
      top: "-20px",
      left: "-20px",
      width: wave.size.split(" ")[0],
      height: wave.size.split(" ")[1],
      background: wave.color,
      clipPath: \`path('\${wave.path}')\`,
      animation: \`\${uniqueId}-wave\${i} 3s linear infinite alternate\`,
      transform: "rotate(180deg)",
      zIndex: i + 1,
    };
    const waveBottomStyle: CSSProperties = {
      ...waveTopStyle,
      top: "auto",
      left: "auto",
      bottom: "-20px",
      right: "-20px",
      transform: "none",
    };
    return (
      <React.Fragment key={\`wave-\${i}\`}>
        <div style={waveTopStyle} />
        <div style={waveBottomStyle} />
      </React.Fragment>
    );
  });

  // bubbleColor can be a string or array
  const bubbleColorList = Array.isArray(bubbleColor)
    ? bubbleColor
    : Array(bubblePositions.length).fill(bubbleColor);

  // Framer Motion style typed as MotionStyle
  const bubbleElements = bubblePositions.map((bubble, i) => (
    <motion.div
      key={\`bubble-\${i}\`}
      style={bubbleStyle(bubble.left, bubble.right, bubble.bottom, bubble.size)}
      animate={{ y: [0, -100], opacity: [0, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeOut",
      }}
    />
  ));

  const textStyle: MotionStyle = {
    position: "relative" as "relative",
    display: "inline-block" as "inline-block",
    fontFamily: fontFamily,
    fontWeight: "bold",
    color: textColor,
    WebkitTextStroke: \`1px \${textStroke}\`,
    zIndex: 10,
    padding: "20px",
  };

  const textEffectStyle: MotionStyle = {
    position: "absolute" as "absolute",
    inset: "0",
    zIndex: -1,
    backgroundColor: textEffectColor || textStroke,
    borderRadius: "8px",
    clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
    transformOrigin: "center",
  };

  return (
    <div
      id={id}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
    >
      <div style={borderGradientLayerStyle} />
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <div style={innerStyle}>
        <motion.div
          style={{
            ...buttonStyle,
            background: isDragActive ? "rgba(255,255,255,0.1)" : "transparent",
          }}
          whileHover={{
            background: "rgba(255,255,255,0.1)",
            boxShadow: "0 0 24px rgba(0,0,0,0), 0 0 24px rgba(0,0,0,.8) inset",
          }}
        >
          {waveElements}
          <div style={fishStyle} />
          {bubbleElements}
          <motion.div
            style={{
              position: "relative" as "relative",
              display: "flex" as "flex",
              justifyContent: "center" as "center",
              alignItems: "center" as "center",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.span
              style={textStyle}
              animate={{
                fontSize: isHovered || isDragActive ? textHoverSize : textSize,
                letterSpacing:
                  isHovered || isDragActive ? letterSpacingHover : letterSpacing,
                WebkitTextStroke: \`1px \${textStroke}\`,
              }}
              transition={{ duration: 0.4, ease: [0.1, 0.5, 0.5, 1] }}
            >
              {text}
              <motion.span
                style={textEffectStyle}
                animate={{
                  clipPath:
                    isHovered || isDragActive
                      ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                      : "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
                }}
                transition={{ duration: 0.4, ease: [0.1, 0.5, 0.5, 1] }}
              />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      <style>{\`
      @keyframes \${uniqueId}-fish {
        0%   { top: -80px; right: -20px; transform: rotate(0); clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        10%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        20%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        30%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        40%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.3-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        50%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        60%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.3-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        70%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        80%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.3-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        90%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        100% { top: 100px; right: 80px; transform: rotate(40deg); clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.3-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
      }
        @keyframes \${uniqueId}-wave0 {
          0% { clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z'); }
          100% { clip-path: path('M140.44,0c-17.21,3.05-17.35,17.42-35.08,14.77-16.69-2.49-23.72-6.62-50.13,7.7-13.98,7.58-26.83-2.25-39.76,8.45C4.54,39.98,3.29,48.5,0,62.64H140.44V0Z'); }
        }
        @keyframes \${uniqueId}-wave1 {
          0% { clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z'); }
          100% { clip-path: path('M137.15,0c-17.21,10.16-17.24,10.78-37.72,9.6-14.61-.84-20.22,16.56-38.49,12.08-14.89-3.65-18.21,9.53-31.75,6.88C10.69,24.95,3.74,44.71,0,59.6H137.15V0Z'); }
        }
        @keyframes \${uniqueId}-wave2 {
          0% { clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z'); }
          100% { clip-path: path('M132.58,0c-3.02,8.29-13.7,3.05-21.15,10.78-6.52,6.76-10.8,3.72-29.64,3.97-9.93,.13-15.11,7.85-26.94,9.14-10.81,1.18-15.58-4.27-28.13,-1.99C8.04,25.29-.82,50.3,.06,54.49H132.58V0Z'); }
        }
        @keyframes \${uniqueId}-wave3 {
          0% { clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z'); }
          100% { clip-path: path('M128.53,0c-13.22,12-19.04,5.96-27.62,4.3-12.9-2.5-14.51,2.69-29.7,10.84-8.75,4.7-15.33,2.81-28.21-.3-15.44-3.72-19.2,7.95-29.03,11.04C4.72,28.8,.76,37.83,0,43.72H128.53V0Z'); }
        }
        
      \`}</style>
    </div>
  );
};

export { FishyFileDrop };
`,
    props: [
      { name: 'id', type: 'string', description: 'fishy_file_drop_prop_id', required: true },
      { name: 'width', type: 'string', defaultValue: '"300px"', description: 'fishy_file_drop_prop_width', required: false },
      { name: 'height', type: 'string', defaultValue: '"300px"', description: 'fishy_file_drop_prop_height', required: false },
      { name: 'padding', type: 'string', defaultValue: '"40px"', description: 'fishy_file_drop_prop_padding', required: false },
      { name: 'backgroundColor', type: 'string', defaultValue: '"transparent"', description: 'fishy_file_drop_prop_backgroundColor', required: false },
      { name: 'backgroundImage', type: 'string', defaultValue: 'URL string', description: 'fishy_file_drop_prop_backgroundImage', required: false },
      { name: 'backgroundRepeat', type: 'string', defaultValue: '"repeat"', description: 'fishy_file_drop_prop_backgroundRepeat', required: false },
      { name: 'backgroundImageWidth', type: 'string', defaultValue: '"90px"', description: 'fishy_file_drop_prop_backgroundImageWidth', required: false },
      { name: 'borderWidth', type: 'string', defaultValue: '"2px"', description: 'fishy_file_drop_prop_borderWidth', required: false },
      { name: 'borderColor', type: 'string', defaultValue: '"#888"', description: 'fishy_file_drop_prop_borderColor', required: false },
      { name: 'borderRadius', type: 'string', defaultValue: '"20px"', description: 'fishy_file_drop_prop_borderRadius', required: false },
      { name: 'shadow', type: 'string', defaultValue: '"0 2px 15px rgba(255, 255, 255, 0.1)"', description: 'fishy_file_drop_prop_shadow', required: false },
      { name: 'innerBorderRadius', type: 'string', defaultValue: '"10px"', description: 'fishy_file_drop_prop_innerBorderRadius', required: false },
      { name: 'waveColors', type: 'string[]', defaultValue: '["#1b70a1", "#368cc1", "#50a8e0", "#6bc4ff"]', description: 'fishy_file_drop_prop_waveColors', required: false },
      { name: 'bubbleColor', type: 'string', defaultValue: '"rgba(255,255,255,0.8)"', description: 'fishy_file_drop_prop_bubbleColor', required: false },
      { name: 'textColor', type: 'string', defaultValue: '"#fff"', description: 'fishy_file_drop_prop_textColor', required: false },
      { name: 'textStroke', type: 'string', defaultValue: '"#6BC4FF"', description: 'fishy_file_drop_prop_textStroke', required: false },
      { name: 'textEffectColor', type: 'string', defaultValue: '"#6BC4FF"', description: 'fishy_file_drop_prop_textEffectColor', required: false },
      { name: 'textSize', type: 'string', defaultValue: '"22px"', description: 'fishy_file_drop_prop_textSize', required: false },
      { name: 'textHoverSize', type: 'string', defaultValue: '"27px"', description: 'fishy_file_drop_prop_textHoverSize', required: false },
      { name: 'letterSpacing', type: 'string', defaultValue: '"4px"', description: 'fishy_file_drop_prop_letterSpacing', required: false },
      { name: 'letterSpacingHover', type: 'string', defaultValue: '"11px"', description: 'fishy_file_drop_prop_letterSpacingHover', required: false },
      { name: 'text', type: 'string', defaultValue: '"Add files"', description: 'fishy_file_drop_prop_text', required: false },
      { name: 'fishColor', type: 'string', defaultValue: '"#fff"', description: 'fishy_file_drop_prop_fishColor', required: false },
      { name: 'fishSpeed', type: 'number', defaultValue: '2.3', description: 'fishy_file_drop_prop_fishSpeed', required: false },
      { name: 'fontFamily', type: 'string', defaultValue: '"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace"', description: 'fishy_file_drop_prop_fontFamily', required: false },
      { name: 'onFilesSelected', type: '(files: FileList | File[]) => void', description: 'fishy_file_drop_prop_onFilesSelected', required: true },
    ],
    isPreviewImage: true,
  },
  {
    id: "wonderland-card",
    title: "wonderland_card_title",
    description: "wonderland_card_desc",
    demoFullPage: WonderlandCardFullPageDemo,
    noPadding: true,
    credit: `[Tranquiluxe](https://uvcanvas.com/docs/components/tranquiluxe) by [UVCanvas](https://uvcanvas.com/)`,
    usage: `// Path to the "WonderlandCard.tsx" file
import WonderlandCard from "@/app/the-actual-components/wonderland-card/WonderlandCard";

export default function WonderlandCardDemo() {
  return (
    <div
      id="wonderland-card-wrapper"
      className="flex flex-wrap gap-6 w-full p-9 items-center justify-center relative"
    >
      <WonderlandCard
        cardId="demo2"
        componentWidth="480px"
        aspectRatio="3/4"
        minTextSize={16}
        maxTextSize={28}
        manualLetterSpacing={1}
        imageSrc="https://raw.githubusercontent.com/Northstrix/wonderland-card/refs/heads/main/public/second-card-image.png"
        imageHeightPercentage={81}
        borderRadius="12px"
        borderRadiusHover="24px"
        borderRadiusActive="36px"
        inscriptionFontWeight={500}
        tranquiluxeProps={{
          color: [1, 0.47, 0.07], // vivid orange (#ff7812)
          speed: 0.7,
        }}
        tranquiluxePropsActive={{
          color: [0.27, 0.78, 1], // light blue (#45c7ff)
          speed: 1.2,
        }}
        backgroundColor="#0a0a0a"
        textColor="#fff"
        textColorHover="#0a0a0a"
        textColorActive="#fff"
        onClick={() => console.log("WonderlandCard clicked")}
        onHover={() => console.log("WonderlandCard hovered")}
        onRelease={() => console.log("WonderlandCard released")}
        onUnhover={() => console.log("WonderlandCard unhovered")}
      />
    </div>
  );
}
`,
    code: `"use client";
import React, { useRef, useEffect, useState } from "react";

/* ================================
    TRANQUILUXE (inline in same file)
    ================================ */
const vert = \`#version 300 es
precision highp float;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}\`;

const frag = \`#version 300 es
precision highp float;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
in vec2 vUv;
out vec4 fragColor;

float colormap_red(float x) {
  if (x < 0.0) { return 54.0 / 255.0; }
  else if (x < 20049.0 / 82979.0) { return (829.79 * x + 54.51) / 255.0; }
  else { return 1.0; }
}
float colormap_green(float x) {
  if (x < 20049.0 / 82979.0) { return 0.0; }
  else if (x < 327013.0 / 810990.0) {
    return (8546482679670.0 / 10875673217.0 * x -
            2064961390770.0 / 10875673217.0) / 255.0;
  } else if (x <= 1.0) {
    return (103806720.0 / 483977.0 * x +
            19607415.0 / 483977.0) / 255.0;
  } else { return 1.0; }
}
float colormap_blue(float x) {
  if (x < 0.0) { return 54.0 / 255.0; }
  else if (x < 7249.0 / 82979.0) { return (829.79 * x + 54.51) / 255.0; }
  else if (x < 20049.0 / 82979.0) { return 127.0 / 255.0; }
  else if (x < 327013.0 / 810990.0) {
    return (792.0224934136139 * x - 64.36479073560233) / 255.0;
  } else { return 1.0; }
}

vec4 colormap(float x) {
  return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
}

float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
float noise(vec2 p){
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u*u*(3.0-2.0*u);
  float res = mix( mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),
                    u.y);
  return res*res;
}

const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);
float fbm(vec2 p) {
  float f = 0.0;
  float time = uTime * .25;
  f += 0.500000*noise(p + time);
  p = mtx*p*2.02;
  f += 0.031250*noise(p);
  p = mtx*p*2.01;
  f += 0.250000*noise(p);
  p = mtx*p*2.03;
  f += 0.125000*noise(p);
  p = mtx*p*2.01;
  f += 0.062500*noise(p);
  p = mtx*p*2.04;
  f += 0.015625*noise(p + sin(time));
  return f/0.96875;
}
float pattern(vec2 p) { return fbm(p + fbm(p + fbm(p))); }

void main() {
  vec2 uv = vUv.xy * uResolution.xy / uResolution.x;
  float shade = pattern(uv);
  fragColor = vec4(colormap(shade).rgb * uColor, shade);
}\`;

class Triangle {
  gl: WebGL2RenderingContext;
  vao: WebGLVertexArrayObject | null = null;
  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
    const verts = new Float32Array([-1, -1, 3, -1, -1, 3]);
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const loc = 0;
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
  }
  draw() {
    this.gl.bindVertexArray(this.vao);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    this.gl.bindVertexArray(null);
  }
}
function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Could not create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || "Shader compile error");
  }
  return shader;
}
function createProgram(gl: WebGL2RenderingContext, vertSrc: string, fragSrc: string) {
  const vertShader = createShader(gl, gl.VERTEX_SHADER, vertSrc);
  const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  if (!program) throw new Error("Could not create program");
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  gl.bindAttribLocation(program, 0, "position");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "Program link error");
  }
  return program;
}

interface TranquiluxeProps {
  color?: [number, number, number];
  className?: string;
  style?: React.CSSProperties;
}

export const Tranquiluxe: React.FC<TranquiluxeProps> = ({
  color = [0, 0.6275, 0.8471],
  className,
  style,
}) => {
  const ctnDom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const canvas = document.createElement("canvas");
    ctn.appendChild(canvas);
    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    function resize() {
      canvas.width = ctn.offsetWidth;
      canvas.height = ctn.offsetHeight;
      if (!gl) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resize);
    resize();

    const triangle = new Triangle(gl);
    const program = createProgram(gl, vert, frag);
    gl.useProgram(program);

    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uColorLoc = gl.getUniformLocation(program, "uColor");
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");
    if (uColorLoc) gl.uniform3fv(uColorLoc, color);

    let running = true;
    function render(t: number) {
      if (!running) return;
      if (!gl) return;
      resize();
      gl.clearColor(1, 1, 1, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      if (uTimeLoc) gl.uniform1f(uTimeLoc, t * 0.001);
      if (uColorLoc) gl.uniform3fv(uColorLoc, color);
      if (uResolutionLoc)
        gl.uniform3f(
          uResolutionLoc,
          canvas.width,
          canvas.height,
          canvas.width / Math.max(1, canvas.height)
        );
      triangle.draw();
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      ctn.removeChild(canvas);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, [color]);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        ...style,
      }}
      ref={ctnDom}
    />
  );
};

/* ================================
    WONDERLAND CARD TYPE 2
    ================================ */

interface TranquiluxeConfig {
  color?: [number, number, number];
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

interface WonderlandCardProps {
  cardId?: string;
  textArray?: string | string[];
  fontSize?: number;
  letterSpacing?: string;
  manualLetterSpacing?: number;
  minTextSize?: number;
  maxTextSize?: number;
  minCardWidth?: number;
  maxCardWidth?: number;
  componentWidth?: string;
  aspectRatio?: string;
  outlineColor?: string;
  outlineHoverColor?: string;
  outlineActiveColor?: string;
  outlineWidth?: string;
  outlineWidthHover?: string;
  outlineWidthActive?: string;
  borderRadius?: string;
  borderRadiusHover?: string;
  borderRadiusActive?: string;
  backgroundColor?: string;
  textColor?: string;
  textColorHover?: string;
  textColorActive?: string;
  textPaddingTop?: string;
  textPaddingLeft?: string;
  imageSrc: string;
  imageAlt?: string;
  imageHeightPercentage?: number;
  onClick?: () => void;
  onHover?: () => void;
  onUnhover?: () => void;
  onRelease?: () => void;
  tranquiluxeProps?: TranquiluxeConfig;
  tranquiluxePropsActive?: TranquiluxeConfig;
  inscriptionFontWeight?: React.CSSProperties["fontWeight"];
  fillParent?: boolean; // NEW
}

const transitionEffect =
  "background-color 0.5s cubic-bezier(.45,.03,.52,1.01), " +
  "outline-color 0.5s, color 0.5s, border-radius 0.5s, outline-width 0.5s";

const WonderlandCard: React.FC<WonderlandCardProps> = ({
  cardId = "wonderland-card-type2",
  textArray = ["啟蒙"],
  fontSize,
  letterSpacing = "0.24em",
  manualLetterSpacing,
  minTextSize = 18,
  maxTextSize = 26,
  minCardWidth = 200,
  maxCardWidth = 400,
  componentWidth = "340px",
  aspectRatio = "3/4",
  outlineColor = "#777",
  outlineHoverColor = "#6b140f",
  outlineActiveColor = "#fff",
  outlineWidth = "3px",
  outlineWidthHover = "3px",
  outlineWidthActive = "3px",
  borderRadius = "16px",
  borderRadiusHover = "28px",
  borderRadiusActive = "38px",
  backgroundColor = "#0a0a0a",
  textColor = "#fff",
  textColorHover = "#fff",
  textColorActive = "#0a0a0a",
  textPaddingTop = "17px",
  textPaddingLeft = "19px",
  imageSrc,
  imageAlt = "",
  imageHeightPercentage = 71,
  onHover,
  onUnhover,
  onClick,
  onRelease,
  tranquiluxeProps = { color: [1, 0.47, 0.07], speed: 0.7 },
  tranquiluxePropsActive = { color: [0, 0.6275, 0.8471], speed: 1.2 },
  inscriptionFontWeight = 900,
  fillParent = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  const [computedFontSize, setFontSize] = useState<number>(maxTextSize);

  useEffect(() => {
    if (fontSize) {
      setFontSize(fontSize);
      return;
    }
    const update = () => {
      if (!cardRef.current) return;
      const width = cardRef.current.offsetWidth;
      const clamped = Math.max(minCardWidth, Math.min(width, maxCardWidth));
      const ratio = (clamped - minCardWidth) / (maxCardWidth - minCardWidth);
      setFontSize(minTextSize + ratio * (maxTextSize - minTextSize));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [fontSize, minTextSize, maxTextSize, minCardWidth, maxCardWidth]);

  const currentOutlineColor =
    isActive ? outlineActiveColor : isHovered ? outlineHoverColor : outlineColor;
  const currentOutlineWidth =
    isActive ? outlineWidthActive : isHovered ? outlineWidthHover : outlineWidth;
  const currentBorderRadius =
    isActive ? borderRadiusActive : isHovered ? borderRadiusHover : borderRadius;
  const currentTextColor =
    isActive ? textColorActive : isHovered ? textColorHover : textColor;
  const currentTranquiluxeProps =
    isActive && tranquiluxePropsActive ? tranquiluxePropsActive : tranquiluxeProps;

  const isVertical = Array.isArray(textArray);
  const verticalLines = isVertical ? textArray : [];
  const horizontalLine = !isVertical ? (textArray as string) : "";
  const verticalSpacing =
    manualLetterSpacing !== undefined
      ? manualLetterSpacing
      : computedFontSize * 0.18;

  return (
    <div
      ref={cardRef}
      data-card-id={cardId}
      style={{
        position: "relative",
        width: fillParent ? "100%" : "100%",
        height: fillParent ? "100%" : "auto",
        maxWidth: fillParent ? "100%" : componentWidth,
        aspectRatio: fillParent ? "auto" : aspectRatio,
        borderRadius: currentBorderRadius,
        outline: \`\${currentOutlineWidth} solid \${currentOutlineColor}\`,
        transition: transitionEffect,
        overflow: "hidden",
        backgroundColor,
        boxSizing: "border-box",
      }}
      onMouseEnter={() => {
        setHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
        onUnhover?.();
      }}
      onMouseDown={() => {
        setActive(true);
        onClick?.();
      }}
      onMouseUp={() => {
        setActive(false);
        onRelease?.();
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Tranquiluxe {...currentTranquiluxeProps} />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor,
          opacity: isHovered ? 0 : 1,
          pointerEvents: "none",
          transition: "opacity 0.7s cubic-bezier(.45,.03,.52,1.01)",
          zIndex: 1,
        }}
      />

      {/* Image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: \`\${imageHeightPercentage}%\`,
          width: "auto",
          aspectRatio: "1/1",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: currentBorderRadius,
            background: "none",
            border: "none",
            filter: "none",
            transition: "filter 0.45s cubic-bezier(.45,.03,.52,1.01)",
          }}
          draggable={false}
        />
      </div>

      {/* Text */}
      {isVertical ? (
        <>
          <div
            style={{
              position: "absolute",
              top: textPaddingTop,
              left: textPaddingLeft,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              fontSize: \`\${computedFontSize}px\`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              gap: \`\${verticalSpacing}px\`,
              letterSpacing,
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {verticalLines.map((line, idx) => (
              <div key={\`vt-\${idx}\`}>{line}</div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: textPaddingTop,
              right: textPaddingLeft,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              fontSize: \`\${computedFontSize}px\`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              gap: \`\${verticalSpacing}px\`,
              letterSpacing,
              transform: "rotate(180deg)",
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {verticalLines.map((line, idx) => (
              <div key={\`vb-\${idx}\`}>{line}</div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: textPaddingTop,
              left: 0,
              right: 0,
              zIndex: 10,
              textAlign: "center",
              fontSize: \`\${computedFontSize}px\`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              letterSpacing,
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {horizontalLine}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: textPaddingTop,
              left: 0,
              right: 0,
              zIndex: 10,
              textAlign: "center",
              fontSize: \`\${computedFontSize}px\`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              letterSpacing,
              transform: "rotate(180deg)",
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {horizontalLine}
          </div>
        </>
      )}
    </div>
  );
};

export default WonderlandCard;
`,
    props: [
      { name: 'cardId', type: 'string', defaultValue: '"wonderland-card-type2"', description: 'wonderland_card_prop_cardId', required: false },
      { name: 'textArray', type: 'string | string[]', defaultValue: '["啟蒙"]', description: 'wonderland_card_prop_textArray', required: false },
      { name: 'fontSize', type: 'number', description: 'wonderland_card_prop_fontSize', required: false },
      { name: 'letterSpacing', type: 'string', defaultValue: '"0.24em"', description: 'wonderland_card_prop_letterSpacing', required: false },
      { name: 'manualLetterSpacing', type: 'number', description: 'wonderland_card_prop_manualLetterSpacing', required: false },
      { name: 'minTextSize', type: 'number', defaultValue: '18', description: 'wonderland_card_prop_minTextSize', required: false },
      { name: 'maxTextSize', type: 'number', defaultValue: '26', description: 'wonderland_card_prop_maxTextSize', required: false },
      { name: 'minCardWidth', type: 'number', defaultValue: '200', description: 'wonderland_card_prop_minCardWidth', required: false },
      { name: 'maxCardWidth', type: 'number', defaultValue: '400', description: 'wonderland_card_prop_maxCardWidth', required: false },
      { name: 'componentWidth', type: 'string', defaultValue: '"340px"', description: 'wonderland_card_prop_componentWidth', required: false },
      { name: 'aspectRatio', type: 'string', defaultValue: '"3/4"', description: 'wonderland_card_prop_aspectRatio', required: false },
      { name: 'outlineColor', type: 'string', defaultValue: '"#777"', description: 'wonderland_card_prop_outlineColor', required: false },
      { name: 'outlineHoverColor', type: 'string', defaultValue: '"#6b140f"', description: 'wonderland_card_prop_outlineHoverColor', required: false },
      { name: 'outlineActiveColor', type: 'string', defaultValue: '"#fff"', description: 'wonderland_card_prop_outlineActiveColor', required: false },
      { name: 'outlineWidth', type: 'string', defaultValue: '"3px"', description: 'wonderland_card_prop_outlineWidth', required: false },
      { name: 'outlineWidthHover', type: 'string', defaultValue: '"3px"', description: 'wonderland_card_prop_outlineWidthHover', required: false },
      { name: 'outlineWidthActive', type: 'string', defaultValue: '"3px"', description: 'wonderland_card_prop_outlineWidthActive', required: false },
      { name: 'borderRadius', type: 'string', defaultValue: '"16px"', description: 'wonderland_card_prop_borderRadius', required: false },
      { name: 'borderRadiusHover', type: 'string', defaultValue: '"28px"', description: 'wonderland_card_prop_borderRadiusHover', required: false },
      { name: 'borderRadiusActive', type: 'string', defaultValue: '"38px"', description: 'wonderland_card_prop_borderRadiusActive', required: false },
      { name: 'backgroundColor', type: 'string', defaultValue: '"#0a0a0a"', description: 'wonderland_card_prop_backgroundColor', required: false },
      { name: 'textColor', type: 'string', defaultValue: '"#fff"', description: 'wonderland_card_prop_textColor', required: false },
      { name: 'textColorHover', type: 'string', defaultValue: '"#fff"', description: 'wonderland_card_prop_textColorHover', required: false },
      { name: 'textColorActive', type: 'string', defaultValue: '"#0a0a0a"', description: 'wonderland_card_prop_textColorActive', required: false },
      { name: 'textPaddingTop', type: 'string', defaultValue: '"17px"', description: 'wonderland_card_prop_textPaddingTop', required: false },
      { name: 'textPaddingLeft', type: 'string', defaultValue: '"19px"', description: 'wonderland_card_prop_textPaddingLeft', required: false },
      { name: 'imageSrc', type: 'string', description: 'wonderland_card_prop_imageSrc', required: true },
      { name: 'imageAlt', type: 'string', defaultValue: '""', description: 'wonderland_card_prop_imageAlt', required: false },
      { name: 'imageHeightPercentage', type: 'number', defaultValue: '71', description: 'wonderland_card_prop_imageHeightPercentage', required: false },
      { name: 'onClick', type: '() => void', description: 'wonderland_card_prop_onClick', required: false },
      { name: 'onHover', type: '() => void', description: 'wonderland_card_prop_onHover', required: false },
      { name: 'onUnhover', type: '() => void', description: 'wonderland_card_prop_onUnhover', required: false },
      { name: 'onRelease', type: '() => void', description: 'wonderland_card_prop_onRelease', required: false },
      { name: 'tranquiluxeProps', type: 'TranquiluxeConfig', description: 'wonderland_card_prop_tranquiluxeProps', required: false },
      { name: 'tranquiluxePropsActive', type: 'TranquiluxeConfig', description: 'wonderland_card_prop_tranquiluxePropsActive', required: false },
      { name: 'inscriptionFontWeight', type: 'CSSProperties["fontWeight"]', defaultValue: '900', description: 'wonderland_card_prop_inscriptionFontWeight', required: false },
      { name: 'fillParent', type: 'boolean', defaultValue: 'false', description: 'wonderland_card_prop_fillParent', required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: "bento-grid",
    title: "bento_grid_title",
    description: "bento_grid_desc",
    demoFullPage: BentoGridFullPageDemo,
    credit: `[Gradient](https://animata.design/docs/bento-grid/gradient) by [ANIMATA DESIGN](https://animata.design/)`,
    usage: `// Path to the "BentoGrid.tsx" file
import BentoGrid from '@/app/the-actual-components/bento-grid/BentoGrid'

<BentoGrid
  mainAspect="9/16"
  leftColRatio={0.32}
  rightCol1={0.6}
  rightCol2={0.4}
  topRowRatio={0.65}
  bottomRowRatio={0.35}
  gap="14px"
  gridHeight="264px"
  cellBackground="#17161c"
  cellBorderColor="#33313d"
  cellBorderRadius="32px"
  cellBorderWidth="5px"
  cellPadding="8px"
  mainCellBorderColor="#7b1fa2"
  mainCellBorderRadius="32px"
  topCenterCellBackground="#060507"
  topRightCellBackground="#111014"
  bottomCellBackground="#4776cb"
  bottomCellBorderRadius="4px"
  bottomCellBorderWidth="0px"
  onCellClick={(cell) => console.log('Clicked:', cell)}
  main={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Left (Main)</div>
    </div>
  }
  topCenter={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Center</div>
    </div>
  }
  topRight={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Right</div>
    </div>
  }
  bottom={
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Bottom Right</div>
    </div>
  }
/>
`,
    code: `"use client"
import React, { CSSProperties, ReactNode, useMemo } from 'react'

type CellType = 'main' | 'topCenter' | 'topRight' | 'bottom'

export interface BentoGridProps {
  mainAspect?: string
  leftColRatio?: number
  rightCol1?: number
  rightCol2?: number
  topRowRatio?: number
  bottomRowRatio?: number
  gap?: string
  gridHeight?: string

  // Global cell style props
  cellBackground?: string
  cellBorderColor?: string
  cellBorderRadius?: string | number
  cellBorderWidth?: string | number
  cellPadding?: string
  cellPaddingTop?: string
  cellPaddingRight?: string
  cellPaddingBottom?: string
  cellPaddingLeft?: string

  // Main cell overrides
  mainCellBackground?: string
  mainCellBorderColor?: string
  mainCellBorderRadius?: string | number
  mainCellBorderWidth?: string | number
  mainCellPadding?: string
  mainCellPaddingTop?: string
  mainCellPaddingRight?: string
  mainCellPaddingBottom?: string
  mainCellPaddingLeft?: string

  // Top center cell overrides
  topCenterCellBackground?: string
  topCenterCellBorderColor?: string
  topCenterCellBorderRadius?: string | number
  topCenterCellBorderWidth?: string | number
  topCenterCellPadding?: string
  topCenterCellPaddingTop?: string
  topCenterCellPaddingRight?: string
  topCenterCellPaddingBottom?: string
  topCenterCellPaddingLeft?: string

  // Top right cell overrides
  topRightCellBackground?: string
  topRightCellBorderColor?: string
  topRightCellBorderRadius?: string | number
  topRightCellBorderWidth?: string | number
  topRightCellPadding?: string
  topRightCellPaddingTop?: string
  topRightCellPaddingRight?: string
  topRightCellPaddingBottom?: string
  topRightCellPaddingLeft?: string

  // Bottom cell overrides
  bottomCellBackground?: string
  bottomCellBorderColor?: string
  bottomCellBorderRadius?: string | number
  bottomCellBorderWidth?: string | number
  bottomCellPadding?: string
  bottomCellPaddingTop?: string
  bottomCellPaddingRight?: string
  bottomCellPaddingBottom?: string
  bottomCellPaddingLeft?: string

  // Slots
  main?: ReactNode
  topCenter?: ReactNode
  topRight?: ReactNode
  bottom?: ReactNode

  // Events
  onCellClick?: (cell: CellType) => void
}

export default function BentoGrid({
  mainAspect = '16/9',
  leftColRatio = 0.6,
  rightCol1 = 0.5,
  rightCol2 = 0.5,
  topRowRatio = 0.65,
  bottomRowRatio = 0.35,
  gap = '16px',
  gridHeight = '100%',

  cellBackground = '#17161c',
  cellBorderColor = '#33313d',
  cellBorderRadius = '8px',
  cellBorderWidth = '1px',
  cellPadding = '16px',
  cellPaddingTop,
  cellPaddingRight,
  cellPaddingBottom,
  cellPaddingLeft,

  mainCellBackground,
  mainCellBorderColor,
  mainCellBorderRadius,
  mainCellBorderWidth,
  mainCellPadding,
  mainCellPaddingTop,
  mainCellPaddingRight,
  mainCellPaddingBottom,
  mainCellPaddingLeft,

  topCenterCellBackground,
  topCenterCellBorderColor,
  topCenterCellBorderRadius,
  topCenterCellBorderWidth,
  topCenterCellPadding,
  topCenterCellPaddingTop,
  topCenterCellPaddingRight,
  topCenterCellPaddingBottom,
  topCenterCellPaddingLeft,

  topRightCellBackground,
  topRightCellBorderColor,
  topRightCellBorderRadius,
  topRightCellBorderWidth,
  topRightCellPadding,
  topRightCellPaddingTop,
  topRightCellPaddingRight,
  topRightCellPaddingBottom,
  topRightCellPaddingLeft,

  bottomCellBackground,
  bottomCellBorderColor,
  bottomCellBorderRadius,
  bottomCellBorderWidth,
  bottomCellPadding,
  bottomCellPaddingTop,
  bottomCellPaddingRight,
  bottomCellPaddingBottom,
  bottomCellPaddingLeft,

  main,
  topCenter,
  topRight,
  bottom,

  onCellClick,
}: BentoGridProps) {
  const rightGroupTotal = rightCol1 + rightCol2
  const rightCol1Frac = rightCol1 / rightGroupTotal
  const rightCol2Frac = rightCol2 / rightGroupTotal

  const gridVars = useMemo(
    () => ({
      '--main-aspect': mainAspect,
      '--left-col': \`\${leftColRatio}fr\`,
      '--right-col1': \`\${(1 - leftColRatio) * rightCol1Frac}fr\`,
      '--right-col2': \`\${(1 - leftColRatio) * rightCol2Frac}fr\`,
      '--top-row': \`\${topRowRatio}fr\`,
      '--bottom-row': \`\${bottomRowRatio}fr\`,
      '--gap': gap,
      height: gridHeight,
    }),
    [mainAspect, leftColRatio, rightCol1Frac, rightCol2Frac, topRowRatio, bottomRowRatio, gap, gridHeight]
  )

  const getCellStyle = (cell: CellType): CSSProperties => {
    const background = (
      cell === 'main' ? mainCellBackground :
      cell === 'topCenter' ? topCenterCellBackground :
      cell === 'topRight' ? topRightCellBackground :
      bottomCellBackground
    ) || cellBackground

    const borderColor = (
      cell === 'main' ? mainCellBorderColor :
      cell === 'topCenter' ? topCenterCellBorderColor :
      cell === 'topRight' ? topRightCellBorderColor :
      bottomCellBorderColor
    ) || cellBorderColor

    const borderRadius = (
      cell === 'main' ? mainCellBorderRadius :
      cell === 'topCenter' ? topCenterCellBorderRadius :
      cell === 'topRight' ? topRightCellBorderRadius :
      bottomCellBorderRadius
    ) || cellBorderRadius

    const borderWidth = (
      cell === 'main' ? mainCellBorderWidth :
      cell === 'topCenter' ? topCenterCellBorderWidth :
      cell === 'topRight' ? topRightCellBorderWidth :
      bottomCellBorderWidth
    ) || cellBorderWidth

    const padding = (
      cell === 'main' ? mainCellPadding :
      cell === 'topCenter' ? topCenterCellPadding :
      cell === 'topRight' ? topRightCellPadding :
      bottomCellPadding
    ) || cellPadding

    const paddingTop = (
      cell === 'main' ? mainCellPaddingTop :
      cell === 'topCenter' ? topCenterCellPaddingTop :
      cell === 'topRight' ? topRightCellPaddingTop :
      bottomCellPaddingTop
    ) || cellPaddingTop

    const paddingRight = (
      cell === 'main' ? mainCellPaddingRight :
      cell === 'topCenter' ? topCenterCellPaddingRight :
      cell === 'topRight' ? topRightCellPaddingRight :
      bottomCellPaddingRight
    ) || cellPaddingRight

    const paddingBottom = (
      cell === 'main' ? mainCellPaddingBottom :
      cell === 'topCenter' ? topCenterCellPaddingBottom :
      cell === 'topRight' ? topRightCellPaddingBottom :
      bottomCellPaddingBottom
    ) || cellPaddingBottom

    const paddingLeft = (
      cell === 'main' ? mainCellPaddingLeft :
      cell === 'topCenter' ? topCenterCellPaddingLeft :
      cell === 'topRight' ? topRightCellPaddingLeft :
      bottomCellPaddingLeft
    ) || cellPaddingLeft

    let paddingStyle: string | undefined
    if (
      paddingTop !== undefined ||
      paddingRight !== undefined ||
      paddingBottom !== undefined ||
      paddingLeft !== undefined
    ) {
      paddingStyle = \`\${paddingTop || padding} \${paddingRight || padding} \${paddingBottom || padding} \${paddingLeft || padding}\`
    } else {
      paddingStyle = padding
    }

    return {
      background,
      border: \`\${borderWidth} solid \${borderColor}\`,
      borderRadius: typeof borderRadius === 'number' ? \`\${borderRadius}px\` : borderRadius,
      padding: paddingStyle,
    }
  }

  const handleCellClick = (cell: CellType) => {
    onCellClick?.(cell)
  }

  return (
    <div
      className="bento-grid"
      style={gridVars as React.CSSProperties}
    >
      <div
        className="cell cell-main"
        style={getCellStyle('main')}
        onClick={() => handleCellClick('main')}
      >
        {main}
      </div>
      <div
        className="cell cell-top-left"
        style={getCellStyle('topCenter')}
        onClick={() => handleCellClick('topCenter')}
      >
        {topCenter}
      </div>
      <div
        className="cell cell-top-right"
        style={getCellStyle('topRight')}
        onClick={() => handleCellClick('topRight')}
      >
        {topRight}
      </div>
      <div
        className="cell cell-bottom"
        style={getCellStyle('bottom')}
        onClick={() => handleCellClick('bottom')}
      >
        {bottom}
      </div>
      <style jsx>{\`
        .bento-grid {
          width: 100%;
          min-height: 0;
          min-width: 0;
          box-sizing: border-box;
          display: grid;
          gap: var(--gap, 16px);
          grid-template-areas:
            "main topCenter topRight"
            "main bottom bottom";
          grid-template-columns:
            minmax(0, var(--left-col, 0.6fr))
            minmax(0, var(--right-col1, 0.2fr))
            minmax(0, var(--right-col2, 0.2fr));
          grid-template-rows:
            minmax(0, var(--top-row, 0.65fr))
            minmax(0, var(--bottom-row, 0.35fr));
        }
        .cell {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          min-height: 0;
          box-sizing: border-box;
          overflow: hidden;
          color: #fff;
        }
        .cell-main {
          grid-area: main;
          aspect-ratio: var(--main-aspect, 16/9);
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
        .cell-top-left {
          grid-area: topCenter;
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
        .cell-top-right {
          grid-area: topRight;
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
        .cell-bottom {
          grid-area: bottom;
          width: 100%;
          height: 100%;
          align-self: stretch;
          justify-self: stretch;
        }
      \`}</style>
    </div>
  )
}`,
    props: [
      { name: "mainAspect", type: "string", defaultValue: "'16/9'", description: "bento_grid_prop_mainaspect", required: false },
      { name: "leftColRatio", type: "number", defaultValue: "0.6", description: "bento_grid_prop_leftcolratio", required: false },
      { name: "rightCol1", type: "number", defaultValue: "0.5", description: "bento_grid_prop_rightcol1", required: false },
      { name: "rightCol2", type: "number", defaultValue: "0.5", description: "bento_grid_prop_rightcol2", required: false },
      { name: "topRowRatio", type: "number", defaultValue: "0.65", description: "bento_grid_prop_toprowratio", required: false },
      { name: "bottomRowRatio", type: "number", defaultValue: "0.35", description: "bento_grid_prop_bottomrowratio", required: false },
      { name: "gap", type: "string", defaultValue: "'16px'", description: "bento_grid_prop_gap", required: false },
      { name: "gridHeight", type: "string", defaultValue: "'100%'", description: "bento_grid_prop_gridheight", required: false },
      { name: "cellBackground", type: "string", defaultValue: "'#17161c'", description: "bento_grid_prop_cellbackground", required: false },
      { name: "cellBorderColor", type: "string", defaultValue: "'#33313d'", description: "bento_grid_prop_cellbordercolor", required: false },
      { name: "cellBorderRadius", type: "string | number", defaultValue: "'8px'", description: "bento_grid_prop_cellborderradius", required: false },
      { name: "cellBorderWidth", type: "string | number", defaultValue: "'1px'", description: "bento_grid_prop_cellborderwidth", required: false },
      { name: "cellPadding", type: "string", defaultValue: "'16px'", description: "bento_grid_prop_cellpadding", required: false },
      { name: "cellPaddingTop", type: "string", description: "bento_grid_prop_cellpaddingtop", required: false },
      { name: "cellPaddingRight", type: "string", description: "bento_grid_prop_cellpaddingright", required: false },
      { name: "cellPaddingBottom", type: "string", description: "bento_grid_prop_cellpaddingbottom", required: false },
      { name: "cellPaddingLeft", type: "string", description: "bento_grid_prop_cellpaddingleft", required: false },
      { name: "mainCellBackground", type: "string", description: "bento_grid_prop_maincellbackground", required: false },
      { name: "mainCellBorderColor", type: "string", description: "bento_grid_prop_maincellbordercolor", required: false },
      { name: "mainCellBorderRadius", type: "string | number", description: "bento_grid_prop_maincellborderradius", required: false },
      { name: "mainCellBorderWidth", type: "string | number", description: "bento_grid_prop_maincellborderwidth", required: false },
      { name: "mainCellPadding", type: "string", description: "bento_grid_prop_maincellpadding", required: false },
      { name: "mainCellPaddingTop", type: "string", description: "bento_grid_prop_maincellpaddingtop", required: false },
      { name: "mainCellPaddingRight", type: "string", description: "bento_grid_prop_maincellpaddingright", required: false },
      { name: "mainCellPaddingBottom", type: "string", description: "bento_grid_prop_maincellpaddingbottom", required: false },
      { name: "mainCellPaddingLeft", type: "string", description: "bento_grid_prop_maincellpaddingleft", required: false },
      { name: "topCenterCellBackground", type: "string", description: "bento_grid_prop_topcentercellbackground", required: false },
      { name: "topCenterCellBorderColor", type: "string", description: "bento_grid_prop_topcentercellbordercolor", required: false },
      { name: "topCenterCellBorderRadius", type: "string | number", description: "bento_grid_prop_topcentercellborderradius", required: false },
      { name: "topCenterCellBorderWidth", type: "string | number", description: "bento_grid_prop_topcentercellborderwidth", required: false },
      { name: "topCenterCellPadding", type: "string", description: "bento_grid_prop_topcentercellpadding", required: false },
      { name: "topCenterCellPaddingTop", type: "string", description: "bento_grid_prop_topcentercellpaddingtop", required: false },
      { name: "topCenterCellPaddingRight", type: "string", description: "bento_grid_prop_topcentercellpaddingright", required: false },
      { name: "topCenterCellPaddingBottom", type: "string", description: "bento_grid_prop_topcentercellpaddingbottom", required: false },
      { name: "topCenterCellPaddingLeft", type: "string", description: "bento_grid_prop_topcentercellpaddingleft", required: false },
      { name: "topRightCellBackground", type: "string", description: "bento_grid_prop_toprightcellbackground", required: false },
      { name: "topRightCellBorderColor", type: "string", description: "bento_grid_prop_toprightcellbordercolor", required: false },
      { name: "topRightCellBorderRadius", type: "string | number", description: "bento_grid_prop_toprightcellborderradius", required: false },
      { name: "topRightCellBorderWidth", type: "string | number", description: "bento_grid_prop_toprightcellborderwidth", required: false },
      { name: "topRightCellPadding", type: "string", description: "bento_grid_prop_toprightcellpadding", required: false },
      { name: "topRightCellPaddingTop", type: "string", description: "bento_grid_prop_toprightcellpaddingtop", required: false },
      { name: "topRightCellPaddingRight", type: "string", description: "bento_grid_prop_toprightcellpaddingright", required: false },
      { name: "topRightCellPaddingBottom", type: "string", description: "bento_grid_prop_toprightcellpaddingbottom", required: false },
      { name: "topRightCellPaddingLeft", type: "string", description: "bento_grid_prop_toprightcellpaddingleft", required: false },
      { name: "bottomCellBackground", type: "string", description: "bento_grid_prop_bottomcellbackground", required: false },
      { name: "bottomCellBorderColor", type: "string", description: "bento_grid_prop_bottomcellbordercolor", required: false },
      { name: "bottomCellBorderRadius", type: "string | number", description: "bento_grid_prop_bottomcellborderradius", required: false },
      { name: "bottomCellBorderWidth", type: "string | number", description: "bento_grid_prop_bottomcellborderwidth", required: false },
      { name: "bottomCellPadding", type: "string", description: "bento_grid_prop_bottomcellpadding", required: false },
      { name: "bottomCellPaddingTop", type: "string", description: "bento_grid_prop_bottomcellpaddingtop", required: false },
      { name: "bottomCellPaddingRight", type: "string", description: "bento_grid_prop_bottomcellpaddingright", required: false },
      { name: "bottomCellPaddingBottom", type: "string", description: "bento_grid_prop_bottomcellpaddingbottom", required: false },
      { name: "bottomCellPaddingLeft", type: "string", description: "bento_grid_prop_bottomcellpaddingleft", required: false },
      { name: "main", type: "ReactNode", description: "bento_grid_prop_main", required: false },
      { name: "topCenter", type: "ReactNode", description: "bento_grid_prop_topcenter", required: false },
      { name: "topRight", type: "ReactNode", description: "bento_grid_prop_topright", required: false },
      { name: "bottom", type: "ReactNode", description: "bento_grid_prop_bottom", required: false },
      { name: "onCellClick", type: "(cell: 'main' | 'topCenter' | 'topRight' | 'bottom') => void", description: "bento_grid_prop_oncellclick", required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: "shamayim-toggle-switch",
    title: "shamayim_toggle_switch_title",
    description: "shamayim_toggle_switch_desc",
    demoFullPage: ShamayimToggleSwitchFullPageDemo,
    credit: `[Skeuomorphic Toggle Switch (vol. 2)](https://codepen.io/nicolasjesenberger/pen/NWOyxyO) by [Nicolas Jesenberger](https://codepen.io/nicolasjesenberger)  
[Knóbz Skeuomorphic UI Sample for Figma](https://dribbble.com/shots/14326768-Kn-bz-Skeuomorphic-UI-Sample-for-Figma) by [kolpikov](https://dribbble.com/despoth)`,
    usage: `// Path to the "ShamayimToggleSwitch.tsx" file

import { ShamayimToggleSwitch } from "@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch";
import React, { useState } from "react";

export default function DemoTogglePatterns() {
  const [topState, setTopState] = useState(false);
  const [bottomState, setBottomState] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        minHeight: "300px",
        width: "100%",
        direction: "ltr",
        borderRadius: "0.5rem",
        backgroundImage: "linear-gradient(45deg, #47b6d1, #90e0ec)",
        fontSize: "2em",
        padding: "2em",
      }}
    >
      {/* First Row: LTR */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875em" }}>
        <span style={{ color: "#E0F9FC" }}>Mobile Data</span>
        <ShamayimToggleSwitch
          defaultState={topState}
          onChange={(isOn) => {
            console.log(\`Top switch is now \${isOn ? "ON" : "OFF"}\`);
            setTopState(isOn);
          }}
        />
      </div>

      {/* Second Row: RTL (mirrored switch) */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875em" }}>
        <ShamayimToggleSwitch
          defaultState={bottomState}
          mirrored
          onChange={(isOn) => {
            console.log(\`Bottom switch is now \${isOn ? "ON" : "OFF"}\`);
            setBottomState(isOn);
          }}
        />
        <span style={{ color: "#E0F9FC" }}>נתונים סלולריים</span>
      </div>
    </div>
  );
}
`,
    code: `"use client"
import React, { useState } from 'react';

interface ShamayimToggleSwitchProps {
  defaultState: boolean;
  mirrored?: boolean;
  onChange: (isOn: boolean) => void;
}

const ShamayimToggleSwitch: React.FC<ShamayimToggleSwitchProps> = ({ defaultState, mirrored = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange(newState);
  };

  return (
    <div className="toggle-wrapper" style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}>
      <input
        className="toggle-checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <svg className="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"/>
      </svg>
      <div className="toggle-container">
        <div className="toggle-button"></div>
      </div>
      <svg className="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"/>
      </svg>
      <style jsx>{\`
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: .25em;
        }
        .toggle-icon {
          width: .5em;
          height: .5em;
          fill: #4c9bab;
          filter: drop-shadow(0 1px 1px rgb(255 255 255 / .4));
          transition: fill .4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
          background-image: repeating-conic-gradient(#0b66a0 0% 25%, #1093a8 0% 50%);
          background-size: .125em .125em;
          box-shadow: inset 0 .125em .25em rgba(0, 9, 38, .6), inset -1.5em 0 .0625em rgba(0, 9, 38, .5), inset .5em 0 .5em rgba(0, 9, 38, .5), 0 1px 1px rgb(255 255 255 / .4);
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: .0625em;
          left: .0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - .125em);
          background-image: linear-gradient(to right, #86e2fa, #125e79);
          box-shadow: 0 .125em .25em rgb(0 0 0 / .6);
          transition: left .4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      \`}</style>
    </div>
  );
};

export { ShamayimToggleSwitch };`,
      props: [
        { name: "defaultState", type: "boolean", description: "shamayim_toggle_switch_prop_defaultstate", required: true },
        { name: "mirrored", type: "boolean", defaultValue: "false", description: "shamayim_toggle_switch_prop_mirrored", required: false },
        { name: "onChange", type: "(isOn: boolean) => void", description: "shamayim_toggle_switch_prop_onchange", required: true }
      ],
    noPadding: true,
    isPreviewImage: true,
  },
  {
    id: "magic-text",
    title: "magic_text_title",
    description: "magic_text_desc",
    demo: MagicTextPreviewDemo,
    demoFullPage: MagicTextFullPageDemo,
    dependencies: "npm install lucide-react",
    credit: `[Magical Text Effect](https://codepen.io/Hyperplexed/pen/YzeOLYe) by [Hyperplexed](https://codepen.io/Hyperplexed)`,
    usage: `// Path to the "MagicText.tsx" file

import MagicText from "@/app/the-actual-components/magic-text/MagicText";
import { Flame } from "lucide-react";

export default function MagicTextDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px",
        background: "#0a0a0a",
        color: "#fff",
        fontSize: "2.25em",
        textAlign: "center",
      }}
    >
      {/* Default usage with custom gradient */}
      <div>
        The tree that would grow to{" "}
        <MagicText
        >
          heaven
        </MagicText>
        {" "}must send its roots to{" "}
        <MagicText
          gradientColors={["#d5243f", "#8e2de2"]} // same red → purple
          starColors={["#ff7a00", "#ff944d"]} 
          sparkleIcon={<Flame size={32} stroke="none" color="#ff7a00" />}
        >
          hell
        </MagicText>
        .
      </div>
    </div>
  );
}`,
    code: `"use client";
import React, { useEffect, useRef, useId } from "react";

type MagicTextProps = {
  /** The text content */
  children: React.ReactNode;
  /** Gradient colors for the text animation */
  gradientColors?: string[];
  /** Palette for sparkle colors */
  starColors?: string[];
  /** Number of sparkle particles */
  starCount?: number;
  /** Gradient animation speed (e.g. "3s") */
  gradientSpeed?: string;
  /** Frequency of sparkle re-appearances (ms) */
  sparkleFrequency?: number;
  /** Duration of star scaling animation (ms) */
  sparkVisibilityDuration?: number;
  /** Duration stars remain before being re-triggered (ms) */
  sparkleAnimationDuration?: number;
  /** Override sparkle icon (default: SVG star). Can be any ReactNode */
  sparkleIcon?: React.ReactNode;
  /** Star size (px, clamp logic if desired) */
  starSize?: string;
  /** Optional mirrored mode */
  mirrored?: boolean;
};

export default function MagicText({
  children,
  gradientColors = ["#4776cb", "#a19fe5", "#6cc606"],
  starColors = ["#4776cb", "#a19fe5", "#6cc606"],
  starCount = 3,
  gradientSpeed = "3s",
  sparkleFrequency = 1000,
  sparkVisibilityDuration = 900,
  sparkleAnimationDuration = 5000,
  sparkleIcon,
  starSize = "clamp(20px, 1.5vw, 30px)",
  mirrored = false,
}: MagicTextProps) {
  const starsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const instanceId = useId(); // ✅ unique per component automatically

  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const animate = (star: HTMLElement) => {
    // Random positions
    star.style.setProperty("--star-left", \`\${rand(-10, 100)}%\`);
    star.style.setProperty("--star-top", \`\${rand(-40, 80)}%\`);

    // Random color if SVG default used
    const path = star.querySelector("path");
    if (path) {
      path.setAttribute(
        "fill",
        starColors[Math.floor(Math.random() * starColors.length)]
      );
    }

    // Reset animation
    star.style.animation = "none";
    void star.offsetHeight; // reflow

    // Trigger scale animation
    star.style.animation = \`scale-\${instanceId} \${sparkVisibilityDuration}ms ease forwards\`;
  };

  useEffect(() => {
    starsRef.current.forEach((star, idx) => {
      if (star) {
        const delay = idx * 333;
        setTimeout(() => {
          animate(star);
          const interval = setInterval(() => animate(star), sparkleFrequency);
          return () => clearInterval(interval);
        }, delay);
      }
    });
  }, [
    starColors,
    sparkleFrequency,
    sparkleAnimationDuration,
    sparkVisibilityDuration,
  ]);

  const gradient = \`linear-gradient(\${
    mirrored ? "to left" : "to right"
  }, \${[...gradientColors, gradientColors[0]].join(", ")})\`;

  const DefaultStar = (
    <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
    </svg>
  );

  return (
    <span className={\`magic-\${instanceId} \${mirrored ? "mirrored" : ""}\`}>
      {/* Sparkles */}
      <span className={\`stars-container-\${instanceId}\`}>
        {Array.from({ length: starCount }).map((_, i) => (
          <span
            key={i}
            className={\`magic-star-\${instanceId}\`}
            ref={(el) => {
              starsRef.current[i] = el;
            }}
          >
            {sparkleIcon || DefaultStar}
          </span>
        ))}
      </span>

      {/* Gradient Text */}
      <span
        className={\`magic-text-\${instanceId}\`}
        style={{
          backgroundImage: gradient,
          backgroundSize: "200%",
          animationDuration: gradientSpeed,
        }}
      >
        {children}
      </span>

      <style jsx>{\`
        .magic-\${instanceId} {
          display: inline-block;
          position: relative;
        }

        /* Flip ENTIRE sparkle container when mirrored */
        .magic-\${instanceId}.mirrored .stars-container-\${instanceId} {
          transform: scaleX(-1);
          transform-origin: center;
        }

        .stars-container-\${instanceId} {
          display: inline-block;
          position: absolute;
          inset: 0;
        }

        .magic-star-\${instanceId} {
          --size: \${starSize};
          display: block;
          height: var(--size);
          width: var(--size);
          left: var(--star-left);
          top: var(--star-top);
          position: absolute;
          opacity: 0.7;
          pointer-events: none;
          animation: none;
        }

        .magic-star-\${instanceId} svg {
          animation: rotate-\${instanceId} 1000ms linear infinite;
          display: block;
          width: 100%;
          height: 100%;
        }

        .magic-text-\${instanceId} {
          animation: background-pan-\${instanceId} linear infinite;
          white-space: nowrap;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
        }

        @keyframes background-pan-\${instanceId} {
          from {
            background-position: 0% center;
          }
          to {
            background-position: \${mirrored ? "200%" : "-200%"} center;
          }
        }

        @keyframes scale-\${instanceId} {
          from,
          to {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes rotate-\${instanceId} {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(180deg);
          }
        }
      \`}</style>
    </span>
  );
}`,
    props: [
      { name: "children", type: "React.ReactNode", description: "magic_text_prop_children", required: true },
      { name: "gradientColors", type: "string[]", description: "magic_text_prop_gradientcolors", required: false },
      { name: "starColors", type: "string[]", description: "magic_text_prop_starcolors", required: false },
      { name: "starCount", type: "number", defaultValue: "3", description: "magic_text_prop_starcount", required: false },
      { name: "gradientSpeed", type: "string", defaultValue: "3s", description: "magic_text_prop_gradientspeed", required: false },
      { name: "sparkleFrequency", type: "number", defaultValue: "1000", description: "magic_text_prop_sparklefrequency", required: false },
      { name: "sparkVisibilityDuration", type: "number", defaultValue: "900", description: "magic_text_prop_sparkvisibility", required: false },
      { name: "sparkleAnimationDuration", type: "number", defaultValue: "5000", description: "magic_text_prop_sparkleanimationduration", required: false },
      { name: "sparkleIcon", type: "React.ReactNode", description: "magic_text_prop_sparkleicon", required: false },
      { name: "starSize", type: "string", defaultValue: "clamp(20px, 1.5vw, 30px)", description: "magic_text_prop_starsize", required: false },
      { name: "mirrored", type: "boolean", defaultValue: "false", description: "magic_text_prop_mirrored", required: false },
    ],
  },
  {
    id: "metamorphic-loader",
    title: "metamorphic_loader_title",
    description: "metamorphic_loader_desc",
    demo: MetamorphicLoaderPreviewDemo,
    demoFullPage: MetamorphicLoaderFullPageDemo,
    dependencies: "npm install styled-components --legacy-peer-deps",
    credit: `[Loading Animation](https://codepen.io/gayane-gasparyan/pen/GRBvwZX) by [Gayane Gasparyan](https://codepen.io/gayane-gasparyan)`,
    usage: `// Path to the "MetamorphicLoader.tsx" file
import MetamorphicLoader from '@/app/the-actual-components/metamorphic-loader/MetamorphicLoader';

<div className="p-10 w-full flex flex-wrap items-center justify-center gap-6 box-border overflow-hidden">
  <MetamorphicLoader size={260} />
  <MetamorphicLoader size={124} color="#156ef6" lighteningStep={16} />
  <MetamorphicLoader size={216} color="#6cc606" />
  <MetamorphicLoader size={124} color="#ffa300" lighteningStep={14} />
  <MetamorphicLoader size={300} color="#019a41" lighteningStep={50} />
</div>`,
    code: `"use client";
    
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes\`
  0% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  20% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  90% {
    border-radius: 5%;
    transform: rotate(90deg);
  }
  100% {
    border-radius: 5%;
    transform: rotate(90deg);
  }
\`;

interface MetamorphicLoaderProps {
  size: number; // Size of the largest circle
  color?: string; // Base color for the circles (optional)
  lighteningStep?: number; // Step for lightening the color (optional)
}

const CircleContainer = styled.div<MetamorphicLoaderProps>\`
  position: relative;          /* added to contain absolutely positioned children */
  width: \${({ size }) => size}px;
  height: \${({ size }) => size}px;
  display: flex;
  justify-content: center;
  align-items: center;
\`;

const Circle = styled.div\`
  position: absolute;
  border-radius: 50%;
  animation: \${spin} 2s alternate infinite;
\`;

const MetamorphicLoader: React.FC<MetamorphicLoaderProps> = ({
  size,
  color = "#8f10f6",
  lighteningStep = 24,
}) => {
  const circleSizes = Array.from({ length: 9 }, (_, i) => size - i * lighteningStep);

  return (
    <CircleContainer size={size}>
      {circleSizes.map((circleSize, index) => (
        <Circle
          key={index}
          style={{
            backgroundColor: lightenColor(color, index * lighteningStep), // Lighten color from outer to inner
            width: \`\${circleSize}px\`,
            height: \`\${circleSize}px\`,
            animationDelay: \`\${(index + 1) * 0.1}s\`,
          }}
        />
      ))}
    </CircleContainer>
  );
};

// Helper function to lighten a hex color by a given amount
const lightenColor = (color: string, amount: number) => {
  if (!color) return "#000000"; // Default black

  const rgb = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!rgb) return color;

  const r = Math.min(255, Math.max(0, parseInt(rgb[1], 16) + amount));
  const g = Math.min(255, Math.max(0, parseInt(rgb[2], 16) + amount));
  const b = Math.min(255, Math.max(0, parseInt(rgb[3], 16) + amount));

  return \`#\${r.toString(16).padStart(2, "0")}\${g.toString(16).padStart(2, "0")}\${b
    .toString(16)
    .padStart(2, "0")}\`;
};

export default MetamorphicLoader;
`,
    props: [
        { name: "size", type: "number", description: "metamorphic_loader_prop_size", required: true },
        { name: "color", type: "string", defaultValue: "#8f10f6", description: "metamorphic_loader_prop_color", required: false },
        { name: "lighteningStep", type: "number", defaultValue: "24", description: "metamorphic_loader_prop_lighteningStep", required: false }
    ],
  },
  {
    id: "multi-colored-text",
    title: "multi_colored_text_title",
    description: "multi_colored_text_desc",
    demo: MultiColoredTextPreviewDemo,
    demoFullPage: MultiColoredTextFullPageDemo,
    credit: `[Multi Colored Text with CSS](https://codepen.io/TajShireen/pen/YzZmbep) by [Shireen Taj](https://codepen.io/TajShireen)`,
    usage: `// Path to the "MultiColoredText.tsx" file
import { MultiColoredTextV1, MultiColoredTextV2 } from "@/app/the-actual-components/multi-colored-text/MultiColoredText";

export default function MultiColoredTextDemo() {

  return (
    <div>
      {/* V1 Demo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "2rem",
          position: "relative",
        }}
      >
        <MultiColoredTextV1
          inscription="Namer UI"
          fontSize="8em"
          colors={["#4776cb", "#a19fe5", "#6cc606"]}
          separatorRotation="135deg"
          fontWeight={700}
        />
      </div>

      {/* V2 Demo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#f0f8ff",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <MultiColoredTextV2
          inscription="פלאם חארבור"
          fontSize="7em"
          primaryColor="#00aaff"
          secondaryColor="#5c3fcd"
          tertiaryColor="#3a3a3a"
          quaternaryColor="#f9002f"
          quinaryColor="#f1b211"
          separatorRotation="232deg"
          fontWeight={700}
        />
      </div>
    </div>
  );
}`,
    code: `"use client";
    
import React from "react";

//////////////////////////
// Version 1: Array colors, with optional fontWeight prop
interface MultiColoredTextV1Props {
  inscription: string;
  fontSize: string;
  colors: string[];             // Array of colors
  separatorRotation: string;
  fontWeight?: number | string;
}

export const MultiColoredTextV1: React.FC<MultiColoredTextV1Props> = ({
  inscription,
  fontSize,
  colors,
  separatorRotation,
  fontWeight = 700,
}) => {
  if (colors.length === 0) {
    return <div style={{ fontSize }}>{inscription}</div>;
  }

  const step = 100 / colors.length;
  let stops = "";
  colors.forEach((color, i) => {
    const start = i * step;
    const end = start + step;
    stops += \`\${color} \${start}%, \${color} \${end}%\`;
    if (i < colors.length - 1) stops += ", ";
  });

  const background = \`linear-gradient(\${separatorRotation}, \${stops})\`;

  return (
    <>
      <style jsx>{\`
        .multi-colored-text-container {
          position: relative;
          display: inline-block;
          font-size: \${fontSize};
          font-weight: \${fontWeight};
          white-space: nowrap;
          user-select: none;
        }
        .multi-colored-text-base,
        .multi-colored-text-gradient {
          margin: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          cursor: inherit;
        }
        .multi-colored-text-base {
          color: black; /* fallback solid text */
          position: relative; /* relative to container */
          z-index: 0;
          background: none;
          -webkit-background-clip: unset;
          background-clip: unset;
        }
        .multi-colored-text-gradient {
          background: \${background};
          -webkit-background-clip: text;
          background-clip: text;
          z-index: 1;
          pointer-events: none;
        }
      \`}</style>

      <div className="multi-colored-text-container" aria-label={inscription} role="text">
        <div className="multi-colored-text-base">{inscription}</div>
        <div className="multi-colored-text-gradient">{inscription}</div>
      </div>
    </>
  );
};

/////////////////////////////
// Version 2: 5 colors individually as optional props + fontWeight prop

interface MultiColoredTextV2Props {
  inscription: string;
  fontSize: string;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  quaternaryColor?: string;
  quinaryColor?: string;
  separatorRotation: string;
  fontWeight?: number | string;
}

export const MultiColoredTextV2: React.FC<MultiColoredTextV2Props> = ({
  inscription,
  fontSize,
  primaryColor = "#00aaff",  // Default colors
  secondaryColor = "#5c3fcd",
  tertiaryColor = "#3a3a3a",
  quaternaryColor = "#f9002f",
  quinaryColor = "#f1b211",
  separatorRotation,
  fontWeight = 700,
}) => {
  return (
    <div>
      <div className="w-full">
        <div className="container">
          <h1
            className={\`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center w-full\`}
            style={{
              fontSize: \`\${fontSize}\`,
              color: 'var(--foreground)',
              letterSpacing: '-.01em',
              fontWeight,
            }}
          >
            <div className="split-parent">
              <div className="split-child">
                <div className="multi-color-text">{inscription}</div>
              </div>
            </div>
          </h1>
        </div>
      </div>

      <style jsx>{\`
        .multi-color-text {
          font-weight: \${fontWeight};
          background: linear-gradient(\${separatorRotation}, 
            \${primaryColor} 19%, 
            transparent 19%, transparent 20%, 
            \${secondaryColor} 20%, \${secondaryColor} 39%,
            transparent 39%, transparent 40%, 
            \${tertiaryColor} 40%, \${tertiaryColor} 59%,
            transparent 59%, transparent 60%, 
            \${quaternaryColor} 60%, \${quaternaryColor} 79%,
            transparent 79%, transparent 80%, 
            \${quinaryColor} 80%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
      \`}</style>
    </div>
  );
};
`,
    props: [
      { name: "inscription", type: "string", description: "multi_colored_text_prop_inscription", required: true },
      { name: "fontSize", type: "string", description: "multi_colored_text_prop_fontSize", required: true },
      { name: "separatorRotation", type: "string", description: "multi_colored_text_prop_separatorRotation", required: true },
      { name: "fontWeight", type: "number | string", defaultValue: "700", description: "multi_colored_text_prop_fontWeight", required: false },
      { name: "colors", type: "string[]", description: "multi_colored_text_prop_colors_v1_only", required: true },
      { name: "primaryColor", type: "string", defaultValue: "#00aaff", description: "multi_colored_text_prop_primaryColor_v2_only", required: false },
      { name: "secondaryColor", type: "string", defaultValue: "#5c3fcd", description: "multi_colored_text_prop_secondaryColor_v2_only", required: false },
      { name: "tertiaryColor", type: "string", defaultValue: "#3a3a3a", description: "multi_colored_text_prop_tertiaryColor_v2_only", required: false },
      { name: "quaternaryColor", type: "string", defaultValue: "#f9002f", description: "multi_colored_text_prop_quaternaryColor_v2_only", required: false },
      { name: "quinaryColor", type: "string", defaultValue: "#f1b211", description: "multi_colored_text_prop_quinaryColor_v2_only", required: false },
    ],
  },
  {
    id: "position-aware-button",
    title: "position_aware_button_title",
    description: "position_aware_button_desc",
    demo: PositionAwareButtonPreviewDemo,
    demoFullPage: PositionAwareButtonFullPageDemo,
    dependencies: `npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons`,
    credit: `[Button hover effect](https://codepen.io/thebabydino/pen/PoxVZWg) by [Ana Tudor](https://codepen.io/thebabydino)`,
    usage: `// Path to the "PositionAwareButton.tsx" file
import PositionAwareButton from '@/app/the-actual-components/position-aware-button/PositionAwareButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function PositionAwareButtonDemo() {
  return (
    <div className="p-8 flex flex-wrap gap-6 justify-center bg-[#fff] rounded-lg">
      {/* 1st Button - Default Blue */}
      <PositionAwareButton
        onClick={() => console.log("First button has been clicked")}
      >
        Default Blue
      </PositionAwareButton>

      {/* 2nd Button - Purple GitHub */}
      <PositionAwareButton
        borderRadius="0.76em"
        buttonColor="#6A0DAD"
        fontWeight="bold"
        fontSize="1.2rem"
        foregroundColor="#fff"
        glossColor="#ffe6"
        onClick={() => console.log("The GitHub button has been clciked")}
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />&nbsp;GitHub
      </PositionAwareButton>

      {/* 3rd Button - Orange with custom colors */}
      <PositionAwareButton
        buttonColor="#ff4500"
        filamentColor="#262626"
        glossColor="#fff9"
        foregroundColor="#ffffee"
        fontSize="1.2rem"
        onClick={() => console.log("Third button has been clicked")}
      >
        Orange Variant
      </PositionAwareButton>
    </div>
  );
}`,
    code: `"use client";
import React, { useEffect, useRef } from "react";

interface PositionAwareButtonProps {
  children?: React.ReactNode;
  buttonWidth?: string;
  borderRadius?: string;
  buttonColor?: string; // main fill
  filamentColor?: string; // center glow
  glossColor?: string; // glossy highlight
  fontSize?: string;
  fontWeight?: string | number;
  foregroundColor?: string; // text/icon color
  fontFamily?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PositionAwareButton: React.FC<PositionAwareButtonProps> = ({
  children,
  buttonWidth = "auto",
  borderRadius = "2em",
  buttonColor = "#00a7fa", // default fill
  filamentColor = "black",
  glossColor = "#fff4",
  fontSize,
  fontWeight,
  foregroundColor = "white",
  fontFamily,
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();

        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;

        button.style.setProperty("--x", \`\${relativeX}px\`);
        button.style.setProperty("--y", \`\${relativeY}px\`);
      }
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mousemove", updatePosition);
      button.addEventListener("mouseenter", updatePosition);
      button.addEventListener("mouseleave", updatePosition);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousemove", updatePosition);
        button.removeEventListener("mouseenter", updatePosition);
        button.removeEventListener("mouseleave", updatePosition);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={{
        width: buttonWidth,
        borderRadius,
        "--button-color": buttonColor,
        "--filament-color": filamentColor,
        "--gloss-color": glossColor,
        fontSize,
        fontWeight,
        color: foregroundColor,
        fontFamily: fontFamily || undefined,
      } as React.CSSProperties}
    >
      <span className="button-content">{children}</span>

      <style jsx>{\`
        @property --r {
          syntax: "<length-percentage>";
          initial-value: 0px;
          inherits: false;
        }

        button {
          place-self: center;
          border: solid 2px #0001;
          padding: 0.5em 1em;
          box-shadow: inset 1px 3px 1px var(--gloss-color);
          background: radial-gradient(
              circle at var(--x, 0%) var(--y, 0%),
              var(--filament-color) calc(var(--r) - 1px),
              var(--button-color) var(--r)
            )
            border-box;
          transition: --r 0.35s;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5em;
        }

        button:hover {
          --r: 100%;
        }

        .button-content {
          display: inline-block;
        }
      \`}</style>
    </button>
  );
};

export default PositionAwareButton;
`,
    props: [
      { name: "children", type: "React.ReactNode", description: "position_aware_button_prop_children", required: true },
      { name: "onClick", type: "(event: React.MouseEvent<HTMLButtonElement>) => void", description: "position_aware_button_prop_onclick", required: false },
      { name: "buttonWidth", type: "string", defaultValue: "auto", description: "position_aware_button_prop_buttonwidth", required: false },
      { name: "borderRadius", type: "string", defaultValue: "2em", description: "position_aware_button_prop_borderradius", required: false },
      { name: "buttonColor", type: "string", defaultValue: "#00a7fa", description: "position_aware_button_prop_buttoncolor", required: false },
      { name: "filamentColor", type: "string", defaultValue: "black", description: "position_aware_button_prop_filamentcolor", required: false },
      { name: "glossColor", type: "string", defaultValue: "#fff4", description: "position_aware_button_prop_glosscolor", required: false },
      { name: "fontSize", type: "string", description: "position_aware_button_prop_fontsize", required: false },
      { name: "fontWeight", type: "string | number", description: "position_aware_button_prop_fontweight", required: false },
      { name: "foregroundColor", type: "string", defaultValue: "white", description: "position_aware_button_prop_foregroundcolor", required: false },
      { name: "fontFamily", type: "string", description: "position_aware_button_prop_fontfamily", required: false }
    ],
    noPadding: true,
  },
  {
    id: "bauble-toggle",
    title: "bauble_toggle_title",
    description: "bauble_toggle_desc",
    demoFullPage: BaubleToggleFullPageDemo,
    dependencies: "npm install gsap --legacy-peer-deps",
    credit: `[Bauble Toggle](https://codepen.io/chrisgannon/pen/ZaPmKp) by [Chris Gannon](https://codepen.io/chrisgannon)`,
    usage: `// Path to the "BaubleToggle.tsx" file
import BaubleToggle from '@/app/the-actual-components/bauble-toggle/BaubleToggle';

export default function BaubleToggleDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        borderRadius: "0.5rem",
        fontSize: "3em",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2em",
        }}
      >
        <span style={{ color: "#fff" }}>The only</span>
        <div
          style={{
            width: "114px",
            height: "114px",
            overflow: "hidden",
            transform: "scale(5)",
          }}
        >
          <BaubleToggle
            onToggleChange={(isOn) =>
              console.log(\`Toggle is now \${isOn ? "ON" : "OFF"}\`)
            }
          />
        </div>
      </div>
    </div>
  );
}`,
    code: `import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface BaubleToggleProps {
  onToggleChange?: (isOn: boolean) => void; // Callback function for toggle state change
  initialState?: boolean; // New prop for initial state
}

const BaubleToggle: React.FC<BaubleToggleProps> = ({ onToggleChange, initialState = true }) => {
  const [isOn, setIsOn] = useState(initialState); // Use initialState prop
  const toggleBgRef = useRef<SVGRectElement>(null);
  const dotGroupRef = useRef<SVGRectElement>(null);
  const dotLBgRef = useRef<SVGGElement>(null);
  const starPatternRef = useRef<SVGPatternElement>(null);
  const patternColorRef = useRef<SVGGElement>(null);

  const toggle = () => {
    setIsOn(prevState => {
      const newState = !prevState;
      if (onToggleChange) {
        onToggleChange(newState); // Notify parent of state change
      }
      return newState;
    });
  };

  useEffect(() => {
    // Initial toggle call is no longer needed since we set the initial state directly
  }, []);

  useEffect(() => {
    if (toggleBgRef.current && dotGroupRef.current && dotLBgRef.current && starPatternRef.current && patternColorRef.current) {
      const tl = gsap.timeline();
      tl.to([dotLBgRef.current, dotGroupRef.current], {
        x: isOn ? 84 : 0,
        duration: 1,
        transformOrigin: "50% 50%",
        ease: "power3.inOut"
      })
        .to(toggleBgRef.current, {
          fill: isOn ? "#43B86C" : "#BC4B51",
          duration: 1,
          ease: "sine.inOut"
        }, "-=1")
        .to(patternColorRef.current, {
          fill: isOn ? "#43B86C" : "#BC4B51",
          duration: 1,
          ease: "power3.inOut"
        }, "-=1")
        .to(starPatternRef.current, {
          attr: { x: isOn ? 210 : 0 },
          duration: 1,
          transformOrigin: "50% 50%",
          ease: "power3.inOut"
        }, "-=1")
        .to(".baubleGradStopColor", {
          stopColor: isOn ? "#184A13" : "#491615",
          duration: 1
        }, "-=1");

      tl.timeScale(1.32);
    }
  }, [isOn]);

  return (
    <svg 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      preserveAspectRatio="xMidYMid slice" 
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="baubleShineGrad" cx="352.79" cy="293.87" r="26" gradientUnits="userSpaceOnUse">
          <stop offset="0.01" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="0.69" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="baubleGrad" cx={358} cy={298} r={26} gradientUnits="userSpaceOnUse">
          <stop offset="0.5" stopColor="#FABE2B" stopOpacity={0} />
          <stop offset="0.8" className="baubleGradStopColor" stopColor="#491615" stopOpacity="0.15" />
          <stop offset={1} className="baubleGradStopColor" stopColor="#491615" stopOpacity="0.65" />
        </radialGradient>
        <filter id="baubleShadow" width="350%" height="350%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feOffset dx="0" dy="23" result="offsetblur" />
          <feFlood id="dropShadowAlpha" floodColor="#000" floodOpacity="0.21" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
          </feMerge>
        </filter>
        <linearGradient id="baubleCapGrad" x1="351.26" y1="272.94" x2="364.74" y2="272.94" gradientUnits="userSpaceOnUse">
          <stop offset="0.09" stopColor="#f5bb3b"/>
          <stop offset="0.31" stopColor="#fff"/>
          <stop offset="0.51" stopColor="#f5bb3b"/>
          <stop offset="0.86" stopColor="#bd902d"/>
          <stop offset="1" stopColor="#f5bb3b"/>
        </linearGradient>
        <pattern id="starPattern" ref={starPatternRef} width={92} height={92} patternTransform="translate(-10.02 -3.42) scale(0.33)" patternUnits="userSpaceOnUse">
          <rect width={184} height={184} fill="none"/>
          <g ref={patternColorRef} fill="#BC4B51">
            <polygon points="84.19 73.59 95.3 83.17 109.49 79.45 103.83 92.99 111.76 105.34 97.14 104.12 87.87 115.48 84.5 101.19 70.83 95.86 83.36 88.25 84.19 73.59" />
            <polygon points="45.58 87.84 48.09 90 51.3 89.16 50.02 92.22 51.81 95.02 48.51 94.74 46.41 97.31 45.65 94.08 42.55 92.87 45.39 91.15 45.58 87.84" />
            <polygon points="-7.82 73.59 3.3 83.17 17.49 79.45 11.82 92.99 19.76 105.34 5.14 104.12 -4.13 115.48 -7.5 101.19 -21.18 95.86 -8.64 88.25 -7.82 73.59" />
            <polygon points="39.53 27.59 50.65 37.17 64.83 33.45 59.17 46.99 67.11 59.34 52.49 58.12 43.21 69.48 39.84 55.19 26.17 49.86 38.7 42.25 39.53 27.59" />
            <polygon points="84.19 -18.41 95.3 -8.82 109.49 -12.55 103.83 0.99 111.76 13.34 97.14 12.12 87.87 23.48 84.5 9.19 70.83 3.86 83.36 -3.75 84.19 -18.41" />
            <polygon points="90.23 41.84 92.75 44 95.95 43.16 94.67 46.22 96.47 49.02 93.16 48.74 91.06 51.31 90.3 48.08 87.21 46.87 90.05 45.15 90.23 41.84" />
            <polygon points="45.58 -4.16 48.09 -2 51.3 -2.84 50.02 0.22 51.81 3.02 48.51 2.74 46.41 5.31 45.65 2.08 42.55 0.87 45.39 -0.85 45.58 -4.16" />
            <polygon points="-7.82 -18.41 3.3 -8.82 17.49 -12.55 11.82 0.99 19.76 13.34 5.14 12.12 -4.13 23.48 -7.5 9.19 -21.18 3.86 -8.64 -3.75 -7.82 -18.41" />
            <polygon points="-1.77 41.84 0.75 44 3.96 43.16 2.67 46.22 4.47 49.02 1.16 48.74 -0.94 51.31 -1.7 48.08 -4.79 46.87 -1.96 45.15 -1.77 41.84" />
          </g>
        </pattern>
        <filter id="insetShadow">
          <feOffset dx='0' dy='14' />
          <feGaussianBlur stdDeviation='5' result='offset-blur' />
          <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse' />
          <feFlood floodColor='black' floodOpacity='0.5' result='color' />
          <feComposite operator='in' in='color' in2='inverse' result='shadow' />
          <feComposite operator='over' in='shadow' in2='SourceGraphic' />
        </filter>
        <filter id="dropShadow" width="350%" height="350%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feFlood id="dropShadowAlpha" floodColor="#000" floodOpacity="0.4" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect filter="url(#insetShadow)" ref={toggleBgRef} x="321" y="263" width="158" height="74" rx="37" ry="37" fill="#B74452" />
      <rect filter="url(#baubleShadow)" ref={dotGroupRef} width="52" height="38" x="332" y="274" rx="26" ry="26" fill="#000" opacity="1" />
      <g>
        <g ref={dotLBgRef}>
          <path d="M355.68,270.7a3,3,0,0,1-.65-1.86,3,3,0,0,1,5.94,0,3,3,0,0,1-.65,1.86" fill="none" stroke="#DCA014" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M363.88,270.29H352.13a.87.87,0,0,0-.87.86v3.52a.87.87,0,0,0,1.73,0l10,.06h0a.87.87,0,0,0,1.73,0v-3.59A.87.87,0,0,0,363.88,270.29Z" fill="url(#baubleCapGrad)" />
          <circle cx="358" cy="300" r="26" fill="#FFFCF9" />
          <circle cx="358" cy="300" r="26" fill="url(#starPattern)" />
          <circle cx="358" cy="300" r="26.1" fill="url(#baubleGrad)" />
          <circle cx="358" cy="300" r="26" fill="url(#baubleShineGrad)" />
        </g>
      </g>
      <rect onClick={toggle} className="hit" x="321" y="263" width="158" height="74" rx="37" ry="37" fill="transparent" />
    </svg>
  );
};

export default BaubleToggle;`,
    props: [
      { name: "onToggleChange", type: "(isOn: boolean) => void", description: "bauble_toggle_prop_onToggleChange_desc", required: false },
      { name: "initialState", type: "boolean", defaultValue: "true", description: "bauble_toggle_prop_initialState_desc", required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: "login-form",
    title: "login_form_title",
    description: "login_form_desc",
    demoFullPage: LoginFormFullPageDemo,
    dependencies: `npm install framer-motion
[Chronicle Button](/components/chronicle-button)
[Floating Label Input](/components/floating-label-input)`,
    credit: `[Sign In](https://hextaui.com/docs/marketing/sign-in) by [HextaUI](https://hextaui.com)`,
    usage: `// Path to the "LoginForm.tsx" file
import LoginForm from '@/app/the-actual-components/login-form/LoginForm'

<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '36px',
    justifyContent: 'center',
  }}
>
  {/* 1. Default, no icon background */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
    <span
      style={{
        color: '#aaa',
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: 500,
        letterSpacing: '0.01em'
      }}
    >
      No icon outline
    </span>
    <LoginForm
      cardOutlineStyle="double-radius"
      iconUrl="https://raw.githubusercontent.com/Northstrix/namer-ui/refs/heads/main/screenshots/456x456px-logo.png"
      iconOutlineWidth="0px"
      iconPadding="0px"
      iconBackground="none"
      onSubmit={data => alert(JSON.stringify(data, null, 2))}
    />
  </div>
  
  {/* 2. Hebrew, custom color, no rounding */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
    <span
      style={{
        color: '#aaa',
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: 500,
        letterSpacing: '0.01em'
      }}
    >
      RTL, custom colors, no rounding, custom width
    </span>
    <LoginForm
      mode="signup"
      cardOutlineStyle="single-radius"
      cardRounding="0px"
      cardBorderWidth="2px"
      iconUrl="https://raw.githubusercontent.com/Northstrix/blueberry-loom/refs/heads/main/public/icon.webp"
      iconHref="https://blueberry-loom.netlify.app/"
      iconBackground="#fff"
      iconRounding="0px"
      iconOutlineWidth="2px"
      iconOutlineEnabled={true}
      floatingLabelInputProps={{
        accentColor: "#fff",
        inputFocusOutlineColor: "#7c3aed",
        outlineWidth: "2px",
        foregroundColor: "#fff",
        mutedForegroundColor: "#aaa",
        rounding: "0px",
        inputPadding: "16px",
        inputFontSize: "1.1rem",
        labelFontSize: "1.1rem",
        labelActiveFontSize: "13px",
        labelPadding: "0 8px",
        labelActivePadding: "0 7px",
        inputHeight: "48px",
      }}
      chronicleButtonProps={{
        hoverColor: "#7c3aed",
        hoverForeground: "#fff",
        borderRadius: "0px",
      }}
      buttonRounding="0px"
      titleFontSize="2.15rem"
      titleFontWeight={700}
      subtitleFontSize="1.01rem"
      subtitleFontWeight={500}
      switchFontSize="1.08rem"
      switchFontWeight={500}
      isRTL={true}
      logInTop="שלום!"
      register="וולקום!"
      signInToYourAccount="התחבר לחשבון שלך"
      createAnAccount="צור חשבון"
      emailLabel="אימייל"
      passwordLabel="סיסמה"
      confirmPasswordLabel="אשר סיסמה"
      noAccount="אין לך חשבון? "
      createOne="צור אחד"
      alreadyHaveAccount="כבר יש לך חשבון? "
      logInBottom="התחבר"
      loginButtonLabel="התחבר"
      registerButtonLabel="הירשם"
      switchToSignupLabel="צור אחד"
      switchToSigninLabel="התחבר"
      switchLinkHoverColor="#fff"
      containerStyle={{
        maxWidth: "340px"
      }}
      onSubmit={data => alert(JSON.stringify(data, null, 2))}
    />
  </div>

  {/* 3. Custom color, custom rounding */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
    <span
      style={{
        color: '#aaa',
        fontSize: '14px',
        marginBottom: '12px',
        fontWeight: 500,
        letterSpacing: '0.01em'
      }}
    >
      Custom colors, custom rounding, custom width
    </span>
    <LoginForm
      cardOutlineStyle="single-radius"
      cardRounding="18px"
      cardBorderWidth="2px"
      cardBorderColor="#00a0d8"
      cardHoverBorderColor="#7c3aed"
      cardBackground="#fff"
      iconUrl="https://raw.githubusercontent.com/Northstrix/blueberry-loom/refs/heads/main/public/icon.webp"
      iconHref="https://blueberry-loom.netlify.app/"
      iconOutlineEnabled={true}
      iconOutlineColor="#00a0d8"
      iconOutlineWidth="2px"
      iconHoverOutlineColor="#7c3aed"
      iconBackground="#fff"
      floatingLabelInputProps={{
        accentColor: "#222",
        parentBackground: "#fff",
        inputOutlineColor: "#00a0d8",
        inputFocusOutlineColor: "#7c3aed",
        outlineWidth: "2px",
        foregroundColor: "#222",
        mutedForegroundColor: "#666",
        rounding: "10px",
        inputPadding: "18px",
        inputFontSize: "1.12rem",
        labelFontSize: "1.12rem",
        labelActiveFontSize: "13px",
        labelPadding: "0 10px",
        labelActivePadding: "0 9px",
        inputHeight: "52px",
      }}
      chronicleButtonProps={{
        customBackground: "#00a0d8",
        customForeground: "#fff",
        hoverColor: "#7c3aed",
        hoverForeground: "#fff",
        borderRadius: "10px",
        fontSize: "1.12rem",
        fontFamily: "inherit",
      }}
      buttonRounding="10px"
      titleFontSize="2.3rem"
      titleFontWeight={800}
      subtitleFontSize="1.08rem"
      subtitleFontWeight={500}
      switchFontSize="1.08rem"
      switchFontWeight={500}
      logInTop="Light Login"
      register="Light Register"
      signInToYourAccount="Sign in to your light account"
      createAnAccount="Create a light account"
      loginButtonLabel="Sign in"
      registerButtonLabel="Sign up"
      switchToSignupLabel="Sign up here"
      switchToSigninLabel="Sign in here"
      titleColor="#1a1a1a"
      subtitleColor="#444"
      switchColor="#00a0d8"
      switchLinkHoverColor="#7c3aed"
      containerStyle={{
        maxWidth: "414px"
      }}
      onSubmit={data => alert(JSON.stringify(data, null, 2))}
    />
  </div>
</div>`,
    code: `"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import FloatingLabelInput, { FloatingLabelInputProps } from "@/app/the-actual-components/floating-label-input/FloatingLabelInput";
import ChronicleButton from "@/app/the-actual-components/chronicle-button/ChronicleButton";
import { AnimatePresence, motion } from "framer-motion";

export interface LoginFormProps {
  mode?: "signin" | "signup";
  onModeChange?: (mode: "signin" | "signup") => void;
  onSubmit?: (data: { mode: "signin" | "signup"; email: string; password: string; confirmPassword?: string }) => void;
  isRTL?: boolean;
  // Card container
  cardBackground?: string;
  cardBorderColor?: string;
  cardBorderWidth?: string;
  cardRounding?: string;
  cardDoubleOuterRounding?: string;
  cardDoubleInnerRounding?: string;
  cardDoubleBorderWidth?: string;
  cardWidth?: number | string;
  cardPadding?: string;
  cardOutlineStyle?: "single-radius" | "double-radius";
  cardBorderTransition?: string;
  cardDoubleBorderTransitionDuration?: number;
  cardBorderEasing?: string;
  cardHoverBorderColor?: string;
  aspectRatio?: string;
  containerStyle?: React.CSSProperties;
  // Icon
  iconUrl?: string;
  iconBackground?: string;
  iconRounding?: string;
  iconOutlineColor?: string;
  iconOutlineWidth?: string;
  iconPadding?: string;
  iconMargin?: string;
  iconOutlineEnabled?: boolean;
  iconHoverOutlineColor?: string;
  iconHref?: string;
  onIconClick?: (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => void;
  // FloatingLabelInput customization
  floatingLabelInputProps?: Partial<FloatingLabelInputProps>;
  // ChronicleButton customization
  chronicleButtonProps?: any;
  buttonRounding?: string;
  // Font customization
  titleFontSize?: string;
  titleFontWeight?: number | string;
  subtitleFontSize?: string;
  subtitleFontWeight?: number | string;
  switchFontSize?: string;
  switchFontWeight?: number | string;
  // Foreground color customization for inscriptions
  titleColor?: string;
  subtitleColor?: string;
  switchColor?: string;
  // Switch link hover customization
  switchLinkHoverColor?: string; // <-- NEW
  switchLinkHoverTransition?: string; // <-- NEW
  // Text labels
  logInTop?: string;
  register?: string;
  signInToYourAccount?: string;
  createAnAccount?: string;
  emailLabel?: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  noAccount?: string;
  createOne?: string;
  alreadyHaveAccount?: string;
  logInBottom?: string;
  loginButtonLabel?: string;
  registerButtonLabel?: string;
  switchToSignupLabel?: string;
  switchToSigninLabel?: string;
}

const DEFAULTS = {
  cardBackground: "#161616",
  cardBorderColor: "#2e2e2e",
  cardBorderWidth: "1px",
  cardRounding: "22px",
  cardDoubleOuterRounding: "18.2px",
  cardDoubleInnerRounding: "18px",
  cardDoubleBorderWidth: "1px",
  cardWidth: 374,
  cardPadding: "2.25rem 2.2rem",
  cardOutlineStyle: "single-radius",
  cardBorderTransition: "0.3s",
  cardDoubleBorderTransitionDuration: 0.3,
  cardBorderEasing: "ease-in-out",
  cardHoverBorderColor: "#363636",
  aspectRatio: undefined,
  containerStyle: {} as React.CSSProperties,
  iconUrl: "/icon.webp",
  iconBackground: "#fff",
  iconRounding: "12px",
  iconOutlineColor: "#2e2e2e",
  iconOutlineWidth: "1.5px",
  iconPadding: "3px",
  iconMargin: "0 0 24px 0",
  iconOutlineEnabled: true,
  iconHoverOutlineColor: "#363636",
  iconHref: "/",
  buttonRounding: "8px",
  // Font defaults
  titleFontSize: "2.25rem",
  titleFontWeight: 700,
  subtitleFontSize: "16px",
  subtitleFontWeight: 400,
  switchFontSize: "1rem",
  switchFontWeight: 400,
  // Foreground color defaults
  titleColor: undefined,
  subtitleColor: undefined,
  switchColor: undefined,
  // Switch link hover
  switchLinkHoverColor: "#00a0d8", // <-- NEW
  switchLinkHoverTransition: "color 0.3s ease-in-out", // <-- NEW
  // Texts
  logInTop: "Hello!",
  register: "Welcome!",
  signInToYourAccount: "Sign in to your account",
  createAnAccount: "Create an account",
  emailLabel: "Email",
  passwordLabel: "Password",
  confirmPasswordLabel: "Confirm Password",
  noAccount: "No account?",
  createOne: "Create one",
  alreadyHaveAccount: "Already have an account?",
  logInBottom: "Sign in",
  loginButtonLabel: "Sign in",
  registerButtonLabel: "Sign up",
  switchToSignupLabel: "Create one",
  switchToSigninLabel: "Sign in",
};

const ANIMATION_DURATION = 0.3;
const formVariants = {
  initial: { opacity: 1, filter: "blur(0px)", height: "auto" },
  blurOut: { opacity: 0, filter: "blur(12px)", height: 0, transition: { duration: ANIMATION_DURATION } },
  blurIn: { opacity: 1, filter: "blur(0px)", height: "auto", transition: { duration: ANIMATION_DURATION } },
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const {
    mode = "signin",
    onModeChange,
    onSubmit,
    isRTL = false,
    cardBackground = DEFAULTS.cardBackground,
    cardBorderColor = DEFAULTS.cardBorderColor,
    cardBorderWidth = DEFAULTS.cardBorderWidth,
    cardRounding = DEFAULTS.cardRounding,
    cardDoubleOuterRounding = DEFAULTS.cardDoubleOuterRounding,
    cardDoubleInnerRounding = DEFAULTS.cardDoubleInnerRounding,
    cardDoubleBorderWidth = DEFAULTS.cardDoubleBorderWidth,
    cardWidth = DEFAULTS.cardWidth,
    cardPadding = DEFAULTS.cardPadding,
    cardOutlineStyle = DEFAULTS.cardOutlineStyle,
    cardBorderTransition = DEFAULTS.cardBorderTransition,
    cardDoubleBorderTransitionDuration = DEFAULTS.cardDoubleBorderTransitionDuration,
    cardBorderEasing = DEFAULTS.cardBorderEasing,
    cardHoverBorderColor = DEFAULTS.cardHoverBorderColor,
    aspectRatio = DEFAULTS.aspectRatio,
    containerStyle = DEFAULTS.containerStyle,
    iconUrl = DEFAULTS.iconUrl,
    iconBackground = DEFAULTS.iconBackground,
    iconRounding = DEFAULTS.iconRounding,
    iconOutlineColor = DEFAULTS.iconOutlineColor,
    iconOutlineWidth = DEFAULTS.iconOutlineWidth,
    iconPadding = DEFAULTS.iconPadding,
    iconMargin = DEFAULTS.iconMargin,
    iconOutlineEnabled = DEFAULTS.iconOutlineEnabled,
    iconHoverOutlineColor = DEFAULTS.iconHoverOutlineColor,
    iconHref = DEFAULTS.iconHref,
    onIconClick,
    floatingLabelInputProps = {},
    chronicleButtonProps = {},
    buttonRounding = DEFAULTS.buttonRounding,
    titleFontSize = DEFAULTS.titleFontSize,
    titleFontWeight = DEFAULTS.titleFontWeight,
    subtitleFontSize = DEFAULTS.subtitleFontSize,
    subtitleFontWeight = DEFAULTS.subtitleFontWeight,
    switchFontSize = DEFAULTS.switchFontSize,
    switchFontWeight = DEFAULTS.switchFontWeight,
    titleColor = DEFAULTS.titleColor,
    subtitleColor = DEFAULTS.subtitleColor,
    switchColor = DEFAULTS.switchColor,
    switchLinkHoverColor = DEFAULTS.switchLinkHoverColor, // <-- NEW
    switchLinkHoverTransition = DEFAULTS.switchLinkHoverTransition, // <-- NEW
    logInTop = DEFAULTS.logInTop,
    register = DEFAULTS.register,
    signInToYourAccount = DEFAULTS.signInToYourAccount,
    createAnAccount = DEFAULTS.createAnAccount,
    emailLabel = DEFAULTS.emailLabel,
    passwordLabel = DEFAULTS.passwordLabel,
    confirmPasswordLabel = DEFAULTS.confirmPasswordLabel,
    noAccount = DEFAULTS.noAccount,
    createOne = DEFAULTS.createOne,
    alreadyHaveAccount = DEFAULTS.alreadyHaveAccount,
    logInBottom = DEFAULTS.logInBottom,
    loginButtonLabel = DEFAULTS.loginButtonLabel,
    registerButtonLabel = DEFAULTS.registerButtonLabel,
    switchToSignupLabel = DEFAULTS.switchToSignupLabel,
    switchToSigninLabel = DEFAULTS.switchToSigninLabel,
  } = props;

  // State
  const [displayMode, setDisplayMode] = useState<"signin" | "signup">(mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showContent, setShowContent] = useState(true);
  const nextModeRef = useRef<"signin" | "signup">(mode);
  const [hovered, setHovered] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);

  // --- New: link hover state ---
  const [switchLinkHovered, setSwitchLinkHovered] = useState<"signup" | "signin" | null>(null);

  useEffect(() => {
    setDisplayMode(mode);
    nextModeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirm("");
  }, [displayMode]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.({
        mode: displayMode,
        email,
        password,
        ...(displayMode === "signup" ? { confirmPassword: confirm } : {}),
      });
    },
    [onSubmit, displayMode, email, password, confirm]
  );

  const handleButtonClick = () => {
    handleSubmit(new Event("submit") as any); // or just handleSubmit({} as any)
  };

  const handleModeSwitch = useCallback(
    (targetMode: "signin" | "signup") => {
      if (targetMode === displayMode) return;
      setShowContent(false);
      nextModeRef.current = targetMode;
    },
    [displayMode]
  );

  const handleExited = useCallback(() => {
    setDisplayMode(nextModeRef.current);
    setShowContent(true);
    if (nextModeRef.current !== mode) {
      onModeChange?.(nextModeRef.current);
    }
  }, [mode, onModeChange]);

  // --- Smooth transition for border color and background ---
  const transitionDuration = 300;
  const borderTransition = cardBorderTransition || \`background \${transitionDuration}ms \${cardBorderEasing}, border-color \${transitionDuration}ms \${cardBorderEasing}, color \${transitionDuration}ms \${cardBorderEasing}\`;

  // --- Card style ---
  const outerCardStyle: React.CSSProperties = cardOutlineStyle === "double-radius"
    ? {
        borderRadius: cardDoubleOuterRounding,
        padding: cardDoubleBorderWidth,
        background: hovered ? cardHoverBorderColor : cardBorderColor,
        display: "inline-block",
        width: typeof cardWidth === "number" ? \`\${cardWidth}px\` : cardWidth,
        aspectRatio: aspectRatio,
        transition: \`background \${cardDoubleBorderTransitionDuration ?? 0.3}s ease-in-out\`,
        boxSizing: "border-box",
        maxWidth: containerStyle.maxWidth ?? "374px",
        ...containerStyle,
      }
    : {
        background: cardBackground,
        borderWidth: cardBorderWidth,
        borderStyle: "solid",
        borderColor: hovered ? cardHoverBorderColor : cardBorderColor,
        borderRadius: cardRounding,
        padding: cardPadding,
        margin: 0,
        width: typeof cardWidth === "number" ? \`\${cardWidth}px\` : cardWidth,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: \`border-color \${cardBorderTransition ?? "0.3s"} ease-in-out\`,
        maxWidth: containerStyle.maxWidth ?? "374px",
        ...containerStyle,
      };

  const innerCardStyle: React.CSSProperties = cardOutlineStyle === "double-radius"
    ? {
        background: cardBackground,
        borderRadius: cardDoubleInnerRounding,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: cardPadding,
        boxSizing: "border-box",
        transition: borderTransition,
      }
    : {};

  // --- Icon outline color logic for hover ---
  const iconOutlineColorToUse = iconHovered && iconHoverOutlineColor ? iconHoverOutlineColor : iconOutlineColor;

  // --- Icon style ---
  const iconStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3rem",
    height: "3rem",
    borderRadius: iconRounding,
    background: iconBackground,
    margin: iconMargin,
    cursor: "pointer",
    overflow: "hidden",
    border: iconOutlineEnabled ? \`\${iconOutlineWidth} solid \${iconOutlineColorToUse}\` : "none",
    padding: iconOutlineEnabled ? iconPadding : 0,
    boxSizing: "border-box",
    transition: borderTransition,
    alignSelf: "center",
  };

  const effectiveTitleColor = titleColor ?? (cardBackground === "#fff" ? "#111" : "#fff");
  const effectiveSubtitleColor = subtitleColor ?? (cardBackground === "#fff" ? "#444" : "#aaa");
  const effectiveSwitchColor = switchColor ?? (cardBackground === "#fff" ? "#222" : "#fff");
  const effectiveSwitchLinkHoverColor = switchLinkHoverColor ?? "#00a0d8";
  const effectiveSwitchLinkHoverTransition = switchLinkHoverTransition ?? "color 0.3s ease-in-out";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        direction: isRTL ? "rtl" : "ltr",
        overflow: "visible",
        width: "100%",
      }}
    >
      <div
        style={outerCardStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {cardOutlineStyle === "double-radius" ? (
          <div style={innerCardStyle}>
            {/* Icon */}
            {iconHref ? (
              <a
                href={iconHref}
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
                tabIndex={0}
                onClick={onIconClick}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                <img
                  src={iconUrl}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                  draggable={false}
                />
              </a>
            ) : (
              <div
                style={iconStyle}
                tabIndex={0}
                onClick={onIconClick}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                <img
                  src={iconUrl}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                  draggable={false}
                />
              </div>
            )}
            <AnimatePresence mode="wait" initial={false} onExitComplete={handleExited}>
              {showContent && (
                <>
                  <motion.h1
                    key={\`title-\${displayMode}\`}
                    className="mb-2 text-white text-center"
                    style={{
                      fontSize: titleFontSize,
                      fontWeight: titleFontWeight,
                      letterSpacing: "-0.01em",
                      color: effectiveTitleColor,
                    }}
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                  >
                    {displayMode === "signin" ? logInTop : register}
                  </motion.h1>
                  <motion.p
                    key={\`subtitle-\${displayMode}\`}
                    className="mb-7 text-center"
                    style={{
                      fontSize: subtitleFontSize,
                      fontWeight: subtitleFontWeight,
                      color: effectiveSubtitleColor,
                      lineHeight: 1.5,
                    }}
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                  >
                    {displayMode === "signin"
                      ? signInToYourAccount
                      : createAnAccount}
                  </motion.p>
                  <motion.form
                    key={\`form-\${displayMode}\`}
                    className="flex flex-col w-full"
                    onSubmit={handleSubmit}
                    autoComplete="on"
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                    style={{ minHeight: "0" }}
                  >
                    <FloatingLabelInput
                      label={emailLabel}
                      value={email}
                      onValueChange={setEmail}
                      autoComplete="email"
                      type="email"
                      rounding={floatingLabelInputProps.rounding ?? "8px"}
                      parentBackground={cardBackground}
                      isRTL={isRTL}
                      {...floatingLabelInputProps}
                    />
                    <FloatingLabelInput
                      label={passwordLabel}
                      value={password}
                      onValueChange={setPassword}
                      autoComplete={
                        displayMode === "signin"
                          ? "current-password"
                          : "new-password"
                      }
                      type="password"
                      rounding={floatingLabelInputProps.rounding ?? "8px"}
                      parentBackground={cardBackground}
                      isRTL={isRTL}
                      {...floatingLabelInputProps}
                    />
                    {displayMode === "signup" && (
                      <FloatingLabelInput
                        label={confirmPasswordLabel}
                        value={confirm}
                        onValueChange={setConfirm}
                        autoComplete="new-password"
                        type="password"
                        rounding={floatingLabelInputProps.rounding ?? "8px"}
                        parentBackground={cardBackground}
                        isRTL={isRTL}
                        {...floatingLabelInputProps}
                      />
                    )}
                    <ChronicleButton
                      text={
                        displayMode === "signin"
                          ? loginButtonLabel
                          : registerButtonLabel
                      }
                      onClick={handleButtonClick}
                      width={chronicleButtonProps.width ?? "100%"}
                      hoverColor={chronicleButtonProps.hoverColor ?? "#00a0d8"}
                      hoverForeground={chronicleButtonProps.hoverForeground ?? "#fff"}
                      outlined={chronicleButtonProps.outlined}
                      outlinePaddingAdjustment={
                        chronicleButtonProps.outlinePaddingAdjustment
                      }
                      borderRadius={
                        chronicleButtonProps.borderRadius ?? buttonRounding
                      }
                      fontFamily={chronicleButtonProps.fontFamily}
                      outlinedButtonBackgroundOnHover={
                        chronicleButtonProps.outlinedButtonBackgroundOnHover
                      }
                      customBackground={chronicleButtonProps.customBackground ?? "#fff"}
                      customForeground={chronicleButtonProps.customForeground ?? "#0a0a0a"}
                      fontSize={chronicleButtonProps.fontSize}
                      lineHeight={chronicleButtonProps.lineHeight}
                      outlineBorderWidth={chronicleButtonProps.outlineBorderWidth}
                      padding={chronicleButtonProps.padding}
                    />
                  </motion.form>
                  <motion.div
                    key={\`switch-\${displayMode}\`}
                    className="w-full text-center mt-5"
                    style={{
                      fontSize: switchFontSize,
                      fontWeight: switchFontWeight,
                    }}
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                  >
                    {displayMode === "signin" ? (
                      <span className="text-sm" style={{ color: effectiveSubtitleColor }}>
                        {noAccount}{" "}
                        <span
                          className="underline cursor-pointer ml-1"
                          style={{
                            color:
                              switchLinkHovered === "signup"
                                ? effectiveSwitchLinkHoverColor
                                : effectiveSwitchColor,
                            transition: effectiveSwitchLinkHoverTransition,
                          }}
                          tabIndex={0}
                          onClick={() => handleModeSwitch("signup")}
                          onMouseEnter={() => setSwitchLinkHovered("signup")}
                          onMouseLeave={() => setSwitchLinkHovered(null)}
                        >
                          {switchToSignupLabel}
                        </span>
                      </span>
                    ) : (
                      <span className="text-sm" style={{ color: effectiveSubtitleColor }}>
                        {alreadyHaveAccount}{" "}
                        <span
                          className="underline cursor-pointer ml-1"
                          style={{
                            color:
                              switchLinkHovered === "signin"
                                ? effectiveSwitchLinkHoverColor
                                : effectiveSwitchColor,
                            transition: effectiveSwitchLinkHoverTransition,
                          }}
                          tabIndex={0}
                          onClick={() => handleModeSwitch("signin")}
                          onMouseEnter={() => setSwitchLinkHovered("signin")}
                          onMouseLeave={() => setSwitchLinkHovered(null)}
                        >
                          {switchToSigninLabel}
                        </span>
                      </span>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        ) : (
          // Single-radius, original style
          <>
            {/* Icon */}
            {iconHref ? (
              <a
                href={iconHref}
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
                tabIndex={0}
                onClick={onIconClick}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                <img
                  src={iconUrl}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                  draggable={false}
                />
              </a>
            ) : (
              <div
                style={iconStyle}
                tabIndex={0}
                onClick={onIconClick}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                <img
                  src={iconUrl}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                  draggable={false}
                />
              </div>
            )}
            <AnimatePresence mode="wait" initial={false} onExitComplete={handleExited}>
              {showContent && (
                <>
                  <motion.h1
                    key={\`title-\${displayMode}\`}
                    className="mb-2 text-white text-center"
                    style={{
                      fontSize: titleFontSize,
                      fontWeight: titleFontWeight,
                      letterSpacing: "-0.01em",
                      color: effectiveTitleColor,
                    }}
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                  >
                    {displayMode === "signin" ? logInTop : register}
                  </motion.h1>
                  <motion.p
                    key={\`subtitle-\${displayMode}\`}
                    className="mb-7 text-center"
                    style={{
                      fontSize: subtitleFontSize,
                      fontWeight: subtitleFontWeight,
                      color: effectiveSubtitleColor,
                      lineHeight: 1.5,
                    }}
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                  >
                    {displayMode === "signin"
                      ? signInToYourAccount
                      : createAnAccount}
                  </motion.p>
                  <motion.form
                    key={\`form-\${displayMode}\`}
                    className="flex flex-col w-full"
                    onSubmit={handleSubmit}
                    autoComplete="on"
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                    style={{ minHeight: "0" }}
                  >
                    <FloatingLabelInput
                      label={emailLabel}
                      value={email}
                      onValueChange={setEmail}
                      autoComplete="email"
                      type="email"
                      rounding={floatingLabelInputProps.rounding ?? "8px"}
                      parentBackground={cardBackground}
                      isRTL={isRTL}
                      {...floatingLabelInputProps}
                    />
                    <FloatingLabelInput
                      label={passwordLabel}
                      value={password}
                      onValueChange={setPassword}
                      autoComplete={
                        displayMode === "signin"
                          ? "current-password"
                          : "new-password"
                      }
                      type="password"
                      rounding={floatingLabelInputProps.rounding ?? "8px"}
                      parentBackground={cardBackground}
                      isRTL={isRTL}
                      {...floatingLabelInputProps}
                    />
                    {displayMode === "signup" && (
                      <FloatingLabelInput
                        label={confirmPasswordLabel}
                        value={confirm}
                        onValueChange={setConfirm}
                        autoComplete="new-password"
                        type="password"
                        rounding={floatingLabelInputProps.rounding ?? "8px"}
                        parentBackground={cardBackground}
                        isRTL={isRTL}
                        {...floatingLabelInputProps}
                      />
                    )}
                    <ChronicleButton
                      text={
                        displayMode === "signin"
                          ? loginButtonLabel
                          : registerButtonLabel
                      }
                      onClick={handleButtonClick}
                      width={chronicleButtonProps.width ?? "100%"}
                      hoverColor={chronicleButtonProps.hoverColor ?? "#00a0d8"}
                      hoverForeground={chronicleButtonProps.hoverForeground ?? "#fff"}
                      outlined={chronicleButtonProps.outlined}
                      outlinePaddingAdjustment={
                        chronicleButtonProps.outlinePaddingAdjustment
                      }
                      borderRadius={
                        chronicleButtonProps.borderRadius ?? buttonRounding
                      }
                      fontFamily={chronicleButtonProps.fontFamily}
                      outlinedButtonBackgroundOnHover={
                        chronicleButtonProps.outlinedButtonBackgroundOnHover
                      }
                      customBackground={chronicleButtonProps.customBackground ?? "#fff"}
                      customForeground={chronicleButtonProps.customForeground ?? "#0a0a0a"}
                      fontSize={chronicleButtonProps.fontSize}
                      lineHeight={chronicleButtonProps.lineHeight}
                      outlineBorderWidth={chronicleButtonProps.outlineBorderWidth}
                      padding={chronicleButtonProps.padding}
                    />
                  </motion.form>
                  <motion.div
                    key={\`switch-\${displayMode}\`}
                    className="w-full text-center mt-5"
                    style={{
                      fontSize: switchFontSize,
                      fontWeight: switchFontWeight,
                    }}
                    initial="blurOut"
                    animate="blurIn"
                    exit="blurOut"
                    variants={formVariants}
                  >
                    {displayMode === "signin" ? (
                      <span className="text-sm" style={{ color: effectiveSubtitleColor }}>
                        {noAccount}{" "}
                        <span
                          className="underline cursor-pointer ml-1"
                          style={{
                            color:
                              switchLinkHovered === "signup"
                                ? effectiveSwitchLinkHoverColor
                                : effectiveSwitchColor,
                            transition: effectiveSwitchLinkHoverTransition,
                          }}
                          tabIndex={0}
                          onClick={() => handleModeSwitch("signup")}
                          onMouseEnter={() => setSwitchLinkHovered("signup")}
                          onMouseLeave={() => setSwitchLinkHovered(null)}
                        >
                          {switchToSignupLabel}
                        </span>
                      </span>
                    ) : (
                      <span className="text-sm" style={{ color: effectiveSubtitleColor }}>
                        {alreadyHaveAccount}{" "}
                        <span
                          className="underline cursor-pointer ml-1"
                          style={{
                            color:
                              switchLinkHovered === "signin"
                                ? effectiveSwitchLinkHoverColor
                                : effectiveSwitchColor,
                            transition: effectiveSwitchLinkHoverTransition,
                          }}
                          tabIndex={0}
                          onClick={() => handleModeSwitch("signin")}
                          onMouseEnter={() => setSwitchLinkHovered("signin")}
                          onMouseLeave={() => setSwitchLinkHovered(null)}
                        >
                          {switchToSigninLabel}
                        </span>
                      </span>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
`,
    props: [
      { name: 'mode', type: '"signin" | "signup"', defaultValue: '"signin"', description: 'login_form_prop_mode', required: false },
      { name: 'onModeChange', type: '(mode: "signin" | "signup") => void', description: 'login_form_prop_onModeChange', required: false },
      { name: 'onSubmit', type: '(data: { mode: "signin" | "signup"; email: string; password: string; confirmPassword?: string }) => void', description: 'login_form_prop_onSubmit', required: false },
      { name: 'isRTL', type: 'boolean', defaultValue: 'false', description: 'login_form_prop_isRTL', required: false },
      { name: 'cardBackground', type: 'string', defaultValue: '"#161616"', description: 'login_form_prop_cardBackground', required: false },
      { name: 'cardBorderColor', type: 'string', defaultValue: '"#2e2e2e"', description: 'login_form_prop_cardBorderColor', required: false },
      { name: 'cardBorderWidth', type: 'string', defaultValue: '"1px"', description: 'login_form_prop_cardBorderWidth', required: false },
      { name: 'cardRounding', type: 'string', defaultValue: '"22px"', description: 'login_form_prop_cardRounding', required: false },
      { name: 'cardDoubleOuterRounding', type: 'string', defaultValue: '"18.2px"', description: 'login_form_prop_cardDoubleOuterRounding', required: false },
      { name: 'cardDoubleInnerRounding', type: 'string', defaultValue: '"18px"', description: 'login_form_prop_cardDoubleInnerRounding', required: false },
      { name: 'cardDoubleBorderWidth', type: 'string', defaultValue: '"1px"', description: 'login_form_prop_cardDoubleBorderWidth', required: false },
      { name: 'cardWidth', type: 'number | string', defaultValue: '374', description: 'login_form_prop_cardWidth', required: false },
      { name: 'cardPadding', type: 'string', defaultValue: '"2.25rem 2.2rem"', description: 'login_form_prop_cardPadding', required: false },
      { name: 'cardOutlineStyle', type: '"single-radius" | "double-radius"', defaultValue: '"single-radius"', description: 'login_form_prop_cardOutlineStyle', required: false },
      { name: 'cardBorderTransition', type: 'string', defaultValue: '"0.3s"', description: 'login_form_prop_cardBorderTransition', required: false },
      { name: 'cardDoubleBorderTransitionDuration', type: 'number', defaultValue: '0.3', description: 'login_form_prop_cardDoubleBorderTransitionDuration', required: false },
      { name: 'cardBorderEasing', type: 'string', defaultValue: '"ease-in-out"', description: 'login_form_prop_cardBorderEasing', required: false },
      { name: 'cardHoverBorderColor', type: 'string', defaultValue: '"#363636"', description: 'login_form_prop_cardHoverBorderColor', required: false },
      { name: 'aspectRatio', type: 'string', defaultValue: 'undefined', description: 'login_form_prop_aspectRatio', required: false },
      { name: 'containerStyle', type: 'React.CSSProperties', defaultValue: '{}', description: 'login_form_prop_containerStyle', required: false },
      { name: 'iconUrl', type: 'string', defaultValue: '"/icon.webp"', description: 'login_form_prop_iconUrl', required: false },
      { name: 'iconBackground', type: 'string', defaultValue: '"#fff"', description: 'login_form_prop_iconBackground', required: false },
      { name: 'iconRounding', type: 'string', defaultValue: '"12px"', description: 'login_form_prop_iconRounding', required: false },
      { name: 'iconOutlineColor', type: 'string', defaultValue: '"#2e2e2e"', description: 'login_form_prop_iconOutlineColor', required: false },
      { name: 'iconOutlineWidth', type: 'string', defaultValue: '"1.5px"', description: 'login_form_prop_iconOutlineWidth', required: false },
      { name: 'iconPadding', type: 'string', defaultValue: '"3px"', description: 'login_form_prop_iconPadding', required: false },
      { name: 'iconMargin', type: 'string', defaultValue: '"0 0 24px 0"', description: 'login_form_prop_iconMargin', required: false },
      { name: 'iconOutlineEnabled', type: 'boolean', defaultValue: 'true', description: 'login_form_prop_iconOutlineEnabled', required: false },
      { name: 'iconHoverOutlineColor', type: 'string', defaultValue: '"#363636"', description: 'login_form_prop_iconHoverOutlineColor', required: false },
      { name: 'iconHref', type: 'string', defaultValue: '"/"', description: 'login_form_prop_iconHref', required: false },
      { name: 'onIconClick', type: '(event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void', description: 'login_form_prop_onIconClick', required: false },
      { name: 'floatingLabelInputProps', type: 'Partial<FloatingLabelInputProps>', defaultValue: '{}', description: 'login_form_prop_floatingLabelInputProps', required: false },
      { name: 'chronicleButtonProps', type: 'any', defaultValue: '{}', description: 'login_form_prop_chronicleButtonProps', required: false },
      { name: 'buttonRounding', type: 'string', defaultValue: '"8px"', description: 'login_form_prop_buttonRounding', required: false },
      { name: 'titleFontSize', type: 'string', defaultValue: '"2.25rem"', description: 'login_form_prop_titleFontSize', required: false },
      { name: 'titleFontWeight', type: 'number | string', defaultValue: '700', description: 'login_form_prop_titleFontWeight', required: false },
      { name: 'subtitleFontSize', type: 'string', defaultValue: '"16px"', description: 'login_form_prop_subtitleFontSize', required: false },
      { name: 'subtitleFontWeight', type: 'number | string', defaultValue: '400', description: 'login_form_prop_subtitleFontWeight', required: false },
      { name: 'switchFontSize', type: 'string', defaultValue: '"1rem"', description: 'login_form_prop_switchFontSize', required: false },
      { name: 'switchFontWeight', type: 'number | string', defaultValue: '400', description: 'login_form_prop_switchFontWeight', required: false },
      { name: 'titleColor', type: 'string', description: 'login_form_prop_titleColor', required: false },
      { name: 'subtitleColor', type: 'string', description: 'login_form_prop_subtitleColor', required: false },
      { name: 'switchColor', type: 'string', description: 'login_form_prop_switchColor', required: false },
      { name: 'switchLinkHoverColor', type: 'string', defaultValue: '"#00a0d8"', description: 'login_form_prop_switchLinkHoverColor', required: false },
      { name: 'switchLinkHoverTransition', type: 'string', defaultValue: '"color 0.3s ease-in-out"', description: 'login_form_prop_switchLinkHoverTransition', required: false },
      { name: 'logInTop', type: 'string', defaultValue: '"Hello!"', description: 'login_form_prop_logInTop', required: false },
      { name: 'register', type: 'string', defaultValue: '"Welcome!"', description: 'login_form_prop_register', required: false },
      { name: 'signInToYourAccount', type: 'string', defaultValue: '"Sign in to your account"', description: 'login_form_prop_signInToYourAccount', required: false },
      { name: 'createAnAccount', type: 'string', defaultValue: '"Create an account"', description: 'login_form_prop_createAnAccount', required: false },
      { name: 'emailLabel', type: 'string', defaultValue: '"Email"', description: 'login_form_prop_emailLabel', required: false },
      { name: 'passwordLabel', type: 'string', defaultValue: '"Password"', description: 'login_form_prop_passwordLabel', required: false },
      { name: 'confirmPasswordLabel', type: 'string', defaultValue: '"Confirm Password"', description: 'login_form_prop_confirmPasswordLabel', required: false },
      { name: 'noAccount', type: 'string', defaultValue: '"No account?"', description: 'login_form_prop_noAccount', required: false },
      { name: 'createOne', type: 'string', defaultValue: '"Create one"', description: 'login_form_prop_createOne', required: false },
      { name: 'alreadyHaveAccount', type: 'string', defaultValue: '"Already have an account?"', description: 'login_form_prop_alreadyHaveAccount', required: false },
      { name: 'logInBottom', type: 'string', defaultValue: '"Sign in"', description: 'login_form_prop_logInBottom', required: false },
      { name: 'loginButtonLabel', type: 'string', defaultValue: '"Sign in"', description: 'login_form_prop_loginButtonLabel', required: false },
      { name: 'registerButtonLabel', type: 'string', defaultValue: '"Sign up"', description: 'login_form_prop_registerButtonLabel', required: false },
      { name: 'switchToSignupLabel', type: 'string', defaultValue: '"Create one"', description: 'login_form_prop_switchToSignupLabel', required: false },
      { name: 'switchToSigninLabel', type: 'string', defaultValue: '"Sign in"', description: 'login_form_prop_switchToSigninLabel', required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: "animated-testimonials",
    title: "animated_testimonials_title",
    description: "animated_testimonials_desc",

    demoFullPage: AnimatedTestimonialsFullPageDemo,
    noPadding: true,
    dependencies: `npm install framer-motion
npm install @tabler/icons-react --legacy-peer-deps`,
    disclaimer: 'animated_testimonials_disclaimer',
    credit: `[Animated Testimonials](https://ui.aceternity.com/components/animated-testimonials) by [Aceternity UI](https://ui.aceternity.com/)
[Text Reveal Animation](https://codepen.io/swatiparge/pen/LYVMEag) by [Swati Parge](https://codepen.io/swatiparge)

Used photos:

- Photo by [Ilya Pavlov](https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/woman-standing-beside-lights-xE87C_OvVO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Bave Pictures](https://unsplash.com/@bavepictures?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-in-gray-crew-neck-t-shirt-standing-beside-white-wall-MbYgpI1D-cA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Allef Vinicius](https://unsplash.com/@seteph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/closed-eye-woman-wearing-brown-hat-YbzfTr0pwLE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)`,
    usage: `// Path to the "AnimatedTestimonials.tsx" file

import AnimatedTestimonials from "@/app/the-actual-components/animated-testimonials/AnimatedTestimonials";

export default function AnimatedTestimonialsDemo() {
  return (
    <div className="w-full flex flex-col gap-16">
      
      {/* ================= LIGHT THEME ================= */}
      <div className="bg-[#f1f1f7] z-10 p-20 rounded-lg min-h-[300px] flex items-center justify-center relative">
        <div
          className="flex items-center justify-center relative"
          style={{ maxWidth: "1456px" }}
        >
          <AnimatedTestimonials
            testimonials={[
              {
                quote:
                  "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
                name: "Tamar Mendelson",
                designation: "Restaurant Critic",
                src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
              },
              {
                quote:
                  "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
                name: "Joe Charlescraft",
                designation: "Frequent Visitor",
                src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
              },
              {
                quote:
                  "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
                name: "Martina Edelweist",
                designation: "Satisfied Customer",
                src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
              },
            ]}
            colors={{
              name: "#0a0a0a",
              position: "#454545",
              testimony: "#171717",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverForeground: "#00A6FB",
            }}
            desktopVersionBottomThreshold={1024}
            fontSizes={{
              name: "28px",
              position: "20px",
              testimony: "20px",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "10px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            imageAspectRatio={1.05}
          />
        </div>
      </div>

      {/* ================= DARK THEME ================= */}
      <div className="bg-[#050505] z-10 p-16 rounded-lg min-h-[300px] flex items-center justify-center relative">
        <div
          className="flex items-center justify-center relative"
          style={{ maxWidth: "1024px" }}
        >
          <AnimatedTestimonials
            testimonials={[
              {
                quote:
                  "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
                name: "Tamar Mendelson",
                designation: "Restaurant Critic",
                src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
              },
              {
                quote:
                  "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
                name: "Joe Charlescraft",
                designation: "Frequent Visitor",
                src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
              },
              {
                quote:
                  "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
                name: "Martina Edelweist",
                designation: "Satisfied Customer",
                src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
              },
            ]}
            colors={{
              name: "#f7f7ff",
              position: "#e1e1e1",
              testimony: "#f1f1f7",
              arrowBackground: "#0582CA",
              arrowForeground: "#141414",
              arrowHoverForeground: "#f7f7ff",
            }}
            desktopVersionBottomThreshold={1024}
            fontSizes={{
              name: "28px",
              position: "20px",
              testimony: "20px",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "10px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            imageAspectRatio={1.05}
          />
        </div>
      </div>

      {/* ================= RTL (HEBREW) ================= */}
      <div className="bg-[#f1f1f7] z-10 p-16 rounded-lg min-h-[300px] flex items-center justify-center relative">
        <div
          className="flex items-center justify-center relative"
          style={{ maxWidth: "1200px" }}
        >
          <AnimatedTestimonials
            testimonials={[
              {
                quote:
                  "הייתי מרותק מהאוכל — כל מנה מלאה בטעם! והייתי יכול לראות באמת שהם משתמשים במרכיבים של איכות גבוהה. הצוות היה ידידותי ותשומת לב, הולך עד הסוף. אני בהחלט אחזור ליותר!",
                name: "תמר מנדלסון",
                designation: "מבקר מסעדות",
                src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
              },
              {
                quote:
                  "מקום זה עלה על כל הציפיות! האווירה מזמינה, והצוות באמת הולך מעבר לכל גבול כדי להבטיח ביקור מדהים. אני בהחלט אמשיך לחזור לחוויית אכילה יוצאת דופן.",
                name: "ג'ו צ'רלסקראפט",
                designation: "מבקר תדיר",
                src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
              },
              {
                quote:
                  "שיינין ים הוא פנינה מוסתרת! מהרגע שנכנסתי, ידעתי שאני בדרך למתנה. השירות המושלם והתשומת הלב הכללית לפרטים יצרו חוויה זכורה. אני ממליץ מאוד עליו!",
                name: "מרטינה אדלווייסט",
                designation: "לקוח מרוצה",
                src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
              },
            ]}
            colors={{
              name: "#0a0a0a",
              position: "#454545",
              testimony: "#171717",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverForeground: "#00A6FB",
            }}
            desktopVersionBottomThreshold={1024}
            fontSizes={{
              name: "32px",
              position: "21px",
              testimony: "21px",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "12px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            imageAspectRatio={1.05}
            isRTL={true}
          />
        </div>
      </div>
    </div>
  );
}`,
    code: `"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import gsap from "gsap";

type Testimonial = { quote: string; name: string; designation: string; src: string };

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: { name?: string; position?: string; testimony?: string; arrowBackground?: string; arrowForeground?: string; arrowHoverForeground?: string };
  fontSizes?: { name?: string; position?: string; testimony?: string };
  spacing?: { top?: string; bottom?: string; lineHeight?: string; nameTop?: string; nameBottom?: string; positionTop?: string; positionBottom?: string; testimonyTop?: string; testimonyBottom?: string };
  desktopVersionBottomThreshold?: number;
  maxImageWidth?: number;
  imageWidthPercentage?: number;
  mobile?: { fontSizes?: { name?: string; position?: string; testimony?: string }; spacing?: { top?: string; bottom?: string; lineHeight?: string; nameTop?: string; nameBottom?: string; positionTop?: string; positionBottom?: string; testimonyTop?: string; testimonyBottom?: string } };
  imageAspectRatio?: number;
  isRTL?: boolean;
  arrowButtonSize?: number;
  arrowIconSize?: number;
  arrowGap?: number;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  colors = { name: "black", position: "gray-500", testimony: "gray-500", arrowBackground: "gray-100", arrowForeground: "black", arrowHoverForeground: "white" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = { top: "20", bottom: "20", lineHeight: "1.5", nameTop: "0", nameBottom: "0.5em", positionTop: "0", positionBottom: "0.25em", testimonyTop: "1em", testimonyBottom: "1em" },
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1,
  isRTL = false,
  arrowButtonSize = 44,
  arrowIconSize = 32,
  arrowGap = 12,
}: AnimatedTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isMobileView, setIsMobileView] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);
  const [componentWidth, setComponentWidth] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const componentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const designationRef = useRef<HTMLParagraphElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentFontSizes = isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = { ...spacing, ...(isMobileView && mobile.spacing ? mobile.spacing : {}) };

  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  // Handlers
  const updateTestimonial = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleNext = () => { updateTestimonial(1); stopAutoplay(); setUserInteracted(true); };
  const handlePrev = () => { updateTestimonial(-1); stopAutoplay(); setUserInteracted(true); };
  const isActive = (index: number) => index === activeIndex;

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay && !userInteracted) {
      autoplayIntervalRef.current = setInterval(() => updateTestimonial(1), 5000);
    }
    return () => { if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current); };
  }, [autoplay, updateTestimonial, userInteracted]);

  // Resize
  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(componentRef.current.offsetWidth < desktopVersionBottomThreshold);
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) resizeObserver.observe(componentRef.current);
    handleResize();
    return () => { if (componentRef.current) resizeObserver.unobserve(componentRef.current); };
  }, [handleResize]);

  // Random rotation for images
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  // Arrows style
  const arrowStyle = () => ({ backgroundColor: colors.arrowBackground, width: \`\${arrowButtonSize}px\`, height: \`\${arrowButtonSize}px\` });
  const iconArrowStyle = (arrowType: "prev" | "next") => ({ color: hoveredArrow === arrowType ? colors.arrowHoverForeground : colors.arrowForeground, height: \`\${arrowIconSize}px\`, width: \`\${arrowIconSize}px\` });

  // Grid gap 
  const calculateGap = (width: number) => {
    const minWidth = 1024; const maxWidth = 1456; const minGap = 60; const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth);
  };

  // Text animations like CircularTestimonials
  const wrapLines = (element: HTMLElement, text: string) => {
    element.innerHTML = "";
    const parent = document.createElement("div");
    parent.classList.add("split-parent");
    const child = document.createElement("div");
    child.classList.add("split-child");
    child.textContent = text;
    parent.appendChild(child);
    element.appendChild(parent);
    return child;
  };

  const animateNameAndDesignation = useCallback(() => {
    if (!nameRef.current || !designationRef.current) return;
    const nameChild = wrapLines(nameRef.current, activeTestimonial.name);
    const designationChild = wrapLines(designationRef.current, activeTestimonial.designation);
    // FIX for RTL: animation direction ONLY depends on user direction, not flipped
    const fromY = direction === 1 ? -100 : 100;
    gsap.fromTo(nameChild, { yPercent: fromY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out" });
    gsap.fromTo(designationChild, { yPercent: fromY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.05 });
  }, [activeTestimonial, direction]);

  useEffect(() => { animateNameAndDesignation(); }, [activeTestimonial, animateNameAndDesignation]);

  return (
    <div ref={componentRef} className={\`w-full mx-auto antialiased font-sans py-\${currentSpacing.top} pb-\${currentSpacing.bottom}\`} style={{ lineHeight: currentSpacing.lineHeight, backgroundColor: "transparent", direction: isRTL ? "rtl" : "ltr" }}>
      <div className="relative" style={{ display: "grid", gridTemplateColumns: isMobileView ? "1fr" : isRTL ? "1fr 1fr" : "1fr 1fr", gap: \`\${calculateGap(componentWidth)}px\` }}>
        {/* Image side with EXACT motion animation */}
        <div className="w-full">
          <div className="relative" style={{ paddingTop: \`\${(1 / imageAspectRatio) * 100}%\` }}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image src={testimonial.src} alt={testimonial.name} layout="fill" objectFit="cover" draggable={false} className="h-full w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Text side */}
        <div className="flex justify-between flex-col py-4 w-full">
          <div>
            <h3 ref={nameRef} className="font-bold" style={{ fontSize: currentFontSizes.name, color: colors.name, marginTop: currentSpacing.nameTop, marginBottom: currentSpacing.nameBottom, textAlign: isRTL ? "right" : "left" }}></h3>
            <p ref={designationRef} style={{ fontSize: currentFontSizes.position, color: colors.position, marginTop: currentSpacing.positionTop, marginBottom: currentSpacing.positionBottom, textAlign: isRTL ? "right" : "left" }}></p>
            <motion.p key={activeIndex} style={{ fontSize: currentFontSizes.testimony, color: colors.testimony, marginTop: currentSpacing.testimonyTop, marginBottom: currentSpacing.testimonyBottom, textAlign: isRTL ? "right" : "left" }}>
              {activeTestimonial.quote.split(" ").map((word, index) => (
                <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: 5 }} animate={{ filter: "blur(0px)", opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }} className="inline-block">{word}&nbsp;</motion.span>
              ))}
            </motion.p>
          </div>
          {/* Arrows */}
          <div className={\`flex \${isMobileView ? "pt-12" : "md:pt-0"} w-full\`} style={{ gap: \`\${arrowGap}px\` }}>
            {isRTL ? (
              <>
                <button onClick={handlePrev} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("prev")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowRight style={{ ...iconArrowStyle("prev"), transform: hoveredArrow === "prev" ? "rotate(-12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
                <button onClick={handleNext} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("next")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowLeft style={{ ...iconArrowStyle("next"), transform: hoveredArrow === "next" ? "rotate(12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
              </>
            ) : (
              <>
                <button onClick={handlePrev} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("prev")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowLeft style={{ ...iconArrowStyle("prev"), transform: hoveredArrow === "prev" ? "rotate(12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
                <button onClick={handleNext} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("next")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowRight style={{ ...iconArrowStyle("next"), transform: hoveredArrow === "next" ? "rotate(-12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{\`
        .split-parent { overflow: hidden; }
        .split-child { display: inline-block; }
      \`}</style>
    </div>
  );
};

export default AnimatedTestimonials;`,
    props: [
      { name: 'testimonials', type: 'Testimonial[]', description: 'animated_testimonials_prop_testimonials', required: true },
      { name: 'autoplay', type: 'boolean', defaultValue: 'false', description: 'animated_testimonials_prop_autoplay', required: false },
      { name: 'autoplayInterval', type: 'number', defaultValue: '5000', description: 'animated_testimonials_prop_autoplayInterval', required: false },
      { name: 'colors', type: 'Colors', description: 'animated_testimonials_prop_colors', required: false },
      { name: 'fontSizes', type: 'FontSizes', description: 'animated_testimonials_prop_fontSizes', required: false },
      { name: 'spacing', type: 'Spacing', description: 'animated_testimonials_prop_spacing', required: false },
      { name: 'desktopVersionBottomThreshold', type: 'number', defaultValue: '1024', description: 'animated_testimonials_prop_desktopThreshold', required: false },
      { name: 'mobile', type: 'MobileConfig', description: 'animated_testimonials_prop_mobile', required: false },
      { name: 'maxImageWidth', type: 'number', description: 'animated_testimonials_prop_maxImageWidth', required: false },
      { name: 'imageWidthPercentage', type: 'number', description: 'animated_testimonials_prop_imageWidthPercentage', required: false },
      { name: 'imageAspectRatio', type: 'number', defaultValue: '1', description: 'animated_testimonials_prop_imageAspectRatio', required: false },
      { name: 'isRTL', type: 'boolean', defaultValue: 'false', description: 'animated_testimonials_prop_isRTL', required: false },
      { name: 'arrowButtonSize', type: 'number', defaultValue: '44', description: 'animated_testimonials_prop_arrowButtonSize', required: false },
      { name: 'arrowIconSize', type: 'number', defaultValue: '32', description: 'animated_testimonials_prop_arrowIconSize', required: false },
      { name: 'arrowGap', type: 'number', defaultValue: '12', description: 'animated_testimonials_prop_arrowGap', required: false }
    ],
    isPreviewImage: true,
  },
  {
    id: "text-swap",
    title: "text_swap_title",
    description: "text_swap_desc",
    demo: TextSwapPreviewDemo,
    demoFullPage: TextSwapFullPageDemo,
    dependencies: `npm install gsap --legacy-peer-deps
npm install clsx tailwind-merge framer-motion`,
    credit: `[Text Rotate](https://www.fancycomponents.dev/docs/components/text/text-rotate) by [Fancy Components](https://www.fancycomponents.dev/)`,
    usage: `// Path to the "TextSwap.tsx" file

import TextSwap from "@/app/the-actual-components/text-swap/TextSwap";
import { useState, useEffect } from "react";

export default function TextSwapDemo() {
  const [renderKey, setRenderKey] = useState(0);

  // Force re-render when component reenters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRenderKey((k) => k + 1);
          }
        });
      },
      { root: null, threshold: 0.1 }
    );
    const el = document.getElementById("textswap-demo-wrapper");
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      id="textswap-demo-wrapper"
      key={renderKey}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "36px",
        justifyContent: "center",
      }}
    >
      {/* First (original, English) item */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          direction: "ltr",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1,
          }}
        >
          <TextSwap
            texts={["Next.js", "Tailwind", "Framer Motion", "GSAP", "Namer UI"]}
            mainClassName="px-3 py-2 bg-[#00a0d8] overflow-hidden justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden inline-flex items-center justify-center"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            style={{
              boxShadow: "none",
              background: "#00a0d8",
              color: "#fff",
              fontWeight: 700,
              fontSize: "2.4rem",
              minHeight: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              textAlign: "center",
            }}
          />
        </div>
      </div>

      {/* Second (purple, Hebrew RTL) item */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          direction: "rtl",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1,
          }}
        >
          <TextSwap
            texts={["מדבר", "בלוברי לום", "פיתוח אתרים", "נמר"]}
            mainClassName="px-3 py-2 bg-[#7c3aed] overflow-hidden justify-center rounded-[32px]"
            staggerFrom="first"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            staggerDuration={0.05}
            splitLevelClassName="translate-y-[-2.5px] overflow-hidden inline-flex items-center justify-center"
            transition={{
              type: "spring",
              damping: 18,
              stiffness: 180,
              mass: 0.8,
            }}
            rotationInterval={1800}
            style={{
              boxShadow: "none",
              background: "#7c3aed",
              color: "#111014",
              fontWeight: 700,
              fontSize: "2.4rem",
              minHeight: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              textAlign: "center",
              borderRadius: "32px",
            }}
          />
        </div>
      </div>
    </div>
  );
}`,
    includeClassMerger: true,
    code: `"use client";
import { ElementType, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { AnimatePresence, AnimatePresenceProps, motion, MotionProps, Transition } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/utils";

// Split text into characters with support for Unicode and emojis
const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
};

interface TextRotateProps {
  texts: string[];
  as?: ElementType;
  rotationInterval?: number;
  initial?: MotionProps["initial"] | MotionProps["initial"][];
  animate?: MotionProps["animate"] | MotionProps["animate"][];
  exit?: MotionProps["exit"] | MotionProps["exit"][];
  animatePresenceMode?: AnimatePresenceProps["mode"];
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number | "random";
  transition?: Transition;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "words" | "characters" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  style?: React.CSSProperties; 
}

export interface TextRotateRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

const WIDTH_BUFFER = 4;

type Step = "idle" | "exiting" | "resizing" | "entering";

const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      as = "p",
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref
  ) => {
    // State for sequencing
    const [step, setStep] = useState<Step>("idle");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [nextTextIndex, setNextTextIndex] = useState<number | null>(null);
    const [showText, setShowText] = useState(true);
    const [fixedHeight, setFixedHeight] = useState<number | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
    const allMeasureRefs = useRef<Array<HTMLSpanElement | null>>([]);

    // Split text for animation
    const elements = useMemo(() => {
      const currentText =
        typeof nextTextIndex === "number" ? texts[nextTextIndex] : texts[currentTextIndex];
      if (splitBy === "characters") {
        const text = currentText.split(" ");
        return text.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== text.length - 1,
        }));
      }
      return splitBy === "words"
        ? currentText.split(" ")
        : splitBy === "lines"
        ? currentText.split("\n")
        : currentText.split(splitBy);
    }, [texts, currentTextIndex, nextTextIndex, splitBy]);

    // Calculate stagger delay for each text segment
    const getStaggerDelay = useCallback(
      (index: number, totalChars: number) => {
        const total = totalChars;
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        return Math.abs((staggerFrom as number) - index) * staggerDuration;
      },
      [staggerFrom, staggerDuration]
    );

    // Get animation props for each text segment
    const getAnimationProps = useCallback(
      (index: number) => {
        const getProp = (
          prop:
            | MotionProps["initial"]
            | MotionProps["initial"][]
            | MotionProps["animate"]
            | MotionProps["animate"][]
            | MotionProps["exit"]
            | MotionProps["exit"][]
        ) => (Array.isArray(prop) ? prop[index % prop.length] : prop);
        return {
          initial: getProp(initial) as MotionProps["initial"],
          animate: getProp(animate) as MotionProps["animate"],
          exit: getProp(exit) as MotionProps["exit"],
        };
      },
      [initial, animate, exit]
    );

    // Navigation methods (trigger sequence)
    const goToIndex = useCallback(
      (targetIndex: number) => {
        if (targetIndex === currentTextIndex || step !== "idle") return;
        setNextTextIndex(targetIndex);
        setStep("exiting");
        setShowText(false); // triggers AnimatePresence exit
      },
      [currentTextIndex, step]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;
      goToIndex(nextIndex);
    }, [currentTextIndex, texts.length, loop, goToIndex]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;
      goToIndex(prevIndex);
    }, [currentTextIndex, texts.length, loop, goToIndex]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        goToIndex(validIndex);
      },
      [texts.length, goToIndex]
    );

    const reset = useCallback(() => {
      goToIndex(0);
    }, [goToIndex]);

    // Expose all navigation functions via ref
    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    // Auto-rotate text (only when idle)
    useEffect(() => {
      if (!auto || step !== "idle") return;
      const intervalId = setInterval(() => {
        next();
      }, rotationInterval);
      return () => clearInterval(intervalId);
    }, [auto, rotationInterval, next, step]);

    // On mount, measure all possible text heights and set fixedHeight
    useEffect(() => {
      if (!allMeasureRefs.current.length) return;
      let maxHeight = 0;
      allMeasureRefs.current.forEach((ref) => {
        if (ref) {
          const h = ref.getBoundingClientRect().height;
          if (h > maxHeight) maxHeight = h;
        }
      });
      setFixedHeight(maxHeight);
    }, [texts, mainClassName, splitBy]);

    // When AnimatePresence exit finishes, animate width
    const handleTextExitComplete = useCallback(() => {
      setStep("resizing");
      requestAnimationFrame(() => {
        if (!containerRef.current || !measureRef.current) return;
        const targetWidth = measureRef.current.getBoundingClientRect().width + WIDTH_BUFFER;
        gsap.to(containerRef.current, {
          width: targetWidth,
          duration: 0.2,
          ease: "power1.inOut",
          onComplete: () => {
            setStep("entering");
            setCurrentTextIndex(nextTextIndex!);
            setNextTextIndex(null);
            setShowText(true);
          },
        });
      });
    }, [nextTextIndex]);

    // On mount, set initial width
    useEffect(() => {
      if (!containerRef.current || !measureRef.current) return;
      containerRef.current.style.width = \`\${
        measureRef.current.getBoundingClientRect().width + WIDTH_BUFFER
      }px\`;
    }, []);

    // After text enter, go back to idle
    useEffect(() => {
      if (step === "entering" && showText) {
        const timeout = setTimeout(() => {
          setStep("idle");
          if (typeof onNext === "function") onNext(currentTextIndex);
        }, 250);
        return () => clearTimeout(timeout);
      }
    }, [step, showText, currentTextIndex, onNext]);

    // Custom motion component to render the text as a custom HTML tag provided via prop
    const MotionComponent = useMemo(() => motion(as ?? "p"), [as]);

    return (
      <>
        {/* Hidden spans for height measurement (once, on mount) */}
        <span
          style={{
            position: "absolute",
            left: -9999,
            top: 0,
            opacity: 0,
            pointerEvents: "none",
            whiteSpace: "pre",
            font: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            fontFamily: "inherit",
            padding: "inherit",
            margin: "inherit",
            boxSizing: "border-box",
            visibility: "hidden",
            height: "auto",
          }}
        >
          {texts.map((t, i) => (
            <span
                ref={(el) => {
                  allMeasureRefs.current[i] = el;
                }}
              key={i}
              className={mainClassName}
            >
              {t}
            </span>
          ))}
        </span>
        <div
          ref={containerRef}
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            verticalAlign: "middle",
            width: "auto",
            height: fixedHeight ? \`\${fixedHeight}px\` : undefined,
            minHeight: fixedHeight ? \`\${fixedHeight}px\` : undefined,
            maxHeight: fixedHeight ? \`\${fixedHeight}px\` : undefined,
          }}
          className={cn("relative", mainClassName)}
        >
          {/* Hidden span for measuring width */}
          <span
            ref={measureRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 0,
              pointerEvents: "none",
              whiteSpace: "pre",
              font: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              fontFamily: "inherit",
              padding: "inherit",
              margin: "inherit",
              boxSizing: "border-box",
              visibility: "hidden",
              height: 0,
            }}
            className={mainClassName}
          >
            {typeof nextTextIndex === "number" && step === "resizing"
              ? texts[nextTextIndex]
              : texts[currentTextIndex]}
          </span>
          <MotionComponent
            className={cn("flex whitespace-nowrap w-full", mainClassName)}
            transition={transition}
            layout
            {...props}
          >
            <span className="sr-only">{texts[currentTextIndex]}</span>
            <AnimatePresence
              mode={animatePresenceMode}
              initial={animatePresenceInitial}
              onExitComplete={handleTextExitComplete}
            >
              {showText && (
                <motion.span
                  key={
                    typeof nextTextIndex === "number" && step === "entering"
                      ? nextTextIndex
                      : currentTextIndex
                  }
                  className={cn(
                    "flex whitespace-nowrap",
                    splitBy === "lines" && "flex-col w-full"
                  )}
                  aria-hidden
                  layout
                >
                  {(splitBy === "characters"
                    ? (elements as WordObject[])
                    : (elements as string[]).map((el, i) => ({
                        characters: [el],
                        needsSpace: i !== (elements as string[]).length - 1,
                      }))
                  ).map((wordObj, wordIndex, array) => {
                    const previousCharsCount = array
                      .slice(0, wordIndex)
                      .reduce((sum, word) => sum + word.characters.length, 0);
                    return (
                      <span
                        key={wordIndex}
                        className={cn("inline-flex whitespace-nowrap", splitLevelClassName)}
                      >
                        {wordObj.characters.map((char, charIndex) => {
                          const totalIndex = previousCharsCount + charIndex;
                          const animationProps = getAnimationProps(totalIndex);
                          return (
                            <span key={totalIndex} className={cn(elementLevelClassName)}>
                              <motion.span
                                {...animationProps}
                                key={charIndex}
                                transition={{
                                  ...transition,
                                  delay: getStaggerDelay(
                                    previousCharsCount + charIndex,
                                    array.reduce(
                                      (sum, word) => sum + word.characters.length,
                                      0
                                    )
                                  ),
                                }}
                                className={"inline-block"}
                              >
                                {char}
                              </motion.span>
                            </span>
                          );
                        })}
                        {wordObj.needsSpace && (
                          <span className="whitespace-pre"> </span>
                        )}
                      </span>
                    );
                  })}
                </motion.span>
              )}
            </AnimatePresence>
          </MotionComponent>
        </div>
      </>
    );
  }
);

TextRotate.displayName = "TextRotate";
export default TextRotate;`,
    props: [
      { name: 'texts', type: 'string[]', description: 'text_swap_prop_texts', required: true },
      { name: 'as', type: 'ElementType', defaultValue: '"p"', description: 'text_swap_prop_as', required: false },
      { name: 'rotationInterval', type: 'number', defaultValue: '2000', description: 'text_swap_prop_rotationInterval', required: false },
      { name: 'initial', type: 'MotionProps["initial"] | MotionProps["initial"][]', description: 'text_swap_prop_initial', required: false },
      { name: 'animate', type: 'MotionProps["animate"] | MotionProps["animate"][]', description: 'text_swap_prop_animate', required: false },
      { name: 'exit', type: 'MotionProps["exit"] | MotionProps["exit"][]', description: 'text_swap_prop_exit', required: false },
      { name: 'animatePresenceMode', type: 'AnimatePresenceProps["mode"]', defaultValue: '"wait"', description: 'text_swap_prop_animatePresenceMode', required: false },
      { name: 'animatePresenceInitial', type: 'boolean', defaultValue: 'false', description: 'text_swap_prop_animatePresenceInitial', required: false },
      { name: 'staggerDuration', type: 'number', defaultValue: '0', description: 'text_swap_prop_staggerDuration', required: false },
      { name: 'staggerFrom', type: '"first" | "last" | "center" | number | "random"', defaultValue: '"first"', description: 'text_swap_prop_staggerFrom', required: false },
      { name: 'transition', type: 'Transition', defaultValue: '{ type: "spring", damping: 25, stiffness: 300 }', description: 'text_swap_prop_transition', required: false },
      { name: 'loop', type: 'boolean', defaultValue: 'true', description: 'text_swap_prop_loop', required: false },
      { name: 'auto', type: 'boolean', defaultValue: 'true', description: 'text_swap_prop_auto', required: false },
      { name: 'splitBy', type: '"words" | "characters" | "lines" | string', defaultValue: '"characters"', description: 'text_swap_prop_splitBy', required: false },
      { name: 'onNext', type: '(index: number) => void', description: 'text_swap_prop_onNext', required: false },
      { name: 'mainClassName', type: 'string', description: 'text_swap_prop_mainClassName', required: false },
      { name: 'splitLevelClassName', type: 'string', description: 'text_swap_prop_splitLevelClassName', required: false },
      { name: 'elementLevelClassName', type: 'string', description: 'text_swap_prop_elementLevelClassName', required: false },
      { name: 'style', type: 'React.CSSProperties', description: 'text_swap_prop_style', required: false }
    ],
  },
  {
    id: "custom-checkbox",
    title: "custom_checkbox_title",
    description: "custom_checkbox_desc",
    demo: CustomCheckboxPreviewDemo,
    demoFullPage: CustomCheckboxFullPageDemo,
    dependencies: 'npm install framer-motion',
    credit: `[Custom Checkbox](https://21st.dev/Edil-ozi/custom-checkbox/default) by [Edil Ozi](https://21st.dev/Edil-ozi)
[チェックしないと押せないボタン](https://codepen.io/ash_creator/pen/JjZReNm) by [あしざわ - Webクリエイター](https://codepen.io/ash_creator)`,
    usage: `// Path to the "CustomCheckbox.tsx" file
import CustomCheckbox from '@/app/the-actual-components/custom-checkbox/CustomCheckbox'

const [customCheckboxCheckedLTR, setCustomCheckboxCheckedLTR] = useState(false);
const [customCheckboxCheckedRTL, setCustomCheckboxCheckedRTL] = useState(false);
const [customCheckboxCheckedAR, setCustomCheckboxCheckedAR] = useState(false);
const [customCheckboxCheckedNoOutline, setCustomCheckboxCheckedNoOutline] = useState(false);
const [customCheckboxCheckedFullRounding, setCustomCheckboxCheckedFullRounding] = useState(false);
const [customCheckboxCheckedNoRounding, setCustomCheckboxCheckedNoRounding] = useState(false);

// Disabled checkboxes
const [customCheckboxCheckedDisabled, setCustomCheckboxCheckedDisabled] = useState(false);
const [customCheckboxCheckedDisabledWhiteRed, setCustomCheckboxCheckedDisabledWhiteRed] = useState(false);

// LTR group
const [customCheckboxSelectedLTR, setCustomCheckboxSelectedLTR] = useState<string[]>([]);
const customCheckboxLTROptions = [
  { value: "next", label: "Next.js" },
  { value: "ts", label: "TypeScript" },
  { value: "namer", label: "Namer UI" }
];

// RTL group
const [customCheckboxSelectedRTL, setCustomCheckboxSelectedRTL] = useState<string[]>([]);
const customCheckboxRTLOptions = [
  { value: "midbar", label: "מדבר" },
  { value: "lakhash", label: "לחש" },
  { value: "blueberryloom", label: "בלוברי לום" }
];

// Max selection group
const [customCheckboxSelectedMax, setCustomCheckboxSelectedMax] = useState<string[]>([]);
const customCheckboxMaxOptions = [
  { value: "one", label: "1st" },
  { value: "two", label: "2nd" },
  { value: "three", label: "3rd" }
];

// 5-item group, only three can be selected
const [customCheckboxSelectedFive, setCustomCheckboxSelectedFive] = useState<string[]>([]);
const customCheckboxFiveOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" }
];

// Disabled per item group
const [customCheckboxSelectedDisabledGroup, setCustomCheckboxSelectedDisabledGroup] = useState<string[]>([]);
const customCheckboxDisabledGroupOptions = [
  { value: "a", label: "Enabled" },
  { value: "b", label: "Disabled", checkboxProps: { disabled: true } },
  { value: "c", label: "Enabled" }
];

<div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-col gap-10 items-center justify-center relative">
  <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", width: "100%", justifyContent: "center" }}>
    {/* Checkbox group LTR (horizontal) */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Checkbox group (LTR, horizontal)</div>
      <CustomCheckbox
        options={customCheckboxLTROptions}
        values={customCheckboxSelectedLTR}
        onGroupChange={setCustomCheckboxSelectedLTR}
        direction="ltr"
        groupGap={18}
        groupDirection="row"
      />
      <div style={{direction: "ltr"}}>
        <div style={{ color: "#aaa", margin: "40px 0 10px 0", fontSize: 15 }}>Checkbox group (LTR, vertical)</div>
        <CustomCheckbox
          options={customCheckboxLTROptions}
          values={customCheckboxSelectedLTR}
          onGroupChange={setCustomCheckboxSelectedLTR}
          direction="ltr"
          groupGap={18}
          groupDirection="column"
        />
      </div>
    </div>
    {/* Checkbox group RTL (Hebrew) */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Checkbox group (RTL, Hebrew, horizontal)</div>
      <CustomCheckbox
        options={customCheckboxRTLOptions}
        values={customCheckboxSelectedRTL}
        onGroupChange={setCustomCheckboxSelectedRTL}
        direction="rtl"
        groupGap={18}
        groupDirection="row"
      />
      <div style={{direction: "ltr"}}>
        <div style={{ color: "#aaa", margin: "40px 0 10px 0", fontSize: 15 }}>Checkbox group (RTL, Hebrew, vertical)</div>
        <CustomCheckbox
          options={customCheckboxRTLOptions}
          values={customCheckboxSelectedRTL}
          onGroupChange={setCustomCheckboxSelectedRTL}
          direction="rtl"
          groupGap={18}
          groupDirection="column"
        />
      </div>
    </div>
    {/* Custom gap, background, text color, font size, max selection */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Custom gap, background, text color, font size, font weight, checkmark appearance duration 2s</div>
      <CustomCheckbox
        options={customCheckboxMaxOptions.map((opt) => ({
          ...opt,
          checkboxProps: {
            accentColor: "#fff",
            backgroundColor: "#7c3aed",
            borderColor: "#fff",
            outlineHoverColor: "#aaa",
            labelColor: "#7c3aed",
            labelFontSize: 22,
            labelFontWeight: 800,
            checkmarkColor: "#333",
            borderRadius: 16,
            checkmarkDuration: 2,
            labelSpacing: 20,
          }
        }))}
        values={customCheckboxSelectedMax}
        onGroupChange={setCustomCheckboxSelectedMax}
        direction="ltr"
        groupGap={50}
        groupDirection="row"
      />
    </div>
    {/* 5-item group, only three can be selected */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>5-item group, only three can be selected</div>
      <CustomCheckbox
        options={customCheckboxFiveOptions}
        values={customCheckboxSelectedFive}
        onGroupChange={setCustomCheckboxSelectedFive}
        direction="ltr"
        groupGap={12}
        groupDirection="row"
        maxSelected={3}
      />
      <div style={{ color: "#aaa", margin: "18px 0 10px 0", fontSize: 15 }}>5-item group, vertical, only three can be selected</div>
      <CustomCheckbox
        options={customCheckboxFiveOptions}
        values={customCheckboxSelectedFive}
        onGroupChange={setCustomCheckboxSelectedFive}
        direction="ltr"
        groupGap={12}
        groupDirection="column"
        maxSelected={3}
      />
    </div>
    {/* Disabled per item group, vertical */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled per item in group (vertical)</div>
      <CustomCheckbox
        options={customCheckboxDisabledGroupOptions}
        values={customCheckboxSelectedDisabledGroup}
        onGroupChange={setCustomCheckboxSelectedDisabledGroup}
        direction="ltr"
        groupGap={12}
        groupDirection="column"
      />
    </div>
    {/* Disabled default */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled checkbox (default)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedDisabled}
        onChange={setCustomCheckboxCheckedDisabled}
        label="Disabled example"
        disabled
      />
    </div>
    {/* Disabled with white outline (red outline on hover) */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Disabled checkbox with white outline (red outline on hover)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedDisabledWhiteRed}
        onChange={setCustomCheckboxCheckedDisabledWhiteRed}
        label="Disabled, white/red outline"
        disabled
        outlineColorDisabled="#fff"
        outlineHoverColorDisabled="#ff2800"
        disabledBackgroundColor="#2e2e2e"
        disabledBorderColor="#363636"
        disabledCheckmarkColor="#ff2800"
      />
    </div>
    {/* No outline */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>No outline (borderWidth = 0)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedNoOutline}
        onChange={setCustomCheckboxCheckedNoOutline}
        label="No outline"
        borderRadius={0}
        accentColor="#ff2800"
        borderColor="#ff2800"
        outlineHoverColor="#ff8400"
        backgroundColor="#232323"
        labelColor="#ff2800"
        labelFontSize={18}
        labelSpacing={12}
        checkmarkDuration={0.5}
        borderWidth={0}
      />
    </div>
    {/* 5px outline, full rounding */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>5px outline, full rounding</div>
      <CustomCheckbox
        checked={customCheckboxCheckedFullRounding}
        onChange={setCustomCheckboxCheckedFullRounding}
        label="5px outline"
        borderRadius={100}
        accentColor="#00bb3f"
        borderColor="#00bb3f"
        outlineHoverColor="#fff"
        backgroundColor="#232323"
        labelFontSize={18}
        labelSpacing={12}
        checkmarkDuration={0.7}
        borderWidth={5}
      />
    </div>
    {/* Default options, no rounding */}
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Default options, no rounding</div>
      <CustomCheckbox
        checked={customCheckboxCheckedNoRounding}
        onChange={setCustomCheckboxCheckedNoRounding}
        label="No rounding (borderRadius = 0)"
        borderRadius={0}
      />
    </div>
  </div>
  {/* Single checkboxes below all groups */}
  <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", alignItems: "center", marginTop: "32px" }}>
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (LTR)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedLTR}
        onChange={setCustomCheckboxCheckedLTR}
        label="I agree to the terms I never read and probably never will."
        direction="ltr"
        checkmarkDuration={0.4}
      />
    </div>
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (RTL, Hebrew)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedRTL}
        onChange={setCustomCheckboxCheckedRTL}
        label="אני מסכים לתנאים שמעולם לא קראתי וסביר להניח שלעולם לא אקרא."
        direction="rtl"
        accentColor="#7c3aed"
        labelFontSize={22}
        checkmarkDuration={0.6}
        labelSpacing={12}
      />
    </div>
    <div style={{ minWidth: 260 }}>
      <div style={{ color: "#aaa", marginBottom: 10, fontSize: 15 }}>Single checkbox (RTL, Levantine Arabic, mirrored check, black checkmark)</div>
      <CustomCheckbox
        checked={customCheckboxCheckedAR}
        onChange={setCustomCheckboxCheckedAR}
        label="أنا أوافق على الشروط التي لم أقرأها أبداً وربما لن أقرأها."
        direction="rtl"
        accentColor="#00bb3f"
        checkmarkColor="#050505"
        labelFontSize={18}
        checkmarkDuration={0.8}
        mirrorCheckmark
        labelSpacing={18}
      />
    </div>
  </div>
</div>`,
    code: `"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  direction?: "ltr" | "rtl";
  accentColor?: string;
  checkmarkColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  size?: number;
  labelColor?: string;
  labelFontSize?: number | string;
  labelFontWeight?: number | string;
  labelSpacing?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  checkmarkDuration?: number;
  mirrorCheckmark?: boolean;
  checkedCoversOutline?: boolean;
  outlineTransition?: string;
  outlineHoverColor?: string;
  outlineHoverColorDisabled?: string;
  outlineColorDisabled?: string;
  borderStyle?: string;
  disabledBackgroundColor?: string;
  disabledBorderColor?: string;
  disabledCheckmarkColor?: string;

  // Group
  options?: {
    value: string;
    label: React.ReactNode;
    checkboxProps?: Partial<CustomCheckboxProps>;
  }[];
  values?: string[];
  onGroupChange?: (values: string[]) => void;
  maxSelected?: number;
  groupGap?: number;
  groupDirection?: "row" | "column";
}

const DEFAULTS = {
  accentColor: "#00a0d8",
  checkmarkColor: "#fff",
  backgroundColor: "#2e2e2e",
  borderColor: "#363636",
  borderRadius: 8,
  borderWidth: 2,
  size: 24,
  labelColor: "#fff",
  labelFontSize: 16,
  labelFontWeight: 400,
  labelSpacing: 12, // increased gap for clarity
  checkmarkDuration: 0.32,
  outlineTransition: "border-color 0.3s ease-in-out",
  outlineHoverColor: "#494949",
  outlineHoverColorDisabled: "#494949",
  outlineColorDisabled: undefined, // fallback to disabledBorderColor/borderColor
  borderStyle: "solid",
  disabledBackgroundColor: undefined, // fallback to backgroundColor
  disabledBorderColor: undefined,     // fallback to borderColor
  disabledCheckmarkColor: undefined,  // fallback to checkmarkColor
  groupGap: 18,
  groupDirection: "row" as "row" | "column",
};

const SingleCheckbox: React.FC<
  CustomCheckboxProps & { hovered?: boolean }
> = ({
  checked = false,
  label,
  direction = "ltr",
  accentColor = DEFAULTS.accentColor,
  checkmarkColor = DEFAULTS.checkmarkColor,
  backgroundColor = DEFAULTS.backgroundColor,
  borderColor = DEFAULTS.borderColor,
  borderRadius = DEFAULTS.borderRadius,
  borderWidth = DEFAULTS.borderWidth,
  size = DEFAULTS.size,
  labelColor = DEFAULTS.labelColor,
  labelFontSize = DEFAULTS.labelFontSize,
  labelFontWeight = DEFAULTS.labelFontWeight,
  labelSpacing = DEFAULTS.labelSpacing,
  disabled = false,
  checkmarkDuration = DEFAULTS.checkmarkDuration,
  mirrorCheckmark = false,
  checkedCoversOutline = true,
  outlineTransition = DEFAULTS.outlineTransition,
  outlineHoverColor = DEFAULTS.outlineHoverColor,
  outlineHoverColorDisabled = DEFAULTS.outlineHoverColorDisabled,
  outlineColorDisabled = DEFAULTS.outlineColorDisabled,
  borderStyle = DEFAULTS.borderStyle,
  disabledBackgroundColor,
  disabledBorderColor,
  disabledCheckmarkColor,
  hovered = false,
}) => {
  const flexDirection = direction === "rtl" ? "row-reverse" : "row";

  // Use fallback to normal colors if disabled colors are not provided
  const resolvedDisabledBackgroundColor = disabledBackgroundColor ?? backgroundColor;
  const resolvedDisabledBorderColor = disabledBorderColor ?? borderColor;
  const resolvedDisabledCheckmarkColor = disabledCheckmarkColor ?? checkmarkColor;
  const resolvedOutlineColorDisabled = outlineColorDisabled ?? resolvedDisabledBorderColor;

  // --- OUTLINE COLOR LOGIC ---
  let borderCol: string;
  if (disabled) {
    borderCol = hovered
      ? (outlineHoverColorDisabled ?? outlineHoverColor)
      : resolvedOutlineColorDisabled;
  } else {
    borderCol = checkedCoversOutline
      ? checked
        ? accentColor
        : hovered
        ? outlineHoverColor
        : borderColor
      : hovered
      ? outlineHoverColor
      : borderColor;
  }
  const border =
    borderWidth === 0 ? "none" : \`\${borderWidth}px \${borderStyle} \${borderCol}\`;

  // --- BACKGROUND COLOR LOGIC ---
  const boxBg = disabled
    ? resolvedDisabledBackgroundColor
    : checked
    ? checkedCoversOutline
      ? accentColor
      : \`linear-gradient(\${accentColor} 0 0) padding-box, \${backgroundColor} border-box\`
    : backgroundColor;

  // --- CHECKBOX RENDER ---
  const checkboxEl = (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: boxBg,
        border,
        borderRadius:
          typeof borderRadius === "number"
            ? \`\${borderRadius}px\`
            : borderRadius,
        transition: \`background 0.18s, \${outlineTransition}\`,
        position: "relative",
        boxSizing: "border-box",
        flexShrink: 0,
        outline: "none",
        pointerEvents: "none", // label handles all clicks
        opacity: 1,
      }}
      tabIndex={-1}
      role="presentation"
      aria-hidden="true"
    >
      <motion.svg
        width={size * 0.75}
        height={size * 0.75}
        viewBox="0 0 24 24"
        stroke={disabled ? resolvedDisabledCheckmarkColor : checkmarkColor}
        strokeWidth={3}
        fill="none"
        style={{
          display: "block",
          pointerEvents: "none",
          transform: mirrorCheckmark ? "scaleX(-1)" : "none",
        }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            checked
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: checkmarkDuration,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </motion.svg>
      {hovered && (
        // Overlay appears only on hover
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius:
              typeof borderRadius === "number"
                ? \`\${borderRadius}px\`
                : borderRadius,
            background: "rgba(24,24,27,0.18)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      )}
    </span>
  );

  const labelEl =
    label && (
      <span
        style={{
          color: labelColor,
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
          lineHeight: 1.5,
          whiteSpace: "pre-line",
          direction,
          textAlign: direction === "rtl" ? "right" : "left",
          cursor: disabled ? "not-allowed" : "pointer",
          userSelect: "text",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {label}
      </span>
    );

  const children = direction === "rtl" ? [labelEl, checkboxEl] : [checkboxEl, labelEl];
  return (
    <span
      dir={direction}
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection,
        gap: labelSpacing,
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "text",
        opacity: disabled ? 0.5 : 1,
        position: "relative",
      }}
      tabIndex={-1}
      role="presentation"
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  // GROUP MODE
  if (props.options && props.values && props.onGroupChange) {
    const {
      options,
      values,
      onGroupChange,
      direction = "ltr",
      maxSelected,
      groupGap = DEFAULTS.groupGap,
      groupDirection = DEFAULTS.groupDirection,
    } = props;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // For vertical layout and RTL, align items to the right
    const isVertical = groupDirection === "column";
    const isRTL = direction === "rtl";
    const groupAlignItems = isVertical && isRTL ? "flex-end" : "flex-start";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: groupDirection,
          gap: groupGap,
          alignItems: groupAlignItems,
        }}
      >
        {options.map((opt, idx) => {
          const isChecked = values.includes(opt.value);
          // Only disable if not checked and maxSelected reached
          const isDisabled =
            !!opt.checkboxProps?.disabled ||
            (!isChecked &&
              typeof maxSelected === "number" &&
              values.length >= maxSelected);

          return (
            <label
              key={opt.value}
              dir={direction}
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexDirection: direction === "rtl" ? "row-reverse" : "row",
                gap: opt.checkboxProps?.labelSpacing ?? DEFAULTS.labelSpacing,
                cursor: isDisabled ? "not-allowed" : "pointer",
                userSelect: "text",
                opacity: isDisabled ? 0.5 : 1,
                position: "relative",
              }}
              tabIndex={isDisabled ? -1 : 0}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={e => {
                if (!isDisabled) {
                  e.preventDefault();
                  if (isChecked) {
                    onGroupChange(values.filter(v => v !== opt.value));
                  } else {
                    onGroupChange([...values, opt.value]);
                  }
                }
              }}
              onKeyDown={e => {
                if ((e.key === " " || e.key === "Enter") && !isDisabled) {
                  e.preventDefault();
                  if (isChecked) {
                    onGroupChange(values.filter(v => v !== opt.value));
                  } else {
                    onGroupChange([...values, opt.value]);
                  }
                }
              }}
              role="checkbox"
              aria-checked={isChecked}
              aria-disabled={isDisabled}
            >
              <SingleCheckbox
                {...opt.checkboxProps}
                checked={isChecked}
                disabled={isDisabled}
                direction={direction}
                label={opt.label}
                hovered={hoveredIndex === idx}
              />
            </label>
          );
        })}
      </div>
    );
  }

  // SINGLE MODE
  const [hovered, setHovered] = useState(false);

  return (
    <label
      dir={props.direction ?? "ltr"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection: props.direction === "rtl" ? "row-reverse" : "row",
        gap: props.labelSpacing ?? DEFAULTS.labelSpacing,
        cursor: props.disabled ? "not-allowed" : "pointer",
        userSelect: "text",
        opacity: props.disabled ? 0.5 : 1,
        position: "relative",
        ...props.style,
      }}
      className={props.className}
      tabIndex={props.disabled ? -1 : 0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={e => {
        if (!props.disabled && props.onChange) {
          e.preventDefault();
          props.onChange(!props.checked);
        }
      }}
      onKeyDown={e => {
        if (
          (e.key === " " || e.key === "Enter") &&
          !props.disabled &&
          props.onChange
        ) {
          e.preventDefault();
          props.onChange(!props.checked);
        }
      }}
      role="checkbox"
      aria-checked={props.checked}
      aria-disabled={props.disabled}
    >
      <SingleCheckbox {...props} hovered={hovered} />
    </label>
  );
};

export default CustomCheckbox;
`,
    props: [
      { name: "checked", type: "boolean", description: "custom_checkbox_prop_checked", required: false },
      { name: "onChange", type: "(checked: boolean) => void", description: "custom_checkbox_prop_onchange", required: false },
      { name: "label", type: "React.ReactNode", description: "custom_checkbox_prop_label", required: false },
      { name: "direction", type: "\"ltr\" | \"rtl\"", defaultValue: "\"ltr\"", description: "custom_checkbox_prop_direction", required: false },
      { name: "accentColor", type: "string", defaultValue: "#00a0d8", description: "custom_checkbox_prop_accentcolor", required: false },
      { name: "checkmarkColor", type: "string", defaultValue: "#fff", description: "custom_checkbox_prop_checkmarkcolor", required: false },
      { name: "backgroundColor", type: "string", defaultValue: "#2e2e2e", description: "custom_checkbox_prop_backgroundcolor", required: false },
      { name: "borderColor", type: "string", defaultValue: "#363636", description: "custom_checkbox_prop_bordercolor", required: false },
      { name: "borderRadius", type: "number | string", defaultValue: "8", description: "custom_checkbox_prop_borderradius", required: false },
      { name: "borderWidth", type: "number | string", defaultValue: "2", description: "custom_checkbox_prop_borderwidth", required: false },
      { name: "size", type: "number", defaultValue: "24", description: "custom_checkbox_prop_size", required: false },
      { name: "labelColor", type: "string", defaultValue: "#fff", description: "custom_checkbox_prop_labelcolor", required: false },
      { name: "labelFontSize", type: "number | string", defaultValue: "16", description: "custom_checkbox_prop_labelfontsize", required: false },
      { name: "labelFontWeight", type: "number | string", defaultValue: "400", description: "custom_checkbox_prop_labelfontweight", required: false },
      { name: "labelSpacing", type: "number", defaultValue: "12", description: "custom_checkbox_prop_labelspacing", required: false },
      { name: "disabled", type: "boolean", description: "custom_checkbox_prop_disabled", required: false },
      { name: "style", type: "React.CSSProperties", description: "custom_checkbox_prop_style", required: false },
      { name: "className", type: "string", description: "custom_checkbox_prop_classname", required: false },
      { name: "checkmarkDuration", type: "number", defaultValue: "0.32", description: "custom_checkbox_prop_checkmarkduration", required: false },
      { name: "mirrorCheckmark", type: "boolean", defaultValue: "false", description: "custom_checkbox_prop_mirrorcheckmark", required: false },
      { name: "checkedCoversOutline", type: "boolean", defaultValue: "true", description: "custom_checkbox_prop_checkedcoversoutline", required: false },
      { name: "outlineTransition", type: "string", defaultValue: "border-color 0.3s ease-in-out", description: "custom_checkbox_prop_outlinetransition", required: false },
      { name: "outlineHoverColor", type: "string", defaultValue: "#494949", description: "custom_checkbox_prop_outlinehovercolor", required: false },
      { name: "outlineHoverColorDisabled", type: "string", defaultValue: "#494949", description: "custom_checkbox_prop_outlinehovercolor_disabled", required: false },
      { name: "outlineColorDisabled", type: "string", description: "custom_checkbox_prop_outlinecolordisabled", required: false },
      { name: "borderStyle", type: "string", defaultValue: "solid", description: "custom_checkbox_prop_borderstyle", required: false },
      { name: "disabledBackgroundColor", type: "string", description: "custom_checkbox_prop_disabledbg", required: false },
      { name: "disabledBorderColor", type: "string", description: "custom_checkbox_prop_disabledbordercolor", required: false },
      { name: "disabledCheckmarkColor", type: "string", description: "custom_checkbox_prop_disabledcheckmarkcolor", required: false },
      { name: "options", type: "{ value: string; label: React.ReactNode; checkboxProps?: Partial<CustomCheckboxProps>; }[]", description: "custom_checkbox_prop_options", required: false },
      { name: "values", type: "string[]", description: "custom_checkbox_prop_values", required: false },
      { name: "onGroupChange", type: "(values: string[]) => void", description: "custom_checkbox_prop_ongroupchange", required: false },
      { name: "maxSelected", type: "number", description: "custom_checkbox_prop_maxselected", required: false },
      { name: "groupGap", type: "number", defaultValue: "18", description: "custom_checkbox_prop_groupgap", required: false },
      { name: "groupDirection", type: "\"row\" | \"column\"", defaultValue: "\"row\"", description: "custom_checkbox_prop_groupdirection", required: false },
    ],
  },
  {
    id: "satellite-toast",
    title: "satellite_toast_title",
    description: "satellite_toast_desc",
    demoFullPage: SatelliteToastFullPageDemo,
    dependencies: `npm install framer-motion react-dom`,
    credit: `[Splashed Toast Notifications - CSS](https://codepen.io/josetxu/pen/OJGXdzY) by [Josetxu](https://codepen.io/josetxu/pen/OJGXdzY)
[Push Notifications](https://codepen.io/FlorinPop17/pen/xxORmaB) by [Florin Pop](https://codepen.io/FlorinPop17)
[bg bars](https://21st.dev/to_be_deleted/bg-bars/default) by [Moazam](https://21st.dev/muhammadnadeemmn9485134)
[Satellite animation](https://codepen.io/Emile_Dvl/pen/RwVeVy) by [Emile Duval](https://codepen.io/Emile_Dvl)
[tabler-icons-react](https://www.npmjs.com/package/tabler-icons-react)`,
    usage: `// Path to the "SatelliteToast.tsx" file

"use client"
import { useRef } from "react";
import { SatelliteToast, type ToastNotification } from "@/app/the-actual-components/satellite-toast/SatelliteToast";

export default function App() {
  const toastRef = useRef<{ showNotification: (options: Omit<ToastNotification, "id">) => void }>(null);

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.showNotification({
        title: "Satellite Toast",
        content: "This is the default Satellite Toast. Ain't it great?"
        
      });
    }
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <SatelliteToast ref={toastRef}
      />
    </div>
  );
}
`,
    code: `"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useMemo,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ToastNotification {
  id?: string;
  title?: string;
  content?: string;
  isRTL?: boolean;
  accentColor?: string;
  backgroundColor?: string;
  bars?: number;
  disableBackgroundBars?: boolean;
  textColor?: string;
  titleFontSize?: string;
  titleFontColor?: string;
  titleFontWeight?: string;
  contentFontSize?: string;
  contentFontColor?: string;
  contentFontWeight?: string;
  bodyBorderRadius?: string;
  bodyBorderColor?: string;
  bodyBorderWidth?: string;
  typeIconContainerBorderRadius?: string;
  typeIconContainerBorderColor?: string;
  typeIconContainerBorderWidth?: string;
  typeIconColor?: string;
  iconYOffset?: string;
  iconXOffset?: string;
  closeIconBorderRadius?: string;
  closeIconBgColor?: string;
  closeIconFgColor?: string;
  closeIconHoverBgColor?: string;
  closeIconHoverFgColor?: string;
  closeIconOutlineColor?: string;
  closeIconOutlineWidth?: string;
  timerColor?: string;
  timerBgColor?: string;
  timerAnimationType?: "shrink" | "deplete";
  longevity?: number;
  animationDuration?: number;
  position?: ToastPosition;
  customIcon?: string;
  satelliteInFront?: boolean;
  satelliteColor?: string;
  showSatelliteAnimation?: boolean;
  paddingLTR?: string;
  paddingRTL?: string;
}

export interface SatelliteToastProps {
  maxWidth?: string;
  horizontalMarginAdjustment?: string;
  verticalGapAdjustment?: string;
  firstContainerVerticalStartMarginAdjustment?: string;
}

const CLOSE_SVG = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>\`;

const SATELLITE_ICON = \`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.707 6.293l2.586-2.586a1 1 0 011.414 0l5.586 5.586a1 1 0 010 1.414l-2.586 2.586a1 1 0 01-1.414 0l-5.586-5.586a1 1 0 010-1.414z"/><path d="M6 10l-3 3 3 3 3-3"/><path d="M10 6l3-3 3 3-3 3"/><path d="M12 12l1.5 1.5"/><path d="M14.5 17a2.5 2.5 0 012.5-2.5"/><path d="M15 21a6 6 0 006-6"/></svg>\`;

const SatelliteOrbit = ({
  isRTL,
  accentColor,
  satelliteInFront = true,
  satelliteColor,
}: {
  isRTL: boolean;
  accentColor: string;
  satelliteInFront?: boolean;
  satelliteColor: string;
}) => {
  const keyframes = \`
    @keyframes orbitAnim {
      0% { transform: translateX(160px) translateY(90px) scale(1.2); }
      100% { transform: translateX(-40px) translateY(-110px) scale(1); }
    }
  \`;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: -250,
        transform: \`translateY(-50%) \${isRTL ? "scaleX(-1)" : ""} scale(0.24)\`,
        transformOrigin: "left center",
        width: 250,
        height: 50,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
      aria-label="Satellite orbit animation"
    >
      <style>{keyframes}</style>
      <div
        style={{
          width: 150,
          height: 150,
          backgroundColor: accentColor,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(0, -50%)",
          borderRadius: "50%",
          boxShadow: \`0 0 12px \${accentColor}80\`,
          zIndex: satelliteInFront ? 0 : 2,
        }}
      />
      <div
        style={{
          animation: "orbitAnim 1000ms infinite ease-in-out alternate -2500ms",
          position: "absolute",
          transformOrigin: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 75,
            height: 75,
            boxShadow: "-2.5px -2.5px 0 rgba(39,39,39,0.1) inset",
            backgroundColor: satelliteColor,
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

interface BackgroundBarsProps {
  bars?: number;            // Number of bars, from notification props
  accentColor: string;      // Always from notification.accentColor
  borderRadius: string;     // Match notification.bodyBorderRadius
  disabled?: boolean;       // if true, both colors transparent
}

const BackgroundBars = ({
  bars = 20,
  accentColor,
  borderRadius = "0px",
  disabled = false,
}: BackgroundBarsProps) => {
  // If disabled, both colors are fully transparent
  const colors = disabled ? ["transparent", "transparent"] : [accentColor, "transparent"];
  const gradientStyle = \`linear-gradient(to top, \${colors.join(", ")})\`;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        borderRadius,
        height: "100%",
        width: "100%",
      }}
      aria-hidden="true"
    >
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={\`bg-bar-\${index}\`}
              style={{
                flex: 1,
                background: gradientStyle,
                transformOrigin: "bottom",
              }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const createTimerAnimations = (uid: number, mode: "shrink" | "deplete") => {
  const style = document.createElement("style");
  if (mode === "shrink") {
    style.textContent = \`
      @keyframes timerShrink-\${uid} {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
      }
    \`;
  }
  if (mode === "deplete") {
    style.textContent = \`
      @keyframes timerDeplete-\${uid} {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
      }
    \`;
  }
  document.head.appendChild(style);
};

const Notification = ({ notification, onClose }: { notification: ToastNotification; onClose: () => void }) => {
  const {
    title,
    content,
    isRTL = false,
    accentColor = "#6750A4",
    backgroundColor = "#0a0a0a",
    bars = 20,
    disableBackgroundBars = false,
    titleFontSize = "1.1rem",
    titleFontColor = "#fff",
    titleFontWeight = 700,
    contentFontSize = "0.9rem",
    contentFontColor = "#e5e5e5",
    contentFontWeight = 400,
    bodyBorderRadius = "12px",
    bodyBorderColor = "#2a2a2a",
    bodyBorderWidth = "1px",
    typeIconContainerBorderRadius = "50%",
    typeIconContainerBorderColor = "#2a2a2a",
    typeIconContainerBorderWidth = "1px",
    typeIconColor = "#fff",
    iconYOffset = "0px",
    iconXOffset = "0px",
    closeIconBorderRadius = "50%",
    closeIconBgColor = "#fff",
    closeIconFgColor = "#242424",
    closeIconHoverBgColor = "#ccc",
    closeIconHoverFgColor = "#000",
    closeIconOutlineColor = "#2a2a2a",
    closeIconOutlineWidth = "1px",
    timerColor = "#fff",
    timerBgColor = "rgba(255,255,255,0.3)",
    timerAnimationType = "shrink",
    longevity = 5000,
    animationDuration = 600,
    customIcon,
    satelliteInFront = true,
    satelliteColor = "#fff",
    showSatelliteAnimation = true,
    paddingLTR = "1.375rem 3rem 1.375rem 96px",
    paddingRTL = "1.375rem 96px 1.375rem 3rem",
  } = notification;

  const [isVisible, setIsVisible] = useState(true);
  const notifRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const remainingRef = useRef(longevity);
  const startTimeRef = useRef(Date.now());
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const effectiveBgColor = backgroundColor;
  const effectiveBodyBorder = bodyBorderColor;
  const effectiveIconBorder = typeIconContainerBorderColor;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, animationDuration);
  };

  useEffect(() => {
    const uid = Date.now();

    if (timerAnimationType === "shrink") {
      if (!leftRef.current || !rightRef.current) return;
      createTimerAnimations(uid, "shrink");
      leftRef.current.style.animation = \`timerShrink-\${uid} \${longevity}ms linear forwards\`;
      rightRef.current.style.animation = \`timerShrink-\${uid} \${longevity}ms linear forwards\`;
    }

    if (timerAnimationType === "deplete") {
      if (!leftRef.current) return;
      createTimerAnimations(uid, "deplete");
      leftRef.current.style.animation = \`timerDeplete-\${uid} \${longevity}ms linear forwards\`;
    }

    startTimeRef.current = Date.now();
    timeoutRef.current = setTimeout(handleClose, longevity);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [longevity, timerAnimationType, isRTL]);

  const pauseTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const elapsed = Date.now() - startTimeRef.current;
    remainingRef.current -= elapsed;

    // Crucial: NEVER remove animation style here, just pause it
    if (leftRef.current) leftRef.current.style.animationPlayState = "paused";
    if (rightRef.current) rightRef.current.style.animationPlayState = "paused";
  };

  const resumeTimer = () => {
    if (remainingRef.current > 0) {
      startTimeRef.current = Date.now();
      timeoutRef.current = setTimeout(handleClose, remainingRef.current);
      // Just resume animation-play-state running on refs
      if (leftRef.current) leftRef.current.style.animationPlayState = "running";
      if (rightRef.current) rightRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      ref={notifRef}
      dir={isRTL ? "rtl" : "ltr"}
      className={\`toast-wrapper \${isVisible ? "animate-slide-in" : "animate-slide-out"}\`}
      style={{
        zIndex: 1100,
        ["--anim-longevity" as any]: \`\${animationDuration}ms\`,
        ["--anim-translateX" as any]: isRTL ? "-150%" : "150%",
        ["--anim-bounceX" as any]: isRTL ? "12%" : "-12%",
        position: "relative",
        pointerEvents: "auto",
      }}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <style>{\`
        @keyframes slideInWithBounce {
          0% { transform: translateX(var(--anim-translateX)); opacity: 0; }
          60% { transform: translateX(var(--anim-bounceX)); opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutWithBounce {
          0% { transform: translateX(0); opacity: 1; }
          40% { transform: translateX(var(--anim-bounceX)); opacity: 1; }
          100% { transform: translateX(var(--anim-translateX)); opacity: 0; }
        }
        .animate-slide-in { animation: slideInWithBounce var(--anim-longevity) ease forwards; }
        .animate-slide-out { animation: slideOutWithBounce var(--anim-longevity) ease forwards; }
      \`}</style>

      <div
        className="toast-body"
        style={{
          borderRadius: bodyBorderRadius,
          outline: \`\${bodyBorderWidth} solid \${effectiveBodyBorder}\`,
          padding: isRTL ? paddingRTL : paddingLTR,
          backgroundColor: effectiveBgColor,
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <BackgroundBars
          bars={bars}
          accentColor={accentColor}
          borderRadius={bodyBorderRadius}
          disabled={disableBackgroundBars}
        />
        {showSatelliteAnimation && <SatelliteOrbit isRTL={isRTL} accentColor={accentColor} satelliteInFront={satelliteInFront} satelliteColor={satelliteColor} />}

        <div style={{ flex: 1, zIndex: 20 }}>
          <h3
            style={{
              fontSize: titleFontSize,
              color: titleFontColor,
              fontWeight: titleFontWeight,
              margin: 0,
              paddingBottom: "0.25rem",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: contentFontSize,
              color: contentFontColor,
              fontWeight: contentFontWeight,
              margin: 0,
            }}
          >
            {content}
          </p>
        </div>
        <div
          className="toast-timer"
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            width: "80%",
            height: "4px",
            background: timerBgColor,
            borderRadius: "2px",
            overflow: "hidden",
            zIndex: 15,
          }}
        >
          {timerAnimationType === "shrink" ? (
            <>
              {/* two halves for SHRINK */}
              <div
                ref={leftRef}
                className="timer-left"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background: timerColor,
                  transformOrigin: "right",
                }}
              />
              <div
                ref={rightRef}
                className="timer-right"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50%",
                  height: "100%",
                  background: timerColor,
                  transformOrigin: "left",
                }}
              />
            </>
          ) : (
            <>
              {/* full bar for DEPLETE */}
              <div
                ref={leftRef}
                className="timer-deplete"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background: timerColor,
                  transformOrigin: isRTL ? "right" : "left", // control direction
                }}
              />
            </>
          )}
        </div>
      </div>

      <div
        className="toast-icon"
        dangerouslySetInnerHTML={{ __html: customIcon || SATELLITE_ICON }}
        style={{
          position: "absolute",
          width: "3.5rem",
          height: "3.5rem",
          background: accentColor,
          top: "-1.75rem",
          [isRTL ? "right" : "left"]: "2rem",
          borderRadius: typeIconContainerBorderRadius,
          outline: \`\${typeIconContainerBorderWidth} solid \${effectiveIconBorder}\`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
          color: typeIconColor || "#fff",
          zIndex: 60,
          userSelect: "none",
          pointerEvents: "none",
          transform: \`translate(\${iconXOffset}, \${iconYOffset}) \${isRTL ? "scaleX(-1)" : ""}\`,
        }}
      />

      <button
        dangerouslySetInnerHTML={{ __html: CLOSE_SVG }}
        onClick={handleClose}
        aria-label="Close notification"
        style={{
          position: "absolute",
          top: "0.4rem",
          [isRTL ? "left" : "right"]: "0.4rem",
          height: "34px",
          width: "34px",
          cursor: "pointer",
          borderRadius: closeIconBorderRadius,
          backgroundColor: closeIconBgColor,
          color: closeIconFgColor,
          transform: "scale(0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          outline: \`\${closeIconOutlineWidth} solid \${closeIconOutlineColor}\`,
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = closeIconHoverBgColor!;
          e.currentTarget.style.color = closeIconHoverFgColor!;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = closeIconBgColor!;
          e.currentTarget.style.color = closeIconFgColor!;
        }}
      />
    </div>
  );
};

export const SatelliteToast = forwardRef<{ showNotification: (options: Omit<ToastNotification, "id">) => void }, SatelliteToastProps>(
  ({ maxWidth = "334px", horizontalMarginAdjustment = "13px", verticalGapAdjustment = "51px", firstContainerVerticalStartMarginAdjustment = "8px" }, ref) => {
    const [notifications, setNotifications] = useState<ToastNotification[]>([]);
    const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
      const node = document.createElement("div");
      node.setAttribute("id", "satellite-toast-portal");
      document.body.appendChild(node);
      setPortalNode(node);
      return () => { document.body.removeChild(node); };
    }, []);

    useImperativeHandle(ref, () => ({
      showNotification: (options) => {
        const newNotification: ToastNotification = { ...options, id: new Date().toISOString() + Math.random() };
        setNotifications((prev) => newNotification.position?.startsWith("top") ? [newNotification, ...prev] : [...prev, newNotification]);
      },
    }));

    const removeNotification = useCallback((id: string) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const grouped = useMemo(() => {
      return notifications.reduce((acc, n) => {
        const pos = n.position || "bottom-right";
        if (!acc[pos]) acc[pos] = [];
        acc[pos].push(n);
        return acc;
      }, {} as Record<ToastPosition, ToastNotification[]>);
    }, [notifications]);

    if (!portalNode) return null;

    const getPosStyles = (pos: ToastPosition): React.CSSProperties => {
      let styles: React.CSSProperties = {
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        zIndex: 2000,
        pointerEvents: "none",
        maxWidth,
        rowGap: verticalGapAdjustment,
        marginLeft: horizontalMarginAdjustment,
        marginRight: horizontalMarginAdjustment,
      };
      if (pos.includes("top")) styles.top = \`calc(\${horizontalMarginAdjustment} + \${firstContainerVerticalStartMarginAdjustment})\`;
      if (pos.includes("bottom")) styles.bottom = \`calc(\${horizontalMarginAdjustment} + \${firstContainerVerticalStartMarginAdjustment})\`;
      if (pos.includes("left")) styles.left = horizontalMarginAdjustment;
      if (pos.includes("right")) styles.right = horizontalMarginAdjustment;
      return styles;
    };

    return createPortal(
      <>
        {Object.entries(grouped).map(([pos, arr]) => (
          <div key={pos} style={getPosStyles(pos as ToastPosition)}>
            {arr.map((n) => <Notification key={n.id} notification={n} onClose={() => removeNotification(n.id!)} />)}
          </div>
        ))}
      </>,
      portalNode
    );
  }
);

SatelliteToast.displayName = "SatelliteToast";
`,
    props: [
      { name: 'id', type: 'string', description: 'satellite_toast_prop_id', required: false },
      { name: 'title', type: 'string', description: 'satellite_toast_prop_title', required: false },
      { name: 'content', type: 'string', description: 'satellite_toast_prop_content', required: false },
      { name: 'isRTL', type: 'boolean', defaultValue: 'false', description: 'satellite_toast_prop_isRTL', required: false },
      { name: 'accentColor', type: 'string', defaultValue: '"#6750A4"', description: 'satellite_toast_prop_accentColor', required: false },
      { name: 'backgroundColor', type: 'string', defaultValue: '"#0a0a0a"', description: 'satellite_toast_prop_backgroundColor', required: false },
      { name: 'bars', type: 'number', defaultValue: '20', description: 'satellite_toast_prop_bars', required: false },
      { name: 'disableBackgroundBars', type: 'boolean', defaultValue: 'false', description: 'satellite_toast_prop_disableBackgroundBars', required: false },
      { name: 'textColor', type: 'string', description: 'satellite_toast_prop_textColor', required: false },
      { name: 'titleFontSize', type: 'string', defaultValue: '"1.1rem"', description: 'satellite_toast_prop_titleFontSize', required: false },
      { name: 'titleFontColor', type: 'string', defaultValue: '"#fff"', description: 'satellite_toast_prop_titleFontColor', required: false },
      { name: 'titleFontWeight', type: 'string', defaultValue: '"700"', description: 'satellite_toast_prop_titleFontWeight', required: false },
      { name: 'contentFontSize', type: 'string', defaultValue: '"0.9rem"', description: 'satellite_toast_prop_contentFontSize', required: false },
      { name: 'contentFontColor', type: 'string', defaultValue: '"#e5e5e5"', description: 'satellite_toast_prop_contentFontColor', required: false },
      { name: 'contentFontWeight', type: 'string', defaultValue: '"400"', description: 'satellite_toast_prop_contentFontWeight', required: false },
      { name: 'bodyBorderRadius', type: 'string', defaultValue: '"12px"', description: 'satellite_toast_prop_bodyBorderRadius', required: false },
      { name: 'bodyBorderColor', type: 'string', defaultValue: '"#2a2a2a"', description: 'satellite_toast_prop_bodyBorderColor', required: false },
      { name: 'bodyBorderWidth', type: 'string', defaultValue: '"1px"', description: 'satellite_toast_prop_bodyBorderWidth', required: false },
      { name: 'typeIconContainerBorderRadius', type: 'string', defaultValue: '"50%"', description: 'satellite_toast_prop_typeIconContainerBorderRadius', required: false },
      { name: 'typeIconContainerBorderColor', type: 'string', defaultValue: '"#2a2a2a"', description: 'satellite_toast_prop_typeIconContainerBorderColor', required: false },
      { name: 'typeIconContainerBorderWidth', type: 'string', defaultValue: '"1px"', description: 'satellite_toast_prop_typeIconContainerBorderWidth', required: false },
      { name: 'typeIconColor', type: 'string', defaultValue: '"#fff"', description: 'satellite_toast_prop_typeIconColor', required: false },
      { name: 'iconYOffset', type: 'string', defaultValue: '"0px"', description: 'satellite_toast_prop_iconYOffset', required: false },
      { name: 'iconXOffset', type: 'string', defaultValue: '"0px"', description: 'satellite_toast_prop_iconXOffset', required: false },
      { name: 'closeIconBorderRadius', type: 'string', defaultValue: '"50%"', description: 'satellite_toast_prop_closeIconBorderRadius', required: false },
      { name: 'closeIconBgColor', type: 'string', defaultValue: '"#fff"', description: 'satellite_toast_prop_closeIconBgColor', required: false },
      { name: 'closeIconFgColor', type: 'string', defaultValue: '"#242424"', description: 'satellite_toast_prop_closeIconFgColor', required: false },
      { name: 'closeIconHoverBgColor', type: 'string', defaultValue: '"#ccc"', description: 'satellite_toast_prop_closeIconHoverBgColor', required: false },
      { name: 'closeIconHoverFgColor', type: 'string', defaultValue: '"#000"', description: 'satellite_toast_prop_closeIconHoverFgColor', required: false },
      { name: 'closeIconOutlineColor', type: 'string', defaultValue: '"#2a2a2a"', description: 'satellite_toast_prop_closeIconOutlineColor', required: false },
      { name: 'closeIconOutlineWidth', type: 'string', defaultValue: '"1px"', description: 'satellite_toast_prop_closeIconOutlineWidth', required: false },
      { name: 'timerColor', type: 'string', defaultValue: '"#fff"', description: 'satellite_toast_prop_timerColor', required: false },
      { name: 'timerBgColor', type: 'string', defaultValue: '"rgba(255,255,255,0.3)"', description: 'satellite_toast_prop_timerBgColor', required: false },
      { name: 'timerAnimationType', type: '"shrink" | "deplete"', defaultValue: '"shrink"', description: 'satellite_toast_prop_timerAnimationType', required: false },
      { name: 'longevity', type: 'number', defaultValue: '5000', description: 'satellite_toast_prop_longevity', required: false },
      { name: 'animationDuration', type: 'number', defaultValue: '600', description: 'satellite_toast_prop_animationDuration', required: false },
      { name: 'position', type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"', defaultValue: '"bottom-right"', description: 'satellite_toast_prop_position', required: false },
      { name: 'customIcon', type: 'string', description: 'satellite_toast_prop_customIcon', required: false },
      { name: 'satelliteInFront', type: 'boolean', defaultValue: 'true', description: 'satellite_toast_prop_satelliteInFront', required: false },
      { name: 'satelliteColor', type: 'string', defaultValue: '"#fff"', description: 'satellite_toast_prop_satelliteColor', required: false },
      { name: 'showSatelliteAnimation', type: 'boolean', defaultValue: 'true', description: 'satellite_toast_prop_showSatelliteAnimation', required: false },
      { name: 'paddingLTR', type: 'string', defaultValue: '"1.375rem 3rem 1.375rem 96px"', description: 'satellite_toast_prop_paddingLTR', required: false },
      { name: 'paddingRTL', type: 'string', defaultValue: '"1.375rem 96px 1.375rem 3rem"', description: 'satellite_toast_prop_paddingRTL', required: false },
      { name: 'maxWidth', type: 'string', defaultValue: '"334px"', description: 'satellite_toast_prop_maxWidth', required: false },
      { name: 'horizontalMarginAdjustment', type: 'string', defaultValue: '"13px"', description: 'satellite_toast_prop_horizontalMarginAdjustment', required: false },
      { name: 'verticalGapAdjustment', type: 'string', defaultValue: '"51px"', description: 'satellite_toast_prop_verticalGapAdjustment', required: false },
      { name: 'firstContainerVerticalStartMarginAdjustment', type: 'string', defaultValue: '"8px"', description: 'satellite_toast_prop_firstContainerVerticalStartMarginAdjustment', required: false },
    ],
    isPreviewImage: true,
  },
  {
    id: 'calendar',
    title: 'calendar_title',
    description: 'calendar_desc',
    demo: CalendarPreviewDemo,
    demoFullPage: CalendarFullPageDemo,
    dependencies: `npm install react-swipeable
npm install framer-motion
npm install lucide-react`,
    credit: `[Calendar](https://21st.dev/designali-in/calendar/default) by [Ali Imam](https://21st.dev/dalim)
[Coach Scheduling Card](https://21st.dev/isaiahbjork/coach-scheduling-card/default) by [Isaiah](https://21st.dev/isaiahbjork)
[Gooey Text Morphing](https://21st.dev/victorwelander/gooey-text-morphing/default) by [Victor Welander](https://21st.dev/victorwelander)
[Morphing Text](https://21st.dev/dillionverma/morphing-text/default) by [Magic UI](https://21st.dev/magicui)`,
    usage: `// Path to the "Calendar.tsx" file
import { Calendar } from "@/app/the-actual-components/calendar/Calendar.tsx";
import React, { useState } from "react";

export default function CalendarMegaDemo() {
  const [selectedIt, setSelectedIt] = useState<Date[]>([]);

  const italianDayNames = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
  const spanishDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const cantoneseDayNames = ["日", "一", "二", "三", "四", "五", "六"];

  const italianMonthNames = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
  ];
  const spanishMonthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];
  const cantoneseMonthNames = [
    "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月",
  ];

  const logSelect = (date: Date | Date[]) => console.log("Selected:", date);
  const logDaySelect = (date: Date, all: Date[]) =>
    console.log("Day selected:", date, "All:", all);
  const logDayUnselect = (date: Date, all: Date[]) =>
    console.log("Day unselected:", date, "All:", all);
  const logMonthChange = (date: Date) =>
    console.log("Month changed to:", date.toDateString());

  return (
    <div
      style={{
        display: "flex-column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 36,
      }}
    >
    <div style={{ textAlign: 'center', color: '#eee', fontSize: 20, marginBottom: 40, direction: "ltr" }}>This component supports swipe gesture on touchscreens.</div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 36,
      }}
    >
      <div style={{ color: "#fff", textAlign: "center", width: 350 }}>
        <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
          Outline #242424, radius 8px, day button 36×36, 8px gap between day buttons, single-day selection,
          active colors: background #00A7FA, border #00A7FA, text #000000. Pre-selected date: today.
        </p>
        <Calendar
          isRTL={false}
          selected={new Date()}
          onSelect={logSelect}
          onDaySelect={logDaySelect}
          onDayUnselect={logDayUnselect}
          onMonthChange={logMonthChange}
          custom={{
            bgColor: "#000000",
            outlineColor: "#242424",
            outlineWidth: 1,
            outlineRadius: 8,
            padding: "24px",
            dayButtonWidth: 36,
            dayButtonHeight: 36,
            horizontalGap: 8,
            verticalGap: 8,
            dayBorderRadius: 8,
            navBorderRadius: 8,
            dayButtonFontSize: "14px",
            weekLabelFontSize: "13px",
            monthYearFontSize: "16px",
            dayFontWeight: "500",
            weekLabelFontWeight: "600",
            monthYearFontWeight: "700",
            chevronIconSize: 16,
            chevronStrokeWidth: 2,
            dayButtondefaultBg: "transparent",
            dayButtondefaultBorder: "#242424",
            dayButtondefaultText: "#ccc",
            dayButtonhoverBg: "#242424",
            dayButtonhoverBorder: "#242424",
            dayButtonhoverText: "#fff",
            dayButtonactiveBg: "#00A7FA",
            dayButtonactiveBorder: "#00A7FA",
            dayButtonactiveText: "#000000",
            navButtondefaultBg: "#000000",
            navButtondefaultBorder: "#242424",
            navButtondefaultText: "#ccc",
            navButtonhoverBg: "#242424",
            navButtonhoverBorder: "#242424",
            navButtonhoverText: "#fff",
          }}
        />
      </div>

      <div style={{ color: "#fff", textAlign: "center", direction: "rtl", width: 328 }}>
        <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
          Outline #262626, radius 16px, circular day/nav buttons, 8px gap between day buttons, RTL layout,
          active colors: background #6e30e5, border #894aff, text #fff, weekday 6 disabled.
        </p>
        <Calendar
          isRTL
          onSelect={logSelect}
          onDaySelect={logDaySelect}
          onDayUnselect={logDayUnselect}
          onMonthChange={logMonthChange}
          disabledWeekdays={[6]}
          custom={{
            bgColor: "#0a0a0a",
            outlineColor: "#262626",
            outlineWidth: 1,
            outlineRadius: 16,
            padding: "20px",
            dayButtonWidth: 34,
            dayButtonHeight: 34,
            horizontalGap: 8,
            verticalGap: 8,
            dayBorderRadius: 50,
            navBorderRadius: 50,
            dayButtonFontSize: "14px",
            weekLabelFontSize: "16px",
            monthYearFontSize: "16px",
            dayFontWeight: "500",
            weekLabelFontWeight: "600",
            monthYearFontWeight: "700",
            chevronIconSize: 16,
            chevronStrokeWidth: 2,
            dayButtondefaultBg: "transparent",
            dayButtondefaultBorder: "#262626",
            dayButtondefaultText: "#ccc",
            dayButtonhoverBg: "#161616",
            dayButtonhoverBorder: "#363636",
            dayButtonhoverText: "#fff",
            dayButtonactiveBg: "#6e30e5",
            dayButtonactiveBorder: "#894aff",
            dayButtonactiveText: "#fff",
            navButtondefaultBg: "#0a0a0a",
            navButtondefaultBorder: "#262626",
            navButtondefaultText: "#ccc",
            navButtonhoverBg: "#161616",
            navButtonhoverBorder: "#363636",
            navButtonhoverText: "#fff",
          }}
        />
      </div>

      <div style={{ color: "#fff", textAlign: "center", width: 304 }}>
        <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
          Outline #2e2e2e, square day buttons 32×32, 7×14px gap between day buttons, circular nav buttons,
          multiple selection mode with 5-day limit, disablePastMonths true,
          active colors: background #d400ff, border #9b19b9, text #fff.
        </p>
        <Calendar
          isRTL={false}
          selected={selectedIt}
          onSelect={(dates) => setSelectedIt(Array.isArray(dates) ? dates : [dates])}
          onDaySelect={logDaySelect}
          onDayUnselect={logDayUnselect}
          onMonthChange={logMonthChange}
          selectionMode="limited"
          limitCount={5}
          disablePastMonths
          dayNames={italianDayNames}
          monthNames={italianMonthNames}
          custom={{
            bgColor: "#141414",
            outlineColor: "#2e2e2e",
            outlineWidth: 1,
            outlineRadius: 6,
            padding: "18px",
            dayButtonWidth: 32,
            dayButtonHeight: 32,
            horizontalGap: 7,
            verticalGap: 14,
            dayBorderRadius: 0,
            navBorderRadius: 50,
            dayButtonFontSize: "13px",
            weekLabelFontSize: "12px",
            monthYearFontSize: "15px",
            dayFontWeight: "500",
            weekLabelFontWeight: "600",
            monthYearFontWeight: "700",
            chevronIconSize: 16,
            chevronStrokeWidth: 2,
            dayButtondefaultBg: "transparent",
            dayButtondefaultBorder: "#2e2e2e",
            dayButtondefaultText: "#aaa",
            dayButtonhoverBg: "#2e2e2e",
            dayButtonhoverBorder: "#2e2e2e",
            dayButtonhoverText: "#fff",
            dayButtonactiveBg: "#d400ff",
            dayButtonactiveBorder: "#9b19b9",
            dayButtonactiveText: "#fff",
            navButtondefaultBg: "#000000",
            navButtondefaultBorder: "#2e2e2e",
            navButtondefaultText: "#ccc",
            navButtonhoverBg: "#2e2e2e",
            navButtonhoverBorder: "#2e2e2e",
            navButtonhoverText: "#fff",
          }}
        />
      </div>

      <div style={{ color: "#fff", textAlign: "center", width: 458 }}>
        <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
          Outline #363636, rectangular day buttons 48×32, 14×7px gap between day buttons,
          weekLabelTrim has a vlaue of 2, disablePastMonths true, past dates disabled, active colors: background #26acff,
          border #6fbfff, text #1a1a1a.
        </p>

        <Calendar
          isRTL={false}
          onSelect={logSelect}
          dayNames={spanishDayNames}
          monthNames={spanishMonthNames}
          weekLabelTrim={2}
          disablePastMonths
          referenceDate={new Date()}
          disableBeforeReference
          custom={{
            bgColor: "#1a1a1a",
            outlineColor: "#363636",
            outlineWidth: 1,
            outlineRadius: 6,
            padding: "18px",
            dayButtonWidth: 48,
            dayButtonHeight: 32,
            horizontalGap: 14,
            verticalGap: 7,
            dayBorderRadius: 6,
            navBorderRadius: 6,
            dayButtonFontSize: "12px",
            weekLabelFontSize: "13px",
            monthYearFontSize: "14px",
            dayFontWeight: "500",
            weekLabelFontWeight: "600",
            monthYearFontWeight: "700",
            chevronIconSize: 16,
            chevronStrokeWidth: 2,
            dayButtondefaultBg: "transparent",
            dayButtondefaultBorder: "#363636",
            dayButtondefaultText: "#bbb",
            dayButtonhoverBg: "#363636",
            dayButtonhoverBorder: "#363636",
            dayButtonhoverText: "#fff",
            dayButtonactiveBg: "#26acff",
            dayButtonactiveBorder: "#6fbfff",
            dayButtonactiveText: "#1a1a1a",
            navButtondefaultBg: "#1a1a1a",
            navButtondefaultBorder: "#363636",
            navButtondefaultText: "#bbb",
            navButtonhoverBg: "#363636",
            navButtonhoverBorder: "#363636",
            navButtonhoverText: "#fff",
          }}
        />
      </div>

      <div style={{ color: "#fff", textAlign: "center", width: 316 }}>
        <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
          Outline #3a3a3a, day button radius 10px, day button size 34×34, 6px gap between day buttons, disableFutureMonths true,
          default background #ff3b5b, hover background #ffde3b, active background #fff.
        </p>
        <Calendar
          isRTL={false}
          onSelect={logSelect}
          disableFutureMonths
          dayNames={cantoneseDayNames}
          monthNames={cantoneseMonthNames}
          custom={{
            bgColor: "#202020",
            outlineColor: "#3a3a3a",
            outlineWidth: 1,
            outlineRadius: 6,
            padding: "20px",
            dayButtonWidth: 34,
            dayButtonHeight: 34,
            navButtonWidth: 42,
            navButtonHeight: 28,
            horizontalGap: 6,
            verticalGap: 6,
            dayBorderRadius: 10,
            navBorderRadius: 50,
            dayButtonFontSize: "14px",
            weekLabelFontSize: "16px",
            monthYearFontSize: "18px",
            dayFontWeight: "500",
            weekLabelFontWeight: "600",
            monthYearFontWeight: "700",
            chevronIconSize: 22,
            chevronStrokeWidth: 2,
            dayButtondefaultBg: "#ff3b5b",
            dayButtondefaultBorder: "#ba3244",
            dayButtondefaultText: "#000000",
            dayButtonhoverBg: "#ffde3b",
            dayButtonhoverBorder: "#ff7c3b",
            dayButtonhoverText: "#000000",
            dayButtonactiveBg: "#fff",
            dayButtonactiveBorder: "#aaa",
            dayButtonactiveText: "#202020",
            navButtondefaultBg: "#111",
            navButtondefaultBorder: "#646464",
            navButtondefaultText: "#aaa",
            navButtonhoverBg: "#3a3a3a",
            navButtonhoverBorder: "#aaaaaa",
            navButtonhoverText: "#fff",
          }}
        />
      </div>
    </div>
    </div>
  );
}`,
    code: `"use client";
    
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BlurText({
  texts,
  className,
  monthYearColor,
  monthYearFontSize,
  monthYearFontWeight,
}: {
  texts: string[];
  className?: string;
  monthYearColor?: string;
  monthYearFontSize?: string | number;
  monthYearFontWeight?: string | number;
}) {
  const [display, setDisplay] = useState(texts[0] || "");

  useEffect(() => {
    if (texts[0] && texts[0] !== display) setDisplay(texts[0]);
  }, [texts, display]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={display}
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.36 }}
        className={\`inline-block \${className || ""}\`}
        style={{
          color: monthYearColor,
          fontSize: monthYearFontSize,
          fontWeight: monthYearFontWeight,
        }}
      >
        {display}
      </motion.span>
    </AnimatePresence>
  );
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export type SelectionMode = "none" | "single" | "multiple" | "limited";

export interface CalendarCustomProps {
  bgColor?: string;
  outlineColor?: string;
  outlineWidth?: number;
  outlineRadius?: number | string;
  padding?: string;
  dayButtonWidth?: number;
  dayButtonHeight?: number;
  navButtonWidth?: number;
  navButtonHeight?: number;
  horizontalGap?: number;
  verticalGap?: number;
  headerSpacing?: number;
  dayButtonFontSize?: string;
  weekLabelFontSize?: string;
  monthYearFontSize?: string;
  dayFontWeight?: string;
  weekLabelFontWeight?: string;
  monthYearFontWeight?: string;
  dayBorderWidth?: number;
  dayBorderRadius?: number | string;
  navBorderWidth?: number;
  navBorderRadius?: number | string;
  chevronIconSize?: number;
  chevronStrokeWidth?: number;
  transitionDuration?: number;
  dayButtondefaultBg?: string;
  dayButtondefaultText?: string;
  dayButtondefaultBorder?: string;
  dayButtonhoverBg?: string;
  dayButtonhoverText?: string;
  dayButtonhoverBorder?: string;
  dayButtonactiveBg?: string;
  dayButtonactiveText?: string;
  dayButtonactiveBorder?: string;
  navButtondefaultBg?: string;
  navButtondefaultText?: string;
  navButtondefaultBorder?: string;
  navButtonhoverBg?: string;
  navButtonhoverText?: string;
  navButtonhoverBorder?: string;
  weekLabelColor?: string;
  monthYearColor?: string;
}

export interface CalendarProps {
  isRTL?: boolean;
  selected?: Date | Date[];
  onSelect?: (date: Date | Date[]) => void;
  onDaySelect?: (date: Date, all: Date[]) => void;
  onDayUnselect?: (date: Date, all: Date[]) => void;
  onMonthChange?: (date: Date) => void;
  disabledDates?: Date[];
  disabledWeekdays?: number[];
  disableAll?: boolean;
  referenceDate?: Date;
  disablePastDates?: boolean;
  disableFutureDates?: boolean;
  includeReferenceDate?: boolean;
  disablePastMonths?: boolean;
  disableFutureMonths?: boolean;
  minDate?: Date;
  maxDate?: Date;
  selectionMode?: SelectionMode;
  limitCount?: number;
  dayNames?: string[];
  monthNames?: string[];
  monthTrim?: number;
  weekLabelTrim?: number;
  custom?: CalendarCustomProps;
  disableBeforeReference?: boolean;
  disableAfterReference?: boolean;
}

export function Calendar({
  isRTL = false,
  selected,
  onSelect,
  onDaySelect,
  onDayUnselect,
  onMonthChange,
  disabledDates = [],
  disabledWeekdays = [],
  disableAll = false,
  referenceDate,
  disablePastDates = false,
  disableFutureDates = false,
  includeReferenceDate = false,
  disablePastMonths = false,
  disableFutureMonths = false,
  minDate,
  maxDate,
  selectionMode = "single",
  limitCount,
  dayNames,
  monthNames,
  monthTrim,
  weekLabelTrim,
  custom,
  disableBeforeReference = false,
  disableAfterReference = false,
}: CalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const refDate = referenceDate
    ? new Date(referenceDate)
    : new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const defaultLTR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const defaultRTL = ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"];
  const labels = dayNames || (isRTL ? defaultRTL : defaultLTR);

  const monthsLTR = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsRTL = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  const months = monthNames || (isRTL ? monthsRTL : monthsLTR);

  const {
    bgColor = "#0f0f0f",
    outlineColor = "#2e2e2e",
    outlineWidth = 1,
    outlineRadius = 8,
    padding = "16px",
    dayButtonWidth = 36,
    dayButtonHeight = 36,
    navButtonWidth = 28,
    navButtonHeight = 28,
    horizontalGap = 8,
    verticalGap = 8,
    headerSpacing = 12,
    dayButtonFontSize = "14px",
    weekLabelFontSize = "13px",
    monthYearFontSize = "16px",
    dayFontWeight = "500",
    weekLabelFontWeight = "600",
    monthYearFontWeight = "700",
    dayBorderWidth = 1,
    dayBorderRadius = 6,
    navBorderWidth = 1,
    navBorderRadius = 6,
    chevronIconSize = 16,
    chevronStrokeWidth = 2,
    transitionDuration = 0.3,
    dayButtondefaultBg = "transparent",
    dayButtondefaultText = "#fff",
    dayButtondefaultBorder = "#444",
    dayButtonhoverBg = "#1e1e1e",
    dayButtonhoverText = "#fff",
    dayButtonhoverBorder = "#555",
    dayButtonactiveBg = "#555",
    dayButtonactiveText = "#fff",
    dayButtonactiveBorder = "#777",
    navButtondefaultBg = "#111",
    navButtondefaultText = "#fff",
    navButtondefaultBorder = "#333",
    navButtonhoverBg = "#222",
    navButtonhoverText = "#fff",
    navButtonhoverBorder = "#555",
    weekLabelColor = "#a1a1aa",
    monthYearColor = "#ffffff",
  } = custom || {};

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>(
    Array.isArray(selected) ? selected : selected ? [selected] : []
  );
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const monthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonth = months[monthIndex];
  const trimmedMonth =
    monthTrim && currentMonth.length > monthTrim
      ? currentMonth.slice(0, monthTrim)
      : currentMonth;

  const firstDayOfMonth = new Date(currentYear, monthIndex, 1);
  const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const totalWidth =
    outlineWidth * 2 +
    7 * dayButtonWidth +
    6 * horizontalGap +
    2 * parseInt(padding);

  const limitFull =
    selectionMode === "limited" && limitCount && selectedDates.length >= limitCount;

  // ✅ Fixed: Reference rules exclude the reference date unless explicitly included
  const isDateDisabled = (d: Date) => {
    const dd = new Date(d);
    dd.setHours(0, 0, 0, 0);

    const past = disablePastDates && dd < today;
    const future = disableFutureDates && dd > today;
    const week = disabledWeekdays.includes(dd.getDay());
    const dateMatch = disabledDates.some((x) => isSameDay(dd, x));
    const beforeMin = minDate && dd < minDate;
    const afterMax = maxDate && dd > maxDate;

    let beforeRef = false;
    let afterRef = false;

    if (disableBeforeReference) {
      beforeRef = includeReferenceDate ? dd <= refDate : dd < refDate;
    }
    if (disableAfterReference) {
      afterRef = includeReferenceDate ? dd >= refDate : dd > refDate;
    }

    // ✅ Ensure reference date itself is NOT disabled unless included explicitly
    if (isSameDay(dd, refDate) && !includeReferenceDate) {
      beforeRef = false;
      afterRef = false;
    }

    return past || future || week || dateMatch || beforeMin || afterMax || beforeRef || afterRef;
  };

  const isSelected = (d: Date) => selectedDates.some((s) => isSameDay(d, s));

  const handleDayClick = (day: number) => {
    if (disableAll) return;
    const date = new Date(currentYear, monthIndex, day, 12);
    if (isDateDisabled(date)) return;
    if (selectionMode === "none") return;

    setSelectedDates((prev) => {
      const exists = prev.some((x) => isSameDay(x, date));
      let next: Date[];

      if (exists) {
        next = prev.filter((x) => !isSameDay(x, date));
        onDayUnselect?.(date, next);
        onSelect?.(next);
      } else if (limitFull && selectionMode === "limited") {
        return prev;
      } else if (selectionMode === "single") {
        next = [date];
        onDaySelect?.(date, next);
        onSelect?.(date);
      } else {
        next = [...prev, date];
        onDaySelect?.(date, next);
        onSelect?.(next);
      }
      return next;
    });
  };

  function canGoPrev() {
    const prev = new Date(currentYear, monthIndex - 1, 1);
    if (disablePastMonths && prev < new Date(today.getFullYear(), today.getMonth(), 1))
      return false;
    if (minDate) {
      const minMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
      if (prev < minMonth) return false;
    }
    return true;
  }

  function canGoNext() {
    const next = new Date(currentYear, monthIndex + 1, 1);
    if (disableFutureMonths && next > new Date(today.getFullYear(), today.getMonth(), 1))
      return false;
    if (maxDate) {
      const maxMonth = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
      if (next > maxMonth) return false;
    }
    return true;
  }

  const goPrev = () => {
    if (!canGoPrev()) return;
    const newDate = new Date(currentYear, monthIndex - 1, 1);
    setDirection("prev");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const goNext = () => {
    if (!canGoNext()) return;
    const newDate = new Date(currentYear, monthIndex + 1, 1);
    setDirection("next");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const goPrevUsingGesture = () => {
    if (!canGoPrev()) return;
    const newDate = isRTL
      ? new Date(currentYear, monthIndex + 1, 1) // RTL: swipe right → previous month visually, next in logic
      : new Date(currentYear, monthIndex - 1, 1); // LTR: swipe right → previous month
    setDirection(isRTL ? "prev" : "next");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const goNextUsingGesture = () => {
    if (!canGoNext()) return;
    const newDate = isRTL
      ? new Date(currentYear, monthIndex - 1, 1) // RTL: swipe left → next month visually, previous in logic
      : new Date(currentYear, monthIndex + 1, 1); // LTR: swipe left → next month
    setDirection(isRTL ? "next" : "prev");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goNextUsingGesture,
    onSwipedRight: goPrevUsingGesture,
  });

  const renderDays = () => {
    const nodes: JSX.Element[] = [];

    for (let i = 0; i < 7; i++) {
      let label = labels[i];
      if (weekLabelTrim && label.length > weekLabelTrim)
        label = label.slice(0, weekLabelTrim);
      nodes.push(
        <div
          key={\`header-\${i}\`}
          style={{
            width: dayButtonWidth,
            height: dayButtonHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: weekLabelFontSize,
            fontWeight: weekLabelFontWeight,
            color: weekLabelColor,
            marginBottom: verticalGap / 2,
            userSelect: "none",
          }}
        >
          {label}
        </div>
      );
    }

    for (let i = 0; i < firstDayOfWeek; i++)
      nodes.push(
        <div key={\`empty-\${i}\`} style={{ width: dayButtonWidth, height: dayButtonHeight }} />
      );

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, monthIndex, day, 12);
      const disabled = isDateDisabled(date);
      const selected = isSelected(date);
      const hardDisabled = limitFull && !selected && selectionMode === "limited";
      const isDisabled = Boolean(disableAll || disabled || hardDisabled);

      nodes.push(
        <div key={\`day-\${day}\`} style={{ width: dayButtonWidth, height: dayButtonHeight }}>
          <button
            disabled={!!isDisabled}
            onClick={() => handleDayClick(day)}
            style={{
              width: dayButtonWidth,
              height: dayButtonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: dayBorderRadius,
              borderWidth: dayBorderWidth,
              borderStyle: "solid",
              borderColor: selected ? dayButtonactiveBorder : dayButtondefaultBorder,
              backgroundColor: selected ? dayButtonactiveBg : dayButtondefaultBg,
              color: selected ? dayButtonactiveText : dayButtondefaultText,
              fontSize: dayButtonFontSize,
              fontWeight: dayFontWeight,
              lineHeight: 1,
              textAlign: "center",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.4 : 1,
              transition: \`all \${transitionDuration}s ease\`,
            }}
            onMouseEnter={(e) => {
              if (!selected && !isDisabled) {
                e.currentTarget.style.backgroundColor = dayButtonhoverBg!;
                e.currentTarget.style.borderColor = dayButtonhoverBorder!;
                e.currentTarget.style.color = dayButtonhoverText!;
              }
            }}
            onMouseLeave={(e) => {
              if (!selected) {
                e.currentTarget.style.backgroundColor = dayButtondefaultBg!;
                e.currentTarget.style.borderColor = dayButtondefaultBorder!;
                e.currentTarget.style.color = dayButtondefaultText!;
              }
            }}
          >
            {day}
          </button>
        </div>
      );
    }

    return nodes;
  };

  return (
    <div
      {...handlers}
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundColor: bgColor,
        border: \`\${outlineWidth}px solid \${outlineColor}\`,
        borderRadius: outlineRadius,
        padding,
        width: totalWidth,
        overflow: "hidden", // ✅ Prevent animation overflow
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ marginBottom: headerSpacing }}
      >
        <BlurText
          texts={[\`\${trimmedMonth} \${currentYear}\`]}
          monthYearColor={monthYearColor}
          monthYearFontSize={monthYearFontSize}
          monthYearFontWeight={monthYearFontWeight}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={!canGoPrev()}
            style={{
              width: navButtonWidth,
              height: navButtonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: navBorderRadius,
              borderWidth: navBorderWidth,
              borderStyle: "solid",
              borderColor: navButtondefaultBorder,
              backgroundColor: navButtondefaultBg,
              color: navButtondefaultText,
              opacity: canGoPrev() ? 1 : 0.4,
              cursor: canGoPrev() ? "pointer" : "not-allowed",
              transition: \`all \${transitionDuration}s ease\`,
            }}
            onMouseEnter={(e) => {
              if (canGoPrev()) {
                e.currentTarget.style.backgroundColor = navButtonhoverBg!;
                e.currentTarget.style.borderColor = navButtonhoverBorder!;
                e.currentTarget.style.color = navButtonhoverText!;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = navButtondefaultBg!;
              e.currentTarget.style.borderColor = navButtondefaultBorder!;
              e.currentTarget.style.color = navButtondefaultText!;
            }}
          >
            {isRTL ? (
              <ChevronRight size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            ) : (
              <ChevronLeft size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            )}
          </button>

          <button
            onClick={goNext}
            disabled={!canGoNext()}
            style={{
              width: navButtonWidth,
              height: navButtonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: navBorderRadius,
              borderWidth: navBorderWidth,
              borderStyle: "solid",
              borderColor: navButtondefaultBorder,
              backgroundColor: navButtondefaultBg,
              color: navButtondefaultText,
              opacity: canGoNext() ? 1 : 0.4,
              cursor: canGoNext() ? "pointer" : "not-allowed",
              transition: \`all \${transitionDuration}s ease\`,
            }}
            onMouseEnter={(e) => {
              if (canGoNext()) {
                e.currentTarget.style.backgroundColor = navButtonhoverBg!;
                e.currentTarget.style.borderColor = navButtonhoverBorder!;
                e.currentTarget.style.color = navButtonhoverText!;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = navButtondefaultBg!;
              e.currentTarget.style.borderColor = navButtondefaultBorder!;
              e.currentTarget.style.color = navButtondefaultText!;
            }}
          >
            {isRTL ? (
              <ChevronLeft size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            ) : (
              <ChevronRight size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={\`\${monthIndex}-\${currentYear}\`}
          custom={direction}
          variants={{
            enter: (d: "next" | "prev") => ({
              x: isRTL ? (d === "next" ? 40 : -40) : d === "next" ? -40 : 40,
              opacity: 0,
            }),
            center: { x: 0, opacity: 1 },
            exit: (d: "next" | "prev") => ({
              x: isRTL ? (d === "next" ? -40 : 40) : d === "next" ? 40 : -40,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="grid grid-cols-7 text-center w-full"
          style={{ gap: \`\${verticalGap}px \${horizontalGap}px\` }}
        >
          {renderDays()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}`,
    props: [
      { name: "isRTL", type: "boolean", description: "calendar_prop_isRTL", required: false },
      { name: "selected", type: "Date | Date[]", description: "calendar_prop_selected", required: false },
      { name: "onSelect", type: "(date: Date | Date[]) => void", description: "calendar_prop_onSelect", required: false },
      { name: "onDaySelect", type: "(date: Date, all: Date[]) => void", description: "calendar_prop_onDaySelect", required: false },
      { name: "onDayUnselect", type: "(date: Date, all: Date[]) => void", description: "calendar_prop_onDayUnselect", required: false },
      { name: "onMonthChange", type: "(date: Date) => void", description: "calendar_prop_onMonthChange", required: false },
      { name: "disabledDates", type: "Date[]", description: "calendar_prop_disabledDates", required: false },
      { name: "disabledWeekdays", type: "number[]", description: "calendar_prop_disabledWeekdays", required: false },
      { name: "disableAll", type: "boolean", description: "calendar_prop_disableAll", required: false },
      { name: "referenceDate", type: "Date", description: "calendar_prop_referenceDate", required: false },
      { name: "disablePastDates", type: "boolean", description: "calendar_prop_disablePastDates", required: false },
      { name: "disableFutureDates", type: "boolean", description: "calendar_prop_disableFutureDates", required: false },
      { name: "includeReferenceDate", type: "boolean", description: "calendar_prop_includeReferenceDate", required: false },
      { name: "disablePastMonths", type: "boolean", description: "calendar_prop_disablePastMonths", required: false },
      { name: "disableFutureMonths", type: "boolean", description: "calendar_prop_disableFutureMonths", required: false },
      { name: "minDate", type: "Date", description: "calendar_prop_minDate", required: false },
      { name: "maxDate", type: "Date", description: "calendar_prop_maxDate", required: false },
      { name: "selectionMode", type: "\"none\" | \"single\" | \"multiple\" | \"limited\"", description: "calendar_prop_selectionMode", required: false },
      { name: "limitCount", type: "number", description: "calendar_prop_limitCount", required: false },
      { name: "dayNames", type: "string[]", description: "calendar_prop_dayNames", required: false },
      { name: "monthNames", type: "string[]", description: "calendar_prop_monthNames", required: false },
      { name: "monthTrim", type: "number", description: "calendar_prop_monthTrim", required: false },
      { name: "weekLabelTrim", type: "number", description: "calendar_prop_weekLabelTrim", required: false },
      { name: "custom", type: "CalendarCustomProps", description: "calendar_prop_custom", required: false },
      { name: "disableBeforeReference", type: "boolean", description: "calendar_prop_disableBeforeReference", required: false },
      { name: "disableAfterReference", type: "boolean", description: "calendar_prop_disableAfterReference", required: false }
    ],
  },
  {
    id: 'submit-card',
    title: 'submit_card_title',
    description: 'submit_card_desc',
    demo: SubmitCardPreviewDemo,
    demoFullPage: SubmitCardFullPageDemo,
    dependencies: `npm install framer-motion
npm install clsx tailwind-merge`,
    credit: `[AnimateIcons](https://animateicons.vercel.app/)
[Bento Grid](https://ui.aceternity.com/components/bento-grid) by [Aceternity UI](https://ui.aceternity.com/)
[File Upload](https://ui.aceternity.com/components/file-upload) by [Aceternity UI](https://ui.aceternity.com/)`,
    usage: `// Path to the "SubmitCard.tsx" file
import SubmitCard from "@/app/the-actual-components/submit-card/SubmitCard";
import React from "react";

const darkThemeProps = {
  backgroundColor: "#0a0a0a",
  borderColor: "#262626",
  innerAreaBorderColor: "#262626",
  innerAreaBgColor: "#111111",
  squareBgColor: "#ffffff",
  titleColor: "#ffffff",
  descriptionColor: "#aaaaaa",
};

export default function SubmitCardDemo() {
  return (
    <div className="flex flex-wrap gap-6 justify-start">
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="Submit Your Project"
          description="Made a project that uses at least one Namer UI component? Submit it now for a chance to get featured!"
          backgroundColor={darkThemeProps.backgroundColor}
          borderColor={darkThemeProps.borderColor}
          innerBorderColor={darkThemeProps.innerAreaBorderColor}
          innerAreaBgColor={darkThemeProps.innerAreaBgColor}
          plusIconColor="#00a7fa"
          dashedBorderColor="#00a7fa"
          titleColor={darkThemeProps.titleColor}
          descriptionColor={darkThemeProps.descriptionColor}
          isRTL={false}
          useDrawIcon
        />
      </div>
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="שלח את הפרויקט שלך"
          description="יצרת פרויקט המשתמש בלפחות רכיב אחד של נמר UI? שלח אותו עכשיו כדי לקבל הזדמנות להופיע!"
          backgroundColor={darkThemeProps.backgroundColor}
          borderColor={darkThemeProps.borderColor}
          innerBorderColor={darkThemeProps.innerAreaBorderColor}
          innerAreaBgColor={darkThemeProps.innerAreaBgColor}
          plusIconColor="#d500ff"
          dashedBorderColor="#d500ff"
          titleColor={darkThemeProps.titleColor}
          descriptionColor={darkThemeProps.descriptionColor}
          isRTL
          useDrawIcon
        />
      </div>
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="Envía tu proyecto"
          description="¿Has creado un proyecto que utilice al menos un componente de Namer UI? ¡Envíalo ahora para tener la oportunidad de ser destacado!"
          backgroundColor="#f9f9f9"
          borderColor="#cccccc"
          innerBorderColor="#d5d5d5"
          innerAreaBgColor="#e1e1e1"
          squareBgColor="#222222"
          plusIconColor="#00a7fa"
          dashedBorderColor="#d500ff"
          titleColor="#222222"
          descriptionColor="#555555"
          isRTL={false}
          centerContent
        />
      </div>
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://clandestine-beauty-salon-landing-page.netlify.app/"
          title="Clandestine"
          description="A modern beauty salon landing page template featuring an appointment reservation UI and multilingual support."
          imageSrc="https://github.com/Northstrix/namer-ui/blob/main/public/showcase/clandestine.webp?raw=true"
          backgroundColor={darkThemeProps.backgroundColor}
          borderColor={darkThemeProps.borderColor}
          innerBorderColor={darkThemeProps.innerAreaBorderColor}
          innerAreaBgColor="#000"
          titleColor={darkThemeProps.titleColor}
          descriptionColor={darkThemeProps.descriptionColor}
          isRTL={false}
        />
      </div>
    </div>
  );
}`,
    includeClassMerger: true,
    code: `"use client";

import {
  motion,
  Variants,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  useId,
  CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

const mainVariant: Variants = {
  initial: { x: 0, y: 0, boxShadow: "0px 10px 50px rgba(0,0,0,0.1)" },
  animate: { x: 20, y: -20, boxShadow: "0px 10px 50px rgba(0,0,0,0.2)" },
};

const mainVariantRTL: Variants = {
  initial: { x: 0, y: 0, boxShadow: "0px 10px 50px rgba(0,0,0,0.1)" },
  animate: { x: -20, y: -20, boxShadow: "0px 10px 50px rgba(0,0,0,0.2)" },
};

const secondaryVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export interface PlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
interface PlusIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}
const PlusIconDraw = forwardRef<PlusIconHandle, PlusIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, color = "#00a7fa", ...props }, ref) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);
    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });
    const handleEnter = useCallback(() => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(undefined as any);
    }, [controls, reduced, onMouseEnter]);
    const handleLeave = useCallback(() => {
      if (!isControlled.current) controls.start("normal");
      else onMouseLeave?.(undefined as any);
    }, [controls, onMouseLeave]);
    const plusVariants: Variants = {
      normal: { scale: 1, rotate: 0 },
      animate: {
        scale: [1, 1.2, 0.85, 1],
        rotate: [0, 10, -10, 0],
        transition: { duration: 1, ease: "easeInOut", repeat: 0 },
      },
    };
    const lineVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0, 1],
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
          repeat: 0,
          repeatDelay: 0.4,
        },
      },
    };
    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 21"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={plusVariants}
        >
          <motion.path d="M5 12h14" variants={lineVariants} />
          <motion.path d="M12 5v14" variants={lineVariants} />
        </motion.svg>
      </motion.div>
    );
  }
);
PlusIconDraw.displayName = "PlusIconDraw";

interface PlusIconRotateProps {
  size?: number;
  color?: string;
  durationMs?: number;
  isSpinningCW?: boolean;
}
const PlusIconRotate: React.FC<PlusIconRotateProps> = ({
  size = 42,
  color = "#00a7fa",
  durationMs = 400,
  isSpinningCW = false,
}) => {
  const spin: CSSProperties = {
    animation: \`\${isSpinningCW ? "spinCW" : "spinCCW"} \${
      durationMs / 1000
    }s ease-in-out 1\`,
    transformOrigin: "center",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={spin}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <style>
        {\`
          @keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        \`}
      </style>
    </svg>
  );
};

interface SubmitCardProps {
  id?: string;
  isRTL?: boolean;
  link: string;
  title: string;
  description: string;
  imageSrc?: string;
  useDrawIcon?: boolean;
  centerContent?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  innerAreaBgColor?: string;
  innerBorderColor?: string;
  squareBgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  plusIconColor?: string;
  dashedBorderColor?: string;
  textHoverShift?: number;
  borderRadius?: string;
}

export default function SubmitCard({
  id,
  isRTL = false,
  link,
  title,
  description,
  imageSrc,
  useDrawIcon = false,
  centerContent = false,
  backgroundColor = "#0a0a0a",
  borderColor = "#262626",
  innerAreaBgColor = "#111111",
  innerBorderColor = "#333333",
  squareBgColor = "#ffffff",
  titleColor = "#ffffff",
  descriptionColor = "#aaaaaa",
  plusIconColor = "#00a7fa",
  dashedBorderColor = "#00a7fa",
  textHoverShift = 6,
  borderRadius = "8px",
}: SubmitCardProps) {
  const componentId = id ?? useId();
  const plusIconRef = useRef<PlusIconHandle>(null);
  const [hover, setHover] = useState(false);
  const [imageError, setImageError] = useState(false);

  const textDirection = isRTL ? "rtl" : "ltr";
  const baseTextAlign = centerContent ? "center" : isRTL ? "right" : "left";
  const showImage = imageSrc && !imageError;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      dir={textDirection}
      className="group block p-4 overflow-hidden transition-all duration-200"
      style={{
        borderRadius,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
        backgroundColor,
        textAlign: baseTextAlign,
        display: "flex",
        flexDirection: "column",
        justifyContent: centerContent ? "center" : "flex-start",
      }}
      initial="initial"
      whileHover="animate"
      onHoverStart={() => {
        setHover(true);
        plusIconRef.current?.startAnimation();
      }}
      onHoverEnd={() => {
        setHover(false);
        plusIconRef.current?.stopAnimation();
      }}
    >
      {/* Inner area container visually mirrored only for RTL */}
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <div
          className="w-full h-full relative grid place-items-center border overflow-hidden"
          style={{
            borderRadius,
            borderColor: innerBorderColor,
            backgroundColor: innerAreaBgColor,
          }}
        >
          {/* Image as background covering entire inner area if valid */}
          {showImage ? (
            <div
              aria-labelledby={componentId + "-title"}
              aria-describedby={componentId + "-desc"}
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: innerAreaBgColor,
                backgroundImage: \`url(\${imageSrc})\`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius,
              }}
            />
          ) : imageSrc && imageError ? (
            // Broken image fallback: empty bordered box, no icon or square
            <div
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: innerAreaBgColor,
                borderRadius,
              }}
            />
          ) : (
            // No image: dashed border + animated plus icon container
            <div className="relative w-auto h-1/2 aspect-square">
              <motion.div
                variants={secondaryVariant}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="absolute inset-0 border border-dashed"
                style={{
                  borderColor: dashedBorderColor,
                  borderRadius: borderRadius,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
              <motion.div
                layoutId={"file-upload-" + componentId}
                variants={isRTL ? mainVariantRTL : mainVariant}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 flex items-center justify-center h-full w-full mx-auto shadow-lg"
                style={{ backgroundColor: squareBgColor, borderRadius: borderRadius, }}
              >
                <div
                  style={{
                    transform: !showImage && isRTL ? "scaleX(-1)" : "none",
                  }}
                >
                  {useDrawIcon ? (
                    <PlusIconDraw
                      ref={plusIconRef}
                      size={42}
                      color={plusIconColor}
                    />
                  ) : (
                    <PlusIconRotate
                      size={42}
                      color={plusIconColor}
                      isSpinningCW={hover}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden img for error detection only */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          style={{ display: "none" }}
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
          key={componentId + "-img"}
        />
      )}

      {/* Text content */}
      <div
        className="pt-4 font-sans transition duration-200"
        style={{
          direction: textDirection,
          textAlign: baseTextAlign,
          transform: hover
            ? \`translateX(\${isRTL ? -textHoverShift : textHoverShift}px)\`
            : "none",
        }}
        id={componentId + "-text"}
      >
        <h3
          id={componentId + "-title"}
          className="text-[22px] mb-2 font-semibold"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p
          id={componentId + "-desc"}
          className="text-base"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      </div>
    </motion.a>
  );
}`,
    props: [
      { name: "id", type: "string", description: "submit_card_prop_id", required: false },
      { name: "isRTL", type: "boolean", defaultValue: "false", description: "submit_card_prop_isRTL", required: false },
      { name: "link", type: "string", description: "submit_card_prop_link", required: true },
      { name: "title", type: "string", description: "submit_card_prop_title", required: true },
      { name: "description", type: "string", description: "submit_card_prop_description", required: true },
      { name: "imageSrc", type: "string", description: "submit_card_prop_imageSrc", required: false },
      { name: "useDrawIcon", type: "boolean", defaultValue: "false", description: "submit_card_prop_useDrawIcon", required: false },
      { name: "centerContent", type: "boolean", defaultValue: "false", description: "submit_card_prop_centerContent", required: false },
      { name: "backgroundColor", type: "string", defaultValue: "#0a0a0a", description: "submit_card_prop_backgroundColor", required: false },
      { name: "borderColor", type: "string", defaultValue: "#262626", description: "submit_card_prop_borderColor", required: false },
      { name: "innerAreaBgColor", type: "string", defaultValue: "#111111", description: "submit_card_prop_innerAreaBgColor", required: false },
      { name: "innerBorderColor", type: "string", defaultValue: "#333333", description: "submit_card_prop_innerBorderColor", required: false },
      { name: "squareBgColor", type: "string", defaultValue: "#ffffff", description: "submit_card_prop_squareBgColor", required: false },
      { name: "titleColor", type: "string", defaultValue: "#ffffff", description: "submit_card_prop_titleColor", required: false },
      { name: "descriptionColor", type: "string", defaultValue: "#aaaaaa", description: "submit_card_prop_descriptionColor", required: false },
      { name: "plusIconColor", type: "string", defaultValue: "#00a7fa", description: "submit_card_prop_plusIconColor", required: false },
      { name: "dashedBorderColor", type: "string", defaultValue: "#00a7fa", description: "submit_card_prop_dashedBorderColor", required: false },
      { name: "textHoverShift", type: "number", defaultValue: "6", description: "submit_card_prop_textHoverShift", required: false },
      { name: "borderRadius", type: "string", defaultValue: "8px", description: "submit_card_prop_borderRadius", required: false },
    ],
  },
  {
    id: 'halloween-submit-card',
    title: 'halloween_submit_card_title',
    description: 'halloween_submit_card_desc',
    demo: HalloweenSubmitCardPreviewDemo,
    demoFullPage: HalloweenSubmitCardFullPageDemo,
    dependencies: `npm install framer-motion
npm install clsx tailwind-merge`,
    credit: `[AnimateIcons](https://animateicons.vercel.app/)
[Bento Grid](https://ui.aceternity.com/components/bento-grid) by [Aceternity UI](https://ui.aceternity.com/)
[File Upload](https://ui.aceternity.com/components/file-upload) by [Aceternity UI](https://ui.aceternity.com/)
[Vercel app border hover effect](https://codepen.io/Juxtopposed/pen/xxQNozB) by [Juxtopposed](https://codepen.io/Juxtopposed)`,
    usage: `// Path to the "HalloweenSubmitCard.tsx" file
import HalloweenSubmitCard from "@/app/the-actual-components/halloween-submit-card/HalloweenSubmitCard";
import React from "react";

export default function HalloweenSubmitCardDemo() {
  return (
    <div className="flex flex-wrap gap-16 justify-start">
      {/* 1. LTR — Default Color Theme (uses component defaults) */}
      <div style={{ maxWidth: 376 }}>
        <HalloweenSubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="Submit Your Project"
          description="Made a project that uses at least one Namer UI component? Submit it now for a chance to get featured!"
          useDrawIcon
        />
      </div>

      {/* 2. RTL — Deep Purple Theme */}
      <div style={{ maxWidth: 376 }}>
        <HalloweenSubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="שלח את הפרויקט שלך"
          description="יצרת פרויקט המשתמש בלפחות רכיב אחד של נמר UI? שלח אותו עכשיו כדי לקבל הזדמנות להופיע!"
          accent="#a800ff"
          accentAdjacentColor="#5c00b3"
          accentGlow="rgba(160, 0, 255, 0.85)"
          secondInteractiveColor="#3c005c"
          cardBg="#0a0010"
          innerBg="#190028"
          textTitle="#f4e9ff"
          textDesc="#c8a2ff"
          isRTL
          useDrawIcon
          initialRotation={3.7}
          innerBorderColor="rgba(160, 0, 255, 0.55)"
          bodyGlow="rgba(160, 0, 255, 0.35)"
          squareBgColor="#f4e9ff"
          squareGlow="rgba(160, 0, 255, 0.45)"
        />
      </div>

      {/* 3. LTR — Blue Light Theme Variant */}
      <div style={{ maxWidth: 376 }}>
        <HalloweenSubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="Envía tu proyecto"
          description="¿Has creado un proyecto que utilice al menos un componente de Namer UI? ¡Envíalo ahora para tener la oportunidad de ser destacado!"
          accent="#00A7FA"
          accentAdjacentColor="#0091E2"
          accentGlow="rgba(0, 167, 250, 0.85)"
          secondInteractiveColor="#66C9FF"
          cardBg="#E1F3FF"
          innerBg="#F4FAFF"
          innerBorderColor="rgba(0, 167, 250, 0.4)"
          textTitle="#0C2E4A"
          textDesc="#1172A5"
          bodyGlow="rgba(0, 167, 250, 0.25)"
          squareGlow="rgba(0, 140, 230, 0.4)"
          squareBgColor="#001B3C"
          isRTL={false}
          centerText
          enableGlow
          initialRotation={2.8}
        />
      </div>

      {/* 4. LTR — Image Card, Default Theme */}
      <div style={{ maxWidth: 376 }}>
        <HalloweenSubmitCard
          link="https://clandestine-beauty-salon-landing-page.netlify.app/"
          title="Clandestine"
          description="A modern beauty salon landing page template featuring an appointment reservation UI and multilingual support."
          imageSrc="https://github.com/Northstrix/namer-ui/blob/main/public/showcase/clandestine.webp?raw=true"
          enableGlow
          innerBg="#000"
          isRTL={false}
          initialRotation={1.8}
        />
      </div>
    </div>
  );
}`,
    includeClassMerger: true,
    code: `"use client";
    
import {
  motion,
  Variants,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  useId,
  CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Plus Icons (identical visual fidelity)
// ---------------------------------------------------------------------------
export interface PlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlusIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

const PlusIconDraw = forwardRef<PlusIconHandle, PlusIconProps>(
  (
    { onMouseEnter, onMouseLeave, className, size = 42, color = "#ff7518", ...props },
    ref
  ) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleEnter = useCallback(() => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(undefined as any);
    }, [controls, reduced, onMouseEnter]);

    const handleLeave = useCallback(() => {
      if (!isControlled.current) controls.start("normal");
      else onMouseLeave?.(undefined as any);
    }, [controls, onMouseLeave]);

    const plusVariants: Variants = {
      normal: { scale: 1, rotate: 0 },
      animate: {
        scale: [1, 1.2, 0.85, 1],
        rotate: [0, 10, -10, 0],
        transition: { duration: 1, ease: "easeInOut" },
      },
    };

    const lineVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0, 1],
        transition: { duration: 0.6, ease: "easeInOut" },
      },
    };

    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={plusVariants}
          className="draw-icon"
        >
          <motion.path d="M5 12h14" variants={lineVariants} />
          <motion.path d="M12 5v14" variants={lineVariants} />
        </motion.svg>
      </motion.div>
    );
  }
);
PlusIconDraw.displayName = "PlusIconDraw";

export const PlusIconRotate: React.FC<{
  size?: number;
  color?: string;
  durationMs?: number;
  isSpinningCW?: boolean;
}> = ({ size = 42, color = "#ff7518", durationMs = 400, isSpinningCW = false }) => {
  const spin: CSSProperties = {
    animation: \`\${isSpinningCW ? "spinCW" : "spinCCW"} \${
      durationMs / 1000
    }s ease-in-out 1\`,
    transformOrigin: "center",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={spin}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <style>{\`
        @keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      \`}</style>
    </svg>
  );
};

// ---------------------------------------------------------------------------
// Enhanced Halloween Card
// ---------------------------------------------------------------------------
interface HalloweenSubmitCardProps {
  id?: string;
  isRTL?: boolean;
  link: string;
  title: string;
  description: string;
  imageSrc?: string;
  useDrawIcon?: boolean;

  accent?: string;
  accentAdjacentColor?: string;
  accentGlow?: string;
  secondInteractiveColor?: string;
  cardBg?: string;
  innerBg?: string;
  textTitle?: string;
  textDesc?: string;

  enableGlow?: boolean;
  innerBorderColor?: string;
  squareBgColor?: string;
  bodyGlow?: string;
  squareGlow?: string;

  initialRotation?: number;
  gradientStops?: { start?: number; mid?: number; end?: number };
  centerText?: boolean;
}

export default function HalloweenSubmitCard({
  id,
  isRTL = false,
  link,
  title,
  description,
  imageSrc,
  useDrawIcon = false,

  accent = "#ff7518",
  accentAdjacentColor = "#b13d00",
  accentGlow = "rgba(255,117,24,0.9)",
  secondInteractiveColor = "#5f1907",
  cardBg = "#0a0501",
  innerBg = "#110903",
  textTitle = "#fffbe6",
  textDesc = "#ffa94d",

  enableGlow = true,
  innerBorderColor = "rgba(255,117,24,0.5)",
  squareBgColor = "#fdf5d4",
  bodyGlow = "rgba(255,130,0,0.3)",
  squareGlow = "rgba(255,117,24,0.5)",

  initialRotation = 2.5,
  gradientStops = { start: 0, mid: 50, end: 90 },
  centerText = false,
}: HalloweenSubmitCardProps) {
  const componentId = id ?? useId();
  const plusIconRef = useRef<PlusIconHandle>(null);
  const [hover, setHover] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [angle, setAngle] = useState(initialRotation);

  const showImage = !!imageSrc && !imageError;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setAngle(Math.atan2(-x, y));
  };

  // ---------------------------------------------------------------
  // Fixed gradient background: both layers are transparent-safe
  // Uses alpha channel instead of solid cardBg to prevent black overlay
  // ---------------------------------------------------------------
  const gradient = \`linear-gradient(to bottom, \${cardBg}CC, \${cardBg}CC), 
    linear-gradient(\${angle}rad, 
    \${accent} \${gradientStops.start}%, 
    \${accentAdjacentColor} \${gradientStops.mid}%, 
    \${secondInteractiveColor} \${gradientStops.end}%)\`;
  
  const baseShadow = enableGlow
    ? \`0 0 0 1px rgba(255,255,255,0.08), 0 0 20px \${bodyGlow}, 0 0 40px \${bodyGlow}\`
    : \`0 0 0 1px rgba(255,255,255,0.08)\`;

  const hoverShadow = enableGlow
    ? \`0 0 35px \${accentGlow}, 0 0 80px \${accentGlow}, inset 0 0 20px \${accentGlow}\`
    : baseShadow;

  const cardShadow = hover ? hoverShadow : baseShadow;
  const textAlign = centerText ? "center" : isRTL ? "right" : "left";

  return (
    <motion.a
      id={componentId}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      dir={isRTL ? "rtl" : "ltr"}
      className="group block transition-all duration-400"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setHover(true);
        plusIconRef.current?.startAnimation();
      }}
      onMouseLeave={() => {
        setHover(false);
        plusIconRef.current?.stopAnimation();
      }}
      style={{
        width: 360,
        display: "flex",
        flexDirection: "column",
        padding: 16,
        borderRadius: "16px",
        backgroundImage: gradient,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box,border-box",
        boxShadow: cardShadow,
        border: "2px solid transparent",
        transition: "box-shadow .45s ease, transform .45s ease",
        cursor: "pointer",
        backgroundColor: "transparent",
      }}
    >
      <div
        className={cn("relative w-full grid place-items-center overflow-hidden")}
        style={{
          aspectRatio: "16/10",
          borderRadius: "16px",
          backgroundColor: innerBg,
          border: \`2px solid \${innerBorderColor}\`,
          transform: isRTL ? "scaleX(-1)" : "none",
          transition: "all 0.5s ease",
        }}
      >
        {showImage ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            style={{ borderRadius: "16px" }}
            onError={() => setImageError(true)}
          />
        ) : (
          <>
            <div
              className="absolute h-1/2 aspect-square border-dashed transition-opacity"
              style={{
                border: \`2px dashed \${accent}\`,
                borderRadius: "16px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                opacity: hover ? 1 : 0,
                transition: "opacity .5s ease",
              }}
            ></div>
            <div
              className="absolute"
              style={{
                height: "50%",
                aspectRatio: "1/1",
                top: "50%",
                left: "50%",
                transform: hover
                  ? "translate(calc(-50% + 15px), calc(-50% - 15px))"
                  : "translate(-50%,-50%)",
                backgroundColor: squareBgColor,
                border: \`1px solid \${innerBorderColor}\`,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform .5s ease, box-shadow .5s ease",
                boxShadow: enableGlow
                  ? hover
                    ? \`0 0 40px \${squareGlow}\`
                    : \`0 0 20px \${squareGlow}\`
                  : "none",
              }}
            >
              {useDrawIcon ? (
                <PlusIconDraw ref={plusIconRef} color={accent} />
              ) : (
                <PlusIconRotate color={accent} isSpinningCW={hover} />
              )}
            </div>
          </>
        )}
      </div>

      <div
        className="pt-4 font-sans transition-transform duration-300"
        style={{
          textAlign,
          transform: hover ? \`translateX(\${isRTL ? -6 : 6}px)\` : "none",
        }}
      >
        <h3
          className="text-[22px] mb-2 font-semibold"
          style={{
            color: textTitle,
            textShadow: \`0 0 8px \${accent}\`,
          }}
        >
          {title}
        </h3>
        <p
          className="text-base"
          style={{
            color: textDesc,
            textAlign,
          }}
        >
          {description}
        </p>
      </div>
    </motion.a>
  );
}`,
    props: [
      { name: "id", type: "string", description: "halloween_submit_card_prop_id", required: false },
      { name: "isRTL", type: "boolean", defaultValue: "false", description: "halloween_submit_card_prop_isRTL", required: false },
      { name: "link", type: "string", description: "halloween_submit_card_prop_link", required: true },
      { name: "title", type: "string", description: "halloween_submit_card_prop_title", required: true },
      { name: "description", type: "string", description: "halloween_submit_card_prop_description", required: true },
      { name: "imageSrc", type: "string", description: "halloween_submit_card_prop_imageSrc", required: false },
      { name: "useDrawIcon", type: "boolean", defaultValue: "false", description: "halloween_submit_card_prop_useDrawIcon", required: false },
      { name: "accent", type: "string", defaultValue: "#ff7518", description: "halloween_submit_card_prop_accent", required: false },
      { name: "accentAdjacentColor", type: "string", defaultValue: "#b13d00", description: "halloween_submit_card_prop_accentAdjacentColor", required: false },
      { name: "accentGlow", type: "string", defaultValue: "rgba(255,117,24,0.9)", description: "halloween_submit_card_prop_accentGlow", required: false },
      { name: "secondInteractiveColor", type: "string", defaultValue: "#5f1907", description: "halloween_submit_card_prop_secondInteractiveColor", required: false },
      { name: "cardBg", type: "string", defaultValue: "#0a0501", description: "halloween_submit_card_prop_cardBg", required: false },
      { name: "innerBg", type: "string", defaultValue: "#110903", description: "halloween_submit_card_prop_innerBg", required: false },
      { name: "textTitle", type: "string", defaultValue: "#fffbe6", description: "halloween_submit_card_prop_textTitle", required: false },
      { name: "textDesc", type: "string", defaultValue: "#ffa94d", description: "halloween_submit_card_prop_textDesc", required: false },
      { name: "enableGlow", type: "boolean", defaultValue: "true", description: "halloween_submit_card_prop_enableGlow", required: false },
      { name: "innerBorderColor", type: "string", defaultValue: "rgba(255,117,24,0.5)", description: "halloween_submit_card_prop_innerBorderColor", required: false },
      { name: "squareBgColor", type: "string", defaultValue: "#fdf5d4", description: "halloween_submit_card_prop_squareBgColor", required: false },
      { name: "bodyGlow", type: "string", defaultValue: "rgba(255,130,0,0.3)", description: "halloween_submit_card_prop_bodyGlow", required: false },
      { name: "squareGlow", type: "string", defaultValue: "rgba(255,117,24,0.5)", description: "halloween_submit_card_prop_squareGlow", required: false },
      { name: "initialRotation", type: "number", defaultValue: "2.5", description: "halloween_submit_card_prop_initialRotation", required: false },
      { name: "gradientStops", type: "{ start?: number; mid?: number; end?: number }", defaultValue: "{ start: 0, mid: 50, end: 90 }", description: "halloween_submit_card_prop_gradientStops", required: false },
      { name: "centerText", type: "boolean", defaultValue: "false", description: "halloween_submit_card_prop_centerText", required: false }
    ],
  },
];