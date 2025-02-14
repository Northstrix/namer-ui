"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface UnfoldingFAQProps {
  faqs: FAQItem[];
  customRounding?: string;
  borderColor?: string;
  questionBackground?: string;
  answerBackground?: string;
  textColor?: string;
  particleColor?: string;
  questionFontSize?: string;
  answerFontSize?: string;
}

const UnfoldingFAQ: React.FC<UnfoldingFAQProps> = ({
  faqs,
  customRounding = "0.76em",
  borderColor = "#262626",
  questionBackground = "#050505",
  answerBackground = "#161616",
  textColor = "#FFFFFF",
  particleColor = "#FFFFFF",
  questionFontSize = "1.32rem",
  answerFontSize = "0.98rem",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-6 py-4">
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          faq={faq}
          index={idx}
          isOpen={openIndex === idx}
          isHovered={hoveredIndex === idx}
          toggleFAQ={toggleFAQ}
          setHoveredIndex={setHoveredIndex}
          customRounding={customRounding}
          borderColor={borderColor}
          questionBackground={questionBackground}
          answerBackground={answerBackground}
          textColor={textColor}
          particleColor={particleColor}
          questionFontSize={questionFontSize}
          answerFontSize={answerFontSize}
        />
      ))}
    </div>
  );
};

const FAQItem: React.FC<{
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  isHovered: boolean;
  toggleFAQ: (index: number) => void;
  setHoveredIndex: (index: number | null) => void;
  customRounding: string;
  borderColor: string;
  questionBackground: string;
  answerBackground: string;
  textColor: string;
  particleColor: string;
  questionFontSize: string;
  answerFontSize: string;
}> = ({
  faq,
  index,
  isOpen,
  isHovered,
  toggleFAQ,
  setHoveredIndex,
  customRounding,
  borderColor,
  questionBackground,
  answerBackground,
  textColor,
  particleColor,
  questionFontSize,
  answerFontSize,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden group`}
      style={{
        borderRadius: customRounding,
        border: `1px solid ${borderColor}`,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Question Section */}
      <div
        className={`relative z-10 flex justify-between items-center p-6 cursor-pointer`}
        style={{
          backgroundColor: questionBackground,
        }}
        onClick={() => toggleFAQ(index)}
      >
        {/* Question Text */}
        <span
          className="font-medium"
          style={{
            color: textColor,
            fontSize: questionFontSize,
            flexGrow: 1,
          }}
        >
          {faq.question}
        </span>

        {/* Toggle Icon */}
        <motion.span
          className={`font-bold`}
          style={{
            color: textColor,
            fontSize: `${questionFontSize}`,
            transformOrigin: "center",
            display: "inline-block",
            lineHeight: "1",
          }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          +
        </motion.span>

        {/* Sparkles Effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <SparklesCore
              id={`sparkles-${index}`}
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              particleColor={particleColor}
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Answer Section */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.25
                }
              }
            }}
            style={{
              overflow: "hidden"
            }}
          >
            <div
              className="p-6 relative z-10"
              style={{
                backgroundColor: answerBackground,
                color: textColor,
                fontSize: answerFontSize,
                borderTopLeftRadius: customRounding,
                borderTopRightRadius: customRounding,
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UnfoldingFAQ;