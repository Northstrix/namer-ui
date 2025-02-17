"use client";
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface SocialIcon {
  name: string;
  icon: React.ReactNode;
  link: string;
  backgroundColor: string;
  foregroundColor: string;
}

interface BlogPostHeaderProps {
  featuredImageSrc: string;
  featuredImageWidth: string;
  tagText: string;
  titleText: string;
  authorImageSrc: string;
  authorName: string;
  authorLink: string;
  date: string;
  readTime: string;
  socialIcons: SocialIcon[];
  categoryForeground?: string;
  textColor?: string;
  titleSize?: string;
  imageBorderRadius?: string;
  headerMaxWidth?: string;
  spacing?: string;
  maxImageHeight?: string;
  desktopBreakpoint?: number;
  imageShadowColor?: string;
  isRTL?: boolean;
  onHover?: () => void;
  onClick?: () => void;
  categoryClicked?: (category: string) => void;
}

const isRTLCheck = (text: string): boolean => {
  return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  featuredImageSrc,
  featuredImageWidth,
  tagText,
  titleText,
  authorImageSrc,
  authorName,
  authorLink,
  date,
  readTime,
  socialIcons,
  categoryForeground = '#404',
  textColor = '#334',
  titleSize = '3em',
  imageBorderRadius = '12px',
  headerMaxWidth = '1536px',
  spacing = '20px',
  maxImageHeight = '400px',
  desktopBreakpoint = 1200,
  imageShadowColor = '#404',
  isRTL = false,
  onHover,
  onClick,
  categoryClicked,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    onHover && onHover();
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setIsMobileView(containerRef.current.offsetWidth < desktopBreakpoint);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    handleResize();

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [desktopBreakpoint]);

  return (
    <HeaderContainer
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      textColor={textColor}
      maxWidth={headerMaxWidth}
      $isMobileView={isMobileView}
      $isRTL={isRTL}
    >
      <Content spacing={spacing} $isMobileView={isMobileView} $isRTL={isRTL}>
        {isMobileView ? (
          <>
            <MobileTopSection>
                <Tag onClick={() => categoryClicked && categoryClicked(tagText)} $isRTL={isRTLCheck(tagText)} categoryForeground={categoryForeground}>
                    {tagText}
                </Tag>

              <Title fontSize={titleSize} $isRTL={isRTLCheck(titleText)}>{titleText}</Title>
            </MobileTopSection>
            <FeaturedImage 
              src={featuredImageSrc} 
              alt="" 
              borderRadius={imageBorderRadius}
              width="100%"
              maxHeight={maxImageHeight}
              $isRTL={isRTL}
              shadowColor={imageShadowColor}
            />
            <MobileInfoSection $isRTL={isRTL} style={{ alignSelf: 'flex-start' }}>
                <Meta style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
                    <Author 
                        $isRTL={isRTLCheck(authorName)}
                        href={authorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {isRTL ? (
                            <>
                            {authorName}
                            <AuthorImage src={authorImageSrc} alt={authorName} />
                        </>
                        ) : (
                            <>
                                <AuthorImage src={authorImageSrc} alt={authorName} />
                                {authorName}
                            </>
                        )}
                </Author>
                <Separator>|</Separator>
                <span dir={isRTLCheck(date) ? 'rtl' : 'ltr'}>{date}</span>
                <Separator>|</Separator>
                <span dir={isRTLCheck(readTime) ? 'rtl' : 'ltr'}>{readTime}</span>
              </Meta>
              <Social $isRTL={isRTL} style={{ alignSelf: 'flex-start' }}>
                {socialIcons.map((icon, index) => (
                  <SocialLink 
                    key={index} 
                    href={icon.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    backgroundColor={icon.backgroundColor}
                    foregroundColor={icon.foregroundColor}
                    $isRTL={isRTL}
                  >
                    {icon.icon}
                  </SocialLink>
                ))}
              </Social>
            </MobileInfoSection>
          </>
        ) : (
          <>
            {isRTL ? (
              <>
                <FeaturedImage 
                  src={featuredImageSrc} 
                  alt="" 
                  borderRadius={imageBorderRadius}
                  width={featuredImageWidth}
                  maxHeight={maxImageHeight}
                  $isRTL={isRTL}
                  shadowColor={imageShadowColor}
                />
                <Info $isRTL={isRTL}>
                <Tag onClick={() => categoryClicked && categoryClicked(tagText)} $isRTL={isRTLCheck(tagText)} categoryForeground={categoryForeground}>{tagText}</Tag>
                  <Title fontSize={titleSize} $isRTL={isRTLCheck(titleText)}>{titleText}</Title>
                  <Meta>
                    <Author 
                        $isRTL={isRTLCheck(authorName)}
                        href={authorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {isRTL ? (
                            <>
                            {authorName}
                            <AuthorImage src={authorImageSrc} alt={authorName} />
                        </>
                        ) : (
                            <>
                                <AuthorImage src={authorImageSrc} alt={authorName} />
                                {authorName}
                            </>
                        )}
                    </Author>
                    <Separator>|</Separator>
                    <span dir={isRTLCheck(date) ? 'rtl' : 'ltr'}>{date}</span>
                    <Separator>|</Separator>
                    <span dir={isRTLCheck(readTime) ? 'rtl' : 'ltr'}>{readTime}</span>
                  </Meta>
                  <Social $isRTL={isRTL}>
                    {socialIcons.map((icon, index) => (
                      <SocialLink 
                        key={index} 
                        href={icon.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        backgroundColor={icon.backgroundColor}
                        foregroundColor={icon.foregroundColor}
                        $isRTL={isRTL}
                      >
                        {icon.icon}
                      </SocialLink>
                    ))}
                  </Social>
                </Info>
              </>
            ) : (
              <>
                <FeaturedImage 
                  src={featuredImageSrc} 
                  alt="" 
                  borderRadius={imageBorderRadius}
                  width={featuredImageWidth}
                  maxHeight={maxImageHeight}
                  $isRTL={isRTL}
                  shadowColor={imageShadowColor}
                />
                <Info $isRTL={isRTL}>
                <Tag onClick={() => categoryClicked && categoryClicked(tagText)} $isRTL={isRTLCheck(tagText)} categoryForeground={categoryForeground}>{tagText}</Tag>
                  <Title fontSize={titleSize} $isRTL={isRTLCheck(titleText)}>{titleText}</Title>
                  <Meta>
                      <Author 
                        $isRTL={isRTLCheck(authorName)}
                        href={authorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <AuthorImage src={authorImageSrc} alt={authorName} />
                      {authorName}
                    </Author>
                    <Separator>|</Separator>
                    <span dir={isRTLCheck(date) ? 'rtl' : 'ltr'}>{date}</span>
                    <Separator>|</Separator>
                    <span dir={isRTLCheck(readTime) ? 'rtl' : 'ltr'}>{readTime}</span>
                  </Meta>
                  <Social $isRTL={isRTL}>
                    {socialIcons.map((icon, index) => (
                      <SocialLink 
                        key={index} 
                        href={icon.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        backgroundColor={icon.backgroundColor}
                        foregroundColor={icon.foregroundColor}
                        $isRTL={isRTL}
                      >
                        {icon.icon}
                      </SocialLink>
                    ))}
                  </Social>
                </Info>
              </>
            )}
          </>
        )}
      </Content>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ textColor: string; maxWidth: string; $isMobileView: boolean; $isRTL: boolean }>`
  position: relative;
  color: ${props => props.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.$isMobileView ? '2em 1em' : '3em 1em'};
  box-shadow: 0 2px 0 #4041;
  z-index: 2;
  width: 100%;
  max-width: ${props => props.maxWidth};
  box-sizing: border-box;
  margin: auto;
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
`;

const Content = styled.div<{ spacing: string; $isMobileView: boolean; $isRTL: boolean }>`
  display: flex;
  flex-direction: ${props => props.$isMobileView ? 'column' : 'row'};
  align-items: ${props => props.$isMobileView ? 'stretch' : 'center'};
  justify-content: center;
  gap: ${props => props.spacing};
  width: 100%;
`;

const FeaturedImage = styled.img<{ borderRadius: string; width: string; maxHeight: string; $isRTL: boolean; shadowColor?: string }>`
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  border-radius: ${props => props.borderRadius};
  box-shadow: ${props => props.$isRTL 
    ? `10px 10px 10px ${props.shadowColor || '#6366'}`
    : `-10px 10px 10px ${props.shadowColor || '#6366'}`};
  object-fit: cover;
`;

const Info = styled.div<{ $isRTL: boolean }>`
  flex: 1;
  text-align: ${props => props.$isRTL ? 'right' : 'left'};
`;

const MobileTopSection = styled.div`
  text-align: center;
  margin-bottom: 1em;
`;

const MobileInfoSection = styled.div<{ $isRTL: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$isRTL ? 'flex-end' : 'flex-start'};
  margin-top: 1em;
`;

const Tag = styled.a<{ $isRTL: boolean; categoryForeground?: string}>`
  margin-top: 2em;
  display: block;
  cursor: pointer;
  color: ${props => props.categoryForeground || '#404'};
  text-decoration: none;
  font-weight: 600;
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
`;

const Title = styled.h1<{ fontSize: string; $isRTL: boolean }>`
  font-size: ${props => props.fontSize};
  font-weight: bold;
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
`;

const Meta = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

const Author = styled.a<{ $isRTL: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  flex-direction: ${props => props.$isRTL ? 'row-reverse' : 'row'};
  text-decoration: none;
  color: inherit;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const Separator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Social = styled.div<{ $isRTL: boolean }>`
  display: flex;
  flex-direction: ${props => props.$isRTL ? 'row-reverse' : 'row'};
  margin: 2em 0;
  gap: 1em;
  justify-content: ${props => props.$isRTL ? 'flex-end' : 'flex-start'};
`;

const SocialLink = styled.a<{ backgroundColor: string; foregroundColor: string; $isRTL: boolean }>`
  width: 50px;
  height: 50px;
  background: ${props => props.backgroundColor};
  border-radius: 50%;
  box-shadow: ${props => props.$isRTL ? '-6px 6px 6px #4041' : '6px 6px 6px #4041'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.$isRTL ? '-6px 6px 6px #4043' : '6px 6px 6px #4043'};
  }

  svg {
    width: 70%;
    height: 70%;
    color: ${props => props.foregroundColor};
  }
`;

export default BlogPostHeader;
