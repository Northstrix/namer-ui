import React from 'react';

interface GlowingCardProps {
  AccentColor: string;
  BackgroundColor: string;
  TextColor: string;
  BorderRadius: string;
  BorderWidth: string | number;
  Icon: React.ReactNode;
  IconHeight?: string | number;
  TopTextSize?: string | number;
  TopInscription: string;
  BigInscription: string;
  SmallInscription: string;
  BottomInscription: string;
  learnMoreLink?: string; // Link to open on bottom inscription click
  width?: string | number;
  height?: string | number;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  AccentColor,
  BackgroundColor,
  TextColor,
  BorderRadius,
  BorderWidth,
  Icon,
  IconHeight = "34px",
  TopTextSize = "25px",
  TopInscription,
  BigInscription,
  SmallInscription,
  BottomInscription,
  learnMoreLink,
  width = "387px",
  height = "467px",
}) => {
  
  // Calculate dimensions based on container size
  const baseWidth = parseFloat(width as string);
  const baseHeight = parseFloat(height as string);

  const desiredPaddingTopBottom = (31 / baseHeight) * baseHeight; // Proportional padding based on height
  const desiredPaddingLeftRight = (39 / baseWidth) * baseWidth; // Proportional padding based on width

  const cardRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseOver = () => {
      if (cardRef.current && textRef.current) {
        cardRef.current.style.backgroundColor = AccentColor;
        cardRef.current.style.boxShadow = `0 0 5px ${AccentColor}, 
        0 0 25px ${AccentColor}, 
        0 0 50px ${AccentColor}, 
        0 0 200px ${AccentColor}`;
        textRef.current.style.color = BackgroundColor;
      }
    };
  
    const handleMouseOut = () => {
      if (cardRef.current && textRef.current) {
        cardRef.current.style.backgroundColor = BackgroundColor;
        cardRef.current.style.boxShadow = 'none';
        textRef.current.style.color = TextColor;
      }
    };
  
    // Initialize the styles
    handleMouseOut();
  
    if (cardRef.current) {
      cardRef.current.addEventListener('mouseover', handleMouseOver);
      cardRef.current.addEventListener('mouseout', handleMouseOut);
    }
  
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mouseover', handleMouseOver);
        cardRef.current.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [AccentColor, BackgroundColor, TextColor]);  

const handleBottomInscriptionClick = () => {
    if (learnMoreLink) {
      window.open(learnMoreLink, '_blank'); // Open link in new tab
    }
};

const bigInscriptionFontSize = (0.7 * baseWidth + 0.3 * baseHeight) / (baseWidth / (96 * (baseWidth / 387))); // For Big Inscription
const smallInscriptionFontSize = (0.7 * baseWidth + 0.3 * baseHeight) / (baseWidth / (18 * (baseWidth / 387))); // For Small Inscription
const bottomInscriptionFontSize = (0.7 * baseWidth + 0.3 * baseHeight) / (baseWidth / (12 * (baseWidth / 387))); // For Bottom Inscription

// Calculate margins based on both container dimensions in reverse manner
const topMarginBigInscription = ((15 / baseHeight) * baseHeight + (15 / baseWidth) * baseWidth); // Average margin for Big Inscription
const bottomMarginBigInscription = ((-17 / baseHeight) * baseHeight + (-17 / baseWidth) * baseWidth); // Negative margin for Big Inscription

return (
    <div
      ref={cardRef}
      style={{
        width: width,
        height: height,
        borderWidth: BorderWidth,
        borderColor: AccentColor,
        borderRadius: BorderRadius,
        transition: 'background-color 0.3s, box-shadow 0.3s', // Add transition for background color and box shadow
        backgroundColor: BackgroundColor,
        display: 'flex',
        flexDirection: 'column',
      }}
      className="overflow-hidden shadow-lg"
    >
      <div 
          ref={textRef} 
          style={{ 
              padding: `${desiredPaddingTopBottom}px ${desiredPaddingLeftRight}px`, // Apply dynamic padding
              flexGrow: '1', // Allow this section to grow and fill space
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Center content vertically
              transition: 'color 0.3s', // Add transition for text color
          }} 
          className="font-family-Montserrat"
      >
        
        {/* Container for icon and top inscription */}
        <div className="icon-container" style={{ display: 'flex', alignItems: 'center' }}>
          {Icon && (
            <div style={{ marginRight: '10px', fontSize: IconHeight }}>
              {Icon}
            </div>
          )}
          <span style={{ fontSize: TopTextSize, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            {TopInscription}
          </span>
        </div>
        
        <h1 style={{ fontSize: bigInscriptionFontSize, marginTop: `${topMarginBigInscription}px`, marginBottom: bottomMarginBigInscription, fontWeight: 'bold' }} className="d-inline-block">{BigInscription}</h1>
        
        <h3 style={{ fontSize: smallInscriptionFontSize, marginTop: `${topMarginBigInscription}px`, marginBottom: 'auto', fontWeight: 'bold' }} className="d-inline-block">{SmallInscription}</h3>
        
        <p
          style={{
              marginTop: 'auto', // Push it to the bottom
              textAlign: 'left',
              fontSize: bottomInscriptionFontSize,
              fontWeight: 'bold', // Make all text bold
          }}
          className="text-base cursor-pointer text-center"
          onClick={handleBottomInscriptionClick}
      >
          {BottomInscription}
      </p>
      </div>
    </div>
);
};

export default GlowingCard;