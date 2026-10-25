import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Tamilselvan demonstrates rare theoretical rigor paired with pragmatic edge deployment skills. His FogVision architecture addresses real optical degradation constraints with remarkable computational elegance.',
      author: 'Prof. K. Ramesh',
      title: 'Senior AI Researcher & Faculty, SRM IST',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Working with Tamilselvan on industrial defect classification was an exercise in thorough experimentation. Achieving 99.2% accuracy while maintaining sub-15ms inference latency was a standout accomplishment.',
      author: 'Arvind Kumar',
      title: 'Lead Computer Vision Engineer, Tech Partner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'His deep understanding of neural inference on embedded chips like Jetson Orin sets him far apart from typical graduates. He thinks in complete physical systems, not just isolated models.',
      author: 'Meera Sundaram',
      title: 'Autonomous Systems Lead, Hackathon Evaluator',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Tamilselvan bridges deep learning models and high-performance client interfaces effortlessly. Clean code architecture, rock-solid APIs, and exceptional product design intuition.',
      author: 'Rohan Patel',
      title: 'Full-Stack Collaborator, SRM Systems Lab',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-6 border-b border-[#111111]/8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
              / ENDORSEMENTS
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mt-1">
              Testimonials
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-inter text-[#666666] max-w-md">
            Feedback from academic research mentors, engineering leads, and technical collaborators.
          </p>
        </div>

        {/* 2x2 Clean 3D Flip Card Testimonial Grid matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative h-[290px] sm:h-[260px] group select-none"
              style={{ perspective: '1200px' }}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                
                {/* Front Face: Quote & Avatar preview */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-[#FAF7F3] border border-[#111111]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] [backface-visibility:hidden] -webkit-[backface-visibility:hidden]"
                >
                  <div className="flex flex-col gap-3">
                    <Quote className="w-5 h-5 text-[#111111]/25" />
                    <p className="font-inter text-sm sm:text-base text-[#222222] leading-relaxed line-clamp-4">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#111111]/8">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-9 h-9 rounded-full object-cover border border-[#111111]/10"
                      />
                      <div>
                        <h4 className="font-archivo font-bold text-sm text-[#111111]">
                          {item.author}
                        </h4>
                        <p className="text-[11px] font-inter text-[#666666]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#999999] bg-[#111111]/5 px-2.5 py-1 rounded-full group-hover:text-[#EB4D6D] transition-colors">
                      Flip ⟳
                    </span>
                  </div>
                </div>

                {/* Back Face: Dark Card Face matching Reference Site 3D Card Face */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-[#111111] text-white border border-[#222222] shadow-[0_12px_32px_rgba(0,0,0,0.25)] [transform:rotateY(180deg)] [backface-visibility:hidden] -webkit-[backface-visibility:hidden]"
                >
                  <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EB4D6D] uppercase tracking-wider">
                      <span>/ VERIFIED COLLABORATION</span>
                    </div>
                    <p className="font-inter text-xs sm:text-sm text-white/80 leading-relaxed">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-8 h-8 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <h4 className="font-archivo font-bold text-sm text-white">
                        {item.author}
                      </h4>
                      <p className="text-[11px] font-inter text-white/60">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
