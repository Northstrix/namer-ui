'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlock } from "./code-block";

import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'
import SliderHeroSection from '@/app/the-actual-components/slider-hero-section/SliderHeroSection'
import BauhausFileCard from '@/app/the-actual-components/bauhaus-file-card/BauhausFileCard'
import InflectedCard from '@/app/the-actual-components/inflected-card/InflectedCard'
import ProductCard from '@/app/the-actual-components/product-card/ProductCard'
import WhatsAppWidget from '@/app/the-actual-components/whatsapp-widget/WhatsAppWidget'
import DicedHeroSection from '@/app/the-actual-components/diced-hero-section/DicedHeroSection'
import AnimatedTestimonials from '@/app/the-actual-components/animated-testimonials/AnimatedTestimonials'
import SequenceHeroSection from '@/app/the-actual-components/sequence-hero-section/SequenceHeroSection'
import SimpleNavbar from '@/app/the-actual-components/simple-navbar/SimpleNavbar'
import FileContainer from '@/app/the-actual-components/file-container/FileContainer'
import FishyButton from '@/app/the-actual-components/fishy-button/FishyButton'
import PositionAwareButton from '@/app/the-actual-components/position-aware-button/PositionAwareButton'
import FancyNotification from '@/app/the-actual-components/fancy-notification/FancyNotification'
import MagicButton from '@/app/the-actual-components/magic-button/MagicButton'
import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton'
import { ShamayimToggleSwitch } from '@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch'
import SkeuomorphicToggle from '@/app/the-actual-components/skeuomorphic-toggle/SkeuomorphicToggle'
import RisingDroplets from '@/app/the-actual-components/rising-droplets/RisingDroplets'
import BauhausCard from '@/app/the-actual-components/bauhaus-card/BauhausCard'
import DutchCard from '@/app/the-actual-components/dutch-card/DutchCard'
import GlowingCard from '@/app/the-actual-components/glowing-card/GlowingCard'
import MetamorphicLoader from '@/app/the-actual-components/metamorphic-loader/MetamorphicLoader'
import MultiColoredText from '@/app/the-actual-components/multi-colored-text/MultiColoredText'
import PricingCard from '@/app/the-actual-components/pricing-card/PricingCard'
import BaubleToggle from '@/app/the-actual-components/bauble-toggle/BaubleToggle'
import HazeCard from '@/app/the-actual-components/haze-card/HazeCard'
import FancyNavBar from '@/app/the-actual-components/fancy-navbar/FancyNavbar'
import UnfoldingNavbar from '@/app/the-actual-components/unfolding-navbar/UnfoldingNavbar'
import ModernRetroButton from '@/app/the-actual-components/modern-retro-button/ModernRetroButton'
import HalfFilledText from '@/app/the-actual-components/half-filled-text/HalfFilledText'
import GradientText from '@/app/the-actual-components/gradient-text/GradientText'
import ModernNavbar from '@/app/the-actual-components/modern-navbar/ModernNavbar'
import HeartsButton from '@/app/the-actual-components/hearts-button/HeartsButton'
import SimpleDropzone from '@/app/the-actual-components/simple-dropzone/SimpleDropzone'
import FancyHeroSection from '@/app/the-actual-components/fancy-hero-section/FancyHeroSection'
import ModernSidebar from '@/app/the-actual-components/modern-sidebar/ModernSidebar'
import SpaceButton from '@/app/the-actual-components/space-button/SpaceButton'
import SpacyPricingCard from '@/app/the-actual-components/spacy-pricing-card/SpacyPricingCard'
import StructuredBlock from '@/app/the-actual-components/structured-block/StructuredBlock'
import SectionContainer from '@/app/the-actual-components/section-container/SectionContainer'
import AboutUsSection from '@/app/the-actual-components/about-us-section/AboutUsSection'
import UnfoldingFAQ from '@/app/the-actual-components/unfolding-faq/UnfoldingFAQ'
import InfiniteTestimonials from '@/app/the-actual-components/infinite-testimonials/InfiniteTestimonials'
import UnfoldingSidebar from '@/app/the-actual-components/unfolding-sidebar/UnfoldingSidebar'
import BlogPostHeader from '@/app/the-actual-components/blog-post-header/BlogPostHeader'
import { Highlight } from "@/app/the-actual-components/hero-highlight/HeroHighlight"
import ConfirmationPopUp from '@/app/the-actual-components/confirmation-pop-up/ConfirmationPopUp'
import RNG from '@/app/the-actual-components/rng/RNG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { IconUserFilled, IconFolderFilled, IconFileFilled, IconCircleArrowDownFilled, IconCircleArrowUpFilled, IconLockFilled, IconSettingsFilled, IconInfoCircleFilled } from '@tabler/icons-react';
import { IconHome, IconFile, IconPencil, IconLogout, IconUser, IconFolder, IconCircleArrowDown, IconCircleArrowUp, IconLock, IconSettings, IconInfoCircle } from '@tabler/icons-react';
import { IconCornerRightUp, IconFold } from '@tabler/icons-react';
import { IconStar, IconUserStar, IconList, IconCalendarEvent } from '@tabler/icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconBorderRightPlus, IconFoldDown } from '@tabler/icons-react';
import styled from 'styled-components';

interface Metadata {
  usage: string;
  code: React.ReactNode;
  dependencies: string | React.ReactNode;
  credit: React.ReactNode;
}

interface CodeFile {
  filename: string; // The name of the file
  content: string; // The content of the file
}

const components = [
  { id: 'chronicle-button', name: 'Chronicle Button', description: 'A button with a unique hover effect.' },
  { id: 'slider-hero-section', name: 'Slider Hero Section', description: 'A customizable hero section with sliding showcase options, image transitions, and responsive design.' },
  { id: 'bauhaus-file-card', name: 'Bauhaus File Card', description: 'A bauhaus-inspired file container with interactive elements.' },
  { id: 'inflected-card', name: 'Inflected Card', description: 'A versatile card component with an unorthodox shape.' },
  { id: 'product-card', name: 'Product Card', description: 'A versatile product card component with image, pricing, discount, and interactive buttons for e-commerce applications.' },
  { id: 'whatsapp-widget', name: 'WhatsApp Widget', description: 'A customizable WhatsApp chat widget with auto-popup functionality, personalized messaging, and styled UI elements.' },
  { id: 'diced-hero-section', name: 'Diced Hero Section', description: 'A customizable hero section with diced image grid, gradient text, and responsive design for showcasing content.' },
  { id: 'animated-testimonials', name: 'Animated Testimonials', description: 'A customized Aceternity UI component, optimized for custom image aspect ratios and support for Right-to-Left (RTL) languages.' },
  { id: 'sequence-hero-section', name: 'Sequence Hero Section', description: 'A fully customizable hero section with steps, image carousel, and rating cards.' },
  { id: "simple-navbar", name: "Simple Navbar", description: "A simple navigation bar with icons, tooltips, and space for a phone number, suitable for simple yet modern websites." },
  { id: 'file-container', name: 'File Container', description: 'A container for displaying file information.' },
  { id: 'fishy-button', name: 'Fishy Button', description: 'A sleek button featuring floating fish that appear on hover.' },
  { id: 'position-aware-button', name: 'Position-Aware Button', description: 'A button with a dynamic hover effect that responds to mouse movements.' },
  { id: 'fancy-notification', name: 'Fancy Notification', description: 'An animated rectangle notification.' },
  { id: 'magic-button', name: 'Magic Button', description: 'A button that employs moving particles.' },
  { id: 'halomot-button', name: 'Halomot Button', description: 'A stylish button with a vibrant gradient that fills it on hover.' },
  { id: 'shamayim-toggle-switch', name: 'Shamayim Toggle Switch', description: 'A celestial-themed toggle switch with a smooth animation and mirroring option.' },
  { id: 'skeuomorphic-toggle', name: 'Skeuomorphic Switch', description: 'A skeuomorphic toggle switch with customizable colors, inscriptions, and mirroring option.' },
  { id: 'rising-droplets', name: 'Rising Droplets', description: 'An animation of droplets rising from the bottom of the container to the top,' },
  { id: 'bauhaus-card', name: 'Bauhaus Card', description: 'A modern, Bauhaus-inspired card component with customizable parts.' },
  { id: 'dutch-card', name: 'Dutch Card', description: 'A card component with animated border.' },
  { id: 'glowing-card', name: 'Glowing Card', description: 'A webflow-inspired card that glows on hover.' },
  { id: 'metamorphic-loader', name: 'Metamorphic Loader', description: 'A loader that dynamically changes shape from a circle to a rounded square, and vice versa.' },
  { id: 'multi-colored-text', name: 'Multi-Colored Text', description: 'A multi-colored text using 5 different colors.' },
  { id: 'pricing-card', name: 'Pricing Card', description: 'An interactive pricing card that responds to cursor movements.' },
  { id: 'bauble-toggle', name: 'Bauble Toggle', description: 'An ornamental toggle switch styled as a Christmas bauble.' },
  { id: 'haze-card', name: 'Haze Card', description: 'A visually striking card with a purple haze effect.' },
  { id: 'fancy-navbar', name: 'Fancy Navbar', description: 'A stylish navigation bar with a ghost-like circle animation.' },
  { id: 'unfolding-navbar', name: 'Unfolding Navbar', description: 'A navigation bar with elements that unfold smoothly on hover.' },
  { id: 'modern-retro-button', name: 'Modern Retro Button', description: 'An unusual button that employs modern and retro styles at the same time.' },
  { id: 'half-filled-text', name: 'Half-Filled Text', description: 'A text that\'s half-filled or half-empty, depending on your perspective.' },
  { id: 'gradient-text', name: 'Gradient Text', description: 'A multi-colored text with moving gradient.' },
  { id: 'modern-navbar', name: 'Modern Navbar', description: 'A visually appealing navigation bar component designed for modern web applications.' },
  { id: 'hearts-button', name: 'Hearts Button', description: 'A button with three moving hearts that appear when the button is hovered.' },
  { id: 'simple-dropzone', name: 'Simple Dropzone', description: 'A simple dropzone made using Tailwind.' },
  { id: 'fancy-hero-section', name: 'Fancy Hero Section', description: 'A fancy, PHA5E-inspired hero section.' },
  { id: 'modern-sidebar', name: 'Modern Sidebar', description: 'A sleek, modern sidebar with customizable icons, hover effects, and responsive design.' },
  { id: 'space-button', name: 'Space Button', description: 'A futuristic button with dynamic gradients and hover effects, evoking the mesmerizing colors of outer space.' },
  { id: 'spacy-pricing-card', name: 'Spacy Pricing Card', description: 'A dynamic, customizable pricing card component with a sleek, futuristic design.' },
  { id: 'structured-block', name: 'Structured Block', description: 'A simple block with adjustable padding and text size for desktop and mobile.' },
  { id: 'section-container', name: 'Section Container', description: 'A simple container with responsive padding and content alignment optimized for different screen sizes.' },
  { id: 'about-us-section', name: 'About Us Section', description: 'A versatile and responsive section for displaying company information.' },
  { id: 'unfolding-faq', name: 'Unfolding FAQ', description: 'A modern component with expandable sections and sparkle highlights on question hover.' },
  { id: 'infinite-testimonials', name: 'Infinite Testimonials', description: 'An element that displays a continuous, scrolling loop of testimonials or quotes.' },
  { id: 'unfolding-sidebar', name: 'Unfolding Sidebar', description: 'A modern, space-efficient sidebar that unfolds and collapses, utilizing Framer Motion for smooth transitions.' },
  { id: 'blog-post-header', name: 'Blog Post Header', description: 'A customizable, animated header for blog posts featuring a gradient background, author info, and social links.' },
  { id: 'hero-highlight', name: 'Hero Highlight', description: 'A modified version of the Aceternity component that doesn\'t require modification of the Tailwind configuration file.' },
  { id: 'confirmation-pop-up', name: 'Confirmation PopUp', description: 'A customizable confirmation popup with dynamic styling and RTL support.' },
  { id: 'rng', name: 'Random Number Generator', description: 'A modern RNG component that generates random numbers enhanced by the randomness captured from the mouse movements.' },
]

//console.log(`There are ${components.length} components available.`);

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState<string>(components[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [metadata, setMetadata] = useState<Metadata | null>(null)
  
  useEffect(() => {
    const loadComponent = async () => {
      const mod = await import(`@/app/the-actual-components/${activeComponent}/index`)
      setMetadata(mod.metadata)
    }

    loadComponent()
  }, [activeComponent])

  // Product Card Stuff //

  const originalDiscountTag = "הנחה 40%";
  const discountTagParts = originalDiscountTag.split(' ');
  const swappedDiscountTag = discountTagParts.reverse().join(' ');

  // Product Card Stuff //

  // Fancy Notification stuff //
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationMessage1, setNotificationMessage1] = useState('');

  // Custom messages
  const customSuccessMessage = "It's done";
  const customErrorMessage = 'Yeap!';

  const showSuccessNotification = () => {
    setNotificationStatus('success');
    setNotificationMessage("The success notification");
    setNotificationMessage1('opened successfully!');
    setIsNotificationVisible(true);
  };

  const showErrorNotification = () => {
    setNotificationStatus('error');
    setNotificationMessage("This notification");
    setNotificationMessage1('should show an error!');
    setIsNotificationVisible(true);
  };

  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };
  // Fancy Notification stuff //
  
  
  // Skeuomorphic Setting Switches stuff //
  const [hydration, setHydration] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [autoSave, setAutoSave] = useState(false);

  const logStateChange = useCallback((name: string, value: boolean) => {
    toast.info(`${name} changed to: ${value}`);
  }, []);

  const handleHydrationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHydration(e.target.checked);
    logStateChange('Hydration', e.target.checked);
  }, [logStateChange]);

  const handleNotificationsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(e.target.checked);
    logStateChange('Notifications', e.target.checked);
  }, [logStateChange]);

  const handleAutoSaveChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoSave(e.target.checked);
    logStateChange('Auto-Save', e.target.checked);
  }, [logStateChange]);
  // Skeuomorphic Setting Switches stuff //

  // Rising Droplets stuff //
  const [loaderVisible, setLoaderVisible] = useState(false);

  const toggleLoader = () => {
    if (loaderVisible) {
      setLoaderVisible(false);
    } else {
      setLoaderVisible(true);
    }
  };
  // Rising Droplets stuff //

  // Glowing Card stuff //
  const [hoveredCard, setHoveredCard] = useState<'github' | 'medium' | 'instructables' | null>(null);
  // Glowing Card stuff //

  // Simple Dropzone stuff //
  const handleFilesFromSimpleDropzone = (files: File[]) => {
    files.forEach(file => {
      toast.info(`File: ${file.name}`); // Print the name of each file
    });
  };
  // Simple Dropzone stuff //

    // Modern Sidebar Stuff //
    interface SquareProps {
      color: string;
    }
  
    const Square: React.FC<SquareProps> = ({ color }) => (
      <div style={{
        width: '12px',
        height: '12px',
        backgroundColor: color,
        margin: '2px',
        borderRadius: '50%',
      }} />
    );
    // Modern Sidebar Stuff //

    // WhatsApp Widget Stuff //
    const [clickCount, setClickCount] = useState(0);
      
    const handleWhatsAppClick = () => {
      setClickCount(prevCount => prevCount + 1);
      // Add your WhatsApp link opening logic here
    };

    // WhatsApp Widget Stuff //

    // Blog Post Header Stuff //

    interface NuanceIconProps {
      size?: string;
      backgroundColor?: string;
    }
    
    const NuanceIconContainer = styled.div<{ backgroundColor?: string; size?: string }>`
      background-color: ${props => props.backgroundColor || 'transparent'};
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => props.size || '1em'};
      height: ${props => props.size || '1em'};
      border-radius: 50%;
      overflow: hidden;
      &:hover {
        outline: none;
      }
    `;
    
    const NuanceIconImage = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;
    
    const NuanceIcon: React.FC<NuanceIconProps> = ({ size, backgroundColor }) => {
      return (
        <NuanceIconContainer backgroundColor={backgroundColor} size={size}>
          <NuanceIconImage src="https://nuance.xyz/assets/images/loaders/nuance-loader.gif" alt="Nuance Logo" />
        </NuanceIconContainer>
      );
    };

    // Blog Post Header Stuff //

    // Simple Navbar Stuff //

    const disclaimerString = `<div style={{height: '69px'}}></div>`;

    // Simple Navbar Stuff //

    // Confirmation Pop-up Stuff //

    const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);

    const handleConfirmationPopUpConfirm = () => {
      toast.info('Confirmed');
      setShowConfirmPopUp(false);
    };
  
    const handleConfirmationPopUpCancel = () => {
      toast.info('Cancelled');
      setShowConfirmPopUp(false);
    };

    // Confirmation Pop-up Stuff //

    // RNG Stuff //

    const [showRNG, setShowRNG] = useState(false);

    const handleRNGClose = (randomData: Uint8Array) => {
      setShowRNG(false);
      console.log('Random Data:', randomData);
      // Optionally, you can also convert the Uint8Array to a hexadecimal string for easier inspection
      const hexString = Array.from(randomData, (byte) => byte.toString(16).padStart(2, '0')).join('');
      console.log('Random Data (Hex):', hexString);
      const foldedRandomValue = xorHalvesRepeatedly(randomData, 7);
      const hexString1 = Array.from(foldedRandomValue, (byte) => byte.toString(16).padStart(2, '0')).join('');
      toast.info(`Folded Random Value (Hex): ${hexString1}`);
    };

    function xorHalvesRepeatedly(array: Uint8Array, repetitions: number): Uint8Array {
      let result = array;
      for (let i = 0; i < repetitions; i++) {
        result = xorHalves(result);
      }
      return result;
    }
    
    function xorHalves(array: Uint8Array): Uint8Array {
      const halfLength = Math.floor(array.length / 2);
      const result = new Uint8Array(halfLength);
      for (let i = 0; i < halfLength; i++) {
        result[i] = array[i] ^ array[i + halfLength];
      }
      return result;
    }

    // RNG Stuff //
    
  const renderComponent = () => {
    switch(activeComponent) {
      case 'chronicle-button':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            <ChronicleButton 
              text='Hover Me'
              onClick={() => toast.info("The first button has been clicked")} 
            />
            <ChronicleButton 
              text='Blue (1.4em)' // Button text
              onClick={() => toast.info('The blue button has been clicked')} 
              width="200px" // Custom width
              hoverColor="#90BAFD" // Custom hover color: a vibrant blue
              borderRadius="1.4em" // Custom border radius
            />
            <ChronicleButton 
              text="Outlined (-6px)" 
              onClick={() => toast.info("The outlined button has been clicked")} 
              hoverColor="#CC8DFD"
              width="200px"
              outlined={true}
              outlinePaddingAdjustment="6px"
            />
          </div>
        );
      case 'slider-hero-section':
        return (
          <div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
              Disclaimer: All product names, logos, brand identifiers, and trademarks displayed on this website are the sole property of their respective owners. These items are used for demonstrational and illustrative purposes only. The Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased here. This website does not present a commercial offer of any kind. The store name is fictional; any resemblance to existing business(es) is entirely coincidental and unintentional.
            </p> 
            
            <SliderHeroSection
              title="Discover cutting-edge tech and top brands at NamerStore – your one-stop destination for brand new, refurbished, and pre-owned electronics"
              showcaseOptions={[
                { text: 'Brand New Electronics', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { text: 'Refurbished iPhones', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { text: 'Pre-owned Samsung Flagships', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
              ]}
              onOptionClick={(option) => toast.info(`Clicked item: ${option}`)}
              onOptionHover={(option) => toast.info(`Hovered item: ${option}`)}
            />
      
            <div className="w-[500px] overflow-hidden">
              <SliderHeroSection
                title="גלה טכנולוגיה חדשנית ומותגים מובילים בנמרסטור - היעד שלך למוצרי אלקטרוניקה חדשים, מחודשים ומשומשים."
                showcaseOptions={[
                  { text: 'מוצרי אלקטרוניקה חדשים', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                  { text: 'אייפונים מחודשים', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                  { text: 'מכשירי סמסונג משומשים', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
                ]}
                onOptionClick={(option) => toast.info(`Clicked item: ${option}`)}
                onOptionHover={(option) => toast.info(`Hovered item: ${option}`)}
                activeOptionColor="#A031EB"
                textColor="#080810"
                imageChangeInterval={3000}
                imageTransitionDuration={0.51}
                darkenImages={-0.5}
                height="760px"
                borderRadius="2.5em"
                mobileTitleAlign="right"
                mobileShowcaseAlign="right"
              />
            </div>

          </div>
        );
      case 'bauhaus-file-card':
        return (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            gap: '36px', // Space between items
            justifyContent: 'center', // Center items horizontally
            padding: '32px', // Optional padding for the container
            backgroundColor: '#262630', // Background color of the container
            borderRadius: '8px', // Rounded corners for the container
            minHeight: '300px' // Minimum height for the container
          }}>
            <BauhausFileCard
              id="file1"
              topInscription="Size: 5.96 MB"
              fileName="Downtown Dallas.png"
              subMainText="A high-quality image featuring the stunning skyline of Downtown Dallas, showcasing its modern architecture and vibrant city life."
              filledButtonInscription="View"
              outlinedButtonInscription="Download"
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ${id}`)}
              onTitleClick={(id) => toast.info(`Title clicked for ${id}`)}
              onDescriptionClick={(id) => toast.info(`Description clicked for ${id}`)}
              onMoreOptionsClick={(id) => toast.info(`More options clicked for ${id}`)}
            />

            <BauhausFileCard
              id="file2"
              topInscription="Size: 15.5 MB"
              fileName="Important project.zip"
              subMainText="This small archive contains code, videos, and a presentation for a very important project."
              filledButtonInscription="Extract"
              outlinedButtonInscription="Info"
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ${id}`)}
              onTitleClick={(id) => toast.info(`Title clicked for ${id}`)}
              onDescriptionClick={(id) => toast.info(`Description clicked for ${id}`)}
              onMoreOptionsClick={(id) => toast.info(`More options clicked for ${id}`)}
            />

            <BauhausFileCard
              id="file3"
              topInscription="Grössi: 71.2 KB"
              fileName="BauhausFileCard.tsx"
              subMainText="En Code für en Bauhaus-inspirierte Datei-Container mit interaktiven Elementen."
              filledButtonInscription="Uuslade"
              outlinedButtonInscription="Teile"
              containerBorderRadius="1.76em"
              buttonRounding="0.76em"
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ${id}`)}
              onTitleClick={(id) => toast.info(`Title clicked for ${id}`)}
              onDescriptionClick={(id) => toast.info(`Description clicked for ${id}`)}
              onMoreOptionsClick={(id) => toast.info(`More options clicked for ${id}`)}
            />

            <BauhausFileCard
              id="file4"
              topInscription="Tamaño: 250 MB"
              fileName="App tutorial.mp4"
              subMainText="Video Tutorial - Este video proporciona una guía completa sobre el uso de la aplicación y sus características."
              filledButtonInscription="Descargar"
              outlinedButtonInscription="Detalles"
              backgroundColor="#f5f5f5"
              separatorColor="#d0d0d0"
              chronicleButtonBackground="#2a2a34"
              chronicleButtonForeground="#f5f5f5"
              descriptionColor="#333333"
              fileSizeColor="#555555"
              borderWidth="6px"
              ligtenButtonColor={-0.17}
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ${id}`)}
              onTitleClick={(id) => toast.info(`Title clicked for ${id}`)}
              onDescriptionClick={(id) => toast.info(`Description clicked for ${id}`)}
              onMoreOptionsClick={(id) => toast.info(`More options clicked for ${id}`)}
            />

            <BauhausFileCard
              id="file5"
              topInscription="2.3 KB :גודל"
              fileName="bauhaus-file-card.js"
              subMainText="קופסה לאחסון בהשראת הבאוהאוס עם אלמנטים אינטראקטיביים."
              filledButtonInscription="פתח"
              outlinedButtonInscription="שתף"
              mirrored={true}
              swapButtons={true}
              borderWidth="4px"
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ${id}`)}
              onTitleClick={(id) => toast.info(`Title clicked for ${id}`)}
              onDescriptionClick={(id) => toast.info(`Description clicked for ${id}`)}
              onMoreOptionsClick={(id) => toast.info(`More options clicked for ${id}`)}
            />

            <BauhausFileCard
              id="file6"
              topInscription="Size: 5.7 MB"
              fileName="Financial Report.pdf"
              subMainText="The integrity of this file is compromised."
              filledButtonInscription="View"
              outlinedButtonInscription="Delete"
              metadataIntegrity={false}
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ${id}`)}
              onTitleClick={(id) => toast.info(`Title clicked for ${id}`)}
              onDescriptionClick={(id) => toast.info(`Description clicked for ${id}`)}
              onMoreOptionsClick={(id) => toast.info(`More options clicked for ${id}`)}
            />
          </div>
        );
      case 'inflected-card':
        return (
          <div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1260px] text-center mt-4 px-4">
              Disclaimer: This product card is a conceptual design prototype created for demonstrative and educational purposes only. All product names, logos, brand identifiers, and trademarks displayed here are the sole property of their respective owners. Product details, images, and descriptions are used for illustrative purposes and do not represent actual commercial offerings. Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased. This website does not present a commercial offer of any kind. Any resemblance to existing product(s) is entirely coincidental.
            </p> 
            
            <div className="bg-[#050505] min-h-[300px] flex flex-wrap gap-8 items-center justify-center relative">
              <InflectedCard
                id="0"
                image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
                title="iPhone 15 Pro"
                description="Titanium smartphone with an advanced camera system, offering stunning photography capabilities and a sleek design."
                tags={[
                  { name: "Brand new", textColor: "#f7f7ff", backgroundColor: "#9F4EFF", rounding: 5 },
                  { name: "10% off", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 5 },
                ]}
                parentBackgroundColor="#050505"
                onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
                onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
                cardRounding={15}
                fontSizes={{
                  title: "1.8rem",
                  description: "1rem",
                  tags: "0.85rem",
                  price: "0.84rem",
                }}
                margins={{
                  title: "0 0 7px 0",
                  description: "0 0 18px 0",
                  tags: "10px 0 0 0",
                }}
                buttonIcon={<IconCornerRightUp />}
                buttonIconSize={32}
                buttonIconColor="#ffffff"
                buttonIconHoverColor="#EEEEEE"
                buttonBackgroundColor="#9F4EFF"
                buttonBackgroundHoverColor="#a960ff"
                maxWidth="500px"
                imageHoverZoom={1.1}
                price="$1,079"
                priceTagTextColor="#f7f7ff"
                oldPrice="$1,199"
                priceTagRounding="25px"
              />

              <InflectedCard
                id="1"
                image="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Samsung Galaxy Flip 6"
                description="Innovative foldable smartphone with a sleek design that enhances portability while providing a large display for immersive viewing experiences and multitasking."
                tags={[
                  { name: "Pre-owned", textColor: "#f7f7ff", backgroundColor: "#00A6FB", rounding: 0 },
                  { name: "50% off", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 0 },
                ]}
                parentBackgroundColor="#050505"
                onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
                onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
                cardRounding={15}
                fontSizes={{
                  title: "1.8rem",
                  description: "1rem",
                  tags: "0.85rem",
                  price: "1.12rem",
                }}
                margins={{
                  title: "0 0 7px 0",
                  description: "0 0 18px 0",
                  tags: "10px 0 0 0",
                }}
                buttonIcon={<IconFold />}
                buttonIconSize={32}
                buttonIconColor="#ffffff"
                buttonIconHoverColor="#EEEEEE"
                buttonBackgroundColor="#00A6FB"
                buttonBackgroundHoverColor="#0582CA"
                maxWidth="500px"
                imageHoverZoom={1.1}
                price="$499"
                priceTagTextColor="#050505"
                oldPrice="$991"
                oldPriceTextColor="#565656"
                priceTagRounding="6px"
                priceTagBackgroundColor = 'rgba(255,255,255,0.78)'
              />

              <InflectedCard
                id="2"
                image="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="iPhone 7"
                description="Classic iPhone model with 12MP camera and water resistance, offering reliable performance and essential features for everyday smartphone users."
                tags={[
                  { name: "Refurbished", textColor: "#f7f7ff", backgroundColor: "#FF3900", rounding: 5 },
                  { name: "20% off", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 5 },
                ]}
                parentBackgroundColor="#050505"
                onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
                onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
                cardRounding={14}
                fontSizes={{
                  title: "1.8rem",
                  description: "1rem",
                  tags: "0.85rem",
                  price: "1.12rem",
                }}
                margins={{
                  title: "0 0 7px 0",
                  description: "0 0 18px 0",
                  tags: "10px 0 0 0",
                }}
                buttonIcon={<IconCornerRightUp />}
                buttonIconSize={32}
                buttonIconColor="#ffffff"
                buttonIconHoverColor="#EEEEEE"
                buttonBackgroundColor="#FF3900"
                buttonBackgroundHoverColor="#FF5733"
                maxWidth="392px"
                imageHoverZoom={1.35}
                price="$159"
                priceTagRounding="25px"
                priceTagBackgroundColor = '#FF3900'
              />

              <InflectedCard
                id="3"
                image="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=2436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="iPhone X"
                description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
                tags={[
                  { name: "40% הנחה", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 15 },
                  { name: "משומש", textColor: "#f7f7ff", backgroundColor: "#00A6FB", rounding: 15 },
                ]}
                parentBackgroundColor="#050505"
                onClick={(target, id) => toast.info(`Clicked ${target} on card ${id}`)}
                onHover={(target, id) => toast.info(`Hovering over ${target} on card ${id}`)}
                cardRounding={36}
                fontSizes={{
                  title: "1.8rem",
                  description: "1rem",
                  tags: "0.85rem",
                  price: "1.12rem",
                }}
                margins={{
                  title: "0 0 7px 0",
                  description: "0 0 18px 0",
                  tags: "10px 0 0 0",
                }}
                buttonIcon={<IconCornerRightUp />}
                buttonIconSize={32}
                buttonIconColor="#ffffff"
                buttonIconHoverColor="#EEEEEE"
                buttonBackgroundColor="#00A6FB"
                buttonBackgroundHoverColor="#0582CA"
                maxWidth="330px"
                imageHoverZoom={1.61}
                price="₪599"
                priceTagTextColor="#f7f7ff"
                oldPrice="₪991"
                oldPriceOnTheRight={true}
                priceTagRounding="25px"
                mirrored={true}
                tagsAlignment="right"
                titleAlignment="center"
                descriptionAlignment="right"
              />
            </div>
          </div>
        );
      case 'product-card':
        return (
          <div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
              Disclaimer: This product card is a conceptual design prototype created for demonstrative and educational purposes only. All product names, logos, brand identifiers, and trademarks displayed here are the sole property of their respective owners. Product details, images, and descriptions are used for illustrative purposes and do not represent actual commercial offerings. Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased. This website does not present a commercial offer of any kind. Any resemblance to existing product(s) is entirely coincidental.
            </p> 
            
            <div className="bg-[#050505] min-h-[300px] flex flex-wrap gap-8 items-center justify-center relative">
              <ProductCard
                id="0"
                imageSrc="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
                altText="iPhone 15 Pro"
                oldPrice="$1,199"
                price="$1,079"
                condition="Brand new"
                discountTag="10% OFF"
                title="iPhone 15 Pro"
                description="Titanium smartphone with an advanced camera system, offering stunning photography capabilities and a sleek design."
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)}
              />
              <ProductCard
                id="1"
                imageSrc="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Samsung Galaxy Flip 6"
                oldPrice="$999"
                price="$499"
                condition="Pre-owned"
                discountTag="50% OFF"
                title="Samsung Galaxy Flip 6"
                description="Innovative foldable smartphone with a sleek design that enhances portability while providing a large display for immersive viewing experiences and multitasking."
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)}
                accentColor="#00A6FB"
                buttonRounding={50}
              />
              <ProductCard
                id="2"
                imageSrc="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="iPhone 7"
                oldPrice="$199"
                price="$159"
                condition="Refurbished"
                discountTag="20% OFF"
                title="iPhone 7"
                description="Classic iPhone model with 12MP camera and water resistance, offering reliable performance and essential features for everyday smartphone users."
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)}
                showOutlinedButton={false}
                accentColor="#FF3900"
                outerWidth={392}
                outerHeight={414}
                borderWidth={4}
                containerRounding={14}
                innerContainerRounding={14}
                buttonRounding={14}
                activeComponentScale={1.048}
                darkTextInTags={true}
              />
              <ProductCard
                id="3"
                imageSrc="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=2436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="iPhone X"
                oldPrice="₪999"
                price="₪599"
                condition="משומש"
                discountTag={swappedDiscountTag}
                title="iPhone X"
                description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)}
                showOutlinedButton={true}
                outlineColor="#f1f1f7"
                accentColor="#00A6FB"
                containerRounding={36}
                innerContainerRounding={21}
                buttonRounding={50}
                lightenButtonColor={0.47}
                filledButtonInscription="קנה עכשיו"
                outlinedButtonInscription="הוסף לעגלה"
                swapButtons={true}
                activeComponentScale={1.08}
                mirrorTags={true}
              />
            </div>
          </div>
        );
      case 'whatsapp-widget':
        return (
          <div className="bg-[#050505] min-h-[300px] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[900px] text-center mt-4 px-4">
              Disclaimer: The person, name, and sales pitch demonstrated in this WhatsApp widget are entirely fictitious. Any similarity to actual individual(s) or business(es) is purely coincidental and unintentional. NamerStore is a fictional entity used for illustrative purposes only. The store name is fictional; any resemblance to existing business(es) is entirely coincidental and unintentional. This widget is a conceptual design prototype created for demonstrative and educational purposes and does not represent an actual commercial offering.
            </p> 
            <GradientText fontSize="1.2em">
              {`Button has been clicked ${clickCount.toString()} ${clickCount === 1 ? 'time' : 'times'}`}
            </GradientText>
            <WhatsAppWidget
              name="Alice West"
              photo="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              status="online"
              onWhatsAppClick={handleWhatsAppClick}
              displayedMessage="Hi, I'm Alice from NamerStore. 🚀 Looking for new, pre-owned, or refurbished tech? We have great deals! What device interests you? Let's find a perfect match for you."
              selfPopUpsIn={3000}
            />
          </div>
        );
      case 'diced-hero-section':
        return (
          <div className="bg-[#323236] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
              Disclaimer: This reusable component is a conceptual design prototype created for demonstrative and educational purposes only. All product images displayed here are used for illustrative purposes and do not represent actual items for sale. Product details are fictional and do not reflect real commercial offerings. This website is not affiliated with, endorsed by, or sponsored by any food producers or grocery retailers. This page does not present a commercial offer of any kind. Any resemblance to existing products or services is entirely coincidental.
            </p> 
              <DicedHeroSection
                topText="Discover"
                mainText="Freshness"
                subMainText="Explore a vibrant harvest of organic, seasonal fruits and vegetables, bursting with flavors. Unveil a paramount selection of naturally delicious and nutritious premium produce sourced directly from local farms!"
                buttonText="Shop Now"
                slides={[
                  {
                    title: "Purple Cauliflower",
                    image: "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                  {
                    title: "Strawberry",
                    image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                  {
                    title: "Feijoa",
                    image: "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                  {
                    title: "Fruits and Vegetables",
                    image: "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                ]}
                onMainButtonClick={() => toast.info("Main button clicked for the first element")}
                onGridImageHover={(index) => toast.info(`Grid image ${index} hovered for the first element`)}
                onGridImageClick={(index) => toast.info(`Grid image ${index} clicked for the first element`)}
                topTextStyle={{
                  color: "#2c3e50",
                  fontSize: "1.2rem"
                }}
                mainTextStyle={{
                  fontSize: "4.5rem",
                  gradient: "linear-gradient(45deg, #16a085, #2980b9)"
                }}
                subMainTextStyle={{
                  color: "#34495e",
                  fontSize: "1.3rem"
                }}
                buttonStyle={{
                  backgroundColor: "#27ae60",
                  color: "#ffffff",
                  borderRadius: "2rem",
                  hoverColor: "#2ecc71"
                }}
                componentBorderRadius="8px"
                backgroundColor="#ecf0f1"
                mobileBreakpoint={1000}
                fontFamily="Arial, sans-serif"
              />
              <DicedHeroSection
                topText="גלה"
                mainText="טריות"
                subMainText="חקור יבול עשיר של פירות וירקות אורגניים עונתיים, מלאי טעמים. גלה מבחר מעולה של תוצרת איכותית, טעימה וטבעית, מזינה ומגיעה ישירות מחוות מקומיות!"
                buttonText="קנה עכשיו"
                slides={[
                  {
                    title: "כרובית סגולה",
                    image: "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                  {
                    title: "תותים",
                    image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                  {
                    title: "פיג'ויה",
                    image: "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                  {
                    title: "מגוון פירות וירקות",
                    image: "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  },
                ]}
                onMainButtonClick={() => toast.info("Main button clicked for the second element")}
                onGridImageHover={(index) => toast.info(`Grid image ${index} hovered for the second element`)}
                onGridImageClick={(index) => toast.info(`Grid image ${index} clicked for the second element`)}
                topTextStyle={{
                  color: "#f7f7ff",
                  fontSize: "1.4rem"
                }}
                mainTextStyle={{
                  fontSize: "5rem",
                  gradient: "linear-gradient(45deg, #9F4EFF, #00A6FB)"
                }}
                subMainTextStyle={{
                  color: "#f7f7ff",
                  fontSize: "1.12rem"
                }}
                buttonStyle={{
                  backgroundColor: "#00A6FB",
                  color: "#ffffff",
                  borderRadius: "7px",
                  hoverColor: "#9F4EFF"
                }}
                componentBorderRadius="1.76em"
                backgroundColor="#000000"
                separatorColor="#086CA2"
                maxContentWidth="1190px"
                mobileBreakpoint={910}
                fontFamily="Arial, sans-serif"
                isRTL={true}
              />
          </div>
        );
      case 'animated-testimonials':
        return (
          <>
            <div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
              <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
                Disclaimer: The testimonials and restaurant name presented here are entirely fictional and created for demonstrational purposes only. Shining Yam is not a real establishment or enterprise. These fictional testimonials are designed to showcase the functionality of the Animated Testimonials component and do not represent real customer experiences or opinions. Any resemblance to actual persons, living or dead, or actual businesses is purely coincidental. This demonstration is intended solely for illustrative purposes in a web development context.
              </p>
            </div>
            <div className="bg-[#f1f1f7] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
              <div
                className="items-center justify-center relative flex"
                style={{
                  maxWidth: "1456px",
                }}
              >
                <AnimatedTestimonials
                  testimonials={[
                    {
                      quote:
                        "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
                      name: "Tamar Mendelson",
                      designation: "Restaurant Critic",
                      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      quote:
                        "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
                      name: "Joe Charlescraft",
                      designation: "Frequent Visitor",
                      src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                    },
                    {
                      quote:
                        "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
                      name: "Martina Edelweist",
                      designation: "Satisfied Customer",
                      src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                    },
                  ]}
                  colors={{
                    name: "#0a0a0a",
                    position: "#454545",
                    testimony: "#171717",
                    arrowBackground: "#141414",
                    arrowForeground: "#f1f1f7",
                    arrowHoverForeground: "#00A6FB",
                  }}
                  desktopVersionBottomThreshold={1024}
                  fontSizes={{
                    name: "28px",
                    position: "20px",
                    testimony: "20px",
                  }}
                  spacing={{
                    nameTop: "0",
                    nameBottom: "10px",
                    positionTop: "0",
                    positionBottom: "0.5em",
                    testimonyTop: "1.24em",
                    testimonyBottom: "1em",
                    lineHeight: "1.56",
                  }}
                  imageAspectRatio={1.05}
                />
              </div>
            </div>
            <div className="bg-[#050505] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
              <div
                className="items-center justify-center relative flex"
                style={{
                  maxWidth: "1024px",
                }}
              >
                <AnimatedTestimonials
                  testimonials={[
                    {
                      quote:
                        "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
                      name: "Tamar Mendelson",
                      designation: "Restaurant Critic",
                      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      quote:
                        "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
                      name: "Joe Charlescraft",
                      designation: "Frequent Visitor",
                      src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                    },
                    {
                      quote:
                        "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
                      name: "Martina Edelweist",
                      designation: "Satisfied Customer",
                      src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                    },
                  ]}
                  colors={{
                    name: "#f7f7ff",
                    position: "#e1e1e1",
                    testimony: "#f1f1f7",
                    arrowBackground: "#0582CA",
                    arrowForeground: "#141414",
                    arrowHoverForeground: "#f7f7ff",
                  }}
                  desktopVersionBottomThreshold={1024}
                  fontSizes={{
                    name: "28px",
                    position: "20px",
                    testimony: "20px",
                  }}
                  spacing={{
                    nameTop: "0",
                    nameBottom: "10px",
                    positionTop: "0",
                    positionBottom: "0.5em",
                    testimonyTop: "1.24em",
                    testimonyBottom: "1em",
                    lineHeight: "1.56",
                  }}
                  imageAspectRatio={1.05}
                />
              </div>
            </div>
            <div className="bg-[#f1f1f7] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
              <div
                className="items-center justify-center relative flex"
                style={{
                  maxWidth: "1200px",
                }}
              >
                <AnimatedTestimonials
                  testimonials={[
                    {
                      quote:
                        "הייתי מרותק מהאוכל — כל מנה מלאה בטעם! והייתי יכול לראות באמת שהם משתמשים במרכיבים של איכות גבוהה. הצוות היה ידידותי ותשומת לב, הולך עד הסוף. אני בהחלט אחזור ליותר!",
                      name: "תמר מנדלסון",
                      designation: "מבקר מסעדות",
                      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      quote:
                        "מקום זה עלה על כל הציפיות! האווירה מזמינה, והצוות באמת הולך מעבר לכל גבול כדי להבטיח ביקור מדהים. אני בהחלט אמשיך לחזור לחוויית אכילה יוצאת דופן.",
                      name: "ג'ו צ'רלסקראפט",
                      designation: "מבקר תדיר",
                      src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                    },
                    {
                      quote:
                        "שיינין ים הוא פנינה מוסתרת! מהרגע שנכנסתי, ידעתי שאני בדרך למתנה. השירות המושלם והתשומת הלב הכללית לפרטים יצרו חוויה זכורה. אני ממליץ מאוד עליו!",
                      name: "מרטינה אדלווייסט",
                      designation: "לקוח מרוצה",
                      src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
                    },
                  ]}
                  colors={{
                    name: "#0a0a0a",
                    position: "#454545",
                    testimony: "#171717",
                    arrowBackground: "#141414",
                    arrowForeground: "#f1f1f7",
                    arrowHoverForeground: "#00A6FB",
                  }}
                  desktopVersionBottomThreshold={1024}
                  fontSizes={{
                    name: "32px",
                    position: "21px",
                    testimony: "21px",
                  }}
                  spacing={{
                    nameTop: "0",
                    nameBottom: "12px",
                    positionTop: "0",
                    positionBottom: "0.5em",
                    testimonyTop: "1.24em",
                    testimonyBottom: "1em",
                    lineHeight: "1.56",
                  }}
                  imageAspectRatio={1.05}
                  isRTL={true}
                />
              </div>
            </div>
          </>
        );
      case 'sequence-hero-section':
        return (
          <>
          <p className="text-[#F7F7FF] text-m text-center m-8 px-4">
            Disclaimer: This SequenceHeroSection component is a conceptual design prototype created for demonstrative and educational purposes only. The travel experiences, destinations, and services described are fictional and do not represent actual offerings. The customer ratings and profile images are simulated and do not depict real individuals or their opinions. This component is not affiliated with, endorsed by, or sponsored by any travel agencies, tour operators, or hospitality services. The content presented does not constitute a commercial offer of any kind. Any resemblance to actual travel products, services, or persons is purely coincidental. This component is intended solely for illustration of web design concepts and should not be used as a basis for travel planning or decision-making.
          </p>

          <div className="bg-[#f1f1f7] p-8 rounded-lg items-center justify-center relative flex" style={{ height: window.innerWidth >= 1024 ? 'calc(100vh - 69px)' : 'auto' }}>
            <SequenceHeroSection 
              title="Roam Free"
              subtitle="Discover the world's hidden gems with our curated adventures"
              steps={[
                {
                  number: "01",
                  title: "Choose Your Dream Destination",
                  description: "Browse through our handpicked selection of breathtaking locations, from tropical paradises to bustling cityscapes.",
                  bgColor: "bg-blue-400"
                },
                {
                  number: "02",
                  title: "Customize Your Perfect Itinerary",
                  description: "Tailor your trip with a mix of guided tours and free time, ensuring a balance of structure and spontaneity.",
                  bgColor: "bg-indigo-400"
                },
                {
                  number: "03",
                  title: "Immerse in Local Culture",
                  description: "Connect with local communities, taste authentic cuisines, and participate in traditional activities for a truly enriching experience.",
                  bgColor: "bg-green-400"
                }
              ]}
              ctaText="Explore Now"
              ctaLink="https://maxim-bortnikov.netlify.app/"
              carouselImages={[
                "https://images.unsplash.com/photo-1580536792511-b3cc93006b70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1618415112746-d999da95f609?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ]}
              profiles={[
                { 
                  name: "Tamar Mendelson", 
                  image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                  rating: 4.8 
                },
                { 
                  name: "Joe Charlescraft", 
                  image: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                  rating: 4.9 
                },
                { 
                  name: "Martina Edelweist", 
                  image: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                  rating: 5.0 
                }
              ]}
            />
          </div>
          </>
        );
      case 'simple-navbar':
        return (
          <>
            <div style={{ fontSize: '21px'}} className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-col items-center justify-center">
              Disclaimer: The website name, slogan, phone number, and all associated messengers displayed on the navbar are entirely fictional and created for demonstration purposes only. Any resemblance to actual entities, whether in name, content, or appearance, is purely coincidental and unintended.
              <div style={{height: '40px'}}></div>
              Insert this element at the top of the page to compensate for the navbar height:
              <div style={{height: '8px'}}></div>
              {disclaimerString}
            </div>
            <SimpleNavbar
              desktopPadding="24px"
              mobilePadding="12px"
              desktopFont="22px"
              mobileFont="20px"
              desktopSubFont="14px"
              mobileSubFont="12px"
              displayNavigationThreshold={846}
              maxWidth="1536px"
              onNavItemClick={(itemLabel) => toast.info(`Clicked: ${itemLabel}`)}
              appName="Shakhor"
              appSubInscription="Cool, like a midnight in Austin!"
              phoneNumber="+1 (234) 567-8901"
              phoneSubInscription="Telegram, WhatsApp, Viber"
              items={[
                { icon: <IconHome size={22} />, label: 'Home' },
                { icon: <IconStar size={22} />, label: 'Food of the Day' },
                { icon: <IconUserStar size={22} />, label: 'Customer Reviews' },
                { icon: <IconList size={22} />, label: 'Menu' },
                { icon: <IconCalendarEvent size={22} />, label: 'Events & Promotions' },
                { icon: <IconInfoCircle size={22} />, label: 'About Us' },
              ]}
              backgroundColor="#171717"
              iconForegroundColor="#00A6FB"
              stripeColor="#616161"
              defaultTextColor="#00A6FB"
              foregroundHoverColor="#f1f1f7"
              tooltipBackgroundColor="#4ac2ff"
              tooltipForegroundColor="#050505"
              activeIconColor="#f7f7ff"
              activeIconBackgroundColor="#00A6FB"
              activeIconGlowColor="#00A6FB"
              onAppNameClicked={() => toast.info("App Name Clicked")}
              onPhoneNumberClicked={() => toast.info("Phone Number Clicked")}
            />
          </>
        );
      case 'file-container':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            {/* Basic usage example */}
            <FileContainer 
              id="1" // Unique identifier for the container
              title="Miami_skyline_at_night.jpg" // Title of the file
              fileSize="Size: 4.51 MB" // Size of the file displayed to the user
              description="A stunning photograph of the Miami skyline illuminated at night, showcasing the vibrant city lights and reflections on the water." // Description of the file's content
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              filledButtonInscription="Download" // Required text for filled button inscription
              outlinedButtonInscription="Properties" // Required text for outlined button inscription
              borderWidth={2} // Width of the border (optional, default is 2)
            />

            {/* Second container for a zip archive, fully in Hebrew with swapped buttons */}
            <FileContainer 
              id="2" // Unique identifier for the container
              title="קובץ_דחוס_חשוב.zip" // "Important Compressed File"
              fileSize="גודל: 100.12 MB" // "Size:" in Hebrew
              description="קובץ דחוס המכיל מסמכים חשובים שצריך לעבור עליהם לפני הפגישה, כולל דוחות ומצגות." // "A compressed file containing important documents to review before the meeting, including reports and presentations."
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              metadataIntegrity={true} // Indicates if metadata integrity is maintained (optional)
              filledButtonInscription="הורדה" // "Download" in Hebrew (required)
              outlinedButtonInscription="שתף" // "Share" in Hebrew (required)
              swapButtons={true} // Optional, defaults to false; determines if buttons should be swapped
              borderWidth={3} // Width of the border (optional)
            />

            {/* Third container for a TypeScript file */}
            <FileContainer 
              id="3" // Unique identifier for the container
              title="FileContainer.tsx" // Title of the TypeScript file
              fileSize="Size: 15.3 KB" // Size of the TypeScript file displayed to the user
              description="This TypeScript file contains essential components and logic for rendering the FileContainer component in your application." // Description of its content
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              metadataIntegrity={false} // Indicates if metadata integrity is maintained (optional)
              filledButtonInscription="Send" // Required text for filled button inscription
              outlinedButtonInscription="More" // Required text for outlined button inscription
              borderWidth={1} // Width of the border (optional)
            />

            {/* Fourth container for a JavaScript definition file */}
            <FileContainer 
              id="4" // Unique identifier for the container
              title="app_logic.js" // Title of the JavaScript file
              fileSize="Size: 45.7 KB" // Size of the JavaScript file displayed to the user
              description="This JavaScript file contains essential application logic that is crucial for the functionality of the web application. Ensure all functions are properly defined." // Description of its content
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace toast.info with toast.info
              filledButtonInscription="Download" // Required text for filled button inscription
              outlinedButtonInscription="Properties" // Required text for outlined button inscription
              borderWidth={4} // Width of the border (optional)
            />
          </div>
        );
      case 'fishy-button':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            <FishyButton type="button" className={`button--1`}
              onClick={() => toast.info("The first button has been clicked")} 
            >
              Ekhad
            </FishyButton>
            <FishyButton type="button" className={`button--2`}
              onClick={() => toast.info("The second button has been clicked")} 
            >
              Two
            </FishyButton>
            <FishyButton type="button" className={`button--3`}
              onClick={() => toast.info("The third button has been clicked")} 
            >
              Shalosh
            </FishyButton>
          </div>
        );
      case 'position-aware-button':
        return (
          <div className="bg-[#EDEDED] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <PositionAwareButton 
              buttonText="Click Me!"
              onClick={() => toast.info("The first button has been clicked")}
            />
            <PositionAwareButton 
              buttonText="Click Me Too!"
              buttonWidth="220px"
              borderRadius="0.76em"
              buttonColor="#6A0DAD"
              onClick={() => toast.info("The second button has been clicked")}
            />
          </div>
        );
      case 'fancy-notification':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <ChronicleButton 
              text='Success'
              onClick={showSuccessNotification}
            />
            <ChronicleButton 
              text='Error'
              onClick={showErrorNotification}
              hoverColor="#ff6b7e"
            />
            <FancyNotification
              type={notificationStatus}
              message={notificationMessage}
              message1={notificationMessage1}
              isVisible={isNotificationVisible}
              onClose={handleNotificationClose}
              successMessage={customSuccessMessage} // Pass custom success message
              errorMessage={customErrorMessage}     // Pass custom error message
            />
          </div>
        );
      case 'magic-button':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-12 flex items-center justify-center">
             <MagicButton onButtonClick={() => toast.info("The magic button has been clicked")} inscription="Magic Button" />

             <MagicButton onButtonClick={() => toast.info("The small magic button has been clicked")} inscription="That one's smaller!" fontSize="1rem"/>
          </div>
        );
      case 'halomot-button':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <HalomotButton 
              inscription="חלומות" 
              onClick={() => toast.info("Halomot button has been clicked!")}
            />
          </div>
        );
      case 'shamayim-toggle-switch':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
            minHeight: '300px',
            borderRadius: '0.5rem',
            backgroundImage: 'linear-gradient(45deg, #47b6d1, #90e0ec)',
            fontSize: '2em',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              <span style={{ color: '#E0F9FC' }}>Mobile Data</span>
              <ShamayimToggleSwitch 
              defaultState={false} 
              onChange={(isOn) => toast.info(`Top switch is now ${isOn ? 'ON' : 'OFF'}`)} 
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              <ShamayimToggleSwitch 
              defaultState={false} 
              mirrored 
              onChange={(isOn) => toast.info(`Bottom switch is now ${isOn ? 'ON' : 'OFF'}`)} 
              />
              <span style={{ color: '#E0F9FC' }}>נתונים סלולריים</span>
            </div>
          </div>
        );
      case 'skeuomorphic-toggle':
        return (
          <div className="bg-[#2e3138] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <div style={{ 
              minHeight: '300px', 
              borderRadius: '0.5rem', 
              backgroundColor: '#454954', 
              color: '#e0e0e0',
              padding: '20px',
              transition: 'background-color 0.3s, color 0.3s'
            }}>
              <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold'}}>Settings</h1>
              
              <div style={{ width: '250px', margin: '0 auto' }}>
                <SkeuomorphicToggle
                  label="Hydration"
                  name="hydration"
                  checked={hydration}
                  onChange={handleHydrationChange}
                  onText="ON"
                  offText="OFF"
                  hue={210}
                  hueSuccess={120}
                />
      
                <SkeuomorphicToggle
                  label="Notifications"
                  name="notifications"
                  checked={notifications}
                  onChange={handleNotificationsChange}
                  onText="ON"
                  offText="OFF"
                  hue={180}
                  hueSuccess={90}
                />
      
                <SkeuomorphicToggle
                  label="Auto-Save"
                  name="autoSave"
                  checked={autoSave}
                  onChange={handleAutoSaveChange}
                  onText="YES"
                  offText="NO"
                  hue={260}
                  hueSuccess={45}
                />
              </div>
            </div>
          </div>
        );
      case 'rising-droplets':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center relative">
            <ChronicleButton text='Enable/Disable' onClick={toggleLoader} />
   
            {loaderVisible && (
              <RisingDroplets colors={['#059FF6', '#8A2BE2', '#FF8C00']} />
            )}
          </div>
        );
      case 'bauhaus-card':
        return (
          <div className="bg-[#252533] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            <BauhausCard
                id="1"
                accentColor="#156ef6"
                topInscription="Uploaded on 12/31/2024"
                mainText="Financial Report.zip"
                subMainText="Downloading File..."
                progressBarInscription="Progress:"
                progress={75.98}
                progressValue="75.98%"
                filledButtonInscription="Share"
                outlinedButtonInscription="Bookmark"
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)} 
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)} 
                onMoreOptionsClick={(id) => toast.info(`More options dots clicked for ID: ${id}`)} 
                mirrored={false}
                swapButtons={false}
                ChronicleButtonHoverColor="#2c7cf7"
            />

            <BauhausCard
                id="2"
                accentColor="#24d200"
                topInscription="$4.99"
                mainText="Next.js Basics"
                subMainText="This course doesn't exist!"
                progressBarInscription="Spots left:"
                progress={20}
                progressValue="20/100"
                filledButtonInscription="Enroll"
                outlinedButtonInscription="Bookmark"
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)} 
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)} 
                onMoreOptionsClick={(id) => toast.info(`More options dots clicked for ID: ${id}`)} 
                mirrored={false}
                swapButtons={false}
                ChronicleButtonHoverColor="#29f000"
            />

            <BauhausCard
                id="3"
                borderRadius="2.25em"
                accentColor="#fc6800"
                borderWidth="3px"
                topInscription="1 de julio en Miami"
                mainText="Nombre de la conferencia"
                subMainText="Descripción de la conferencia."
                progressBarInscription="Plazas disponibles:"
                progress={10}
                progressValue="32"
                filledButtonInscription="Inscribirse"
                outlinedButtonInscription="Detalles"
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)} 
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)} 
                onMoreOptionsClick={(id) => toast.info(`More options dots clicked for ID: ${id}`)} 
                mirrored={false}
                swapButtons={false}
                ChronicleButtonHoverColor="#ff7717"
            />

            <BauhausCard
                id="4"
                borderRadius="1em"
                backgroundColor="#151419"
                separatorColor="#5b5452"
                accentColor="#8f10f6"
                borderWidth="4px"
                topInscription="דאלאס - תל אביב"
                mainText="מגיע בשעה 9:03 לפי"
                subMainText="שם שדה התעופה"
                progressBarInscription="מגיע בעוד:"
                progress={90}
                progressValue="30 דקות"
                filledButtonInscription="שתף"
                outlinedButtonInscription="עוד"
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)} 
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)} 
                onMoreOptionsClick={(id) => toast.info(`More options dots clicked for ID: ${id}`)} 
                mirrored={true}
                swapButtons={true}
                ChronicleButtonHoverColor="#a540f8"
            />
          </div>
        );
      case 'dutch-card':
        return (
          <DutchCard width="100%" height="300px" borderRadius="0.5em" background="#050505">
            <div className=" gap-10 flex items-center justify-center">
              <DutchCard width="300px" height="250px">
                <p>The content goes here</p>
              </DutchCard>
              <DutchCard width="200px" height="250px" reverse borderRadius="2.25em">
                <p>Od Ekhad?</p>
              </DutchCard>
            </div>
          </DutchCard>
        );
      case 'glowing-card':
        return (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            gap: '36px', // Space between items
            justifyContent: 'center', // Center items horizontally
            padding: '32px', // Optional padding for the container
            backgroundColor: '#050505', // Background color of the container
            borderRadius: '8px', // Rounded corners for the container
            minHeight: '300px' // Minimum height for the container
          }}>
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
        );
      case 'metamorphic-loader':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <MetamorphicLoader size={260} />
            <MetamorphicLoader size={124} color="#156ef6" lighteningStep={16} />
            <MetamorphicLoader size={216} color="#6cc606" />
            <MetamorphicLoader size={124} color="#ffa300" lighteningStep={14} />
            <MetamorphicLoader size={300} color="#019a41" lighteningStep={50} />
          </div>
        );
      case 'multi-colored-text':
        return (
          <div className="bg-[#f0f8ff] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <MultiColoredText
              inscription="פלאם חארבור"
              fontSize="7em"
              primaryColor="#00aaff"
              secondaryColor="#5c3fcd"
              tertiaryColor="#3a3a3a"
              quaternaryColor="#f9002f"
              quinaryColor="#f1b211"
              separatorRotation="232deg"
            />
          </div>
        );
      case 'pricing-card':
        return (
          <div className="bg-[#212121] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            <PricingCard
              title="Free Plan" // The name of the pricing plan
              price="$0/month" // The cost of the plan
              features={[ // Array of features included in the plan. Empty strings represent blank lines.
                "1 user",
                "Basic feature set",
                "500 MB storage",
                "Community support",
                "",
                ""
              ]}
              buttonText="Start for Free" // Text displayed on the call-to-action button
              accentColor="272, 100%, 50%" // Color used for accents and hover effects (in HSL format)
              onButtonClick={() => toast.info('Free Plan clicked')} // Function called when the button is clicked
              borderWidth="7px" // (Optional) Width of the border for the card
              width="320px" // (Optional) Width of the card
            />
            <PricingCard
              title="תוכנית מתחילים" // The name of the pricing plan
              price="₪49.99/חודש" // The cost of the plan
              features={[ // Array of features included in the plan. Empty strings represent blank lines.
                "עד 5 משתמשים",
                "תכונות מתקדמות",
                "10 GB אחסון",
                "תמיכה בדוא\"ל",
                "גיבוי יומי",
                ""
              ]}
              buttonText="התחל עכשיו" // Text displayed on the call-to-action button
              accentColor="221, 100%, 50%" // Color used for accents and hover effects (in HSL format)
              onButtonClick={() => toast.info('Starter Plan clicked')} // Function called when the button is clicked
              mirrored={true} // (Optional) Reverses text direction and alignment
              borderRadius="2.25em" // (Optional) Border radius of the card
              maxWidth="350px" // (Optional) Maximum width of the card
              defaultBackgroundColor="#363636" // (Optional) Background color of the card
              borderColor="#ffffff56" // (Optional) Border color of the card
            />
            <PricingCard
              title="Plan Pro" // The name of the pricing plan
              price="€99.99/mes" // The cost of the plan
              features={[ // Array of features included in the plan. Empty strings represent blank lines.
                "Usuarios ilimitados",
                "Todas las características",
                "100 GB de almacenamiento",
                "Soporte prioritario",
                "Integraciones API",
                "Análisis avanzados"
              ]}
              buttonText="Actualizar a Pro" // Text displayed on the call-to-action button
              accentColor="120, 100%, 25%" // Color used for accents and hover effects (in HSL format)
              onButtonClick={() => toast.info('Pro Plan clicked')} // Function called when the button is clicked
              borderColor="#ffffff22" // (Optional) Border color of the card
            />
            <PricingCard
              title="Gschäfts-Plaan" // The name of the pricing plan
              price="CHF 199.99/Monet" // The cost of the plan
              features={[ // Array of features included in the plan. Empty strings represent blank lines.
                "Unändlich Benutzer",
                "Alli Funktione",
                "Unändliche Spycherplatz",
                "Persönliche Betreuig",
                "Massagschniderti Lösige",
                "Vor-Ort-Schulig"
              ]}
              buttonText="Kontaktiered üs" // Text displayed on the call-to-action button
              accentColor="0, 100%, 50%" // Color used for accents and hover effects (in HSL format)
              onButtonClick={() => toast.info('Enterprise Plan clicked')} // Function called when the button is clicked
            />
          </div>
        );
      case 'bauble-toggle':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
            minHeight: '300px',
            borderRadius: '0.5rem',
            background: '#050505',
            fontSize: '3em',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2em' }}>
              <span style={{ color: '#E0F9FC' }}>The only</span>
              <div style={{ width: '114px', height: '114px', overflow: 'hidden', transform: 'scale(5)' }}>
                <BaubleToggle 
                  onToggleChange={(isOn) => toast.info(`Toggle is now ${isOn ? 'ON' : 'OFF'}`)} 
                />
              </div>
            </div>
          </div>
        );
      case 'haze-card':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <HazeCard 
                borderColor="white"
                borderRadius="25px"
                borderWidth="4px"
                width="300px"
                height="330px"
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <p style={{ color: 'white', fontSize: '16px' }}>The content goes here</p>
                </div>
            </HazeCard>
          </div>
        );
      case 'fancy-navbar':
        return (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '100px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px',
            backgroundColor: '#181820',
            borderRadius: '8px',
            minHeight: '640px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}>
              <h2 style={{ 
                color: '#f7f7ff', 
                fontSize: '24px', 
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                Default Behavior
              </h2>
              <FancyNavBar
                items={[
                  { icon: <IconUserFilled size={24} />, label: 'Profile Info' },
                  { icon: <IconFolderFilled size={24} />, label: 'Personal Files' },
                  { icon: <IconFileFilled size={24} />, label: 'Shared Files' },
                  { icon: <IconCircleArrowDownFilled size={24} />, label: 'Received Files' },
                  { icon: <IconCircleArrowUpFilled size={24} />, label: 'Sent Files' },
                  { icon: <IconLockFilled size={24} />, label: 'Password Vault' },
                  { icon: <IconSettingsFilled size={24} />, label: 'Settings' },
                  { icon: <IconInfoCircleFilled size={24} />, label: 'About' },
                ]}
                onItemHover={(index) => toast.info(`First NavBar - Hovering item: ${index}`)}
                onItemClick={(index) => toast.info(`First NavBar - Clicked item: ${index}`)}
                activeIconColor="#00A6FB"
                backgroundColor="#f7f7ff"
                foregroundColor="#050505"
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}>
              <h2 style={{ 
                color: '#f7f7ff', 
                fontSize: '24px', 
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                Tooltip Disappears on Click
              </h2>
              <FancyNavBar
                items={[
                  { icon: <IconInfoCircleFilled size={24} />, label: "אודות" },
                  { icon: <IconSettingsFilled size={24} />, label: "הגדרות" },
                  { icon: <IconLockFilled size={24} />, label: "כספת סיסמאות" },
                  { icon: <IconCircleArrowUpFilled size={24} />, label: "קבצים שנשלחו" },
                  { icon: <IconCircleArrowDownFilled size={24} />, label: "קבצים שהתקבלו" },
                  { icon: <IconFileFilled size={24} />, label: "קבצים משותפים" },
                  { icon: <IconFolderFilled size={24} />, label: "קבצים אישיים" },
                  { icon: <IconUserFilled size={24} />, label: "מידע פרופיל" },
                ]}
                onItemHover={(index) => toast.info(`Second NavBar - Hovering item: ${index}`)}
                onItemClick={(index) => toast.info(`Second NavBar - Clicked item: ${index}`)}
                activeIconColor="#9F4EFF"
                backgroundColor="#020203"
                foregroundColor="#f7f7ff"
                removeTooltipOnClick={true}
              />
            </div>
          </div>
        );
      case 'unfolding-navbar':
        return (
          <div className="bg-[#050505] rounded-lg min-h-[300px] flex items-center justify-center">
            <UnfoldingNavbar
              items={[
                { icon: <IconHome size={36} />, label: 'Home' },
                { icon: <IconFile size={36} />, label: 'Files' },
                { icon: <IconPencil size={36} />, label: 'Drafts' },
                { icon: <IconLogout size={36} />, label: 'Log Out' },
              ]}
              rolloutWidth="124px"
              onItemClick={(label) => toast.info(`Clicked on ${label}`)} // Inline function
            />
          </div>
        );
      case 'modern-retro-button':
        return (
          <div className="bg-[#3d3e4a] p-8 rounded-lg min-h-[300px] flex flex-col items-center justify-center gap-6">
            <div className="text-center mb-4">
              <p className="text-white text-3xl font-bold mb-2">⚠️ Epilepsy Warning ⚠️</p>
              <p className="text-m">This button flickers on hover.</p>
            </div>
            <ModernRetroButton 
              label="Modern, Retro, or both?"
              onClick={() => toast.info('Modern Retro Button clicked!')}
            />
          </div>
        );
      case 'half-filled-text':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <HalfFilledText 
              inscription="חירות"
              fontSize="12em"
              fillColor="#c19bf5"
              outlineColor="#8338ec"
              outlineWidth="3px"
            />
          </div>
        );
      case 'gradient-text':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-col gap-6 items-center justify-center">
            <p style={{ textAlign: 'center', fontSize: '2em'}}>
              We don't see things as they are,{' '}
              <GradientText>we see them as we are.</GradientText>
            </p>
            <GradientText fontSize="1em">Anaïs Nin</GradientText>
          </div>
        );
      case 'modern-navbar':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <ModernNavbar
                items={[
                    { icon: <IconUserFilled size={24} />, label: 'Profile Info' },
                    { icon: <IconFolderFilled size={24} />, label: 'Personal Files' },
                    { icon: <IconFileFilled size={24} />, label: 'Shared Files' },
                    { icon: <IconCircleArrowDownFilled size={24} />, label: 'Received Files' },
                    { icon: <IconCircleArrowUpFilled size={24} />, label: 'Sent Files' },
                    { icon: <IconLockFilled size={24} />, label: 'Password Vault' },
                    { icon: <IconSettingsFilled size={24} />, label: 'Settings' },
                    { icon: <IconInfoCircleFilled size={24} />, label: 'About' },
                ]}
                onItemHover={(index) => toast.info(`Hovering item ${index}`)}
                onItemClick={(index) => toast.info(`Clicked item ${index}`)}
                defaultItem={1}
            />
          </div>
        );
      case 'hearts-button':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-col items-center justify-center gap-6">
            <HeartsButton inscription="חארטס" onClick={() => {toast.info('First HeartsButton clicked!');}}/>
            <HeartsButton inscription="Hover me" onClick={() => {toast.info('Second HeartsButton clicked!');}}/>
            <HeartsButton inscription="Langzeitgedächtnis" padding="70px" onClick={() => {toast.info('Third HeartsButton clicked!');}}/>
          </div>
        );
      case 'simple-dropzone':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <SimpleDropzone 
              onFilesAdded={handleFilesFromSimpleDropzone}
            />
            <SimpleDropzone 
              onFilesAdded={handleFilesFromSimpleDropzone}
              activeInscription="שחרר את הקבצים כאן..."
              defaultInscription="גרור ושחרר קבצים כאן או לחץ לבחירת קבצים"
              borderColor="#888" 
              borderWidth="4px"
              textColor="#fff" 
              borderRadius="2.5rem" 
            />
          </div>
        );
      case 'fancy-hero-section':
        return (
          <FancyHeroSection
            text={["A FANCY", "HERO SECTION", "FOR YOUR", "WEBSITE"]}
            customWidth="100%"
            customHeight="800px"
            customFontSize="6.9rem"
            onImageClick={(index) => toast.info(`Clicked element ${index}`)}
            customImageData={[
              {
                component: (
                  <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white">
                    Custom Component 1
                  </div>
                ),
                title: "Blue",
                description: "This is a custom blue component"
              },
              {
                component: (
                  <div className="w-full h-full text-[#242434] bg-green-500 flex items-center justify-center text-white">
                    החיים מוזרים
                  </div>
                ),
                title: "Yarok",
                description: "This is a custom green component"
              },
              {
                component: (
                  <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white">
                    Custom Component 3
                  </div>
                ),
                title: "Purple",
                description: "This is a custom purple component"
              }
            ]}
            framerSize={[336, 190]}
            textBottom="-58px"
            titleColor="#f0f0f0"
            titleSize="52px"
            descriptionColor="#eeeeee"
            descriptionSize="16px"
          />
        );
      case 'modern-sidebar':
        return (
          <div className="bg-[#262630] rounded-lg min-h-[300px] w-[calc(100%-360px)] gap-9 flex items-center justify-between">
            <ModernSidebar
              items={[
                { icon: <IconUser size={24} />, label: 'Profile Info' },
                { icon: <IconFolder size={24} />, label: 'Personal Files' },
                { icon: <IconFile size={24} />, label: 'Shared Files' },
                { icon: <IconCircleArrowDown size={24} />, label: 'Received Files' },
                { icon: <IconCircleArrowUp size={24} />, label: 'Sent Files' },
                { icon: <IconLock size={24} />, label: 'Password Vault' },
                { icon: <IconSettings size={24} />, label: 'Settings' },
                { icon: <IconInfoCircle size={24} />, label: 'About' },
              ]}
              onItemHover={(index) => toast.info(`Hovering item:${index}`)}
              onItemClick={(index) => toast.info(`Clicked item:${index}`)}
              appLogo={
                <div style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(3, 1fr)',
                  gridTemplateRows:'repeat(3, 1fr)',
                  width:'44px',
                  height:'44px',
                  marginRight:'8px', // Adjust as needed
                  marginLeft:'8px', // Adjust as needed
                }}>
                  <Square color="#5c3fcd" />
                  <Square color="#7538CB" />
                  <Square color="#4246CE" />
                  <Square color="#5c3fcd" />
                  <Square color="#5c3fcd" />
                  <Square color="#4246CE" />
                  <Square color="#5c3fcd" />
                  <Square color="#00000000" />
                  <Square color="#4246CE" />
                </div>
              }
            />
            
            <ModernSidebar
              items={[
                { icon: <IconUser size={24} />, label: 'מידע על פרופיל' }, // Profile Info
                { icon: <IconFolder size={24} />, label: 'קבצים אישיים' }, // Personal Files
                { icon: <IconFile size={24} />, label: 'קבצים משותפים' }, // Shared Files
                { icon: <IconCircleArrowDown size={24} />, label: 'קבצים שהתקבלו' }, // Received Files
                { icon: <IconCircleArrowUp size={24} />, label: 'קבצים שנשלחו' }, // Sent Files
                { icon: <IconLock size={24} />, label: 'כספת סיסמאות' }, // Password Vault
                { icon: <IconSettings size={24} />, label: 'הגדרות' }, // Settings
                { icon: <IconInfoCircle size={24} />, label: 'אודות' }, // About
              ]}
              onItemHover={(index) => toast.info(`Hovering item:${index}`)}
              onItemClick={(index) => toast.info(`Clicked item:${index}`)}
              isRTL={true}
              logoutLabel="התנתקות" // Log out in Hebrew
              appLogo={
                <div style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(3, 1fr)',
                  gridTemplateRows:'repeat(3, 1fr)',
                  width:'44px',
                  height:'44px',
                  marginRight:'8px', // Adjust as needed
                  marginLeft:'8px', // Adjust as needed
                }}>
                  <Square color="#5c3fcd" />
                  <Square color="#7538CB" />
                  <Square color="#4246CE" />
                  <Square color="#5c3fcd" />
                  <Square color="#5c3fcd" />
                  <Square color="#4246CE" />
                  <Square color="#5c3fcd" />
                  <Square color="#00000000" />
                  <Square color="#4246CE" />
                </div>
              }
            />
          </div>
        );
      case 'space-button':
        return (
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '36px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px',
            backgroundColor: '#03010b',
            borderRadius: '8px',
            minHeight: '300px',
            width: '100%'
          }}>
            <SpaceButton 
                inscription="Outer Space"
                variant="outer"
                onClick={() => toast.info("The Outer Space button has been clicked")}
              />
              <SpaceButton 
                inscription="Inner Space (1px border)"
                borderWidth="1px"
                onClick={() => toast.info("The Inner Space button has been clicked")}
              />
              <SpaceButton 
                inscription="Outer Space (1px, thin font)"
                isBold={false}
                variant="outer"
                onClick={() => toast.info("The Outer Space thin font button has been clicked")}
              />
              <SpaceButton 
                inscription="5px Border"
                borderWidth="5px"
                onClick={() => toast.info("The 5px Border button has been clicked")}
              />
              <SpaceButton 
                inscription="Hover any of these"
                borderRadius="2em"
                onClick={() => toast.info("The Hover any of these button has been clicked")}
              />
              <SpaceButton 
                inscription="פונט גדול"
                fontSize="32px"
                variant="outer"
                onClick={() => toast.info("The large font button has been clicked")}
              />
          </div>
        );
      case 'spacy-pricing-card':
        return (
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
              onChoosePlan={() => toast.info("Personal plan selected")}
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
              onChoosePlan={() => toast.info("CloudCompute Pro plan selected")}
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
              onChoosePlan={() => toast.info('Starter Plan clicked')}
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
              onChoosePlan={() => toast.info('Monthly strawberry delivery subscription clicked')}
            />
          </div>
        );
      case 'structured-block':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            gap: '0px', // Remove gap between items
            justifyContent: 'flex-start', // Align items to the top
            alignItems: 'stretch', // Make items take full width
            backgroundColor: '#050505', // Background color of the container
            borderRadius: '8px', // Rounded corners for the container
            minHeight: '300px' // Minimum height for the container
          }}>
            <StructuredBlock>
              Section Header
            </StructuredBlock>
            <StructuredBlock
              textColor="#f7f7ff"
              desktopPadding={{
                left: "24px",
                right: "24px",
                top: "0px",
                bottom: "0px",
              }}
              mobilePadding={{
                left: "10px",
                right: "10px",
                top: "0px",
                bottom: "0px",
              }}
              desktopFontSize="1.32rem"
              mobileFontSize="1.14rem"
            >
              It can <GradientText>wrap</GradientText> other elements
            </StructuredBlock>
            <StructuredBlock
              desktopTextAlign="right"
              mobileTextAlign="right"
              textDirection="rtl"
            >
              טקסט מיושר ל<GradientText>ימין</GradientText>.
            </StructuredBlock>
          </div>
        );
      case 'section-container':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            gap: '0px', // Remove gap between items
            justifyContent: 'flex-start', // Align items to the top
            alignItems: 'stretch', // Make items take full width
            backgroundColor: '#050505', // Background color of the container
            borderRadius: '8px', // Rounded corners for the container
            minHeight: '300px' // Minimum height for the container
          }}>
            <SectionContainer 
              desktopPadding={{ left: "40px", right: "40px", top: "40px", bottom: "20px" }}
              mobilePadding={{ left: "20px", right: "20px", top: "20px", bottom: "20px" }}
            >
              This text is left-aligned on desktop and centered on mobile.
            </SectionContainer>
          </div>
        );
      case 'about-us-section':
        return (
          <div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
              Disclaimer: All products, logos, brand identifiers, and trademarks displayed on this website are the sole property of their respective owners. These items are used for demonstrational and illustrative purposes only. The Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased here. This website does not present a commercial offer of any kind. The enterprise name and description are fictional; any resemblance to existing business(es) is entirely coincidental and unintentional.
            </p> 
            <AboutUsSection
              aboutUsImages={[
                "https://images.unsplash.com/photo-1622531636820-5d727319e45d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1603389335957-10bea39c9d32?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1695753456538-3d29fa0a4ba0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ]}
              aboutUsDescription={`
                Shakhor opened in July 2024 to address the growing demand for affordable and high-quality electronics in Austin, Texas. We offer competitive prices on a wide range of new, refurbished, and pre-owned products, including smartphones, tablets, laptops, gaming consoles, wearables, and more. Our carefully curated selection caters to tech enthusiasts, students, and professionals alike. What sets us apart is our commitment to customer satisfaction. Our expert staff provides personalized guidance to help you find the perfect device for your unique needs and lifestyle. By choosing Shakhor Electronics, you're not just getting great deals on top-notch technology; you're joining a community dedicated to making cutting-edge electronics accessible to all. We ensure that customers with limited budgets can afford quality refurbished and pre-owned devices, allowing everyone to experience the benefits of modern technology without breaking the bank.
              `}
              onButtonClick={() => toast.info('The "Contact Us" button has been clicked!')}
              onGridImageClick={(index) => toast.info(`Grid image ${index + 1} clicked!`)}
              onGridImageHover={(index) => toast.info(`Grid image ${index + 1} hovered!`)}
            />
          </div>
        );
      case 'unfolding-faq':
        return (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            gap: '36px', // Space between items
            justifyContent: 'center', // Center items horizontally
            padding: '32px', // Optional padding for the container
            backgroundColor: '#111111', // Background color of the container
            borderRadius: '8px', // Rounded corners for the container
            minHeight: '300px', // Minimum height for the container
            border: '1px solid #262626'
          }}>
            <UnfoldingFAQ faqs={[
              {
                question: "Lao Tzu",
                answer: "When I let go of what I am, I become what I might be."
              },
              {
                question: "Oscar Wilde",
                answer: <>
                  There are only two tragedies in life:
                  <ul style={{ listStyleType: 'none', paddingLeft: '1em', marginTop: '0.5em' }}>
                    <li style={{ marginBottom: '0.5em' }}>
                      <span style={{ fontSize: '1.2em', marginRight: '0.5em' }}>&#x25CF;</span>
                      One is not getting what one wants;
                    </li>
                    <li>
                      <span style={{ fontSize: '1.2em', marginRight: '0.5em' }}>&#x25CF;</span>
                      <GradientText fontSize="1em">and the other is getting it.</GradientText>
                    </li>
                  </ul>
                </>
              }                
            ]} />
          </div>
        );
      case 'infinite-testimonials':
        return (
          <div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
              Disclaimer: The testimonials and store name presented here are entirely fictional and created for demonstrational purposes only. Shakhor is not a real establishment or enterprise. These fictional testimonials are designed to showcase the functionality of the Infinite Testimonials component and do not represent real customer experiences or opinions. Any resemblance to actual persons, living or dead, or actual businesses is purely coincidental. This demonstration is intended solely for illustrative purposes in a web development context.
            </p>
            <InfiniteTestimonials
              direction="left"
              cycleDuration="120s"
              pauseOnHover={true}
              items={[
                {
                  quote: "I was so hesitant about buying a laptop that wasn't brand new, but Shakhor proved me wrong! The quality is outstanding, and I got it for a steal.",
                  name: "Alice Anderson",
                  title: "First-Time Refurb Buyer"
                },
                {
                  quote: "I needed a reliable phone without breaking the bank, and Shakhor was the answer. The quality is fantastic, and the savings were huge!",
                  name: "Ben Baker",
                  title: "Budget Shopper"
                },
                {
                  quote: "I keep coming back to Shakhor because the prices are unbeatable, and the products are always top-notch. Why pay more for new?",
                  name: "Charlotte Carter",
                  title: "Repeat Customer"
                },
                {
                  quote: "Shakhor made it so easy to upgrade my tablet without emptying my wallet. The quality is excellent, and I'm thrilled with my purchase.",
                  name: "David Davis",
                  title: "Tech Upgrade Enthusiast"
                },
                {
                  quote: "I got a smartwatch that looks and functions like new, all thanks to Shakhor's amazing prices and quality. Highly recommend!",
                  name: "Ethan Evans",
                  title: "Smart Shopper"
                },
                {
                  quote: "I was blown away by the quality of the phone I purchased—it felt brand new! Plus, the price was incredible. Thanks, Shakhor!",
                  name: "Fiona Foster",
                  title: "Satisfied Customer"
                },
                {
                  quote: "The Sony headphones I bought from Shakhor sound amazing and were priced lower than anywhere else. Incredible value!",
                  name: "George Garcia",
                  title: "Music Lover"
                },
                {
                  quote: "Finding an affordable tablet with great battery life was a breeze on Shakhor's website. I couldn't be happier with my purchase.",
                  name: "Hannah Hill",
                  title: "Informed Buyer"
                },
                {
                  quote: "Shakhor is my go-to place for electronics. The service is great, and the prices are unbeatable for the quality you get.",
                  name: "Isaac Ingram",
                  title: "Electronics Enthusiast"
                },
                {
                  quote: "I was hesitant about buying a refurbished product, but the smartwatch I got from Shakhor changed my mind. It's been perfect for my runs, and I saved so much money!",
                  name: "Jessica Johnson",
                  title: "Fitness Fanatic"
                },
                {
                  quote: "I was looking for a high-quality refurbished phone, and Shakhor delivered exactly what I needed. The device looks and functions like new, and the price was unbeatable. I couldn't be happier with my purchase!",
                  name: "Kevin King",
                  title: "Satisfied Buyer"
                },
                {
                  quote: "There's no need to overpay for new electronics when Shakhor offers such great quality at such affordable prices. Highly recommend!",
                  name: "Laura Lewis",
                  title: "Smart Shopper"
                },
                {
                  quote: "Shakhor helped me save money without sacrificing quality. I got an amazing laptop at a fraction of the cost of a new one!",
                  name: "Michael Moore",
                  title: "Budget-Friendly Buyer"
                },
                {
                  quote: "Shakhor consistently offers great deals, so I often get smartwatches from there as gifts for my family members",
                  name: "Nina Nelson",
                  title: "Caring Family Member"
                },
                {
                  quote: "The tablet I got from Shakhor is the great balance between budget and great experience when learning and studying!",
                  name: "Oliver Owens",
                  title: "Student Shopper"
                }
              ]}
            />
          </div>
        );
      case 'unfolding-sidebar':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            <UnfoldingSidebar
              logo="/logo.png"
              appName="Namer UI"
              sections={[
                {
                  title: "Components",
                  components: [
                    { id: 'chronicle-button', name: 'Chronicle Button' },
                    { id: 'inflected-card', name: 'Inflected Card' },
                    { id: 'halomot-button', name: 'Halomot Button' },
                  ]
                }
              ]}
              onComponentClick={(componentId) => toast.info(`Clicked component: ${componentId}`)}
              unfoldIcon={<IconBorderRightPlus />}
              foldIcon={<IconFoldDown />}
              foldIconRotation={90}
              unfoldIconRotation={0}
              iconColor="#71717a"
              iconHoverColor="#27272a"
              backgroundColor="#f8fafc"
              headerBackgroundColor="#edf2f7"
              textColor="#44444b"
              activeTextColor="#09090b"
              hoverBackgroundColor="#e5e7eb"
              activeBackgroundColor="#629bf8"
              sidebarWidth="256px"
              collapsedWidth="54px"
              headerHeight="50px"
              rightStripeColor="#cbd5e1"
              rightStripeHoverColor="#94a3b8"
              itemBorderRadius="32px"
              appNameColor="#18181b"
              sectionTitleColor="#27272a"
              componentFontSize="14px"
              defaultActiveComponent="chronicle-button"
              initialOpenState={true}
            />
          </div>
        );
      case 'blog-post-header':
        return (
          <>
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
              onHover={() => toast.info('First header hovered')}
              onClick={() => toast.info('First header clicked')}
              categoryClicked={(category) => toast.info(`Category clicked: ${category}`)}
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
              onHover={() => toast.info('Second header hovered')}
              onClick={() => toast.info('Second header clicked')}
              categoryClicked={(category) => toast.info(`Category clicked: ${category}`)}
              isRTL={true}
            />
          </div>
          </>
        );
      case 'hero-highlight':
        return (
          <div className="bg-[#f1f1f7] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
              <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-[#050505] max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                Say hi to{" "}
                <Highlight
                  gradientColors="#6c5ce7, #3498db" // Blue-purple gradient colors
                  gradientAngle="-35deg" // Gradient angle
                  padding={{
                    top: "0.72rem",
                    bottom: "0.41rem",
                    left: "1rem",
                    right: "1rem",
                  }}
                  initialHighlightDelay={2000} // Delay for highlight animation
                  delayColorChange={5500} // Delay for text color change
                  nextColor="#f1f1f7" // New text color after delay
                  defaultColor="#050505" // Default text color
                >
                  Namer UI
                </Highlight>
              </h1>
          </div>
        );
      case 'confirmation-pop-up':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            <ChronicleButton 
              text='Show Pop-up'
              onClick={() => setShowConfirmPopUp(true)}
            />
            <ConfirmationPopUp
              showConfirmPopUp={showConfirmPopUp}
              onConfirm={handleConfirmationPopUpConfirm}
              onCancel={handleConfirmationPopUpCancel}
              confirmText="Yes"
              cancelText="No"
              messageText="Are you sure you want to delete this file?"
              mirrorButtons={false}
              textSize={21}
              inscriptionColor="#f7f7ff"
              backgroundColorFirst="#eeeeee"
              backgroundColorSecond="#242424"
              borderColor="#545454"
              generalBorderRadius="8px"
              borderWidth={1}
              modalWidth="auto"
              modalHeight="auto"
              modalPadding="24px"
              marginAroundModal="1rem"
              
              buttonOutlineColor="#484848" 
              buttonBorderRadius="4px" 
              
              confirmFirstClass="bg-[#202021] text-[#f7f7ff]"
              confirmSecondClass="bg-[#7538CB] text-[#f7f7ff]"
              cancelFirstClass="bg-[#202021] text-[#f1f1f7]"
              cancelSecondClass="bg-[#DAFA34] text-[#181820]"
            />
          </div>
        );
      case 'rng':
        return (
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative flex-col">
            <div className="text-[#f7f7ff]  text-center  mb-4">
              <strong>Disclaimer:</strong> The random number generator provided here is for demonstration purposes only. It hasn't undergone a security audit, which means it should not be used for any critical or sensitive applications where security is paramount. The generated numbers are not guaranteed to be cryptographically secure or suitable for high-stakes uses. Use this tool at your own risk.
            </div>
            <ChronicleButton 
              text='Show RNG'
              onClick={() => setShowRNG(true)}
            />
            {showRNG && (
              <RNG
                onClose={handleRNGClose}
                width="auto"
                height="auto"
                borderRadius="10px"
              />
            )}
          </div>
        );        
      default:
        return <div>No preview available.</div>;
    }
  };

  return (
    <>
      {activeComponent === 'simple-navbar' && (
        <div style={{ height: '69px' }}></div>
      )}
      <div className="flex min-h-screen overflow-hidden bg-[#141414] text-[#f7f7ff]">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <UnfoldingSidebar
          logo="/logo.png"
          appName="Namer UI"
          sections={[
            {
              title: "Components",
              components: components.map(component => ({
                id: component.id,
                name: component.name
              }))
            }
          ]}
          onComponentClick={(componentId) => {
            setActiveComponent(componentId);
          }}
          unfoldIcon={<IconBorderRightPlus size={24} />}
          foldIcon={<IconFoldDown size={24} />}
          foldIconRotation={90}
          unfoldIconRotation={0}
          iconSize={24}
          defaultActiveComponent={activeComponent}
        />
        <main className="flex-grow p-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-2">{components.find(c => c.id === activeComponent)?.name}</h1>
          <p className="text-gray-500 mb-6">{components.find(c => c.id === activeComponent)?.description}</p>

          <div className="tabs mb-4 flex">
            <button 
              className={`tab flex-1 rounded-md mr-2 py-2 transition-colors duration-200 ${
                activeTab === 'preview' 
                  ? 'bg-[#252630] text-[#a8b1ff]' 
                  : 'bg-[#1e1e1e] text-[#a2a2a9] hover:bg-[#2c2c2a] hover:text-white'
              }`} 
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button 
              className={`tab flex-1 rounded-md ml-2 py-2 transition-colors duration-200 ${
                activeTab === 'code' 
                  ? 'bg-[#252630] text-[#a8b1ff]' 
                  : 'bg-[#1e1e1e] text-[#a2a2a9] hover:bg-[#2c2c2a] hover:text-white'
              }`} 
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>

          {activeTab === 'preview' ? renderComponent() : (
            <div className="overflow-x-auto">
              {metadata?.code ? (
                (metadata.code as CodeFile[]).map(({ filename, content }) => (
                  <div key={filename} className="mb-8">
                    <h3 className="font-bold mb-4 text-lg">{filename}</h3>
                    <CodeBlock
                      filename={filename}
                      code={content}
                    />
                  </div>
                ))
              ) : (
                <p>No code available.</p>
              )}
            </div>
          )}

          <section className="mb-6 mt-6">
            <h2 className="text-lg font-bold mb-2">Usage</h2>
            <hr />
            {metadata?.usage && (
              <SyntaxHighlighter 
                language="tsx" 
                style={a11yDark}
                customStyle={{
                  backgroundColor: '#080810',
                  borderRadius: '0.5em',
                  padding: '1em'
                }}
              >
                {metadata.usage}
              </SyntaxHighlighter>
            )}
          </section>

          <section className="mb-6 mt-6">
            <h2 className="text-lg font-bold mb-2">Dependencies</h2>
            <hr />
            <div className="credit-content [&_a]:underline">
              {typeof metadata?.dependencies === "string" ? (
                <pre className="whitespace-pre-wrap">{metadata.dependencies}</pre>
              ) : (
                metadata?.dependencies
              )}
            </div>
          </section>

          <section className="mb-6 mt-6">
            <h2 className="text-lg font-bold mb-2">Credit</h2>
            <hr />
            <div className="credit-content [&_a]:underline">
              {metadata?.credit}
            </div>
          </section>

        </main>
      </div>
    </>
  );
};