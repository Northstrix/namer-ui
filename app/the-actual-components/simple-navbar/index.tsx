'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SimpleNavbar.tsx" file
import SimpleNavbar from '@/app/the-actual-components/simple-navbar/SimpleNavbar'

import { IconHome, IconStar, IconUserStar, IconList, IconCalendarEvent, IconInfoCircle } from '@tabler/icons-react';

<SimpleNavbar
  desktopPadding="24px"
  mobilePadding="12px"
  desktopFont="22px"
  mobileFont="20px"
  desktopSubFont="14px"
  mobileSubFont="12px"
  displayNavigationThreshold={846}
  maxWidth="1536px"
  onNavItemClick={(itemLabel) => console.log(\`Clicked: \${itemLabel}\`)}
  appName="Shakhor"
  appSubInscription="Cool, like a midnight in Austin!"
  phoneNumber="+1 (234) 567-8901"
  phoneSubInscription="Telegram, WhatsApp, Viber"
  items={[
    { icon: <IconHome size={22} />, label: 'Home' },
    { icon: <IconStar size={22} />, label: 'Food of the Day' },
    { icon: <IconUserStar size={22} />, label: 'Customer Reviews' },
    { icon: <IconList size={22} />, label: 'Menu' },
    { icon: <IconCalendarEvent size={22} />, label: 'Events & Promotions' },
    { icon: <IconInfoCircle size={22} />, label: 'About Us' },
  ]}
  backgroundColor="#171717"
  iconForegroundColor="#00A6FB"
  stripeColor="#616161"
  defaultTextColor="#00A6FB"
  foregroundHoverColor="#f1f1f7"
  tooltipBackgroundColor="#4ac2ff"
  tooltipForegroundColor="#050505"
  activeIconColor="#f7f7ff"
  activeIconBackgroundColor="#00A6FB"
  activeIconGlowColor="#00A6FB"
  onAppNameClicked={() => console.log("App Name Clicked")}
  onPhoneNumberClicked={() => console.log("Phone Number Clicked")}
/>

// Note: The SimpleNavbar component accepts the following props:
// - desktopPadding: string (required) - Padding for the desktop version of the navbar.
// - mobilePadding: string (required) - Padding for the mobile version of the navbar.
// - desktopFont: string (required) - Font size for main text on desktop.
// - mobileFont: string (required) - Font size for main text on mobile.
// - desktopSubFont: string (required) - Font size for sub-inscriptions on desktop.
// - mobileSubFont: string (required) - Font size for sub-inscriptions on mobile.
// - displayNavigationThreshold: number (required) - Threshold width for displaying the fancy navbar.
// - maxWidth: string (optional) - Maximum width of the navbar container (default: '100%').
// - onNavItemClick: (itemLabel: string) => void (required) - Callback function triggered when a navbar item is clicked.
// - appName: string (required) - Text for the app name.
// - appSubInscription: string (required) - Text for the app sub-inscription.
// - phoneNumber: string (required) - Phone number to display.
// - phoneSubInscription: string (required) - Sub-inscription for the phone number.
// - items: { icon: React.ReactElement<{ style?: React.CSSProperties }>; label: string; }[] (required) - Array of items for the fancy navbar.
// - backgroundColor: string (required) - Background color of the navbar.
// - iconForegroundColor: string (required) - Color for icons in the fancy navbar.
// - stripeColor: string (required) - Color for the bottom stripe of the navbar.
// - defaultTextColor: string (required) - Default text color for the navbar.
// - foregroundHoverColor: string (required) - Hover color for text in the navbar.
// - tooltipBackgroundColor: string (required) - Background color for tooltips in the fancy navbar.
// - tooltipForegroundColor: string (required) - Text color for tooltips in the fancy navbar.
// - activeIconColor: string (required) - Color for active icons in the fancy navbar.
// - activeIconBackgroundColor: string (required) - Background color for active icons in the fancy navbar.
// - activeIconGlowColor: string (required) - Glow color for active icons in the fancy navbar.
// - onAppNameClicked: () => void (required) - Callback function triggered when the app name is clicked.
// - onPhoneNumberClicked: () => void (required) - Callback function triggered when the phone number is clicked.
`,
code: [
  {
    filename: 'SimpleNavbar.tsx',
    content: `"use client"
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import FancyNavBar from './FancyNavBar';

interface NavbarProps {
  desktopPadding: string;
  mobilePadding: string;
  desktopFont: string;
  mobileFont: string;
  desktopSubFont: string;
  mobileSubFont: string;
  displayNavigationThreshold: number;
  maxWidth?: string;
  onNavItemClick: (itemLabel: string) => void;
  appName: string;
  appSubInscription: string;
  phoneNumber: string;
  phoneSubInscription: string;
  items: { icon: React.ReactElement<{ style?: React.CSSProperties }>; label: string; }[];
  backgroundColor: string;
  iconForegroundColor: string;
  stripeColor: string;
  defaultTextColor: string;
  foregroundHoverColor: string;
  tooltipBackgroundColor: string;
  tooltipForegroundColor: string;
  activeIconColor: string;
  activeIconBackgroundColor: string;
  activeIconGlowColor: string;
  onAppNameClicked: () => void;
  onPhoneNumberClicked: () => void;
}

const SimpleNavbar: React.FC<NavbarProps> = ({
  desktopPadding,
  mobilePadding,
  desktopFont,
  mobileFont,
  desktopSubFont,
  mobileSubFont,
  displayNavigationThreshold,
  maxWidth = '100%',
  onNavItemClick,
  appName,
  appSubInscription,
  phoneNumber,
  phoneSubInscription,
  items,
  backgroundColor,
  iconForegroundColor,
  stripeColor,
  defaultTextColor,
  foregroundHoverColor,
  tooltipBackgroundColor,
  tooltipForegroundColor,
  activeIconColor,
  activeIconBackgroundColor,
  activeIconGlowColor,
  onAppNameClicked,
  onPhoneNumberClicked
}) => {
  const [isFancyNavBarVisible, setIsFancyNavBarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsFancyNavBarVisible(window.innerWidth >= displayNavigationThreshold);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [displayNavigationThreshold]);

  return (
    <StickyNavbarWrapper backgroundColor={backgroundColor}>
      <NavbarContainer
        desktopPadding={desktopPadding}
        mobilePadding={mobilePadding}
        desktopFont={desktopFont}
        mobileFont={mobileFont}
        desktopSubFont={desktopSubFont}
        mobileSubFont={mobileSubFont}
        maxWidth={maxWidth}
      >
        {/* Left Section */}
        <LeftSection desktopPadding={desktopPadding} mobilePadding={mobilePadding}>
          <AppNameContainer onClick={onAppNameClicked}>
            <AppName
              desktopFont={desktopFont}
              mobileFont={mobileFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {appName}
            </AppName>
          </AppNameContainer>
          <SubInscriptionContainer>
            <SubInscription
              desktopFont={desktopSubFont}
              mobileFont={mobileSubFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {appSubInscription}
            </SubInscription>
          </SubInscriptionContainer>
        </LeftSection>
        {/* Center Section */}
        <CenterSection>
          {isFancyNavBarVisible && (
            <FancyNavBar
              items={items}
              onItemClick={(index) => {
                const clickedItem = items[index].label;
                onNavItemClick(clickedItem);
              }}
              backgroundColor={backgroundColor}
              foregroundColor={iconForegroundColor}
              activeIconColor={activeIconColor}
              activeIconBackgroundColor={activeIconBackgroundColor}
              activeIconGlowColor={activeIconGlowColor}
              tooltipBackgroundColor={tooltipBackgroundColor}
              tooltipForegroundColor={tooltipForegroundColor}
            />
          )}
        </CenterSection>
        {/* Right Section */}
        <RightSection desktopPadding={desktopPadding} mobilePadding={mobilePadding}>
          <PhoneContainer onClick={onPhoneNumberClicked}>
            <PhoneNumber
              desktopFont={desktopFont}
              mobileFont={mobileFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {phoneNumber}
            </PhoneNumber>
          </PhoneContainer>
          <PhoneSubInscriptionContainer>
            <PhoneSubInscription
              desktopFont={desktopSubFont}
              mobileFont={mobileSubFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {phoneSubInscription}
            </PhoneSubInscription>
          </PhoneSubInscriptionContainer>
        </RightSection>
        {/* Bottom Line */}
      </NavbarContainer>
      <BottomLine stripeColor={stripeColor} />
    </StickyNavbarWrapper>
  );
};

const StickyNavbarWrapper = styled.div<{ backgroundColor: string }>\`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background-color: \$\{(props) => props.backgroundColor\};
\`;

const NavbarContainer = styled.div<{
  desktopPadding?: string;
  mobilePadding?: string;
  desktopFont?: string;
  mobileFont?: string;
  desktopSubFont?: string;
  mobileSubFont?: string;
  maxWidth?: string;
}>\`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  max-width: \$\{(props) => props.maxWidth\};
  margin: 0 auto;
  position: relative;
\`;

const LeftSection = styled.div<{ desktopPadding?: string; mobilePadding?: string }>\`
  display: flex;
  flex-direction: column;
  padding-left: \$\{(props) => props.desktopPadding\};
  @media (max-width: 768px) \{
    padding-left: \$\{(props) => props.mobilePadding\};
  \}
\`;

const CenterSection = styled.div\`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
\`;

const RightSection = styled.div<{ desktopPadding?: string; mobilePadding?: string }>\`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: \$\{(props) => props.desktopPadding\};
  @media (max-width: 768px) \{
    padding-right: \$\{(props) => props.mobilePadding\};
  \}
\`;

const AppNameContainer = styled.div\`
  display: inline-block;
\`;

const AppName = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>\`
  font-size: \$\{(props) => props.desktopFont\};
  font-weight: bold;
  color: \$\{(props) => props.themeColor\};
  transition: color 0.3s ease;
  @media (max-width: 768px) \{
    font-size: \$\{(props) => props.mobileFont\};
  \}
  &:hover \{
    color: \$\{(props) => props.foregroundHoverColor\};
    cursor: pointer;
  \}
\`;

const SubInscriptionContainer = styled.div\`
  display: inline-block;
\`;

const SubInscription = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>\`
  font-size: \$\{(props) => props.desktopFont\};
  color: \$\{(props) => props.themeColor\};
  transition: color 0.3s ease;
  @media (max-width: 768px) \{
    font-size: \$\{(props) => props.mobileFont\};
  \}
\`;

const PhoneContainer = styled.div\`
  display: inline-block;
\`;

const PhoneNumber = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>\`
  font-size: \$\{(props) => props.desktopFont\};
  font-weight: bold;
  color: \$\{(props) => props.themeColor\};
  transition: color 0.3s ease;
  @media (max-width: 768px) \{
    font-size: \$\{(props) => props.mobileFont\};
  \}
  &:hover \{
    color: \$\{(props) => props.foregroundHoverColor\};
    cursor: pointer;
  \}
\`;

const PhoneSubInscriptionContainer = styled.div\`
  display: inline-block;
\`;

const PhoneSubInscription = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>\`
  font-size: \$\{(props) => props.desktopFont\};
  color: \$\{(props) => props.themeColor\};
  transition: color 0.3s ease;
  @media (max-width: 768px) \{
    font-size: \$\{(props) => props.mobileFont\};
  \}
\`;

const BottomLine = styled.div<{ stripeColor: string }>\`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: \$\{(props) => props.stripeColor\};
\`;

export default SimpleNavbar;
`
  },
  {
    filename: 'FancyNavBar.tsx',
    content: `"use client"
import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

type NavItem = {
  icon: React.ReactElement<{ style?: React.CSSProperties }>;
  label: string;
};

type FancyNavBarProps = {
  items: NavItem[];
  onItemHover?: (index: number) => void;
  onItemClick?: (index: number) => void;
  backgroundColor?: string;
  foregroundColor?: string;
  height?: number;
  padding?: number;
  tooltipTextSize?: number;
  tooltipSpacing?: number;
  activeIconColor?: string;
  activeIconBackgroundColor?: string;
  activeIconGlowColor?: string;
  removeTooltipOnClick?: boolean;
  tooltipBackgroundColor?: string;
  tooltipForegroundColor?: string;
};

type NavBarContextType = {
  hoveredItem: number;
  setHoveredItem: React.Dispatch<React.SetStateAction<number>>;
  activeIconColor: string;
  activeIconBackgroundColor: string;
  activeIconGlowColor: string;
  backgroundColor: string;
  foregroundColor: string;
  height: number;
  padding: number;
  tooltipTextSize: number;
  tooltipSpacing: number;
  tooltipBackgroundColor: string;
  tooltipForegroundColor: string;
};

const NavBarContext = createContext<NavBarContextType>({} as NavBarContextType);

export const FancyNavBar: React.FC<FancyNavBarProps> = ({
  items,
  onItemHover,
  onItemClick,
  backgroundColor = '#f7f7ff',
  foregroundColor = '#050505',
  height = 64,
  padding = 11,
  tooltipTextSize = 16,
  tooltipSpacing = 24,
  activeIconColor = backgroundColor,
  activeIconBackgroundColor = backgroundColor,
  activeIconGlowColor = backgroundColor,
  removeTooltipOnClick = false,
  tooltipBackgroundColor = backgroundColor,
  tooltipForegroundColor = foregroundColor,
}) => {
  const [hoveredItem, setHoveredItem] = useState<number>(-1);
  const navBarRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      if (hoveredItem !== -1) {
        gsap.to(sliderRef.current, {
          x: \`\$\{hoveredItem * (height - 2 * padding + padding)\}px\`,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        });
      } else {
        gsap.to(sliderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    }
  }, [hoveredItem, height, padding]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const itemButtons = navBarRef.current?.querySelectorAll<HTMLButtonElement>('button');
    if (!itemButtons) return;
    let newIndex: number = -1;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = hoveredItem === -1 ? 0 : (hoveredItem + 1) % items.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = hoveredItem === -1 ? items.length - 1 : (hoveredItem - 1 + items.length) % items.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = items.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    setHoveredItem(newIndex);
    itemButtons[newIndex].focus();
  };

  const orientation = 'horizontal';

  return (
    <NavBarContext.Provider
      value={{
        hoveredItem,
        setHoveredItem,
        activeIconColor,
        activeIconBackgroundColor,
        activeIconGlowColor,
        backgroundColor,
        foregroundColor,
        height,
        padding,
        tooltipTextSize,
        tooltipSpacing,
        tooltipBackgroundColor,
        tooltipForegroundColor,
      }}
    >
      <div
        className={\`fancy-navbar\`}
        role="toolbar"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        ref={navBarRef}
        style={{
          display: 'inline-flex',
          gap: \`\$\{padding\}px\`,
          padding: \`\$\{padding\}px\`,
          backgroundColor: backgroundColor,
          borderRadius: \`\$\{height / 2\}px\`,
          position: 'relative',
          height: \`\$\{height\}px\`,
          fontWeight: 'bold',
        }}
      >
        {items.map((item, index) => (
          <NavBarItem
            key={index}
            {...item}
            index={index}
            onHover={() => onItemHover?.(index)}
            onClick={() => onItemClick?.(index)}
            removeTooltipOnClick={removeTooltipOnClick}
          />
        ))}
        <NavBarHighlight ref={sliderRef} />
      </div>
    </NavBarContext.Provider>
  );
};

const NavBarItem: React.FC<NavItem & { index: number; onHover: () => void; onClick: () => void; removeTooltipOnClick?: boolean }> = ({
  icon,
  label,
  index,
  onHover,
  onClick,
  removeTooltipOnClick = false,
}) => {
  const { hoveredItem, setHoveredItem, activeIconColor, activeIconBackgroundColor, activeIconGlowColor, backgroundColor, foregroundColor, height, padding, tooltipTextSize, tooltipSpacing, tooltipBackgroundColor, tooltipForegroundColor } = useContext(NavBarContext);
  const isHovered = index === hoveredItem;
  const iconSize = height * 0.5;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setHoveredItem(index);
    onHover();
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setHoveredItem(-1);
  };

  const handleClick = () => {
    onClick();
    if (removeTooltipOnClick) {
      setShowTooltip(false);
    }
  };

  return (
    <button
      className="fancy-navbar__button"
      type="button"
      aria-label={label}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: 'transparent',
        borderRadius: '50%',
        cursor: 'pointer',
        width: \`\$\{height - 2 * padding\}px\`,
        height: \`\$\{height - 2 * padding\}px\`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'color 0.3s',
        zIndex: '1',
      }}
    >
      <div
        style={{
          fontSize: \`\$\{iconSize\}px\`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: isHovered ? activeIconBackgroundColor : 'transparent',
          color: isHovered ? activeIconColor : foregroundColor,
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        {React.cloneElement(icon, { style: { ...icon.props.style, color: 'currentColor' } })}
      </div>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: \`calc(100% + \$\{tooltipSpacing\}px)\`,
              left: 'auto',
              transform: 'translateX(-50%)',
              backgroundColor: tooltipBackgroundColor,
              color: tooltipForegroundColor,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5625rem',
              fontSize: \`\$\{tooltipTextSize\}px\`,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

const NavBarHighlight = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { activeIconGlowColor, height, padding } = useContext(NavBarContext);
  const highlightSize = height - 2 * padding;
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: \`\$\{padding\}px\`,
        left: \`\$\{padding\}px\`,
        width: \`\$\{highlightSize\}px\`,
        height: \`\$\{highlightSize\}px\`,
        backgroundColor: activeIconGlowColor,
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(4px)',
        opacity: 0,
      }}
    />
  );
});

NavBarHighlight.displayName = 'NavBarHighlight';

export default FancyNavBar;
`
  },
],
  dependencies: 'npm install gsap --legacy-peer-deps\nnpm install @tabler/icons-react --legacy-peer-deps\nnpm install framer-motion',
  credit: (
    <span>
      <a href="https://codepen.io/jkantner/pen/OJKZxpv" target="_blank" rel="noopener noreferrer" className="link">Toolbars With Sliding Selection</a> by <a href="https://codepen.io/jkantner" target="_blank" rel="noopener noreferrer" className="link">Jon Kantner</a>
      <br />
      <a href="https://codepen.io/yudizsolutions/pen/YzgXvZJ" target="_blank" rel="noopener noreferrer" className="link">Gsap Slider</a> by <a href="https://codepen.io/yudizsolutions" target="_blank" rel="noopener noreferrer" className="link">Yudiz Solutions Limited</a>
    </span>
  ),
}

export { metadata }