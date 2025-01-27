'use client'


const metadata = {
  usage: `// Path to the "ProductCard.tsx" file
import ProductCard from '@/app/the-actual-components/product-card/ProductCard'

<ProductCard
  id="0"
  imageSrc="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
  altText="iPhone 15 Pro"
  oldPrice="$1,199"
  price="$1,079"
  condition="Brand new"
  discountPercentage={10}
  title="iPhone 15 Pro"
  description="Titanium smartphone with an advanced camera system, offering stunning photography capabilities and a sleek design."
  onFilledButtonClick={(id) => toast.info(\`Filled button clicked for ID: \${id}\`)}
  onOutlinedButtonClick={(id) => toast.info(\`Outlined button clicked for ID: \${id}\`)}
/>
<ProductCard
  id="1"
  imageSrc="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  altText="Samsung Galaxy Flip 6"
  oldPrice="$999"
  price="$499"
  condition="Pre-owned"
  discountPercentage={50}
  title="Samsung Galaxy Flip 6"
  description="Innovative foldable smartphone with a sleek design that enhances portability while providing a large display for immersive viewing experiences and multitasking."
  onFilledButtonClick={(id) => toast.info(\`Filled button clicked for ID: \${id}\`)}
  onOutlinedButtonClick={(id) => toast.info(\`Outlined button clicked for ID: \${id}\`)}
  accentColor="#00A6FB"
  buttonRounding={50}
/>
<ProductCard
  id="2"
  imageSrc="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  altText="iPhone 7"
  oldPrice="$199"
  price="$159"
  condition="Refurbished"
  discountPercentage={20}
  title="iPhone 7"
  description="Classic iPhone model with 12MP camera and water resistance, offering reliable performance and essential features for everyday smartphone users."
  onFilledButtonClick={(id) => toast.info(\`Filled button clicked for ID: \${id}\`)}
  onOutlinedButtonClick={(id) => toast.info(\`Outlined button clicked for ID: \${id}\`)}
  showOutlinedButton={false}
  accentColor="#FF3900"
  outerWidth={392}
  outerHeight={414}
  borderWidth={4}
  containerRounding={14}
  innerContainerRounding={14}
  buttonRounding={14}
  activeComponentScale={1.048}
/>
<ProductCard
  id="3"
  imageSrc="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=2436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  altText="iPhone X"
  oldPrice="₪999"
  price="₪599"
  condition="משומש"
  discountPercentage={40}
  title="iPhone X"
  description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
  onFilledButtonClick={(id) => toast.info(\`Filled button clicked for ID: \${id}\`)}
  onOutlinedButtonClick={(id) => toast.info(\`Outlined button clicked for ID: \${id}\`)}
  showOutlinedButton={true}
  accentColor="#00A6FB"
  containerRounding={36}
  innerContainerRounding={21}
  buttonRounding={50}
  lightenButtonColor={0.47}
  filledButtonInscription="קנה עכשיו"
  outlinedButtonInscription="הוסף לעגלה"
  swapButtons={true}
  activeComponentScale={1.08}
  mirrorTags={true}
/>

// Note: The ProductCard component accepts the following props:
// - id: string (required) - Unique identifier for the product container.
// - imageSrc: string (required) - Source URL for the product image.
// - altText: string (required) - Alternative text description for the product image.
// - price: string (required) - Current price of the product.
// - oldPrice: string (optional) - Original/previous price of the product.
// - condition: string (optional) - Current condition of the product (e.g., "Brand new", "Pre-owned").
// - discountPercentage: number (optional) - Percentage discount applied to the product.
// - title: string (required) - Name or title of the product.
// - description: string (required) - Detailed description of the product.
// - showOutlinedButton: boolean (optional) - Flag to display the secondary (outlined) button (default: true).
// - onFilledButtonClick: (id: string) => void (required) - Callback function for the primary button click.
// - onOutlinedButtonClick: (id: string) => void (required) - Callback function for the secondary button click.
// - outerWidth: number (optional) - Total width of the product card (default: 390px).
// - outerHeight: number (optional) - Total height of the product card (default: 412px).
// - outerContainerSize: number (optional) - Size of the outer container (default: 32px).
// - innerWidth: number (optional) - Width of the inner container.
// - innerHeight: number (optional) - Height of the inner container.
// - descriptionLines: number (optional) - Maximum number of lines for the description (default: 3).
// - fontSize: number (optional) - Base font size for the card (default: 14px).
// - accentColor: string (optional) - Primary accent color for the card (default: '#9F4EFF').
// - containerRounding: number (optional) - Border radius for the entire container (default: 0).
// - innerContainerRounding: number (optional) - Border radius for the inner container (default: 0).
// - buttonRounding: number (optional) - Border radius for buttons (default: 0).
// - tagRounding: number (optional) - Border radius for tags (default: 20px).
// - textColor: string (optional) - Color for text elements (default: '#f0f0f1').
// - buttonBackground: string (optional) - Background color for buttons.
// - buttonForeground: string (optional) - Foreground color for buttons.
// - borderWidth: number (optional) - Width of the card border (default: 3px).
// - lightenButtonColor: number (optional) - Factor to lighten button colors on hover (default: 0.32).
// - filledButtonInscription: string (optional) - Text for the primary button (default: 'Buy now').
// - outlinedButtonInscription: string (optional) - Text for the secondary button (default: 'Add to cart').
// - swapButtons: boolean (optional) - Flag to swap button positions (default: false).
// - activeComponentScale: number (optional) - Scale factor on hover (default: 1.024).
// - mirrorTags: boolean (optional) - Flag to mirror tag positioning (default: false).
`,
code: [
  {
    filename: 'ProductCard.tsx',
    content: `"use client"
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
  discountPercentage?: number;
  title: string;
  description: string;
  showOutlinedButton?: boolean;
  onFilledButtonClick: (id: string) => void;
  onOutlinedButtonClick: (id: string) => void;
  outerWidth?: number;
  outerHeight?: number;
  outerContainerSize?: number;
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
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageSrc,
  altText,
  price,
  oldPrice,
  condition,
  discountPercentage,
  title,
  description,
  showOutlinedButton = true,
  onFilledButtonClick,
  onOutlinedButtonClick,
  outerWidth = 390,
  outerHeight = 412,
  outerContainerSize = 32,
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
  lightenButtonColor = 0.32,
  filledButtonInscription = 'Buy now',
  outlinedButtonInscription = 'Add to cart',
  swapButtons = false,
  activeComponentScale = 1.024,
  mirrorTags = false,
}) => {
  const [rotation, setRotation] = useState('0deg');
  const [borderGradient, setBorderGradient] = useState('');

  useEffect(() => {
    setBorderGradient(\`conic-gradient(from var(--rotation), \${accentColor} 0deg, \${accentColor} 90deg, #242424 90deg, #242424 360deg)\`);
  }, [accentColor]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    setRotation(\`\${angle}rad\`);
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
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}\`;
  };

  const filledChronicleButtonHoverColor = lightenColor(accentColor, lightenButtonColor);
  const oulinedChronicleButtonHoverColor = lightenColor(accentColor, lightenButtonColor);

  const isRTLCheck = (text: string): boolean => {
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text);
  };

  const displayedTitle = title.length > 27 ? title.slice(0, 24) + '...' : title;
  
  const calculatedInnerWidth = innerWidth || outerWidth - 2 * borderWidth - outerContainerSize;
  const calculatedInnerHeight = innerHeight || outerHeight - 2 * borderWidth - outerContainerSize;
  
  const backgroundPatternSize = \`\${Math.floor((Math.min(calculatedInnerWidth, calculatedInnerHeight)) / 16)}px\`;
  
  const containerStyle: React.CSSProperties = {
    '--rotation': rotation,
    '--border-gradient': borderGradient,
    '--accent-color': accentColor,
    '--text-color': textColor,
    '--background-pattern-size': backgroundPatternSize,
    '--active-component-scale': \`\${activeComponentScale}\`,
    width: \`\${outerWidth}px\`,
    height: \`\${outerHeight}px\`,
    borderRadius: \`\${containerRounding}px\`,
    borderWidth: \`\${borderWidth}px\`,
  } as React.CSSProperties;  

  const innerContainerStyle: React.CSSProperties = {
    borderRadius: \`\${innerContainerRounding}px\`,
    width: \`\${calculatedInnerWidth}px\`,
    height: \`\${calculatedInnerHeight}px\`,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: \`\${fontSize}px\`,
    WebkitLineClamp: descriptionLines,
    direction: isRTLCheck(description) ? 'rtl' : 'ltr',
  };

  const titleStyle: React.CSSProperties = {
    direction: isRTLCheck(title) ? 'rtl' : 'ltr',
  };
  
  return (
    <div 
      className={styles['file-container']} 
      id={\`container-\${id}\`}
      onMouseMove={handleMouseMove}
      style={containerStyle}
    >
      <div className={styles['inner-container']} style={innerContainerStyle}>
        <div className={styles['image-container']}>
          <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" className={styles['file-image']} />
          <div 
            className={styles['price-tag']} 
            style={{ 
              position: 'absolute',
              top: '10px', 
              ...(mirrorTags 
                ? { left: '10px', right: 'auto' } 
                : { right: '10px', left: 'auto' }
              ),
              borderRadius: \`\${tagRounding}px\`,
              backgroundColor: 'var(--border-color)',
              color: 'var(--text-color)',
              padding: '8px 15px',
              fontSize: '12px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold'
            }}
          >
            {mirrorTags ? (
              <>
                <span className={styles['new-price']} style={{ fontWeight: 'bold' }}>{price}</span>
                {oldPrice && <span className={styles['old-price']} style={{ marginLeft: '8px', textDecoration: 'line-through', opacity: 0.7, fontWeight: 'bold' }}>{oldPrice}</span>}
              </>
            ) : (
              <>
                {oldPrice && <span className={styles['old-price']} style={{ textDecoration: 'line-through', opacity: 0.7, marginRight: '8px', fontWeight: 'bold' }}>{oldPrice}</span>}
                <span className={styles['new-price']} style={{ fontWeight: 'bold' }}>{price}</span>
              </>
            )}
          </div>
          
          {condition && (
            <div 
              className={styles['condition-tag']} 
              style={{
                position: 'absolute',
                top: '10px',
                ...(mirrorTags 
                  ? { right: '10px', left: 'auto' } 
                  : { left: '10px', right: 'auto' }
                ),
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'var(--text-color)',
                padding: '8px 15px',
                fontSize: '12px',
                zIndex: 10,
                borderRadius: \`\${tagRounding}px\`,
                fontWeight: 'bold'
              }}
            >
              {condition}
            </div>
          )}
          
          {discountPercentage && (
            <div 
              className={styles['discount-tag']} 
              style={{ 
                position: 'absolute',
                top: '51px', 
                ...(mirrorTags 
                  ? { left: '10px', right: 'auto' } 
                  : { right: '10px', left: 'auto' }
                ),
                backgroundColor: 'var(--border-color)',
                color: 'var(--text-color)',
                padding: '8px 15px',
                fontSize: '12px',
                zIndex: 10,
                borderRadius: \`\${tagRounding}px\`,
                fontWeight: 'bold'
              }}
            >
              {discountPercentage}% OFF
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
                  borderRadius={\`\${buttonRounding}px\`}
                  customBackground={buttonBackground}
                  customForeground={buttonForeground}
                />
                <ChronicleButton 
                  text={filledButtonInscription}
                  width="136px"
                  onClick={() => onFilledButtonClick(id)}
                  hoverColor={filledChronicleButtonHoverColor}
                  fontFamily='"Arial", "Alef", sans-serif'
                  borderRadius={\`\${buttonRounding}px\`}
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
                  borderRadius={\`\${buttonRounding}px\`}
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
                    borderRadius={\`\${buttonRounding}px\`}
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
`
  },
  {
    filename: 'ProductCard.module.css',
    content: `.file-container {
    --border-color: var(--accent-color);
    --hover-text-color: var(--accent-color);
    --active-component-scale: 1.024;
    border: solid transparent;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    background-image: linear-gradient(#050505, #050505), var(--border-gradient);
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    font-family: "Arial", "Alef", sans-serif;
  }

  .file-container:hover {
    transform: scale(var(--active-component-scale));
  }

  .inner-container {
    background-color: black;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, rgba(230, 230, 230, 0.15) 25%, transparent 25%, transparent 75%, rgba(240, 240, 240, 0.15) 75%),
                linear-gradient(-45deg, rgba(240, 240, 240, 0.15) 25%, transparent 25%, transparent 75%, rgba(230, 230, 230, 0.15) 75%);
    background-size: var(--background-pattern-size) var(--background-pattern-size);
  }
  
  .image-container {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 16px;
    position: relative;
    align-items: center;
  }
  
  .text {
    font-size: 21px;
    font-weight: bold;
    letter-spacing: -.01em;
    line-height: normal;
    color: var(--text-color);
    text-align: center;
    margin-top: 5px;
  }
  
  .description {
    color: var(--text-color);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;
    margin-top: 9px;
  }
  
  .button-container {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    margin-bottom: 1px;
  }
  
  .file-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .file-container:hover .file-image {
    transform: scale(1.1);
  }
  
  .file-container:hover .text {
    color: var(--hover-text-color);
  }
`
  },
],
  dependencies: `npm install @fontsource/alef --legacy-peer-deps\nChronicle button`,
  credit: (
    <span>
      <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="link">Vercel app border hover effect</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
      Used photos:
      <br />
      Photo by <a href="https://www.pexels.com/@zana-latif-2772032/" target="_blank" rel="noopener noreferrer" className="link">Zana Latif</a> from <a href="https://www.pexels.com/photo/unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy-18525574/" target="_blank" rel="noopener noreferrer" className="link">Pexels</a>
      <br />
      Photo by <a href="https://unsplash.com/@n3gve?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Evgeny Opanasenko</a> on <a href="https://unsplash.com/photos/two-cell-phones-sitting-next-to-each-other-on-a-window-sill-cZye2sFqu5o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@matteofusco?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Matteo Fusco</a> on <a href="https://unsplash.com/photos/jet-black-iphone-7-1giBTF3G4EE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@aidanmh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Aidan Hancock</a> on <a href="https://unsplash.com/photos/turned-on-iphone-x-on-white-surface-EwKkZu18HPo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
    </span>
  ),
}

export { metadata }