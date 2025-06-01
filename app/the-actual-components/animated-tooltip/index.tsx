'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "AnimatedTestimonials.tsx" file
import AnimatedTooltip from '@/app/the-actual-components/animated-tooltip/AnimatedTooltip'

<div
  style={{
    minHeight: '300px',
    padding: '40px',
    background: '#050505',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: 'translateY(24px)' }}>
    <AnimatedTooltip
      items={[
        {
          id: "Next.js",
          name: 'Next.js',
          image: 'https://icon.icepanel.io/Technology/svg/Next.js.svg',
          appearanceEffect: 'from-top-left',
          tooltipOffsetY: 2,
          tooltipBorderEffectColors: ['#33303b 0%', '#33303b 100%'],
          nameColor: '#41b883',
          imageRounding: 40,
          imageOutlineColor: "#fff",
          tooltipWidth: "auto"
        },
        {
          id: "TypeScript",
          name: 'TypeScript',
          designation: '24px higher than Next.js tooltip',
          image: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg',
          appearanceEffect: 'from-top',
          tooltipOffsetY: 26,
          tooltipBorderEffectColors: ['#4776cb 0', '#a19fe5 40%', 'transparent 90%'],
          nameFontSize: '1.3rem',
          imageOutlineColor: "#fff",
          nameColor: '#fff',
          designationColor: '#008ceb',
          imageRounding: 8,
          tooltipRounding: 0,
        },
        {
          id: "Tailwind CSS",
          name: 'Tailwind CSS',
          designation: "That one doesn't tilt",
          image: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
          appearanceEffect: 'from-top-right',
          tooltipOffsetY: 2,
          tooltipBorderEffectColors: ['#0097fd 0', '#0097fd 100%'],
          imageRounding: 0,
          tintTilt: false,
          tooltipRounding: 50,
          designationFontSize: "1.125rem",
          tooltipColor: "#eee",
          tooltipDotColor: "rgba(21, 114, 182, 0.84)",
          nameColor: "#111014",
          designationColor: "#3e3a49",
          imageOutlineColor: "#333",
        },
      ]}
      tooltipColor="#060507"
      tooltipBorderEffectRotation="2.94rad"
      tooltipBorderEffectThickness="1px"
      tooltipBorderEffectPercentage={100}
      tooltipRounding={8}
      tooltipWidth="264px"
      tooltipPadding="0.625rem 1rem"
      appearanceEffect="from-top"
      tooltipPosition="top"
      nameFontSize="1.2rem"
      designationFontSize="0.875rem"
      nameColor="#ffeaa7"
      designationColor="#fab1a0"
      imageOutlineColor="#fff"
      imageOutlineWidth="1px"
      tooltipBgColor="rgba(71, 118, 203, 0.05)"
      tooltipDotColor="rgba(98, 92, 115, 0.73)"
      tintTilt
      avatarGap="24px"
      uniqueId="main-demo"
    />
  </div>
</div>

// Note: The AnimatedTooltip component is a React/Next.js port of a Vue animated tooltip.
// It displays a row of avatars with animated tooltips on hover.
//
// Props:
// - items: Array<{
//     id: string;                // Unique identifier for the item
//     name: string;              // Main label/name
//     designation?: string;      // Optional subtitle/description
//     image: string;             // Avatar image URL
//     tooltipColor?: string;     // Tooltip background color
//     tooltipBorderEffectColors?: string[];      // Gradient colors for tooltip border
//     tooltipBorderEffectRotation?: string;      // Rotation for border gradient (e.g., '2.5rad')
//     tooltipBorderEffectThickness?: string;     // Border thickness (e.g., '2px')
//     tooltipBorderEffectPercentage?: number;    // Percentage of border effect (0-100)
//     tooltipRounding?: number;                  // Tooltip border radius in px
//     tooltipWidth?: string;                     // Tooltip width (e.g., '220px')
//     tooltipPadding?: string;                   // Tooltip padding (e.g., '1.2rem 1.5rem')
//     appearanceEffect?: string;                 // Tooltip animation effect ('from-top-left', 'from-bottom', etc.)
//     tooltipPosition?: 'top' | 'bottom';        // Tooltip position relative to avatar
//     nameFontSize?: string;                     // Name font size
//     designationFontSize?: string;              // Designation font size
//     nameColor?: string;                        // Name color
//     designationColor?: string;                 // Designation color
//     imageOutlineColor?: string;                // Avatar outline color
//     imageOutlineWidth?: string;                // Avatar outline width
//     imageRounding?: number;                    // Avatar border radius in px
//     imageOutlineColorOverwrite?: string;       // Override for avatar outline color
//     tooltipBgColor?: string;                   // Tooltip background color (dotted)
//     tooltipDotColor?: string;                  // Dot color for tooltip background
//     tintTilt?: boolean;                        // Whether tooltip tilts on mouse move
//     tooltipOffsetY?: number;                   // Vertical offset for tooltip in px
//     borderEffectDelay?: number;                // Delay before showing border effect (ms)
//   }> (required)
// - tooltipColor?: string                   // Default tooltip background color
// - tooltipBorderEffectColors?: string[]     // Default border gradient colors
// - tooltipBorderEffectRotation?: string     // Default border gradient rotation
// - tooltipBorderEffectThickness?: string    // Default border thickness
// - tooltipBorderEffectPercentage?: number   // Default border effect percentage
// - tooltipRounding?: number                // Default border radius
// - tooltipWidth?: string                   // Default tooltip width
// - tooltipPadding?: string                 // Default tooltip padding
// - appearanceEffect?: string               // Default animation effect
// - tooltipPosition?: 'top' | 'bottom'      // Default tooltip position
// - nameFontSize?: string                   // Default name font size
// - designationFontSize?: string            // Default designation font size
// - nameColor?: string                      // Default name color
// - designationColor?: string               // Default designation color
// - imageOutlineColor?: string              // Default avatar outline color
// - imageOutlineWidth?: string              // Default avatar outline width
// - imageRounding?: number                  // Default avatar border radius
// - imageOutlineColorOverwrite?: string     // Default override for avatar outline color
// - tooltipBgColor?: string                 // Default tooltip background color (dotted)
// - tooltipDotColor?: string                // Default dot color for tooltip background
// - tintTilt?: boolean                      // Default tilt effect on tooltip
// - borderEffectDelay?: number              // Default delay before showing border effect (ms)
// - tooltipOffsetY?: number                 // Default vertical offset for tooltips
// - avatarGap?: string                      // Gap between avatars (e.g., '32px')
// - uniqueId: string                        // Unique string ID for this component instance (required)
// - onTooltipClick?: (payload: { uniqueId: string; item: TooltipItem }) => void
// - onAvatarHover?: (payload: { uniqueId: string; id: string }) => void
// - onAvatarUnhover?: (payload: { uniqueId: string; id: string }) => void
`,
code: [
  {
    filename: 'AnimatedTooltip.tsx',
    content: `'use client'
import React, { useState, useRef, useEffect } from 'react'

type TooltipItem = {
  id: string;
  name: string;
  designation?: string;
  image: string;
  tooltipColor?: string;
  tooltipBorderEffectColors?: string[];
  tooltipBorderEffectRotation?: string;
  tooltipBorderEffectThickness?: string;
  tooltipBorderEffectPercentage?: number;
  tooltipRounding?: number;
  tooltipWidth?: string;
  tooltipPadding?: string;
  appearanceEffect?: string;
  tooltipPosition?: 'top' | 'bottom';
  nameFontSize?: string;
  designationFontSize?: string;
  nameColor?: string;
  designationColor?: string;
  imageOutlineColor?: string;
  imageOutlineWidth?: string;
  imageRounding?: number;
  imageOutlineColorOverwrite?: string;
  tooltipBgColor?: string;
  tooltipDotColor?: string;
  tintTilt?: boolean;
  tooltipOffsetY?: number;
  borderEffectDelay?: number; // <-- Added
};

type AnimatedTooltipProps = {
  items: TooltipItem[];
  tooltipColor?: string;
  tooltipBorderEffectColors?: string[];
  tooltipBorderEffectRotation?: string;
  tooltipBorderEffectThickness?: string;
  tooltipBorderEffectPercentage?: number;
  tooltipRounding?: number;
  tooltipWidth?: string;
  tooltipPadding?: string;
  appearanceEffect?: string;
  tooltipPosition?: 'top' | 'bottom';
  nameFontSize?: string;
  designationFontSize?: string;
  nameColor?: string;
  designationColor?: string;
  imageOutlineColor?: string;
  imageOutlineWidth?: string;
  imageRounding?: number;
  imageOutlineColorOverwrite?: string;
  tooltipBgColor?: string;
  tooltipDotColor?: string;
  tintTilt?: boolean;
  borderEffectDelay?: number;
  tooltipOffsetY?: number;
  avatarGap?: string;
  uniqueId: string;
  onTooltipClick?: (payload: { uniqueId: string; item: TooltipItem }) => void;
  onAvatarHover?: (payload: { uniqueId: string; id: string }) => void;
  onAvatarUnhover?: (payload: { uniqueId: string; id: string }) => void;
};

export default function AnimatedTooltip({
  items,
  tooltipColor = '#23272f',
  tooltipBorderEffectColors = ['#888 0', '#444 20%', 'transparent 80%'],
  tooltipBorderEffectRotation = '2.5rad',
  tooltipBorderEffectThickness = '2px',
  tooltipBorderEffectPercentage = 100,
  tooltipRounding = 12,
  tooltipWidth = '220px',
  tooltipPadding = '1.2rem 1.5rem',
  appearanceEffect = 'from-bottom-right',
  tooltipPosition = 'bottom',
  nameFontSize = '1.1rem',
  designationFontSize = '0.95rem',
  nameColor = '#fff',
  designationColor = '#fff',
  imageOutlineColor = '#0984e3',
  imageOutlineWidth = '2px',
  imageRounding = 20,
  imageOutlineColorOverwrite,
  tooltipBgColor = 'rgba(255,255,255,0.08)',
  tooltipDotColor = 'rgba(255,255,255,0.15)',
  tintTilt = true,
  borderEffectDelay = 1000,
  tooltipOffsetY = 16,
  avatarGap = '32px',
  uniqueId,
  onTooltipClick,
  onAvatarHover,
  onAvatarUnhover,
}: AnimatedTooltipProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [bgAnimated, setBgAnimated] = useState(false);
  const [borderVisible, setBorderVisible] = useState(false);
  const [tooltipTransform, setTooltipTransform] = useState({ rotate: 0, translateX: 0 });
  const borderTimeoutRef = useRef<NodeJS.Timeout>();

  const global = {
    tooltipColor,
    tooltipBorderEffectColors,
    tooltipBorderEffectRotation,
    tooltipBorderEffectThickness,
    tooltipBorderEffectPercentage,
    tooltipRounding,
    tooltipWidth,
    tooltipPadding,
    appearanceEffect,
    tooltipPosition,
    nameFontSize,
    designationFontSize,
    nameColor,
    designationColor,
    imageOutlineColor,
    imageOutlineWidth,
    imageRounding,
    imageOutlineColorOverwrite,
    tooltipBgColor,
    tooltipDotColor,
    tintTilt,
    tooltipOffsetY,
    avatarGap,
    borderEffectDelay,
  };

  const showTooltip = (id: string) => {
    setHoveredIndex(id);
    setBgAnimated(false);
    setBorderVisible(false);
    setTimeout(() => setBgAnimated(true), 350);
    if (borderTimeoutRef.current) clearTimeout(borderTimeoutRef.current);
    borderTimeoutRef.current = setTimeout(() => setBorderVisible(true), getItem('borderEffectDelay', id));
  };

  const hideTooltip = () => {
    setHoveredIndex(null);
    setBgAnimated(false);
    setBorderVisible(false);
    resetTransform();
    if (borderTimeoutRef.current) clearTimeout(borderTimeoutRef.current);
  };

  const getItem = (key: keyof TooltipItem, id: string) => {
    const item = items.find((i) => i.id === id);
    return (item && item[key]) ?? (global as any)[key];
  };

  const computedTooltipStyle = (item: TooltipItem) => {
    const borderGradient = \`linear-gradient(\${item.tooltipBorderEffectRotation || global.tooltipBorderEffectRotation}, \${(item.tooltipBorderEffectColors || global.tooltipBorderEffectColors).join(', ')})\`;
    const bgColor = item.tooltipColor || global.tooltipColor;
    const width = item.tooltipWidth || global.tooltipWidth;
    const padding = item.tooltipPadding || global.tooltipPadding;
    const borderRadius = (item.tooltipRounding ?? global.tooltipRounding) + 'px';
    const thickness = item.tooltipBorderEffectThickness || global.tooltipBorderEffectThickness;
    const percent = typeof item.tooltipBorderEffectPercentage === 'number' ? item.tooltipBorderEffectPercentage : global.tooltipBorderEffectPercentage;
    const appearance = item.appearanceEffect || global.appearanceEffect;
    const position = item.tooltipPosition || global.tooltipPosition;
    const offsetY = typeof item.tooltipOffsetY === 'number' ? item.tooltipOffsetY : global.tooltipOffsetY;

    const style: React.CSSProperties = {
      backgroundImage: \`linear-gradient(\${bgColor}, \${bgColor}), \${borderGradient}\`,
      backgroundOrigin: 'padding-box, border-box',
      backgroundClip: 'padding-box, border-box',
      backgroundSize: \`100% 100%, 100% \${percent}%\`,
      backgroundRepeat: 'no-repeat',
      border: \`\${thickness} solid transparent\`,
      borderRadius,
      width,
      minWidth: width,
      maxWidth: width,
      padding,
      boxSizing: 'border-box',
      position: 'absolute',
      left: '50%',
      transform: \`translateX(-50%) rotate(\${tooltipTransform.rotate}deg) translateX(\${tooltipTransform.translateX}px)\`,
      zIndex: 10,
      pointerEvents: 'none',
      transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), opacity 0.2s',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      textAlign: 'center',
      fontFamily: 'inherit',
      fontWeight: 500,
      opacity: hoveredIndex === item.id ? 1 : 0,
    };

    if (position === 'top') {
      style.bottom = \`calc(100% + \${Math.abs(offsetY)}px)\`;
      style.top = 'auto';
    } else {
      style.top = \`calc(100% + \${Math.abs(offsetY)}px)\`;
      style.bottom = 'auto';
    }

    return style;
  };

  const computedTooltipBgStyle = (item: TooltipItem) => {
    const bgColor = item.tooltipBgColor || global.tooltipBgColor;
    const dotColor = item.tooltipDotColor || global.tooltipDotColor;
    return {
      backgroundImage: \`radial-gradient(\${dotColor} 1.5px, transparent 1.5px)\`,
      backgroundPosition: '50% 50%',
      backgroundSize: '1.1rem 1.1rem',
      backgroundColor: bgColor,
      opacity: 0.9,
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      pointerEvents: 'none',
      transition: 'filter 0.7s cubic-bezier(.4,2,.6,1)',
      filter: bgAnimated && hoveredIndex === item.id ? 'blur(2.25px) brightness(1.18)' : 'blur(0px) brightness(1)',
      borderRadius: (item.tooltipRounding ?? global.tooltipRounding) + 'px',
    } as React.CSSProperties;
  };

  const computedBorderEffectStyle = (item: TooltipItem) => {
    const borderEffectColors = item.tooltipBorderEffectColors || global.tooltipBorderEffectColors;
    return {
      '--border-effect-color': borderEffectColors?.[1] || 'mediumslateblue',
    } as React.CSSProperties;
  };

  const computedAvatarOutlineStyle = (item: TooltipItem) => {
    const outlineWidth = parseInt(item.imageOutlineWidth || global.imageOutlineWidth, 10) || 2;
    const rounding = (item.imageRounding ?? global.imageRounding) + 'px';
    const containerColor = item.imageOutlineColorOverwrite || global.imageOutlineColorOverwrite || item.imageOutlineColor || global.imageOutlineColor;
    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: containerColor,
      borderRadius: rounding,
      padding: \`\${outlineWidth}px\`,
      boxSizing: 'content-box',
      width: '56px',
      height: '56px',
      marginTop: '16px',
      marginBottom: 0,
    } as React.CSSProperties;
  };

  const computedAvatarStyle = (item: TooltipItem) => {
    const outlineColor = item.imageOutlineColor || global.imageOutlineColor;
    return {
      border: 'none',
      borderRadius: (item.imageRounding ?? global.imageRounding) + 'px',
      width: '56px',
      height: '56px',
      objectFit: 'cover',
      objectPosition: 'top',
      background: outlineColor,
      display: 'block',
    } as React.CSSProperties;
  };

  const transitionName = (item: TooltipItem) => {
    return item.appearanceEffect || global.appearanceEffect || 'from-bottom-right';
  };

  const onMouseMove = (event: React.MouseEvent<HTMLImageElement>, item: TooltipItem) => {
    if (!(item.tintTilt ?? global.tintTilt)) return;
    const img = event.currentTarget;
    const rect = img.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;
    const x = offsetX - halfWidth;
    const clampedX = Math.max(-100, Math.min(100, x));
    setTooltipTransform({
      rotate: (clampedX / 100) * 45,
      translateX: (clampedX / 100) * 50,
    });
  };

  const resetTransform = () => {
    setTooltipTransform({ rotate: 0, translateX: 0 });
  };

  const onAvatarMouseEnter = (id: string) => {
    showTooltip(id);
    onAvatarHover?.({ uniqueId, id });
  };

  const onAvatarMouseLeave = (id: string) => {
    resetTransform();
    hideTooltip();
    onAvatarUnhover?.({ uniqueId, id });
  };

  const handleClick = (item: TooltipItem) => {
    onTooltipClick?.({ uniqueId, item });
  };

  useEffect(() => () => {
    if (borderTimeoutRef.current) clearTimeout(borderTimeoutRef.current);
  }, []);

  return (
    <div className="animated-tooltip" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', gap: global.avatarGap }}>
      {items.map((item) => (
        <div key={item.id} className="tooltip-item" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {hoveredIndex === item.id && (
            <div className="tooltip-content" style={computedTooltipStyle(item)}>
              <div className="tooltip-bg-dots" style={computedTooltipBgStyle(item)} />
              <div
                className="tooltip-name"
                style={{
                  fontSize: item.nameFontSize || global.nameFontSize,
                  color: item.nameColor || global.nameColor,
                  fontWeight: 'bold',
                  marginBottom: '2px',
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                {item.name}
              </div>
              {item.designation && (
                <div
                  className="tooltip-designation"
                  style={{
                    fontSize: item.designationFontSize || global.designationFontSize,
                    color: item.designationColor || global.designationColor,
                    opacity: 0.85,
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  {item.designation}
                </div>
              )}
              {borderVisible && (
                <span style={computedBorderEffectStyle(item)} />
              )}
            </div>
          )}
          <div className="avatar-outline" style={computedAvatarOutlineStyle(item)}>
            <img
              src={item.image}
              alt={item.name}
              className="avatar"
              style={computedAvatarStyle(item)}
              width="56"
              height="56"
              onMouseMove={(e) => onMouseMove(e, item)}
              onClick={() => handleClick(item)}
              onMouseEnter={() => onAvatarMouseEnter(item.id)}
              onMouseLeave={() => onAvatarMouseLeave(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
`
  },
],
  dependencies: 'npm install framer-motion\nnpm install @tabler/icons-react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/animated-tooltip" target="_blank" rel="noopener noreferrer" className="link">Animated Tooltip</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
      <br/>
      <a href="https://codepen.io/Hyperplexed/pen/qBMYVoq" target="_blank" rel="noopener noreferrer" className="link">Accent Shard (On Hover)</a> by <a href="https://codepen.io/Hyperplexed" target="_blank" rel="noopener noreferrer" className="link">Hyperplexed</a>
      <br/>
      <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="link">Vercel app border hover effect</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
    </span>
  ),
}

export { metadata }