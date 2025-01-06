'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SkeuomorphicToggle.tsx" file
import SkeuomorphicToggle from '@/app/the-actual-components/skeuomorphic-toggle/SkeuomorphicToggle'

const [hydration, setHydration] = useState(true);
const [notifications, setNotifications] = useState(false);
const [autoSave, setAutoSave] = useState(false);

const logStateChange = useCallback((name: string, value: boolean) => {
  console.log(\`\${name} changed to: \${value}\`);
}, []);

const handleHydrationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  setHydration(e.target.checked);
  logStateChange('Hydration', e.target.checked);
}, [logStateChange]);

const handleNotificationsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  setNotifications(e.target.checked);
  logStateChange('Notifications', e.target.checked);
}, [logStateChange]);

const handleAutoSaveChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  setAutoSave(e.target.checked);
  logStateChange('Auto-Save', e.target.checked);
}, [logStateChange]);

<div className="bg-[#2e3138] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
  <div style={{ 
    minHeight: '300px', 
    borderRadius: '0.5rem', 
    backgroundColor: '#454954', 
    color: '#e0e0e0',
    padding: '20px',
    transition: 'background-color 0.3s, color 0.3s'
  }}>
    <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold'}}>Settings</h1>
    
    <div style={{ width: '250px', margin: '0 auto' }}>
      <SkeuomorphicToggle
        label="Hydration"
        name="hydration"
        checked={hydration}
        onChange={handleHydrationChange}
        onText="ON"
        offText="OFF"
        hue={210}
        hueSuccess={120}
      />

      <SkeuomorphicToggle
        label="Notifications"
        name="notifications"
        checked={notifications}
        onChange={handleNotificationsChange}
        onText="ON"
        offText="OFF"
        hue={180}
        hueSuccess={90}
      />

      <SkeuomorphicToggle
        label="Auto-Save"
        name="autoSave"
        checked={autoSave}
        onChange={handleAutoSaveChange}
        onText="YES"
        offText="NO"
        hue={260}
        hueSuccess={45}
      />
    </div>
  </div>
</div>

// Note: The SkeuomorphicToggle component accepts the following props:
// - label: string (required) - The label text for the toggle
// - name: string (required) - The name attribute for the input element
// - checked: boolean (optional) - The current state of the toggle
// - onChange: (event: React.ChangeEvent<HTMLInputElement>) => void (optional) - Function to call when the toggle is switched
// - onText: string (optional) - Text to display when the toggle is ON (default: "ON")
// - offText: string (optional) - Text to display when the toggle is OFF (default: "OFF")
// - hue: number (optional) - The base hue for the toggle colors (default: 223)
// - hueSuccess: number (optional) - The hue for the success state (default: 103)
`,
code: [
  {
    filename: 'SkeuomorphicToggle.tsx',
    content: `"use client"
import React from 'react';
import styles from './SkeuomorphicToggle.module.css';

interface ToggleProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onText?: string;
  offText?: string;
  hue?: number;
  hueSuccess?: number;
}

const SkeuomorphicToggle: React.FC<ToggleProps> = ({
  label,
  name,
  checked,
  onChange,
  onText = 'ON',
  offText = 'OFF',
  hue = 223,
  hueSuccess = 103,
}) => {
  const style = {
    '--hue': hue,
    '--hue-success': hueSuccess,
  } as React.CSSProperties;

  return (
    <label className={styles.setting} style={style}>
      <span className={styles.setting__label}>{label}</span>
      <span className={styles.switch}>
        <input
          className={styles.switch__input}
          type="checkbox"
          role="switch"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.switch__fill} aria-hidden="true">
          <span className={styles.switch__text}>{onText}</span>
          <span className={styles.switch__text}>{offText}</span>
        </span>
      </span>
    </label>
  );
};

export default SkeuomorphicToggle;
`
  },
  {
    filename: 'SkeuomorphicToggle.module.css',
    content: `.setting {
  --hue: 223;
  --hue-success: 103;
  --bg: hsl(var(--hue),10%,80%);
  --fg: hsl(var(--hue),10%,10%);
  --primary: hsl(var(--hue),90%,50%);
  --primary-t: hsla(var(--hue),90%,50%,0);
  --trans-dur: 0.3s;
  --trans-timing: cubic-bezier(0.65,0,0.35,1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em 1em;
}

.setting__label {
  margin-right: 1em;
}

.setting, .switch__input {
  -webkit-tap-highlight-color: transparent;
}

.switch {
  background-image: linear-gradient(hsl(var(--hue),10%,60%),hsl(var(--hue),10%,95%));
  box-shadow: 0 0 0.125em 0.125em hsl(var(--hue),10%,90%) inset;
  border-radius: 1em;
  flex-shrink: 0;
  position: relative;
  width: 5em;
  height: 2em;
}

.switch:before, .switch:after {
  border-radius: 0.75em;
  content: "";
  position: absolute;
  top: 0.25em;
  left: 0.25em;
  width: 4.5em;
  height: 1.5em;
}

.switch:before {
  background-color: hsl(var(--hue),10%,60%);
}

.switch:after {
  box-shadow: 0 0 0.5em hsl(var(--hue),10%,20%) inset;
  z-index: 1;
}

.switch__fill {
  border-radius: 0.75em;
  overflow: hidden;
  position: absolute;
  top: 0.25em;
  right: 0;
  left: 0.25em;
  width: 4.5em;
  height: 1.5em;
  z-index: 1;
}

.switch__input {
  border-radius: 1em;
  box-shadow: 0 0 0 0.125em var(--primary-t);
  cursor: pointer;
  outline: transparent;
  position: relative;
  width: 100%;
  height: 100%;
  transition: box-shadow calc(var(--trans-dur) / 2) var(--trans-timing);
  z-index: 2;
  -webkit-appearance: none;
  appearance: none;
}

.switch__input:focus-visible {
  box-shadow: 0 0 0 0.125em var(--primary);
}

.switch__input:before, .switch__input:after {
  border-radius: 50%;
  content: "";
  display: block;
  position: absolute;
  transition: transform var(--trans-dur) var(--trans-timing);
}

.switch__input:before {
  background-image: linear-gradient(hsl(0,0%,100%),hsl(var(--hue),10%,60%));
  box-shadow: 0 0 0.125em 0.0625em hsl(var(--hue),10%,40%), 0 0.25em 0.25em hsla(var(--hue),10%,10%,0.4);
  top: 0.125em;
  left: 0.125em;
  width: 1.75em;
  height: 1.75em;
}

.switch__input:after {
  background-image: linear-gradient(hsl(var(--hue),10%,90%),hsl(var(--hue),10%,80%));
  top: 0.25em;
  left: 0.25em;
  width: 1.5em;
  height: 1.5em;
}

.switch__text {
  display: block;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 2;
  opacity: 0.6;
  padding: 0 0.75em;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform var(--trans-dur) var(--trans-timing);
  z-index: -1;
}

.switch__text:first-child {
  background-color: hsl(var(--hue-success),90%,50%,0.5);
  color: hsl(var(--hue-success),90%,10%);
  left: 0;
  text-shadow: 0 0.0625rem 0 hsl(var(--hue-success),90%,55%);
  transform: translateX(-100%);
}

.switch__text:last-child {
  background-color: hsla(0,0%,0%,0);
  color: hsl(var(--hue),10%,90%);
  right: 0;
  text-align: right;
  text-shadow: 0 0.0625rem 0 hsl(var(--hue),10%,75%);
}

.switch__input:checked:before,
.switch__input:checked:after {
  transform: translateX(3em);
}

.switch__input:checked + .switch__fill .switch__text:first-child {
  transform: translateX(0);
}

.switch__input:checked + .switch__fill .switch__text:last-child {
  transform: translateX(100%);
}

@media (prefers-color-scheme: dark) {
  .setting {
    --bg: hsl(var(--hue),10%,20%);
    --fg: hsl(var(--hue),10%,90%);
    --primary: hsl(var(--hue),90%,70%);
    --primary-t: hsla(var(--hue),90%,70%,0);
  }

  .switch {
    background-image: linear-gradient(hsl(var(--hue),10%,15%),hsl(var(--hue),10%,35%));
    box-shadow: 0 0 0.125em 0.125em hsl(var(--hue),10%,30%) inset;
  }

  .switch:before {
    background-color: hsl(var(--hue),10%,40%);
  }

  .switch:after {
    box-shadow: 0 0 0.5em hsl(0,0%,0%) inset;
  }

  .switch__input:before {
    background-image: linear-gradient(hsl(var(--hue),10%,50%),hsl(var(--hue),10%,20%));
    box-shadow: 0 0 0.125em 0.0625em hsl(var(--hue),10%,10%), 0 0.25em 0.25em hsla(var(--hue),10%,10%,0.4);
  }

  .switch__input:after {
    background-image: linear-gradient(hsl(var(--hue),10%,40%),hsl(var(--hue),10%,30%));
  }

  .switch__text:first-child {
    text-shadow: 0 0.0625rem 0 hsl(var(--hue-success),90%,45%);
  }

  .switch__text:last-child {
    color: hsl(var(--hue),10%,90%);
    text-shadow: 0 0.0625rem 0 hsl(var(--hue),10%,20%);
  }
}
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/jkantner/pen/YzBddqx" target="_blank" rel="noopener noreferrer" className="link">Skeuomorphic Setting Switches</a> by <a href="https://codepen.io/jkantner" target="_blank" rel="noopener noreferrer" className="link">Jon Kantner</a>
    </span>
  ),
}

export { metadata }