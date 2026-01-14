'use client';

import { Terminal, Github } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  return (
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
            <a href="https://github.com/Winregi/WinRegi" className="text-slate-400 hover:text-primary hover:underline transition-colors flex items-center gap-1">
              <Github className="w-6 h-6" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
