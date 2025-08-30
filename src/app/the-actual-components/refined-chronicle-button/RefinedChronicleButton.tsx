'use client';

import React, { ReactNode } from 'react';

export interface RefinedChronicleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  borderWidth?: string | number;
  borderVisible?: boolean;
  hoverBorderVisible?: boolean;
  borderRadius?: string | number;
  fontSize?: string | number;
  fontWeight?: number | string;
  buttonHeight?: string | number;
  padding?: string;
  iconSize?: number;
  iconStrokeWidth?: number;
  iconTextGap?: string | number;
  isRTL?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function separateContent(children: ReactNode): ReactNode[] {
  // Return elements exactly as passed, preserving order and type
  if (typeof children === 'string' || typeof children === 'number') {
    return [children];
  }
  if (Array.isArray(children)) {
    return children;
  }
  if (React.isValidElement(children)) {
    return [children];
  }
  return [children];
}

const RefinedChronicleButton = React.forwardRef<
  HTMLButtonElement,
  RefinedChronicleButtonProps
>(
  (
    {
      children,
      variant = 'default',
      size = 'default',
      backgroundColor = '#fafafa',
      hoverBackgroundColor = '#00a7fa',
      textColor = '#0a0a0a',
      hoverTextColor = '#fff',
      borderColor = '#cccccc',
      hoverBorderColor = '#999999',
      borderWidth = 1,
      borderVisible = false,
      hoverBorderVisible = false,
      borderRadius = 8,
      fontSize = '1rem',
      fontWeight = 500,
      buttonHeight = '2.5rem',
      padding = '0.75rem 1.5rem',
      iconSize = 18,
      iconStrokeWidth = 2,
      iconTextGap = '0.5rem',
      isRTL = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    // Separate children preserving exact original order and types, no icon vs text prioritization
    const contentChildren = separateContent(children);

    const buttonClasses = `RefinedchronicleButton variant-${variant} ${
      size !== 'default' ? `size-${size}` : ''
    } ${className ?? ''}`;

    const gapValue =
      typeof iconTextGap === 'number' ? `${iconTextGap}px` : iconTextGap;
    const showBorder = borderVisible || variant === 'outline';
    const showHoverBorder = hoverBorderVisible || variant === 'outline';
    const resolvedBorder = showBorder
      ? `${typeof borderWidth === 'number' ? borderWidth + 'px' : borderWidth} solid ${
          borderColor
        }`
      : '0px solid transparent';
    const resolvedHoverBorderColor = showHoverBorder ? hoverBorderColor : 'transparent';

    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: gapValue,
      lineHeight: 1,
      cursor: 'pointer',
      borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      backgroundColor,
      color: textColor,
      border: resolvedBorder,
      fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
      fontWeight,
      height: typeof buttonHeight === 'number' ? `${buttonHeight}px` : buttonHeight,
      padding,
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out',
      direction: isRTL ? 'rtl' : 'ltr',
      userSelect: 'none',
      overflow: 'hidden',
      position: 'relative',
    };

    const hoverStyle: React.CSSProperties = {
      backgroundColor: hoverBackgroundColor || backgroundColor,
      color: hoverTextColor || textColor,
      borderColor: resolvedHoverBorderColor,
    };

    const emStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: gapValue,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      willChange: 'transform, opacity',
      transition:
        'color 0.3s ease-in-out, transform 0.55s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.35s linear 0.2s',
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      Object.assign(e.currentTarget.style, hoverStyle);
    };
    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      Object.assign(e.currentTarget.style, baseStyle);
    };

    return (
      <>
        <button
          {...props}
          ref={ref}
          className={buttonClasses}
          type="button"
          style={baseStyle}
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {variant === 'default' ? (
            <span className="flip-wrapper">
              <span>
                <em style={emStyle}>
                  {contentChildren.map((child, i) =>
                    React.isValidElement(child)
                      ? React.cloneElement(child, {
                          key: i,
                          size: iconSize,
                          strokeWidth: iconStrokeWidth,
                          style: { display: 'inline-block' },
                        })
                      : child
                  )}
                </em>
              </span>
              <span>
                <em style={emStyle}>
                  {contentChildren.map((child, i) =>
                    React.isValidElement(child)
                      ? React.cloneElement(child, {
                          key: i,
                          size: iconSize,
                          strokeWidth: iconStrokeWidth,
                          style: { display: 'inline-block' },
                        })
                      : child
                  )}
                </em>
              </span>
            </span>
          ) : (
            <span style={emStyle}>
              {contentChildren.map((child, i) =>
                React.isValidElement(child)
                  ? React.cloneElement(child, {
                      key: i,
                      size: iconSize,
                      strokeWidth: iconStrokeWidth,
                      style: { display: 'inline-block' },
                    })
                  : child
              )}
            </span>
          )}
        </button>

        {/* 🔥 Inline persistent CSS for flip animation */}
        <style jsx>{`
          .RefinedchronicleButton {
            border-radius: var(--radius, 8px);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.3s ease-in-out,
              color 0.3s ease-in-out,
              border-color 0.3s ease-in-out;
            position: relative;
            height: 2.5rem;
            gap: 0.5rem;
            overflow: hidden;
          }
          .RefinedchronicleButton.variant-default {
            background: transparent;
            border-color: transparent;
          }
          .RefinedchronicleButton.variant-outline {
            background: transparent;
          }
          .RefinedchronicleButton.variant-ghost {
            background: transparent;
            border-color: transparent;
          }
          .RefinedchronicleButton.size-lg {
            height: 2.75rem;
            padding-left: 2rem;
            padding-right: 2rem;
            font-size: 1.125rem;
          }
          .RefinedchronicleButton.size-sm {
            height: 2.25rem;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .RefinedchronicleButton .flip-wrapper {
            position: relative;
            display: block;
            perspective: 108px;
          }
          .RefinedchronicleButton .flip-wrapper span {
            display: block;
          }
          .RefinedchronicleButton .flip-wrapper span:nth-of-type(2) {
            position: absolute;
            top: 0;
            left: 0;
          }
          .RefinedchronicleButton .flip-wrapper em {
            font-style: normal;
            display: inline-flex;
            align-items: center;
            gap: var(--icon-text-gap, 0.5rem);
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
            will-change: transform, opacity;
            transition: color 0.3s ease-in-out,
              transform 0.55s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.35s linear 0.2s;
          }
          .RefinedchronicleButton .flip-wrapper span:nth-of-type(1) em {
            transform-origin: top;
            opacity: 1;
            transform: rotateX(0deg);
          }
          .RefinedchronicleButton .flip-wrapper span:nth-of-type(2) em {
            opacity: 0;
            transform: rotateX(-90deg) scaleX(0.9) translate3d(0, 10px, 0);
            transform-origin: bottom;
          }
          .RefinedchronicleButton:hover .flip-wrapper span:nth-of-type(1) em {
            opacity: 0;
            transform: rotateX(90deg) scaleX(0.9) translate3d(0, -10px, 0);
          }
          .RefinedchronicleButton:hover .flip-wrapper span:nth-of-type(2) em {
            opacity: 1;
            transform: rotateX(0deg) scaleX(1) translateZ(0);
            transition: color 0.3s ease-in-out,
              transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.35s linear 0.3s;
          }
        `}</style>
      </>
    );
  }
);

RefinedChronicleButton.displayName = 'RefinedChronicleButton';

export default RefinedChronicleButton;