// pages/index.tsx
"use client"

import React from 'react';
import Jumbotron from './components/Jumbotron';
import PlayButton from './components/PlayButton';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Jumbotron title="Reece and Kirsty's <br /> HOUSE of GAMES!"/>
      <PlayButton />
    </motion.div>
  );
};

export default HomePage;
