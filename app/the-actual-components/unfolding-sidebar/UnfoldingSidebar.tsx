import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ComponentItem {
  id: string;
  name: string;
  icon?: React.ReactElement;
}

interface SectionItem {
  title: string;
  components: ComponentItem[];
}

interface UnfoldingSidebarProps {
  logo: string;
  appName: string;
  sections: SectionItem[];
  onComponentClick: (componentId: string) => void;
  initialOpenState?: boolean;
  defaultActiveComponent?: string;
  unfoldIcon: React.ReactElement;
  foldIcon: React.ReactElement;
  iconColor?: string;
  iconHoverColor?: string;
  foldIconRotation?: number;
  unfoldIconRotation?: number;
  backgroundColor?: string;
  headerBackgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  sidebarWidth?: string;
  collapsedWidth?: string;
  headerHeight?: string;
  appNameFontSize?: string;
  sectionTitleFontSize?: string;
  componentFontSize?: string;
  iconSize?: number;
  rightStripeColor?: string;
  rightStripeHoverColor?: string;
  itemBorderRadius?: string;
  appNameColor?: string;
  sectionTitleColor?: string;
  componentHeight?: string;
  appNameYOffset?: string;
}

const UnfoldingSidebar: React.FC<UnfoldingSidebarProps> = ({
  logo,
  appName,
  sections,
  onComponentClick,
  initialOpenState = true,
  defaultActiveComponent,
  unfoldIcon,
  foldIcon,
  iconColor = "#a2a2a9",
  iconHoverColor = "#ffffff",
  foldIconRotation = 0,
  unfoldIconRotation = 0,
  backgroundColor = "#161618",
  headerBackgroundColor = "#151515",
  textColor = "#a2a2a9",
  activeTextColor = "#a8b1ff",
  hoverBackgroundColor = "#2c2c2a",
  activeBackgroundColor = "#252630",
  sidebarWidth = "256px",
  collapsedWidth = "54px",
  headerHeight = "50px",
  appNameFontSize = "16px",
  sectionTitleFontSize = "15px",
  componentFontSize = "14px",
  iconSize = 25,
  rightStripeColor = "#2c2c2a",
  rightStripeHoverColor = "#3c3c3a",
  itemBorderRadius = "8px",
  appNameColor = "#ffffff",
  sectionTitleColor = "#f7f7ff",
  componentHeight = '33px',
  appNameYOffset = '1px',
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialOpenState);
  const [activeComponent, setActiveComponent] = useState<string | null>(defaultActiveComponent || null);
  const [isContentVisible, setIsContentVisible] = useState(initialOpenState);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleComponentClick = (componentId: string) => {
    setActiveComponent(componentId);
    onComponentClick(componentId);
  };

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsContentVisible(false);
      setTimeout(() => setIsSidebarOpen(false), 300);
    } else {
      setIsSidebarOpen(true);
      setTimeout(() => setIsContentVisible(true), 300);
    }
  };

  return (
    <motion.aside 
      ref={sidebarRef}
      initial={{ width: isSidebarOpen ? sidebarWidth : collapsedWidth }}
      animate={{ width: isSidebarOpen ? sidebarWidth : collapsedWidth }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col flex-shrink-0 relative"
      style={{ backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav 
        className={`flex items-center p-4 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}
        style={{ backgroundColor: headerBackgroundColor, height: headerHeight }}
      >
        <AnimatePresence>
          {isContentVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <img src={logo} alt={`${appName} logo`} className="w-[24px] h-[24px] mr-2" />
                <span 
                    className="font-bold" 
                    style={{ 
                        fontSize: appNameFontSize, 
                        color: appNameColor,
                        transform: `translateY(${appNameYOffset})`
                    }}
                >
                    {appName}
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={toggleSidebar} 
          className="transition-colors duration-200"
          style={{ color: isHovered ? iconHoverColor : iconColor }}
        >
          {isSidebarOpen
            ? React.cloneElement(foldIcon, { 
                size: iconSize, 
                style: { transform: `rotate(${foldIconRotation}deg)` } 
              })
            : React.cloneElement(unfoldIcon, { 
                size: iconSize, 
                style: { transform: `rotate(${unfoldIconRotation}deg)` } 
              })
          }
        </button>
      </nav>
      <AnimatePresence>
      {isContentVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 flex-grow overflow-y-auto"
        >
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h2 className="text-1xl mb-6 block" style={{ fontSize: sectionTitleFontSize, color: sectionTitleColor }}>{section.title}</h2>
              <ul className="menu w-full rounded-box mt-6">
                {section.components.map((component) => (
                  <li key={component.id} className="mb-2">
                    <button 
                      onClick={() => handleComponentClick(component.id)}
                      onMouseEnter={() => setHoveredComponent(component.id)}
                      onMouseLeave={() => setHoveredComponent(null)}
                      className="w-full text-left px-4 transition-all duration-200 ease-in-out flex items-center"
                      style={{
                        fontSize: componentFontSize,
                        height: componentHeight,
                        color: activeComponent === component.id ? activeTextColor : 
                               hoveredComponent === component.id ? iconHoverColor : textColor,
                        backgroundColor: activeComponent === component.id ? activeBackgroundColor : 
                                         hoveredComponent === component.id ? hoverBackgroundColor : 'transparent',
                        borderRadius: itemBorderRadius,
                      }}
                    >
                      {component.icon && React.cloneElement(component.icon, { size: iconSize, className: "mr-2" })}
                      {component.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-[1px]"
        initial={{ backgroundColor: rightStripeColor }}
        animate={{ backgroundColor: isHovered ? rightStripeHoverColor : rightStripeColor }}
        transition={{ duration: 0.2 }}
      />
    </motion.aside>
  );
};

export default UnfoldingSidebar;