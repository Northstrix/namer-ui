"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './InflectedCard.module.css';

interface Tag {
  name: string;
  textColor: string;
  backgroundColor: string;
  rounding?: number;
  alignment?: 'left' | 'center' | 'right';
}

interface InflectedCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  parentBackgroundColor: string;
  onClick?: (hoverTarget: string, id: string) => void;
  onHover?: (hoverTarget: string, id: string) => void;
  cardRounding?: number;
  fontSizes?: {
    title?: string;
    description?: string;
    tags?: string;
    price?: string;
  };
  margins?: {
    title?: string;
    description?: string;
    tags?: string;
  };
  buttonIcon: React.ReactElement;
  buttonIconSize?: number;
  buttonIconColor?: string;
  buttonIconHoverColor?: string;
  buttonBackgroundColor?: string;
  buttonBackgroundHoverColor?: string;
  imageHoverZoom?: number;
  titleColor?: string;
  descriptionColor?: string;
  mirrored?: boolean;
  titleAlignment?: 'left' | 'center' | 'right';
  descriptionAlignment?: 'left' | 'center' | 'right';
  tagsAlignment?: 'left' | 'center' | 'right';
  maxWidth?: string;
  price?: string;
  priceTagTextColor?: string;
  oldPrice?: string;
  oldPriceOnTheRight?: boolean;
  oldPriceTextColor?: string;
  priceTagRounding?: string;
  priceTagBackgroundColor?: string;
}

const InflectedCard: React.FC<InflectedCardProps> = ({
  id,
  image,
  title,
  description,
  tags,
  parentBackgroundColor,
  onClick,
  onHover,
  cardRounding = 20,
  fontSizes = {},
  margins = {},
  buttonIcon,
  buttonIconSize = 24,
  buttonIconColor = '#fff',
  buttonIconHoverColor = '#fff',
  buttonBackgroundColor = '#282828',
  buttonBackgroundHoverColor = '#484848',
  imageHoverZoom = 1.1,
  titleColor = '#f7f7ff',
  descriptionColor = '#c7c7cf',
  mirrored = false,
  titleAlignment = 'left',
  descriptionAlignment = 'left',
  tagsAlignment = 'left',
  maxWidth = '100%',
  price,
  priceTagTextColor = '#ffffff',
  oldPrice,
  oldPriceOnTheRight = false,
  oldPriceTextColor = '#c1c1c7',
  priceTagRounding = '5px',
  priceTagBackgroundColor = 'rgba(0,0,0,0.7)',
}) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

const handleCardMouseEnter = () => {
  setIsCardHovered(true);
  onHover && onHover('card', id);
};

const handleCardMouseLeave = () => {
  setIsCardHovered(false);
};

  const handleMouseEnter = (element: string) => {
    setHoveredElement(element);
    onHover && onHover(element, id);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick && onClick(hoveredElement || 'card', id);
  };  

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
    handleMouseEnter('button');
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const isRTLCheck = (text: string): boolean => {
      return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
  };
  
  const mirroredStyle: React.CSSProperties = mirrored ? { transform: 'scaleX(-1)' } : {};
  const reverseMirrorStyle: React.CSSProperties = mirrored ? { transform: 'scaleX(-1)' } : {};

  return (
    <div
      className={styles.card}
      style={{
        '--card-rounding': `${cardRounding}px`,
        maxWidth: maxWidth,
        ...mirroredStyle
      } as React.CSSProperties}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onClick={handleClick}
    >
      <div
        className={styles.cardInner}
        style={{ '--parent-bg': parentBackgroundColor } as React.CSSProperties}
      >
        <div className={styles.box}>
          <div
            className={styles.imgBox}
            style={{
              '--image-hover-zoom': imageHoverZoom,
              ...reverseMirrorStyle
            } as React.CSSProperties}
          >
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={isCardHovered ? styles.hovered : ''}
            />
            {price && (
              <div className={styles.priceTag}
                style={{
                  position: 'absolute',
                  top: '12px',
                  [mirrored ? 'right' : 'left']: '12px',
                  backgroundColor: priceTagBackgroundColor,
                  color: priceTagTextColor,
                  padding: '9px 15px',
                  borderRadius: priceTagRounding,
                  fontSize: fontSizes.price || '1rem',
                }}
                onMouseEnter={() => handleMouseEnter('priceTag')}
                onClick={(event) => {
                  event.stopPropagation();
                  onClick && onClick('priceTag', id);
                }}
              >
                {oldPriceOnTheRight ? (
                  <>
                    <span className={styles['new-price']} style={{ fontWeight: 'bold' }}>{price}</span>
                    {oldPrice && <span className={styles['old-price']} style={{ marginLeft: '8px', textDecoration: 'line-through', opacity: 0.7, fontWeight: 'bold', color: oldPriceTextColor }}>{oldPrice}</span>}
                  </>
                ) : (
                  <>
                    {oldPrice && <span className={styles['old-price']} style={{ textDecoration: 'line-through', opacity: 0.7, marginRight: '8px', fontWeight: 'bold', color: oldPriceTextColor }}>{oldPrice}</span>}
                    <span className={styles['new-price']} style={{ fontWeight: 'bold' }}>{price}</span>
                  </>
                )}
              </div>
            )}
          </div>
          <div
            className={styles.icon}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            <a className={styles.iconBox}
               style={{
                 '--button-bg': buttonBackgroundColor,
                 '--button-hover-bg': buttonBackgroundHoverColor,
                 '--icon-color': buttonIconColor,
                 '--icon-hover-color': buttonIconHoverColor,
                 '--icon-size': `${buttonIconSize}px`,
               } as React.CSSProperties}
            >
              {React.cloneElement(buttonIcon, {
                size: buttonIconSize,
                color: isButtonHovered ? buttonIconHoverColor : buttonIconColor
              })}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3
          style={{
            fontSize: fontSizes.title,
            color: titleColor,
            margin: margins.title,
            fontWeight: 'bold',
            direction: isRTLCheck(title) ? 'rtl' : 'ltr',
            textAlign: titleAlignment,
            ...reverseMirrorStyle
          }}
          onMouseEnter={() => handleMouseEnter('title')}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: fontSizes.description,
            color: descriptionColor,
            margin: margins.description,
            direction: isRTLCheck(description) ? 'rtl' : 'ltr',
            textAlign: descriptionAlignment,
            ...reverseMirrorStyle
          }}
          onMouseEnter={() => handleMouseEnter('description')}
        >
          {description}
        </p>
        <ul style={{
          margin: margins.tags,
          display: 'flex',
          justifyContent: tagsAlignment,
          flexWrap: 'wrap',
          gap: '0.625rem',
          ...reverseMirrorStyle
        }}>
          {tags.map((tag, index) => (
            <li
              key={index}
              style={{
                '--tag-bg': tag.backgroundColor,
                '--tag-color': tag.textColor,
                '--tag-rounding': `${tag.rounding}px`,
                fontSize: fontSizes.tags,
                direction: isRTLCheck(tag.name) ? 'rtl' : 'ltr',
                textAlign: tag.alignment || 'left',
                display: 'inline-block',
              } as React.CSSProperties}
              onMouseEnter={() => handleMouseEnter(`tag-${tag.name}`)}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InflectedCard;