// components/PlayButton.tsx
"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PlayButton: React.FC = () => {
  return (
    <div>
      <Link href="/menu">
        <motion.button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-9 px-24 rounded-full text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Ready to play?
        </motion.button>
      </Link>
    </div>
  );
};

export default PlayButton;
