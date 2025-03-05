"use client"
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
          x: `${hoveredItem * (height - 2 * padding + padding)}px`,
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
        className={`fancy-navbar`}
        role="toolbar"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        ref={navBarRef}
        style={{
          display: 'inline-flex',
          gap: `${padding}px`,
          padding: `${padding}px`,
          backgroundColor: backgroundColor,
          borderRadius: `${height / 2}px`,
          position: 'relative',
          height: `${height}px`,
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
        width: `${height - 2 * padding}px`,
        height: `${height - 2 * padding}px`,
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
          fontSize: `${iconSize}px`,
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
              top: `calc(100% + ${tooltipSpacing}px)`,
              left: 'auto',
              transform: 'translateX(-50%)',
              backgroundColor: tooltipBackgroundColor,
              color: tooltipForegroundColor,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5625rem',
              fontSize: `${tooltipTextSize}px`,
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
        top: `${padding}px`,
        left: `${padding}px`,
        width: `${highlightSize}px`,
        height: `${highlightSize}px`,
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