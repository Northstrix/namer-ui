"use client"
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

const isRTLCheck = (text: string): boolean => {
  return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
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
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: generalBorderRadius,
            color: inscriptionColor,
            zIndex: 100001,
            fontFamily: '"Questrial", sans-serif',
            backgroundColor: backgroundColorSecond,
            backgroundImage: `linear-gradient(45deg, ${backgroundColorFirst} 25%, transparent 25%, transparent 75%, ${backgroundColorFirst} 75%, ${backgroundColorFirst}), linear-gradient(-45deg, ${backgroundColorFirst} 25%, transparent 25%, transparent 75%, ${backgroundColorFirst} 75%, ${backgroundColorFirst})`,
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
              border: `1px solid rgba(255,255,255,0.18)`,
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
      <style jsx>{`
        @keyframes slide {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -120px 60px;
          }
        }
      `}</style>
    </>
  );
};

export default ConfirmationPopUp;
