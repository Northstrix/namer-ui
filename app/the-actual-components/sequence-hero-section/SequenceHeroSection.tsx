"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton';

interface Step {
  number: string;
  title: string;
  description: string;
  bgColor: string;
}

interface Profile {
  name: string;
  image: string;
  rating: number;
}

interface ChronicleButtonStyle {
  text?: string;
  hoverColor?: string;
  width?: string;
  outlined?: boolean;
  outlinePaddingAdjustment?: string;
  borderRadius?: string;
  fontFamily?: string;
  outlinedButtonBackgroundOnHover?: string;
  customBackground?: string;
  customForeground?: string;
  horizontalAlignment?: 'left' | 'center' | 'right';
}

interface SequenceHeroSectionProps {
  title: string;
  subtitle: string;
  steps: Step[];
  ctaText: string;
  ctaLink: string;
  carouselImages: string[];
  profiles: Profile[];
  maxWidth?: string;
  maxHeight?: string;
  maxImageWidth?: string;
  reviewStyle?: {
    textColor?: string;
    bgColor?: string;
    rounding?: string;
    fontSize?: string;
  };
  ctaButtonStyle?: ChronicleButtonStyle;
  navButtonStyle?: ChronicleButtonStyle;
  margins?: {
    section?: string;
    title?: string;
    subtitle?: string;
    steps?: string;
    cta?: string;
    image?: string;
  };
  padding?: {
    content?: string;
  };
  imageOnRight?: boolean;
}

const SequenceHeroSection: React.FC<SequenceHeroSectionProps> = ({
  title,
  subtitle,
  steps,
  ctaText,
  ctaLink,
  carouselImages,
  profiles,
  maxWidth = '100%',
  maxHeight = '100%',
  maxImageWidth = '100%',
  reviewStyle = {
    textColor: 'text-black',
    bgColor: 'bg-white',
    rounding: 'rounded-full',
    fontSize: 'text-sm',
  },
  ctaButtonStyle = {
    customBackground: '#1a1a24',
    customForeground: '#ffffff',
    borderRadius: '0.76rem',
    hoverColor: '#00A7E1',
    width: '100%',
    horizontalAlignment: 'center',
  },
  navButtonStyle = {
    customBackground: 'rgba(255, 255, 255, 0.7)',
    customForeground: '#1a1a24',
    hoverColor: '#ffffff',
    borderRadius: '8px',
    width: '50px',
  },
  margins = {
    section: 'my-0',
    title: 'mt-0',
    subtitle: 'mt-4',
    steps: 'mt-10',
    cta: 'mt-10',
    image: 'mt-10 lg:mt-0',
  },
  padding = {
    content: 'py-4',
  },
  imageOnRight = true,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const adjustContainerHeights = () => {
      if (contentContainerRef.current && imageContainerRef.current && !isMobileView) {
        const contentHeight = contentContainerRef.current.offsetHeight;
        imageContainerRef.current.style.height = `${contentHeight}px`;
      }
    };

    adjustContainerHeights();
    window.addEventListener('resize', adjustContainerHeights);

    return () => {
      window.removeEventListener('resize', adjustContainerHeights);
    };
  }, [isMobileView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const renderImageContainer = () => (
    <div 
      ref={imageContainerRef}
      className={`relative col-span-12 lg:col-span-7 rounded-3xl ${isMobileView ? 'order-2' : imageOnRight ? 'lg:order-last' : 'lg:order-first'} ${margins.image}`}
      style={{ 
        maxWidth: maxImageWidth,
        aspectRatio: isMobileView ? '2/1' : 'auto',
      }}
    >
      <div className="img-carousel h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full h-full"
          >
            <Image 
              src={carouselImages[currentImageIndex]} 
              alt={`Carousel image ${currentImageIndex + 1}`} 
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-4 right-4 flex space-x-2">
          <ChronicleButton
            text="◀"
            onClick={prevImage}
            {...navButtonStyle}
          />
          <ChronicleButton
            text="▶"
            onClick={nextImage}
            {...navButtonStyle}
          />
        </div>
      </div>
      
      {!isMobileView && profiles.map((profile, index) => (
        <motion.div
          key={index}
          className={`hidden lg:flex z-10 absolute ${reviewStyle.bgColor} ${reviewStyle.rounding} items-center py-3 px-3 shadow-xl`}
          style={{
            top: `${25 + index * 25}%`,
            [imageOnRight ? 'left' : 'right']: index % 2 === 0 ? '-16px' : 'auto',
            [imageOnRight ? 'right' : 'left']: index % 2 === 1 ? '-16px' : 'auto',
          }}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className={`${imageOnRight ? 'mr-3.5' : 'ml-3.5'} w-12 h-12 rounded-full overflow-hidden flex-shrink-0`}>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${profile.image})` }}></div>
          </div>
          <div>
            <h3 className={`capitalize ${reviewStyle.textColor} ${reviewStyle.fontSize}`}>{profile.name}</h3>
            <span className={`text-xs font-semibold mt-1 flex items-center ${reviewStyle.textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${imageOnRight ? 'mr-1' : 'ml-1'} w-3.5 h-3.5 text-yellow-400`}>
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              {profile.rating.toFixed(1)}
            </span>
          </div>
        </motion.div>
      ))}

    </div>
  );

  const renderContentContainer = () => (
    <div 
      ref={contentContainerRef}
      className={`col-span-12 lg:col-span-5 flex flex-col items-start justify-center gap-y-6 mx-auto lg:mx-0 ${isMobileView ? 'order-3' : imageOnRight ? 'lg:order-first' : 'lg:order-last'} ${padding.content}`}
    >
      {steps.map((step, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants} 
          className="text-left w-full"
        >
          <span className={`${step.bgColor} inline-block text-white rounded-full px-3.5 py-0.5 text-sm tracking-wide`}>
            {step.number}
          </span>
          <h2 className="text-2xl font-semibold my-4 text-gray-800">{step.title}</h2>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
      <motion.div variants={itemVariants} className={`${margins.cta} w-full flex justify-${ctaButtonStyle.horizontalAlignment}`}>
        <ChronicleButton
          text={ctaText}
          onClick={() => window.open(ctaLink, '_blank', 'noopener,noreferrer')}
          {...ctaButtonStyle}
        />
      </motion.div>
    </div>
  );

  return (
    <motion.section
      ref={sectionRef}
      className={`w-full ${margins.section} overflow-hidden`}
      style={{ maxWidth, maxHeight }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 lg:px-10">
        <motion.h1 
          className={`text-4xl md:text-5xl font-semibold text-center text-gray-900 ${margins.title}`} 
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p 
          className={`text-lg md:text-2xl text-gray-600 text-center ${margins.subtitle}`} 
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 ${margins.steps}`}>
          {imageOnRight ? (
            <>
              {renderContentContainer()}
              {renderImageContainer()}
            </>
          ) : (
            <>
              {renderImageContainer()}
              {renderContentContainer()}
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default SequenceHeroSection;