'use client';
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface RadioOption {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface RadioGroupProps {
  options: RadioOption[];
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  rtl?: boolean;
}

export function RadioGroup({
  options,
  onChange,
  value,
  defaultValue = options[0]?.value,
  rtl = false,
}: RadioGroupProps) {
  const activeTab = value || defaultValue;
  const [hovered, setHovered] = useState<string | null>(null);

  const finalOptions = rtl ? [...options].reverse() : options;

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        gap: '0.5rem',
      }}
    >
      {finalOptions.map((option) => {
        const isActive = activeTab === option.value;
        const isHovered = hovered === option.value;

        const Icon = option.icon;

        let bg = 'var(--radio-group-bg-default)';
        let fg = 'var(--radio-group-fg-default)';
        let border = '1px solid hsl(var(--border))';

        if (isActive) {
          bg = 'var(--radio-group-bg-active)';
          fg = 'var(--radio-group-fg-active)';
          border = '1px solid var(--radio-group-bg-active)';
        } else if (isHovered) {
          bg = 'hsl(var(--accent))';
          fg = 'var(--radio-group-fg-hover)';
          border = '1px solid hsl(var(--accent))';
        }
        
        return (
          <button
            key={option.value}
            type="button"
            aria-label={option.label}
            onClick={() => onChange?.(option.value)}
            onMouseEnter={() => setHovered(option.value)}
            onMouseLeave={() => setHovered(null)}
            className="h-10 text-sm font-medium"
            style={{
              background: bg,
              color: fg,
              border: border,
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              borderRadius: 'calc(var(--radius) - 2px)',
              cursor: 'pointer',
              outline: 'none',
              userSelect: 'none',
              transition: 'background 0.3s, color 0.3s, border-color 0.3s',
            }}
          >
            <Icon size={16} style={{ transform: rtl ? 'scaleX(-1)' : 'none' }} />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
