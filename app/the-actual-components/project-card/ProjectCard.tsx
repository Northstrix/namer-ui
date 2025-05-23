"use client";
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
  `${isRTL ? "-" : ""}6px 6px 32px 0 rgba(0,0,0,0.22)`;

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
              paddingTop: `${(1 / imageAspectRatio) * 100}%`,
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
