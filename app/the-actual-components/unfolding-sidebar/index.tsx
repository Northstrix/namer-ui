'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "UnfoldingSidebar.tsx" file
import UnfoldingSidebar from '@/app/the-actual-components/unfolding-sidebar/UnfoldingSidebar'

<UnfoldingSidebar
  logo="/logo.png"
  appName="Namer UI"
  sections={[
    {
      title: "Components",
      components: [
        { id: 'chronicle-button', name: 'Chronicle Button' },
        { id: 'inflected-card', name: 'Inflected Card' },
        { id: 'halomot-button', name: 'Halomot Button' },
      ]
    }
  ]}
  onComponentClick={(componentId) => console.log(\`Clicked component: \${componentId}\`)}
  unfoldIcon={<IconBorderRightPlus />}
  foldIcon={<IconFoldDown />}
  foldIconRotation={90}
  unfoldIconRotation={0}
  iconColor="#71717a"
  iconHoverColor="#27272a"
  backgroundColor="#f8fafc"
  headerBackgroundColor="#edf2f7"
  textColor="#44444b"
  activeTextColor="#09090b"
  hoverBackgroundColor="#e5e7eb"
  activeBackgroundColor="#629bf8"
  sidebarWidth="256px"
  collapsedWidth="54px"
  headerHeight="50px"
  rightStripeColor="#cbd5e1"
  rightStripeHoverColor="#94a3b8"
  itemBorderRadius="32px"
  appNameColor="#18181b"
  sectionTitleColor="#27272a"
  componentFontSize="14px"
  defaultActiveComponent="chronicle-button"
  initialOpenState={true}
/>

// Note: The UnfoldingSidebar component accepts the following props:
// - logo: string (required) - The URL of the logo image to be displayed in the sidebar header.
// - appName: string (required) - The name of the application to be shown next to the logo.
// - sections: SectionItem[] (required) - An array of sections, each containing a title and an array of components.
// - onComponentClick: (componentId: string) => void (required) - A callback function triggered when a component is clicked.
// - initialOpenState: boolean (optional) - Determines whether the sidebar is initially open or closed (default: true).
// - defaultActiveComponent: string (optional) - The ID of the component that should be active by default.
// - unfoldIcon: React.ReactElement (required) - The icon to be displayed for unfolding the sidebar.
// - foldIcon: React.ReactElement (required) - The icon to be displayed for folding the sidebar.
// - iconColor: string (optional) - The color of the fold/unfold icons (default: "#a2a2a9").
// - iconHoverColor: string (optional) - The color of the fold/unfold icons on hover (default: "#ffffff").
// - foldIconRotation: number (optional) - The rotation angle of the fold icon in degrees (default: 0).
// - unfoldIconRotation: number (optional) - The rotation angle of the unfold icon in degrees (default: 0).
// - backgroundColor: string (optional) - The background color of the sidebar (default: "#161618").
// - headerBackgroundColor: string (optional) - The background color of the sidebar header (default: "#151515").
// - textColor: string (optional) - The color of the regular text in the sidebar (default: "#a2a2a9").
// - activeTextColor: string (optional) - The color of the text for the active component (default: "#a8b1ff").
// - hoverBackgroundColor: string (optional) - The background color of components on hover (default: "#2c2c2a").
// - activeBackgroundColor: string (optional) - The background color of the active component (default: "#252630").
// - sidebarWidth: string (optional) - The width of the expanded sidebar (default: "256px").
// - collapsedWidth: string (optional) - The width of the collapsed sidebar (default: "54px").
// - headerHeight: string (optional) - The height of the sidebar header (default: "50px").
// - appNameFontSize: string (optional) - The font size of the application name (default: "16px").
// - sectionTitleFontSize: string (optional) - The font size of section titles (default: "15px").
// - componentFontSize: string (optional) - The font size of component names (default: "14px").
// - iconSize: number (optional) - The size of the icons used in the sidebar (default: 25).
// - rightStripeColor: string (optional) - The color of the right stripe of the sidebar (default: "#2c2c2a").
// - rightStripeHoverColor: string (optional) - The color of the right stripe on hover (default: "#3c3c3a").
// - itemBorderRadius: string (optional) - The border radius of the component items (default: "8px").
// - appNameColor: string (optional) - The color of the application name (default: "#ffffff").
// - sectionTitleColor: string (optional) - The color of the section titles (default: "#f7f7ff").
// - componentHeight: string (optional) - The height of each component item (default: '33px').
// - appNameYOffset: string (optional) - The vertical offset of the application name (default: '1px').
`,
code: [
  {
    filename: 'UnfoldingSidebar.tsx',
    content: `import React, { useState, useRef } from 'react';
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
        className={\`flex items-center p-4 \${isSidebarOpen ? 'justify-between' : 'justify-center'}\`}
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
                <img src={logo} alt={\`\${appName} logo\`} className="w-[24px] h-[24px] mr-2" />
                <span 
                    className="font-bold" 
                    style={{ 
                        fontSize: appNameFontSize, 
                        color: appNameColor,
                        transform: \`translateY(\${appNameYOffset})\`
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
                style: { transform: \`rotate(\${foldIconRotation}deg)\` } 
              })
            : React.cloneElement(unfoldIcon, { 
                size: iconSize, 
                style: { transform: \`rotate(\${unfoldIconRotation}deg)\` } 
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
`
  },
],
  dependencies: 'npm install framer-motion --legacy-peer-deps',
  credit: (
    <span></span>
  ),
}

export { metadata }