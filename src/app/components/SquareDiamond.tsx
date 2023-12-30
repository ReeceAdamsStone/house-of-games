// components/SquareDiamond.tsx
"use client"

import React from 'react';

interface SquareDiamondProps {
  imageUrl: string;
}

const SquareDiamond: React.FC<SquareDiamondProps> = ({ imageUrl }) => {
  return (
    <div
      style={{
        width: '450px', // Set your desired width
        height: '450px', // Set your desired height
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fcba03', // Set your desired background color
        transform: 'rotate(45deg)', // Rotate the square
        margin: '160px auto', // Center the diamond and add padding
        border: '2px solid #FFD700', // Add the gold color border
        borderRadius: '8px', // Set the border radius
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add the shadow effect
      }}
    >
      <img
        src={imageUrl}
        alt="Diamond Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Make the image cover the entire container
          transform: 'rotate(-45deg)', // Counter-rotate the image
        }}
      />
    </div>
  );
};

export default SquareDiamond;
