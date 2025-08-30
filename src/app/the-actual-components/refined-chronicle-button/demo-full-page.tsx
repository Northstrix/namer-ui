"use client";

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
  Ghost,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function RefinedChronicleButtonDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  const handleClick = (num: number) => {
    // get the translation string, e.g. "Button N{{number}} has been clicked!"
    const template = t("refined_button_toast_clicked");
    // replace the {{number}} placeholder manually
    const message = template.replace("{{number}}", String(num));

    toast({
      title: t("namer_ui"),
      description: message,
    });
  };

  return (
    <div
      id="refined-buttons-wrapper"
      className="flex flex-wrap gap-5 items-center justify-center p-12"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* 1 - Default */}
      <RefinedChronicleButton onClick={() => handleClick(1)}>Default</RefinedChronicleButton>

      {/* 2 - Info */}
      <RefinedChronicleButton
        backgroundColor="#0ea5e9"
        hoverBackgroundColor="#0369a1"
        textColor="#f0f9ff"
        hoverTextColor="#e0f2fe"
        borderRadius={12}
        fontWeight={600}
        onClick={() => handleClick(2)}
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
        onClick={() => handleClick(3)}
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
        onClick={() => handleClick(4)}
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
        onClick={() => handleClick(5)}
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
        onClick={() => handleClick(6)}
      >
        <Ghost /> Ghost
      </RefinedChronicleButton>

      {/* 7 - Archive */}
      <RefinedChronicleButton
        variant="outline"
        borderColor="#6366f1"
        hoverBorderColor="#4338ca"
        textColor="#6366f1"
        hoverTextColor="#fff"
        hoverBackgroundColor="#6366f1"
        borderRadius={10}
        onClick={() => handleClick(7)}
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
        onClick={() => handleClick(8)}
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
        onClick={() => handleClick(9)}
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
        onClick={() => handleClick(10)}
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
        onClick={() => handleClick(11)}
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
        onClick={() => handleClick(12)}
      >
        <Heart /> אהבה
      </RefinedChronicleButton>

      {/* 13 - Highlight */}
      <RefinedChronicleButton
        backgroundColor="#2563eb"
        hoverBackgroundColor="#7e22ce"
        textColor="#fff"
        hoverTextColor="#fef3c7"
        onClick={() => handleClick(13)}
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
        onClick={() => handleClick(14)}
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
        onClick={() => handleClick(15)}
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
        onClick={() => handleClick(16)}
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
        onClick={() => handleClick(17)}
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
        onClick={() => handleClick(18)}
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
        onClick={() => handleClick(19)}
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
        onClick={() => handleClick(20)}
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
        onClick={() => handleClick(21)}
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
        onClick={() => handleClick(22)}
      >
        Subtle
      </RefinedChronicleButton>

      {/* 23 - Pinky */}
      <RefinedChronicleButton
        backgroundColor="#f472b6"
        hoverBackgroundColor="#db2777"
        textColor="#fff"
        borderRadius={18}
        onClick={() => handleClick(23)}
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
        onClick={() => handleClick(24)}
      >
        <Archive /> מסמכים
      </RefinedChronicleButton>

      {/* 25 - Glow */}
      <RefinedChronicleButton
        backgroundColor="#7e22ce"
        hoverBackgroundColor="#4c1d95"
        textColor="#fff"
        iconStrokeWidth={1}
        onClick={() => handleClick(25)}
      >
        Glow
      </RefinedChronicleButton>

      {/* 26 - Lime */}
      <RefinedChronicleButton
        backgroundColor="#166534"
        hoverBackgroundColor="#84cc16"
        textColor="#dcfce7"
        hoverTextColor="#0a0a0a"
        onClick={() => handleClick(26)}
      >
        <Leaf /> Check
      </RefinedChronicleButton>

      {/* 27 - Bold Blue */}
      <RefinedChronicleButton
        backgroundColor="#1d4ed8"
        hoverBackgroundColor="#1e3a8a"
        textColor="#e0f2fe"
        fontWeight={900}
        onClick={() => handleClick(27)}
      >
        BoldBlue
      </RefinedChronicleButton>

      {/* 28 - RTL Flame */}
      <RefinedChronicleButton
        backgroundColor="#ea580c"
        hoverBackgroundColor="#c2410c"
        textColor="#fff"
        isRTL
        onClick={() => handleClick(28)}
      >
        <Flame /> אש
      </RefinedChronicleButton>

      {/* 29 - DarkGem */}
      <RefinedChronicleButton
        backgroundColor="#065f46"
        hoverBackgroundColor="#022c22"
        textColor="#a7f3d0"
        borderRadius={20}
        onClick={() => handleClick(29)}
      >
        <Gem /> DarkGem
      </RefinedChronicleButton>

      {/* 30 - Mint */}
      <RefinedChronicleButton
        backgroundColor="#99f6e4"
        hoverBackgroundColor="#2dd4bf"
        textColor="#064e3b"
        hoverTextColor="#fff"
        onClick={() => handleClick(30)}
      >
        Mint
      </RefinedChronicleButton>

      {/* 31 - LargeGray */}
      <RefinedChronicleButton
        size="lg"
        backgroundColor="#d4d4d8"
        hoverBackgroundColor="#a1a1aa"
        textColor="#111827"
        onClick={() => handleClick(31)}
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
        onClick={() => handleClick(32)}
      >
        <Mail /> OutlineMail
      </RefinedChronicleButton>

      {/* 33 - FunPink */}
      <RefinedChronicleButton
        backgroundColor="#db2777"
        hoverBackgroundColor="#9d174d"
        textColor="#fff"
        borderWidth={2}
        onClick={() => handleClick(33)}
      >
        FunPink
      </RefinedChronicleButton>

      {/* 34 - RTL Home */}
      <RefinedChronicleButton
        backgroundColor="#22c55e"
        hoverBackgroundColor="#166534"
        textColor="#d1fae5"
        isRTL
        onClick={() => handleClick(34)}
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
        onClick={() => handleClick(35)}
      >
        <Gem /> Crystal
      </RefinedChronicleButton>

      {/* 36 - Titanium */}
      <RefinedChronicleButton
        backgroundColor="#374151"
        hoverBackgroundColor="#111827"
        textColor="#f9fafb"
        hoverTextColor="#e5e7eb"
        fontWeight={900}
        fontSize={20}
        borderRadius={12}
        onClick={() => handleClick(36)}
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
        onClick={() => handleClick(37)}
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
        onClick={() => handleClick(38)}
      >
        <Lock /> הצפנה
      </RefinedChronicleButton>
    </div>
  );
}
