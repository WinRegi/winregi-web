'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white font-bold ring-2 ring-primary/50 hover:brightness-110 shadow-lg shadow-primary/40 hover:shadow-primary/60',
    // Secondary intentionally understated to keep primary dominant
    secondary: 'bg-transparent text-accent border border-accent/40 hover:border-accent hover:bg-transparent hover:underline underline-offset-4 decoration-2 shadow-none',
    ghost: 'bg-slate-800/50 text-slate-200 hover:bg-slate-700/50 border border-slate-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
