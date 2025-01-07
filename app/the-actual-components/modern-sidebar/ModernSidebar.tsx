"use client";

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
    <div className={`flex h-screen border-e`} style={{ borderColor, backgroundColor: bgColor, transform: isRTL ? 'scaleX(-1)' : 'none' }}>
      <div className={`flex h-screen w-16 flex-col justify-between ${isRTL ? 'flex-row-reverse' : ''}`} style={{ backgroundColor: bgColor }}>
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
                    className={`group relative flex justify-center rounded px-2 py-1.5 }`}
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
                      className={`invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-medium text-white group-hover:visible`} 
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
            className={`group relative flex w-full justify-center rounded-lg px-2 py-1.5`}
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
              className={`invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-medium text-white group-hover:visible`} 
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
      <div className={`flex h-screen flex-1 flex-col justify-between border-e`} style={{ borderColor, backgroundColor: bgColor }}>
        {/* Content can go here */}
      </div>
    </div>
  );
};

export default ModernSidebar;