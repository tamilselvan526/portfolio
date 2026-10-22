import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF7F3] pt-16 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        
        {/* Top Navigation Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-[#111111]/8">
          <div className="flex flex-col">
            <span className="font-archivo font-black text-2xl text-[#111111] tracking-tight">
              Tamilselvan P
            </span>
            <span className="text-xs font-inter text-[#666666] mt-0.5">
              AI/ML Engineer & Systems Researcher • SRM IST
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-inter text-[#666666]">
            <a href="#" className="hover:text-[#111111] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
            <a href="#services" className="hover:text-[#111111] transition-colors">Services</a>
            <a href="#works" className="hover:text-[#111111] transition-colors">Works</a>
            <a href="#thoughts" className="hover:text-[#111111] transition-colors">Thoughts</a>
            <a href="#contact" className="hover:text-[#111111] transition-colors">Contact</a>
          </div>
        </div>

        {/* Giant Typographic Wordmark: TAMILSELVAN */}
        <div className="w-full overflow-hidden select-none py-4">
          <div className="font-archivo font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[160px] leading-[0.82] text-[#111111]/8 tracking-[-0.04em] uppercase text-center w-full">
            TAMILSELVAN
          </div>
        </div>

        {/* Bottom Metadata & Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-[#888888] pt-6 border-t border-[#111111]/8">
          <div>
            © 2026 Tamilselvan P. Designed with architectural clarity.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tamilselvan526"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors flex items-center gap-1"
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
