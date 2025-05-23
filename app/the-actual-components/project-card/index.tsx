'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ProjectCard.tsx" file
import ProjectCard from '@/app/the-actual-components/project-card/ProjectCard'

const projectForProjectCardComponent = [
  {
    name: "Midbar",
    description: "An advanced hardware encryption device designed to increase the cost of unauthorized access to the user's personal data as much as possible.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/midbar.webp",
    link: "https://github.com/Northstrix/Midbar",
    disableLens: false,
    textShiftOnHover: true,
    lensZoomFactor: 1.61,
    lensSize: 176,
  },
  {
    name: "Wi-Fi ESL",
    description: "An electronic shelf label that receives images via Wi-Fi, decrypts them, and stores them in the ESP8266's flash memory.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/eslms.webp",
    link: "https://github.com/Northstrix/Electronic-Shelf-Label-Management-System",
    disableLens: false,
    textShiftOnHover: false,
    lensZoomFactor: 2.1,
    lensSize: 120,
  },
  {
    name: "Firebase ESL",
    description: "An electronic shelf label that automatically retrieves its encrypted image from Firebase Realtime Database.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/eslfb.webp",
    link: "https://github.com/Northstrix/Electronic-Shelf-Label-Firebase-Edition",
    disableLens: true,
    textShiftOnHover: true,
    lensZoomFactor: 1.8,
    lensSize: 120,
  },
  {
    name: "Lantern",
    description: "An ESP-based addressable RGB LED strip controller with a convenient user interface, controlled using the Nintendo Wii Nunchuk.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/lantern.webp",
    link: "https://sourceforge.net/projects/the-lantern-project/",
    disableLens: true,
    textShiftOnHover: false,
    lensZoomFactor: 1.2,
    lensSize: 100,
  },
];

const projectForProjectCardComponentHebrew = [
  {
    name: "פלאם קייב",
    description: 'פתרון גיבוי בענן המשתמש בסכימת הצפנה מאומתת "HMAC-SHA3-512 + CBC Serpent-256 + ChaCha20" להצפנת נתונים ו-ML-KEM-1024 לחילופי מפתחות עמידים לקוונטים.',
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave-hebrew.webp",
    link: "https://plum-cave.netlify.app/",
    disableLens: false,
    textShiftOnHover: true,
    lensZoomFactor: 1.61,
    lensSize: 176,
  },
  {
    name: "נמר UI",
    description: "אוסף מקיף של רכיבי TypeScript מודרניים, אטרקטיביים וייחודיים לשימוש חוזר המיועדים במיוחד ל-Next.js.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp",
    link: "https://namer-ui.netlify.app/",
    disableLens: false,
    textShiftOnHover: false,
    lensZoomFactor: 2.2,
    lensSize: 120,
  },
  {
    name: "React קריפטוגרפיק טולקיט",
    description: "אפליקציית אינטרנט המסוגלת להצפין נתוני משתמש, לבצע האש של מחרוזות ולחשב תגיות באמצעות אלגוריתמי HMAC הזמינים. אל תשפטו אותי בחומרה - זוהי האפליקציה הראשונה שיצרתי ב-React.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp",
    link: "https://northstrix.github.io/React-Cryptographic-Toolkit/",
    disableLens: true,
    textShiftOnHover: true,
    lensZoomFactor: 1.8,
    lensSize: 120,
  },
  {
    name: "מקטע גיבור בהשראת PHA5E",
    description: "רכיב לא שגרתי וניתן להתאמה אישית. הוספתי אותו כאן כדי להדגים שאני מסוגל ליצור אפליקציית Angular.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp",
    link: "https://pha5e-inspired-hero-section.netlify.app/",
    disableLens: true,
    textShiftOnHover: false,
    lensZoomFactor: 1.2,
    lensSize: 100,
  },
  {
    name: "בוטלג וובסייט לוקליזיישן טול",
    description: "כלי פשוט שנועד לבצע לוקליזציה לאתרים שנוצרו עם בוני האתרים Bazium, כמו גם לגרסאות ה-vanilla HTML/CSS/JS שלהם.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp",
    link: "https://codepen.io/Northstrix/full/mydWRJB",
    disableLens: false,
    textShiftOnHover: true,
    lensZoomFactor: 1.5,
    lensSize: 140,
  },
  {
    name: "מצפין קבצים בדפדפן",
    description: "כלי מבוסס דפדפן המבצע הצפנת קבצים מקומית ללא אינטראקציה עם השרת. משתמש ב-AES-256 להצפנת נתונים וב-HMAC-SHA512 לאימות שלמות.",
    image: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/in-browser-file-encrypter.webp",
    link: "https://codepen.io/Northstrix/full/xxvXvJL",
    disableLens: true,
    textShiftOnHover: false,
    lensZoomFactor: 1.3,
    lensSize: 120,
  },
];

<div
  style={{
    width: "100%",
    background: "#050505",
    borderRadius: "8px",
    boxSizing: "border-box",
    marginBottom: "48px",
  }}
>
  <div
    style={{
      maxWidth: "100%",
      margin: "0 auto",
      padding: "36px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
      justifyContent: "center",
      alignItems: "stretch",
      minHeight: "300px",
    }}
  >
    {projectForProjectCardComponent.map((project, idx) => (
      <ProjectCard
        key={idx}
        name={project.name}
        description={project.description}
        image={project.image}
        link={project.link}
        imageAspectRatio={1.37}
        buttonInscriptions={{ openWebAppButton: "View Project" }}
        onItemClick={(link) => toast.info(\`Clicked link: \${link}\`)}
        // Card rounding (outer/inner)
        cardOuterRounding="6.34px"
        cardInnerRounding="6px"
        // Image rounding (outer/inner)
        imageOuterRounding="6.34px"
        imageInnerRounding="6px"
        // Card outline and backgrounds
        outlineColor="#2f2f2f"
        hoverOutlineColor="#3a3a3a"
        cardBackground="#1b1b1b"
        // Image container backgrounds (for normal and hover)
        imageBackground="#2f2f2f"
        imageHoverBackground="#3a3a3a"
        // Text colors
        foreground="#fff"
        secondaryForeground="#e1e1e1"
        // Lens and animation
        disableLens={project.disableLens}
        textShiftOnHover={project.textShiftOnHover}
        lensZoomFactor={project.lensZoomFactor}
        lensSize={project.lensSize}
        // HalomotButton appearance
        halomotButtonGradient="linear-gradient(to right, #a123f4, #603dec)"
        halomotButtonBackground="#050505"
        halomotButtonTextColor="#fff"
        halomotButtonOuterBorderRadius="6.34px"
        halomotButtonInnerBorderRadius="6px"
      />
    ))}
  </div>
</div>

<div
  style={{
    width: "100%",
    background: "#f6f6f6",
    borderRadius: "8px",
    boxSizing: "border-box",
    marginBottom: "48px",
  }}
>
  <div
    style={{
      maxWidth: "100%",
      margin: "0 auto",
      padding: "36px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
      justifyContent: "center",
      alignItems: "stretch",
      minHeight: "300px",
    }}
  >
    {projectForProjectCardComponentHebrew.map((project, idx) => (
      <ProjectCard
        key={idx}
        name={project.name}
        description={project.description}
        image={project.image}
        link={project.link}
        imageAspectRatio={1.37}
        buttonInscriptions={{ openWebAppButton: "צפה בפרויקט" }}
        onItemClick={(link) => toast.info(\`Clicked link: \${link}\`)}
        // Card rounding (outer/inner)
        cardOuterRounding="6.34px"
        cardInnerRounding="6px"
        // Image rounding (outer/inner)
        imageOuterRounding="6.34px"
        imageInnerRounding="6px"
        // Card outline and backgrounds (light version)
        outlineColor="#e1e1e1"
        hoverOutlineColor="#cccccc"
        cardBackground="#fff"
        // Image container backgrounds (for normal and hover, light version)
        imageBackground="#e1e1e1"
        imageHoverBackground="#cccccc"
        // Text colors
        foreground="#222"
        secondaryForeground="#444"
        // Lens and animation
        disableLens={project.disableLens}
        textShiftOnHover={project.textShiftOnHover}
        lensZoomFactor={project.lensZoomFactor}
        lensSize={project.lensSize}
        // RTL for Hebrew
        isRTL={true}
        // HalomotButton appearance (light)
        halomotButtonGradient = "linear-gradient(to right, #603dec, #a123f4)"
        halomotButtonBackground = "#eee"
        halomotButtonTextColor = "#111"
        halomotButtonOuterBorderRadius = "16.2px"
        halomotButtonInnerBorderRadius = "15px"
        halomotButtonHoverTextColor = "#fff"
      />
    ))}
  </div>
</div>

// Note: The ProjectCard component accepts the following props:
// - name: string (required) - The title of the project, displayed as the card's main heading.
// - description: string (required) - A brief summary or explanation of the project.
// - image: string (required) - The URL or path to the project's image.
// - link: string (required) - The URL to navigate to when the card's button is clicked.
// - imageAspectRatio: number (required) - The aspect ratio (width/height) for the image container.
// - buttonInscriptions: { openWebAppButton: string } (required) - An object containing the label for the card's action button.
// - onItemClick: (link: string) => void (required) - Callback function invoked when the card's button is clicked.
// - cardOuterRounding: string (required) - CSS border-radius for the card's outer border.
// - cardInnerRounding: string (required) - CSS border-radius for the card's inner container.
// - imageOuterRounding: string (required) - CSS border-radius for the image's outer container.
// - imageInnerRounding: string (required) - CSS border-radius for the image itself.
// - outlineColor: string (required) - The color of the card's outline in its normal state.
// - hoverOutlineColor: string (required) - The outline color when the card is hovered.
// - cardBackground: string (required) - The background color of the card.
// - imageBackground: string (required) - The background color behind the image.
// - imageHoverBackground: string (required) - The background color behind the image when hovered.
// - foreground: string (required) - The main text color for the card's title.
// - secondaryForeground: string (required) - The color for the card's description text.
// - isRTL: boolean (optional) - Whether to use right-to-left layout (default: false).
// - disableLens: boolean (optional) - Whether to disable the image zoom lens effect (default: false).
// - textShiftOnHover: boolean (optional) - Whether to shift the card's text on hover (default: false).
// - lensZoomFactor: number (optional) - The zoom factor for the image lens effect (default: 1.61).
// - lensSize: number (optional) - The size (in pixels) of the lens effect area (default: 176).
// - halomotButtonGradient: string (optional) - CSS gradient for the action button (default: "linear-gradient(to right, #a123f4, #603dec)").
// - halomotButtonBackground: string (optional) - Background color for the action button (default: "#111014").
// - halomotButtonTextColor: string (optional) - Text color for the action button (default: "#fff").
// - halomotButtonOuterBorderRadius: string (optional) - Outer border radius for the action button (default: "6.34px").
// - halomotButtonInnerBorderRadius: string (optional) - Inner border radius for the action button (default: "6px").
// - halomotButtonHoverTextColor: string (optional) - Text color for the action button when hovered.
`,
code: [
  {
    filename: 'lib/utils.ts',
    content: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
  },
  {
    filename: 'ProjectCard.tsx',
    content: `"use client";
    import Image from "next/image";
    import { cn } from "@/lib/utils";
    import HalomotButton from "@/app/the-actual-components/halomot-button/HalomotButton";
    import { Lens } from "./Lens";
    import { useState } from "react";
    import { motion } from "framer-motion";
    
    interface ProjectCardProps {
      name: string;
      description: string;
      image: string;
      link: string;
      imageAspectRatio: number;
      buttonInscriptions: { openWebAppButton: string };
      onItemClick: (link: string) => void;
      // Card rounding
      cardOuterRounding: string;
      cardInnerRounding: string;
      // Image container rounding
      imageOuterRounding: string;
      imageInnerRounding: string;
      // Card outline/colors
      outlineColor: string;
      hoverOutlineColor: string;
      cardBackground: string;
      // Image outline/colors
      imageBackground: string;
      imageHoverBackground: string;
      // Text
      foreground: string;
      secondaryForeground: string;
      // Other
      isRTL?: boolean;
      disableLens?: boolean;
      textShiftOnHover?: boolean;
      lensZoomFactor?: number;
      lensSize?: number;
      halomotButtonGradient?: string;
      halomotButtonBackground?: string;
      halomotButtonTextColor?: string;
      halomotButtonOuterBorderRadius?: string;
      halomotButtonInnerBorderRadius?: string;
      halomotButtonHoverTextColor?: string;
    }
    
    const getCardShadow = (isRTL: boolean) =>
      \`\${isRTL ? "-" : ""}6px 6px 32px 0 rgba(0,0,0,0.22)\`;
    
    const ProjectCard: React.FC<ProjectCardProps> = ({
      name,
      description,
      image,
      link,
      imageAspectRatio,
      buttonInscriptions,
      onItemClick,
      cardOuterRounding,
      cardInnerRounding,
      imageOuterRounding,
      imageInnerRounding,
      outlineColor,
      hoverOutlineColor,
      cardBackground,
      imageBackground,
      imageHoverBackground,
      foreground,
      secondaryForeground,
      isRTL = false,
      disableLens = false,
      textShiftOnHover = false,
      lensZoomFactor = 1.61,
      lensSize = 176,
      halomotButtonGradient = "linear-gradient(to right, #a123f4, #603dec)",
      halomotButtonBackground = "#111014",
      halomotButtonTextColor = "#fff",
      halomotButtonOuterBorderRadius = "6.34px",
      halomotButtonInnerBorderRadius = "6px",
      halomotButtonHoverTextColor,
    }) => {
      const [isCardHovered, setIsCardHovered] = useState(false);
      const [isImageHovered, setIsImageHovered] = useState(false);
    
      // RTL style for text alignment and direction
      const rtlTextStyle = isRTL
        ? { textAlign: "right" as const, direction: "rtl" as const }
        : {};
    
      // Determine the text shift class based on direction
      const textShiftClass =
        textShiftOnHover && isCardHovered
          ? isRTL
            ? "-translate-x-2"
            : "translate-x-2"
          : "";
    
      return (
        <motion.div
          className={cn(
            "group/bento flex flex-col h-full relative"
          )}
          style={{
            backgroundColor: isCardHovered ? hoverOutlineColor : outlineColor,
            padding: "1px",
            borderRadius: cardOuterRounding,
            transition: "background-color 0.3s ease-in-out",
            height: "100%",
            minWidth: 0,
          }}
          animate={{ boxShadow: isCardHovered ? getCardShadow(isRTL) : "none" }}
          transition={{ boxShadow: { duration: 0.3 }, backgroundColor: { duration: 0.3 } }}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          <div
            className="flex flex-col h-full"
            style={{
              borderRadius: cardInnerRounding,
              backgroundColor: cardBackground,
              padding: "1rem",
              height: "100%",
            }}
          >
            <Lens
              zoomFactor={lensZoomFactor}
              lensSize={lensSize}
              onHoverChange={setIsImageHovered}
              disabled={disableLens}
              imageInnerRounding={imageInnerRounding}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{
                  paddingTop: \`\${(1 / imageAspectRatio) * 100}%\`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    padding: "1px",
                    background: isImageHovered ? imageHoverBackground : imageBackground,
                    borderRadius: imageOuterRounding,
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden"
                    style={{
                      borderRadius: imageInnerRounding,
                      overflow: "hidden",
                    }}
                  >
                    <Image src={image} alt={name} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </Lens>
            <div
              className={cn(
                "transition duration-200 flex-grow",
                textShiftClass
              )}
              style={rtlTextStyle}
            >
              <div
                className="font-sans font-bold"
                style={{
                  color: foreground,
                  fontSize: "25px",
                  marginBottom: "0.5rem",
                  marginTop: "1rem",
                  ...rtlTextStyle,
                }}
              >
                {name}
              </div>
              <div
                className="font-sans"
                style={{
                  color: secondaryForeground,
                  fontSize: "16px",
                  ...rtlTextStyle,
                }}
              >
                {description}
              </div>
            </div>
            <div className="mt-6">
              <HalomotButton
                inscription={buttonInscriptions.openWebAppButton || "View Project"}
                onClick={() => onItemClick(link)}
                fillWidth
                gradient={halomotButtonGradient}
                backgroundColor={halomotButtonBackground}
                textColor={halomotButtonTextColor}
                outerBorderRadius={halomotButtonOuterBorderRadius}
                innerBorderRadius={halomotButtonInnerBorderRadius}
                href={link}
                {...(halomotButtonHoverTextColor
                  ? { hoverTextColor: halomotButtonHoverTextColor }
                  : {})}
              />
            </div>
          </div>
        </motion.div>
      );
    };
    
    export default ProjectCard;
`
  },
  {
    filename: 'Lens.tsx',
    content: `"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  position?: { x: number; y: number };
  isStatic?: boolean;
  onHoverChange?: (hovering: boolean) => void;
  disabled?: boolean;
  imageInnerRounding?: string; // NEW: for rounded lens overlay
}

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
  onHoverChange,
  disabled = false,
  imageInnerRounding = "0px", // default to no rounding
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [localHovering, setLocalHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleHoverChange = (hovering: boolean) => {
    setLocalHovering(hovering);
    onHoverChange?.(hovering);
  };

  if (disabled) {
    return (
      <div
        ref={containerRef}
        className="relative overflow-hidden z-10"
        onMouseEnter={() => handleHoverChange(true)}
        onMouseLeave={() => handleHoverChange(false)}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden z-10"
      onMouseEnter={() => handleHoverChange(true)}
      onMouseLeave={() => handleHoverChange(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isStatic ? (
        <StaticLensContent
          position={position}
          lensSize={lensSize}
          zoomFactor={zoomFactor}
          imageInnerRounding={imageInnerRounding}
        >
          {children}
        </StaticLensContent>
      ) : (
        <AnimatePresence>
          {localHovering && (
            <DynamicLensContent
              mousePosition={mousePosition}
              lensSize={lensSize}
              zoomFactor={zoomFactor}
              imageInnerRounding={imageInnerRounding}
            >
              {children}
            </DynamicLensContent>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const StaticLensContent = ({
  position,
  lensSize,
  zoomFactor,
  children,
  imageInnerRounding,
}: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.58 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute inset-0 overflow-hidden"
    style={{
      maskImage: \`radial-gradient(circle \${lensSize / 2}px at \${position.x}px \${position.y}px, black 100%, transparent 100%)\`,
      WebkitMaskImage: \`radial-gradient(circle \${lensSize / 2}px at \${position.x}px \${position.y}px, black 100%, transparent 100%)\`,
      transformOrigin: \`\${position.x}px \${position.y}px\`,
      zIndex: 20,
      borderRadius: imageInnerRounding,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        transform: \`scale(\${zoomFactor})\`,
        transformOrigin: \`\${position.x}px \${position.y}px\`,
        borderRadius: imageInnerRounding,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  </motion.div>
);

const DynamicLensContent = ({
  mousePosition,
  lensSize,
  zoomFactor,
  children,
  imageInnerRounding,
}: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.58 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute inset-0 overflow-hidden"
    style={{
      maskImage: \`radial-gradient(circle \${lensSize / 2}px at \${mousePosition.x}px \${mousePosition.y}px, black 100%, transparent 100%)\`,
      WebkitMaskImage: \`radial-gradient(circle \${lensSize / 2}px at \${mousePosition.x}px \${mousePosition.y}px, black 100%, transparent 100%)\`,
      transformOrigin: \`\${mousePosition.x}px \${mousePosition.y}px\`,
      zIndex: 1,
      borderRadius: imageInnerRounding,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        transform: \`scale(\${zoomFactor})\`,
        transformOrigin: \`\${mousePosition.x}px \${mousePosition.y}px\`,
        borderRadius: imageInnerRounding,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  </motion.div>
);
`
  },
],
  dependencies: 'npm i motion clsx tailwind-merge\nnpm install framer-motion',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/bento-grid" target="_blank" rel="noopener noreferrer" className="link">Bento Grid</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
      <br />
      <a href="https://ui.aceternity.com/components/lens" target="_blank" rel="noopener noreferrer" className="link">Lens</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }