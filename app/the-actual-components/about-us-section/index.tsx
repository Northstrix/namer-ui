'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "AboutUsSection.tsx" file
import AboutUsSection from '@/app/the-actual-components/about-us-section/AboutUsSection'

<AboutUsSection
  aboutUsImages={[
    "https://images.unsplash.com/photo-1622531636820-5d727319e45d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603389335957-10bea39c9d32?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695753456538-3d29fa0a4ba0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]}
  aboutUsDescription={\`
    Shakhor opened in July 2024 to address the growing demand for affordable and high-quality electronics in Austin, Texas. We offer competitive prices on a wide range of new, refurbished, and pre-owned products, including smartphones, tablets, laptops, gaming consoles, wearables, and more. Our carefully curated selection caters to tech enthusiasts, students, and professionals alike. What sets us apart is our commitment to customer satisfaction. Our expert staff provides personalized guidance to help you find the perfect device for your unique needs and lifestyle. By choosing Shakhor Electronics, you're not just getting great deals on top-notch technology; you're joining a community dedicated to making cutting-edge electronics accessible to all. We ensure that customers with limited budgets can afford quality refurbished and pre-owned devices, allowing everyone to experience the benefits of modern technology without breaking the bank.
  \`}
  onButtonClick={() => console.log('The "Contact Us" button has been clicked!')}
  onGridImageClick={(index) => console.log(\`Grid image \${index + 1} clicked!\`)}
  onGridImageHover={(index) => console.log(\`Grid image \${index + 1} hovered!\`)}
/>

// Note: The AboutUsSection component accepts the following props:
// - desktopThreshold: number (optional) - Breakpoint for desktop view (default: 768).
// - aboutUsImages: string[] (required) - Array of image URLs for the grid.
// - aboutUsDescription: string (required) - Text description for the About Us section.
// - titleText: string (optional) - Title for the section (default: "About Us").
// - titleTextColor: string (optional) - Color for the title text (default: "#FFFFFF").
// - descriptionTextColor: string (optional) - Color for the description text (default: "#F1F1F7").
// - buttonText: string (optional) - Text for the button (default: "Contact Us").
// - onButtonClick: () => void (optional) - Function to handle button click (default: no-op).
// - desktopPadding: object (optional) - Padding for desktop view.
// - mobilePadding: object (optional) - Padding for mobile view.
// - spaceBelowDesktop: string (optional) - Space below the section on desktop (default: "65px").
// - spaceBelowMobile: string (optional) - Space below the section on mobile (default: "20px").
// - imageOuterBorderRadius: string (optional) - Border radius for images in both the double and single image containers (default: "15px").
// - dicedGridContainerWidth: string (optional) - Width of the diced grid container (default: "min(60%, 658px)").
// - twoImageBreakpoint: number (optional) - Breakpoint for two-image layout (default: 1200).
// - oneImageBreakpoint: number (optional) - Breakpoint for single-image layout (default: 600).
// - onGridImageClick: (index: number) => void (optional) - Function to handle grid image click.
// - onGridImageHover: (index: number) => void (optional) - Function to handle grid image hover.
// - dicedGridViewportHeightMultiplier: number (optional) - Multiplier for diced grid height (default: 0.8).
// - dicedGridSizeAdjustment: number (optional) - Size adjustment for diced grid (default: -96).
// - chronicleButtonHoverColor: string (optional) - Hover color for the Chronicle button.
// - chronicleButtonWidth: string (optional) - Width of the Chronicle button.
// - chronicleButtonOutlined: boolean (optional) - Whether the Chronicle button should be outlined.
// - chronicleButtonOutlinePaddingAdjustment: string (optional) - Padding adjustment for outlined Chronicle button.
// - chronicleButtonBorderRadius: string (optional) - Border radius for the Chronicle button.
// - chronicleButtonOutlinedBackgroundOnHover: string (optional) - Background color on hover for outlined Chronicle button.
// - chronicleButtonCustomBackground: string (optional) - Custom background color for the Chronicle button.
// - chronicleButtonCustomForeground: string (optional) - Custom foreground color for the Chronicle button.
// - sectionHeaderPadding: object (optional) - Padding for the section header.
// - sectionHeaderFontSize: object (optional) - Font sizes for the section header.
// - sectionTextFontSize: object (optional) - Font sizes for the section text.
`,
code: [
  {
    filename: 'AboutUsSection.tsx',
    content: `import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'
import StructuredBlock from '@/app/the-actual-components/structured-block/StructuredBlock'
import SectionContainer from '@/app/the-actual-components/section-container/SectionContainer'
import DicedGrid from './DicedGrid';

interface AboutUsSectionProps {
  desktopThreshold?: number;
  aboutUsImages: string[];
  aboutUsDescription: string;
  titleText?: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  desktopPadding?: { left: string; right: string; top: string; bottom: string };
  mobilePadding?: { left: string; right: string; top: string; bottom: string };
  spaceBelowDesktop?: string;
  spaceBelowMobile?: string;
  imageOuterBorderRadius?: string;
  dicedGridContainerWidth?: string;
  twoImageBreakpoint?: number;
  oneImageBreakpoint?: number;
  onGridImageClick?: (index: number) => void;
  onGridImageHover?: (index: number) => void;
  dicedGridViewportHeightMultiplier?: number;
  dicedGridSizeAdjustment?: number;
  chronicleButtonHoverColor?: string;
  chronicleButtonWidth?: string;
  chronicleButtonOutlined?: boolean;
  chronicleButtonOutlinePaddingAdjustment?: string;
  chronicleButtonBorderRadius?: string;
  chronicleButtonOutlinedBackgroundOnHover?: string;
  chronicleButtonCustomBackground?: string;
  chronicleButtonCustomForeground?: string;
  sectionHeaderPadding?: {
    desktopPadding: { left: string; right: string; top: string; bottom: string };
    mobilePadding: { left: string; right: string; top: string; bottom: string };
  };
  sectionHeaderFontSize?: {
    desktop: string;
    mobile: string;
  };
  sectionTextFontSize?: {
    desktop: string;
    mobile: string;
  };
}

const TwoImageGrid = styled.div\`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-bottom: 24px;
\`;

const SquareImage = styled.img\`
  width: calc(50% - 12px);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 15px;
\`;

const SingleImage = styled.img\`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 24px;
\`;

const BentoGrid = styled.div\`
  display: grid;
  grid-template-columns: min(60%, 658px) 1fr;
  gap: 24px;
  align-items: center;
\`;

const ImageGridWrapper = styled.div\`
  width: 100%;
\`;

const TextContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
\`;

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  desktopThreshold = 768,
  aboutUsImages,
  aboutUsDescription,
  titleText = "About Us",
  titleTextColor = "#FFFFFF",
  descriptionTextColor = "#F1F1F7",
  buttonText = "Contact Us",
  onButtonClick = () => {},
  desktopPadding = { left: '24px', right: '24px', top: '40px', bottom: '32px' },
  mobilePadding = { left: '10px', right: '10px', top: '30px', bottom: '24px' },
  spaceBelowDesktop = "65px",
  spaceBelowMobile = "20px",
  imageOuterBorderRadius = "15px",
  dicedGridContainerWidth = "min(60%, 658px)",
  twoImageBreakpoint = 1200,
  oneImageBreakpoint = 600,
  onGridImageClick,
  onGridImageHover,
  dicedGridViewportHeightMultiplier = 0.8,
  dicedGridSizeAdjustment = -96,
  chronicleButtonHoverColor,
  chronicleButtonWidth,
  chronicleButtonOutlined,
  chronicleButtonOutlinePaddingAdjustment,
  chronicleButtonBorderRadius,
  chronicleButtonOutlinedBackgroundOnHover,
  chronicleButtonCustomBackground,
  chronicleButtonCustomForeground,
  sectionHeaderPadding = {
    desktopPadding: { left: '24px', right: '24px', top: '40px', bottom: '0px' },
    mobilePadding: { left: '10px', right: '10px', top: '30px', bottom: '0px' }
  },
  sectionHeaderFontSize = {
    desktop: "60px",
    mobile: "33px"
  },
  sectionTextFontSize = {
    desktop: "1.14rem",
    mobile: "1rem"
  }
}) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setViewportWidth(sectionRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopThreshold]);

  const renderImages = () => {
    if (viewportWidth < oneImageBreakpoint) {
      return (
        <SingleImage 
          src={aboutUsImages[0]} 
          alt="About Us" 
          style={{ aspectRatio: '2 / 1', borderRadius: imageOuterBorderRadius }} 
        />
      );
    } else if (viewportWidth < twoImageBreakpoint) {
      return (
        <TwoImageGrid>
          <SquareImage src={aboutUsImages[3]} alt="About Us Image One" style={{ borderRadius: imageOuterBorderRadius }} />
          <SquareImage src={aboutUsImages[1]} alt="About Us Image Two" style={{ borderRadius: imageOuterBorderRadius }} />
        </TwoImageGrid>
      );
    } else {
      return (
        <DicedGrid 
          images={aboutUsImages} 
          onGridImageClick={onGridImageClick}
          onGridImageHover={onGridImageHover}
          viewportHeightMultiplier={dicedGridViewportHeightMultiplier}
          gridSizeAdjustment={dicedGridSizeAdjustment}
        />
      );
    }
  };

  return (
    <div ref={sectionRef} style={{ marginBottom: viewportWidth >= desktopThreshold ? spaceBelowDesktop : spaceBelowMobile }}>
      <StructuredBlock
        textColor={titleTextColor}
        desktopPadding={sectionHeaderPadding.desktopPadding}
        mobilePadding={sectionHeaderPadding.mobilePadding}
        desktopFontSize={sectionHeaderFontSize.desktop}
        mobileFontSize={sectionHeaderFontSize.mobile}
        desktopVersionBottomThreshold={desktopThreshold}
      >
        {titleText}
      </StructuredBlock>
      <SectionContainer
        desktopPadding={desktopPadding}
        mobilePadding={mobilePadding}
        desktopVersionBottomThreshold={desktopThreshold}
      >
        {viewportWidth >= twoImageBreakpoint ? (
          <BentoGrid style={{ gridTemplateColumns: \`\${dicedGridContainerWidth} 1fr\` }}>
            <ImageGridWrapper>{renderImages()}</ImageGridWrapper>
            <TextContainer>
              <StructuredBlock
                textColor={descriptionTextColor}
                desktopPadding={{ left: "0", right: "0", top: "0", bottom: "20" }}
                mobilePadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                desktopFontSize={sectionTextFontSize.desktop}
                mobileFontSize={sectionTextFontSize.mobile}
                overrideInternalCheck={true}
                externalMobileViewValue={viewportWidth < desktopThreshold}
              >
                {aboutUsDescription}
              </StructuredBlock>
              <ChronicleButton 
                text={buttonText}
                onClick={onButtonClick}
                hoverColor={chronicleButtonHoverColor}
                width={chronicleButtonWidth}
                outlined={chronicleButtonOutlined}
                outlinePaddingAdjustment={chronicleButtonOutlinePaddingAdjustment}
                borderRadius={chronicleButtonBorderRadius}
                outlinedButtonBackgroundOnHover={chronicleButtonOutlinedBackgroundOnHover}
                customBackground={chronicleButtonCustomBackground}
                customForeground={chronicleButtonCustomForeground}
              />
            </TextContainer>
          </BentoGrid>
        ) : (
          <div>
            {renderImages()}
            <TextContainer>
              <StructuredBlock
                textColor={descriptionTextColor}
                desktopPadding={{ left: "0", right: "0", top: "0", bottom: "20" }}
                mobilePadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                desktopFontSize={sectionTextFontSize.desktop}
                mobileFontSize={sectionTextFontSize.mobile}
                overrideInternalCheck={true}
                externalMobileViewValue={viewportWidth < desktopThreshold}
              >
                {aboutUsDescription}
              </StructuredBlock>
              <ChronicleButton 
                text={buttonText}
                onClick={onButtonClick}
                hoverColor={chronicleButtonHoverColor}
                width={chronicleButtonWidth}
                outlined={chronicleButtonOutlined}
                outlinePaddingAdjustment={chronicleButtonOutlinePaddingAdjustment}
                borderRadius={chronicleButtonBorderRadius}
                outlinedButtonBackgroundOnHover={chronicleButtonOutlinedBackgroundOnHover}
                customBackground={chronicleButtonCustomBackground}
                customForeground={chronicleButtonCustomForeground}
              />
            </TextContainer>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};

export default AboutUsSection;
`
  },
  {
    filename: 'DicedGrid.tsx',
    content: `'use client';

import React, { useEffect, useState } from 'react';

interface DicedGridProps {
  images: string[];
  onGridImageClick?: (index: number) => void;
  onGridImageHover?: (index: number) => void;
  viewportHeightMultiplier?: number;
  gridSizeAdjustment?: number;
}

const DicedGrid: React.FC<DicedGridProps> = ({
  images,
  onGridImageClick,
  onGridImageHover,
  viewportHeightMultiplier = 0.8,
  gridSizeAdjustment = -96,
}) => {
  const [gridSize, setGridSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const calculatedSize = window.innerHeight * viewportHeightMultiplier + gridSizeAdjustment;
      setGridSize(calculatedSize);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [viewportHeightMultiplier, gridSizeAdjustment]);

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      height: 'auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: \`\${gridSize}px\`,
        height: \`\${gridSize}px\`,
      }}>
        {images.slice(0, 4).reverse().map((image, index) => (
          <div key={index} style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            overflow: 'hidden',
            borderRadius: '20px',
          }}>
            <img
              src={image}
              alt={\`Image \${index + 1}\`}
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
    </div>
  );
};

export default DicedGrid;
`
  },
],
  dependencies: 'npm install styled-components --legacy-peer-deps\nChronicleButton\nStructuredBlock\nSectionContainer',
  credit: (
    <span>
      <a href="https://codepen.io/t_afif/pen/LEPBYvK" target="_blank" rel="noopener noreferrer" className="link">Inverted border-radius using CSS mask II</a> by <a href="https://codepen.io/t_afif" target="_blank" rel="noopener noreferrer" className="link">Temani Afif</a>
      <br />
      Used photos:
      <br />
      Photo by <a href="https://unsplash.com/@minimalsayan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Sayan Majhi</a> on <a href="https://unsplash.com/photos/a-cell-phone-headphones-a-keyboard-and-a-charger-on-a-LRPDGjzZAvA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@itsomidarmin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">omid armin</a> on <a href="https://unsplash.com/photos/black-iphone-4-beside-white-apple-wireless-keyboard-and-white-wireless-mouse-VYt7lu6KUWE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@rmrdnl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Daniel Romero</a> on <a href="https://unsplash.com/photos/black-and-red-laptop-computer-on-white-table-Z4_kN9ybLf4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@anckor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Julian O'hayon</a> on <a href="https://unsplash.com/photos/black-macbook-near-black-iphone-7-plus-and-black-apple-watch-HY3l4IeOc3E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
    </span>
  ),
}

export { metadata }