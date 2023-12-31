// components/SpeechBubble.js
import React from 'react';
import { motion } from 'framer-motion';

const SpeechBubble = ({ isVisible, onClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      style={{
        background: '#ffffff',
        borderRadius: '8px',
        padding: '16px',
        position: 'absolute',
        top: '50%',
        left: '20px', // Adjust the left position as needed
        transform: 'translateY(-50%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        border: '2px solid red', // Add a red border
        width: '30%', // Set the width to 30%
        zIndex: 999,
        fontSize: '1.3em', // Increase font size by about 30%
      }}
    >
      {children}
      <button onClick={onClose}>X</button>
    </motion.div>
  );
};

export default SpeechBubble;
