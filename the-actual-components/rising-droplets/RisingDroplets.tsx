"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

interface RisingDropletsProps {
  colors: [string, string, string]; // Array of three colors for the gradients
}

const RisingDroplets: React.FC<RisingDropletsProps> = ({ colors }) => {
  useEffect(() => {
    // Set initial visibility of the SVG
    gsap.set('.droplet-svg', { visibility: 'visible' });

    // Set initial positions and sizes for dots
    gsap.set('.dot', {
      transformOrigin: '50% 50%',
      attr: {
        cx: 'random(350, 450)',
        cy: 600, // Start from the bottom of the viewBox
        r: 'random(4, 20)',
      },
    });

    gsap.set('.outsideDot', {
      transformOrigin: '50% 50%',
      attr: {
        cx: 'random(370, 420)',
        cy: 600, // Start from the bottom of the viewBox
        r: 'random(3, 19)',
      },
    });

    // Animation timelines for each group of dots
    const tl1 = gsap.timeline();
    tl1.to('.dots1 .dot', {
      duration: 'random(2,8)',
      attr: { cy: '-100' }, // Animate upwards to above the viewport
      stagger: { each: 0.16, repeat: -1 },
      ease: 'linear',
    }).seek(100);

    const tl2 = gsap.timeline();
    tl2.to('.dots2 .dot', {
      duration: 'random(2,5)',
      attr: { cy: '-100' }, // Animate upwards to above the viewport
      stagger: { each: 0.16, repeat: -1 },
      ease: 'sine.in',
    }).seek(100);

    const tl3 = gsap.timeline();
    tl3.to('.dots3 .dot', {
      duration: 'random(6,12)',
      attr: { cy: '-100' }, // Animate upwards to above the viewport
      stagger: { each: 0.16, repeat: -1 },
      ease: 'sine.in',
    }).seek(100);

    const tl4 = gsap.timeline();
    tl4.to('.dots4 .dot', {
      duration: 'random(3,9)',
      attr: { cy: '-100' }, // Animate upwards to above the viewport
      stagger: { each: 0.16, repeat: -1 },
      ease: 'sine.in',
    }).seek(100);

    const tl5 = gsap.timeline();
    tl5.to('.dots5 .outsideDot', {
      duration: 'random(3,9)',
      attr: { cy: '-100', r: 0 }, // Animate upwards to above the viewport
      stagger: { each: 0.16, repeat: -1 },
      ease: 'power2.in',
    }).seek(100);

  }, []);

  return (
    <svg 
      className="droplet-svg"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 600" 
      style={{ 
        width: "100%", 
        height: "100%", 
        position:"absolute", // Use absolute positioning to avoid affecting layout
        bottom:"0", // Align to the bottom of the container
        left:"0",
        pointerEvents:"none" // Allow clicks to pass through to elements above
       }} 
    >
      <defs>
        {/* Define gradients based on input colors */}
        {colors.map((color, index) => (
          <linearGradient key={index} id={`grad${index + 1}`} gradientUnits="userSpaceOnUse" x1={400} y1={100} x2={400} y2={600}>
            <stop offset="0%" style={{ stopColor: color }} />
            <stop offset="100%" style={{ stopColor: color.replace(/FF$/, "80") }} /> {/* Slightly lighter color */}
          </linearGradient>
        ))}
        
        {/* Example clipPath */}
        <clipPath id="mainMask">
          <circle cx={400} cy={300} r={300} />
        </clipPath>
      </defs>

      {/* Main SVG content with animated dots */}
      {[...Array(colors.length)].map((_, index) => (
        <g key={index} className={`dots${index + 1}`}>
          {[...Array(10)].map((_, dotIndex) => (
            <circle key={dotIndex} className='dot' fill={`url(#grad${index + 1})`} />
          ))}
        </g>
      ))}

      {/* Additional elements with drop2 filter */}
      {[...Array(colors.length)].map((_, index) => (
        <g key={index} className='dots5'>
          {[...Array(10)].map((_, dotIndex) => (
            <circle key={dotIndex} className='outsideDot' fill={`url(#grad${index + colors.length + 1})`} />
          ))}
        </g>
      ))}
      
    </svg>
  );
};

export default RisingDroplets;