'use client'


const metadata = {
  usage: `// Path to the "SpacyPricingCard.tsx" file
import SpacyPricingCard from '@/app/the-actual-components/spacy-pricing-card/SpacyPricingCard'

<div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <SpacyPricingCard
    planName="Personal Plan"
    price="$9.99/month"
    description="The essentials"
    features={[
      { text: "50GB Secure Storage" },
      { text: "Basic Computation Engine" },
      { text: "Data Visualization Tools" }
    ]}
    onChoosePlan={() => console.log("Personal plan selected")}
  />

  <SpacyPricingCard
    planName="CloudCompute Pro"
    price="$159.99/month"
    description="Advanced cloud computing solution"
    features={[
      { text: "Unlimited Data Storage" },
      { text: "High-Performance Computing" },
      { text: "Real-time Data Processing" }
    ]}
    backgroundColor="#0f172a"
    headerBackgroundColor="#1e293b"
    topTextColor="#38bdf8"
    priceColor="#f1f5f9"
    descriptionColor="#94a3b8"
    featureColor="#e2e8f0"
    checkmarkColor="#22d3ee"
    borderColor="#38bdf8"
    containerRounding="20px"
    onChoosePlan={() => console.log("CloudCompute Pro plan selected")}
  />

  <SpacyPricingCard
    planName="תוכנית מתחילים"
    price="₪49.99/חודש"
    description="פתרון ענן בסיסי לעסקים קטנים"
    features={[
      { text: "עד 5 משתמשים" },
      { text: "תכונות מתקדמות" },
      { text: "10 GB אחסון" },
      { text: "תמיכה בדוא״ל" },
      { text: "גיבוי יומי" }
    ]}
    backgroundColor="#1e3a8a"
    headerBackgroundColor="#1e40af"
    topTextColor="#93c5fd"
    priceColor="#ffffff"
    descriptionColor="#bfdbfe"
    featureColor="#dbeafe"
    checkmarkColor="#3b82f6"
    borderColor="#60a5fa"
    glowColor="#2563eb"
    containerRounding="2.25em"
    buttonVariant="outer"
    buttonText="התחל עכשיו"
    featureAlign="center"
    isRTL={true}
    onChoosePlan={() => console.log('Starter Plan clicked')}
  />

  <SpacyPricingCard
    planName="Erdbeerifründe Abo"
    price="CHF 39.99/Monat"
    description="Frische Erdbeeri direkt zu Ihne hei"
    features={[
      { text: "500g Erdbeeri wöchentlich" },
      { text: "Usgewählti Sorte" },
      { text: "Lieferig innerhalb vo 24 Stunde" },
      { text: "Rezept-Idee im Päckli" }
    ]}
    backgroundColor="#fce4ec"
    headerBackgroundColor="#f8bbd0"
    topTextColor="#ad1457"
    priceColor="#880e4f"
    descriptionColor="#ad1457"
    featureColor="#c2185b"
    borderColor="#f48fb1"
    glowColor="#f06292"
    containerRounding="8px"
    buttonVariant="inner"
    buttonRounding="200px"
    checkSymbol="🍓"
    buttonText="Abonniere jetz!"
    onChoosePlan={() => console.log('Monthly strawberry delivery subscription clicked')}
  />
</div>

// Note: The SpacyPricingCard component accepts the following props:
// - planName: string (required) - The name of the pricing plan.
// - price: string (required) - The price of the plan.
// - description: string (required) - A description of the plan.
// - features: PlanFeature[] (required) - An array of features for the plan.
// - buttonText: string (optional) - Text for the call-to-action button (default: "Choose Plan").
// - isRTL: boolean (optional) - Whether to use right-to-left text direction (default: false).
// - textAlign: 'left' | 'center' | 'right' (optional) - Text alignment (default: 'center').
// - featureAlign: 'left' | 'center' | 'right' (optional) - Feature list alignment (default: 'left').
// - backgroundColor: string (optional) - Background color of the card (default: '#000028').
// - headerBackgroundColor: string (optional) - Background color of the header (default: '#000028').
// - topTextColor: string (optional) - Color of the plan name text (default: '#e1e1e7').
// - priceColor: string (optional) - Color of the price text (default: '#f7f7f7').
// - descriptionColor: string (optional) - Color of the description text (default: '#c7c7cf').
// - featureColor: string (optional) - Color of the feature text (default: '#b7b7b7').
// - checkmarkColor: string (optional) - Color of the checkmark symbol (default: '#5f39fe').
// - borderColor: string (optional) - Color of the card border.
// - glowColor: string (optional) - Color of the glow effect (default: '#5f39fe').
// - titleFontSize: string (optional) - Font size of the plan name (default: '18px').
// - priceFontSize: string (optional) - Font size of the price (default: '24px').
// - descriptionFontSize: string (optional) - Font size of the description (default: '14px').
// - featureFontSize: string (optional) - Font size of the features (default: '14px').
// - buttonFontSize: string (optional) - Font size of the button text (default: '16px').
// - checkSymbol: string (optional) - Symbol to use for feature checkmarks (default: '✔').
// - containerRounding: string (optional) - Border radius of the card container (default: '15px').
// - buttonRounding: string (optional) - Border radius of the button (default: '10px').
// - buttonVariant: 'outer' | 'inner' (optional) - Style variant for the button (default: 'outer').
// - buttonIsBold: boolean (optional) - Whether the button text should be bold (default: true).
// - onChoosePlan: () => void (optional) - Callback function when the plan is chosen.
`,
code: [
  {
    filename: 'SpacyPricingCard.tsx',
    content: `"use client";

import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SpaceButton from '@/app/the-actual-components/space-button/SpaceButton';

interface PlanFeature {
  text: string;
}

interface SpacyPricingCardProps {
  planName: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText?: string;
  isRTL?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  featureAlign?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  headerBackgroundColor?: string;
  topTextColor?: string;
  priceColor?: string;
  descriptionColor?: string;
  featureColor?: string;
  checkmarkColor?: string;
  borderColor?: string;
  glowColor?: string;
  titleFontSize?: string;
  priceFontSize?: string;
  descriptionFontSize?: string;
  featureFontSize?: string;
  buttonFontSize?: string;
  checkSymbol?: string;
  containerRounding?: string;
  buttonRounding?: string;
  buttonVariant?: 'outer' | 'inner';
  buttonIsBold?: boolean;
  onChoosePlan?: () => void;
}

const CardContainer = styled.div<{ 
  borderColor?: string; 
  glowColor: string; 
  bgColor: string;
  containerRounding: string;
}>\`
  width: 100%;
  font-family: "Arial", "Alef", sans-serif;
  max-width: 297px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: \${props => props.containerRounding};
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
  
  background-image: linear-gradient(\${props => props.bgColor}, \${props => props.bgColor}),
                    linear-gradient(calc(var(--rotation, 0deg)), 
                      \${props => props.borderColor || props.glowColor} 0%, 
                      \${props => props.borderColor || props.glowColor} 20%, 
                      transparent 80%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
  }
\`;

const Card = styled.div<{ backgroundColor: string }>\`
  background-color: \${props => props.backgroundColor};
  border-radius: inherit;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
\`;

const Header = styled.div<{ backgroundColor: string; borderColor?: string }>\`
  background-color: \${props => props.backgroundColor};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: \${props => props.borderColor ? \`1px solid \${props.borderColor}\` : 'none'};
  width: 100%;
  padding: 40px;
  box-shadow: inset 15px 20px 30px 20px rgba(255, 255, 255, 0.06);
\`;

const Title = styled.h3<{ color: string; fontSize: string; textAlign: string; isRTL: boolean }>\`
  font-size: \${props => props.fontSize};
  color: \${props => props.color};
  margin-bottom: 10px;
  text-align: \${props => props.textAlign};
  direction: \${props => props.isRTL ? 'rtl' : 'ltr'};
\`;

const Price = styled.p<{ color: string; fontSize: string; textAlign: string; isRTL: boolean }>\`
  font-size: \${props => props.fontSize};
  font-weight: bold;
  margin-bottom: 10px;
  color: \${props => props.color};
  text-align: \${props => props.textAlign};
  direction: \${props => props.isRTL ? 'rtl' : 'ltr'};
\`;

const Description = styled.p<{ color: string; fontSize: string; textAlign: string; isRTL: boolean }>\`
  font-size: \${props => props.fontSize};
  color: \${props => props.color};
  text-align: \${props => props.textAlign};
  direction: \${props => props.isRTL ? 'rtl' : 'ltr'};
  margin-bottom: 20px;
\`;

const FeatureList = styled.ul<{ isRTL: boolean }>\`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  direction: \${props => props.isRTL ? 'rtl' : 'ltr'};
\`;

const FeatureItem = styled.li<{ color: string; checkmarkColor: string; fontSize: string; textAlign: string; featureAlign: string; isRTL: boolean }>\`
  font-size: \${props => props.fontSize};
  color: \${props => props.color};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: \${props => props.featureAlign === 'center' ? 'center' : props.featureAlign === 'right' ? 'flex-end' : 'flex-start'};
  direction: \${props => props.isRTL ? 'rtl' : 'ltr'};

  &::before {
    content: attr(data-symbol);
    color: \${props => props.checkmarkColor};
    margin-right: 10px;
    margin-left: 10px;
    order: 0;
  }
\`;

export const SpacyPricingCard: React.FC<SpacyPricingCardProps> = ({
  planName,
  price,
  description,
  features,
  buttonText = "Choose Plan",
  isRTL = false,
  textAlign = 'center',
  featureAlign = 'left',
  backgroundColor = '#000028',
  headerBackgroundColor = '#000028',
  topTextColor = '#e1e1e7',
  priceColor = '#f7f7f7',
  descriptionColor = '#c7c7cf',
  featureColor = '#b7b7b7',
  checkmarkColor = '#5f39fe',
  borderColor,
  glowColor = '#5f39fe',
  titleFontSize = '18px',
  priceFontSize = '24px',
  descriptionFontSize = '14px',
  featureFontSize = '14px',
  buttonFontSize = '16px',
  checkSymbol = '✔',
  containerRounding = '15px',
  buttonRounding = '10px',
  buttonVariant = 'outer',
  buttonIsBold = true,
  onChoosePlan
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(-x, y);
      card.style.setProperty("--rotation", \`\${angle}rad\`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CardContainer 
      ref={cardRef}
      borderColor={borderColor} 
      glowColor={glowColor}
      bgColor={backgroundColor}
      containerRounding={containerRounding}
    >
      <Card backgroundColor={backgroundColor}>
        <Header backgroundColor={headerBackgroundColor} borderColor={borderColor}>
          <Title color={topTextColor} fontSize={titleFontSize} textAlign={textAlign} isRTL={isRTL}>{planName}</Title>
          <Price color={priceColor} fontSize={priceFontSize} textAlign={textAlign} isRTL={isRTL}>{price}</Price>
          <Description color={descriptionColor} fontSize={descriptionFontSize} textAlign={textAlign} isRTL={isRTL}>{description}</Description>
          <SpaceButton 
            inscription={buttonText}
            variant={buttonVariant}
            borderRadius={buttonRounding}
            fontSize={buttonFontSize}
            isBold={buttonIsBold}
            onClick={onChoosePlan}
          />
        </Header>
        <FeatureList isRTL={isRTL}>
            {features.map((feature, index) => (
                <FeatureItem 
                key={index} 
                color={featureColor} 
                checkmarkColor={checkmarkColor}
                fontSize={featureFontSize}
                textAlign={textAlign}
                featureAlign={featureAlign}
                isRTL={isRTL}
                data-symbol={checkSymbol}
                >
                {feature.text}
                </FeatureItem>
            ))}
        </FeatureList>
      </Card>
    </CardContainer>
  );
};

export default SpacyPricingCard;
`
  },
],
  dependencies: `npm install styled-components --legacy-peer-deps
npm install @fontsource/alef --legacy-peer-deps
Space Button
`,
  credit: (
    <span>
      <a href="https://codepen.io/abansfp/pen/xbKWYqj" target="_blank" rel="noopener noreferrer" className="link">Animated premium plan</a> by <a href="https://codepen.io/abansfp" target="_blank" rel="noopener noreferrer" className="link">Abansfp</a>
      <br />
      <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="link">Vercel app border hover effect</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
    </span>
  ),
}

export { metadata }