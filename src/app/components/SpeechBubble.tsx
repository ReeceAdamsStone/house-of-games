// components/SpeechBubble.js
import React from 'react';
import { motion } from 'framer-motion';

const SpeechBubble = ({ isVisible, onClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      style={{
        background: '#ffffff',
        borderRadius: '8px',
        padding: '16px',
        position: 'absolute',
        bottom: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 999,
      }}
    >
      {children}
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

export default SpeechBubble;
