'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "TruncatingNavbar.tsx" file
import TruncatingNavbar from '@/app/the-actual-components/truncating-navbar/TruncatingNavbar'

<TruncatingNavbar
  icon="/logo.png"
  appName="Namer"
  routes={[
    { name: 'Link', link: 'https://maxim-bortnikov.netlify.app/', external: true },
  ]}
  homeRoute="/"
  scrolledBg="#151419"
  mobileBg="#060507"
  outlineColor="#403d4d"
  searchPlaceholderText="Search..."
  shortcutKey="M"
  onOpenSearch={() => console.log('Search button clicked!')}
  zIndex={1}
/>

// Note: The TruncatingNavbar component is a Next.js client-side navigation bar that provides responsive navigation and search functionality.
// - icon: string (required) - URL for the logo image displayed in the navbar.
// - appName: string (required) - Name of the application, shown next to the logo.
// - routes: RouteItem[] (required) - Array of navigation items; each item has { name: string; link: string; external?: boolean }.
// - homeRoute: string (optional) - URL for the logo link (default: '/').
// - scrolledBg: string (optional) - Background color of the navbar when scrolled (default: '#151419').
// - outlineColor: string (optional) - Outline color for the navbar when scrolled or mobile (default: '#403d4d').
// - mobileBg: string (optional) - Background color of the navbar in mobile mode (default: '#111014').
// - shortcutKey: string (optional) - Keyboard shortcut key for opening search (default: 'K').
// - onShortcut: () => void (optional) - Callback triggered when the search shortcut is used.
// - fontSize: string (optional) - Font size for navigation links (default: '0.875rem').
// - desktopThreshold: number (optional) - Window width in pixels below which the navbar switches to mobile mode (default: 910).
// - searchFontSizeDesktop: string (optional) - Font size for the desktop search bar (default: '1rem').
// - searchFontSizeMobile: string (optional) - Font size for the mobile search bar (default: '0.875rem').
// - searchPlaceholderText: string (optional) - Placeholder text for the search bar (default: 'Search components...').
// - zIndex: number (optional) - z-index for the navbar (default: 10).
// - onOpenSearch: () => void (optional) - Callback triggered when the search button is clicked or the shortcut is pressed.
`,
code: [
  {
    filename: 'TruncatingNavbar.tsx',
    content: `'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Command, Minimize2, Menu } from 'lucide-react'

export interface RouteItem {
  name: string
  link: string
  external?: boolean
}

export interface TruncatingNavbarProps {
  icon: string
  appName: string
  routes: RouteItem[]
  homeRoute?: string
  scrolledBg?: string
  outlineColor?: string
  mobileBg?: string
  shortcutKey?: string
  onShortcut?: () => void
  fontSize?: string
  desktopThreshold?: number
  searchFontSizeDesktop?: string
  searchFontSizeMobile?: string
  searchPlaceholderText?: string
  zIndex?: number
  onOpenSearch?: () => void
}

export default function TruncatingNavbar({
  icon,
  appName,
  routes,
  homeRoute = '/',
  scrolledBg = '#151419',
  outlineColor = '#403d4d',
  mobileBg = '#111014',
  shortcutKey = 'K',
  onShortcut,
  fontSize = '0.875rem',
  desktopThreshold = 910,
  searchFontSizeDesktop = '1rem',
  searchFontSizeMobile = '0.875rem',
  searchPlaceholderText = 'Search components...',
  zIndex = 10,
  onOpenSearch,
}: TruncatingNavbarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchHovered, setSearchHovered] = useState(false)
  const router = useRouter()

  const displayShortcutKey = shortcutKey.toUpperCase()

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < desktopThreshold)
    if (!isMobile) setIsMobileMenuOpen(false)
  }, [desktopThreshold, isMobile])

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0 && isScrolled) {
      setIsScrolled(false)
    } else if (window.scrollY > 8 && !isScrolled) {
      setIsScrolled(true)
    }
  }, [isScrolled])

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toUpperCase() === displayShortcutKey) {
        e.preventDefault()
        if (onShortcut) onShortcut()
        if (onOpenSearch) onOpenSearch()
      }
    },
    [displayShortcutKey, onShortcut, onOpenSearch]
  )

  const handleRoute = useCallback(
    (item: RouteItem, closeMobile = false) => {
      if (!item.external && item.link) {
        router.push(item.link)
        if (closeMobile) setIsMobileMenuOpen(false)
      } else if (item.external && item.link) {
        window.location.href = item.link
        if (closeMobile) setIsMobileMenuOpen(false)
      }
    },
    [router]
  )

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [handleResize, handleScroll, handleKeydown])

  const navStyle: React.CSSProperties = {
    background: isMobile
      ? isScrolled
        ? scrolledBg
        : mobileBg
      : isScrolled
      ? scrolledBg
      : 'transparent',
    border: isMobile
      ? isScrolled
        ? \`1px solid \${outlineColor}\`
        : 'none'
      : \`1px solid \${isScrolled ? outlineColor : 'transparent'}\`,
    borderRadius: isScrolled ? '8px' : '0',
    height: isMobile ? (isScrolled ? '52px' : '56px') : isScrolled ? '52px' : '64px',
    top: isMobile ? (isScrolled ? '8px' : '0') : isScrolled ? '16px' : '0',
    marginTop: isMobile ? (isScrolled ? '8px' : '0') : isScrolled ? '16px' : '0',
    paddingLeft: isMobile ? (isScrolled ? '12px' : '0') : isScrolled ? '24px' : '0',
    paddingRight: isMobile ? (isScrolled ? '12px' : '0') : isScrolled ? '24px' : '0',
    boxShadow: isScrolled ? '0 2px 16px 0 rgba(0,0,0,0.08)' : 'none',
    transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
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
  }

  return (
    <>
      <nav
        className={\`resizable-navbar \${isScrolled ? 'scrolled' : ''} \${isMobile ? 'mobile' : ''}\`}
        style={navStyle}
      >
        {/* Logo */}
        <a className="navbar-logo" href={homeRoute}>
          <img src={icon} alt="logo" width="32" height="32" />
          <span className="app-name">{appName}</span>
        </a>

        {/* Desktop: links and searchbar */}
        {!isMobile && (
          <>
            <div className="nav-items">
              {routes.map((item, idx) => (
                <a
                  key={idx}
                  href={item.external ? item.link : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    handleRoute(item)
                  }}
                  className="nav-link"
                  target={item.external ? '_self' : undefined}
                  rel={item.external ? 'noopener' : undefined}
                >
                  <span className="nav-link-text" style={{ fontSize }}>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
            <button
              className="navbar-search-btn"
              style={{
                outline: \`1px solid \${outlineColor}\`,
                fontSize: searchFontSizeDesktop,
              }}
              onClick={() => onOpenSearch && onOpenSearch()}
              type="button"
            >
              <Search size={18} color="#aaa" />
              <span
                className={\`search-placeholder \${searchHovered ? 'hovered' : ''}\`}
                onMouseEnter={() => setSearchHovered(true)}
                onMouseLeave={() => setSearchHovered(false)}
              >
                {searchPlaceholderText}
              </span>
              <span
                className="search-shortcut"
                style={{ outline: \`1px solid \${outlineColor}\` }}
              >
                <Command size={16} />
                <span>{displayShortcutKey}</span>
              </span>
            </button>
          </>
        )}

        {/* Mobile: burger only */}
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

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileMenuOpen(false)
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
                  href={item.external ? item.link : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    handleRoute(item, true)
                  }}
                  className="mobile-nav-link"
                  target={item.external ? '_self' : undefined}
                  rel={item.external ? 'noopener' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              className="navbar-search-btn mobile"
              style={{
                outline: \`1px solid \${outlineColor}\`,
                fontSize: searchFontSizeMobile,
              }}
              onClick={() => {
                if (onOpenSearch) onOpenSearch()
                setIsMobileMenuOpen(false)
              }}
              type="button"
            >
              <Search size={18} />
              <span
                className={\`search-placeholder \${searchHovered ? 'hovered' : ''}\`}
                onMouseEnter={() => setSearchHovered(true)}
                onMouseLeave={() => setSearchHovered(false)}
              >
                {searchPlaceholderText}
              </span>
              <span
                className="search-shortcut"
                style={{ outline: \`1px solid \${outlineColor}\` }}
              >
                <Command size={16} />
                <span>{displayShortcutKey}</span>
              </span>
            </button>
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
          box-sizing: border-box;
          min-width: 0;
          left: 0;
          right: 0;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          font-size: 1.2rem;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .app-name {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #fff;
          transition: color 0.2s;
        }
        .nav-items {
          display: flex;
          flex: 1 1 0;
          justify-content: center;
          transition: gap 0.2s;
        }
        .nav-link {
          color: #aaa;
          text-decoration: none;
          font-size: 1rem;
          padding: 8px 18px;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: flex;
          align-items: center;
          transition: color 0.3s, background 0.3s, font-size 0.2s;
        }
        .nav-link:hover {
          background: #23232c;
          color: #fff;
          transition: color 0.3s, background 0.3s, font-size 0.2s;
        }
        .nav-link .nav-link-text {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: font-size 0.2s;
        }
        .navbar-search-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #23232c;
          color: #f4f4f5;
          border-radius: 8px;
          border: none;
          outline: 1px solid #403d4d;
          padding: 7px 16px 7px 12px;
          font-size: 1rem;
          cursor: pointer;
          min-width: 210px;
          transition: outline 0.2s, background 0.2s;
          margin-left: auto;
        }
        .navbar-search-btn:active,
        .navbar-search-btn:focus {
          outline-width: 2px;
        }
        .search-placeholder {
          flex: 1;
          text-align: left;
          color: #aaa;
          transition: color 0.3s;
          cursor: pointer;
        }
        .search-placeholder.hovered {
          color: #fff;
        }
        .search-shortcut {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-left: 10px;
          font-size: 14.4px;
          border-radius: 8px;
          padding: 2px 7px;
          outline: 1px solid #403d4d;
          background: #23232c;
          transition: outline 0.2s, background 0.2s;
        }
        .search-shortcut svg {
          border-radius: 6px;
          margin-right: 2px;
        }
        .search-shortcut span:last-child {
          color: #e4e4e7;
          margin-left: 2px;
        }
        .mobile-nav-toggle {
          display: none;
        }
        @media (max-width: 909px) {
          .nav-items {
            display: none !important;
          }
          .navbar-search-btn {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block;
            margin-left: 0;
            font-size: 2rem;
            color: #f4f4f5;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: color 0.2s;
          }
        }
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: #111014;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          transition: background 0.2s;
        }
        .mobile-nav-menu {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 18px 23px 23px 23px;
          z-index: 100;
          animation: fade-in 0.2s;
          background: 111014;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .mobile-nav-close {
          background: none;
          border: none;
          color: #aaa;
          cursor: pointer;
          padding: 0 2px;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .mobile-nav-close:hover {
          color: #fff;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-nav-link {
          padding: 10px;
          border-radius: 6px;
          background: transparent;
          cursor: pointer;
          transition: background 0.15s;
          display: flex;
          flex-direction: column;
          gap: 2px;
          color: #aaa;
          font-size: 1.1rem;
          text-decoration: none;
        }
        .mobile-nav-link:hover {
          background: #23232c;
          color: #fff;
        }
        .navbar-search-btn.mobile {
          display: flex !important;
          width: 100%;
          margin-top: 10px;
        }
        .fade-enter-active,
        .fade-leave-active {
          transition: opacity 0.2s;
        }
        .fade-enter-from,
        .fade-leave-to {
          opacity: 0;
        }
      \`}</style>
    </>
  )
}
`
  },
],
  dependencies: 'npm install @lucide/react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/resizable-navbar" target="_blank" rel="noopener noreferrer" className="link">Resizable Navbar</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }