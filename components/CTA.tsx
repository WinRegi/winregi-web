'use client';

import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function CTA() {
  return (
    <Section className="relative z-10" id="download">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            WinRegi is in active development. Star the repo to follow progress and be notified of the official release.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="https://github.com/Winregi/WinRegi"
              className="shadow-[0_0_30px_rgba(16,185,129,0.35)] ring-2 ring-primary/60 hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5 mr-2" />
              ⭐ Star on GitHub
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/WinRegi/WinRegi/releases/download/v1.0.0-beta/WinRegi-v1.0.0-Beta.zip"
              className="hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Beta
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            ⚡ Follow development • 💬 Report issues • 🎯 Suggest features
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
