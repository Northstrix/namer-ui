'use client';

import React, { useEffect, useState } from 'react';

interface DicedGridProps {
  images: string[];
  onGridImageClick?: (index: number) => void;
  onGridImageHover?: (index: number) => void;
  viewportHeightMultiplier?: number;
  gridSizeAdjustment?: number;
}

const DicedGrid: React.FC<DicedGridProps> = ({
  images,
  onGridImageClick,
  onGridImageHover,
  viewportHeightMultiplier = 0.8,
  gridSizeAdjustment = -96,
}) => {
  const [gridSize, setGridSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const calculatedSize = window.innerHeight * viewportHeightMultiplier + gridSizeAdjustment;
      setGridSize(calculatedSize);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [viewportHeightMultiplier, gridSizeAdjustment]);

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      height: 'auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: `${gridSize}px`,
        height: `${gridSize}px`,
      }}>
        {images.slice(0, 4).reverse().map((image, index) => (
          <div key={index} style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            overflow: 'hidden',
            borderRadius: '20px',
          }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={`warped-image ${['bottom-right', 'bottom-left', 'top-right', 'top-left'][index]}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer'
              }}
              onClick={() => onGridImageClick && onGridImageClick(index)}
              onMouseEnter={() => onGridImageHover && onGridImageHover(index)}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(100% - var(--_d) - var(--x)) 0 var(--_m),
            100% calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) 
             calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(-1*var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(var(--_d) + var(--x)) 0 var(--_m),
            0 calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) 
             calc(var(--r) + var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(var(--_d) + var(--x)) 100% var(--_m),
            0 calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) 
             calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(100% - var(--_d) - var(--x)) 100% var(--_m),
            100% calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) 
             calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
            var(--_g) calc(-1*var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default DicedGrid;