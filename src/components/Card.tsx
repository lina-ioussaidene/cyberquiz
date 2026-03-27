import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = false
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -5, scale: 1.02 } : {}}
      className={`glass-panel rounded-2xl p-6 md:p-8 ${hoverable ? 'cursor-pointer hover:border-[var(--color-cyber-bright)] hover:shadow-[0_0_20px_rgba(89,255,0,0.2)] transition-all duration-300' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
