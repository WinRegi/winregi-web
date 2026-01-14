'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';

export default function TechStack() {
  const technologies = [
    { name: 'Electron', desc: 'Desktop Framework' },
    { name: 'React', desc: 'UI Library' },
    { name: 'Tailwind CSS', desc: 'Styling' },
    { name: 'Python FastAPI', desc: 'Backend' },
  ];

  return (
    <Section className="relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built With Modern Tech
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Open source and crafted with cutting-edge technologies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="text-white font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
