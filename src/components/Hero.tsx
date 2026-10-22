import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export const Hero: React.FC = () => {
  const [useStudioPortrait, setUseStudioPortrait] = useState(false);

  return (
    <section className="relative w-full bg-[#0B0C0E] pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 md:px-8 flex justify-center items-center overflow-hidden">
      {/* Ambient background glow & subtle vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#EB4D6D]/15 via-indigo-900/10 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Main Floating Hero Card (exact Majd Framer canvas card) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1200px] w-full bg-[#FAF7F3] rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] p-6 sm:p-10 md:p-12 lg:p-14 relative overflow-hidden border border-[#111111]/8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] flex flex-col justify-between min-h-[560px] sm:min-h-[640px] md:min-h-[700px] z-10"
      >
        {/* Top Centered Status Pill */}
        <div className="flex justify-center items-center w-full pt-1 sm:pt-2">
          <div className="inline-flex items-center gap-3 bg-[#111111] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md text-xs sm:text-sm font-inter font-medium tracking-tight">
            <span>Tamilselvan</span>
            <span className="flex items-center gap-1 opacity-70">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>
        </div>

        {/* Hero Display Typography & 3D Chrome Floating Elements */}
        <div className="relative my-auto py-6 sm:py-10 flex flex-col items-center justify-center text-center">
          {/* Top-Left Floating 3D Chrome Star Sparkle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -top-4 sm:-top-8 left-4 sm:left-12 md:left-20 w-14 sm:w-20 md:w-24 lg:w-28 h-14 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none z-20"
          >
            <div className="animate-float-slow w-full h-full">
              <img
                src="/assets/majd_ref/bolt_3d.png"
                alt="3D Iridescent Star Sparkle"
                className="w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>

          {/* Bottom-Right Floating 3D Chrome Lightning Bolt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="absolute -bottom-6 sm:-bottom-10 right-4 sm:right-12 md:right-20 w-14 sm:w-20 md:w-24 lg:w-28 h-14 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none z-20"
          >
            <div className="animate-float-slow-reverse w-full h-full">
              <img
                src="/assets/majd_ref/sparkle_3d.png"
                alt="3D Iridescent Lightning Bolt"
                className="w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>

          {/* Giant Display Title: SOFTWARE ENGINEER -> AI & ML ENGINEER */}
          <h1 className="font-archivo font-black text-5xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[128px] leading-[0.88] text-[#111111] tracking-[-0.04em] uppercase select-none">
            <span className="block">SOFTWARE</span>
            <span className="block mt-1 sm:mt-2">ENGINEER</span>
          </h1>

          {/* Secondary Subtitle Pill Tag */}
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/5 border border-[#111111]/10 text-xs font-mono font-medium text-[#111111]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>AI & ML SPECIALIST • DEEP LEARNING & COMPUTER VISION</span>
          </div>
        </div>

        {/* Bottom Inset Portrait (overlapping and centered) */}
        <div className="relative flex justify-center -mb-2 sm:-mb-4 z-20">
          <div className="relative group">
            {/* The Inset Portrait Frame */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-white shadow-[0_12px_36px_rgba(0,0,0,0.18)] bg-[#111111] relative cursor-pointer"
              onClick={() => setUseStudioPortrait(!useStudioPortrait)}
              title="Click to toggle studio vs dramatic portrait"
            >
              <img
                src={
                  useStudioPortrait
                    ? '/assets/tamilselvan_headshot.jpg'
                    : '/assets/tamilselvan_cinematic_red.jpg'
                }
                alt="Tamilselvan P"
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Toggle Badge on Hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-inter font-medium gap-1 backdrop-blur-xs">
                <Camera className="w-3.5 h-3.5" />
                <span>Toggle style</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Card Footer Bar */}
        <div className="flex justify-between items-center text-xs sm:text-sm font-archivo font-bold text-[#111111] pt-4 sm:pt-6 border-t border-[#111111]/8">
          <div>©2026</div>
          <div className="text-[11px] sm:text-xs font-inter font-medium text-[#666666]">
            /CREATING SINCE 2020 • SRM IST
          </div>
        </div>
      </motion.div>
    </section>
  );
};
