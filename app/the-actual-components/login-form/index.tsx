'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "LoginForm.tsx" file
import LoginForm from '@/app/the-actual-components/login-form/LoginForm'

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '36px',
  justifyContent: 'center',
  padding: '32px',
  backgroundColor: '#050505',
  borderRadius: '8px',
  minHeight: '300px'
}}>
  {/* 1. Default */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
    <span style={{
      color: '#aaa',
      fontSize: '14px',
      marginBottom: '12px',
      fontWeight: 500,
      letterSpacing: '0.01em'
    }}>
      No icon outline
    </span>
    <LoginForm
      cardOutlineStyle="double-radius"
      iconUrl="https://raw.githubusercontent.com/Northstrix/namer-ui/refs/heads/main/screenshots/456x456px-logo.png"
      iconOutlineWidth="0px"
      iconPadding="0px"
      onSubmit={data => alert(JSON.stringify(data, null, 2))}
    />
  </div>

  {/* 2. Hebrew, custom color, no rounding */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
    <span style={{
      color: '#aaa',
      fontSize: '14px',
      marginBottom: '12px',
      fontWeight: 500,
      letterSpacing: '0.01em'
    }}>
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
      titleFontWeight={800}
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
    <span style={{
      color: '#aaa',
      fontSize: '14px',
      marginBottom: '12px',
      fontWeight: 500,
      letterSpacing: '0.01em'
    }}>
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
</div>

// Note: The LoginForm component accepts the following props:
// - mode: "signin" | "signup" (optional) - The current form mode (default: "signin").
// - onModeChange: (mode: "signin" | "signup") => void (optional) - Callback when the mode changes.
// - onSubmit: (data: { mode: "signin" | "signup"; email: string; password: string; confirmPassword?: string }) => void (optional) - Called when the form is submitted.
// - isRTL: boolean (optional) - If true, layout is right-to-left.
// --- Card container ---
// - cardBackground: string (optional) - Card background color (default: "#161616").
// - cardBorderColor: string (optional) - Card border color (default: "#2e2e2e").
// - cardBorderWidth: string (optional) - Border width for single-radius (default: "1px").
// - cardRounding: string (optional) - Border radius for single-radius (default: "22px").
// - cardDoubleOuterRounding: string (optional) - Outer border radius for double-radius (default: "18.2px").
// - cardDoubleInnerRounding: string (optional) - Inner border radius for double-radius (default: "18px").
// - cardDoubleBorderWidth: string (optional) - Padding for double-radius border (default: "1px").
// - cardWidth: number | string (optional) - Card width in px or CSS string (default: 374).
// - cardPadding: string (optional) - Card content padding (default: "2.25rem 2.2rem").
// - cardOutlineStyle: "single-radius" | "double-radius" (optional) - Border style (default: "single-radius").
// - cardBorderTransition: string (optional) - CSS transition for border/background (default: "0.3s").
// - cardDoubleBorderTransitionDuration: number (optional) - Duration (in seconds) for double-radius border color transition (default: 0.3).
// - cardBorderEasing: string (optional) - CSS easing for border/background transition (default: "ease-in-out").
// - cardHoverBorderColor: string (optional) - Border color on hover (default: "#363636").
// - aspectRatio: string (optional) - CSS aspect-ratio for the card.
// - containerStyle: React.CSSProperties (optional) - Additional style for the card container (e.g., maxWidth, padding). Default: { maxWidth: "374px" }.
// --- Icon ---
// - iconUrl: string (optional) - Icon image source (default: "/icon.webp").
// - iconBackground: string (optional) - Icon background color (default: "#fff").
// - iconRounding: string (optional) - Icon border radius (default: "12px").
// - iconOutlineColor: string (optional) - Icon outline color (default: "#2e2e2e").
// - iconOutlineWidth: string (optional) - Icon outline width (default: "1.5px").
// - iconPadding: string (optional) - Icon padding (default: "3px").
// - iconMargin: string (optional) - Icon margin (default: "0 0 24px 0").
// - iconOutlineEnabled: boolean (optional) - Whether to show icon outline (default: true).
// - iconHoverOutlineColor: string (optional) - Icon outline color on hover (default: "#363636").
// - iconHref: string (optional) - Link for icon (default: "/").
// - onIconClick: (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => void (optional) - Icon click handler.
// --- FloatingLabelInput customization ---
// - floatingLabelInputProps: Partial<FloatingLabelInputProps> (optional) - Props for FloatingLabelInput. See FloatingLabelInput docs for details.
// --- ChronicleButton customization ---
// - chronicleButtonProps: any (optional) - Props for ChronicleButton. See ChronicleButton docs for details.
// - buttonRounding: string (optional) - Button border radius (default: "8px").
// --- Font customization ---
// - titleFontSize: string (optional) - Title font size (default: "2.25rem").
// - titleFontWeight: number | string (optional) - Title font weight (default: 700).
// - subtitleFontSize: string (optional) - Subtitle font size (default: "16px").
// - subtitleFontWeight: number | string (optional) - Subtitle font weight (default: 400).
// - switchFontSize: string (optional) - Switch link font size (default: "1rem").
// - switchFontWeight: number | string (optional) - Switch link font weight (default: 400).
// --- Foreground color customization for inscriptions ---
// - titleColor: string (optional) - Title text color (default: "#fff" or "#111" for light backgrounds).
// - subtitleColor: string (optional) - Subtitle text color (default: "#aaa" or "#444" for light backgrounds).
// - switchColor: string (optional) - Switch link color (default: "#fff" or "#222" for light backgrounds).
// --- Switch link hover customization ---
// - switchLinkHoverColor: string (optional) - Foreground color for switchToSignupLabel and switchToSigninLabel when hovered (default: "#00a0d8").
// - switchLinkHoverTransition: string (optional) - CSS transition for switch link color on hover (default: "color 0.3s ease-in-out").
// --- Text labels ---
// - logInTop: string (optional) - Title for signin (default: "Hello!").
// - register: string (optional) - Title for signup (default: "Welcome!").
// - signInToYourAccount: string (optional) - Subtitle for signin.
// - createAnAccount: string (optional) - Subtitle for signup.
// - emailLabel: string (optional) - Label for email input.
// - passwordLabel: string (optional) - Label for password input.
// - confirmPasswordLabel: string (optional) - Label for confirm password input.
// - noAccount: string (optional) - Text before switch to signup link.
// - createOne: string (optional) - Switch to signup link text.
// - alreadyHaveAccount: string (optional) - Text before switch to signin link.
// - logInBottom: string (optional) - Switch to signin link text.
// - loginButtonLabel: string (optional) - Sign in button text.
// - registerButtonLabel: string (optional) - Sign up button text.
// - switchToSignupLabel: string (optional) - Switch to signup link text.
// - switchToSigninLabel: string (optional) - Switch to signin link text.
`,
code: [
  {
    filename: 'LoginForm.tsx',
    content: `"use client";
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
`
  },
],
  dependencies: 'npm install framer-motion\nChronicle Button\nFloating Label Input',
  credit: (
    <span>
      <a href="https://hextaui.com/docs/marketing/sign-in" target="_blank" rel="noopener noreferrer" className="link">Sign In</a> by <a href="https://hextaui.com/" target="_blank" rel="noopener noreferrer" className="link">HextaUI</a>
    </span>
  ),
}

export { metadata }