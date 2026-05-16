'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

export type ShimmerMode = 'line' | 'sweep' | 'vertical';

export interface ShimmerStop {
  color: string;
  spread: number;
  cps?: number;
}

export interface AccordionItemData {
  id: string | number;
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  isRTL?: boolean;
  titleAlign?: 'left' | 'center' | 'right' | 'start' | 'end';
  contentAlign?: 'left' | 'center' | 'right' | 'start' | 'end' | 'justify';
  titleIconColor?: string;
  toggleIconColor?: string;
  titleIconColorHover?: string;
  toggleIconColorHover?: string;
  titleIconSize?: string | number;
  toggleIconSize?: string | number;
  titleFontSize?: string | number;
  titleFontWeight?: string | number;
  contentFontSize?: string | number;
  contentFontWeight?: string | number;
  contentLineBreaks?: 'normal' | 'pre-line' | 'pre-wrap' | 'break-spaces';
  titleAreaBg?: string;
  titleAreaBgHover?: string;
  contentAreaBg?: string;
  titleAreaBorderColor?: string;
  titleAreaBorderWidth?: string | number;
}

export interface ShimmerAccordionProps {
  componentId: string;
  items: AccordionItemData[];
  globalIsRTL?: boolean;
  globalTitleAlign?: 'left' | 'center' | 'right' | 'start' | 'end';
  globalContentAlign?: 'left' | 'center' | 'right' | 'start' | 'end' | 'justify';
  globalTitleFontSize?: string | number;
  globalTitleFontWeight?: string | number;
  globalContentFontSize?: string | number;
  globalContentFontWeight?: string | number;
  globalContentLineBreaks?: 'normal' | 'pre-line' | 'pre-wrap' | 'break-spaces';
  mode?: ShimmerMode;
  cps?: number;
  textAlpha?: number;
  angle?: number;
  offset?: number;
  stops?: ShimmerStop[];
  className?: string;
  allowMultiple?: boolean;
  showIcons?: boolean;
  showToggleIcon?: boolean;
  containerBg?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  separatorColor?: string;
  titleColor?: string;
  titleColorHover?: string;
  contentColor?: string;
  revealColor?: string;
  iconWeight?: number | string;
  toggleIconWeight?: number | string;
  paddingX?: string | number;
  paddingY?: string | number;
  titleIconGap?: string | number;
  toggleIconSize?: string | number;
  animationDelay?: number;
  revealTransitionDelay?: number;
  revealTransitionDuration?: string | number;
  titleIconColor?: string;
  titleIconHoverColor?: string;
  toggleIconColor?: string;
  toggleIconHoverColor?: string;
  inactiveToggleIconOpacity?: number; 
  titleAreaBg?: string;
  titleAreaBgHover?: string;
  contentAreaBg?: string;
  titleAreaBorderColor?: string;
  titleAreaBorderWidth?: string | number;
  titleAreaHoverTransition?: string;
  trackHoverStates?: boolean;
  onItemHoverChange?: (id: string | number, isHovered: boolean, componentId: string) => void;
  onToggle?: (id: string | number, isOpen: boolean, componentId: string) => void;
}

type TimeoutMap = Record<string, ReturnType<typeof setTimeout>>;

export function ShimmerAccordion({
  componentId,
  items,
  globalIsRTL = false,
  globalTitleAlign = 'start',
  globalContentAlign = 'start',
  globalTitleFontSize = '1.125rem',
  globalTitleFontWeight = 600,
  globalContentFontSize = '1rem',
  globalContentFontWeight = 400,
  globalContentLineBreaks = 'pre-wrap',
  mode = 'line',
  cps = 50,
  textAlpha = 0.1,
  angle = 0,
  offset = 0,
  stops = [
    { color: '#00A0D8', spread: 20, cps: 50 },
    { color: '#7C3AED', spread: 35, cps: 50 },
  ],
  className,
  allowMultiple = false,
  showIcons = true,
  showToggleIcon = true,
  containerBg = '#0a0a0a',
  borderWidth = 1,
  borderRadius = '0.5rem',
  separatorColor = 'rgba(255, 255, 255, 0.1)',
  titleColor = 'rgba(255, 255, 255, 0.9)',
  titleColorHover = '#ffffff',
  contentColor = 'rgba(255, 255, 255, 0.78)',
  revealColor = '#ffffff',
  iconWeight = 1.5,
  toggleIconWeight = 1.5,
  paddingX = '1rem',
  paddingY = '1.25rem',
  titleIconGap = '0.75rem',
  toggleIconSize = '1.25rem',
  animationDelay = 0,
  revealTransitionDelay = 0,
  titleIconColor = '#646464',
  titleIconHoverColor = '#9e9e9e',
  toggleIconColor = '#a0a0a0',
  toggleIconHoverColor = '#fafafa',
  inactiveToggleIconOpacity = 60,
  titleAreaBg = 'rgba(255, 255, 255, 0.00)',
  titleAreaBgHover = 'rgba(255, 255, 255, 0.02)',
  contentAreaBg = 'transparent',
  titleAreaBorderColor = 'transparent',
  titleAreaBorderWidth = 0,
  titleAreaHoverTransition = 'background-color 180ms ease',
  trackHoverStates = true,
  onItemHoverChange,
  onToggle,
}: ShimmerAccordionProps) {
  const [openIds, setOpenIds] = useState<(string | number)[]>([]);
  const [resettingIds, setResettingIds] = useState<Set<string | number>>(new Set());
  const [finishedIds, setFinishedIds] = useState<Set<string | number>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const finishTimeouts = useRef<TimeoutMap>({});
  const resetTimeouts = useRef<TimeoutMap>({});

  const px = typeof paddingX === 'number' ? `${paddingX}px` : paddingX;
  const py = typeof paddingY === 'number' ? `${paddingY}px` : paddingY;
  const br = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;
  const bw = typeof borderWidth === 'number' ? `${borderWidth}px` : borderWidth;
  const toggleSize = typeof toggleIconSize === 'number' ? `${toggleIconSize}px` : toggleIconSize;
  const titleGap = typeof titleIconGap === 'number' ? `${titleIconGap}px` : titleIconGap;
  const titleAreaBorderW = typeof titleAreaBorderWidth === 'number' ? `${titleAreaBorderWidth}px` : titleAreaBorderWidth;

  useEffect(() => {
    return () => {
      Object.values(finishTimeouts.current).forEach(clearTimeout);
      Object.values(resetTimeouts.current).forEach(clearTimeout);
    };
  }, []);

  const clearTimersFor = (id: string | number) => {
    const key = String(id);
    if (finishTimeouts.current[key]) {
      clearTimeout(finishTimeouts.current[key]);
      delete finishTimeouts.current[key];
    }
    if (resetTimeouts.current[key]) {
      clearTimeout(resetTimeouts.current[key]);
      delete resetTimeouts.current[key];
    }
  };

  const resolveAlign = (align: NonNullable<AccordionItemData['titleAlign']>, rtl: boolean) => {
    if (align === 'start') return rtl ? 'right' : 'left';
    if (align === 'end') return rtl ? 'left' : 'right';
    return align;
  };

  const resolveContentAlign = (align: NonNullable<AccordionItemData['contentAlign']>, rtl: boolean) => {
    if (align === 'start') return rtl ? 'right' : 'left';
    if (align === 'end') return rtl ? 'left' : 'right';
    return align;
  };

  const setHovered = (id: string | number | null) => {
    if (!trackHoverStates) return;
    setHoveredId(id);
    if (id !== null) onItemHoverChange?.(id, true, componentId);
  };

  const clearHovered = (id: string | number) => {
    if (!trackHoverStates) return;
    setHoveredId((current) => (current === id ? null : current));
    onItemHoverChange?.(id, false, componentId);
  };

  const toggle = (id: string | number) => {
    const isOpening = !openIds.includes(id);

    setOpenIds((prev) => {
      const isClosing = prev.includes(id);
      if (isClosing) {
        setResettingIds((old) => new Set(old).add(id));
        setFinishedIds((old) => {
          const next = new Set(old);
          next.delete(id);
          return next;
        });
        clearTimersFor(id);
        resetTimeouts.current[String(id)] = setTimeout(() => {
          setResettingIds((prevSet) => {
            const next = new Set(prevSet);
            next.delete(id);
            return next;
          });
          delete resetTimeouts.current[String(id)];
        }, 280);
        return prev.filter((i) => i !== id);
      }

      if (!allowMultiple) {
        prev.forEach((otherId) => {
          if (otherId !== id) clearTimersFor(otherId);
        });
      }

      return allowMultiple ? [...prev, id] : [id];
    });

    onToggle?.(id, isOpening, componentId);

    if (isOpening) {
      const item = items.find((i) => i.id === id);
      const charCount = typeof item?.content === 'string' ? item.content.trim().length : 100;
      const shimmerDuration = charCount / cps;
      const totalMs = (animationDelay + shimmerDuration + revealTransitionDelay) * 1000;
      clearTimersFor(id);
      finishTimeouts.current[String(id)] = setTimeout(() => {
        setFinishedIds((prev) => new Set(prev).add(id));
        delete finishTimeouts.current[String(id)];
      }, totalMs);
    }
  };

  const renderContent = (content: string | React.ReactNode) => {
    if (React.isValidElement(content)) return content;
    return (content as string).split(/\r?\n/).map((line, idx, arr) => (
      <React.Fragment key={idx}>
        {line}
        {idx < arr.length - 1 ? <br /> : null}
      </React.Fragment>
    ));
  };

  return (
    <div
      data-component-id={componentId}
      className={cn('shimmer-accordion-root w-full overflow-hidden transition-all duration-300', `root-${componentId}`, className)}
      style={{
        backgroundColor: containerBg,
        borderRadius: br,
        borderStyle: 'solid',
        borderWidth: bw,
        borderColor: separatorColor,
      }}
    >
      <style>{`
        .root-${componentId} {
          --sa-reveal-color: ${revealColor};
          --sa-title-color: ${titleColor};
          --sa-title-color-hover: ${titleColorHover};
          --sa-content-color: ${contentColor};
          --sa-title-font-size: ${typeof globalTitleFontSize === 'number' ? `${globalTitleFontSize}px` : globalTitleFontSize};
          --sa-title-font-weight: ${globalTitleFontWeight};
          --sa-content-font-size: ${typeof globalContentFontSize === 'number' ? `${globalContentFontSize}px` : globalContentFontSize};
          --sa-content-font-weight: ${globalContentFontWeight};
          --sa-content-line-breaks: ${globalContentLineBreaks};
          --sa-toggle-size: ${toggleSize};
          --sa-title-gap: ${titleGap};
          --sa-title-hover-transition: ${titleAreaHoverTransition};
          --sa-title-icon-color: ${titleIconColor};
          --sa-title-icon-hover-color: ${titleIconHoverColor};
          --sa-toggle-icon-color: ${toggleIconColor};
          --sa-toggle-icon-hover-color: ${toggleIconHoverColor};
          --sa-title-area-bg: ${titleAreaBg};
          --sa-title-area-bg-hover: ${titleAreaBgHover};
          --sa-content-area-bg: ${contentAreaBg};
          --sa-title-area-border-color: ${titleAreaBorderColor};
          --sa-title-area-border-width: ${titleAreaBorderW};
        }

        .root-${componentId} .shimmer-item {
          border-bottom: 1px solid ${separatorColor};
        }

        .root-${componentId} .shimmer-item:last-child {
          border-bottom: 0;
        }

        .root-${componentId} .shimmer-button {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          transition: var(--sa-title-hover-transition);
          min-height: calc(${py} + 1lh + ${py});
          background-color: var(--sa-title-area-bg);
          border-bottom: var(--sa-title-area-border-width) solid var(--sa-title-area-border-color);
        }

        .root-${componentId} .shimmer-button:hover {
          background-color: var(--sa-title-area-bg-hover);
        }

        .root-${componentId} .shimmer-title {
          min-width: 0;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          color: var(--sa-title-color);
          line-height: 1.2;
        }

        .root-${componentId} .shimmer-title-inner {
          min-width: 0;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          text-align: inherit;
        }

        .root-${componentId} .shimmer-title-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          color: var(--sa-title-icon-color);
          transition: color 160ms ease, opacity 120ms ease;
        }

        .root-${componentId} .shimmer-toggle-wrap {
          position: absolute;
          top: 50%;
          translate: 0 -50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          color: var(--sa-toggle-icon-color);
          transition: color 160ms ease;
        }

        .root-${componentId} .shimmer-toggle-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 220ms cubic-bezier(0.215, 0.61, 0.355, 1), color 160ms ease;
          opacity: 1;
          color: inherit;
        }

        .root-${componentId} .shimmer-toggle-wrap svg,
        .root-${componentId} .shimmer-title-icon svg {
          display: block;
          opacity: 1;
          fill: none;
        }

        .root-${componentId} .content-transition {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 260ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .root-${componentId} .item-open .content-transition {
          grid-template-rows: 1fr;
        }

        .root-${componentId} .shimmer-content {
          overflow: hidden;
          min-height: 0;
          background-color: var(--sa-content-area-bg);
        }

        .root-${componentId} .shimmer-content-inner {
          translate: 0 1lh;
          opacity: 0.7;
          transition: translate 260ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 260ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .root-${componentId} .item-open .shimmer-content-inner {
          translate: 0 0;
          opacity: 1;
        }

        .root-${componentId} .shimmer-text {
          display: ${mode === 'line' ? 'inline' : 'inline-block'};
          background-position: var(--bg-pos-closed);
          background-size: var(--bg-size);
          background-repeat: var(--bg-repeat);
          background-clip: var(--bg-clip);
          -webkit-background-clip: text;
          color: transparent;
          white-space: var(--sa-content-line-breaks);
          transition: background-position calc(var(--char-count, 100) / var(--cps, 50) * 1s) cubic-bezier(0.215, 0.61, 0.355, 1), opacity 180ms ease;
          transition-delay: var(--anim-delay, 0s), 0s;
        }

        .root-${componentId} .item-open .shimmer-text {
          background-position: var(--bg-pos-open) !important;
        }

        .root-${componentId} .item-closed .shimmer-text,
        .root-${componentId} .item-resetting .shimmer-text {
          transition: none !important;
        }

        .root-${componentId} .item-finished .shimmer-text {
          background-image: var(--reveal-bg);
        }

        .root-${componentId} .shimmer-button:hover .shimmer-title {
          color: var(--sa-title-color-hover);
        }

        .root-${componentId} .shimmer-button:hover .shimmer-title-icon {
          color: var(--sa-title-icon-hover-color);
        }

        .root-${componentId} .shimmer-button:hover .shimmer-toggle-wrap {
          color: var(--sa-toggle-icon-hover-color);
          opacity: 1;
        }
      `}</style>

      <ul className="m-0 list-none p-0">
        {items.map((item) => {
          const isOpen = openIds.includes(item.id);
          const isResetting = resettingIds.has(item.id);
          const isFinished = finishedIds.has(item.id);
          const itemRTL = item.isRTL ?? globalIsRTL;
          const charCount = typeof item.content === 'string' ? item.content.trim().length : 100;
          const titleAlign = resolveAlign(item.titleAlign ?? globalTitleAlign, itemRTL);
          const contentAlign = resolveContentAlign(item.contentAlign ?? globalContentAlign, itemRTL);
          const iconOnLeft = titleAlign === 'right';
          const toggleSideClass = iconOnLeft ? 'left-4' : 'right-4';
          const rotation = iconOnLeft ? (isOpen ? '-135deg' : '0deg') : isOpen ? '225deg' : '0deg';
          const isVertical = mode === 'vertical';
          const dir = isVertical ? '180deg' : mode === 'sweep' ? `${(itemRTL ? -90 : 90) + angle}deg` : itemRTL ? '-90deg' : '90deg';
          const spreadUnit = isVertical ? '1lh' : '1ch';
          const posClosed = isVertical ? '0 200%' : itemRTL ? '-200% 0' : '200% 0';
          const animSize = isVertical ? `100% calc(200% + ${offset} * 1lh)` : `calc(200% + ${offset} * 1ch) 100%`;

          const shimmerLayers = stops.map((stop) => {
            const colorEnd = `calc(100% - ${offset} * ${spreadUnit})`;
            const colorStart = `calc(100% - ${stop.spread + offset} * ${spreadUnit})`;
            return `linear-gradient(${dir}, #0000 0 ${colorStart}, ${stop.color} ${colorStart} ${colorEnd}, #0000 ${colorEnd} 100%)`;
          });

          const midToneEnd = `calc(100% - ${offset} * ${spreadUnit})`;
          const midTone = `linear-gradient(${dir}, ${revealColor} 0 ${midToneEnd}, #0000 ${midToneEnd} 100%)`;
          const alphaLayer = `linear-gradient(color-mix(in hsl, ${revealColor}, transparent ${100 - textAlpha * 100}%) 0 100%)`;
          const bgImage = [...shimmerLayers, midTone, alphaLayer].join(', ');
          const bgPosClosed = [...Array(stops.length + 1).fill(posClosed), '0 0'].join(', ');
          const bgPosOpen = Array(stops.length + 2).fill('0 0').join(', ');
          const bgSize = [...Array(stops.length + 1).fill(animSize), '100% 100%'].join(', ');
          const bgClip = Array(stops.length + 2).fill('text').join(', ');
          const bgRepeat = Array(stops.length + 2).fill('no-repeat').join(', ');

          const itemTitleIconColor = item.titleIconColor ?? titleIconColor;
          const itemTitleIconHoverColor = item.titleIconColorHover ?? titleIconHoverColor;
          const itemToggleIconColor = item.toggleIconColor ?? toggleIconColor;
          const itemToggleIconHoverColor = item.toggleIconColorHover ?? toggleIconHoverColor;
          const itemTitleIconSize = item.titleIconSize ?? '1em';
          const itemToggleIconSize = item.toggleIconSize ?? toggleSize;
          const itemTitleFontSize = item.titleFontSize ?? globalTitleFontSize;
          const itemTitleFontWeight = item.titleFontWeight ?? globalTitleFontWeight;
          const itemContentFontSize = item.contentFontSize ?? globalContentFontSize;
          const itemContentFontWeight = item.contentFontWeight ?? globalContentFontWeight;
          const itemContentBreaks = item.contentLineBreaks ?? globalContentLineBreaks;
          const hovered = trackHoverStates && hoveredId === item.id;
          const hasIcon = Boolean(showIcons && item.icon);

          return (
            <li
              key={item.id}
              className={cn(
                'shimmer-item group w-full list-none transition-all',
                isOpen ? 'item-open' : 'item-closed',
                isResetting && 'item-resetting',
                isFinished && 'item-finished'
              )}
              style={
                {
                  '--char-count': charCount,
                  '--cps': cps,
                  '--anim-delay': `${animationDelay}s`,
                  '--bg-pos-closed': bgPosClosed,
                  '--bg-pos-open': bgPosOpen,
                  '--bg-size': bgSize,
                  '--bg-clip': bgClip,
                  '--bg-repeat': bgRepeat,
                  '--reveal-bg': `linear-gradient(${dir}, ${revealColor} 0 100%)`,
                  '--sa-title-icon-color': hovered ? itemTitleIconHoverColor : itemTitleIconColor,
                  '--sa-title-icon-hover-color': itemTitleIconHoverColor,
                  '--sa-toggle-icon-color': hovered ? itemToggleIconHoverColor : itemToggleIconColor,
                  '--sa-toggle-icon-hover-color': itemToggleIconHoverColor,
                } as React.CSSProperties
              }
            >
              <button
                onClick={() => toggle(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => clearHovered(item.id)}
                className="shimmer-button outline-none"
                dir={itemRTL ? 'rtl' : 'ltr'}
                style={{ padding: `${py} ${px}` }}
              >
                <div
                  className={cn(
                    'shimmer-title flex-1 transition-all duration-300',
                    titleAlign === 'center' ? 'justify-center' : iconOnLeft ? 'pl-10' : 'pr-10',
                    !hasIcon && titleAlign === 'center' ? 'w-full' : 'w-auto'
                  )}
                  style={{
                    textAlign: titleAlign as any,
                    color: titleColor,
                    fontSize: typeof itemTitleFontSize === 'number' ? `${itemTitleFontSize}px` : itemTitleFontSize,
                    fontWeight: itemTitleFontWeight as any,
                    justifyContent:
                      titleAlign === 'center'
                        ? 'center'
                        : titleAlign === 'right'
                          ? itemRTL
                            ? 'flex-start'
                            : 'flex-end'
                          : itemRTL
                            ? 'flex-end'
                            : 'flex-start',
                  }}
                >
                  <div
                    className="shimmer-title-inner"
                    style={{
                      width: hasIcon ? 'auto' : '100%',
                      justifyContent: hasIcon
                        ? 'flex-start'
                        : titleAlign === 'center'
                          ? 'center'
                          : titleAlign === 'right'
                            ? itemRTL
                              ? 'flex-start'
                              : 'flex-end'
                            : itemRTL
                              ? 'flex-end'
                              : 'flex-start',
                      gap: hasIcon ? titleGap : 0,
                    }}
                  >
                    {hasIcon && (
                      <span
                        className="shimmer-title-icon"
                        style={{
                          color: hovered ? itemTitleIconHoverColor : itemTitleIconColor,
                          fontSize: typeof itemTitleIconSize === 'number' ? `${itemTitleIconSize}px` : itemTitleIconSize,
                          strokeWidth: iconWeight as any,
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="shimmer-title-text">{item.title}</span>
                  </div>
                </div>

                {showToggleIcon && (
                  <div
                    className={cn('shimmer-toggle-wrap', toggleSideClass)}
                    style={
                      !isOpen
                        ? { opacity: inactiveToggleIconOpacity / 100 }
                        : { opacity: 1 }
                    }
                  >
                    <div
                      className="shimmer-toggle-icon"
                      style={{
                        transform: `rotate(${rotation})`,
                        color: hovered ? itemToggleIconHoverColor : itemToggleIconColor,
                      }}
                    >
                      <Plus
                        style={{
                          strokeWidth: toggleIconWeight as any,
                          width: itemToggleIconSize,
                          height: itemToggleIconSize,
                          color: hovered ? itemToggleIconHoverColor : itemToggleIconColor,
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                )}
              </button>

              <div
                className="content-transition"
                onTransitionEnd={(e) => {
                  if (e.propertyName === 'grid-template-rows' && !isOpen) {
                    setResettingIds((prevSet) => {
                      const next = new Set(prevSet);
                      next.delete(item.id);
                      return next;
                    });
                  }
                }}
              >
                <div className="shimmer-content">
                  <div className="shimmer-content-inner">
                    <div
                      dir={itemRTL ? 'rtl' : 'ltr'}
                      style={{
                        paddingLeft: px,
                        paddingRight: px,
                        paddingBottom: py,
                        textAlign: contentAlign as any,
                        color: contentColor,
                        fontSize: typeof itemContentFontSize === 'number' ? `${itemContentFontSize}px` : itemContentFontSize,
                        fontWeight: itemContentFontWeight as any,
                        whiteSpace: itemContentBreaks,
                      }}
                    >
                      <p className={cn('shimmer-text leading-relaxed font-body', contentAlign === 'justify' && 'text-justify')} style={{ backgroundImage: bgImage }}>
                        {renderContent(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}