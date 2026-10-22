import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SELECTED WORK', href: '#work' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'SYSTEMS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress-bar" 
        style={{ scaleX }} 
      />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#ECEAE5]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-xs' 
          : 'bg-transparent py-5'
      }`}>
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between">
            
            {/* Personal Wordmark & Symbol */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-[#111315] text-white flex items-center justify-center group-hover:bg-[#FF3B30] transition-colors">
                <span className="font-oxanium text-xs font-black">T</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-oxanium font-extrabold text-sm tracking-[0.2em] text-[#111315] group-hover:text-[#FF3B30] transition-colors">
                    TAMILSELVAN<span className="text-[#FF3B30]">.P</span>
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
                </div>
                <p className="text-[10px] text-[#68696E] font-mono tracking-wider uppercase">
                  AI / ML SYSTEMS &bull; COMPUTER VISION
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#111315]/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-space font-medium text-[#111315] hover:text-[#FF3B30] hover:bg-black/5 rounded-full transition-all tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://github.com/tamilselvan526"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[#111315] hover:text-[#FF3B30] hover:bg-black/5 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[#111315] hover:text-[#FF3B30] hover:bg-black/5 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF3B30] text-white text-xs font-oxanium font-bold tracking-widest uppercase hover:bg-[#e03126] transition-all shadow-sm group"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-[#111315] text-white hover:bg-[#FF3B30] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#ECEAE5]/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between">
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#68696E] uppercase tracking-widest pb-2 border-b border-black/10">
              // NAVIGATION DIRECTORY
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-oxanium font-bold text-[#111315] hover:text-[#FF3B30] py-2 transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-black/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#68696E]">CONNECT WITH ME:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/tamilselvan526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-black/5 text-[#111315] hover:text-[#FF3B30] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-black/5 text-[#111315] hover:text-[#FF3B30] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <a
              href="mailto:tamilselvanpanchamoorthy@gmail.com"
              className="w-full py-3.5 bg-[#FF3B30] text-white flex items-center justify-center gap-2 font-oxanium font-bold text-xs uppercase tracking-widest"
            >
              <Mail className="w-4 h-4" />
              <span>SEND DIRECT DISPATCH</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
