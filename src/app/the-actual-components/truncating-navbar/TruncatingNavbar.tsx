'use client';

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
        className={`custom-button ${className || ''}`}
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
        <style jsx>{`
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
        `}</style>
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
    border: `1px solid ${
      isScrolled ? (navHovered ? navbarHoverOutline : outlineColor) : 'transparent'
    }`,
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
        className={`resizable-navbar ${isScrolled ? 'scrolled' : ''} ${
          isMobile ? 'mobile' : ''
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
                    border: `1px solid ${buttonHovered ? keyAreaHoverOutline : keyAreaOutline}`,
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
        @media (max-width: ${mobileBreakpoint}px) {
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
      `}</style>
    </>
  );
}