'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';

export default function FAQ() {
  const faqs = [
    {
      q: "Is WinRegi safe to use?",
      a: "Absolutely. Every command is analyzed and color-coded by risk level (Safe/Green, Warning/Yellow, Dangerous/Red) before execution. You always review and approve before anything runs on your system."
    },
    {
      q: "Does it work offline?",
      a: "Yes! WinRegi supports both cloud AI (Google Gemini) and local AI (Ollama). Choose local mode for complete offline operation with full privacy."
    },
    {
      q: "Is WinRegi open source?",
      a: "Yes, WinRegi is fully open source. You can inspect the code, contribute commands to the database, and suggest improvements on GitHub."
    },
    {
      q: "Will it break my system?",
      a: "WinRegi includes multiple safety layers: command analysis, risk warnings, and admin privilege checks. Dangerous operations are clearly marked. Future updates will include automatic system restore points."
    },
    {
      q: "Is it free?",
      a: "Yes, WinRegi is free and open source. It's built by the community, for the community."
    }
  ];

  return (
    <Section className="relative z-10 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know before getting started
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-6 hover:border-primary/30 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-primary">Q:</span>
                {faq.q}
              </h3>
              <p className="text-slate-400 leading-relaxed pl-8">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
