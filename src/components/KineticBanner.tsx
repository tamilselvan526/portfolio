import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const sentence =
  'From concept to deployment. Clean, scalable AI architectures built to move fast, infer with sub-10ms latency, stay mathematically rigorous, and perform in real-world environments, driven by clarity, structured pipelines, and intentional engineering.';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isFirst: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isFirst }) => {
  // First word is 100% bold/active from scroll 0 as observed in ref 3 video
  // Subsequent words transition from faded (0.12) to fully solid (1.0)
  const opacity = useTransform(progress, range, isFirst ? [1, 1] : [0.12, 1]);

  return (
    <motion.span
      style={{ opacity: isFirst ? 1 : opacity }}
      className="inline-block mr-[0.28em] mb-[0.15em] select-none text-[#111111] transition-opacity duration-150 will-change-[opacity]"
    >
      {children}
    </motion.span>
  );
};

export const KineticBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the tall pinned section
  // When top hits viewport top, it sticks until bottom hits viewport bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const words = sentence.split(' ');

  return (
    // Outer scroll track: 250vh gives comfortable, smooth scroll travel
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF7F3] h-[250vh] border-b border-[#111111]/8"
    >
      {/* Sticky viewport container: stays pinned 100vh until all words turn bold */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1020px] mx-auto text-center flex flex-col items-center justify-center pt-8">
          <h2 className="font-archivo font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.38] sm:leading-[1.42] text-center tracking-tight flex flex-wrap justify-center">
            {words.map((word, i) => {
              // Word bolding progression:
              // Word 0 is always bold (starts at 1.0)
              // Words 1 through N transition sequentially across 0% -> 72% of scroll
              // Remaining 72% -> 100% stays 100% bold, then exits to Services section
              const totalWords = words.length;
              const start = (i / totalWords) * 0.70;
              const end = Math.min(0.76, start + (0.70 / totalWords) * 1.6);

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isFirst={i === 0}
                >
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


