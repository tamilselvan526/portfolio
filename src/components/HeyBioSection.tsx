import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const HeyBioSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big "Hey!" & Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col items-start gap-4"
          >
            <h2 className="font-archivo font-black text-6xl sm:text-7xl md:text-8xl text-[#111111] tracking-tight leading-none">
              Hey!
            </h2>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#111111]/10 text-xs font-inter font-medium text-[#111111] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Available for AI/ML Roles</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-inter text-[#666666] mt-2">
              <MapPin className="w-3.5 h-3.5 text-[#111111]" />
              <span>Chennai, India • SRM IST</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio Paragraphs & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8 flex flex-col gap-6 sm:gap-8"
          >
            <p className="font-inter text-xl sm:text-2xl md:text-3xl font-medium text-[#111111] leading-snug">
              I’m <span className="font-bold underline decoration-[#EB4D6D] decoration-2 underline-offset-4">Tamilselvan P</span>, an AI/ML Engineer and intelligent systems researcher based in Chennai, currently completing my B.Tech in CSE (AI & ML) at SRM Institute of Science and Technology.
            </p>

            <p className="font-inter text-base sm:text-lg text-[#555555] leading-relaxed">
              I specialize in edge computer vision architectures, deep learning classifiers, and full-stack AI integrations with a strong focus on building modern, scalable, and performance-driven experiences that operate seamlessly in edge and cloud deployments.
            </p>

            <p className="font-inter text-base sm:text-lg text-[#555555] leading-relaxed">
              Over the years, I’ve architected real-time low-visibility dehazing models (<strong className="text-[#111111]">FogVision</strong>), industrial defect detection CNNs (<strong className="text-[#111111]">99.2% accuracy</strong>), and high-throughput AI platforms, empowering users and engineering teams with actionable intelligence.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white font-inter font-semibold text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md group"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111111] border border-[#111111]/12 font-inter font-semibold text-sm hover:bg-[#FAF7F3] hover:border-[#111111]/30 transition-all shadow-2xs"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#666666]" />
              </a>

              <a
                href="https://github.com/tamilselvan526"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111111] border border-[#111111]/12 font-inter font-semibold text-sm hover:bg-[#FAF7F3] hover:border-[#111111]/30 transition-all shadow-2xs"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-4 h-4 text-[#666666]" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
