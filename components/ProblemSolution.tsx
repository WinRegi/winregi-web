'use client';

import { motion } from 'framer-motion';
import { Shield, Brain } from 'lucide-react';
import Section from '@/components/Section';

export default function ProblemSolution() {
  return (
    <Section className="relative z-10 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 border-red-500/20"
          >
            <div className="text-red-500 mb-4">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">The Problem</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              You've been there. Your mouse driver stops working, so you head to YouTube and search "Windows mouse driver not working fix". Thirty minutes and five videos later, you're still copying registry paths from sketchy forum posts.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Then you try ChatGPT: "How do I disable Windows telemetry?" It gives you three different PowerShell commands. Which one is safe? Will it break something? Back to Google. More tabs. More confusion.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Hours wasted jumping between YouTube tutorials, AI chat, and Reddit threads. Fear of breaking your system. Memorizing cryptic commands. There has to be a better way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 border-primary/20 glow-green"
          >
            <div className="text-primary mb-4">
              <Brain className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">The Solution</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Stop searching. Stop worrying. Just tell WinRegi what you want in plain English:
            </p>
            <div className="bg-slate-900/50 rounded-lg p-4 mb-4 font-mono text-sm">
              <p className="text-primary mb-2">&gt; Fix my mouse driver</p>
              <p className="text-accent mb-2">&gt; Disable Windows telemetry</p>
              <p className="text-cyan-400">&gt; Make my PC faster</p>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              AI instantly generates the perfect PowerShell command. Every command is safety-checked and color-coded. You review, you click, it's done. No forums. No fear. Just results.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
