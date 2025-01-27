'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlock } from "./code-block";

import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'
import SliderHeroSection from '@/app/the-actual-components/slider-hero-section/SliderHeroSection'
import BauhausFileCard from '@/app/the-actual-components/bauhaus-file-card/BauhausFileCard'
import ProductCard from '@/app/the-actual-components/product-card/ProductCard'
import WhatsAppWidget from '@/app/the-actual-components/whatsapp-widget/WhatsAppWidget'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { IconUserFilled, IconFolderFilled, IconFileFilled, IconCircleArrowDownFilled, IconCircleArrowUpFilled, IconLockFilled, IconSettingsFilled, IconInfoCircleFilled } from '@tabler/icons-react';
import { IconHome, IconFile, IconPencil, IconLogout, IconUser, IconFolder, IconCircleArrowDown, IconCircleArrowUp, IconLock, IconSettings, IconInfoCircle } from '@tabler/icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

interface Metadata {
  usage: string;
  code: React.ReactNode;
  dependencies: string;
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
  { id: 'product-card', name: 'Product Card', description: 'A versatile product card component with image, pricing, discount, and interactive buttons for e-commerce applications.' },
  { id: 'whatsapp-widget', name: 'WhatsApp Widget', description: 'A customizable WhatsApp chat widget with auto-popup functionality, personalized messaging, and styled UI elements.' },
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
]

//console.log(`There are ${components.length} components available.`);

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState<string>(components[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [metadata, setMetadata] = useState<Metadata | null>(null)

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  
  useEffect(() => {
    const loadComponent = async () => {
      const mod = await import(`@/app/the-actual-components/${activeComponent}/index`)
      setMetadata(mod.metadata)
    }

    loadComponent()
  }, [activeComponent])

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
                title="גלה טכנולוגיה חדשנית ומותגים מובילים בנמרסטור - היעד שלך למוצרי אלקטרוניקה חדשים, מחודשים ומשומשים"
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
              />
            </div>

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
      case 'product-card':
        return (
          <div className="bg-[#262630] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
            <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
              Disclaimer: This product card is a conceptual design prototype created for demonstrative and educational purposes only. All product names, logos, brand identifiers, and trademarks displayed here are the sole property of their respective owners. Product details, images, and descriptions are used for illustrative purposes and do not represent actual commercial offerings. Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased. This website does not present a commercial offer of any kind. Any resemblance to existing product(s) is entirely coincidental.
            </p> 
            
            <div className="bg-[#262630] min-h-[300px] flex flex-wrap gap-8 items-center justify-center relative">
              <ProductCard
                id="0"
                imageSrc="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
                altText="iPhone 15 Pro"
                oldPrice="$1,199"
                price="$1,079"
                condition="Brand new"
                discountPercentage={10}
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
                discountPercentage={50}
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
                discountPercentage={20}
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
              />
              <ProductCard
                id="3"
                imageSrc="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=2436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="iPhone X"
                oldPrice="₪999"
                price="₪599"
                condition="משומש"
                discountPercentage={40}
                title="iPhone X"
                description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
                onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)}
                showOutlinedButton={true}
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
            <GradientText
              inscription={`Button has been clicked ${clickCount} ${clickCount === 1 ? 'time' : 'times'}`} 
              fontSize="1.2em" 
            />
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
          <div className="bg-[#050505] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
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
              onItemHover={(index) => toast.info(`Hovering item:${index}`)}
              onItemClick={(index) => toast.info(`Clicked item:${index}`)}
              activeIconColor="#A594FD"
            />
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
            <GradientText inscription="We don't see things as they are, we see them as we are." fontSize="2em" />
            <GradientText inscription="Anaïs Nin" fontSize="1em" />
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
      default:
        return <div>No preview available.</div>;
    }
  };

  const showcaseOptions = [
    { text: 'Option 1', imageUrl: '/image1.jpg' },
    { text: 'Option 2', imageUrl: '/image2.jpg' },
    { text: 'Option 3', imageUrl: '/image3.jpg' },
  ];

  return (
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
      <aside className={`bg-[#161618] transition-all duration-300 border-r border-[#2c2c2a] flex flex-col flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-[54px]'}`}>
        <nav className={`bg-[#151515] h-[50px] flex items-center p-4 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen && (
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Namer UI" className="w-[24px] h-[24px] mr-2" />
              <span className="font-bold text-[14px]">Namer UI</span>
            </a>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="text-[#a2a2a9] hover:text-white"
          >
            <FaBars size={24} />
          </button>
        </nav>
        
        {isSidebarOpen && (
          <div className="p-4 flex-grow">
            <a href="/components" className="text-1xl mb-6 text-white block">Components</a>
            <ul className="menu w-full rounded-box mt-6">
              {components.map((component, index) => (
                <li key={component.id} className="mb-2">
                  <button
                    onClick={() => setActiveComponent(component.id)}
                    className={`w-full text-left h-[32px] px-4 rounded-md text-[#a2a2a9] transition-colors duration-200 text-[14px] ${
                      activeComponent === component.id 
                        ? 'bg-[#252630] text-[#a8b1ff] hover:text-[#a8b1ff]' 
                        : 'hover:bg-[#2c2c2a] hover:text-white'
                    }`}
                  >
                    {component.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
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
          <pre>{metadata?.dependencies}</pre>
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
  );
};