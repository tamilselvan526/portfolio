import React from 'react';
import { motion } from 'motion/react';

export const ServicesSection: React.FC = () => {
  const serviceRows = [
    {
      title: 'Computer Vision & Image Restoration',
      tags: ['U-Net', 'Quantum VQC', 'Image Dehazing', 'Optical Restoration'],
    },
    {
      title: 'Deep Learning & Defect Classification',
      tags: ['Custom CNN', 'MobileNetV2', 'ResNet50', 'Augmentation', 'Cross-Validation'],
    },
    {
      title: 'Full-Stack ML Applications & APIs',
      tags: ['React', 'Next.js', 'Redux', 'Flask', 'REST APIs', 'JWT Auth'],
    },
    {
      title: 'Model Deployment & Optimization',
      tags: ['ONNX Runtime', 'Low-Latency Inference', 'Docker', 'Profiling'],
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">
        
        {/* Section Header */}
        <div>
          <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            Services
          </h2>
        </div>

        {/* Editorial Rows with Divider Lines matching Video 00:11 */}
        <div className="flex flex-col border-t border-[#111111]/12">
          {serviceRows.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-7 sm:py-9 border-b border-[#111111]/12 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-black/[0.02] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl transition-all"
            >
              {/* Left Title with smooth slide on hover */}
              <div className="flex items-center gap-3">
                <span className="font-archivo font-bold text-xl sm:text-2xl md:text-3xl text-[#111111] tracking-tight group-hover:translate-x-2 group-hover:text-[#EB4D6D] transition-all duration-300">
                  {service.title}
                </span>
              </div>

              {/* Right Tag List matching Video 00:11 */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-inter text-[#666666]">
                {service.tags.map((tag, tIdx) => (
                  <React.Fragment key={tag}>
                    <span className="group-hover:text-[#111111] transition-colors">
                      {tag}
                    </span>
                    {tIdx < service.tags.length - 1 && (
                      <span className="opacity-30">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
