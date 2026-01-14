'use client';

import { motion } from 'framer-motion';
import { Download, Github, ChevronRight, Sparkles } from 'lucide-react';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function Hero() {
  return (
    <Section className="relative z-10 pt-32 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Windows Administration
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master Your System.
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, rgb(16, 185, 129), rgb(6, 182, 212))' }}>
              Just Ask.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            The AI-powered command center for Windows. Translate natural language into safe, executable PowerShell scripts instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            href="https://github.com/WinRegi/WinRegi/releases/download/v1.0.0-beta/WinRegi-v1.0.0-Beta.zip"
            className="shadow-[0_0_30px_rgba(16,185,129,0.35)] ring-2 ring-primary/60 hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 mr-2" />
            Download for Windows
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="https://github.com/WinRegi/WinRegi"
            className="hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
        </motion.div>

        {/* Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-slate-400 ml-4 font-mono">WinRegi Terminal</span>
            </div>
            <div className="p-6 font-mono text-left bg-slate-950/50">
              <div className="mb-6">
                <span className="text-accent">$</span>
                <span className="text-slate-300 ml-2">What is my Wi-Fi IP address?</span>
              </div>

              <div className="mb-4 text-slate-500 flex items-start gap-2">
                <span className="text-primary">✓</span>
                <div>
                  AI Analysis: Safe to run. Command prepared.
                </div>
              </div>

              <div className="mb-4 pl-4 border-l-2 border-primary/30 text-sm">
                <div className="text-slate-400 mb-2"># Generated PowerShell:</div>
                <div className="text-primary">
                  ipconfig /all | Select-String "IPv4"
                </div>
              </div>

              <div className="mb-4 bg-slate-900/60 rounded-lg p-4 text-sm text-slate-300">
                <div className="text-slate-400 mb-2">Command Output</div>
                <div>Wireless LAN adapter Wi-Fi:</div>
                <div>   IPv4 Address . . . . . . . . . . : 192.168.1.42</div>
              </div>

              <div className="bg-slate-900/60 rounded-lg p-4 text-sm">
                <div className="text-slate-400 mb-2">Gemini Summary</div>
                <div className="text-green-300">Your Wi-Fi IPv4 address is 192.168.1.42.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
