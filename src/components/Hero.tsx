import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Track scroll position for butter-smooth 3D flip transition matching Video ref 2
  const { scrollY } = useScroll();

  // Scroll 0 -> 440px flips the card smoothly around Y-axis from 0° (dark portrait) to 180° (red portrait)
  const rotateY = useTransform(scrollY, [0, 440], [0, 180], { clamp: true });
  const scale = useTransform(scrollY, [0, 440], [0.95, 1.0], { clamp: true });

  return (
    <section className="relative w-full bg-[#FAF7F3] pt-24 sm:pt-28 pb-20 sm:pb-32 overflow-hidden select-none">
      
      {/* 3D Floating Chrome Elements matching Video 00:00 */}
      {/* Top-Left Floating 3D Chrome Star Sparkle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="absolute top-24 sm:top-28 left-3 sm:left-10 md:left-20 lg:left-28 w-16 sm:w-24 md:w-32 lg:w-36 h-16 sm:h-24 md:h-28 lg:h-36 pointer-events-none select-none z-20"
      >
        <div className="animate-float-slow w-full h-full">
          <img
            src="/assets/majd_ref/bolt_3d.png"
            alt="3D Iridescent Star Sparkle"
            className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
          />
        </div>
      </motion.div>

      {/* Bottom-Right Floating 3D Chrome Lightning Bolt */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="absolute top-52 sm:top-60 right-3 sm:right-10 md:right-20 lg:right-28 w-16 sm:w-24 md:w-32 lg:w-36 h-16 sm:h-24 md:h-28 lg:h-36 pointer-events-none select-none z-20"
      >
        <div className="animate-float-slow-reverse w-full h-full">
          <img
            src="/assets/majd_ref/sparkle_3d.png"
            alt="3D Iridescent Lightning Bolt"
            className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
          />
        </div>
      </motion.div>

      {/* Hero Display Typography Area */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center pt-6 sm:pt-12 pb-8 sm:pb-14">
        
        {/* Giant Display Title: SOFTWARE ENGINEER */}
        <h1 className="font-archivo font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[154px] 2xl:text-[170px] leading-[0.86] text-[#111111] tracking-[-0.045em] uppercase select-none w-full">
          <span className="block">SOFTWARE</span>
          <span className="block mt-1 sm:mt-2">ENGINEER</span>
        </h1>

        {/* Technical Subtitle Badge matching CV */}
        <div className="mt-5 sm:mt-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111]/5 border border-[#111111]/10 text-xs font-mono font-medium text-[#111111]/85 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>AI & ML ENGINEER • DEEP LEARNING & COMPUTER VISION</span>
        </div>
      </div>

      {/* 3-Column Seam Area bridging Hero to Bio matching Video 00:00 to 00:08 */}
      <div id="about" className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 -mt-4 sm:-mt-8 lg:-mt-12 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: ©2026 header, then Hey! and Academic Background */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8">
            <div className="text-sm sm:text-base font-archivo font-bold text-[#111111] pt-2">
              ©2026
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5 pt-2 lg:pt-16"
            >
              <h2 className="font-archivo font-black text-6xl sm:text-7xl md:text-8xl text-[#111111] tracking-tight leading-none">
                Hey!
              </h2>
              <p className="font-inter text-base sm:text-lg text-[#333333] leading-relaxed">
                I’m Tamilselvan, an AI/ML Engineer and researcher based in Chennai, India, completing my B.Tech in CSE (AI & ML) at SRM Institute of Science and Technology (CGPA: 8.20/10).
              </p>
            </motion.div>
          </div>

          {/* Center Column: 3D Flip Card Transition matching Video ref 2 frames 00:00 to 00:08 */}
          <div className="lg:col-span-4 flex justify-center py-2 sm:py-4" style={{ perspective: '1200px' }}>
            <motion.div
              style={{
                rotateY,
                scale,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[28px] relative cursor-pointer shadow-[0_24px_60px_rgba(0,0,0,0.22)] border-2 border-white select-none"
            >
              {/* Front Face: Original Dark Headshot (visible in Hero at scroll 0) */}
              <div
                className="absolute inset-0 w-full h-full rounded-[28px] overflow-hidden bg-[#111111]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <img
                  src="/assets/tamilselvan_original.jpg"
                  alt="Tamilselvan P"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-xs font-mono font-medium tracking-wider">/TAMILSELVAN P</span>
                </div>
              </div>

              {/* Back Face: Crimson-Red Backlit Portrait (revealed upon 180° flip on scroll) */}
              <div
                className="absolute inset-0 w-full h-full rounded-[28px] overflow-hidden bg-[#111111]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <img
                  src="/assets/tamilselvan_cinematic_red.jpg"
                  alt="Tamilselvan P - AI & ML Engineer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-xs font-mono font-medium tracking-wider">/AI & ML ENGINEER</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: /CREATING SINCE 2020 at top, then Technical Bio & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8">
            <div className="text-xs sm:text-sm font-inter font-medium text-[#666666] lg:text-right pt-2">
              /CREATING SINCE 2020 • SRM IST
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-5 pt-2 lg:pt-16"
            >
              <p className="font-inter text-sm sm:text-base text-[#444444] leading-relaxed">
                I specialize in Deep Learning and Computer Vision, with hands-on experience building image classification, quantum-classical image restoration, and full-stack ML systems.
              </p>

              <p className="font-inter text-sm sm:text-base text-[#444444] leading-relaxed">
                Experienced in PyTorch, TensorFlow, CNNs, U-Net, transfer learning, ONNX inference, and deploying machine learning applications through REST APIs and responsive web interfaces.
              </p>

              <div className="pt-2">
                <a
                  href="#works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white font-inter font-semibold text-xs hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md group"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

