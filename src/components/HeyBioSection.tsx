import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const HeyBioSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#FAF7F3] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big "Hey!" & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-center gap-6"
          >
            <h2 className="font-archivo font-black text-6xl sm:text-7xl md:text-8xl text-[#111111] tracking-tight leading-none">
              Hey!
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#333333] leading-relaxed">
              I’m Tamilselvan, an AI/ML Engineer and researcher based in Chennai, India, completing my B.Tech in CSE (AI & ML) at SRM Institute of Science and Technology (CGPA: 8.20/10).
            </p>
          </motion.div>

          {/* Center Column: Prominent Red-Backlit Portrait Card matching Video 00:03 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center py-4"
          >
            <motion.div
              whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[28px] overflow-hidden bg-[#111111] border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative group cursor-pointer"
            >
              <img
                src="/assets/tamilselvan_cinematic_red.jpg"
                alt="Tamilselvan P - AI/ML Engineer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>

          {/* Right Column: Deep Learning & Full-Stack ML CV Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col justify-center gap-6"
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
    </section>
  );
};
