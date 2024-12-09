"use client";
import React, { useEffect, useState } from 'react';

interface FancyNotificationProps {
  type: 'success' | 'error'; // Type of notification
  message: string;            // Main message to display
  message1?: string;         // Optional secondary message
  isVisible: boolean;        // Controls visibility
  onClose: () => void;       // Function to call when closing the notification
  successMessage?: string;   // Custom success message (optional)
  errorMessage?: string;     // Custom error message (optional)
}

const FancyNotification: React.FC<FancyNotificationProps> = ({
  type,
  message,
  message1,
  isVisible,
  onClose,
  successMessage = 'Success!',
  errorMessage = 'Error!'
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            setIsFadingOut(true);
            const timer = setTimeout(() => {
                onClose();
            }, 300); // Match this duration with the CSS transition duration
            return () => clearTimeout(timer);
        } else {
            setIsFadingOut(false);
        }
    }, [isVisible, onClose]);

    return (
        <div 
            id="sign-up-rectangle-notification-container" 
            className={`sign-up-rectangle-notification-container ${isVisible ? 'flex' : 'hidden'} ${isFadingOut ? 'fade-out' : ''}`}
        >
            <style jsx>{`
                #sign-up-rectangle-notification-container {
                    backdrop-filter: blur(4px) saturate(140%);
                    position: fixed; /* Fixed positioning for overlay */
                    left: 50%;
                    transform: translateX(-50%); /* Center horizontally */
                    z-index: 1000; /* Ensure it's above everything */
                    flex-direction: column;
                    align-items: center;
                    backdrop-filter: brightness(50%);
                }
                
                .sign-up-rectangle-notification-box {
                    top: calc(50% - 125px);
                    position: relative; /* Changed to relative for proper stacking */
                    width: 245px; /* Set to specified width */
                    height: 250px; /* Set to specified height */
                    border-radius: 20px;
                    box-shadow: 5px 5px 20px rgba(203, 205, 211, 0.11);
                    display: flex;
                    flex-direction: column;
                    justify-content: center; /* Center content vertically */
                    align-items: center; /* Center content horizontally */
                    z-index: 999;
                }

                /* Success Box Styles */
                .sign-up-rectangle-notification-success-box {
                    background: linear-gradient(to bottom right, rgba(0, 123, 255, 0.8) 40%, rgba(173, 216, 230, 0.8) 100%);
                }

                /* Error Box Styles */
                .sign-up-rectangle-notification-error-box {
                    background: linear-gradient(to bottom left, rgba(255, 105, 180, 0.8) 40%, rgba(255, 182, 193, 0.8) 100%);
                }
                
                /* Face Styles */
                .sign-up-rectangle-notification-face{
                    position: absolute;
                    width: 22%;
                    height: 22%;
                    background: #FCFCFC;
                    border-radius: 50%;
                    border: 1px solid #777777;
                    top: 11%; /* Adjusted to align with your specifications */
                    z-index: 2;
                    animation: bounce 1s ease-in infinite; /* Animation for the face */
                }

                .sign-up-rectangle-notification-face.face2 {
                    position: absolute;
                    width: 22%;
                    height: 22%;
                    border-radius: 50%;
                    background: #FCFCFC;
                    border-radius: 50%;
                    border: 1px solid #777777;
                    top: 11%;
                    left: 37.5%;
                    z-index: 2;
                    animation: roll 3s ease-in-out infinite;
                }

                /* Eye Styles */
                .sign-up-rectangle-notification-eye {
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    background: #777777;
                    border-radius: 50%;
                    top: 30%; /* Adjusted for alignment */
                    left: 20%;
                }
                
                .sign-up-rectangle-notification-eye.right {
                    left: 68%;
                }
                
                /* Mouth Styles */
                .sign-up-rectangle-notification-mouth {
                    position: absolute;
                    top: 33%; /* Adjusted for alignment */
                    left: 41%;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                }
                
                .sign-up-rectangle-notification-mouth.happy {
                    border: 2px solid;
                    border-color: transparent #777777 #777777 transparent;
                    transform: rotate(45deg);
                }
                
                .sign-up-rectangle-notification-mouth.sad {
                    top: 39%; /* Adjusted for alignment */
                    border: 2px solid;
                    border-color: #777777 transparent transparent #777777;
                    transform: rotate(45deg);
                }
                
                /* Shadow Styles */
                .sign-up-rectangle-notification-shadow.scale {
                    position: absolute;
                    width: 21%;
                    height: 3%;
                    opacity: 0.5;
                    background: #454545;
                    left: 40%;
                    top: 33%; /* Adjusted for alignment */
                    border-radius: 50%;
                    z-index: 1;
                    animation: scale 1s ease-in infinite;
                }

                .sign-up-rectangle-notification-shadow.move {
                    position: absolute;
                    width: 21%;
                    height: 3%;
                    opacity: 0.5;
                    background: #454545;
                    left: 40%;
                    top: 33%; /* Adjusted for alignment */
                    border-radius: 50%;
                    z-index: 1;
                    transform: scale(1.14);
                    animation: move 3s ease-in-out infinite;
                }

                /* Message Styles */
                .sign-up-rectangle-notification-message {
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    top: 34%; /* Adjusted for alignment */
                }

                .alert-rect-top {
                    font-size: 32px;
                    font-weight: bold;
                    font-weight: 700;
                    color: #F5F5F5;
                    margin: 0px 0px 0px 0px;
                }

                .rectangle-notification-text {
                    color: #F5F5F5;
                    margin: 2px 0 0px;
                    font-size: 17px;
                }

                .rectangle-notification-text1 {
                    color: #F5F5F5;
                    margin: 0px 0 1px;
                    font-size: 17px;
                }
                
                /* Button Styles */
                .sign-up-rectangle-notification-button-box {
                    position: absolute;
                    width: 50%;
                    height: 15%;
                    top: 196px; /* Adjusted for alignment */
                    left: 25%;
                    background-color: transparent;
                    border: 2px solid #FFFFFF;
                    color: #FFFFFF;
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    border-radius: 20px;
                    outline: 0;
                    overflow: hidden;
                    transition: all 0.5s ease;
                    cursor: pointer;
                }
                
                .sign-up-rectangle-notification-button-box:hover {
                    background: #FFFFFF;
                    color: #242424;
                    transform: scale(1.10);
                    box-shadow: 0 0 5px #FFFFFF, 0 0 25px #FFFFFF, 0 0 50px #FFFFFF, 0 0 200px #FFFFFF;
                    transition: all 0.5s ease;
                }

                /* Animation Styles */
                @keyframes bounce {
                    50% {
                    transform: translateY(-10px);
                    }
                }
                
                @keyframes roll {
                    0% {
                    transform: rotate(0deg);
                    left: 25%;
                    }
                    50% {
                    left: 60%;
                    transform: rotate(168deg);
                    }
                    100% {
                    transform: rotate(0deg);
                    left: 25%;
                    }
                }
                
                @keyframes move {
                    0% {
                    left: 25%;
                    }
                    50% {
                    left: 60%;
                    }
                    100% {
                    left: 25%;
                    }
                }
                
                @keyframes scale {
                    50% {
                    transform: scale(0.9);
                    }
                }
                    
            `}</style>
        <div className={`sign-up-rectangle-notification-box ${type === 'success' ? 'sign-up-rectangle-notification-success-box' : 'sign-up-rectangle-notification-error-box'}`}>
            <div className={`sign-up-rectangle-notification-face ${type === 'success' ? '' : 'face2'}`}>
                <div className="sign-up-rectangle-notification-eye"></div>
                <div className="sign-up-rectangle-notification-eye right"></div>
                <div className={`sign-up-rectangle-notification-mouth ${type === 'success' ? 'happy' : 'sad'}`}></div>
            </div>
            <div className={`sign-up-rectangle-notification-shadow ${type === 'success' ? 'scale' : 'move'}`}></div>
            <div className="sign-up-rectangle-notification-message">
                <h1 className="alert-rect-top">{type === 'success' ? successMessage : errorMessage}</h1>
                <p className="rectangle-notification-text">{message}</p>
                {message1 && <p className="rectangle-notification-text1">{message1}</p>}
            </div>
            <button className="sign-up-rectangle-notification-button-box" onClick={onClose}>Close</button> {/* Close button added */}
        </div>
      </div>
    );
};

export default FancyNotification;