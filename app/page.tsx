'use client';

import { motion } from 'framer-motion';
import { 
  Terminal, 
  Shield, 
  Zap, 
  Cloud, 
  HardDrive, 
  Lock, 
  BookOpen, 
  Github, 
  Download, 
  ChevronRight,
  Sparkles,
  Brain,
  CheckCircle2,
  Database,
  GitBranch,
  RotateCcw,
  Clock,
  BarChart3,
  Keyboard,
  Users,
  FileText,
  Repeat,
  Share2
} from 'lucide-react';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import Section from '@/components/Section';
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Terminal className="w-8 h-8 text-primary" />
            <Image
              src="/Winregi.svg"
              alt="WinRegi"
              width={140}
              height={40}
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <Button variant="ghost" size="sm" href="https://github.com/Winregi/WinRegi" className="hidden md:inline-flex">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="primary" size="sm" href="https://github.com/WinRegi/WinRegi/releases/download/v1.0.0-beta/WinRegi-v1.0.0-Beta.zip">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
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

      {/* Problem vs Solution */}
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

      {/* How It Works */}
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
            {[
              { step: '01', title: 'Type Your Intent', desc: 'Use natural language like "Enable Dark Mode" or "Disable Cortana"', icon: <Terminal /> },
              { step: '02', title: 'AI Generates', desc: 'WinRegi analyzes and creates the perfect PowerShell command', icon: <Zap /> },
              { step: '03', title: 'Execute + Summaries', desc: 'Run safely, see raw output, and get a Gemini one-line answer so you know exactly what happened', icon: <CheckCircle2 /> },
            ].map((item, index) => (
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

      {/* Features Section */}
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

      {/* Video Section */}
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

      {/* Tech Stack */}
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
              {[
                { name: 'Electron', desc: 'Desktop Framework' },
                { name: 'React', desc: 'UI Library' },
                { name: 'Tailwind CSS', desc: 'Styling' },
                { name: 'Python FastAPI', desc: 'Backend' },
              ].map((tech, index) => (
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

      {/* Future Vision Section */}
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

      {/* FAQ Section */}
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
            {[
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
            ].map((faq, index) => (
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 glass">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              <Image
                src="/Winregi.svg"
                alt="WinRegi"
                width={120}
                height={34}
              />
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 WinRegi. Built with ❤️ by <a href="https://github.com/Anish-ai" className="text-slate-300 hover:text-primary transition-colors">Anish</a> and the community.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Winregi/WinRegi" className="text-slate-400 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

