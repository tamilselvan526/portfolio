import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ThoughtsSection: React.FC = () => {
  const articles = [
    {
      date: 'May 5, 2025',
      readTime: '6 min read',
      title: 'Real-Time Inference Optimization on Embedded Automotive Compute',
      description:
        'A technical deep dive into INT8 quantization, TensorRT kernel compilation, and batch scheduling to unlock 40+ FPS on Jetson Orin architectures.',
      tags: ['Edge AI', 'TensorRT', 'Hardware'],
    },
    {
      date: 'June 16, 2025',
      readTime: '8 min read',
      title: 'Computer Vision in Harsh Weather: Synthetic Dehazing vs Optical Sensors',
      description:
        'Comparing single-image optical transmission recovery models with multi-sensor lidar under dense fog, rain scatter, and low-light highway conditions.',
      tags: ['Computer Vision', 'Dehazing', 'Mobility'],
    },
    {
      date: 'July 28, 2025',
      readTime: '5 min read',
      title: 'Designing Resilient Defect Detection Systems for High-Throughput Manufacturing',
      description:
        'Techniques for handling extreme class imbalance, false negatives, and operational distribution drift across continuous cast metal production lines.',
      tags: ['Deep Learning', 'Industrial QA', 'CNN'],
    },
  ];

  return (
    <section id="thoughts" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-6 border-b border-[#111111]/8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
              / RESEARCH & TECHNICAL WRITING
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mt-1">
              Thoughts
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-inter text-[#666666] max-w-md">
            Articles and engineering notes on deep learning pipelines, edge optimization, and autonomous perception.
          </p>
        </div>

        {/* 3-Column Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="framer-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between gap-6 group cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-inter text-[#888888]">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-archivo font-bold text-xl sm:text-2xl text-[#111111] tracking-tight group-hover:text-[#EB4D6D] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm font-inter text-[#555555] leading-relaxed">
                  {article.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#111111]/6">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-[#FAF7F3] border border-[#111111]/8 text-[11px] font-inter text-[#666666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="p-1.5 rounded-full bg-[#FAF7F3] text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
