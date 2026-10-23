import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const sentence =
  'From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world environments, driven by clarity, structured architecture, and intentional engineering.';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  // Unread words are clearly visible in a soft faded style (opacity ~0.22, slight blur)
  // As scroll reaches the word, it transitions smoothly to solid black, full opacity and zero blur
  const opacity = useTransform(progress, range, [0.22, 1]);
  const blurPx  = useTransform(progress, range, [1.8, 0]);
  const filter  = useTransform(blurPx, (v) => `blur(${v.toFixed(2)}px)`);
  const color   = useTransform(progress, range, ['rgba(17, 17, 17, 0.24)', 'rgba(17, 17, 17, 1)']);

  return (
    <motion.span
      style={{ opacity, filter, color }}
      className="inline-block mr-[0.24em] mb-[0.06em] font-archivo font-extrabold tracking-tight select-none transition-colors"
    >
      {children}
    </motion.span>
  );
};

export const KineticBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll through the 220vh height of the pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const words = sentence.split(' ');

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF7F3] h-[220vh] border-b border-[#111111]/8"
    >
      {/* Sticky container pins vertically in the viewport during scroll-read */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-[820px] mx-auto text-center">
          <h2
            className="font-archivo font-extrabold
                       text-2xl sm:text-3xl md:text-[34px] lg:text-[38px]
                       leading-[1.28] sm:leading-[1.3]
                       text-center tracking-tight flex flex-wrap justify-center"
            aria-label={sentence}
          >
            {words.map((word, i) => {
              // Word highlight range spans from 0.05 to 0.88 so it finishes before unpinning
              const start = 0.05 + (i / words.length) * 0.8;
              const end = start + (1 / words.length) * 0.8;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
};
