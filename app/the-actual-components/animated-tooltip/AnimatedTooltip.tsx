'use client'
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
  borderEffectDelay?: number;
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
    const borderGradient = `linear-gradient(${item.tooltipBorderEffectRotation || global.tooltipBorderEffectRotation}, ${(item.tooltipBorderEffectColors || global.tooltipBorderEffectColors).join(', ')})`;
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
      backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), ${borderGradient}`,
      backgroundOrigin: 'padding-box, border-box',
      backgroundClip: 'padding-box, border-box',
      backgroundSize: `100% 100%, 100% ${percent}%`,
      backgroundRepeat: 'no-repeat',
      border: `${thickness} solid transparent`,
      borderRadius,
      width,
      minWidth: width,
      maxWidth: width,
      padding,
      boxSizing: 'border-box',
      position: 'absolute',
      left: '50%',
      transform: `translateX(-50%) rotate(${tooltipTransform.rotate}deg) translateX(${tooltipTransform.translateX}px)`,
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
      style.bottom = `calc(100% + ${Math.abs(offsetY)}px)`;
      style.top = 'auto';
    } else {
      style.top = `calc(100% + ${Math.abs(offsetY)}px)`;
      style.bottom = 'auto';
    }

    return style;
  };

  const computedTooltipBgStyle = (item: TooltipItem) => {
    const bgColor = item.tooltipBgColor || global.tooltipBgColor;
    const dotColor = item.tooltipDotColor || global.tooltipDotColor;
    return {
      backgroundImage: `radial-gradient(${dotColor} 1.5px, transparent 1.5px)`,
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
      padding: `${outlineWidth}px`,
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
