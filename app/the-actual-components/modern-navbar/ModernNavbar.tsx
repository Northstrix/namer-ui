"use client"
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
          <feColorMatrix values={`0 0 0 0 .12 0 0 0 0 .53 0 0 0 0 .9 1 0 0 0 0`} />
          <feGaussianBlur ref={blobRef} stdDeviation="9" />
          <feMorphology radius="4 0" />
          <feComponentTransfer result="baseblob">
            <feFuncA type="table" tableValues="-9 10" />
          </feComponentTransfer>
          <feColorMatrix in="SourceGraphic" values={`0 .12 .27 0 0 0 .53 .32 0 0 0 .89 .39 0 0 0 1   1   0 0`} result="basetext" />
          <feComposite in="baseblob" operator="in" />
          <feColorMatrix values={`0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0`} />
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
            className={`navbar-item ${index === activeItem ? 'active' : ''}`}
          >
            {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
            className: `icon ${index === activeItem ? 'active-icon' : ''}`
            })}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <style jsx>{`
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
          --col: ${foregroundColor};
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
          color: ${activeIconOutlineColor};
        }

        a:hover {
          --col: ${activeIconOutlineColor};
        }

        a:focus {
          outline: none;
        }

        @supports (scale: Abs(-5)) {
          a {
            --out: abs(var(--sgn));
          }
        }
      `}</style>
    </>
   );
};
export default ModernNavbar;
