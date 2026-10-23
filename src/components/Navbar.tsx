import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Experience', href: '#experience' },
    { label: 'Thoughts', href: '#thoughts' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-5 sm:gap-7 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#111111]/95 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.35)]'
              : 'bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
          }`}
        >
          {/* Brand Logo matching Majd Framer capsule */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white font-archivo font-bold text-sm tracking-tight"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] group-hover:scale-125 transition-transform" />
            <span className="group-hover:opacity-85 transition-opacity">Tamilselvan</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs text-white/70 hover:text-white font-inter font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#111111] font-inter font-semibold text-xs hover:bg-[#FAF7F3] hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center px-6 md:hidden animate-fade-in">
          <div className="w-full max-w-sm bg-[#111111] border border-white/15 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-white font-archivo font-bold text-sm">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-inter text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-white text-[#111111] font-inter font-semibold text-sm hover:bg-[#FAF7F3] transition-colors mt-2"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      )}
    </>
  );
};
