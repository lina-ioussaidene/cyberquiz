import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[var(--color-cyber-bright)] text-black hover:bg-[var(--color-cyber-light)] hover:shadow-[0_0_20px_rgba(89,255,0,0.5)]",
    secondary: "bg-[var(--color-cyber-dark)] text-[var(--color-cyber-bright)] hover:bg-opacity-80 border border-[var(--color-cyber-bright)]",
    outline: "glass-button"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
