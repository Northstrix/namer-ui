"use client";

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
  defaultItem?: number;
};

type NavBarContextType = {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  backgroundColor: string;
  foregroundColor: string;
  height: number;
  padding: number;
  tooltipTextSize: number;
  tooltipSpacing: number;
  activeIconColor: string;
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
  defaultItem = 0,
}) => {
  const [activeItem, setActiveItem] = useState(defaultItem);
  const navBarRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `${activeItem * (height - 2 * padding + padding)}px`,
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }, [activeItem, height, padding]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const itemButtons = navBarRef.current?.querySelectorAll<HTMLButtonElement>('button');
    if (!itemButtons) return;
    const currentIndex = activeItem;
    let newIndex = currentIndex;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = (currentIndex - 1 + items.length) % items.length;
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
    setActiveItem(newIndex);
    itemButtons[newIndex].focus();
  };

  const orientation = 'horizontal';

  return (
    <NavBarContext.Provider value={{
      activeItem,
      activeIconColor,
      setActiveItem,
      backgroundColor,
      foregroundColor,
      height,
      padding,
      tooltipTextSize,
      tooltipSpacing
    }}>
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
          />
        ))}
        <NavBarHighlight ref={sliderRef} />
      </div>
    </NavBarContext.Provider>
  );
};

const NavBarItem: React.FC<NavItem & { index: number; onHover: () => void; onClick: () => void }> = ({
  icon,
  label,
  index,
  onHover,
  onClick,
}) => {
  const {
    activeItem,
    activeIconColor,
    setActiveItem,
    backgroundColor,
    foregroundColor,
    height,
    padding,
    tooltipTextSize,
    tooltipSpacing
  } = useContext(NavBarContext);
  
  const isActive = index === activeItem;
  const iconSize = height * 0.5;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="fancy-navbar__button"
      type="button"
      aria-label={label}
      aria-pressed={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={() => {
        setActiveItem(index);
        onClick();
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
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
          backgroundColor: isActive ? foregroundColor : 'transparent',
          color: isActive ? activeIconColor : foregroundColor,
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        {React.cloneElement(icon, { style: { ...icon.props.style, color: 'currentColor' } })}
      </div>
      <AnimatePresence>
        {isHovered && (
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
              backgroundColor: backgroundColor,
              color: foregroundColor,
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
  const { foregroundColor, height, padding } = useContext(NavBarContext);
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
        backgroundColor: foregroundColor,
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(4px)',
      }}
    />
  );
});

NavBarHighlight.displayName = 'NavBarHighlight';

export default FancyNavBar;