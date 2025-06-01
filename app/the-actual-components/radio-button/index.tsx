'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "RadioButton.tsx" file
import RadioButton from '@/app/the-actual-components/radio-button/RadioButton'

import { Home, Settings, Info } from 'lucide-react';

<div
  style={{
    minHeight: '300px',
    padding: '40px',
    background: '#050505',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div
    style={{
      width: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      boxSizing: 'border-box',
      background: 'rgba(0,0,0,0.2)',
      borderRadius: '12px',
    }}
  >
    <RadioButton
      options={[
        { value: 'home', label: 'Home', icon: Home },
        { value: 'settings', label: 'Settings', icon: Settings },
        { value: 'about', label: 'About', icon: Info },
      ]}
      onChange={value => {
        console.log('Selected tab:', value)
      }}
      defaultValue="home"
      activeBg="#f7f7fa"
      activeFg="#24222b"
      inactiveBg="#24222b"
      inactiveFg="#f7f7fa"
      hoverBg="#4776cb"
    />
  </div>
</div>

// Note: The RadioButton component accepts the following props:
// - options: RadioOption[] (required) - An array of RadioOption objects.
//    - value: string - The value of the option.
//    - label: string - The label to display.
//    - icon: LucideIcon - The icon to display.
// - onChange?: (value: string) => void (optional) - Callback when the selected option changes.
// - value?: string (optional) - The currently selected value (for controlled usage).
// - defaultValue?: string (optional) - The default selected value (for uncontrolled usage).
// - activeBg?: string (optional) - Background color for the active button (default: '#393643').
// - activeFg?: string (optional) - Text/icon color for the active button (default: '#fff').
// - inactiveBg?: string (optional) - Background color for inactive buttons (default: 'none').
// - inactiveFg?: string (optional) - Text/icon color for inactive buttons (default: '#aaa').
// - hoverBg?: string (optional) - Background color for hovered buttons (default: '#23222a').
// - gap?: string (optional) - Gap between buttons (default: '14px').
// - borderRadius?: string (optional) - Border radius for all buttons (default: '8px').
`,
code: [
  {
    filename: 'RadioButton.tsx',
    content: `'use client'
import React, { useState } from 'react'
import { LucideIcon } from 'lucide-react'

interface RadioOption {
  value: string
  label: string
  icon: LucideIcon
}

interface RadioButtonProps {
  options: RadioOption[]
  onChange?: (value: string) => void
  value?: string
  defaultValue?: string
  activeBg?: string
  activeFg?: string
  inactiveBg?: string
  inactiveFg?: string
  hoverBg?: string
  gap?: string
  borderRadius?: string // <-- Add this prop
}

export default function RadioButton({
  options,
  onChange,
  value,
  defaultValue = options[0]?.value,
  activeBg = '#393643',
  activeFg = '#fff',
  inactiveBg = 'none',
  inactiveFg = '#aaa',
  hoverBg = '#23222a',
  gap = '14px',
  borderRadius = '8px', // <-- Default border radius
}: RadioButtonProps) {
  // If value is provided, use it (controlled mode). Otherwise, use internal state.
  const [internalValue, setInternalValue] = useState(defaultValue)
  const activeTab = value !== undefined ? value : internalValue

  const [hovered, setHovered] = useState<string | null>(null)

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  // Helper to get button style
  const getButtonStyle = (optionValue: string): React.CSSProperties => {
    const isActive = activeTab === optionValue
    const isHovered = hovered === optionValue

    if (isActive) {
      return {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0 20px',
        height: '40px',
        border: 'none',
        borderRadius: borderRadius, // <-- Use the prop
        fontSize: '1.09rem',
        fontWeight: 500,
        cursor: 'pointer',
        outline: 'none',
        userSelect: 'none' as React.CSSProperties['userSelect'],
        margin: 0,
        background: activeBg,
        color: activeFg,
        transition: 'none'
      }
    }

    return {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 20px',
      height: '40px',
      border: 'none',
      borderRadius: borderRadius, // <-- Use the prop
      fontSize: '1.09rem',
      fontWeight: 500,
      cursor: 'pointer',
      outline: 'none',
      userSelect: 'none' as React.CSSProperties['userSelect'],
      margin: 0,
      background: isHovered ? hoverBg : inactiveBg,
      color: inactiveFg,
      transition: 'background 0.2s, color 0.2s'
    }
  }

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 0,
      marginTop: '18px',
      gap: gap
    }}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={option.label}
          onClick={() => handleChange(option.value)}
          onMouseEnter={() => setHovered(option.value)}
          onMouseLeave={() => setHovered(null)}
          style={getButtonStyle(option.value)}
        >
          <span style={{ display: 'inline-flex' }}>
            <option.icon color={activeTab === option.value ? activeFg : inactiveFg} size={20} strokeWidth={2} />
          </span>
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{option.label}</span>
        </button>
      ))}
    </div>
  )
}
`
  },
],
  dependencies: '',
  credit: (
    <></>
  ),
}

export { metadata }