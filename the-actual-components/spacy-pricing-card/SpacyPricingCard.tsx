"use client";

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
}>`
  width: 100%;
  font-family: "Arial", "Alef", sans-serif;
  max-width: 297px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: ${props => props.containerRounding};
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
  
  background-image: linear-gradient(${props => props.bgColor}, ${props => props.bgColor}),
                    linear-gradient(calc(var(--rotation, 0deg)), 
                      ${props => props.borderColor || props.glowColor} 0%, 
                      ${props => props.borderColor || props.glowColor} 20%, 
                      transparent 80%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Card = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  border-radius: inherit;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Header = styled.div<{ backgroundColor: string; borderColor?: string }>`
  background-color: ${props => props.backgroundColor};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: ${props => props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
  width: 100%;
  padding: 40px;
  box-shadow: inset 15px 20px 30px 20px rgba(255, 255, 255, 0.06);
`;

const Title = styled.h3<{ color: string; fontSize: string; textAlign: string; isRTL: boolean }>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  margin-bottom: 10px;
  text-align: ${props => props.textAlign};
  direction: ${props => props.isRTL ? 'rtl' : 'ltr'};
`;

const Price = styled.p<{ color: string; fontSize: string; textAlign: string; isRTL: boolean }>`
  font-size: ${props => props.fontSize};
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  direction: ${props => props.isRTL ? 'rtl' : 'ltr'};
`;

const Description = styled.p<{ color: string; fontSize: string; textAlign: string; isRTL: boolean }>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  direction: ${props => props.isRTL ? 'rtl' : 'ltr'};
  margin-bottom: 20px;
`;

const FeatureList = styled.ul<{ isRTL: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  direction: ${props => props.isRTL ? 'rtl' : 'ltr'};
`;

const FeatureItem = styled.li<{ color: string; checkmarkColor: string; fontSize: string; textAlign: string; featureAlign: string; isRTL: boolean }>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.featureAlign === 'center' ? 'center' : props.featureAlign === 'right' ? 'flex-end' : 'flex-start'};
  direction: ${props => props.isRTL ? 'rtl' : 'ltr'};

  &::before {
    content: attr(data-symbol);
    color: ${props => props.checkmarkColor};
    margin-right: 10px;
    margin-left: 10px;
    order: 0;
  }
`;

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
      card.style.setProperty("--rotation", `${angle}rad`);
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