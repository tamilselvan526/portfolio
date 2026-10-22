import React from 'react';
import { motion } from 'motion/react';

export const KineticBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF7F3] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
            / PHILOSOPHY & METHODOLOGY
          </div>

          <h2 className="font-archivo font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-[#111111] tracking-tight">
            From concept to deployment. <span className="text-[#888888]">Clean, scalable AI architectures built to</span> move fast, infer at edge speeds, <span className="text-[#888888]">stay mathematically rigorous, and perform in real-world deployment—driven by</span> clarity, structured pipelines, and intentional design.
          </h2>

          <div className="flex flex-wrap items-center gap-6 pt-6 text-xs sm:text-sm font-inter text-[#555555]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>Real-Time Edge Inference</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>Mathematical Model Rigor</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>Production-Grade Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
