import React from 'react';

interface LanguageIconProps {
  width?: number; // Width of the square container
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ width = 26 }) => {
  const aspectRatio = 356 / 182; // Original aspect ratio of the image

  return (
    <div
      style={{
        width: `${width}px`, // Set container width
        height: `${width}px`, // Set container height to match width for 1:1 aspect ratio
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden', // Ensure no overflow from the image
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${356} ${182}`} // Match the original image dimensions
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Maintain the aspect ratio of the image
          position: 'absolute', // Allow centering within the container
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center the image within the container
        }}
      >
        <image
          href="/LanguageIcon.png" // Path to the PNG file
          width="356"
          height="182"
          preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio and center in SVG
        />
      </svg>
    </div>
  );
};

export default LanguageIcon;