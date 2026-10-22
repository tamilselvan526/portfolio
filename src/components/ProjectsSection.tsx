import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 'fogvision',
      title: 'FogVision',
      category: 'Hybrid Quantum-Classical Image Dehazing',
      image: '/projects/fogvision/fog_vision_hero.png',
      description:
        'Two-stage image dehazing pipeline using EfficientNet-B0 for 4-class fog density classification and a Hybrid Quantum-Classical U-Net with a 4-qubit VQC bottleneck. Deployed with ONNX and Next.js.',
      github: 'https://github.com/tamilselvan526/QuantumDehazer',
    },
    {
      id: 'casting',
      title: 'Automated Casting Defect Classification',
      category: 'Industrial Computer Vision & Multiple CNNs',
      image: '/projects/casting/casting_industrial_real.jpg',
      description:
        '4-class industrial casting defect classification system benchmarking and comparing Custom CNN, MobileNetV2, and ResNet50 architectures. Deployed with Flask-based real-time inference.',
      github: 'https://github.com/tamilselvan526/Automated-casting-defect-classification-using-multiple-cnn',
    },
    {
      id: 'shopkart',
      title: 'ShopKart',
      category: 'Full-Stack E-Commerce Web Application',
      image: '/projects/shopkart/shopkart_hero.png',
      description:
        'Full-stack e-commerce platform with JWT authentication, role-based access control, product browsing, cart management, MySQL database, and modular Redux-based frontend architecture.',
      github: 'https://github.com/tamilselvan526/shopkart',
    },
    {
      id: 'self-pruning-nn',
      title: 'Self-Pruning Neural Network',
      category: 'Deep Learning Research & Sparsity Optimization',
      image: '/projects/self_pruning_nn.png',
      description:
        'Self-Pruning Neural Network utilizing L1 regularization on continuous sigmoid gates evaluated on CIFAR-10. Achieves over 82% parameter sparsity with minimal degradation in classification accuracy.',
      github: 'https://github.com/tamilselvan526/self-pruning-neural-network',
    },
  ];

  return (
    <section id="works" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">
        
        {/* Section Header matching Video 00:13 */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-4">
          <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            Featured Projects
          </h2>

          <a
            href="https://github.com/tamilselvan526?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-inter font-medium text-[#111111] hover:text-[#EB4D6D] transition-colors group"
          >
            <span>View All Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 2-Column Grid matching Video 00:15 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Rounded Project Thumbnail Container with smooth zoom */}
              <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-[#ECEAE5] border border-[#111111]/8 shadow-sm relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title & Category Below Image matching Video 00:17 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-archivo font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight group-hover:text-[#EB4D6D] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#888888] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-xs sm:text-sm font-inter text-[#666666]">
                  {project.category}
                </div>
                <p className="text-xs sm:text-sm font-inter text-[#777777] line-clamp-2 mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
