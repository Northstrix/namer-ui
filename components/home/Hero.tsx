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

const Hero = () => {
  const appName: string[] = ["Namer UI"];

  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
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

        <div className="flex flex-col justify-center gap-8 p-[2rem] max-sm:px-[1rem]">

          {appName.map((line, index) => {
            const delay = index * 0.2;
            return (
              <h1 key={index} 
                  className={`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center w-full`}
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
                  onMouseEnter={() => setHoveredLine(index)}
                  onMouseLeave={() => setHoveredLine(null)}>
                <div className="split-parent">
                  <div className="split-child" style={{ transitionDelay: `${delay}s` }}>
                    {appName}
                  </div>
                </div>
                <span 
                  className="absolute inset-0 flex items-center justify-center z-10"
                  style={{
                    backgroundColor: 'var(--firstThemeColor)',
                    color: 'var(--negativeForeground)',
                    clipPath: hoveredLine === index ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
                    transformOrigin: 'center',
                    transition: 'all cubic-bezier(.1,.5,.5,1) 0.4s',
                  }}>
                  {appName}
                </span>
              </h1>
            );
          })}
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
                <div className="bg-[transparent] p-8 rounded-lg flex flex-wrap items-center justify-center relative">
                  <ChronicleButton 
                    text="Explore More"
                    onClick={() => window.location.href = '/components'}
                    width="200px"
                  />
                </div>
              </div>
            ) : <></> }
        </div>
        <div className="relative overflow-hidden w-[1200px] max-sm:w-[1000px] h-full p-8 mb-8 mt-8 rounded-xl">
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
    </>
  );
};

export default Hero;
