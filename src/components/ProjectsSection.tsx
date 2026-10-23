import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const ClipReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '105%' }}
        animate={inView ? { y: 0 } : { y: '105%' }}
        transition={{ duration: 0.88, ease: EASE_EXPO, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const projects = [
  {
    id: 'fogvision',
    title: 'FogVision',
    category: 'Hybrid Quantum-Classical Image Dehazing',
    image: '/projects/fogvision/fog_vision_hero.png',
    description:
      'Two-stage image dehazing pipeline using EfficientNet-B0 for 4-class fog density classification and a Hybrid Quantum-Classical U-Net with a 4-qubit VQC bottleneck. Deployed with ONNX and Next.js.',
    github: 'https://github.com/tamilselvan526/QuantumDehazer',
    tag: 'Computer Vision',
  },
  {
    id: 'casting',
    title: 'Automated Casting Defect Classification',
    category: 'Industrial Computer Vision & Multiple CNNs',
    image: '/projects/casting/casting_industrial_real.jpg',
    description:
      '4-class industrial casting defect classification system benchmarking and comparing Custom CNN, MobileNetV2, and ResNet50 architectures. Deployed with Flask-based real-time inference.',
    github:
      'https://github.com/tamilselvan526/Automated-casting-defect-classification-using-multiple-cnn',
    tag: 'Deep Learning',
  },
  {
    id: 'shopkart',
    title: 'ShopKart',
    category: 'Full-Stack E-Commerce Web Application',
    image: '/projects/shopkart/shopkart_hero.png',
    description:
      'Full-stack e-commerce platform with JWT authentication, role-based access control, product browsing, cart management, MySQL database, and modular Redux-based frontend architecture.',
    github: 'https://github.com/tamilselvan526/shopkart',
    tag: 'Full-Stack',
  },
  {
    id: 'self-pruning-nn',
    title: 'Self-Pruning Neural Network',
    category: 'Deep Learning Research & Sparsity Optimization',
    image: '/projects/self_pruning_nn.png',
    description:
      'Self-Pruning Neural Network utilizing L1 regularization on continuous sigmoid gates evaluated on CIFAR-10. Achieves over 82% parameter sparsity with minimal degradation in classification accuracy.',
    github: 'https://github.com/tamilselvan526/self-pruning-neural-network',
    tag: 'Research',
  },
];

const ProjectCard: React.FC<{
  project: (typeof projects)[0];
  index: number;
}> = ({ project, index }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.a
      ref={ref}
      href={project.github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 44, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: EASE_EXPO, delay: (index % 2) * 0.14 }}
      whileHover={{ y: -6 }}
      className="flex flex-col gap-5 group cursor-pointer"
    >
      {/* Image container — zoom on hover, matching reference */}
      <div
        className="w-full aspect-[16/10] rounded-[24px] sm:rounded-[28px] overflow-hidden
                   bg-[#ECEAE5] border border-[#111111]/8 shadow-sm relative"
      >
        {/* Tag badge */}
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full
                     bg-black/45 backdrop-blur-md text-white text-[10px]
                     font-mono tracking-wider uppercase border border-white/10"
        >
          {project.tag}
        </div>

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
        />
      </div>

      {/* Title row */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <h3
            className="font-archivo font-bold text-2xl sm:text-3xl text-[#111111]
                       tracking-tight group-hover:text-[#EB4D6D] transition-colors duration-300"
          >
            {project.title}
          </h3>
          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#EB4D6D] group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-[#111111] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
        <div className="text-xs sm:text-sm font-inter text-[#888888]">
          {project.category}
        </div>
        <p className="text-xs sm:text-sm font-inter text-[#666666] line-clamp-2 mt-0.5 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="works"
      className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32
                 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888] block mb-1"
            >
              / SELECTED WORKS
            </motion.span>
            <ClipReveal>
              <h2
                className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl
                           text-[#111111] tracking-tight"
              >
                Featured Projects
              </h2>
            </ClipReveal>
          </div>

          <motion.a
            href="https://github.com/tamilselvan526?tab=repositories"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm
                       font-inter font-medium text-[#111111] hover:text-[#EB4D6D]
                       transition-colors group"
          >
            <span>View All Work</span>
            <ArrowUpRight
              className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-transform"
            />
          </motion.a>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
