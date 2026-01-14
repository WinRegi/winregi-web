'use client';

import { motion } from 'framer-motion';
import { Terminal, Zap, CheckCircle2 } from 'lucide-react';
import Section from '@/components/Section';

export default function HowItWorks() {
  const steps = [
    { step: '01', title: 'Type Your Intent', desc: 'Use natural language like "Enable Dark Mode" or "Disable Cortana"', icon: <Terminal /> },
    { step: '02', title: 'AI Generates', desc: 'WinRegi analyzes and creates the perfect PowerShell command', icon: <Zap /> },
    { step: '03', title: 'Execute + Summaries', desc: 'Run safely, see raw output, and get a Gemini one-line answer so you know exactly what happened', icon: <CheckCircle2 /> },
  ];

  return (
    <Section className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-400">
            Three simple steps to master your Windows system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass text-primary mb-6 text-3xl font-bold border-2 border-primary/30">
                {item.step}
              </div>
              <div className="text-primary mb-4 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
