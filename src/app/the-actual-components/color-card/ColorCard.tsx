'use client';

import React, { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';

type ValidationBadgeProps = {
  show?: boolean;
  ratio: number;
  ratioLimit: number;
  trueForeground?: string;
  trueBackground?: string;
  trueBorderColor?: string;
  falseForeground?: string;
  falseBackground?: string;
  falseBorderColor?: string;
  paddingX?: string;
  paddingY?: string;
  gapIconText?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ValidationBadge = ({
  show = true,
  ratio,
  ratioLimit,
  children,
  trueForeground = '#00A7FA',
  trueBackground = '#002030',
  trueBorderColor = '#00334D',
  falseForeground = '#aaa',
  falseBackground = 'transparent',
  falseBorderColor = '#242424',
  paddingX = '8px',
  paddingY = '2px',
  gapIconText = 4,
  style,
}: ValidationBadgeProps) => {
  if (!show) return null;
  const passed = ratio >= ratioLimit;
  const badgeStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: gapIconText,
    borderRadius: 9999,
    padding: `${paddingY} ${paddingX}`,
    fontSize: 12,
    fontWeight: 500,
    userSelect: 'none',
    whiteSpace: 'nowrap',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: passed ? trueBorderColor : falseBorderColor,
    backgroundColor: passed ? trueBackground : falseBackground,
    color: passed ? trueForeground : falseForeground,
    transition: 'all 0.3s ease',
    ...style,
  };

  const iconColor = passed ? trueForeground : falseForeground;

  return (
    <span style={badgeStyles}>
      {passed ? (
        <svg
          width="14"
          height="14"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
      {children}
    </span>
  );
};

type ColorCardProps = {
  id?: string;
  hexColor: string;
  onCopy?: (color: string) => void;
  contrastRatioLabelText?: string;
  isRTL?: boolean;

  textGroupGap?: number;
  squareGroupGap?: number;
  alignTextGroupToTop?: boolean;
  textGroupTranslateY?: string;

  colorAreaHeight?: string;
  colorAreaMarginBottom?: string;

  contrastRatioLabelColor?: string;
  contrastRatioLabelFontSize?: string;
  contrastRatioLabelFontWeight?: number;
  valueColor?: string;
  valueFontSize?: string;
  valueFontWeight?: number;
  bottomGroupMarginTop?: string;

  hexTextColor?: string;
  hexTextFontSize?: string;
  hexTextFontWeight?: number;

  showPercentageTag?: boolean;
  percentageTagValue?: string;
  percentageTagBg?: string;
  percentageTagTextColor?: string;
  percentageTagTextSize?: string;
  percentageTagPaddingX?: string;
  percentageTagPaddingY?: string;
  percentageTagRadius?: number;
  percentageTagOutlineColor?: string;
  percentageTagOutlineWidth?: number;
  percentageTagOffsetX?: string;
  percentageTagOffsetY?: string;

  buttonIdleBg?: string;
  buttonIdleIcon?: string;
  buttonHoverBg?: string;
  buttonHoverIcon?: string;
  buttonIdleOutlineColor?: string;
  buttonIdleOutlineWidth?: number;
  buttonHoverOutlineColor?: string;
  buttonHoverOutlineWidth?: number;
  buttonBorderRadius?: number;
  buttonTransitionDuration?: string;
  buttonSize?: number;
  buttonIconSize?: number;
  copyButtonChangeOnCardHover?: boolean; // NEW optional prop

  cardBg?: string;
  cardBorderColor?: string;
  cardBorderWidth?: number;
  cardBorderRadius?: number;
  cardPaddingX?: string;
  cardPaddingY?: string;

  colorAreaBorderColor?: string;
  colorAreaBorderWidth?: number;
  colorAreaBorderRadius?: number;

  squareBorderColor?: string;
  squareBorderWidth?: number;
  squareBorderRadius?: number;

  letter?: string;
  letterColor?: string;
  letterFontSize?: string;
  letterFontWeight?: number;

  showAABadge?: boolean;
  showAAABadge?: boolean;

  aaBadgeStyle?: React.CSSProperties;
  aaaBadgeStyle?: React.CSSProperties;

  aaBadgeForegroundColor?: string;
  aaBadgeBackgroundColor?: string;
  aaBadgeBorderColor?: string;
  aaBadgeFalseForegroundColor?: string;
  aaBadgeFalseBackgroundColor?: string;
  aaBadgeFalseBorderColor?: string;
  aaBadgePaddingX?: string;
  aaBadgePaddingY?: string;
  aaBadgeGapIconText?: number;

  aaaBadgeForegroundColor?: string;
  aaaBadgeBackgroundColor?: string;
  aaaBadgeBorderColor?: string;
  aaaBadgeFalseForegroundColor?: string;
  aaaBadgeFalseBackgroundColor?: string;
  aaaBadgeFalseBorderColor?: string;
  aaaBadgePaddingX?: string;
  aaaBadgePaddingY?: string;
  aaaBadgeGapIconText?: number;

  badgesHorizontalGap?: number;
  badgesPositionBottom?: string;
  badgesPositionRight?: string;
  badgesPositionLeft?: string;
};

export default function ColorCard({
  id,
  hexColor,
  onCopy,
  contrastRatioLabelText = 'Contrast Ratio',
  isRTL = false,

  textGroupGap = 8,
  squareGroupGap = 12,
  alignTextGroupToTop = false,
  textGroupTranslateY = '0px',

  colorAreaHeight = '6rem',
  colorAreaMarginBottom = '12px',

  contrastRatioLabelColor = '#aaa',
  contrastRatioLabelFontSize = '0.875rem',
  contrastRatioLabelFontWeight = 500,
  valueColor = '#fafafa',
  valueFontSize = '0.875rem',
  valueFontWeight = 500,
  bottomGroupMarginTop = '12px',

  hexTextColor = '#fafafa',
  hexTextFontSize = '0.875rem',
  hexTextFontWeight = 500,

  showPercentageTag = false,
  percentageTagValue = '',
  percentageTagBg = 'rgba(0,0,0,0.4)',
  percentageTagTextColor = '#fff',
  percentageTagTextSize = '0.75rem',
  percentageTagPaddingX = '7px',
  percentageTagPaddingY = '4px',
  percentageTagRadius = 8,
  percentageTagOutlineColor = 'rgba(255,255,255,0.175)',
  percentageTagOutlineWidth = 0,
  percentageTagOffsetX = '0.5rem',
  percentageTagOffsetY = '0.5rem',

  buttonIdleBg = '#fafafa',
  buttonIdleIcon = '#000',
  buttonHoverBg = '#00a7fa',
  buttonHoverIcon = '#fafafa',
  buttonIdleOutlineColor = '#242424',
  buttonIdleOutlineWidth = 0,
  buttonHoverOutlineColor = '#00a7fa',
  buttonHoverOutlineWidth = 0,
  buttonBorderRadius = 8,
  buttonTransitionDuration = '0.3s',
  buttonSize = 28,
  buttonIconSize = 16,
  copyButtonChangeOnCardHover = false,

  cardBg = '#000',
  cardBorderColor = '#242424',
  cardBorderWidth = 1,
  cardBorderRadius = 8,
  cardPaddingX = '12px',
  cardPaddingY = '12px',

  colorAreaBorderColor = '#242424',
  colorAreaBorderWidth = 1,
  colorAreaBorderRadius = 8,

  squareBorderColor = '#242424',
  squareBorderWidth = 1,
  squareBorderRadius = 8,

  letter = 'A',
  letterColor = '#fff',
  letterFontSize = '1rem',
  letterFontWeight = 500,

  showAABadge = true,
  showAAABadge = true,

  aaBadgeStyle,
  aaaBadgeStyle,

  aaBadgeForegroundColor = '#00A7FA',
  aaBadgeBackgroundColor = '#002030',
  aaBadgeBorderColor = '#00334D',
  aaBadgeFalseForegroundColor = '#aaa',
  aaBadgeFalseBackgroundColor = 'transparent',
  aaBadgeFalseBorderColor = '#242424',
  aaBadgePaddingX = '8px',
  aaBadgePaddingY = '2px',
  aaBadgeGapIconText = 4,

  aaaBadgeForegroundColor = '#00A7FA',
  aaaBadgeBackgroundColor = '#002030',
  aaaBadgeBorderColor = '#00334D',
  aaaBadgeFalseForegroundColor = '#aaa',
  aaaBadgeFalseBackgroundColor = 'transparent',
  aaaBadgeFalseBorderColor = '#242424',
  aaaBadgePaddingX = '8px',
  aaaBadgePaddingY = '2px',
  aaaBadgeGapIconText = 4,

  badgesHorizontalGap = 6,
  badgesPositionBottom = '12px',
  badgesPositionRight = '12px',
  badgesPositionLeft = '12px',
}: ColorCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copyHovered, setCopyHovered] = useState(false);
  const [contrast, setContrast] = useState<number | null>(null);

  useEffect(() => {
    try {
      const hexToRgb = (hex: string) => ({
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
      });
      const { r, g, b } = hexToRgb(hexColor);
      const toLuminance = (c: number) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      };
      const L = 0.2126 * toLuminance(r) + 0.7152 * toLuminance(g) + 0.0722 * toLuminance(b);
      const ratio = (L + 0.05) / 0.05;
      setContrast(Number(ratio.toFixed(2)));
    } catch {
      setContrast(null);
    }
  }, [hexColor]);

  const handleCopy = () => onCopy?.(hexColor.toUpperCase());

  // Determine hover state for button style (either its own hover or card hover if enabled)
  const effectiveHover = copyButtonChangeOnCardHover ? isHovered || copyHovered : copyHovered;

  const outlineWidth = effectiveHover ? buttonHoverOutlineWidth : buttonIdleOutlineWidth;
  const outlineColor = effectiveHover ? buttonHoverOutlineColor : buttonIdleOutlineColor;
  const buttonBg = effectiveHover ? buttonHoverBg : buttonIdleBg;
  const buttonIconColor = effectiveHover ? buttonHoverIcon : buttonIdleIcon;
  const computedButtonSize = buttonSize + outlineWidth * 2;

  const badgeContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: badgesPositionBottom,
    display: 'flex',
    flexDirection: 'row',
    gap: badgesHorizontalGap,
    zIndex: 10,
    userSelect: 'none',
    [isRTL ? 'left' : 'right']: isRTL ? badgesPositionLeft : badgesPositionRight,
  };

  return (
    <div
      id={id || `color-card-${hexColor.replace('#', '')}`}
      style={{
        background: cardBg,
        borderColor: cardBorderColor,
        borderWidth: cardBorderWidth,
        borderRadius: cardBorderRadius,
        padding: `${cardPaddingY} ${cardPaddingX}`,
        transition: `all ${buttonTransitionDuration} ease`,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        color: valueColor,
        userSelect: 'none',
        direction: isRTL ? 'rtl' : 'ltr',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={badgeContainerStyle}>
        <ValidationBadge
          show={showAABadge}
          ratio={contrast ?? 0}
          ratioLimit={4.5}
          trueForeground={aaBadgeForegroundColor}
          trueBackground={aaBadgeBackgroundColor}
          trueBorderColor={aaBadgeBorderColor}
          falseForeground={aaBadgeFalseForegroundColor}
          falseBackground={aaBadgeFalseBackgroundColor}
          falseBorderColor={aaBadgeFalseBorderColor}
          paddingX={aaBadgePaddingX}
          paddingY={aaBadgePaddingY}
          gapIconText={aaBadgeGapIconText}
          style={aaBadgeStyle}
        >
          AA
        </ValidationBadge>
        <ValidationBadge
          show={showAAABadge}
          ratio={contrast ?? 0}
          ratioLimit={7}
          trueForeground={aaaBadgeForegroundColor}
          trueBackground={aaaBadgeBackgroundColor}
          trueBorderColor={aaaBadgeBorderColor}
          falseForeground={aaaBadgeFalseForegroundColor}
          falseBackground={aaaBadgeFalseBackgroundColor}
          falseBorderColor={aaaBadgeFalseBorderColor}
          paddingX={aaaBadgePaddingX}
          paddingY={aaaBadgePaddingY}
          gapIconText={aaaBadgeGapIconText}
          style={aaaBadgeStyle}
        >
          AAA
        </ValidationBadge>
      </div>

      <div
        style={{
          height: colorAreaHeight,
          backgroundColor: hexColor,
          borderColor: colorAreaBorderColor,
          borderWidth: colorAreaBorderWidth,
          borderRadius: colorAreaBorderRadius,
          borderStyle: 'solid',
          marginBottom: colorAreaMarginBottom,
          position: 'relative',
          transition: `all ${buttonTransitionDuration} ease`,
        }}
      >
        {showPercentageTag && (
          <div
            style={{
              position: 'absolute',
              top: percentageTagOffsetY,
              [isRTL ? 'right' : 'left']: percentageTagOffsetX,
              background: percentageTagBg,
              color: percentageTagTextColor,
              fontSize: percentageTagTextSize,
              padding: `${percentageTagPaddingY} ${percentageTagPaddingX}`,
              borderRadius: percentageTagRadius,
              border: `${percentageTagOutlineWidth}px solid ${percentageTagOutlineColor}`,
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              transition: `all ${buttonTransitionDuration} ease`,
              zIndex: 1,
            }}
          >
            {percentageTagValue}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          userSelect: 'text',
          direction: 'ltr',
        }}
      >
        <code
          style={{
            fontSize: hexTextFontSize,
            fontWeight: hexTextFontWeight,
            color: hexTextColor,
            fontFamily: 'monospace, monospace',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            userSelect: 'text',
            transition: `all ${buttonTransitionDuration} ease`,
          }}
          title={hexColor.toUpperCase()}
        >
          {hexColor.toUpperCase()}
        </code>

        <button
          onClick={handleCopy}
          aria-label="Copy hex color"
          onMouseEnter={() => setCopyHovered(true)}
          onMouseLeave={() => setCopyHovered(false)}
          style={{
            width: computedButtonSize,
            height: computedButtonSize,
            background: buttonBg,
            color: buttonIconColor,
            borderRadius: buttonBorderRadius,
            border: 'none',
            outline: `${outlineWidth}px solid ${outlineColor}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: `all ${buttonTransitionDuration} ease`,
          }}
          type="button"
        >
          <Copy size={buttonIconSize} />
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: alignTextGroupToTop ? 'flex-start' : 'center',
          gap: squareGroupGap,
          marginTop: bottomGroupMarginTop,
          transition: `all ${buttonTransitionDuration} ease`,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: hexColor,
            borderColor: squareBorderColor,
            borderWidth: squareBorderWidth,
            borderRadius: squareBorderRadius,
            borderStyle: 'solid',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: letterColor,
              fontSize: letterFontSize,
              fontWeight: letterFontWeight,
              lineHeight: 1,
              userSelect: 'none',
              transition: `all ${buttonTransitionDuration} ease`,
            }}
          >
            {letter}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: textGroupGap,
            transform: alignTextGroupToTop ? `translateY(${textGroupTranslateY})` : 'none',
            flexGrow: 1,
            userSelect: 'text',
            transition: `all ${buttonTransitionDuration} ease`,
          }}
        >
          <span
            style={{
              color: contrastRatioLabelColor,
              fontSize: contrastRatioLabelFontSize,
              fontWeight: contrastRatioLabelFontWeight,
              lineHeight: 1,
              userSelect: 'text',
              transition: `all ${buttonTransitionDuration} ease`,
            }}
          >
            {contrastRatioLabelText}
          </span>

          <span
            style={{
              color: valueColor,
              fontSize: valueFontSize,
              fontWeight: valueFontWeight,
              lineHeight: 1,
              userSelect: 'text',
              transition: `all ${buttonTransitionDuration} ease`,
            }}
          >
            {contrast !== null ? contrast.toFixed(2) : '--'}
          </span>
        </div>
      </div>
    </div>
  );
}
