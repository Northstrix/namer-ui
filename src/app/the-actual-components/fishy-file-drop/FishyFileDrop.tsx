"use client";
import React, { useState, useRef, useCallback, CSSProperties } from "react";
import { motion, MotionStyle } from "framer-motion";

interface FishyFileDropProps {
  id: string;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundImageWidth?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  innerBorderRadius?: string;
  waveColors?: string[];
  bubbleColor?: string;
  textColor?: string;
  textStroke?: string;
  textEffectColor?: string;
  textSize?: string;
  textHoverSize?: string;
  letterSpacing?: string;
  letterSpacingHover?: string;
  text?: string;
  fishColor?: string;
  fishSpeed?: number;
  fontFamily?: string;
  onFilesSelected: (files: FileList | File[]) => void; // Accept FileList or array of Files
}

const FishyFileDrop: React.FC<FishyFileDropProps> = ({
  id,
  width = "300px",
  height = "300px",
  padding = "40px",
  backgroundColor = "transparent",
  backgroundImage =
    "https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png",
  backgroundRepeat = "repeat",
  backgroundImageWidth = "90px",
  borderWidth = "2px",
  borderColor = "#888",
  borderRadius = "20px",
  shadow = "0 2px 15px rgba(255, 255, 255, 0.1)",
  innerBorderRadius = "10px",
  waveColors = ["#1b70a1", "#368cc1", "#50a8e0", "#6bc4ff"],
  bubbleColor = "rgba(255,255,255,0.8)",
  textColor = "#fff",
  textStroke = "#6BC4FF",
  textEffectColor = "#6BC4FF",
  textSize = "22px",
  textHoverSize = "27px",
  letterSpacing = "4px",
  letterSpacingHover = "11px",
  text = "Add files",
  fishColor = "#fff",
  fishSpeed = 2.3,
  fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  onFilesSelected,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uniqueId = useRef(Math.random().toString(36).substring(2)).current;

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFilesSelected(e.dataTransfer.files);
      }
    },
    [onFilesSelected]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      onFilesSelected(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const waveAnimations = [
    {
      path:
        "M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z",
      color: waveColors[0],
      size: "140px 65px",
    },
    {
      path:
        "M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z",
      color: waveColors[1],
      size: "137px 60px",
    },
    {
      path:
        "M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z",
      color: waveColors[2],
      size: "132px 54px",
    },
    {
      path:
        "M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z",
      color: waveColors[3],
      size: "128px 44px",
    },
  ];

  const bubblePositions = [
    { left: "16px", bottom: "-60px", size: "16px" },
    { left: "16px", bottom: "-10px", size: "8px" },
    { left: "48px", bottom: "-25px", size: "10px" },
    { left: "48px", bottom: "-50px", size: "14px" },
    { right: "16px", bottom: "-30px", size: "16px" },
    { right: "16px", bottom: "-70px", size: "8px" },
    { right: "48px", bottom: "-40px", size: "10px" },
    { right: "48px", bottom: "-15px", size: "14px" },
  ];

  // Use React.CSSProperties for normal div style
  const containerStyle: CSSProperties = {
    width,
    height,
    padding,
    position: "relative" as "relative",
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    background: "transparent",
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius,
    boxShadow: shadow,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    overflow: "hidden",
    cursor: "pointer",
  };

  const borderGradientLayerStyle: CSSProperties = {
    position: "absolute" as "absolute",
    inset: 0,
    borderRadius: borderRadius,
    zIndex: -1,
  };

  const innerStyle: CSSProperties = {
    width: `calc(100% - ${padding} * 2)`,
    height: `calc(100% - ${padding} * 2)`,
    position: "absolute" as "absolute",
    top: padding,
    left: padding,
    borderRadius: innerBorderRadius,
    background: backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundRepeat,
    backgroundSize: `${backgroundImageWidth} auto`,
    backgroundPosition: "center",
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    overflow: "hidden",
  };

  const buttonStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative" as "relative",
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  };

  const fishStyle: CSSProperties = {
    position: "absolute" as "absolute",
    zIndex: 4,
    width: "52px",
    height: "78px",
    background: fishColor,
    animation:
      isHovered || isDragActive
        ? `${uniqueId}-fish ${fishSpeed}s linear forwards`
        : "none",
    opacity: isHovered || isDragActive ? 1 : 0,
    clipPath: "path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.10-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z')",
  };

  // Bubble style function with React.CSSProperties
  const bubbleStyle = (
    left?: string,
    right?: string,
    bottom?: string,
    size?: string
  ): CSSProperties => ({
    position: "absolute" as "absolute",
    zIndex: 7,
    width: size,
    height: size,
    left,
    right,
    bottom,
    background: bubbleColor,
    borderRadius: "50%",
  });

  // wave elements styles are normal CSSProperties
  const waveElements = waveAnimations.map((wave, i) => {
    const waveTopStyle: CSSProperties = {
      position: "absolute" as "absolute",
      top: "-20px",
      left: "-20px",
      width: wave.size.split(" ")[0],
      height: wave.size.split(" ")[1],
      background: wave.color,
      clipPath: `path('${wave.path}')`,
      animation: `${uniqueId}-wave${i} 3s linear infinite alternate`,
      transform: "rotate(180deg)",
      zIndex: i + 1,
    };
    const waveBottomStyle: CSSProperties = {
      ...waveTopStyle,
      top: "auto",
      left: "auto",
      bottom: "-20px",
      right: "-20px",
      transform: "none",
    };
    return (
      <React.Fragment key={`wave-${i}`}>
        <div style={waveTopStyle} />
        <div style={waveBottomStyle} />
      </React.Fragment>
    );
  });

  // bubbleColor can be a string or array
  const bubbleColorList = Array.isArray(bubbleColor)
    ? bubbleColor
    : Array(bubblePositions.length).fill(bubbleColor);

  // Framer Motion style typed as MotionStyle
  const bubbleElements = bubblePositions.map((bubble, i) => (
    <motion.div
      key={`bubble-${i}`}
      style={bubbleStyle(bubble.left, bubble.right, bubble.bottom, bubble.size)}
      animate={{ y: [0, -100], opacity: [0, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeOut",
      }}
    />
  ));

  const textStyle: MotionStyle = {
    position: "relative" as "relative",
    display: "inline-block" as "inline-block",
    fontFamily: fontFamily,
    fontWeight: "bold",
    color: textColor,
    WebkitTextStroke: `1px ${textStroke}`,
    zIndex: 10,
    padding: "20px",
  };

  const textEffectStyle: MotionStyle = {
    position: "absolute" as "absolute",
    inset: "0",
    zIndex: -1,
    backgroundColor: textEffectColor || textStroke,
    borderRadius: "8px",
    clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
    transformOrigin: "center",
  };

  return (
    <div
      id={id}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
    >
      <div style={borderGradientLayerStyle} />
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <div style={innerStyle}>
        <motion.div
          style={{
            ...buttonStyle,
            background: isDragActive ? "rgba(255,255,255,0.1)" : "transparent",
          }}
          whileHover={{
            background: "rgba(255,255,255,0.1)",
            boxShadow: "0 0 24px rgba(0,0,0,0), 0 0 24px rgba(0,0,0,.8) inset",
          }}
        >
          {waveElements}
          <div style={fishStyle} />
          {bubbleElements}
          <motion.div
            style={{
              position: "relative" as "relative",
              display: "flex" as "flex",
              justifyContent: "center" as "center",
              alignItems: "center" as "center",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.span
              style={textStyle}
              animate={{
                fontSize: isHovered || isDragActive ? textHoverSize : textSize,
                letterSpacing:
                  isHovered || isDragActive ? letterSpacingHover : letterSpacing,
                WebkitTextStroke: `1px ${textStroke}`,
              }}
              transition={{ duration: 0.4, ease: [0.1, 0.5, 0.5, 1] }}
            >
              {text}
              <motion.span
                style={textEffectStyle}
                animate={{
                  clipPath:
                    isHovered || isDragActive
                      ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                      : "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
                }}
                transition={{ duration: 0.4, ease: [0.1, 0.5, 0.5, 1] }}
              />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      <style>{`
      @keyframes ${uniqueId}-fish {
        0%   { top: -80px; right: -20px; transform: rotate(0); clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        10%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        20%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        30%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        40%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.3-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        50%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        60%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.3-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        70%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        80%  { clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.3-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z'); }
        90%  { clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
        100% { top: 100px; right: 80px; transform: rotate(40deg); clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.3-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z'); }
      }
        @keyframes ${uniqueId}-wave0 {
          0% { clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z'); }
          100% { clip-path: path('M140.44,0c-17.21,3.05-17.35,17.42-35.08,14.77-16.69-2.49-23.72-6.62-50.13,7.7-13.98,7.58-26.83-2.25-39.76,8.45C4.54,39.98,3.29,48.5,0,62.64H140.44V0Z'); }
        }
        @keyframes ${uniqueId}-wave1 {
          0% { clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z'); }
          100% { clip-path: path('M137.15,0c-17.21,10.16-17.24,10.78-37.72,9.6-14.61-.84-20.22,16.56-38.49,12.08-14.89-3.65-18.21,9.53-31.75,6.88C10.69,24.95,3.74,44.71,0,59.6H137.15V0Z'); }
        }
        @keyframes ${uniqueId}-wave2 {
          0% { clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z'); }
          100% { clip-path: path('M132.58,0c-3.02,8.29-13.7,3.05-21.15,10.78-6.52,6.76-10.8,3.72-29.64,3.97-9.93,.13-15.11,7.85-26.94,9.14-10.81,1.18-15.58-4.27-28.13,-1.99C8.04,25.29-.82,50.3,.06,54.49H132.58V0Z'); }
        }
        @keyframes ${uniqueId}-wave3 {
          0% { clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z'); }
          100% { clip-path: path('M128.53,0c-13.22,12-19.04,5.96-27.62,4.3-12.9-2.5-14.51,2.69-29.7,10.84-8.75,4.7-15.33,2.81-28.21-.3-15.44-3.72-19.2,7.95-29.03,11.04C4.72,28.8,.76,37.83,0,43.72H128.53V0Z'); }
        }
        
      `}</style>
    </div>
  );
};

export { FishyFileDrop };
