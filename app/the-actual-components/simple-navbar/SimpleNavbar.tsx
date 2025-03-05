"use client"
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import FancyNavBar from './FancyNavBar';

interface NavbarProps {
  desktopPadding: string;
  mobilePadding: string;
  desktopFont: string;
  mobileFont: string;
  desktopSubFont: string;
  mobileSubFont: string;
  displayNavigationThreshold: number;
  maxWidth?: string;
  onNavItemClick: (itemLabel: string) => void;
  appName: string;
  appSubInscription: string;
  phoneNumber: string;
  phoneSubInscription: string;
  items: { icon: React.ReactElement<{ style?: React.CSSProperties }>; label: string; }[];
  backgroundColor: string;
  iconForegroundColor: string;
  stripeColor: string;
  defaultTextColor: string;
  foregroundHoverColor: string;
  tooltipBackgroundColor: string;
  tooltipForegroundColor: string;
  activeIconColor: string;
  activeIconBackgroundColor: string;
  activeIconGlowColor: string;
  onAppNameClicked: () => void;
  onPhoneNumberClicked: () => void;
}

const SimpleNavbar: React.FC<NavbarProps> = ({
  desktopPadding,
  mobilePadding,
  desktopFont,
  mobileFont,
  desktopSubFont,
  mobileSubFont,
  displayNavigationThreshold,
  maxWidth = '100%',
  onNavItemClick,
  appName,
  appSubInscription,
  phoneNumber,
  phoneSubInscription,
  items,
  backgroundColor,
  iconForegroundColor,
  stripeColor,
  defaultTextColor,
  foregroundHoverColor,
  tooltipBackgroundColor,
  tooltipForegroundColor,
  activeIconColor,
  activeIconBackgroundColor,
  activeIconGlowColor,
  onAppNameClicked,
  onPhoneNumberClicked
}) => {
  const [isFancyNavBarVisible, setIsFancyNavBarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsFancyNavBarVisible(window.innerWidth >= displayNavigationThreshold);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [displayNavigationThreshold]);

  return (
    <StickyNavbarWrapper backgroundColor={backgroundColor}>
      <NavbarContainer
        desktopPadding={desktopPadding}
        mobilePadding={mobilePadding}
        desktopFont={desktopFont}
        mobileFont={mobileFont}
        desktopSubFont={desktopSubFont}
        mobileSubFont={mobileSubFont}
        maxWidth={maxWidth}
      >
        {/* Left Section */}
        <LeftSection desktopPadding={desktopPadding} mobilePadding={mobilePadding}>
          <AppNameContainer onClick={onAppNameClicked}>
            <AppName
              desktopFont={desktopFont}
              mobileFont={mobileFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {appName}
            </AppName>
          </AppNameContainer>
          <SubInscriptionContainer>
            <SubInscription
              desktopFont={desktopSubFont}
              mobileFont={mobileSubFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {appSubInscription}
            </SubInscription>
          </SubInscriptionContainer>
        </LeftSection>
        {/* Center Section */}
        <CenterSection>
          {isFancyNavBarVisible && (
            <FancyNavBar
              items={items}
              onItemClick={(index) => {
                const clickedItem = items[index].label;
                onNavItemClick(clickedItem);
              }}
              backgroundColor={backgroundColor}
              foregroundColor={iconForegroundColor}
              activeIconColor={activeIconColor}
              activeIconBackgroundColor={activeIconBackgroundColor}
              activeIconGlowColor={activeIconGlowColor}
              tooltipBackgroundColor={tooltipBackgroundColor}
              tooltipForegroundColor={tooltipForegroundColor}
            />
          )}
        </CenterSection>
        {/* Right Section */}
        <RightSection desktopPadding={desktopPadding} mobilePadding={mobilePadding}>
          <PhoneContainer onClick={onPhoneNumberClicked}>
            <PhoneNumber
              desktopFont={desktopFont}
              mobileFont={mobileFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {phoneNumber}
            </PhoneNumber>
          </PhoneContainer>
          <PhoneSubInscriptionContainer>
            <PhoneSubInscription
              desktopFont={desktopSubFont}
              mobileFont={mobileSubFont}
              themeColor={defaultTextColor}
              foregroundHoverColor={foregroundHoverColor}
            >
              {phoneSubInscription}
            </PhoneSubInscription>
          </PhoneSubInscriptionContainer>
        </RightSection>
        {/* Bottom Line */}
      </NavbarContainer>
      <BottomLine stripeColor={stripeColor} />
    </StickyNavbarWrapper>
  );
};

const StickyNavbarWrapper = styled.div<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background-color: ${(props) => props.backgroundColor};
`;

const NavbarContainer = styled.div<{
  desktopPadding?: string;
  mobilePadding?: string;
  desktopFont?: string;
  mobileFont?: string;
  desktopSubFont?: string;
  mobileSubFont?: string;
  maxWidth?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
  position: relative;
`;

const LeftSection = styled.div<{ desktopPadding?: string; mobilePadding?: string }>`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => props.desktopPadding};
  @media (max-width: 768px) {
    padding-left: ${(props) => props.mobilePadding};
  }
`;

const CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const RightSection = styled.div<{ desktopPadding?: string; mobilePadding?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: ${(props) => props.desktopPadding};
  @media (max-width: 768px) {
    padding-right: ${(props) => props.mobilePadding};
  }
`;

const AppNameContainer = styled.div`
  display: inline-block;
`;

const AppName = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>`
  font-size: ${(props) => props.desktopFont};
  font-weight: bold;
  color: ${(props) => props.themeColor};
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFont};
  }
  &:hover {
    color: ${(props) => props.foregroundHoverColor};
    cursor: pointer;
  }
`;

const SubInscriptionContainer = styled.div`
  display: inline-block;
`;

const SubInscription = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>`
  font-size: ${(props) => props.desktopFont};
  color: ${(props) => props.themeColor};
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFont};
  }
`;

const PhoneContainer = styled.div`
  display: inline-block;
`;

const PhoneNumber = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>`
  font-size: ${(props) => props.desktopFont};
  font-weight: bold;
  color: ${(props) => props.themeColor};
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFont};
  }
  &:hover {
    color: ${(props) => props.foregroundHoverColor};
    cursor: pointer;
  }
`;

const PhoneSubInscriptionContainer = styled.div`
  display: inline-block;
`;

const PhoneSubInscription = styled.span<{
  desktopFont?: string;
  mobileFont?: string;
  themeColor: string;
  foregroundHoverColor: string;
}>`
  font-size: ${(props) => props.desktopFont};
  color: ${(props) => props.themeColor};
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFont};
  }
`;

const BottomLine = styled.div<{ stripeColor: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${(props) => props.stripeColor};
`;

export default SimpleNavbar;