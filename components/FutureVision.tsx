'use client';

import { motion } from 'framer-motion';
import { 
  Database, 
  GitBranch, 
  RotateCcw, 
  Clock, 
  BarChart3, 
  Keyboard, 
  Users, 
  Share2, 
  FileText 
} from 'lucide-react';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';

export default function FutureVision() {
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
            The Future Vision
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Upcoming features to make WinRegi the ultimate Windows control center
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            index={0}
            icon={<Database className="w-12 h-12" />}
            title="Centralized Command Database"
            description="Access thousands of verified, safe commands and registry keys contributed by the community. Search local database first, then AI as backup."
          />
          <FeatureCard
            index={1}
            icon={<GitBranch className="w-12 h-12" />}
            title="Smart Alternatives"
            description="Get multiple command suggestions instead of one. Choose the safest or most efficient approach with risk-level indicators."
          />
          <FeatureCard
            index={2}
            icon={<RotateCcw className="w-12 h-12" />}
            title="System Rollback & Undo"
            description="Automatically create restore points before changes. Undo your last 10 commands with one click if something goes wrong."
          />
          <FeatureCard
            index={3}
            icon={<Clock className="w-12 h-12" />}
            title="Command Scheduling"
            description="Schedule commands to run at specific times. Execute batch operations safely in sequence (e.g., cleanup every Sunday at 2 AM)."
          />
          <FeatureCard
            index={4}
            icon={<BarChart3 className="w-12 h-12" />}
            title="Analytics & History"
            description="Beautiful dashboard showing all executed commands, safety levels, timestamps. Track how much time you've saved on research."
          />
          <FeatureCard
            index={5}
            icon={<Keyboard className="w-12 h-12" />}
            title="Power User Mode"
            description="Vim-style keybindings, command macros, aliases, and keyboard shortcuts for lightning-fast operation."
          />
          <FeatureCard
            index={6}
            icon={<Users className="w-12 h-12" />}
            title="Community Contribution"
            description="Contribute commands, vote on best solutions, and see 'Verified by X users' badges. Build the ultimate command library together."
          />
          <FeatureCard
            index={7}
            icon={<Share2 className="w-12 h-12" />}
            title="Cross-Device Sync"
            description="Sync your settings, favorites, and command history across multiple PCs. Cloud backup for peace of mind."
          />
          <FeatureCard
            index={8}
            icon={<FileText className="w-12 h-12" />}
            title="Template & API"
            description="Save command templates, share with your team, and use the API to embed WinRegi into other tools and workflows."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass rounded-xl p-8 border-accent/20"
        >
          <p className="text-slate-300 text-lg mb-4">
            ✨ The roadmap is community-driven. <span className="text-accent font-semibold">Your feedback shapes what comes next.</span>
          </p>
          <p className="text-slate-400 text-base">
            Have an idea? Found a bug? Want to contribute? <span className="text-primary font-semibold">All suggestions and improvements are warmly welcomed.</span> Join us on GitHub or reach out anytime.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
