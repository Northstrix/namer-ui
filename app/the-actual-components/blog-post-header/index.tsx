'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "BlogPostHeader.tsx" file
import BlogPostHeader from '@/app/the-actual-components/blog-post-header/BlogPostHeader'

// Import icons
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components'; // Requirement for a custom Nuance "svg" icon

interface NuanceIconProps {
  size?: string;
  backgroundColor?: string;
}

const NuanceIconContainer = styled.div<{ backgroundColor?: string; size?: string }>\`
  background-color: \${props => props.backgroundColor || 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: \${props => props.size || '1em'};
  height: \${props => props.size || '1em'};
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    outline: none;
  }
\`;

const NuanceIconImage = styled.img\`
  width: 100%;
  height: 100%;
  object-fit: cover;
\`;

const NuanceIcon: React.FC<NuanceIconProps> = ({ size, backgroundColor }) => {
  return (
    <NuanceIconContainer backgroundColor={backgroundColor} size={size}>
      <NuanceIconImage src="https://nuance.xyz/assets/images/loaders/nuance-loader.gif" alt="Nuance Logo" />
    </NuanceIconContainer>
  );
};

<div className="bg-[#f0f0f1] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <BlogPostHeader
    featuredImageSrc="https://raw.githubusercontent.com/Northstrix/Midbar/main/STM32F401CCU6_and_Arduino_Uno_Version/V1.0/Pictures/IMG_20230504_145722.jpg"
    featuredImageWidth="50%"
    tagText="Personal Data Confidentiality"
    titleText="Midbar (STM32F401CCU6 + Arduino Uno Version)"
    authorImageSrc="https://avatars.githubusercontent.com/u/43994704?v=4"
    authorName="Maxim Bortnikov"
    authorLink="http://maxim-bortnikov.netlify.app/"
    date="Jun 19, 2023"
    readTime="14 min Read"
    socialIcons={[
      {
        name: 'GitHub',
        icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
        link: 'https://github.com/Northstrix/Midbar',
        backgroundColor: '#333',
        foregroundColor: '#fff'
      },
      {
        name: 'Medium',
        icon: <FontAwesomeIcon icon={faMedium} size="lg" />,
        link: 'https://medium.com/@Northstrix/midbar-stm32f401ccu6-arduino-uno-version-1b95657d6d38',
        backgroundColor: '#000',
        foregroundColor: '#fff'
      },
      {
        name: 'Instructables',
        icon: <FontAwesomeIcon icon={faTools} size="lg" />,
        link: 'https://www.instructables.com/Midbar-STM32F401CCU6-Arduino-Uno-Version/',
        backgroundColor: '#fc6800',
        foregroundColor: '#fff'
      },
    ]}
    categoryForeground="#EE5921"
    textColor="#334"
    titleSize="3em"
    imageBorderRadius="24px"
    spacing="20px"
    maxImageHeight="520px"
    imageShadowColor="#F78702"
    onHover={() => console.log('First header hovered')}
    onClick={() => console.log('First header clicked')}
    categoryClicked={(category) => console.log(\`Category clicked: \${category}\`)}
  />
</div>
<div style={{
  height: '32px'
}}></div>
<div style={{
  display: 'flex',
  flexWrap: 'wrap', // Allows items to wrap to the next line
  justifyContent: 'center', // Center items horizontally
  padding: '32px', // Optional padding for the container
  backgroundColor: '#111111', // Background color of the container
  borderRadius: '8px', // Rounded corners for the container
  minHeight: '300px', // Minimum height for the container
  border: '1px solid #323232'
}}>
  <BlogPostHeader
    featuredImageSrc="https://github.com/Northstrix/In-Browser-File-Encrypter/raw/main/V1.0/Media/Main.png?raw=true"
    featuredImageWidth="46%"
    tagText="פיתוח ווב"
    titleText="איך בניתי אפליקציית ווב ללא ניסיון בג'אווהסקריפט"
    authorImageSrc="https://avatars.githubusercontent.com/u/43994704?v=4"
    authorName="מקסים בורטניקוב"
    authorLink="http://maxim-bortnikov.netlify.app/"
    date="8 באוגוסט 2024"
    readTime="17 דקות קריאה"
    socialIcons={[
    {
    name: 'GitHub',
    icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
    link: 'https://github.com/Northstrix/In-Browser-File-Encrypter',
    backgroundColor: '#fff',
    foregroundColor: '#333'
    },
    {
    name: 'Medium',
    icon: <FontAwesomeIcon icon={faMedium} size="lg" />,
    link: 'https://medium.com/system-weakness/how-i-built-a-web-app-with-no-javascript-experience-d8bf3ed14f6f',
    backgroundColor: '#fff',
    foregroundColor: '#000'
    },
    {
    name: 'Nuance',
    icon: <NuanceIcon backgroundColor="#fff" size="lg" />, // Assuming inverted color is white
    link: 'https://nuance.xyz/northstrix/10780-434go-diaaa-aaaaf-qakwq-cai/how-i-built-a-web-app-with-no-javascript-experience',
    backgroundColor: '#000',
    foregroundColor: '#fff'
    },
    ]}
    categoryForeground="#4E54C8"
    textColor="#f7f7ff"
    titleSize="3em"
    imageBorderRadius="12px"
    spacing="20px"
    headerMaxWidth="1200px"
    desktopBreakpoint={900}
    imageShadowColor="#424242"
    onHover={() => console.log('Second header hovered')}
    onClick={() => console.log('Second header clicked')}
    categoryClicked={(category) => console.log(\`Category clicked: \${category}\`)}
    isRTL={true}
  />
</div>

// Note: The BlogPostHeader component accepts the following props:
// - featuredImageSrc: string (required) - The source URL for the featured image.
// - featuredImageWidth: string (required) - The width of the featured image.
// - tagText: string (required) - The text for the category tag.
// - titleText: string (required) - The title of the blog post.
// - authorImageSrc: string (required) - The source URL for the author's image.
// - authorName: string (required) - The name of the author.
// - authorLink: string (required) - The link to the author's profile or page.
// - date: string (required) - The publication date of the blog post.
// - readTime: string (required) - The estimated reading time of the blog post.
// - socialIcons: SocialIcon[] (required) - An array of social media icons and their respective links.
// - categoryForeground: string (optional) - The color of the category tag text; defaults to '#404'.
// - textColor: string (optional) - The color of the main text; defaults to '#334'.
// - titleSize: string (optional) - The font size of the title; defaults to '3em'.
// - imageBorderRadius: string (optional) - The border radius of the featured image; defaults to '12px'.
// - headerMaxWidth: string (optional) - The maximum width of the header; defaults to '1536px'.
// - spacing: string (optional) - The spacing between elements; defaults to '20px'.
// - maxImageHeight: string (optional) - The maximum height of the featured image; defaults to '400px'.
// - desktopBreakpoint: number (optional) - The breakpoint for switching to desktop layout; defaults to 1200.
// - imageShadowColor: string (optional) - The color of the shadow for the featured image; defaults to '#404'.
// - isRTL: boolean (optional) - Whether the text should be right-to-left; defaults to false.
// - onHover: () => void (optional) - A callback function triggered when the header is hovered.
// - onClick: () => void (optional) - A callback function triggered when the header is clicked.
// - categoryClicked: (category: string) => void (optional) - A callback function triggered when the category tag is clicked, receiving the category text as an argument.
`,
code: [
  {
    filename: 'BlogPostHeader.tsx',
    content: `"use client";
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
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
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

const HeaderContainer = styled.div<{ textColor: string; maxWidth: string; $isMobileView: boolean; $isRTL: boolean }>\`
  position: relative;
  color: \${props => props.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: \${props => props.\$isMobileView ? '2em 1em' : '3em 1em'};
  box-shadow: 0 2px 0 #4041;
  z-index: 2;
  width: 100%;
  max-width: \${props => props.maxWidth};
  box-sizing: border-box;
  margin: auto;
  direction: \${props => props.\$isRTL ? 'rtl' : 'ltr'};
\`;

const Content = styled.div<{ spacing: string; $isMobileView: boolean; $isRTL: boolean }>\`
  display: flex;
  flex-direction: \${props => props.\$isMobileView ? 'column' : 'row'};
  align-items: \${props => props.\$isMobileView ? 'stretch' : 'center'};
  justify-content: center;
  gap: \${props => props.spacing};
  width: 100%;
\`;

const FeaturedImage = styled.img<{ borderRadius: string; width: string; maxHeight: string; $isRTL: boolean; shadowColor?: string }>\`
  width: \${props => props.width};
  max-height: \${props => props.maxHeight};
  border-radius: \${props => props.borderRadius};
  box-shadow: \${props => props.\$isRTL 
    ? \`10px 10px 10px \${props.shadowColor || '#6366'}\`
    : \`-10px 10px 10px \${props.shadowColor || '#6366'}\`};
  object-fit: cover;
\`;

const Info = styled.div<{ $isRTL: boolean }>\`
  flex: 1;
  text-align: \${props => props.\$isRTL ? 'right' : 'left'};
\`;

const MobileTopSection = styled.div\`
  text-align: center;
  margin-bottom: 1em;
\`;

const MobileInfoSection = styled.div<{ $isRTL: boolean }>\`
  display: flex;
  flex-direction: column;
  align-items: \${props => props.\$isRTL ? 'flex-end' : 'flex-start'};
  margin-top: 1em;
\`;

const Tag = styled.a<{ $isRTL: boolean; categoryForeground?: string}>\`
  margin-top: 2em;
  display: block;
  cursor: pointer;
  color: \${props => props.categoryForeground || '#404'};
  text-decoration: none;
  font-weight: 600;
  direction: \${props => props.\$isRTL ? 'rtl' : 'ltr'};
\`;

const Title = styled.h1<{ fontSize: string; $isRTL: boolean }>\`
  font-size: \${props => props.fontSize};
  font-weight: bold;
  direction: \${props => props.\$isRTL ? 'rtl' : 'ltr'};
\`;

const Meta = styled.div\`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
\`;

const Author = styled.a<{ $isRTL: boolean }>\`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  flex-direction: \${props => props.\$isRTL ? 'row-reverse' : 'row'};
  text-decoration: none;
  color: inherit;
\`;

const AuthorImage = styled.img\`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
\`;

const Separator = styled.span\`
  display: flex;
  align-items: center;
  justify-content: center;
\`;

const Social = styled.div<{ $isRTL: boolean }>\`
  display: flex;
  flex-direction: \${props => props.\$isRTL ? 'row-reverse' : 'row'};
  margin: 2em 0;
  gap: 1em;
  justify-content: \${props => props.\$isRTL ? 'flex-end' : 'flex-start'};
\`;

const SocialLink = styled.a<{ backgroundColor: string; foregroundColor: string; $isRTL: boolean }>\`
  width: 50px;
  height: 50px;
  background: \${props => props.backgroundColor};
  border-radius: 50%;
  box-shadow: \${props => props.\$isRTL ? '-6px 6px 6px #4041' : '6px 6px 6px #4041'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: \${props => props.\$isRTL ? '-6px 6px 6px #4043' : '6px 6px 6px #4043'};
  }

  svg {
    width: 70%;
    height: 70%;
    color: \${props => props.foregroundColor};
  }
\`;

export default BlogPostHeader;
`
  },
],
  dependencies: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons --legacy-peer-deps\nnpm install styled-components --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/nodws/pen/GgKErep" target="_blank" rel="noopener noreferrer" className="link">Blog Post Header</a> by <a href="https://codepen.io/nodws/pen" target="_blank" rel="noopener noreferrer" className="link">Nodws</a>
    </span>
  ),
}

export { metadata }