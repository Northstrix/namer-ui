'use client'


const metadata = {
  usage: `// Path to the "ConfirmationPopUp.tsx" file
import ConfirmationPopUp from '@/app/the-actual-components/confirmation-pop-up/ConfirmationPopUp'

const handleConfirmationPopUpConfirm = () => {
  console.log('Confirmed');
  setShowConfirmPopUp(false);
};

const handleConfirmationPopUpCancel = () => {
  console.log('Cancelled');
  setShowConfirmPopUp(false);
};

<button onClick={() => setShowConfirmPopUp(true)}>Show PopUp</button>
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

// Note: The ConfirmationPopUp component accepts the following props:
// - showConfirmPopUp: boolean (required) - Flag to show or hide the confirmation popup.
// - onConfirm: () => void (required) - Callback function triggered when the confirm button is clicked.
// - onCancel: () => void (required) - Callback function triggered when the cancel button is clicked.
// - confirmText: string (required) - Text displayed on the confirm button.
// - cancelText: string (required) - Text displayed on the cancel button.
// - messageText: string (required) - Message displayed in the popup.
// - mirrorButtons?: boolean (optional) - Flag to mirror the button positions (default: false).
// - textSize?: number (optional) - Font size for the message text (default: 21).
// - inscriptionColor?: string (optional) - Color for the message text (default: 'black').
// - backgroundColorFirst: string (required) - First color for the modal background gradient.
// - backgroundColorSecond: string (required) - Second color for the modal background.
// - borderColor: string (required) - Color for the modal border.
// - generalBorderRadius: string (required) - Border radius for the modal.
// - borderWidth: number (required) - Width of the modal border.
// - modalWidth?: string (optional) - Width of the modal (default: 'auto').
// - modalHeight?: string (optional) - Height of the modal (default: 'auto').
// - modalPadding: string (required) - Padding inside the modal.
// - marginAroundModal: string (required) - Margin around the modal.
// - inscriptionBackground?: string (optional) - Background color for the inscription container (default: 'rgba(28, 30, 37, 0.7)').
// - buttonWidth?: string (optional) - Width of the buttons (default: '70px').
// - buttonTextColor?: string (optional) - Text color for the buttons (default: 'white').
// - buttonFontSize?: number (optional) - Font size for the buttons (default: textSize).
// - buttonOutlineColor?: string (optional) - Outline color for the buttons (default: 'transparent').
// - buttonBorderRadius?: string (optional) - Border radius for the buttons (default: '4px').
// - confirmFirstClass?: string (optional) - Class for the first state of the confirm button (default: 'bg-orange-500 text-white').
// - confirmSecondClass?: string (optional) - Class for the second state of the confirm button (default: 'bg-black text-white').
// - cancelFirstClass?: string (optional) - Class for the first state of the cancel button (default: 'bg-red-500 text-white').
// - cancelSecondClass?: string (optional) - Class for the second state of the cancel button (default: 'bg-gray-500 text-white').
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
    filename: 'ConfirmationPopUp.tsx',
    content: `"use client"
import React from 'react';
import SwipeButton from './SwipeButton';

interface ConfirmationPopUpProps {
  showConfirmPopUp: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText: string;
  cancelText: string;
  messageText: string;
  mirrorButtons?: boolean;
  textSize?: number;
  inscriptionColor?: string;
  backgroundColorFirst: string;
  backgroundColorSecond: string;
  borderColor: string;
  generalBorderRadius: string;
  borderWidth: number;
  modalWidth?: string;
  modalHeight?: string;
  modalPadding: string;
  marginAroundModal: string;
  inscriptionBackground?: string;
  
  // Button customization props
  buttonWidth?: string;
  buttonTextColor?: string;
  buttonFontSize?: number;
  buttonOutlineColor?: string;
  buttonBorderRadius?: string;
  
  // SwipeButton props
  confirmFirstClass?: string;
  confirmSecondClass?: string;
  cancelFirstClass?: string;
  cancelSecondClass?: string;
}

// Utility function to determine if text is RTL
const isRTLCheck = (text: string): boolean => {
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const ConfirmationPopUp: React.FC<ConfirmationPopUpProps> = ({
  showConfirmPopUp,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
  messageText,
  mirrorButtons = false,
  textSize = 21,
  inscriptionColor = 'black',
  backgroundColorFirst,
  backgroundColorSecond,
  borderColor,
  generalBorderRadius,
  borderWidth,
  modalWidth = 'auto',
  modalHeight = 'auto',
  modalPadding = '1.1rem 2rem',
  marginAroundModal,
  inscriptionBackground = 'rgba(28, 30, 37, 0.7)',
  
  // Button customization props with default values
  buttonWidth = '70px', 
  buttonTextColor = 'white', 
  buttonOutlineColor = 'transparent', 
  buttonBorderRadius = '4px', 
  
  // SwipeButton props with default values
  confirmFirstClass = "bg-orange-500 text-white",
  confirmSecondClass = "bg-black text-white",
  cancelFirstClass = "bg-red-500 text-white",
  cancelSecondClass = "bg-gray-500 text-white",
}) => {
  
  const isRTL = isRTLCheck(messageText);

  return (
    <>
      {showConfirmPopUp && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: modalWidth,
            height: modalHeight,
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: modalPadding,
            border: \`\${borderWidth}px solid \${borderColor}\`,
            borderRadius: generalBorderRadius,
            color: inscriptionColor,
            zIndex: 100001,
            fontFamily: '"Questrial", sans-serif',
            backgroundColor: backgroundColorSecond,
            backgroundImage: \`linear-gradient(45deg, \${backgroundColorFirst} 25%, transparent 25%, transparent 75%, \${backgroundColorFirst} 75%, \${backgroundColorFirst}), linear-gradient(-45deg, \${backgroundColorFirst} 25%, transparent 25%, transparent 75%, \${backgroundColorFirst} 75%, \${backgroundColorFirst})\`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0',
            animation: 'slide 4s infinite linear',
            textAlign: isRTL ? 'right' : 'left',
            margin: marginAroundModal,
          }}
        >
          <div
            style={{
              padding: '12px',
              backgroundColor: inscriptionBackground,
              borderRadius: generalBorderRadius,
              width: '100%',
              backdropFilter: 'blur(10px) saturate(90%)',
              border: \`1px solid rgba(255,255,255,0.18)\`,
            }}
          >
            <p
              style={{
                fontSize: textSize,
                color: inscriptionColor,
                textAlign: 'center',
              }}
            >
              {messageText}
            </p>
          </div>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            {mirrorButtons ? (
              <>
                <SwipeButton
                  firstText={cancelText}
                  secondText={cancelText}
                  firstClass={cancelFirstClass}
                  secondClass={cancelSecondClass}
                  onClick={onCancel}
                  style={{
                    width: buttonWidth,
                    color: buttonTextColor,
                    borderRadius: buttonBorderRadius,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: buttonOutlineColor,
                  }}
                />
                <SwipeButton
                  firstText={confirmText}
                  secondText={confirmText}
                  firstClass={confirmFirstClass}
                  secondClass={confirmSecondClass}
                  onClick={onConfirm}
                  style={{
                    width: buttonWidth,
                    color: buttonTextColor,
                    borderRadius: buttonBorderRadius,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: buttonOutlineColor,
                    marginLeft: '0.5rem',
                  }}
                />
              </>
            ) : (
              <>
                <SwipeButton
                  firstText={confirmText}
                  secondText={confirmText}
                  firstClass={confirmFirstClass}
                  secondClass={confirmSecondClass}
                  onClick={onConfirm}
                  style={{
                    width: buttonWidth,
                    color: buttonTextColor,
                    borderRadius: buttonBorderRadius,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: buttonOutlineColor,
                  }}
                />
                <SwipeButton
                  firstText={cancelText}
                  secondText={cancelText}
                  firstClass={cancelFirstClass}
                  secondClass={cancelSecondClass}
                  onClick={onCancel}
                  style={{
                    width: buttonWidth,
                    color: buttonTextColor,
                    borderRadius: buttonBorderRadius,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: buttonOutlineColor,
                    marginLeft: '0.5rem',
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}
      <style jsx>{\`
        @keyframes slide {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -120px 60px;
          }
        }
      \`}</style>
    </>
  );
};

export default ConfirmationPopUp;
`
  },
  {
    filename: 'SwipeButton.tsx',
    content: `"use client";
import React from "react";

import { cn } from "@/lib/utils";

interface SwipeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstText: string;
  secondText: string;
  className?: string;
  firstClass?: string;
  secondClass?: string;
}

export default function SwipeButton({
  className = "",
  secondText = "Get access",
  firstText = "Get access",
  firstClass = "bg-orange-500 text-white",
  secondClass = "bg-black text-white",
  ...props
}: SwipeButtonProps) {
  const common = "block px-4 py-2   text-2xl font-bold duration-300 ease-in-out";
  return (
    <button
      {...props}
      className={cn("group relative min-w-fit overflow-hidden rounded-md", className)}
    >
      <span
        className={cn(
          "absolute inset-0 translate-y-full group-hover:translate-y-0",
          common,
          secondClass,
        )}
      >
        {secondText}
      </span>
      <span className={cn("group-hover:-translate-y-full", common, firstClass)}>{firstText}</span>
    </button>
  );
}
`
  },
],
  dependencies: ``,
  credit: (
    <span>
      <a href="https://codepen.io/Gthibaud/pen/MqpmXE" target="_blank" rel="noopener noreferrer" className="link">rémi's pop-up</a> by <a href="https://codepen.io/Gthibaud" target="_blank" rel="noopener noreferrer" className="link">Tibo</a>
      <br />
      <a href="https://animata.design/docs/button" target="_blank" rel="noopener noreferrer" className="link">Buttons overview</a> by <a href="https://animata.design/" target="_blank" rel="noopener noreferrer" className="link">ANIMATA</a>
    </span>
  ),
}

export { metadata }