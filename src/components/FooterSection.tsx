import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] text-white pt-20 sm:pt-28 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        {/* Main Footer Grid matching Video 00:28 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Big Headline */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <h3 className="font-archivo font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Engineering Intelligent Systems for Real-World Deployment.
            </h3>
            <p className="text-xs sm:text-sm font-inter text-white/50 max-w-sm mt-2">
              SRM Institute of Science and Technology • CSE (AI & ML) • Chennai, India
            </p>
          </div>

          {/* Middle Column: /Quick links with pills */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono text-white/40 tracking-wider">
              /Quick links
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                About Me
              </a>
              <a
                href="#services"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Services
              </a>
              <a
                href="#works"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Works
              </a>
              <a
                href="#experience"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-inter text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Column: /Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono text-white/40 tracking-wider">
              /Contact
            </span>
            <a
              href="mailto:tamilselvanpanchamoorthy@gmail.com"
              className="text-sm font-inter text-white/90 hover:text-white hover:underline transition-all"
            >
              tamilselvanpanchamoorthy@gmail.com
            </a>
            <div className="text-xs font-inter text-white/50">
              +91 9994371185
            </div>
          </div>

        </div>

        {/* Giant Typographic Watermark matching Video 00:29: TAMILSELVAN */}
        <div className="w-full overflow-hidden select-none py-6 border-t border-white/10">
          <div className="font-archivo font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[165px] leading-[0.8] text-white/10 tracking-[-0.04em] uppercase text-center w-full">
            TAMILSELVAN
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-white/40 -mt-6">
          <div>
            © 2026 Tamilselvan P. Designed with architectural clarity.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/tamilselvan526"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
