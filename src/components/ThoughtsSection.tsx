import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const ClipReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '105%' }}
        animate={inView ? { y: 0 } : { y: '105%' }}
        transition={{ duration: 0.88, ease: EASE_EXPO }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const articles = [
  {
    date: 'May 5, 2025',
    readTime: '6 min read',
    title: 'Hybrid Quantum-Classical Image Dehazing with 4-Qubit VQC',
    excerpt:
      'Integrating a differentiable quantum layer into U-Net bottlenecks to enhance high-frequency feature recovery in heavy atmospheric fog.',
    image: '/projects/fogvision/fog_vision_hero.png',
    href: 'https://github.com/tamilselvan526/QuantumDehazer',
  },
  {
    date: 'Jun 16, 2025',
    readTime: '8 min read',
    title: 'Industrial Defect Detection: Custom CNN vs MobileNetV2 vs ResNet50',
    excerpt:
      'Comparative evaluation of convolutional architectures across 4-class casting defects, balancing inference latency with 99.2% accuracy.',
    image: '/projects/casting/casting_industrial_real.jpg',
    href: 'https://github.com/tamilselvan526/Automated-casting-defect-classification-using-multiple-cnn',
  },
];

export const ThoughtsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="thoughts"
      ref={containerRef}
      className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32
                 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono text-[#888888] uppercase tracking-wider block mb-1"
            >
              / OUR BLOG
            </motion.span>
            <ClipReveal>
              <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl
                             text-[#111111] tracking-tight">
                Thoughts
              </h2>
            </ClipReveal>
          </div>
          <motion.a
            href="https://github.com/tamilselvan526"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE_EXPO }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-inter
                       font-medium text-[#111111] hover:text-[#EB4D6D] transition-colors group"
          >
            <span>View All Notes</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* 3-column grid: 2 image cards + 1 dark callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Dark image article cards */}
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} delay={index * 0.12} />
          ))}

          {/* Solid dark callout card — matches reference's 3rd card */}
          <DarkCalloutCard />
        </div>

      </div>
    </section>
  );
};

const ArticleCard: React.FC<{
  article: (typeof articles)[0];
  delay?: number;
}> = ({ article, delay = 0 }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.a
      ref={ref}
      href={article.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: EASE_EXPO, delay }}
      whileHover={{ y: -6 }}
      className="rounded-[28px] overflow-hidden bg-[#111111] text-white
                 flex flex-col justify-end min-h-[400px] sm:min-h-[440px]
                 relative group cursor-pointer shadow-lg
                 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-shadow duration-500"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={article.image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-35"
          whileHover={{ scale: 1.06, opacity: 0.45 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col gap-3 p-8">
        <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
          {article.date} • {article.readTime}
        </div>
        <h3 className="font-archivo font-bold text-xl sm:text-2xl text-white
                       group-hover:text-[#EB4D6D] transition-colors duration-300 leading-snug">
          {article.title}
        </h3>
        <p className="text-xs font-inter text-white/65 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </motion.a>
  );
};

const DarkCalloutCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.24 }}
      whileHover={{ y: -6 }}
      className="rounded-[28px] bg-[#111111] text-white p-8 sm:p-10
                 flex flex-col justify-between min-h-[400px] sm:min-h-[440px] shadow-lg
                 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-shadow duration-500"
    >
      <div className="flex flex-col gap-4">
        <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
          / RESEARCH NOTES
        </div>
        <h3 className="font-archivo font-black text-3xl sm:text-4xl text-white
                       leading-tight tracking-tight">
          See how we shape brands with clarity and intentional design.
        </h3>
      </div>

      <div className="pt-6 border-t border-white/10 mt-6">
        <a
          href="https://github.com/tamilselvan526"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-inter font-semibold
                     text-white hover:text-[#EB4D6D] transition-colors group"
        >
          <span>View All Work</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};
