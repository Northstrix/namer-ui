'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SliderHeroSection.tsx" file
import SliderHeroSection from '@/app/the-actual-components/slider-hero-section/SliderHeroSection'

<SliderHeroSection
  title="Discover cutting-edge tech and top brands at NamerStore – your one-stop destination for brand new, refurbished, and pre-owned electronics"
  showcaseOptions={[
    { text: 'Brand New Electronics', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { text: 'Refurbished iPhones', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { text: 'Pre-owned Samsung Flagships', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]}
  onOptionClick={(option) => console.log(\`Clicked item: \${option}\`)}
  onOptionHover={(option) => console.log(\`Hovered item: \${option}\`)}
/>

<div className="w-[500px] overflow-hidden">
  <SliderHeroSection
    title="גלה טכנולוגיה חדשנית ומותגים מובילים בנמרסטור - היעד שלך למוצרי אלקטרוניקה חדשים, מחודשים ומשומשים."
    showcaseOptions={[
      { text: 'מוצרי אלקטרוניקה חדשים', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { text: 'אייפונים מחודשים', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { text: 'מכשירי סמסונג משומשים', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ]}
    onOptionClick={(option) => console.log(\`Clicked item: \${option}\`)}
    onOptionHover={(option) => console.log(\`Hovered item: \${option}\`)}
    activeOptionColor="#A031EB"
    textColor="#080810"
    imageChangeInterval={3000}
    imageTransitionDuration={0.51}
    darkenImages={-0.5}
    height="760px"
    borderRadius="2.5em"
    mobileTitleAlign="right"
    mobileShowcaseAlign="right"
  />
</div>

// Note: The SliderHeroSection component accepts the following props:
// - title: string (required) - The main title text displayed in the hero section.
// - showcaseOptions: ShowcaseOption[] (required) - An array of options to display, each containing text and an imageUrl.
// - activeOptionColor: string (optional) - Color for the active showcase option (default: '#00a6fb').
// - textColor: string (optional) - Color for the text content (default: '#ffffff').
// - imageChangeInterval: number (optional) - Interval in milliseconds for automatic image changes (default: 4000).
// - imageTransitionDuration: number (optional) - Duration in seconds for image transition animations (default: 0.76).
// - desktopFontSize: string (optional) - Font size for desktop view (default: '62px').
// - mobileFontSize: string (optional) - Font size for mobile view (default: '33px').
// - desktopShowcaseFontSize: string (optional) - Font size for showcase options in desktop view (default: '36px').
// - mobileShowcaseFontSize: string (optional) - Font size for showcase options in mobile view (default: '25px').
// - desktopVersionBottomThreshold: number (optional) - Width threshold for switching to mobile view (default: 768). This means that 768px is the last width at which the desktop version will be displayed. If the width of the parent container into which the component is embedded is 767px or less, the mobile version will be shown.
// - darkenImages: number (optional) - Opacity value for darkening/lightening overlay on images (default: 0.5).
// - desktopPadding: object (optional) - Padding for desktop view (default: { top: '62px', bottom: '67px', leftRight: '24px' }).
// - mobilePadding: object (optional) - Padding for mobile view (default: { top: '39px', bottom: '39px', leftRight: '10px' }).
// - height: string (optional) - Height of the component (default: '100vh').
// - isBoldFont: boolean (optional) - Whether to use bold font weight (default: true).
// - borderRadius: string (optional) - Border radius for the component (default: 'none').
// - onOptionClick: function (optional) - Callback function triggered when a showcase option is clicked.
// - onOptionHover: function (optional) - Callback function triggered when a showcase option is hovered.
// - desktopTitleAlign: string (optional) - Text alignment for the title in desktop view (default: 'left').
// - mobileTitleAlign: string (optional) - Text alignment for the title in mobile view (default: 'left').
// - desktopShowcaseAlign: string (optional) - Text alignment for showcase items in desktop view (default: 'left').
// - mobileShowcaseAlign: string (optional) - Text alignment for showcase items in mobile view (default: 'left').
`,
code: [
  {
    filename: 'SliderHeroSection.tsx',
    content: `"use client"
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

interface ShowcaseOption {
  text: string;
  imageUrl: string;
}

interface SliderHeroSectionProps {
  title: string;
  showcaseOptions: ShowcaseOption[];
  activeOptionColor?: string;
  textColor?: string;
  imageChangeInterval?: number;
  imageTransitionDuration?: number;
  desktopFontSize?: string;
  mobileFontSize?: string;
  desktopShowcaseFontSize?: string;
  mobileShowcaseFontSize?: string;
  desktopVersionBottomThreshold?: number;
  darkenImages?: number;
  desktopPadding?: { top?: string; bottom?: string; leftRight?: string; };
  mobilePadding?: { top?: string; bottom?: string; leftRight?: string; };
  height?: string;
  isBoldFont?: boolean;
  borderRadius?: string;
  onOptionClick?: (index: number) => void;
  onOptionHover?: (index: number) => void;
  desktopTitleAlign?: string;
  mobileTitleAlign?: string;
  desktopShowcaseAlign?: string;
  mobileShowcaseAlign?: string;
}

const isRTLCheck = (text: string): boolean => {
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const SliderHeroSection: React.FC<SliderHeroSectionProps> = ({
  title,
  showcaseOptions,
  activeOptionColor = '#00a6fb',
  textColor = '#ffffff',
  imageChangeInterval = 4000,
  imageTransitionDuration = 0.76,
  desktopFontSize = '62px',
  mobileFontSize = '33px',
  desktopShowcaseFontSize = '36px',
  mobileShowcaseFontSize = '25px',
  desktopVersionBottomThreshold = 768,
  darkenImages = 0.5,
  desktopPadding = { top: '62px', bottom: '67px', leftRight: '24px' },
  mobilePadding = { top: '39px', bottom: '39px', leftRight: '10px' },
  height = '100vh',
  isBoldFont = true,
  borderRadius = 'none',
  onOptionClick,
  onOptionHover,
  desktopTitleAlign = 'left',
  mobileTitleAlign = 'center',
  desktopShowcaseAlign = 'left',
  mobileShowcaseAlign = 'center',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setIsMobileView(containerRef.current.offsetWidth < desktopVersionBottomThreshold);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % showcaseOptions.length);
      }, imageChangeInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, imageChangeInterval, showcaseOptions.length]);

  useEffect(() => {
    if (imagesRef.current) {
      const images = imagesRef.current.children;
      gsap.to(images, { opacity: 0, duration: imageTransitionDuration, ease: 'power2.inOut', });
      gsap.to(images[activeIndex], { opacity: 1, duration: imageTransitionDuration, ease: 'power2.inOut', });
    }
    if (optionsRef.current) {
      const options = optionsRef.current.children;
      gsap.to(options, { color: textColor, duration: 0.3, ease: 'power2.inOut', });
      gsap.to(options[activeIndex], { color: activeOptionColor, duration: 0.3, ease: 'power2.inOut', });
    }
  }, [activeIndex, imageTransitionDuration, activeOptionColor, textColor]);

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
    onOptionClick?.(index);
  };

  const handleOptionHover = (index: number) => {
    setActiveIndex(index);
    setIsHovered(true);
    onOptionHover?.(index);
  };

  const handleOptionLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container ref={containerRef} $height={height} $isMobileView={isMobileView} $desktopPadding={desktopPadding} $mobilePadding={mobilePadding} $borderRadius={borderRadius}>
      <BackgroundImages ref={imagesRef}>
        {showcaseOptions.map((option, index) => (
          <BackgroundImage key={index} $imageUrl={option.imageUrl} $isActive={index === activeIndex} $borderRadius={borderRadius} />
        ))}
      </BackgroundImages>
      <Overlay $darkenImages={darkenImages} $borderRadius={borderRadius} />
      <Content>
        <Title
          $isRTL={isRTLCheck(title)}
          $isMobileView={isMobileView}
          $desktopFontSize={desktopFontSize}
          $mobileFontSize={mobileFontSize}
          $isBoldFont={isBoldFont}
          $color={textColor}
          $desktopAlign={desktopTitleAlign}
          $mobileAlign={mobileTitleAlign}
        >
          {title}
        </Title>
        <ShowcaseContainer
          ref={optionsRef}
          $isRTL={isRTLCheck(showcaseOptions[0].text)}
          $isMobileView={isMobileView}
          $desktopAlign={desktopShowcaseAlign}
          $mobileAlign={mobileShowcaseAlign}
        >
          {showcaseOptions.map((option, index) => (
            <ShowcaseOption
              key={index}
              onClick={() => handleOptionClick(index)}
              onMouseEnter={() => handleOptionHover(index)}
              onMouseLeave={handleOptionLeave}
              $isMobileView={isMobileView}
              $desktopShowcaseFontSize={desktopShowcaseFontSize}
              $mobileShowcaseFontSize={mobileShowcaseFontSize}
              $isBoldFont={isBoldFont}
              $isRTL={isRTLCheck(option.text)}
              $isActive={index === activeIndex}
              $activeColor={activeOptionColor}
              $textColor={textColor}
              $desktopAlign={desktopShowcaseAlign}
              $mobileAlign={mobileShowcaseAlign}
            >
              {option.text}
            </ShowcaseOption>
          ))}
        </ShowcaseContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ $height: string; $isMobileView: boolean; $desktopPadding: { top?: string; bottom?: string; leftRight?: string; }; $mobilePadding: { top?: string; bottom?: string; leftRight?: string; }; $borderRadius: string; }>\`
  height: \${props => props.$height};
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: \${props => props.$isMobileView
    ? \`\${props.$mobilePadding.top} \${props.$mobilePadding.leftRight} \${props.$mobilePadding.bottom}\`
    : \`\${props.$desktopPadding.top} \${props.$desktopPadding.leftRight} \${props.$desktopPadding.bottom}\`};
  border-radius: \${props => props.$borderRadius};
\`;

const BackgroundImages = styled.div\`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
\`;

const BackgroundImage = styled.div<{ $imageUrl: string; $isActive: boolean; $borderRadius: string }>\`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(\${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  opacity: \${props => props.$isActive ? 1 : 0};
  border-radius: \${props => props.$borderRadius};
\`;

const Overlay = styled.div<{ $darkenImages: number; $borderRadius: string }>\`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: \${props => 
    props.$darkenImages >= 0
      ? \`rgba(0, 0, 0, \${props.\$darkenImages})\`
      : \`rgba(255, 255, 255, \${Math.abs(props.$darkenImages)})\`
  };
  z-index: 1;
  border-radius: \${props => props.$borderRadius};
\`;

const Content = styled.div\`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
\`;

const Title = styled.h1<{ $isRTL: boolean; $isMobileView: boolean; $desktopFontSize: string; $mobileFontSize: string; $isBoldFont: boolean; $color: string; $desktopAlign: string; $mobileAlign: string; }>\`
  font-size: \${props => props.$isMobileView ? props.$mobileFontSize : props.$desktopFontSize};
  text-align: \${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  margin: 0;
  font-weight: \${props => props.$isBoldFont ? 'bold' : 'normal'};
  color: \${props => props.$color};
  direction: \${props => props.$isRTL ? 'rtl' : 'ltr'};
\`;

const ShowcaseContainer = styled.div<{ $isRTL: boolean; $isMobileView: boolean; $desktopAlign: string; $mobileAlign: string; }>\`
  display: inline-flex;
  flex-direction: column;
  align-items: \${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  align-self: \${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  direction: \${props => props.$isRTL ? 'rtl' : 'ltr'};
\`;

const ShowcaseOption = styled.div<{ $isMobileView: boolean; $desktopShowcaseFontSize: string; $mobileShowcaseFontSize: string; $isBoldFont: boolean; $isRTL: boolean; $isActive: boolean; $activeColor: string; $textColor: string; $desktopAlign: string; $mobileAlign: string; }>\`
  cursor: pointer;
  font-size: \${props => props.$isMobileView ? props.$mobileShowcaseFontSize : props.$desktopShowcaseFontSize};
  font-weight: \${props => props.$isBoldFont ? 'bold' : 'normal'};
  text-align: \${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  direction: \${props => props.$isRTL ? 'rtl' : 'ltr'};
  color: \${props => props.$isActive ? props.$activeColor : props.$textColor};
  transition: color 0.3s ease;
\`;

export default SliderHeroSection;
`
  },
],
  dependencies: 'npm install styled-components --legacy-peer-deps\nnpm install gsap --legacy-peer-deps',
  credit: (
    <span>
      Used photos:
      <br />
      Photo by <a href="https://unsplash.com/@anckor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Julian O'hayon</a> on <a href="https://unsplash.com/photos/space-black-case-apple-watch-silver-macbook-pro-jet-black-iphone-7-plus-and-silver-imac-with-corresponding-boxes-Bs-zngH79Ds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Daniel Romero</a> on <a href="https://unsplash.com/photos/white-and-blue-game-controller-TpXoTb1uR5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Daniel Romero</a> on <a href="https://unsplash.com/photos/person-holding-pink-and-black-iphone-case-jcJFOwBTEck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
    </span>
  ),
}

export { metadata }