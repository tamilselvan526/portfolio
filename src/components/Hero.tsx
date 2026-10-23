import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

// Clip-reveal line animation for initial entrance
const LineReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: '105%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  </div>
);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll progress for the entire 220vh Hero section (0 = Slide 1 top, 1 = Slide 2 settled)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out progress with a subtle spring for fluid buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    mass: 0.6,
  });

  // ── Slide 1 Transforms (Headline & Floating Icons) ────────────────────
  const headlineOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const headlineY       = useTransform(smoothProgress, [0, 0.35], [0, -110]);
  const headlineScale   = useTransform(smoothProgress, [0, 0.35], [1, 0.94]);
  const iconsOpacity    = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const iconsY          = useTransform(smoothProgress, [0, 0.25], [0, -70]);
  const slide1BottomOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);

  // ── Portrait Transition (Small at bottom of Slide 1 → Large in center of Slide 2) ──
  // At progress 0 (Slide 1): Scale ~0.50 (w ~160px), shifted down toward bottom bar
  // At progress 0.6+ (Slide 2): Scale 1.0 (w ~320px), centered in bio grid
  const portraitScale   = useTransform(smoothProgress, [0, 0.6], [0.50, 1]);
  const portraitY       = useTransform(smoothProgress, [0, 0.6], [180, 0]);
  const portraitRotateY = useTransform(smoothProgress, [0.06, 0.55], [26, 0]);
  
  // Color treatment cross-fade: Monochrome (1→0) into Vivid Red Backlight (0→1)
  const monoLayerOpacity  = useTransform(smoothProgress, [0.08, 0.48], [1, 0]);
  const colorLayerOpacity = useTransform(smoothProgress, [0.12, 0.55], [0, 1]);

  // ── Slide 2 Transforms (Bio Content & Action Buttons) ─────────────────
  const bioLeftOpacity  = useTransform(smoothProgress, [0.32, 0.65], [0, 1]);
  const bioLeftX        = useTransform(smoothProgress, [0.32, 0.65], [-45, 0]);
  const bioLeftY        = useTransform(smoothProgress, [0.32, 0.65], [24, 0]);

  const bioRightOpacity = useTransform(smoothProgress, [0.38, 0.7], [0, 1]);
  const bioRightX       = useTransform(smoothProgress, [0.38, 0.7], [45, 0]);
  const bioRightY       = useTransform(smoothProgress, [0.38, 0.7], [24, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF7F3] h-[220vh]"
    >
      {/* Sticky Viewport Frame (Pins during scroll for smooth slide transition) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 select-none">

        {/* ── Floating 3D Icons (Fade out on scroll) ─────────────────── */}
        <motion.div
          style={{ opacity: iconsOpacity, y: iconsY }}
          className="absolute top-24 sm:top-28 left-4 sm:left-12 md:left-20 lg:left-28
                     w-16 sm:w-24 md:w-28 lg:w-32 aspect-square pointer-events-none z-30"
        >
          <div className="animate-float-slow w-full h-full">
            <img
              src="/assets/majd_ref/bolt_3d.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: iconsOpacity, y: iconsY }}
          className="absolute top-48 sm:top-56 right-4 sm:right-12 md:right-20 lg:right-28
                     w-14 sm:w-20 md:w-24 lg:w-28 aspect-square pointer-events-none z-30"
        >
          <div className="animate-float-slow-reverse w-full h-full">
            <img
              src="/assets/majd_ref/sparkle_3d.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            />
          </div>
        </motion.div>

        {/* ── Slide 1 Headline (Moves up and fades on scroll) ────────── */}
        <motion.div
          style={{
            opacity: headlineOpacity,
            y: headlineY,
            scale: headlineScale,
          }}
          className="relative w-full max-w-[1440px] mx-auto z-20 pt-4 sm:pt-8"
        >
          <h1
            className="font-archivo font-black text-[clamp(44px,9vw,148px)]
                       leading-[0.88] text-[#111111] tracking-[-0.045em]
                       uppercase text-center"
          >
            <LineReveal delay={0.05}>
              <span className="block">SOFTWARE</span>
            </LineReveal>
            <LineReveal delay={0.16}>
              <span className="block">ENGINEER</span>
            </LineReveal>
          </h1>

          {/* Availability badge */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-[#111111]/5 border border-[#111111]/10
                         text-[11px] sm:text-xs font-mono font-medium text-[#111111]/85 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>AI &amp; ML ENGINEER • DEEP LEARNING &amp; COMPUTER VISION</span>
            </div>
          </div>
        </motion.div>

        {/* ── Slide 1 Bottom Static Bar (Only visible before scrolling) ─ */}
        <motion.div
          style={{ opacity: slide1BottomOpacity }}
          className="w-full max-w-[1280px] mx-auto flex items-center justify-between text-xs sm:text-sm font-inter text-[#444444] z-10 pointer-events-none"
        >
          <div className="font-archivo font-bold text-sm sm:text-base text-[#111111]">
            ©2026
          </div>
          <div className="font-mono text-xs text-[#666666]">
            /CREATING SINCE 2020 • SRM IST
          </div>
        </motion.div>

        {/* ── Center Stage: Morphing Portrait + Slide 2 Bio Grid ───────── */}
        <div
          id="about"
          className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-20 px-6 sm:px-10 lg:px-16"
        >
          <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center">

            {/* Slide 2 Left Bio Column (Desktop) */}
            <motion.div
              style={{
                opacity: bioLeftOpacity,
                x: bioLeftX,
                y: bioLeftY,
              }}
              className="hidden lg:flex lg:col-span-4 flex-col justify-between gap-6 pointer-events-auto"
            >
              <div className="text-sm sm:text-base font-archivo font-bold text-[#111111]">
                ©2026
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-archivo font-black text-5xl sm:text-6xl md:text-7xl
                               text-[#111111] tracking-tight leading-none">
                  Hey!
                </h2>
                <p className="font-inter text-sm sm:text-base text-[#333333] leading-relaxed">
                  I'm Tamilselvan, an AI/ML Engineer and researcher based in Chennai,
                  India, completing my B.Tech in CSE (AI &amp; ML) at SRM Institute of
                  Science and Technology (CGPA: 8.20/10).
                </p>
                <p className="font-inter text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Passionate about developing clean, robust machine learning architectures
                  bridging cutting-edge research with production-grade web systems.
                </p>
              </div>
            </motion.div>

            {/* Center: The Single Morphing Portrait Card */}
            <div className="lg:col-span-4 flex justify-center items-center py-2 [perspective:1200px]">
              <motion.div
                style={{
                  scale: portraitScale,
                  y: portraitY,
                  rotateY: portraitRotateY,
                }}
                className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[28px]
                           overflow-hidden shadow-[0_28px_64px_rgba(0,0,0,0.24)]
                           border-2 border-white/70 pointer-events-auto origin-center transform-gpu"
              >
                {/* Layer A – Monochrome silhouette (Slide 1 look) */}
                <motion.div
                  style={{ opacity: monoLayerOpacity }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src="/assets/tamilselvan_original.jpg"
                    alt="Tamilselvan P"
                    className="w-full h-full object-cover object-top"
                    style={{
                      filter: 'grayscale(1) contrast(1.18) brightness(0.88)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 50%, transparent 100%)',
                    }}
                  />
                </motion.div>

                {/* Layer B – Vivid Red-Backlit Treatment (Slide 2 look) */}
                <motion.div
                  style={{ opacity: colorLayerOpacity }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src="/assets/tamilselvan_original.jpg"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-top"
                    style={{
                      filter:
                        'saturate(1.6) contrast(1.1) brightness(0.85) hue-rotate(-10deg)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(120,0,0,0.68) 0%, rgba(80,0,10,0.25) 45%, transparent 80%)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 0%, rgba(200,40,20,0.18) 0%, transparent 65%)',
                      mixBlendMode: 'screen',
                    }}
                  />
                </motion.div>

                {/* Name label watermark */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
                  <span className="text-white text-[10px] font-mono font-medium tracking-[0.18em] uppercase opacity-90">
                    /TAMILSELVAN P
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Slide 2 Right Bio Column (Desktop) */}
            <motion.div
              style={{
                opacity: bioRightOpacity,
                x: bioRightX,
                y: bioRightY,
              }}
              className="hidden lg:flex lg:col-span-4 flex-col justify-between gap-6 pointer-events-auto"
            >
              <div className="text-xs sm:text-sm font-inter font-medium text-[#666666] lg:text-right">
                /CREATING SINCE 2020 • SRM IST
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-xs sm:text-sm text-[#444444] leading-relaxed">
                  I specialize in Deep Learning and Computer Vision, with hands-on
                  experience building image classification, quantum-classical image
                  restoration, and full-stack ML systems.
                </p>

                <p className="font-inter text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Experienced in PyTorch, TensorFlow, CNNs, U-Net, transfer learning,
                  ONNX inference, and deploying machine learning applications through
                  REST APIs and responsive web interfaces.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#works"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                               bg-[#111111] text-white font-inter font-semibold text-xs
                               hover:bg-black hover:scale-105 active:scale-95
                               transition-all shadow-md group"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                               border border-[#111111]/20 text-[#111111] font-inter font-semibold text-xs
                               hover:border-[#111111]/60 hover:scale-105 active:scale-95
                               transition-all"
                  >
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Slide 2 Mobile Bio Content (Stacked cleanly under portrait) */}
            <motion.div
              style={{ opacity: bioLeftOpacity, y: bioLeftY }}
              className="lg:hidden flex flex-col gap-4 text-center pointer-events-auto max-w-md mx-auto"
            >
              <h2 className="font-archivo font-black text-4xl text-[#111111] tracking-tight leading-none">
                Hey!
              </h2>
              <p className="font-inter text-xs sm:text-sm text-[#333333] leading-relaxed">
                I'm Tamilselvan, an AI/ML Engineer and researcher based in Chennai,
                completing B.Tech in CSE (AI &amp; ML) at SRM IST (CGPA: 8.20/10).
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href="#works"
                  className="px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full border border-[#111111]/20 text-[#111111] text-xs font-semibold"
                >
                  Contact
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
