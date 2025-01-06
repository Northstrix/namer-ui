'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ModernNavbar.tsx" file
import ModernNavbar from '@/app/the-actual-components/modern-navbar/ModernNavbar'

import { IconUserFilled, IconFolderFilled, IconFileFilled, IconCircleArrowDownFilled, IconCircleArrowUpFilled, IconLockFilled, IconSettingsFilled, IconInfoCircleFilled } from '@tabler/icons-react';

<div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
  <ModernNavbar
      items={[
          { icon: <IconUserFilled size={24} />, label: 'Profile Info' },
          { icon: <IconFolderFilled size={24} />, label: 'Personal Files' },
          { icon: <IconFileFilled size={24} />, label: 'Shared Files' },
          { icon: <IconCircleArrowDownFilled size={24} />, label: 'Received Files' },
          { icon: <IconCircleArrowUpFilled size={24} />, label: 'Sent Files' },
          { icon: <IconLockFilled size={24} />, label: 'Password Vault' },
          { icon: <IconSettingsFilled size={24} />, label: 'Settings' },
          { icon: <IconInfoCircleFilled size={24} />, label: 'About' },
      ]}
      onItemHover={(index) => console.log(\`Hovering item \${index}\`)}
      onItemClick={(index) => console.log(\`Clicked item \${index}\`)}
      defaultItem={1}
  />
</div>

// Note: The ModernNavbar component accepts the following props:
// - items: NavItem[] (required) - An array of objects representing the items in the navbar, each containing an icon (React node) and a label (string).
// - onItemHover: (index: number) => void (optional) - Callback function triggered when an item is hovered over, receiving the index of the hovered item.
// - onItemClick: (index: number) => void (optional) - Callback function triggered when an item is clicked, receiving the index of the clicked item.
// - defaultItem: number (optional) - Index of the initially active item in the navbar (default: 0).
`,
code: [
  {
    filename: 'ModernNavbar.tsx',
    content: `"use client"
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface NavItem {
  icon: React.ReactElement;
  label: string;
}

interface ModernNavbarProps {
  items: NavItem[];
  onItemHover?: (index: number) => void;
  onItemClick?: (index: number) => void;
  defaultItem?: number;
}

const ModernNavbar: React.FC<ModernNavbarProps> = ({
  items,
  onItemHover,
  onItemClick,
  defaultItem = 0,
}) => {
  const [activeItem, setActiveItem] = useState(defaultItem);
  const navRef = useRef<HTMLElement>(null);
  const blobRef = useRef<SVGFEGaussianBlurElement>(null);
  const foregroundColor = '#00f';
  const activeIconOutlineColor = '#0f0';

  useEffect(() => {
    const updateNavbar = () => {
      if (navRef.current) {
        navRef.current.style.setProperty('--k', activeItem.toString());
      }
    };

    updateNavbar();

    gsap.to(navRef.current, {
      '--k': activeItem,
      duration: 0.5,
      ease: 'elastic.out(1, 0.7)'
    });

    // Add gooey effect
    gsap.to(blobRef.current, {
      attr: { stdDeviation: '12 8' },
      duration: 0.3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    });
  }, [activeItem]);

  return (
    <>
      <svg aria-hidden="true" width="0" height="0">
        <filter id="blob" colorInterpolationFilters="sRGB" y="-100%" height="300%">
          <feColorMatrix values={\`0 0 0 0 .12 0 0 0 0 .53 0 0 0 0 .9 1 0 0 0 0\`} />
          <feGaussianBlur ref={blobRef} stdDeviation="9" />
          <feMorphology radius="4 0" />
          <feComponentTransfer result="baseblob">
            <feFuncA type="table" tableValues="-9 10" />
          </feComponentTransfer>
          <feColorMatrix in="SourceGraphic" values={\`0 .12 .27 0 0 0 .53 .32 0 0 0 .89 .39 0 0 0 1   1   0 0\`} result="basetext" />
          <feComposite in="baseblob" operator="in" />
          <feColorMatrix values={\`0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\`} />
          <feBlend in2="baseblob" />
          <feBlend in2="basetext" />
        </filter>
      </svg>
      <nav ref={navRef} style={{ '--k': defaultItem } as React.CSSProperties}>
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            style={{ '--i': index } as React.CSSProperties}
            data-ico={item.label}
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(index);
              onItemClick?.(index);
            }}
            onMouseEnter={() => onItemHover?.(index)}
            className={\`navbar-item \${index === activeItem ? 'active' : ''}\`}
          >
            {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
            className: \`icon \${index === activeItem ? 'active-icon' : ''}\`
            })}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <style jsx>{\`
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

        @property --k {
          syntax: '<number>';
          initial-value: 0;
          inherits: true;
        }

        nav, a {
          display: flex;
        }

        nav {
          place-self: center;
          filter: url(#blob);
          transition: --k 0.5s cubic-bezier(0.32, 1, 0.68, 1);
        }

        a {
          --sgn: clamp(-1, var(--i) - var(--k), 1);
          --bit: round(0.5*(1 + var(--sgn)));
          --out: max(-1*var(--sgn), var(--sgn));
          --sel: calc(1 - var(--out));
          --col: \${foregroundColor};
          gap: 0.375rem;
          position: relative;
          padding: 0 1.25rem;
          background: #000;
          color: var(--col);
          font: 1.125em/2.25 inter, sans-serif;
          text-decoration: none;
          text-transform: capitalize;
          isolation: isolate;
          align-items: center;
        }

        a span {
          margin-left: 0.5rem;
        }

        a::after {
          --r: calc(var(--out)*var(--bit)*100%);
          --l: calc(var(--out)*(1 - var(--bit))*100%);
          position: absolute;
          inset: 1px 0;
          background: #f00;
          mix-blend-mode: lighten;
          clip-path: inset(0 var(--r) 0 var(--l));
          content: '';
        }

        a:hover, a:hover .icon, a.active .icon {
          color: \${activeIconOutlineColor};
        }

        a:hover {
          --col: \${activeIconOutlineColor};
        }

        a:focus {
          outline: none;
        }

        @supports (scale: Abs(-5)) {
          a {
            --out: abs(var(--sgn));
          }
        }
      \`}</style>
    </>
   );
};
export default ModernNavbar;
`
  },
],
  dependencies: 'npm install gsap --legacy-peer-deps\nnpm install @tabler/icons-react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/thebabydino/pen/RwzoqWj" target="_blank" rel="noopener noreferrer" className="link">Simple nav blob - no content duplication</a> by <a href="https://codepen.io/thebabydino" target="_blank" rel="noopener noreferrer" className="link">Ana Tudor</a>
      <br />
      <a href="https://codepen.io/jkantner/pen/OJKZxpv" target="_blank" rel="noopener noreferrer" className="link">Toolbars With Sliding Selection</a> by <a href="https://codepen.io/jkantner" target="_blank" rel="noopener noreferrer" className="link">Jon Kantner</a>
      <br />
      <a href="https://codepen.io/yudizsolutions/pen/YzgXvZJ" target="_blank" rel="noopener noreferrer" className="link">Gsap Slider</a> by <a href="https://codepen.io/yudizsolutions" target="_blank" rel="noopener noreferrer" className="link">Yudiz Solutions Limited</a>
    </span>
  ),
}

export { metadata }