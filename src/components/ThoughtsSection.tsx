import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ThoughtsSection: React.FC = () => {
  return (
    <section id="thoughts" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">
        
        {/* Section Header matching Video 00:22 */}
        <div>
          <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            Thoughts
          </h2>
        </div>

        {/* 3-Column Grid matching Video 00:23 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Article with Dark Image Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] overflow-hidden bg-[#111111] text-white p-8 flex flex-col justify-end min-h-[420px] relative group cursor-pointer shadow-lg"
          >
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src="/projects/fogvision/fog_vision_hero.png"
                alt="Quantum Dehazing"
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <div className="text-xs font-mono text-white/60">
                May 5, 2025 • 6 min read
              </div>
              <h3 className="font-archivo font-bold text-2xl text-white group-hover:text-[#EB4D6D] transition-colors leading-snug">
                Hybrid Quantum-Classical Image Dehazing with 4-Qubit VQC
              </h3>
              <p className="text-xs font-inter text-white/70 line-clamp-3 leading-relaxed">
                Integrating a differentiable quantum layer into U-Net bottlenecks to enhance high-frequency feature recovery in heavy atmospheric fog.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Article with Industrial Vision Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] overflow-hidden bg-[#111111] text-white p-8 flex flex-col justify-end min-h-[420px] relative group cursor-pointer shadow-lg"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/projects/casting/casting_industrial_real.jpg"
                alt="Industrial Inspection"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <div className="text-xs font-mono text-white/60">
                Jun 16, 2025 • 8 min read
              </div>
              <h3 className="font-archivo font-bold text-2xl text-white group-hover:text-[#EB4D6D] transition-colors leading-snug">
                Industrial Defect Detection: Custom CNN vs MobileNetV2 vs ResNet50
              </h3>
              <p className="text-xs font-inter text-white/70 line-clamp-3 leading-relaxed">
                Comparative evaluation of convolutional architectures across 4-class casting defects, balancing inference latency with 99.2% accuracy.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Solid Dark Callout Card matching Video 00:23 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[28px] bg-[#111111] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[420px] shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                / RESEARCH NOTES
              </div>
              <h3 className="font-archivo font-black text-3xl sm:text-4xl text-white leading-tight tracking-tight">
                See how we architect deep learning models with mathematical rigor—explore our technical notes
              </h3>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="https://github.com/tamilselvan526"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-inter font-semibold text-white hover:text-[#EB4D6D] transition-colors group"
              >
                <span>View All Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
