import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KineticBanner } from './components/KineticBanner';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceCertificationsSection } from './components/ExperienceCertificationsSection';
import { ThoughtsSection } from './components/ThoughtsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  // Lenis Smooth Scroll Initialization (https://lenis.dev/)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#111111] selection:bg-[#111111] selection:text-[#FAF7F3] relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <KineticBanner />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ExperienceCertificationsSection />
        <ThoughtsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default App;

