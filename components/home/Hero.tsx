"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import FancyNotification from '@/app/the-actual-components/fancy-notification/FancyNotification'
import FancyHeroSection from '@/app/the-actual-components/fancy-hero-section/FancyHeroSection'
import Link from "next/link";

import FishyButton from '@/app/the-actual-components/fishy-button/FishyButton'
import { ShamayimToggleSwitch } from '@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch';
import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton'

import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaGithub, FaStar } from 'react-icons/fa';
import { Cover } from "@/components/ui/cover";
import { IconCornerRightUp } from '@tabler/icons-react';

import SliderHeroSection from '@/app/the-actual-components/slider-hero-section/SliderHeroSection'
import AnimatedTestimonials from '@/app/the-actual-components/animated-testimonials/AnimatedTestimonials'
import InflectedCard from '@/app/the-actual-components/inflected-card/InflectedCard'
import ProductCard from '@/app/the-actual-components/product-card/ProductCard'
import MetamorphicLoader from '@/app/the-actual-components/metamorphic-loader/MetamorphicLoader'
import AboutUsSection from '@/app/the-actual-components/about-us-section/AboutUsSection'

const originalDiscountTag = "הנחה 40%";
const discountTagParts = originalDiscountTag.split(' ');
const swappedDiscountTag = discountTagParts.reverse().join(' ');

const Hero = () => {
  const appName: string[] = ["Namer UI"];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [fontSize] = useState("clamp(16px, 5.12vw, 116px)");
  const cursorAnimation: AnimationControls = useAnimation();

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationMessage1, setNotificationMessage1] = useState('');

  const [topSwitchState, setTopSwitchState] = useState<boolean>(false);
  const [bottomSwitchState, setBottomSwitchState] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTopSwitchChange = (isOn: boolean): void => {
    toast.info(`Top switch will be ${isOn ? 'ON' : 'OFF'} in 0.3 seconds`);
    setTimeout(() => {
      setTopSwitchState(() => isOn);
      toast.info(`Top switch is now ${isOn ? 'ON' : 'OFF'}`);
    }, 300);
  };
  
  const handleBottomSwitchChange = (isOn: boolean): void => {
    toast.info(`Bottom switch will be ${isOn ? 'ON' : 'OFF'} in 0.3 seconds`);
    setTimeout(() => {
      setBottomSwitchState(() => isOn);
      toast.info(`Bottom switch is now ${isOn ? 'ON' : 'OFF'}`);
    }, 300);
  };  
  
  // Custom messages
  const customSuccessMessage = "Look at me!";
  
  const showSuccessNotification = () => {
    setNotificationStatus('success');
    setNotificationMessage("I'm levitating.");
    setNotificationMessage1('The halomot button works!');
    setIsNotificationVisible(true);
  };
  
  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isClient) {
      cursorAnimation.start({
        x: mousePosition.x - 25,
        y: mousePosition.y - 25,
        transition: { type: "spring", stiffness: 500, damping: 50 }
      });
    }
  }, [mousePosition, cursorAnimation, isClient]);

  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/Northstrix/namer-ui')
      .then(response => response.json())
      .then(data => setStarCount(data.stargazers_count))
      .catch(error => console.error('Error fetching star count:', error));
  }, []);

  return (
    <>
      <section className="border border-primary/10 min-h-screen max-w-[72rem] w-[90%] mx-auto text-left relative overflow-hidden">
        {/* gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/10 opacity-80 to-transparent z-[-1]"></div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] bg-homecards rounded-full z-[-1] blur-[30px]"></div>
        {/* gradient */}

        {/* background bars */}
        <div className="flex items-center justify-between w-full h-fit absolute overflow-hidden bottom-0 skew-x-[-45deg] left-[10rem]">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="flex w-[2px] h-[40rem] bg-gradient-to-t from-primary/10 to-transparent"
            ></div>
          ))}
        </div>
        {/* background bars */}

        <div className="flex flex-col justify-center gap-6 p-[2rem] max-sm:px-[1rem]">
        <h1
          className={`text relative inline-flex justify-center items-center cursor-pointer leading-[1] m-0 font-bold text-center h-[96px] w-full`}
          style={{
            fontSize: '72px',
            color: 'var(--foreground)',
            letterSpacing: '-.01em',
            transition: 'color 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundSize: '0%',
            backgroundRepeat: 'no-repeat',
          }}
        >
            <Cover>{appName}</Cover>
          </h1>
          {isMobile ? (
            <div className="relative top-10">
              <FancyNotification
                type={notificationStatus}
                message={notificationMessage}
                message1={notificationMessage1}
                isVisible={isNotificationVisible}
                onClose={handleNotificationClose}
                successMessage={customSuccessMessage}
              />
            </div>
          ) : 
            <></>
          }
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-primary/70 text-lg"
          >
            A collection of
            <span className="text-primary"> reusable components </span>designed to empower developers in creating beautiful user interfaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center flex-wrap gap-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/Northstrix/namer-ui"
                target="_blank"
                className="px-6 bg-gradient-to-b hover:bg-primary/10 transition-all py-3 rounded-full border text-sm font-medium flex items-center justify-center gap-2 text-center max-md:grow shadow-inner shadow-black/20"
              >
                <FaGithub /> Star on GitHub <FaStar className="ml-2" /> {starCount}
              </Link>
            </motion.div>
          </motion.div>
          {!isMobile && (
            <div style={{ transform: 'translateY(32px)' }}>
              <motion.div
                initial={{ x: "-100%", y: "100%" }}
                animate={{ x: "0%", y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.2,
                }}
              >
                <MetamorphicLoader size={124} color="#156ef6" lighteningStep={16} />
              </motion.div>
            </div>
          )}
          {isMobile ? (
              <div className="grid grid-cols-1 gap-10 items-center">
                <div className="flex flex-col items-center">
                  <div className="relative w-[312px] h-[216px] bg-[var(--halomot-button-iframe-background)] flex items-center justify-center">
                    <HalomotButton 
                      onClick={showSuccessNotification}
                      inscription="Click Me"
                    />
                  </div>
                  <h3 className="text-2xl mt-2 text-center font-bold">Halomot Button</h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-[312px] h-[216px] bg-[var(--fishy-button-iframe-background)] flex flex-col items-center justify-center space-y-5">
                    <FishyButton 
                      type="button" 
                      className="button--2"
                      onClick={() => toast.info("The \"Create\" button has been clicked")} 
                    >
                      Create
                    </FishyButton>
                    <FishyButton 
                      type="button" 
                      className="button--3"
                      onClick={() => toast.info("The \"Cancel\" button has been clicked")} 
                    >
                      Cancel
                    </FishyButton>
                  </div>
                  <h3 className="text-2xl mt-2 text-center font-bold">Fishy Button</h3>
                </div>

                <div className="flex flex-col items-center">
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1em',
                    height: '216px',
                    width: '312px',
                    backgroundImage: 'linear-gradient(45deg, #47b6d1, #90e0ec)',
                    fontSize: '1.24em',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                      <span style={{ color: '#E0F9FC' }}>Mobile Data</span>
                      <ShamayimToggleSwitch 
                        defaultState={topSwitchState} 
                        onChange={handleTopSwitchChange} 
                      />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                      <ShamayimToggleSwitch 
                        defaultState={bottomSwitchState} 
                        mirrored 
                        onChange={handleBottomSwitchChange} 
                      />
                      <span style={{ color: '#E0F9FC' }}>נתונים סלולריים</span>
                    </div>
                  </div>
                  <h3 className="text-2xl mt-2 text-center font-bold">Toggle Switch</h3>
                </div>
              </div>
            ) : <></> }
        </div>
        <div className="relative overflow-hidden w-[1200px] max-sm:w-[1000px] h-full p-8 mb-8 mt-2 rounded-xl">
          {isMobile ? (
              <></>
              ) : 
              <FancyNotification
                type={notificationStatus}
                message={notificationMessage}
                message1={notificationMessage1}
                isVisible={isNotificationVisible}
                onClose={handleNotificationClose}
                successMessage={customSuccessMessage} // Pass custom success message
              />
          }
          <motion.div
            initial={{ x: "100%", y: "100%" }}
            animate={{ x: "-2.2%", y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.2,
            }}
          >
            {isMobile ? (
             <></>
            ) : 
            <FancyHeroSection
              text = {[
                '\u00A0STYLISH\u00A0',
                '\u00A0TYPESCRIPT\u00A0',
                '\u00A0COMPONENTS\u00A0',
              ]}
              customWidth="100%"
              customHeight="800px"
              backgroundColor = "transparent"
              hoverTextColor="var(--fancy-hero-section-hovered-text-color)"
              textColor="var(--fancy-hero-section-foreground)"
              frameOutlineColor="var(--frameOutlineColor)"
              customFontSize={fontSize}
              customImageData={[
                {
                  component: (
                    <div className="relative w-[312px] h-[216px] bg-[var(--halomot-button-iframe-background)] flex items-center justify-center">
                    <HalomotButton 
                      onClick={showSuccessNotification}
                      inscription="Click Me"
                    />
                  </div>
                  ),
                  title: "Halomot Button", description: "Click it for a fancy notification to appear." 
                },
                {
                  component: (
                    <div className="relative w-[312px] h-[216px] bg-[var(--fishy-button-iframe-background)] flex flex-col items-center justify-center space-y-5">
                    <FishyButton 
                      type="button" 
                      className="button--2"
                      onClick={() => toast.info("The \"Create\" button has been clicked")} 
                    >
                      Create
                    </FishyButton>
                    <FishyButton 
                      type="button" 
                      className="button--3"
                      onClick={() => toast.info("The \"Cancel\" button has been clicked")} 
                    >
                      Cancel
                    </FishyButton>
                  </div>
                  ),
                  title: 'Fishy Button', description: 'A sleek button with floating fish.'
                },
                {
                  component: (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '1em',
                      height: '216px',
                      width: '312px',
                      backgroundImage: 'linear-gradient(45deg, #47b6d1, #90e0ec)',
                      fontSize: '1.24em',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                        <span style={{ color: '#E0F9FC' }}>Mobile Data</span>
                        <ShamayimToggleSwitch 
                          defaultState={topSwitchState} 
                          onChange={handleTopSwitchChange} 
                        />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                        <ShamayimToggleSwitch 
                          defaultState={bottomSwitchState} 
                          mirrored 
                          onChange={handleBottomSwitchChange} 
                        />
                        <span style={{ color: '#E0F9FC' }}>נתונים סלולריים</span>
                      </div>
                    </div>
                  ),
                  title: "Toggle Switch", description: "A celestial-themed toggle switch." 
                }
              ]}
              framerSize={[312, 216]}
              textBottom="-49px"
              titleColor="var(--fancy-hero-section-foreground)"
              textShadowColor="var(--fancy-hero-section-text-shadow-color)"
              titleSize="34px"
              descriptionColor="var(--fancy-hero-section-description-color)"
              descriptionSize="16px"
            />
            }
          </motion.div>
        </div>
        <ToastContainer
          position="bottom-right" // Position of the container
          autoClose={5000}        // Duration for all toasts in this container
          hideProgressBar={false} // Show progress bar for all toasts
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
      <div className="rounded-lg flex flex-col items-center justify-center relative py-8">
        <p className="text-[var(--fancy-hero-section-description-color)] text-m max-w-[72rem] text-center mt-8 mb-8 px-4">
          Disclaimer: All product names, logos, brand identifiers, and trademarks displayed on this website are the sole property of their respective owners. These items are used for demonstrational and illustrative purposes only. The Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased here. This website does not present a commercial offer of any kind. The store name is fictional; any resemblance to existing business(es) is entirely coincidental and unintentional.
        </p> 
        <div className="flex flex-col items-center justify-center relative">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            justifyContent: 'center', // Center items horizontally
            margin: '18px',
            borderRadius: '1.76em', // Rounded corners for the container
            minHeight: '300px', // Minimum height for the container
            maxWidth: '72rem', // Maximum width
          }}>
            <SliderHeroSection
              title="Arguably, the best electronics store in Austin, Texas, offering customers affordable, cutting-edge tech."
              showcaseOptions={[
                { text: 'Brand New Electronics', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { text: 'Refurbished iPhones', imageUrl: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { text: 'Pre-owned Samsung Flagships', imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
              ]}
              onOptionClick={(option) => toast.info(`Clicked item: ${option}`)}
              onOptionHover={(option) => toast.info(`Hovered item: ${option}`)}
              borderRadius="2.25em"
              height="calc(100vh - 58px)"
              desktopFontSize = '59px'
              mobileFontSize = '34px'
              desktopShowcaseFontSize = '33px'
              mobileShowcaseFontSize = '24px'
              desktopPadding = {{ top: '45px', bottom: '50px', leftRight: '24px' }}
              mobilePadding = {{ top: '36px', bottom: '36px', leftRight: '10px' }}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg flex flex-col items-center justify-center relative py-8">
        <p className="text-[var(--fancy-hero-section-description-color)] text-m max-w-[72rem] text-center mt-8 px-4">
          Disclaimer: The testimonials and restaurant name presented here are entirely fictional and created for demonstrational purposes only. Shining Yam is not a real establishment or enterprise. These fictional testimonials are designed to showcase the functionality of the Animated Testimonials component and do not represent real customer experiences or opinions. Any resemblance to actual persons, living or dead, or actual businesses is purely coincidental. This demonstration is intended solely for illustrative purposes in a web development context.
        </p>
      </div>
      <div className="bg-[#ffffff] p-16 min-h-[300px] flex flex-wrap items-center justify-center relative">
        <div
          className="items-center justify-center relative flex"
          style={{
            maxWidth: "72rem",
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
      <div className="rounded-lg flex flex-col items-center justify-center relative py-8">
        <p className="text-[var(--fancy-hero-section-description-color)] text-m max-w-[72rem] text-center mt-8 px-4">
          Disclaimer: These product cards are the conceptual design prototypes created for demonstrative and educational purposes only. All product names, logos, brand identifiers, and trademarks displayed here are the sole property of their respective owners. Product details, images, and descriptions are used for illustrative purposes and do not represent actual commercial offerings. Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased. This website does not present a commercial offer of any kind. Any resemblance to existing product(s) is entirely coincidental.
        </p>
          <div className="mt-4" style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            gap: '36px', // Space between items
            justifyContent: 'center', // Center items horizontally
            padding: '32px', // Optional padding for the container
            borderRadius: '8px', // Rounded corners for the container
            minHeight: '300px', // Minimum height for the container
            maxWidth: "72rem",
          }}>
            <InflectedCard
              id="0"
              image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
              title="iPhone 15 Pro"
              description="Titanium smartphone with an advanced camera system, offering stunning photography capabilities and a sleek design."
              tags={[
                { name: "Brand new", textColor: "#f7f7ff", backgroundColor: "#9F4EFF", rounding: 5 },
                { name: "10% off", textColor: "var(--fancy-hero-section-hovered-text-color)", backgroundColor: "var(--hero-chronicle-button-background)", rounding: 5 },
              ]}
              titleColor="var(--product-card-title-color)"
              descriptionColor="var(--fancy-hero-section-description-color)"
              parentBackgroundColor="var(--hero-section-background)"
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
            <ProductCard
              id="1"
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
              outlineColor="#545454"
              accentColor="#00A6FB"
              containerRounding={36}
              innerContainerRounding={21}
              buttonRounding={0}
              lightenButtonColor={0.47}
              filledButtonInscription="קנה עכשיו"
              outlinedButtonInscription="הוסף לעגלה"
              swapButtons={true}
              activeComponentScale={1.08}
              mirrorTags={true}
            />
            <ProductCard
              id="2"
              imageSrc="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Samsung Galaxy Flip 6"
              oldPrice="$999"
              price="$499"
              outlineColor="#545454"
              condition="Pre-owned"
              discountTag="50% OFF"
              title="Samsung Galaxy Flip 6"
              description="Innovative foldable smartphone with a sleek design that enhances portability while providing a large display for immersive viewing experiences and multitasking."
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for ID: ${id}`)}
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for ID: ${id}`)}
              accentColor="#00A6FB"
              buttonRounding={50}
            />
            <InflectedCard
              id="3"
              image="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="iPhone 7"
              description="Classic iPhone model with 12MP camera and water resistance, offering reliable performance and essential features for everyday smartphone users."
              tags={[
                { name: "Refurbished", textColor: "#f7f7ff", backgroundColor: "#FF3900", rounding: 5 },
                { name: "20% off", textColor: "var(--fancy-hero-section-hovered-text-color)", backgroundColor: "var(--hero-chronicle-button-background)", rounding: 5 },
              ]}
              titleColor="var(--product-card-title-color)"
              descriptionColor="var(--fancy-hero-section-description-color)"
              parentBackgroundColor="var(--hero-section-background)"
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
          </div>
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center relative py-3">
          <p className="text-[var(--fancy-hero-section-description-color)] text-m max-w-[72rem] text-center mt-8 px-4">
          Disclaimer: All products, logos, brand identifiers, and trademarks displayed on this website are the sole property of their respective owners. These items are used for demonstrational and illustrative purposes only. The Namer UI is not affiliated with, endorsed by, or sponsored by any of the companies whose products are showcased here. This website does not present a commercial offer of any kind. The enterprise name and description are fictional; any resemblance to existing business(es) is entirely coincidental and unintentional.
          </p> 
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            justifyContent: 'center', // Center items horizontally
            margin: '18px',
            borderRadius: '1.76em', // Rounded corners for the container
            minHeight: '300px', // Minimum height for the container
            maxWidth: '1720px', // Maximum width
          }}>
          <section className="border border-primary/10 min-h-screen rounded-[1.76em] max-w-[1720px] w-[100%] mx-auto text-left relative overflow-hidden">
            {/* gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/10 opacity-80 to-transparent z-[-1]"></div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] bg-homecards rounded-full z-[-1] blur-[30px]"></div>
            {/* gradient */}

            {/* background bars */}
            <div className="flex items-center justify-between w-full h-fit absolute overflow-hidden bottom-0 skew-x-[-45deg] left-[10rem]">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="flex w-[2px] h-[40rem] bg-gradient-to-t from-primary/10 to-transparent"
                ></div>
              ))}
            </div>
            {/* background bars */}
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
              chronicleButtonHoverColor="var(--hero-chronicle-button-hover-color)"
              chronicleButtonCustomBackground="var(--hero-chronicle-button-background)"
              chronicleButtonCustomForeground="var(--hero-chronicle-button-foreground)"
              titleTextColor="var(--product-card-title-color)"
              descriptionTextColor="var(--fancy-hero-section-description-color)"
            />
          </section>
          </div>
          <div className="bg-[transparent] pt-8 rounded-lg flex flex-wrap items-center justify-center relative">
            <ChronicleButton 
              text="Explore More Components"
              onClick={() => window.location.href = '/components'}
              width="264px"
              customBackground="var(--hero-chronicle-button-background)"
              customForeground="var(--hero-chronicle-button-foreground)"
              hoverColor="var(--hero-chronicle-button-hover-color)"
            />
          </div>
        </div>
    </>
  );
};

export default Hero;
