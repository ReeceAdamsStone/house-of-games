// components/PageTransition.tsx
"use client"

import { motion } from 'framer-motion';

const PageTransition: React.FC = ({ children }) => {
  return (
    <motion.div
      key="pageTransition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
