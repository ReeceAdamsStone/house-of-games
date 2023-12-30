import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface RevealBoxProps {
  imageSrc: string;
  altText: string;
  url?: string;
}

const RevealBox: React.FC<{ imageSrc: string; altText: string; url: string }> = ({
  imageSrc,
  altText,
  url,
}) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(true);
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: '325px',
        height: '325px',
        backgroundColor: revealed ? 'transparent' : '#dc8e55',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: revealed ? 'none' : '2px solid #000',
      }}
      onClick={handleClick}
    >
      {revealed ? (
        <Link href={url}>
          <motion.img
            src={imageSrc}
            alt={altText}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>
      ) : (
        <motion.span
          style={{ fontSize: '28px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Click to reveal
        </motion.span>
      )}
    </motion.div>
  );
};

export default RevealBox;
