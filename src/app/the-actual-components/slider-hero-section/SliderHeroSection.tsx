
"use client"
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
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
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
      if (typeof window !== 'undefined') {
        setIsMobileView(window.innerWidth < desktopVersionBottomThreshold);
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
          $isRTL={showcaseOptions.length > 0 ? isRTLCheck(showcaseOptions[0].text): false}
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

const Container = styled.div<{ $height: string; $isMobileView: boolean; $desktopPadding: { top?: string; bottom?: string; leftRight?: string; }; $mobilePadding: { top?: string; bottom?: string; leftRight?: string; }; $borderRadius: string; }>`
  height: ${props => props.$height};
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: ${props => props.$isMobileView
    ? `${props.$mobilePadding.top} ${props.$mobilePadding.leftRight} ${props.$mobilePadding.bottom}`
    : `${props.$desktopPadding.top} ${props.$desktopPadding.leftRight} ${props.$desktopPadding.bottom}`};
  border-radius: ${props => props.$borderRadius};
`;

const BackgroundImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.div<{ $imageUrl: string; $isActive: boolean; $borderRadius: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.$isActive ? 1 : 0};
  border-radius: ${props => props.$borderRadius};
`;

const Overlay = styled.div<{ $darkenImages: number; $borderRadius: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => 
    props.$darkenImages >= 0
      ? `rgba(0, 0, 0, ${props.$darkenImages})`
      : `rgba(255, 255, 255, ${Math.abs(props.$darkenImages)})`
  };
  z-index: 1;
  border-radius: ${props => props.$borderRadius};
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1<{ $isRTL: boolean; $isMobileView: boolean; $desktopFontSize: string; $mobileFontSize: string; $isBoldFont: boolean; $color: string; $desktopAlign: string; $mobileAlign: string; }>`
  font-size: ${props => props.$isMobileView ? props.$mobileFontSize : props.$desktopFontSize};
  text-align: ${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  margin: 0;
  font-weight: ${props => props.$isBoldFont ? 'bold' : 'normal'};
  color: ${props => props.$color};
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
`;

const ShowcaseContainer = styled.div<{ $isRTL: boolean; $isMobileView: boolean; $desktopAlign: string; $mobileAlign: string; }>`
  display: inline-flex;
  flex-direction: column;
  align-items: ${props => {
    if (props.$isMobileView) return props.$mobileAlign === 'left' ? 'flex-start' : props.$mobileAlign === 'right' ? 'flex-end' : 'center';
    return props.$desktopAlign === 'left' ? 'flex-start' : props.$desktopAlign === 'right' ? 'flex-end' : 'center';
  }};
  align-self: ${props => {
    if (props.$isMobileView) return props.$mobileAlign === 'left' ? 'flex-start' : props.$mobileAlign === 'right' ? 'flex-end' : 'center';
    return props.$desktopAlign === 'left' ? 'flex-start' : props.$desktopAlign === 'right' ? 'flex-end' : 'center';
  }};
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
`;

const ShowcaseOption = styled.div<{ $isMobileView: boolean; $desktopShowcaseFontSize: string; $mobileShowcaseFontSize: string; $isBoldFont: boolean; $isRTL: boolean; $isActive: boolean; $activeColor: string; $textColor: string; $desktopAlign: string; $mobileAlign: string; }>`
  cursor: pointer;
  font-size: ${props => props.$isMobileView ? props.$mobileShowcaseFontSize : props.$desktopShowcaseFontSize};
  font-weight: ${props => props.$isBoldFont ? 'bold' : 'normal'};
  text-align: ${props => props.$isMobileView ? props.$mobileAlign : props.$desktopAlign};
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
  color: ${props => props.$isActive ? props.$activeColor : props.$textColor};
  transition: color 0.3s ease;
`;

export default SliderHeroSection;

    