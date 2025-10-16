"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Command,
  FoldVertical,
  Menu,
  X,
} from "lucide-react";
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker";
import "@ncdai/react-wheel-picker/style.css";
import ChronicleButton from "@/app/the-actual-components/refined-chronicle-button/RefinedChronicleButton";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/app-context";
import LanguageIcon from "@/components/language-icon";
import { componentsMetadata } from "@/lib/component-meta";
import { dictionaries } from "@/lib/translations";
import useIsRTL from "@/hooks/useIsRTL";

/* ============================================================ Generic Button ============================================================ */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
        className={`custom-button ${className || ""}`}
        style={{
          ["--btn-bg" as any]: bg,
          ["--btn-color" as any]: textColor,
          ["--btn-outline" as any]: outlineColor,
          ["--btn-hover-bg" as any]: hoverBg,
          ["--btn-hover-color" as any]: hoverTextColor,
          ["--btn-hover-outline" as any]: hoverOutlineColor,
          ...(style || {}),
        }}
      >
        {children}
        <style jsx>{`
          .custom-button {
            background: var(--btn-bg);
            color: var(--btn-color);
            border: 1px solid var(--btn-outline);
            transition: background 0.3s ease, color 0.3s ease,
              border-color 0.3s ease;
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
        `}</style>
      </button>
    );
  }
);
Button.displayName = "Button";

/* ============================================================ Utils ============================================================ */
function useWindowWidth() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

/* ============================================================ Languages + Wheel ============================================================ */
const LANGUAGES = [
  { code: "en", label: "English", applyText: "Apply" },
  { code: "he", label: "עברית", applyText: "החל" },
  { code: "es", label: "Español", applyText: "Aplicar" },
];

function WheelPicker({
  classNames,
  ...props
}: React.ComponentProps<typeof WheelPickerPrimitive.WheelPicker>) {
  return (
    <WheelPickerPrimitive.WheelPicker
      classNames={{
        optionItem: "text-muted-foreground",
        highlightWrapper:
          "bg-[var(--language-selector-center-line-bg,#39bdff)] text-[hsl(var(--accent-foreground))]",
        ...classNames,
      }}
      {...props}
    />
  );
}

/* ============================================================ Embedded Language Selector ============================================================ */
const ANIMATION_DURATION = 0.3;
interface EmbeddedLanguageSelectorProps {
  anchorRef: React.RefObject<HTMLDivElement>;
  onClose?: () => void;
  visible: boolean;
  onVisibilityChange: (visible: boolean) => void;
}
const EmbeddedLanguageSelector = forwardRef<
  { open: () => void; close: () => void; toggle: () => void },
  EmbeddedLanguageSelectorProps
>(function EmbeddedLanguageSelector(
  { anchorRef, onClose, visible, onVisibilityChange },
  ref
) {
  const { lang, setLang } = useApp();
  const [tempSelectedValue, setTempSelectedValue] = useState(lang);

  useImperativeHandle(ref, () => ({
    open: () => onVisibilityChange(true),
    close: () => onVisibilityChange(false),
    toggle: () => onVisibilityChange(!visible),
  }));

  useEffect(() => {
    setTempSelectedValue(lang);
  }, [lang]);

  const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    if (visible && anchorRef.current) {
      const iconRect = anchorRef.current.getBoundingClientRect();
      const offsetParent = anchorRef.current.offsetParent as HTMLElement | null;
      if (!offsetParent) return;
      const parentRect = offsetParent.getBoundingClientRect();
      const iconCenterY = iconRect.top + iconRect.height / 2;
      const topPos = iconCenterY - parentRect.top + 40;
      const leftPos =
        iconRect.left - parentRect.left + iconRect.width / 2 - 120;
      setPosition({ top: topPos, left: leftPos });
    }
  }, [visible, anchorRef]);

  const handleValueChange = useCallback((value: string) => {
    setTempSelectedValue(value);
  }, []);

  const handleApply = async () => {
    if (tempSelectedValue !== lang) {
      await new Promise((res) => setTimeout(res, 30));
      setLang(tempSelectedValue);
    }
    onVisibilityChange(false);
    onClose?.();
  };

  const options = LANGUAGES.map((l) => ({ label: l.label, value: l.code }));

  const applyButtonText =
    LANGUAGES.find((l) => l.code === tempSelectedValue)?.applyText || "Apply";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="embedded-lang-selector"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          className="absolute rounded-lg shadow-xl p-4 md:p-6 min-w-[240px] max-w-[90vw] border flex flex-col items-center outline-none"
          style={{
            backgroundColor: `hsl(var(--background))`,
            borderColor: `hsl(var(--border))`,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0,0,0,0.1)",
            top: position.top,
            left: position.left,
            transform: "translateX(-50%)",
            zIndex: 250,
          }}
        >
          <div
            className="w-full rounded-md mb-4 md:mb-7 overflow-hidden flex justify-center"
            style={{
              backgroundColor:
                "var(--language-selector-list-bg, hsl(var(--card), 0.95))",
              border: `1px solid hsl(var(--border))`,
            }}
          >
            <WheelPicker
              options={options}
              value={tempSelectedValue}
              onValueChange={handleValueChange}
            />
          </div>
          <ChronicleButton
            onClick={handleApply}
            className="w-full"
            variant="default"
            backgroundColor="hsl(var(--foreground))"
            hoverBackgroundColor="hsl(var(--accent))"
            textColor="hsl(var(--background))"
            hoverTextColor="hsl(var(--foreground))"
            borderVisible={false}
            borderRadius="var(--radius)"
            fontWeight={600}
          >
            {applyButtonText}
          </ChronicleButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

/* ============================================================ Navbar ============================================================ */
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
  placeholderText?: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  onSearchStateChange?: (open: boolean) => void; // parent awareness
  // --- styling bits ---
  buttonBg?: string;
  buttonTextColor?: string;
  buttonOutline?: string;
  buttonHoverBg?: string;
  buttonHoverText?: string;
  buttonHoverOutline?: string;
  buttonIconGap?: number;
  keyAreaBg?: string;
  keyAreaTextColor?: string;
  keyAreaOutline?: string;
  keyAreaHoverBg?: string;
  keyAreaHoverText?: string;
  keyAreaHoverOutline?: string;
  keyAreaPadding?: string;
  keyAreaRadius?: string;
  navbarHoverOutline?: string;
}
export default function TruncatingNavbar({
  icon,
  appName,
  routes,
  homeRoute = "/",
  scrolledBg = "#151419",
  outlineColor = "#33313d",
  mobileBg = "#111014",
  shortcutKey = "K",
  onShortcut,
  fontSize = "0.875rem",
  desktopThreshold = 940,
  zIndex = 10,
  placeholderText = "Search components...",
  scrollContainerRef,
  onSearchStateChange,
  // button defaults
  buttonBg = "#151419",
  buttonTextColor = "#aaa",
  buttonOutline = "#33313d",
  buttonHoverBg = "#24222b",
  buttonHoverText = "#fff",
  buttonHoverOutline = "#403d4d",
  buttonIconGap = 22,
  // key area
  keyAreaBg = "#24222b",
  keyAreaTextColor = "#aaa",
  keyAreaOutline = "#33313d",
  keyAreaHoverBg = "#17161c",
  keyAreaHoverText = "#fff",
  keyAreaHoverOutline = "#403d4d",
  keyAreaPadding = "1px 6px",
  keyAreaRadius = "4px",
  // navbar
  navbarHoverOutline = "#403d4d",
}: TruncatingNavbarProps) {
  // --- state ---
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [langHovered, setLangHovered] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const router = useRouter();
  const { lang, setLang, t } = useApp();
  const displayShortcutKey = shortcutKey.toUpperCase();
  const [buttonHovered, setButtonHovered] = useState(false);
  const windowWidth = useWindowWidth();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const isRTL = useIsRTL();

  // language selector (desktop)
  const languageIconRef = useRef<HTMLDivElement>(null);
  const languageSelectorRef = useRef<any>(null);
  const [langSelectorVisible, setLangSelectorVisible] = useState(false);

  const toggleLangSelector = () => {
    if (!langSelectorVisible) {
      // closing search now!
      setSearchOpen(false);
      onSearchStateChange?.(false); // <- ADD THIS LINE
    }
    setLangSelectorVisible(!langSelectorVisible);
  };

  const openSearch = () => {
    setLangSelectorVisible(false); // close language selector if open
    setSearchOpen(true);
    onSearchStateChange?.(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    onSearchStateChange?.(false);
  };

  const toggleSearch = () => {
    if (searchOpen) closeSearch();
    else openSearch();
  };

  const [tempSelectedValue, setTempSelectedValue] = useState(lang);
  useEffect(() => {
    setTempSelectedValue(lang);
  }, [lang, isMobileMenuOpen]);

  // Attach Escape key listener
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toUpperCase() === displayShortcutKey) {
        e.preventDefault();
        toggleSearch();
        onShortcut?.();
      }
      if (e.key === "Escape") {
        closeSearch();
        setLangSelectorVisible(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [displayShortcutKey, onShortcut, searchOpen]);

  // effects
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < desktopThreshold);
    if (window.innerWidth >= desktopThreshold) setIsMobileMenuOpen(false);
  }, [desktopThreshold]);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleScroll = useCallback(() => {
    const scrollY = scrollContainerRef?.current
      ? scrollContainerRef.current.scrollTop
      : window.scrollY;
    if (scrollY <= 0 && isScrolled) setIsScrolled(false);
    else if (scrollY > 8 && !isScrolled) setIsScrolled(true);
  }, [isScrolled, scrollContainerRef]);
  useEffect(() => {
    const target = scrollContainerRef?.current || window;
    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (searchOpen) {
      setQuery("");
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const handleRoute = useCallback(
    (item: RouteItem, closeMobile = false) => {
      if (!item.link) return;
      if (item.external)
        window.open(item.link, "_blank", "noopener,noreferrer");
      else router.push(item.link);
      if (closeMobile) setIsMobileMenuOpen(false);
    },
    [router]
  );

  // --- style metrics ---
  const maxWidth =
    windowWidth < 768 ? `calc(100% - 20px)` : `calc(100% - 48px)`;
  const searchModalWidth =
    windowWidth < 768
      ? `calc(100vw - 20px)`
      : `min(calc(100vw), 1536px)`;
  const searchModalHorizontalMargin =
    windowWidth < 768 ? "10px" : "24px";

  const navStyle: React.CSSProperties = {
    background: isMobile
      ? isScrolled
        ? scrolledBg
        : mobileBg
      : isScrolled
      ? scrolledBg
      : "transparent",
    border: `1px solid ${
      isScrolled ? (navHovered ? navbarHoverOutline : outlineColor) : "transparent"
    }`,
    borderRadius: isScrolled ? "8px" : "0",
    height: isMobile
      ? isScrolled
        ? "52px"
        : "56px"
      : isScrolled
      ? "52px"
      : "64px",
    top: isMobile ? (isScrolled ? "8px" : "0") : isScrolled ? "16px" : "0",
    marginTop: isMobile ? (isScrolled ? "8px" : "0") : isScrolled ? "16px" : "0",
    paddingLeft: isMobile ? (isScrolled ? "12px" : "0") : isScrolled ? "24px" : "0",
    paddingRight: isMobile
      ? (isScrolled ? "12px" : "0")
      : isScrolled
      ? "24px"
      : "0",
    boxShadow: isScrolled ? "0 2px 16px 0 rgba(0,0,0,0.08)" : "none",
    transition:
      "background 0.3s ease,border-color 0.3s ease,color 0.3s ease,height 0.3s ease,margin 0.3s ease,padding 0.3s ease",
    zIndex,
    position: "sticky",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
    minWidth: "0",
    left: "0",
    right: "0",
  };

  // --- search state ---
  const [query, setQuery] = useState("");
  const filteredComponents = React.useMemo(() => {
    const lower = query.toLowerCase().trim();
    if (!lower) return componentsMetadata;
    return componentsMetadata.filter((comp) => {
      const titleEn = dictionaries.en[comp.title]?.toLowerCase() || "";
      const titleHe = dictionaries.he[comp.title]?.toLowerCase() || "";
      const titleEs = dictionaries.es[comp.title]?.toLowerCase() || "";
      const descEn = dictionaries.en[comp.description]?.toLowerCase() || "";
      const descHe = dictionaries.he[comp.description]?.toLowerCase() || "";
      const descEs = dictionaries.es[comp.description]?.toLowerCase() || "";
      return (
        titleEn.includes(lower) ||
        titleHe.includes(lower) ||
        titleEs.includes(lower) ||
        descEn.includes(lower) ||
        descHe.includes(lower) ||
        descEs.includes(lower)
      );
    });
  }, [query]);

  /* ============================================================ Render ============================================================ */
  return (
    <>
      <nav
        className={`resizable-navbar ${isScrolled ? "scrolled" : ""} ${
          isMobile ? "mobile" : ""
        }`}
        style={navStyle}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
      >
        {/* Logo */}
        <a className="navbar-logo" href={homeRoute}>
          <img src={icon} alt="logo" width="32" height="32" />
          <span className="app-name">{appName}</span>
        </a>

        {/* Desktop */}
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
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <span className="nav-link-text" style={{ fontSize }}>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
            <div className="relative p-4 border-border flex-shrink-0">
              <div
                ref={languageIconRef}
                className="flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setLangHovered(true)}
                onMouseLeave={() => setLangHovered(false)}
                onClick={toggleLangSelector}
                style={{
                  width: 40,
                  height: 36,
                  borderRadius: "6px",
                  background: langHovered
                    ? "hsl(var(--accent))"
                    : "transparent",
                  transition: "background 0.3s ease-in-out",
                }}
              >
                <LanguageIcon width={24} />
              </div>
              <EmbeddedLanguageSelector
                ref={languageSelectorRef}
                anchorRef={languageIconRef}
                visible={langSelectorVisible}
                onVisibilityChange={setLangSelectorVisible}
              />
            </div>
            <Button
              bg={buttonBg}
              textColor={buttonTextColor}
              outlineColor={buttonOutline}
              hoverBg={buttonHoverBg}
              hoverTextColor={buttonHoverText}
              hoverOutlineColor={buttonHoverBg}
              onClick={toggleSearch}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              <div
                className="button-flex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: `${buttonIconGap}px`,
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
                    border: `1px solid ${
                      buttonHovered ? keyAreaHoverOutline : keyAreaOutline
                    }`,
                    background: buttonHovered ? keyAreaHoverBg : keyAreaBg,
                    color: buttonHovered ? keyAreaHoverText : keyAreaTextColor,
                    transition:
                      "background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Command size={12} />
                  <span>{displayShortcutKey}</span>
                </div>
              </div>
            </Button>
          </>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FoldVertical size={26} /> : <Menu size={26} />}
          </button>
        )}
      </nav>

      {/* Mobile Nav Overlay with Wheel Picker, Apply button, and fake Search button */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mobile-nav-overlay absolute left-0 right-0 mx-auto rounded-lg shadow-xl border flex flex-col items-center"
            style={{
              backgroundColor: `hsl(var(--background))`,
              borderColor: `hsl(var(--border))`,
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -2px rgba(0,0,0,0.1)",
              top: "100%",
              marginTop: "8px",
              width: maxWidth,
              zIndex: 250,
            }}
          >
            <div className="mobile-nav-menu p-4 flex flex-col gap-4 w-full">
              {/* Mobile nav links */}
              <div className="mobile-nav-links flex flex-col gap-0">
                {routes.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRoute(item, true);
                    }}
                    className="mobile-nav-link"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Fake Search button, styled like ChronicleButton */}
              <Button
                  bg={buttonBg}
                  textColor={buttonTextColor}
                  outlineColor={buttonOutline}
                  hoverBg={buttonHoverBg}
                  hoverTextColor={buttonHoverText}
                  hoverOutlineColor={buttonHoverBg}
                  onClick={toggleSearch}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <div
                    className="button-flex"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: `${buttonIconGap}px`,
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
                        border: `1px solid ${
                          buttonHovered ? keyAreaHoverOutline : keyAreaOutline
                        }`,
                        background: buttonHovered ? keyAreaHoverBg : keyAreaBg,
                        color: buttonHovered ? keyAreaHoverText : keyAreaTextColor,
                        transition:
                          "background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Command size={12} />
                      <span>{displayShortcutKey}</span>
                    </div>
                  </div>
                </Button>
              {/* Wheel picker for languages */}
              <div
                className="w-full rounded-md overflow-hidden flex justify-center py-2"
                style={{
                  backgroundColor:
                    "var(--language-selector-list-bg, hsl(var(--card), 0.95))",
                  border: `1px solid hsl(var(--border))`,
                  height: 144,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                  }}
                >
                  <WheelPicker
                    options={LANGUAGES.map((l) => ({ label: l.label, value: l.code }))}
                    value={tempSelectedValue}
                    onValueChange={(val) => setTempSelectedValue(val)}
                  />
                </div>
              </div>

              {/* Apply button - refined ChronicleButton */}
              <ChronicleButton
                onClick={() => {
                  if (tempSelectedValue !== lang) setLang(tempSelectedValue);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full"
                variant="default"
                backgroundColor="hsl(var(--foreground))"
                hoverBackgroundColor="hsl(var(--accent))"
                textColor="hsl(var(--background))"
                hoverTextColor="hsl(var(--foreground))"
                borderVisible={false}
                borderRadius="6px"
                fontWeight={600}
              >
                {LANGUAGES.find((l) => l.code === tempSelectedValue)?.applyText || "Apply"}
              </ChronicleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal (exactly from first navbar) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            key="search-modal"
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 right-0 rounded-lg shadow-xl border flex flex-col"
            style={{
              backgroundColor: `hsl(var(--background))`,
              borderColor: `hsl(var(--border))`,
              boxShadow:
                "0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -2px rgba(0,0,0,0.1)",
              top: "100%",
              marginTop: "8px",
              marginLeft: searchModalHorizontalMargin,
              marginRight: searchModalHorizontalMargin,
              maxHeight: "calc(100vh - 84px)",
              overflow: "hidden",
              zIndex: 260,
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {/* Header */}
            <div className="relative p-4 border-b border-border">
              {/* Close Button */}
              <button
                onClick={closeSearch}
                className={`absolute top-1/2 ${
                  isRTL
                    ? "left-[29px] -translate-y-1/2"
                    : "right-[28px] -translate-y-1/2"
                } text-muted-foreground hover:text-foreground`}
              >
                <X size={20} />
              </button>
              {/* Input Field */}
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("search_placeholder_text")}
                className="w-full h-12 bg-background border border-border rounded-lg pl-11 pr-11 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {/* Search Icon */}
              <Search
                size={20}
                className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                  isRTL ? "right-8" : "left-8"
                }`}
              />
            </div>
            {/* Results */}
            <div className="overflow-y-auto p-2 space-y-2" style={{ flexGrow: 1 }}>
              {filteredComponents.length > 0 ? (
                filteredComponents.map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => {
                      router.push(`/components/${comp.id}`);
                      closeSearch();
                    }}
                    className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <div className="font-semibold text-foreground">
                      {t(comp.title)}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {t(comp.description)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No components found.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style jsx>{`
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
          flex: 1;
          justify-content: flex-start;
          margin-inline-start: 46px;
          gap: 18px;
        }
        .nav-link {
          color: #aaa;
          text-decoration: none;
          font-size: 1rem;
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
        @media (max-width: ${desktopThreshold - 1}px) {
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
        .mobile-nav-link {
          padding: 10px;
          border-radius: 6px;
          color: #aaa;
          font-size: 0.875rem;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .mobile-nav-link:hover {
          background: var(--language-selector-center-line-bg);
          color: hsl(var(--foreground));
        }
      `}</style>
    </>
  );
}
