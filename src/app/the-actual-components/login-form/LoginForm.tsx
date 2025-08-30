"use client";
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
  const borderTransition = cardBorderTransition || `background ${transitionDuration}ms ${cardBorderEasing}, border-color ${transitionDuration}ms ${cardBorderEasing}, color ${transitionDuration}ms ${cardBorderEasing}`;

  // --- Card style ---
  const outerCardStyle: React.CSSProperties = cardOutlineStyle === "double-radius"
    ? {
        borderRadius: cardDoubleOuterRounding,
        padding: cardDoubleBorderWidth,
        background: hovered ? cardHoverBorderColor : cardBorderColor,
        display: "inline-block",
        width: typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth,
        aspectRatio: aspectRatio,
        transition: `background ${cardDoubleBorderTransitionDuration ?? 0.3}s ease-in-out`,
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
        width: typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: `border-color ${cardBorderTransition ?? "0.3s"} ease-in-out`,
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
    border: iconOutlineEnabled ? `${iconOutlineWidth} solid ${iconOutlineColorToUse}` : "none",
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
                    key={`title-${displayMode}`}
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
                    key={`subtitle-${displayMode}`}
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
                    key={`form-${displayMode}`}
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
                    key={`switch-${displayMode}`}
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
                    key={`title-${displayMode}`}
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
                    key={`subtitle-${displayMode}`}
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
                    key={`form-${displayMode}`}
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
                    key={`switch-${displayMode}`}
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