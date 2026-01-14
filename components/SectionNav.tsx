'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SectionNavProps {
  sections: {
    id: string;
    label: string;
  }[];
  side: 'left' | 'right';
}

export default function SectionNav({ sections, side }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${
        side === 'left' ? 'left-8' : 'right-8'
      }`}
    >
      <div className="relative flex flex-col gap-8">
        {/* Connecting line */}
        <div 
          className={`absolute top-3 bottom-3 w-px ${
            side === 'left' ? 'left-1.5' : 'right-1.5'
          }`}
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.5), rgba(16, 185, 129, 0.2))'
          }}
        />
        
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`relative group cursor-pointer flex items-center gap-3 ${
              side === 'left' ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Circle indicator */}
            <div 
              className={`w-3 h-3 rounded-full transition-all duration-300 shrink-0 ${
                activeSection === section.id 
                  ? 'bg-primary ring-4 ring-primary/30 scale-125' 
                  : 'bg-slate-600 hover:bg-primary/50 hover:scale-110'
              }`}
            />
            
            {/* Label */}
            <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeSection === section.id 
                ? 'text-primary' 
                : 'text-slate-400 group-hover:text-primary/70'
            }`}>
              {section.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
