'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Lock, BookOpen, Cloud } from 'lucide-react';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';

export default function Features() {
  return (
    <Section className="relative z-10 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to take control of your Windows system safely and efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            index={0}
            icon={<Brain className="w-12 h-12" />}
            title="Hybrid AI Engine"
            description="Choose between Cloud Power (Google Gemini 2.0) for smartest results or Local Privacy (Ollama) for offline use."
          />
          <FeatureCard
            index={1}
            icon={<Shield className="w-12 h-12" />}
            title="Safety Tiers"
            description="Every command is analyzed and color-coded (Safe/Green, Warning/Yellow, Dangerous/Red) before execution."
          />
          <FeatureCard
            index={2}
            icon={<Lock className="w-12 h-12" />}
            title="Admin Power"
            description="Seamlessly escalates privileges to modify HKLM keys or system (root) services when needed."
          />
          <FeatureCard
            index={3}
            icon={<BookOpen className="w-12 h-12" />}
            title="Curated Hacks"
            description="Includes a library of popular, verified Windows tweaks like 'Disable Telemetry' and 'Remove Bloatware'."
          />
          <FeatureCard
            index={4}
            icon={<Cloud className="w-12 h-12" />}
            title="Dual-Stage Answers"
            description="Runs the command, shows raw output, then asks Gemini to summarize so you get the short, clear answer alongside the original result."
          />
        </div>
      </div>
    </Section>
  );
}
