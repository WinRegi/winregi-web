'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Section from '@/components/Section';

export default function VideoSection() {
  return (
    <Section className="relative z-10 bg-slate-900/30">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            See It In Action
          </h2>
          <div className="glass rounded-xl overflow-hidden aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-primary mb-4">
                <Terminal className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-slate-400 text-lg">Demo video coming soon</p>
              <p className="text-sm text-slate-500 mt-2">Watch WinRegi transform natural language into powerful commands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
