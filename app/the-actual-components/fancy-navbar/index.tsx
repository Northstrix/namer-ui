'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "FancyNavBar.tsx" file
import FancyNavBar from '@/app/the-actual-components/fancy-navbar/FancyNavbar'

import { IconUserFilled, IconFolderFilled, IconFileFilled, IconCircleArrowDownFilled, IconCircleArrowUpFilled, IconLockFilled, IconSettingsFilled, IconInfoCircleFilled } from '@tabler/icons-react';

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
  backgroundColor: '#181820',
  borderRadius: '8px',
  minHeight: '640px'
}}>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  }}>
    <h2 style={{ 
      color: '#f7f7ff', 
      fontSize: '24px', 
      fontWeight: 'bold',
      marginBottom: '8px'
    }}>
      Default Behavior
    </h2>
    <FancyNavBar
      items={[
        { icon: <IconUserFilled size={24} />, label: 'Profile Info' },
        { icon: <IconFolderFilled size={24} />, label: 'Personal Files' },
        { icon: <IconFileFilled size={24} />, label: 'Shared Files' },
        { icon: <IconCircleArrowDownFilled size={24} />, label: 'Received Files' },
        { icon: <IconCircleArrowUpFilled size={24} />, label: 'Sent Files' },
        { icon: <IconLockFilled size={24} />, label: 'Password Vault' },
        { icon: <IconSettingsFilled size={24} />, label: 'Settings' },
        { icon: <IconInfoCircleFilled size={24} />, label: 'About' },
      ]}
      onItemHover={(index) => console.log(\`First NavBar - Hovering item: \${index}\`)}
      onItemClick={(index) => console.log(\`First NavBar - Clicked item: \${index}\`)}
      activeIconColor="#00A6FB"
      backgroundColor="#f7f7ff"
      foregroundColor="#050505"
    />
  </div>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  }}>
    <h2 style={{ 
      color: '#f7f7ff', 
      fontSize: '24px', 
      fontWeight: 'bold',
      marginBottom: '8px'
    }}>
      Tooltip Disappears on Click
    </h2>
    <FancyNavBar
      items={[
        { icon: <IconInfoCircleFilled size={24} />, label: "אודות" },
        { icon: <IconSettingsFilled size={24} />, label: "הגדרות" },
        { icon: <IconLockFilled size={24} />, label: "כספת סיסמאות" },
        { icon: <IconCircleArrowUpFilled size={24} />, label: "קבצים שנשלחו" },
        { icon: <IconCircleArrowDownFilled size={24} />, label: "קבצים שהתקבלו" },
        { icon: <IconFileFilled size={24} />, label: "קבצים משותפים" },
        { icon: <IconFolderFilled size={24} />, label: "קבצים אישיים" },
        { icon: <IconUserFilled size={24} />, label: "מידע פרופיל" },
      ]}
      onItemHover={(index) => console.log(\`Second NavBar - Hovering item: \${index}\`)}
      onItemClick={(index) => console.log(\`Second NavBar - Clicked item: \${index}\`)}
      activeIconColor="#9F4EFF"
      backgroundColor="#020203"
      foregroundColor="#f7f7ff"
      removeTooltipOnClick={true}
    />
  </div>
</div>

// Note: The FancyNavBar component accepts the following props:
// - items: NavItem[] (required) - An array of objects representing the items in the navbar, each containing an icon (React node) and a label (string).
// - onItemHover: (index: number) => void (optional) - Callback function triggered when an item is hovered over, receiving the index of the hovered item.
// - onItemClick: (index: number) => void (optional) - Callback function triggered when an item is clicked, receiving the index of the clicked item.
// - backgroundColor: string (optional) - Custom background color for the navbar (default: '#f7f7ff').
// - foregroundColor: string (optional) - Custom color for inactive icons and the highlight color (default: '#050505').
// - height: number (optional) - Height of the navbar in pixels (default: 64).
// - padding: number (optional) - Internal padding of the navbar in pixels (default: 11).
// - tooltipTextSize: number (optional) - Font size for tooltips in pixels (default: 16).
// - tooltipSpacing: number (optional) - Spacing between the tooltip and the icon in pixels (default: 24).
// - activeIconColor: string (optional) - Color for the currently active icon (default: matches backgroundColor).
// - defaultItem: number (optional) - Index of the initially active item in the navbar (default: 0).
// - removeTooltipOnClick: boolean (optional) - Flag to remove tooltip on click as well as on unhover (default: false).
`,
code: [
  {
    filename: 'FancyNavbar.tsx',
    content: `"use client";
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
  removeTooltipOnClick?: boolean;
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
  removeTooltipOnClick = false,
}) => {
  const [activeItem, setActiveItem] = useState(defaultItem);
  const navBarRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: \`\${activeItem * (height - 2 * padding + padding)}px\`,
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
        className={\`fancy-navbar\`}
        role="toolbar"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        ref={navBarRef}
        style={{
          display: 'inline-flex',
          gap: \`\${padding}px\`,
          padding: \`\${padding}px\`,
          backgroundColor: backgroundColor,
          borderRadius: \`\${height / 2}px\`,
          position: 'relative',
          height: \`\${height}px\`,
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

const NavBarItem: React.FC<NavItem & {
  index: number;
  onHover: () => void;
  onClick: () => void;
  removeTooltipOnClick?: boolean;
}> = ({
  icon,
  label,
  index,
  onHover,
  onClick,
  removeTooltipOnClick = false,
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
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = () => {
    setActiveItem(index);
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
      aria-pressed={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: 'transparent',
        borderRadius: '50%',
        cursor: 'pointer',
        width: \`\${height - 2 * padding}px\`,
        height: \`\${height - 2 * padding}px\`,
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
          fontSize: \`\${iconSize}px\`,
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
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: \`calc(100% + \${tooltipSpacing}px)\`,
              left: 'auto',
              transform: 'translateX(-50%)',
              backgroundColor: backgroundColor,
              color: foregroundColor,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5625rem',
              fontSize: \`\${tooltipTextSize}px\`,
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
        top: \`\${padding}px\`,
        left: \`\${padding}px\`,
        width: \`\${highlightSize}px\`,
        height: \`\${highlightSize}px\`,
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