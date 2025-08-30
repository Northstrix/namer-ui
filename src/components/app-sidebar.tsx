"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { componentsMetadata } from "@/lib/component-meta";
import { useApp, useTranslation } from "@/context/app-context";
import { NotepadText, Search, Command } from "lucide-react";
import { Button } from "@/components/button/button";
import FloatingCollapsedIcon from "./floating-collapsed-icon";
import SearchModal from "./search-modal";
import LanguageIcon from "@/components/language-icon";
import {
  LanguageSelector,
  LanguageSelectorHandle,
} from "@/components/LanguageSelector";
import useIsRTL from "@/hooks/useIsRTL";

const sidebarVariants = {
  expanded: {
    width: "265px",
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  collapsed: {
    width: "0px",
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const contentVariants = {
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
    pointerEvents: "auto",
  },
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" },
    pointerEvents: "none",
  },
};

const FoldIcon: React.FC<{ isRTL: boolean; size?: number }> = ({
  isRTL,
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: `rotate(${isRTL ? 90 : -90}deg)` }}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 13v-8l-3 3m6 0l-3 -3" />
    <path d="M9 17l1 0" />
    <path d="M14 17l1 0" />
    <path d="M19 17l1 0" />
    <path d="M4 17l1 0" />
  </svg>
);

const AppSidebar = () => {
  const { lang } = useApp();
  const t = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRTL = useIsRTL();

  // Sort components alphabetically by translated name
  const sortedComponentsMetadata = [...componentsMetadata]
    .map((c) => ({ id: c.id, name: t(c.title) }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));

  // Sections
  const sections = [
    {
      title: t("components"),
      components: sortedComponentsMetadata,
    },
  ];

  const appNameColor = "#ffffff";
  const textColor = "#a2a2a9";
  const activeTextColor = "hsl(var(--accent))";
  const hoverBackgroundColor = "hsl(var(--muted))";
  const activeBackgroundColor = "hsla(var(--accent) / 0.1)";
  const itemBorderRadius = "0.5rem";

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeComponentId, setActiveComponentId] = useState("");
  const languageSelectorRef = useRef<LanguageSelectorHandle>(null);
  const [langHovered, setLangHovered] = useState(false);
  const [compHovered, setCompHovered] = useState(false);

  useEffect(() => {
    const basePath = pathname.split("?")[0];
    const pathParts = basePath.split("/");
    const componentId =
      pathParts.length > 2 && pathParts[10] === "components"
        ? pathParts[11]
        : "";
    if (componentId !== activeComponentId) {
      setActiveComponentId(componentId);
    }
  }, [pathname, searchParams, activeComponentId]);

  const handleFold = () => setIsContentVisible(false);
  const handleUnfold = () => {
    setShowFloatingIcon(false);
    setIsSidebarOpen(true);
  };

  const onContentAnimationComplete = (
    definition: "visible" | "hidden"
  ) => {
    if (definition === "hidden") setIsSidebarOpen(false);
  };

  const onSidebarAnimationComplete = (
    definition: "expanded" | "collapsed"
  ) => {
    if (definition === "expanded") setIsContentVisible(true);
    if (definition === "collapsed") setShowFloatingIcon(true);
  };

  // ✅ Compose URL with language param
  const getLinkWithLang = (href: string) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );
    if (lang === "en") currentParams.delete("lang");
    else currentParams.set("lang", lang);
    const queryString = currentParams.toString();
    return `${href}${queryString ? `?${queryString}` : ""}`;
  };

  return (
    <>
      <SearchModal
        show={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <AnimatePresence>
        {showFloatingIcon && (
          <FloatingCollapsedIcon
            visible={showFloatingIcon}
            onClick={handleUnfold}
            isRTL={isRTL}
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={isSidebarOpen ? "expanded" : "collapsed"}
        variants={sidebarVariants}
        onAnimationComplete={onSidebarAnimationComplete}
        className={`flex flex-col flex-shrink-0 relative bg-background ${
          isRTL ? "border-l" : "border-r"
        } border-border h-screen`}
      >
        <motion.div
          initial={false}
          animate={isContentVisible && isSidebarOpen ? "visible" : "hidden"}
          variants={contentVariants}
          onAnimationComplete={onContentAnimationComplete}
          className="flex flex-col h-full"
        >
          {/* Header */}
          <div className="flex items-center px-4 justify-between h-[60px] flex-shrink-0">
            <Link href={getLinkWithLang("/")} className="flex items-center gap-2">
              <img src="/logo.png" alt="App Logo" className="w-6 h-6" />
              <span
                className="font-bold text-base"
                style={{ color: appNameColor, transform: "translateY(1px)" }}
              >
                {t("namer_ui")}
              </span>
            </Link>
            <motion.button
              onClick={handleFold}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out"
              aria-label="Collapse sidebar"
            >
              <FoldIcon isRTL={isRTL} size={24} />
            </motion.button>
          </div>

          {/* Search Button */}
          <div className="px-4 mb-4">
            <Button
              variant="outline"
              className="w-full justify-between text-xs text-muted-foreground h-9 px-3"
              onClick={() => setIsSearchOpen(true)}
            >
              <div className="flex items-center gap-2">
                <Search size={14} />
                <span>{t("search_placeholder_text")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Command size={12} />
                <span>K</span>
              </div>
            </Button>
          </div>

          {/* Sections */}
          <div
            className="flex-grow overflow-y-auto overflow-x-hidden"
            style={{ borderTop: "1px solid hsl(var(--border))" }}
          >
            <div>
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-[16px]">
                  <div
                    className="border-border px-[10px] flex-shrink-0"
                    style={{ paddingTop: "16px" }}
                  >
                    <div
                      className="flex items-center justify-start cursor-pointer"
                      onMouseEnter={() => setCompHovered(true)}
                      onMouseLeave={() => setCompHovered(false)}
                      style={{
                        width: "100%",
                        height: 36,
                        borderRadius: "var(--radius)",
                        background: compHovered
                          ? "hsl(var(--accent))"
                          : "transparent",
                        transition: "background 0.3s ease-in-out",
                        paddingLeft: 12,
                        paddingRight: 12,
                      }}
                    >
                      <h2 className="text-base block font-semibold">
                        <Link
                          href={getLinkWithLang("/components")}
                          className="flex items-center gap-2 hover:text-white"
                        >
                          <div
                            className={
                              isRTL ? "transform scale-x-[-1]" : ""
                            }
                          >
                            <NotepadText size={18} />
                          </div>
                          {section.title}
                        </Link>
                      </h2>
                    </div>
                  </div>

                  <ul className="space-y-1 px-4 mt-4">
                    {section.components.map((component) => (
                      <li key={component.id}>
                        <Link
                          href={getLinkWithLang(`/components/${component.id}`)}
                          onClick={() =>
                            console.log(
                              `${component.id}:list-item:clicked:${lang}`
                            )
                          }
                          onMouseEnter={() =>
                            setHoveredComponent(component.id)
                          }
                          onMouseLeave={() => setHoveredComponent(null)}
                          className="w-full text-left px-3 transition-colors duration-300 ease-in-out flex items-center text-sm h-[38px]"
                          style={{
                            color:
                              activeComponentId === component.id
                                ? activeTextColor
                                : hoveredComponent === component.id
                                ? appNameColor
                                : textColor,
                            backgroundColor:
                              activeComponentId === component.id
                                ? activeBackgroundColor
                                : hoveredComponent === component.id
                                ? hoverBackgroundColor
                                : "transparent",
                            borderRadius: itemBorderRadius,
                          }}
                        >
                          {component.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Language icon at bottom */}
          <div className="p-4 border-t border-border flex-shrink-0">
            <div
              className="flex items-center justify-start cursor-pointer"
              onMouseEnter={() => setLangHovered(true)}
              onMouseLeave={() => setLangHovered(false)}
              onClick={() => languageSelectorRef.current?.open()}
              style={{
                width: "100%",
                height: 38,
                borderRadius: "var(--radius)",
                background: langHovered
                  ? "hsl(var(--accent))"
                  : "transparent",
                transition: "background 0.3s ease-in-out",
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              <LanguageIcon width={24} />
            </div>
          </div>
        </motion.div>
      </motion.aside>

      <LanguageSelector ref={languageSelectorRef} onClose={() => {}} />
    </>
  );
};

export default AppSidebar;
