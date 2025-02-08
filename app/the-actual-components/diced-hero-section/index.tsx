'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "DicedHeroSection.tsx" file
import DicedHeroSection from '@/app/the-actual-components/diced-hero-section/DicedHeroSection'

<DicedHeroSection
  topText="Discover"
  mainText="Freshness"
  subMainText="Explore a vibrant harvest of organic, seasonal fruits and vegetables, bursting with flavors. Unveil a paramount selection of naturally delicious and nutritious premium produce sourced directly from local farms!"
  buttonText="Shop Now"
  slides={[
    {
      title: "Purple Cauliflower",
      image: "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Strawberry",
      image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Feijoa",
      image: "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Fruits and Vegetables",
      image: "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]}
  onMainButtonClick={() => console.log("Main button clicked for the first element")}
  onGridImageHover={(index) => console.log(\`Grid image \${index} hovered for the first element\`)}
  onGridImageClick={(index) => console.log(\`Grid image \${index} clicked for the first element\`)}
  topTextStyle={{
    color: "#2c3e50",
    fontSize: "1.2rem"
  }}
  mainTextStyle={{
    fontSize: "4.5rem",
    gradient: "linear-gradient(45deg, #16a085, #2980b9)"
  }}
  subMainTextStyle={{
    color: "#34495e",
    fontSize: "1.3rem"
  }}
  buttonStyle={{
    backgroundColor: "#27ae60",
    color: "#ffffff",
    borderRadius: "2rem",
    hoverColor: "#2ecc71"
  }}
  componentBorderRadius="8px"
  backgroundColor="#ecf0f1"
  mobileBreakpoint={1000}
  fontFamily="Arial, sans-serif"
/>
<DicedHeroSection
  topText="גלה"
  mainText="טריות"
  subMainText="חקור יבול עשיר של פירות וירקות אורגניים עונתיים, מלאי טעמים. גלה מבחר מעולה של תוצרת איכותית, טעימה וטבעית, מזינה ומגיעה ישירות מחוות מקומיות!"
  buttonText="קנה עכשיו"
  slides={[
    {
      title: "כרובית סגולה",
      image: "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "תותים",
      image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "פיג'ויה",
      image: "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "מגוון פירות וירקות",
      image: "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]}
  onMainButtonClick={() => console.log("Main button clicked for the second element")}
  onGridImageHover={(index) => console.log(\`Grid image \${index} hovered for the second element\`)}
  onGridImageClick={(index) => console.log(\`Grid image \${index} clicked for the second element\`)}
  topTextStyle={{
    color: "#f7f7ff",
    fontSize: "1.4rem"
  }}
  mainTextStyle={{
    fontSize: "5rem",
    gradient: "linear-gradient(45deg, #9F4EFF, #00A6FB)"
  }}
  subMainTextStyle={{
    color: "#f7f7ff",
    fontSize: "1.12rem"
  }}
  buttonStyle={{
    backgroundColor: "#00A6FB",
    color: "#ffffff",
    borderRadius: "7px",
    hoverColor: "#9F4EFF"
  }}
  componentBorderRadius="1.76em"
  backgroundColor="#000000"
  separatorColor="#086CA2"
  maxContentWidth="1190px"
  mobileBreakpoint={910}
  fontFamily="Arial, sans-serif"
  isRTL={true}
/>

// Note: The DicedHeroSection component accepts the following props:
// - topText: string (required) - The text displayed at the top of the hero section.
// - mainText: string (required) - The main headline text of the hero section.
// - subMainText: string (required) - The sub-headline or description text below the main text.
// - buttonText: string (required) - The text displayed on the call-to-action button.
// - slides: SlideContent[] (required) - An array of objects representing the images in the grid, each containing a title (string) and an image URL (string).
// - onMainButtonClick: () => void (optional) - Callback function triggered when the main button is clicked.
// - onGridImageHover: (index: number) => void (optional) - Callback function triggered when an image in the grid is hovered over, receiving the index of the hovered image.
// - onGridImageClick: (index: number) => void (optional) - Callback function triggered when an image in the grid is clicked, receiving the index of the clicked image.
// - topTextStyle: TextStyle (optional) - Custom styling for the top text.
// - mainTextStyle: TextStyle (optional) - Custom styling for the main text, including gradient options.
// - subMainTextStyle: TextStyle (optional) - Custom styling for the sub-main text.
// - buttonStyle: ButtonStyle (optional) - Custom styling for the main button.
// - componentBorderRadius: string (optional) - Border radius for the entire component (default: '0px').
// - backgroundColor: string (optional) - Background color for the entire component.
// - separatorColor: string (optional) - Color of the separator line below the main text (default: '#005baa').
// - maxContentWidth: string (optional) - Maximum width of the component (default: '1536px').
// - mobileBreakpoint: number (optional) - Pixel width at which the layout switches to mobile view (default: 1000).
// - fontFamily: string (optional) - Font family for the entire component (default: 'inherit').
// - isRTL: boolean (optional) - Flag to enable right-to-left layout (default: false).
`,
code: [
  {
    filename: 'DicedHeroSection.tsx',
    content: `"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton';

interface TextStyle {
  color?: string;
  fontSize?: string;
  gradient?: string;
}

interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverColor?: string;
}

interface SlideContent {
  title: string;
  image: string;
}

interface DicedHeroSectionProps {
  topText: string;
  mainText: string;
  subMainText: string;
  buttonText: string;
  slides: SlideContent[];
  onMainButtonClick?: () => void;
  onGridImageHover?: (index: number) => void;
  onGridImageClick?: (index: number) => void;
  topTextStyle?: TextStyle;
  mainTextStyle?: TextStyle;
  subMainTextStyle?: TextStyle;
  buttonStyle?: ButtonStyle;
  componentBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string; 
  maxContentWidth?: string;
  mobileBreakpoint?: number;
  fontFamily?: string;
  isRTL?: boolean;
}

const DicedHeroSection: React.FC<DicedHeroSectionProps> = ({
  topText,
  mainText,
  subMainText,
  buttonText,
  slides,
  onMainButtonClick,
  onGridImageHover,
  onGridImageClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle,
  componentBorderRadius = '0px',
  backgroundColor,
  separatorColor = '#005baa',
  maxContentWidth = '1536px',
  mobileBreakpoint = 1000,
  fontFamily = 'inherit',
  isRTL = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isRTLCheck = (text: string): boolean => {
      return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
  };

  useEffect(() => {
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < mobileBreakpoint);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const getGradientStyle = (gradient?: string) => {
    if (gradient) {
      return {
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    }
    return {};
  };

  return (
      <main
        ref={containerRef}
        style={{
          borderRadius: componentBorderRadius,
          backgroundColor,
          padding: '2rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: isMobile ? 'column' : isRTL ? 'row-reverse' : 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: maxContentWidth,
          margin: '0 auto',
          minHeight: 'auto',
          height: 'auto',
          fontFamily,
          position: 'relative',
        }}
      >
        <div ref={leftHalfRef} style={{
          flex: 1,
          marginRight: isMobile ? 0 : isRTL ? 0 : '2rem',
          marginLeft: isMobile ? 0 : isRTL ? '2rem' : 0,
          textAlign: isMobile ? 'center' : isRTL ? 'right' : 'left',
          alignItems: isMobile ? 'center' : isRTL ? 'flex-end' : 'flex-start',
          maxWidth: isMobile ? '100%' : '50%', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          paddingBottom: isMobile ? '2rem' : 0,
        }}>
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              ...topTextStyle,
              ...getGradientStyle(topTextStyle?.gradient),
              direction: isRTLCheck(topText) ? 'rtl' : 'ltr',
              textAlign: isRTLCheck(topText) ? 'right' : 'left',
            }}
          >
            {topText}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              ...mainTextStyle,
              direction: isRTLCheck(mainText) ? 'rtl' : 'ltr',
              textAlign: isMobile ? 'center' : isRTLCheck(mainText) ? 'right' : 'left',
              fontSize: mainTextStyle?.fontSize,
            }}
          >
            <motion.span style={{
                  ...getGradientStyle(mainTextStyle?.gradient),
                  display: "inline-block",
              }}>
              {mainText}
            </motion.span>
          </motion.h1>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: '6.25rem' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              height: '0.25rem',
              background: separatorColor, // Use the separatorColor prop
              border: 'none',
              margin: isMobile
                ? '1.125rem auto 1.875rem'
                : isRTLCheck(mainText)
                ? '1.125rem 0 1.875rem auto'
                : '1.125rem 0 1.875rem',
              alignSelf: isMobile
                ? 'center'
                : isRTLCheck(mainText)
                ? 'flex-end'
                : 'flex-start',
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              ...subMainTextStyle,
              ...getGradientStyle(subMainTextStyle?.gradient),
              direction: isRTLCheck(subMainText) ? 'rtl' : 'ltr',
              textAlign: isRTLCheck(subMainText) ? 'right' : 'left',
            }}
          >
            {subMainText}
          </motion.p>
        </div>
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ 
            marginTop: '1rem',
            display: 'flex',
            justifyContent: isMobile
              ? 'center'
              : isRTL
              ? 'flex-end'
              : 'flex-start',
          }}
        >
          <ChronicleButton
            text={buttonText}
            onClick={onMainButtonClick}
            hoverColor={buttonStyle?.hoverColor}
            borderRadius={buttonStyle?.borderRadius}
            fontFamily={fontFamily}
            customBackground={buttonStyle?.backgroundColor}
            customForeground={buttonStyle?.color}
          />
        </motion.div>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isRTL ? 'flex-start' : 'flex-end',
        position: 'relative',
        width: isMobile ? '100%' : '50%',
        paddingLeft: isMobile ? 0 : isRTL ? 0 : '2rem',
        paddingRight: isMobile ? 0 : isRTL ? '2rem' : 0,
        height: 'auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          aspectRatio: '1 / 1',
        }}>
          {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
            <div key={index} style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '100%', // This creates a square aspect ratio
              overflow: 'hidden',
              borderRadius: '20px',
            }}>
              <img
                src={slide.image}
                alt={slide.title}
                className={\`warped-image \${['bottom-right', 'bottom-left', 'top-right', 'top-left'][index]}\`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
                onClick={() => onGridImageClick && onGridImageClick(index)}
                onMouseEnter={() => onGridImageHover && onGridImageHover(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{\`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(100% - var(--_d) - var(--x)) 0 var(--_m),
            100% calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) 
             calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(-1*var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(var(--_d) + var(--x)) 0 var(--_m),
            0 calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) 
             calc(var(--r) + var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(var(--_d) + var(--x)) 100% var(--_m),
            0 calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) 
             calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(100% - var(--_d) - var(--x)) 100% var(--_m),
            100% calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) 
             calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
            var(--_g) calc(-1*var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      \`}</style>
    </main>
  );
};

export default DicedHeroSection;
`
  },
],
  dependencies: 'npm install framer-motion\nChronicle Button',
  credit: (
    <span>
      <a href="https://codepen.io/kristen17/pen/GRXgqaB" target="_blank" rel="noopener noreferrer" className="link">Landing page with swiper #css #swiper.js</a> by <a href="https://codepen.io/kristen17" target="_blank" rel="noopener noreferrer" className="link">Kristen</a>
      <br />
      <a href="https://codepen.io/t_afif/pen/LEPBYvK" target="_blank" rel="noopener noreferrer" className="link">Inverted border-radius using CSS mask II</a> by <a href="https://codepen.io/t_afif" target="_blank" rel="noopener noreferrer" className="link">Temani Afif</a>
      <br />
      Used photos:
      <br />
      Photo by <a href="https://unsplash.com/@riosamba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Kamala Bright</a> on <a href="https://unsplash.com/photos/a-variety-of-fruits-and-vegetables-sitting-on-a-table-QNYmZSexOhk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@justusmenke?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Justus Menke</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-bunch-of-strawberries-tNLykyGgVtA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@lelena_g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Elena G</a> on <a href="https://unsplash.com/photos/green-round-fruits-lot-XpHY3u3EeVw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@lsummerour?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Lisa Summerour</a> on <a href="https://unsplash.com/photos/purple-and-green-vegetable-on-brown-wooden-table-E2o2wH0pT_Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
    </span>
  ),
}

export { metadata }