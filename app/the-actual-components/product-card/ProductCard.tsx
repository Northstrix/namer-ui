"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: string;
  imageSrc: string;
  altText: string;
  price: string;
  oldPrice?: string;
  condition?: string;
  discountTag?: string;
  title: string;
  description: string;
  showOutlinedButton?: boolean;
  onFilledButtonClick: (id: string) => void;
  onOutlinedButtonClick: (id: string) => void;
  outerWidth?: number;
  outerHeight?: number;
  outerContainerSize?: number;
  outlineColor?: string;
  innerWidth?: number;
  innerHeight?: number;
  descriptionLines?: number;
  fontSize?: number;
  accentColor?: string;
  containerRounding?: number;
  innerContainerRounding?: number;
  buttonRounding?: number;
  tagRounding?: number;
  textColor?: string;
  buttonBackground?: string;
  buttonForeground?: string;
  borderWidth?: number;
  lightenButtonColor?: number;
  filledButtonInscription?: string;
  outlinedButtonInscription?: string;
  swapButtons?: boolean;
  activeComponentScale?: number;
  mirrorTags?: boolean;
  darkTextInTags?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageSrc,
  altText,
  price,
  oldPrice,
  condition,
  discountTag,
  title,
  description,
  showOutlinedButton = true,
  onFilledButtonClick,
  onOutlinedButtonClick,
  outerWidth = 390,
  outerHeight = 412,
  outerContainerSize = 32,
  outlineColor = '#303030',
  innerWidth,
  innerHeight,
  descriptionLines = 3,
  fontSize = 14,
  accentColor = '#9F4EFF',
  containerRounding = 0,
  innerContainerRounding = 0,
  buttonRounding = 0,
  tagRounding = 20,
  textColor = '#f0f0f1',
  buttonBackground,
  buttonForeground,
  borderWidth = 3,
  lightenButtonColor = 0.12,
  filledButtonInscription = 'Buy now',
  outlinedButtonInscription = 'Add to cart',
  swapButtons = false,
  activeComponentScale = 1.024,
  mirrorTags = false,
  darkTextInTags = false, // Default value for the new prop
}) => {
  const [rotation, setRotation] = useState('0deg');
  const [borderGradient, setBorderGradient] = useState('');

  useEffect(() => {
    setBorderGradient(`conic-gradient(from var(--rotation), ${accentColor} 0deg, ${accentColor} 90deg, ${outlineColor} 90deg, ${outlineColor} 360deg)`);
  }, [accentColor]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    setRotation(`${angle}rad`);
  };

  const lightenColor = (hex: string, percent: number): string => {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    const isLightening = percent >= 0;
    const adjustment = Math.abs(percent);
    if (isLightening) {
      r = Math.min(255, Math.floor(r + (255 - r) * adjustment));
      g = Math.min(255, Math.floor(g + (255 - g) * adjustment));
      b = Math.min(255, Math.floor(b + (255 - b) * adjustment));
    } else {
      r = Math.max(0, Math.floor(r * (1 - adjustment)));
      g = Math.max(0, Math.floor(g * (1 - adjustment)));
      b = Math.max(0, Math.floor(b * (1 - adjustment)));
    }
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
  };

  const filledChronicleButtonHoverColor = lightenColor(accentColor, lightenButtonColor);
  const oulinedChronicleButtonHoverColor = lightenColor(accentColor, lightenButtonColor);

  const isRTLCheck = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
  };

  const displayedTitle = title.length > 27 ? title.slice(0, 24) + '...' : title;
  const calculatedInnerWidth = innerWidth || outerWidth - 2 * borderWidth - outerContainerSize;
  const calculatedInnerHeight = innerHeight || outerHeight - 2 * borderWidth - outerContainerSize;
  const backgroundPatternSize = `${Math.floor((Math.min(calculatedInnerWidth, calculatedInnerHeight)) / 16)}px`;

  const containerStyle: React.CSSProperties = {
    '--rotation': rotation,
    '--border-gradient': borderGradient,
    '--accent-color': accentColor,
    '--text-color': textColor,
    '--background-pattern-size': backgroundPatternSize,
    '--active-component-scale': `${activeComponentScale}`,
    width: `${outerWidth}px`,
    height: `${outerHeight}px`,
    borderRadius: `${containerRounding}px`,
    borderWidth: `${borderWidth}px`,
  } as React.CSSProperties;

  const innerContainerStyle: React.CSSProperties = {
    borderRadius: `${innerContainerRounding}px`,
    width: `${calculatedInnerWidth}px`,
    height: `${calculatedInnerHeight}px`,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    WebkitLineClamp: descriptionLines,
    direction: isRTLCheck(description) ? 'rtl' : 'ltr',
  };

  const titleStyle: React.CSSProperties = {
    direction: isRTLCheck(title) ? 'rtl' : 'ltr',
  };

  const priceTagStyle = {
    position: 'absolute' as const,
    top: '10px',
    ...(mirrorTags ? { left: '10px', right: 'auto' } : { right: '10px', left: 'auto' }),
    borderRadius: `${tagRounding}px`,
    backgroundColor: 'var(--border-color)',
    padding: '8px 15px',
    fontSize: '12px',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  const discountTagStyle: React.CSSProperties = {
    position: 'absolute' as const,
    top: '51px',
    ...(mirrorTags ? { left: '10px', right: 'auto' } : { right: '10px', left: 'auto' }),
    backgroundColor: 'var(--border-color)',
    padding: '8px 15px',
    fontSize: '12px',
    zIndex: 10,
    borderRadius: `${tagRounding}px`,
    fontWeight: 'bold',
    direction: discountTag ? (isRTLCheck(discountTag) ? 'rtl' : 'ltr') : 'ltr',
    color: darkTextInTags ? '#111111' : 'var(--text-color)',
  };  
  
  
  return (
    <div className={styles['file-container']} id={`container-${id}`} onMouseMove={handleMouseMove} style={containerStyle}>
      <div className={styles['inner-container']} style={innerContainerStyle}>
        <div className={styles['image-container']}>
          <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" className={styles['file-image']} />
          <div className={styles['price-tag']} style={priceTagStyle}>
            {mirrorTags ? (
              <>
                <span className={styles['new-price']} style={{ fontWeight: 'bold' }}>
                  <span style={{ color: darkTextInTags ? '#111111' : 'var(--text-color)' }}>{price}</span>
                </span>
                {oldPrice && (
                  <span className={styles['old-price']} style={{ marginLeft: '8px', fontWeight: 'bold' }}>
                    <span style={{ color: darkTextInTags ? '#404040' : 'var(--text-color)', opacity: 0.64, textDecoration: 'line-through', textDecorationColor: darkTextInTags ? '#404040' : 'var(--text-color)' }}>
                      {oldPrice}
                    </span>
                  </span>
                )}
              </>
            ) : (
              <>
                {oldPrice && (
                  <span className={styles['old-price']} style={{ marginRight: '8px', fontWeight: 'bold' }}>
                    <span style={{ color: darkTextInTags ? '#404040' : 'var(--text-color)', opacity: 0.64, textDecoration: 'line-through', textDecorationColor: darkTextInTags ? '#404040' : 'var(--text-color)' }}>
                      {oldPrice}
                    </span>
                  </span>
                )}
                <span className={styles['new-price']} style={{ fontWeight: 'bold' }}>
                  <span style={{ color: darkTextInTags ? '#111111' : 'var(--text-color)' }}>{price}</span>
                </span>
              </>
            )}
          </div>
          {condition && (
            <div className={styles['condition-tag']} style={{
              position: 'absolute',
              top: '10px',
              ...(mirrorTags ? { right: '10px', left: 'auto' } : { left: '10px', right: 'auto' }),
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'var(--text-color)',
              padding: '8px 15px',
              fontSize: '12px',
              zIndex: 10,
              borderRadius: `${tagRounding}px`,
              fontWeight: 'bold'
            }}>
              {condition}
            </div>
          )}
          {discountTag && (
            <div className={styles['discount-tag']} style={discountTagStyle}>
              {discountTag}
            </div>
          )}
        </div>
        <div className={styles['content']}>
          <h1 className={styles['text']} style={titleStyle}>{displayedTitle}</h1>
          <p className={styles['description']} style={descriptionStyle}>{description}</p>
          <div className={styles['button-container']}>
            {swapButtons ? (
              <>
                <ChronicleButton 
                  text={outlinedButtonInscription}
                  outlined={true}
                  width="136px"
                  onClick={() => onOutlinedButtonClick(id)}
                  hoverColor={oulinedChronicleButtonHoverColor}
                  outlinedButtonBackgroundOnHover="transparent"
                  fontFamily='"Arial", "Alef", sans-serif'
                  borderRadius={`${buttonRounding}px`}
                  customBackground={buttonBackground}
                  customForeground={buttonForeground}
                />
                <ChronicleButton 
                  text={filledButtonInscription}
                  width="136px"
                  onClick={() => onFilledButtonClick(id)}
                  hoverColor={filledChronicleButtonHoverColor}
                  fontFamily='"Arial", "Alef", sans-serif'
                  borderRadius={`${buttonRounding}px`}
                  customBackground={buttonBackground}
                  customForeground={buttonForeground}
                />
              </>
            ) : (
              <>
                <ChronicleButton 
                  text={filledButtonInscription}
                  width="136px"
                  onClick={() => onFilledButtonClick(id)}
                  hoverColor={filledChronicleButtonHoverColor}
                  fontFamily='"Arial", "Alef", sans-serif'
                  borderRadius={`${buttonRounding}px`}
                  customBackground={buttonBackground}
                  customForeground={buttonForeground}
                />
                {showOutlinedButton && (
                  <ChronicleButton 
                    text={outlinedButtonInscription}
                    outlined={true}
                    width="136px"
                    onClick={() => onOutlinedButtonClick(id)}
                    hoverColor={oulinedChronicleButtonHoverColor}
                    outlinedButtonBackgroundOnHover="transparent"
                    fontFamily='"Arial", "Alef", sans-serif'
                    borderRadius={`${buttonRounding}px`}
                    customBackground={buttonBackground}
                    customForeground={buttonForeground}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;