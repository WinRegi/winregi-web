'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import VideoSection from '@/components/VideoSection';
import TechStack from '@/components/TechStack';
import FutureVision from '@/components/FutureVision';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SectionNav from '@/components/SectionNav';

export default function Home() {
  const leftSections = [
    { id: 'hero', label: 'Hero' },
    { id: 'problem-solution', label: 'Problem & Solution' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
  ];

  const rightSections = [
    { id: 'video', label: 'Demo Video' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'faq', label: 'FAQ' },
  ];
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Section Navigation */}
      <SectionNav sections={leftSections} side="left" />
      <SectionNav sections={rightSections} side="right" />

      {/* Components */}
      <div className="lg:px-40">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <div id="problem-solution">
          <ProblemSolution />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="video">
          <VideoSection />
        </div>
        <div id="tech-stack">
          <TechStack />
        </div>
        <div id="roadmap">
          <FutureVision />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <CTA />
      </div>
      <Footer />
    </main>
  );
}


