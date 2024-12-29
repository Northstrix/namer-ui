'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ModernSidebar.tsx" file
import ModernSidebar from '@/app/the-actual-components/modern-sidebar/ModernSidebar'
import { IconHome, IconFile, IconPencil, IconLogout, IconUser, IconFolder, IconCircleArrowDown, IconCircleArrowUp, IconLock, IconSettings, IconInfoCircle } from '@tabler/icons-react';


// logo example //
interface SquareProps {
  color: string;
}

const Square: React.FC<SquareProps> = ({ color }) => (
  <div style={{
    width: '12px',
    height: '12px',
    backgroundColor: color,
    margin: '2px',
    borderRadius: '50%',
  }} />
);
// logo example //

<div className="bg-[#262630] rounded-lg min-h-[300px] w-[calc(100%-360px)] gap-9 flex items-center justify-between">
  <ModernSidebar
    items={[
      { icon: <IconUser size={24} />, label: 'Profile Info' },
      { icon: <IconFolder size={24} />, label: 'Personal Files' },
      { icon: <IconFile size={24} />, label: 'Shared Files' },
      { icon: <IconCircleArrowDown size={24} />, label: 'Received Files' },
      { icon: <IconCircleArrowUp size={24} />, label: 'Sent Files' },
      { icon: <IconLock size={24} />, label: 'Password Vault' },
      { icon: <IconSettings size={24} />, label: 'Settings' },
      { icon: <IconInfoCircle size={24} />, label: 'About' },
    ]}
    onItemHover={(index) => console.log(\`Hovering item:\${index}\`)}
    onItemClick={(index) => console.log(\`Clicked item:\${index}\`)}
    appLogo={
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gridTemplateRows:'repeat(3, 1fr)',
        width:'44px',
        height:'44px',
        marginRight:'8px', // Adjust as needed
        marginLeft:'8px', // Adjust as needed
      }}>
        <Square color="#5c3fcd" />
        <Square color="#7538CB" />
        <Square color="#4246CE" />
        <Square color="#5c3fcd" />
        <Square color="#5c3fcd" />
        <Square color="#4246CE" />
        <Square color="#5c3fcd" />
        <Square color="#00000000" />
        <Square color="#4246CE" />
      </div>
    }
  />
  
  <ModernSidebar
    items={[
      { icon: <IconUser size={24} />, label: 'מידע על פרופיל' }, // Profile Info
      { icon: <IconFolder size={24} />, label: 'קבצים אישיים' }, // Personal Files
      { icon: <IconFile size={24} />, label: 'קבצים משותפים' }, // Shared Files
      { icon: <IconCircleArrowDown size={24} />, label: 'קבצים שהתקבלו' }, // Received Files
      { icon: <IconCircleArrowUp size={24} />, label: 'קבצים שנשלחו' }, // Sent Files
      { icon: <IconLock size={24} />, label: 'כספת סיסמאות' }, // Password Vault
      { icon: <IconSettings size={24} />, label: 'הגדרות' }, // Settings
      { icon: <IconInfoCircle size={24} />, label: 'אודות' }, // About
    ]}
    onItemHover={(index) => console.log(\`Hovering item:\${index}\`)}
    onItemClick={(index) => console.log(\`Clicked item:\${index}\`)}
    isRTL={true}
    logoutLabel="התנתקות" // Log out in Hebrew
    appLogo={
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gridTemplateRows:'repeat(3, 1fr)',
        width:'44px',
        height:'44px',
        marginRight:'8px', // Adjust as needed
        marginLeft:'8px', // Adjust as needed
      }}>
        <Square color="#5c3fcd" />
        <Square color="#7538CB" />
        <Square color="#4246CE" />
        <Square color="#5c3fcd" />
        <Square color="#5c3fcd" />
        <Square color="#4246CE" />
        <Square color="#5c3fcd" />
        <Square color="#00000000" />
        <Square color="#4246CE" />
      </div>
    }
  />
</div>

// Note: The ModernSidebar component accepts the following props:
// - items: SidebarItem[] (required) - An array of objects representing the items in the sidebar, each containing an icon (React node) and a label (string).
// - onItemHover: (index: number) => void (required) - Callback function triggered when an item is hovered over, receiving the index of the hovered item.
// - onItemClick: (index: number) => void (required) - Callback function triggered when an item is clicked, receiving the index of the clicked item.
// - isRTL: boolean (optional) - Determines if the sidebar should be rendered in right-to-left layout (default: false).
// - bgColor: string (optional) - Custom background color for the sidebar (default: '#0a070e').
// - iconColor: string (optional) - Default color for icons in the sidebar (default: '#888').
// - hoverColor: string (optional) - Color for icons when hovered over (default: '#eee').
// - activeColor: string (optional) - Color for active icons in the sidebar.
// - appLogo: React.ReactNode (optional) - Custom logo displayed at the top of the sidebar.
// - borderColor: string (optional) - Color for the sidebar border (default: '#1c1c24').
// - tooltipColor: string (optional) - Color for tooltips displayed in the sidebar, defaults to bgColor.
// - logoutLabel: string (optional) - Custom label for the logout inscription (default: 'Log out').
`,
code: [
  {
    filename: 'ModernSidebar.tsx',
    content: `"use client";

import React, { useState } from 'react';
import { IconLogout } from '@tabler/icons-react';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
}

interface ModernSidebarProps {
  items: SidebarItem[];
  onItemHover: (index: number) => void;
  onItemClick: (index: number) => void;
  isRTL?: boolean;
  bgColor?: string; // Background color
  iconColor?: string; // Default icon color
  hoverColor?: string; // Hovered icon color
  activeColor?: string; // Active icon color
  appLogo?: React.ReactNode; // App logo
  borderColor?: string; // Border color
  tooltipColor?: string;
  logoutLabel?: string; // Custom logout inscription
}

const ModernSidebar: React.FC<ModernSidebarProps> = ({
  items,
  onItemHover,
  onItemClick,
  isRTL = false,
  bgColor = '#0a070e', // Default background color
  iconColor = '#888', // Default icon color
  hoverColor = '#eee', // Hovered icon color
  appLogo, // App logo passed as prop
  borderColor = '#1c1c24', // Default border color
  tooltipColor = bgColor,
  logoutLabel = 'Log out', // Default logout inscription
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className={\`flex h-screen border-e\`} style={{ borderColor, backgroundColor: bgColor, transform: isRTL ? 'scaleX(-1)' : 'none' }}>
      <div className={\`flex h-screen w-16 flex-col justify-between \${isRTL ? 'flex-row-reverse' : ''}\`} style={{ backgroundColor: bgColor }}>
        <div>
          <div className="inline-flex size-16 items-center justify-center" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}>
            {appLogo ? (
              React.cloneElement(appLogo as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
                className: "grid size-10 place-content-center rounded-lg"
              })
            ) : (
              <span className="grid size-10 place-content-center rounded-lg bg-gray-800 text-xs text-gray-200">Logo</span>
            )}
          </div>
          <div className="border-t" style={{ borderColor }}>
            <div className="px-2">
              <div className="py-6">
                {/* Sidebar Items */}
                {items.map((item, index) => (
                  <a
                    key={index}
                    className={\`group relative flex justify-center rounded px-2 py-1.5 }\`}
                    style={{
                      color: hoveredIndex === index ? hoverColor : iconColor,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      onItemHover(index);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      onItemClick(index);
                    }}
                  >
                    {React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
                      style: { color: hoveredIndex === index ? hoverColor : iconColor }
                    })}
                    <span 
                      className={\`invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-medium text-white group-hover:visible\`} 
                      style={{ backgroundColor: tooltipColor, whiteSpace: 'nowrap' }}
                    >
                        <div style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}>
                      {item.label}
                      </div>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t p-2" style={{ borderColor }}>
          {/* Logout Button */}
          <a 
            className={\`group relative flex w-full justify-center rounded-lg px-2 py-1.5\`}
            style={{
              color: hoveredIndex === -1 ? hoverColor : iconColor,
              transition: 'color 0.3s',
            }}
            onMouseEnter={() => {
                setHoveredIndex(-1);
                onItemHover(-1);
              }}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
                onItemClick(-1);
              }}
          >
            <IconLogout size={24} />
            <span 
              className={\`invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-medium text-white group-hover:visible\`} 
              style={{ backgroundColor: tooltipColor, whiteSpace: 'nowrap' }}
            >
                <div style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}>
                    {logoutLabel}
                </div>
            </span>
          </a>
        </div>
      </div>
      {/* Main content area (optional) */}
      <div className={\`flex h-screen flex-1 flex-col justify-between border-e\`} style={{ borderColor, backgroundColor: bgColor }}>
        {/* Content can go here */}
      </div>
    </div>
  );
};

export default ModernSidebar;
`
  },
],
  dependencies: 'npm install @tabler/icons-react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://www.hyperui.dev/components/application-ui/side-menu#component-3" target="_blank" rel="noopener noreferrer" className="link">Side Menu Components → Icon, links with tooltips and logout action</a> by <a href="https://www.hyperui.dev" target="_blank" rel="noopener noreferrer" className="link">HyperUI</a>
    </span>
  ),
}

export { metadata }