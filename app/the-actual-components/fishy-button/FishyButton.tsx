"use client";
import React from 'react';

interface FishyButtonProps {
  children: React.ReactNode; // Include children prop
  isDelete?: boolean;
  onClick?: () => void;  // Optional click handler
  type?: "button" | "submit" | "reset"; // Allow button types
  className?: string; // Allow additional class names
}

const FishyButton: React.FC<FishyButtonProps> = ({ children, isDelete = false, onClick, type = "button", className = '' }) => {
  return (
    <button 
      type={type} 
      className={`button ${isDelete ? 'deleteButton' : ''} ${className}`} 
      onClick={onClick}
    >
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="fish"></div> {/* Fish element */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <span className="button__text">{children}</span> {/* Use children for button text */}

      {/* Integrated styles */}
      <style jsx>{`
  
 .button--1 {
  --color_1: #365fa8;
  --color_2: #4a76c5;
  --color_3: #5f8ce2;
  --color_4: #73a3ff;
  --color_5: #21488b;
  --color_6: #132a52;
}

 .button--2 {
  --color_1: #0092a0;
  --color_2: #00afb4;
  --color_3: #00cbc9;
  --color_4: #00e7de;
  --color_5: #00768b;
  --color_6: #004c59;
}

 .button--3 {
  --color_1: #1b70a1;
  --color_2: #368cc1;
  --color_3: #50a8e0;
  --color_4: #6bc4ff;
  --color_5: #005482;
  --color_6: #003654;
}

 .button {
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  text-decoration: none;
  overflow: hidden;
  background: var(--color_5);
  box-shadow: 0 0 12px rgba(0,0,0,.45), 0 0 8px rgba(0,0,0,.25) inset;
  transition: all ease .7s;
  border: none;
  cursor: pointer;
  margin: 0 5px;
}

 .button::before {
  content: '';
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,25,85,0) 60%, rgba(0,25,85,.4));
}

 .wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 1.5px rgba(10, 60, 90, 0.4));
}

 .wave:nth-child(1) { z-index: 1; }
 .wave:nth-child(2) { z-index: 2; }
 .wave:nth-child(3) { z-index: 3; }
 .wave:nth-child(4) { z-index: 5; }

 .wave:nth-child(1)::before,
 .wave:nth-child(1)::after,
 .wave:nth-child(2)::before,
 .wave:nth-child(2)::after,
 .wave:nth-child(3)::before,
 .wave:nth-child(3)::after,
 .wave:nth-child(4)::before,
 .wave:nth-child(4)::after {
  content: '';
  position: absolute;
  width: 70px;
  height: 32.5px;
  background: var(--color_1);
  clip-path: path('M70.22,0c-6.405,0.65-6.295,6.055-17.98,5.35-7.28-0.44-8.105,9.565-20.06,5.285-8.92-3.195-18.95-0.93-24.565,5.015C1.005,22.655,1.645,25.525,0,32.595H70.22V0Z');
  animation: wave_1 linear 3s infinite alternate;
}

 .wave:nth-child(1)::before,
 .wave:nth-child(2)::before,
 .wave:nth-child(3)::before,
 .wave:nth-child(4)::before {
  transform: rotate(180deg);
  transition: all ease .8s;
}

 .wave:nth-child(1)::after,
 .wave:nth-child(2)::after,
 .wave:nth-child(3)::after,
 .wave:nth-child(4)::after {
  transition: all ease .8s;
}

 .wave:nth-child(1)::before { top: -8px; left: -8px; }
 .wave:nth-child(2)::before { top: -10px; left: -10px; }
 .wave:nth-child(3)::before { top: -10px; left: -10px; }
 .wave:nth-child(4)::before { top: -10px; left: -10px; }

 .wave:nth-child(1)::after { bottom: -8px; right: -8px; }
 .wave:nth-child(2)::after { bottom: -10px; right: -10px; }
 .wave:nth-child(3)::after { bottom: -10px; right: -10px; }
 .wave:nth-child(4)::after { bottom: -10px; right: -10px; }

 .wave:nth-child(2)::before,
 .wave:nth-child(2)::after {
  background: var(--color_2);
  clip-path: path('M68.575,0.015c-8.375-0.22-13.645,2.385-16.845,5.36-3.2,2.98-12.26,9.865-21.54,4.585-6.55-3.73-13.37-1.57-19.125,2.39C3.305,17.69,1.87,22.37,0,29.815H68.575V0.015Z');
  animation: wave_2 linear 3s infinite alternate;
}

 .wave:nth-child(3)::before,
 .wave:nth-child(3)::after {
  background: var(--color_3);
  clip-path: path('M66.305,0c-4.59,1.96-5.645,2.6-9.985,2.095-4.665-0.545-5.485,6.145-12.685,7.765-4.845,1.09-8.56-3.575-14.445-2.685-7.84,1.19-8.175,3.895-14.505,4.69C2.185,13.43-0.395,25.15,0.045,27.245H66.305V0Z');
  animation: wave_3 linear 3s infinite alternate;
}

 .wave:nth-child(4)::before,
 .wave:nth-child(4)::after {
  background: var(--color_4);
  clip-path: path('M64.35,0.1c-8.375-0.22-11.995-0.345-15.195,2.63-3.2,2.98-4.34,6.095-13.495,3.665-4.8-1.27-12.01-2.22-17.08,1.165-5.415,3.615-7.435,4.745-11.415,5.165C0.795,13.405-0.36,19.865,0.085,21.96H64.35V0.1Z');
  animation: wave_4 linear 3s infinite alternate;
}

 .button__text {
  position: relative;
  z-index: 7;
  display: inline-block;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  color: #fff;
  transition: all ease 1s;
}

 .button:hover {
  background: var(--color_6);
  box-shadow: 0 0 12px rgba(0,0,0,0), 0 0 12px rgba(0,0,0,.4) inset;
}

 .button:hover .wave {
  animation: shadow ease 1s;
  animation-fill-mode: forwards;
}

 .button:hover .button__text {
  letter-spacing: 3px;
  font-size: 15px;
}

 .button:hover .wave:nth-child(1)::before { top: -2px; left: -2px; }
 .button:hover .wave:nth-child(1)::after { bottom: -2px; right: -2px; }
 .button:hover .wave:nth-child(2)::before { top: -2px; left: -2px; }
 .button:hover .wave:nth-child(2)::after { bottom: -2px; right: -2px; }
 .button:hover .wave:nth-child(3)::before { top: -3px; left: -3px; }
 .button:hover .wave:nth-child(3)::after { bottom: -3px; right: -3px; }
 .button:hover .wave:nth-child(4)::before { top: -4px; left: -4px; }
 .button:hover .wave:nth-child(4)::after { bottom: -4px; right: -4px; }

@keyframes shadow {
  0% { filter: drop-shadow(0 0 1.5px rgba(10, 60, 90, 0.4)); }
  100% { filter: drop-shadow(0 0 10px rgba(10, 60, 90, 0.35)); }
}

@keyframes wave_1 {
  0% { clip-path: path('M70.22,0c-6.405,0.65-6.295,6.055-17.98,5.35-7.28-0.44-8.105,9.565-20.06,5.285-8.92-3.195-18.95-0.93-24.565,5.015C1.005,22.655,1.645,25.525,0,32.595H70.22V0Z'); }
  100% { clip-path: path('M70.22,0c-8.605,1.525-8.675,8.71-17.54,7.385-8.345-1.245-11.86-3.31-25.065,3.85-6.99,3.79-13.415-1.125-19.88,4.225C2.27,19.99,1.645,24.25,0,31.32H70.22V0Z'); }
}

@keyframes wave_2 {
  0% { clip-path: path('M68.575,0.015c-8.375-0.22-13.645,2.385-16.845,5.36-3.2,2.98-12.26,9.865-21.54,4.585-6.55-3.73-13.37-1.57-19.125,2.39C3.305,17.69,1.87,22.37,0,29.815H68.575V0.015Z'); }
  100% { clip-path: path('M68.575,0c-8.605,5.08-8.62,5.39-18.86,4.8-7.305-0.42-10.11,8.28-19.245,6.04-7.445-1.825-9.105,4.765-15.875,3.44C5.345,12.475,1.87,22.355,0,29.8H68.575V0Z'); }
}

@keyframes wave_3 {
  0% { clip-path: path('M66.305,0c-4.59,1.96-5.645,2.6-9.985,2.095-4.665-0.545-5.485,6.145-12.685,7.765-4.845,1.09-8.56-3.575-14.445-2.685-7.84,1.19-8.175,3.895-14.505,4.69C2.185,13.43-0.395,25.15,0.045,27.245H66.305V0Z'); }
  100% { clip-path: path('M66.265,0c-1.51,4.145-6.85,1.525-10.575,5.39-3.26,3.38-5.4,1.86-14.82,1.985-4.965,0.065-7.555,3.925-13.47,4.57-5.405,0.59-7.79-2.135-14.065-0.995C4.02,12.645-0.41,25.15,0.03,27.245H66.265V0Z'); }
}

@keyframes wave_4 {
  0% { clip-path: path('M64.35,0.1c-8.375-0.22-11.995-0.345-15.195,2.63-3.2,2.98-4.34,6.095-13.495,3.665-4.8-1.27-12.01-2.22-17.08,1.165-5.415,3.615-7.435,4.745-11.415,5.165C0.795,13.405-0.36,19.865,0.085,21.96H64.35V0.1Z'); }
  100% { clip-path: path('M64.265,0c-6.61,6-9.52,2.98-13.81,2.15-6.45-1.25-7.255,1.345-14.85,5.42-4.375,2.35-7.665,1.405-14.105-0.15-7.72-1.86-9.6,3.975-14.515,5.52C2.36,14.4,0.38,18.915,0,21.86H64.265V0Z'); }
}

@keyframes shadow {
  0% { filter: drop-shadow(0 0 1.5px rgba(10, 60, 90, 0.4)); }
  100% { filter: drop-shadow(0 0 10px rgba(10, 60, 90, 0.35)); }
}

 .button {
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 140px;
  height: 53px;
  border-radius: 20px;
  text-decoration: none;
  overflow: hidden;
  background: var(--color_5);
  box-shadow: 0 0 12px rgba(0,0,0,.45), 0 0 8px rgba(0,0,0,.25) inset;
  transition: all ease .7s;
  border: none;
  cursor: pointer;
  margin: 0 5px;
}

 .button::before {
  content: '';
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,25,85,0) 60%, rgba(0,25,85,.4));
}

 .button__text {
  position: relative;
  z-index: 7;
  display: inline-block;
  font-size: 14px;
  letter-spacing: 2px;
  color: #fff;
  transition: all ease 1s;
}

 .button:hover {
  background: var(--color_6);
  box-shadow: 0 0 12px rgba(0,0,0,0), 0 0 12px rgba(0,0,0,.4) inset;
}

 .button:hover .wave {
  animation: shadow ease 1s;
  animation-fill-mode: forwards;
}

 .button:hover .button__text {
  letter-spacing: 3px;
  font-size: 15px;
}

 .button:hover .wave:nth-child(1)::before { top: -2px; left: -2px; }
 .button:hover .wave:nth-child(1)::after { bottom: -2px; right: -2px; }
 .button:hover .wave:nth-child(2)::before { top: -2px; left: -2px; }
 .button:hover .wave:nth-child(2)::after { bottom: -2px; right: -2px; }
 .button:hover .wave:nth-child(3)::before { top: -3px; left: -3px; }
 .button:hover .wave:nth-child(3)::after { bottom: -3px; right: -3px; }
 .button:hover .wave:nth-child(4)::before { top: -4px; left: -4px; }
 .button:hover .wave:nth-child(4)::after { bottom: -4px; right: -4px; }

 .button .wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 3px rgba(10, 60, 90, 0.8));
}

 .button .wave:nth-child(1) { z-index: 1; }
 .button .wave:nth-child(2) { z-index: 2; }
 .button .wave:nth-child(3) { z-index: 3; }
 .button .wave:nth-child(4) { z-index: 5; }

 .button .wave:nth-child(1)::before,
 .button .wave:nth-child(1)::after {
  content: '';
  position: absolute;
  width: 120px;
  height: 65px;
  background: var(--color_1);
  clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z');
  animation: encrypted-space-wave_1 linear 3s infinite alternate;
}

 .button .wave:nth-child(1)::before,
 .button .wave:nth-child(2)::before,
 .button .wave:nth-child(3)::before,
 .button .wave:nth-child(4)::before {
  transform: rotate(180deg);
  transition: all ease 4.4s;
}

/*
How fast the waves move
*/

 .button .wave:nth-child(1)::after,
 .button .wave:nth-child(2)::after,
 .button .wave:nth-child(3)::after,
 .button .wave:nth-child(4)::after {
  transition: all ease 4.4s;
}

 .button .wave:nth-child(1)::before { top: -16px; left: -16px; }
 .button .wave:nth-child(2)::before { top: -20px; left: -20px; }
 .button .wave:nth-child(3)::before { top: -20px; left: -20px; }
 .button .wave:nth-child(4)::before { top: -20px; left: -20px; }

 .button .wave:nth-child(1)::after { bottom: -16px; right: -16px; }
 .button .wave:nth-child(2)::after { bottom: -20px; right: -20px; }
 .button .wave:nth-child(3)::after { bottom: -20px; right: -20px; }
 .button .wave:nth-child(4)::after { bottom: -20px; right: -20px; }

 .button .wave:nth-child(2)::before,
 .button .wave:nth-child(2)::after {
  content: '';
  position: absolute;
  width: 139px;
  height: 61px;
  background: var(--color_2);
  clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z');
  animation: encrypted-space-wave_2 linear 3s infinite alternate;
}

 .button .wave:nth-child(3)::before,
 .button .wave:nth-child(3)::after {
  content: '';
  position: absolute;
  width: 134px;
  height: 56px;
  background: var(--color_3);
  clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z');
  animation: encrypted-space-wave_3 linear 3s infinite alternate;
}

 .button .wave:nth-child(4)::before,
 .button .wave:nth-child(4)::after {
  content: '';
  position: absolute;
  width: 129px;
  height: 47px;
  background: var(--color_4);
  clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z');
  animation: encrypted-space-wave_4 linear 3s infinite alternate;
}

 .button {
  position: relative; /* Ensure positioning context for child elements */
}

.fish {
  position: absolute;
  z-index: 4;
  top: -80px; /* Start position */
  right: -20px; /* Start position */
  width: 52px; 
  height: 78px; 
  clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  background: #fff; /* Fish color */
  opacity: 0; /* Start with the fish invisible */
  transition: opacity 0.3s ease; /* Smooth transition for opacity */
}

/* Animation on hover */
.button:hover .fish {
  animation: fish ease 2.3s forwards; /* Animation on hover */
  opacity: 1; /* Make the fish visible on hover */
}

/* Keyframes for the fish animation */
@keyframes fish {
  0% {
      top: -80px;
      right: -20px;
      transform: rotate(0);
      clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    10% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    20% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    30% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    40% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    50% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    60% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    70% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    80% {
        clip-path : path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z') ;
    }
    90% {
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') 
    }
    100%{
        top : 100px ;
        right : 80px ;
        transform : rotate(40deg) ;
        clip-path : path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z') ;
    }
}

 .button .button__text {
  position: relative;
  z-index: 7;
  display: inline-block;
  font-family: 'Griffy', cursive;
  font-size: 18px;
  letter-spacing: 8px;
  color: #fff;
  transition: all ease 1s;
}

 .button .bubble {
  position: absolute;
  z-index: 7;
  top: 0;
  width: 30px;
  height: 80px;
}

 .button .bubble::before,
 .button .bubble::after {
  content: '';
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0);
}

 .button .bubble:nth-child(6) { left: 16px; }
 .button .bubble:nth-child(7) { left: 48px; }
 .button .bubble:nth-child(8) { right: 16px; }
 .button .bubble:nth-child(9) { right: 48px; }

 .button .bubble:nth-child(6)::before {
  width: 16px;
  height: 16px;
  left: 0;
  bottom: -60px;
  transition: all ease 3.7s;
}

 .button .bubble:nth-child(6)::after {
  width: 8px;
  height: 8px;
  right: 4px;
  bottom: -10px;
  transition: all ease 3.4s;
}

 .button .bubble:nth-child(7)::before {
  width: 10px;
  height: 10px;
  left: 0;
  bottom: -25px;
  transition: all ease 3.5s;
}

 .button .bubble:nth-child(7)::after {
  width: 14px;
  height: 14px;
  right: 0;
  bottom: -50px;
  transition: all ease 3.3s;
}

 .button .bubble:nth-child(8)::before {
  width: 16px;
  height: 16px;
  left: 0;
  bottom: -30px;
  transition: all ease 3.5s;
}

 .button .bubble:nth-child(8)::after {
  width: 8px;
  height: 8px;
  right: 4px;
  bottom: -70px;
  transition: all ease 3.3s;
}

 .button .bubble:nth-child(9)::before {
  width: 10px;
  height: 10px;
  left: 0;
  bottom: -40px;
  transition: all ease 3.6s;
}

 .button .bubble:nth-child(9)::after {
  width: 14px;
  height: 14px;
  right: 0;
  bottom: -15px;
  transition: all ease 3.7s;
}

      `}</style>
    </button>
  );
};

export default FishyButton;