'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "GlowingCard.tsx" file
import GlowingCard from '@/app/the-actual-components/glowing-card/GlowingCard'

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const [hoveredCard, setHoveredCard] = useState<'github' | 'medium' | 'instructables' | null>(null);

<div className="bg-[#222230] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center relative">
  <div
    onMouseEnter={() => setHoveredCard('github')}
    onMouseLeave={() => setHoveredCard(null)}
    style={{ zIndex: hoveredCard === 'github' ? 9999 : 1 }}
  >
    <GlowingCard
      AccentColor="#156ef6"
      BackgroundColor="#050505"
      TextColor="#f7f7ff"
      BorderRadius="2.25em"
      BorderWidth="4px"
      Icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
      TopInscription="GitHub"
      BigInscription="70+"
      SmallInscription="Repositories"
      BottomInscription="Learn More ➔"
      learnMoreLink="https://github.com/Northstrix"
      width="387px"
      height="467px"
    />
  </div>
  
  <div
    onMouseEnter={() => setHoveredCard('medium')}
    onMouseLeave={() => setHoveredCard(null)}
    style={{ zIndex: hoveredCard === 'medium' ? 9999 : 1 }}
  >
    <GlowingCard
      AccentColor="#8f10f6"
      BackgroundColor="#050505"
      TextColor="#f0f0f1"
      BorderRadius="4px"
      BorderWidth="2px"
      Icon={<FontAwesomeIcon icon={faMedium} size="lg" />}
      IconHeight="52px"
      TopTextSize="40px"
      TopInscription="Medium"
      BigInscription=">30"
      SmallInscription="Articles"
      BottomInscription="Read Now"
      learnMoreLink="https://medium.com/@Northstrix"
      width="387px"
      height="467px"
    />
  </div>
  
  <div
    onMouseEnter={() => setHoveredCard('instructables')}
    onMouseLeave={() => setHoveredCard(null)}
    style={{ zIndex: hoveredCard === 'instructables' ? 9999 : 1 }}
  >
    <GlowingCard
      AccentColor="#fc6800"
      BackgroundColor="#eeeeee"
      TextColor="#161616"
      BorderRadius="4em"
      BorderWidth="3px"
      Icon={<FontAwesomeIcon icon={faTools} size="lg" />}
      IconHeight="46px"
      TopTextSize="34px"
      TopInscription="Instructables"
      BigInscription=">30"
      SmallInscription="Tutorials"
      BottomInscription="Click here to visit the Instructables page"
      learnMoreLink="https://www.instructables.com/member/Northstrix/instructables/"
      width="360px"
      height="376px"
    />
  </div>
</div>

// Note: The GlowingCard component accepts the following props:
// - AccentColor: string (required) - The color used for accents and hover effects on the card.
// - BackgroundColor: string (required) - The background color of the card.
// - TextColor: string (required) - The color of the text displayed on the card.
// - BorderRadius: string (required) - The border radius applied to the card, controlling its roundness.
// - BorderWidth: string | number (required) - The width of the card's border.
// - Icon: React.ReactNode (required) - A React node representing the icon to display in the card.
// - IconHeight: string | number (optional) - The height of the icon; defaults to "34px" if not provided.
// - TopTextSize: string | number (optional) - The height of the icon-adjacent text; defaults to "25px" if not provided.
// - TopInscription: string (required) - The text displayed at the top of the card, usually indicating the category or title.
// - BigInscription: string (required) - The main highlight text displayed prominently in the center of the card.
// - SmallInscription: string (required) - Additional descriptive text displayed below the big inscription.
// - BottomInscription: string (required) - The clickable text at the bottom of the card, typically prompting user action (e.g., "Learn More").
// - learnMoreLink: string (optional) - A URL that opens in a new tab when the bottom inscription is clicked. This provides a link for users to learn more about the topic or service represented by the card.
// - width: string | number (optional) - The width of the card; defaults to "387px" if not provided.
// - height: string | number (optional) - The height of the card; defaults to "467px" if not provided.
`,
code: [
  {
    filename: 'GlowingCard.tsx',
    content: `import React from 'react';

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
        cardRef.current.style.boxShadow = \`0 0 5px \${AccentColor}, 
        0 0 25px \${AccentColor}, 
        0 0 50px \${AccentColor}, 
        0 0 200px \${AccentColor}\`;
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
              padding: \`\${desiredPaddingTopBottom}px \${desiredPaddingLeftRight}px\`, // Apply dynamic padding
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
        
        <h1 style={{ fontSize: bigInscriptionFontSize, marginTop: \`\${topMarginBigInscription}px\`, marginBottom: bottomMarginBigInscription, fontWeight: 'bold' }} className="d-inline-block">{BigInscription}</h1>
        
        <h3 style={{ fontSize: smallInscriptionFontSize, marginTop: \`\${topMarginBigInscription}px\`, marginBottom: 'auto', fontWeight: 'bold' }} className="d-inline-block">{SmallInscription}</h3>
        
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
`
  },
],
  dependencies: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/HighFlyer/pen/WNXRZBv" target="_blank" rel="noopener noreferrer" className="link">Neon Button</a> by <a href="https://codepen.io/HighFlyer" target="_blank" rel="noopener noreferrer" className="link">Thea</a>
    </span>
  ),
}

export { metadata }