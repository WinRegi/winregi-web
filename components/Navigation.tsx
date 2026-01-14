'use client';

import { motion } from 'framer-motion';
import { Terminal, Github, Download } from 'lucide-react';
import Button from '@/components/Button';
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
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
  );
}
