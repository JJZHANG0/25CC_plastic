import React from 'react';
import { motion } from 'framer-motion';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen pt-24"
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
