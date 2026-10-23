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

        {/* 2x2 Clean Testimonial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="framer-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <Quote className="w-6 h-6 text-[#111111]/20" />
                <p className="font-inter text-base sm:text-lg text-[#222222] leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#111111]/6">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#111111]/10"
                />
                <div>
                  <h4 className="font-archivo font-bold text-sm text-[#111111]">
                    {item.author}
                  </h4>
                  <p className="text-xs font-inter text-[#666666]">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
