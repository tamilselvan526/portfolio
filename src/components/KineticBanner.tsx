import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const sentence =
  'From concept to deployment. Clean, scalable AI architectures built to move fast, infer with sub-10ms latency, stay mathematically rigorous, and perform in real-world environments, driven by clarity, structured pipelines, and intentional engineering.';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block mr-2 sm:mr-3.5 mb-1 sm:mb-2 select-none">
      <span className="text-[#111111]/15">{children}</span>
      <motion.span
        style={{ opacity, y }}
        className="absolute inset-0 text-[#111111] font-archivo font-black tracking-tight"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const KineticBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = sentence.split(' ');

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FAF7F3] py-28 sm:py-36 md:py-44 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8 overflow-hidden min-h-[500px] flex items-center justify-center"
    >
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="font-archivo font-black text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12] sm:leading-[1.15] text-left sm:text-center tracking-tight flex flex-wrap justify-start sm:justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </section>
  );
};
