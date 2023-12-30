"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpinningCircle = () => {
  const [colors, setColors] = useState(['#6C3483', '#2874A6', '#117A65', '#F4D03F', '#BDC3C7', '#17202A']); // Add your desired colors
  const [previousColor, setPreviousColor] = useState('');

  const handleClick = () => {
    let randomColor;
    do {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === previousColor);

    setPreviousColor(randomColor);
    setColors((prevColors) => prevColors.filter((color) => color !== randomColor));
    setTimeout(() => setColors((prevColors) => [...prevColors, randomColor]), 2000);
  };

  return (
    <motion.div
      style={{
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: colors[0], // Display the first color in the array
      }}
      whileTap={{ scale: 0.3 }} // Optional: Add a scale effect on tap
      onClick={handleClick}
    />
  );
};

export default SpinningCircle;
