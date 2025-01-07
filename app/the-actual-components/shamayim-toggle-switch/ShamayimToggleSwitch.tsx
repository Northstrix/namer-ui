"use client"
import React, { useState } from 'react';

interface ShamayimToggleSwitchProps {
  defaultState: boolean;
  mirrored?: boolean;
  onChange: (isOn: boolean) => void;
}

const ShamayimToggleSwitch: React.FC<ShamayimToggleSwitchProps> = ({ defaultState, mirrored = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange(newState);
  };

  return (
    <div className="toggle-wrapper" style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}>
      <input
        className="toggle-checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <svg className="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"/>
      </svg>
      <div className="toggle-container">
        <div className="toggle-button"></div>
      </div>
      <svg className="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"/>
      </svg>
      <style jsx>{`
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: .25em;
        }
        .toggle-icon {
          width: .5em;
          height: .5em;
          fill: #4c9bab;
          filter: drop-shadow(0 1px 1px rgb(255 255 255 / .4));
          transition: fill .4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
          background-image: repeating-conic-gradient(#0b66a0 0% 25%, #1093a8 0% 50%);
          background-size: .125em .125em;
          box-shadow: inset 0 .125em .25em rgba(0, 9, 38, .6), inset -1.5em 0 .0625em rgba(0, 9, 38, .5), inset .5em 0 .5em rgba(0, 9, 38, .5), 0 1px 1px rgb(255 255 255 / .4);
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: .0625em;
          left: .0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - .125em);
          background-image: linear-gradient(to right, #86e2fa, #125e79);
          box-shadow: 0 .125em .25em rgb(0 0 0 / .6);
          transition: left .4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      `}</style>
    </div>
  );
};

export { ShamayimToggleSwitch };