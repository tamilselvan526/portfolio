import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 'fogvision',
      title: 'FogVision',
      category: 'Edge AI / Computer Vision',
      year: '2025',
      description:
        'Real-time atmospheric dehazing and object detection architecture engineered for low-visibility autonomous driving and electric mobility. Fuses physics-based transmission estimation with YOLOv8 inference.',
      image: '/projects/fogvision/fog_vision_hero.png',
      metrics: ['38+ FPS Inference', '1.42s Cold Start', 'AOD-Net + YOLOv8'],
      tags: ['PyTorch', 'Jetson Orin', 'TensorRT', 'OpenCV'],
      github: 'https://github.com/tamilselvan526',
      live: '#',
    },
    {
      id: 'casting',
      title: 'Casting Defect Classification',
      category: 'Industrial AI / CNN',
      year: '2025',
      description:
        'Automated industrial manufacturing defect classification pipeline achieving 99.2% test accuracy on cast metal components. Benchmarked custom ResNet-50 and VGG16 architectures with confusion matrix rigor.',
      image: '/projects/casting/casting_industrial_real.jpg',
      metrics: ['99.2% Test Accuracy', 'ResNet-50 vs VGG16', 'Sub-15ms Latency'],
      tags: ['TensorFlow', 'Python', 'Computer Vision', 'Quality Assurance'],
      github: 'https://github.com/tamilselvan526',
      live: '#',
    },
    {
      id: 'shopkart',
      title: 'ShopKart AI Platform',
      category: 'Full-Stack AI / Platform',
      year: '2024',
      description:
        'High-throughput modern commerce ecosystem integrated with real-time predictive recommendation pipelines, user telemetry tracking, and dynamic cart state management.',
      image: '/projects/shopkart/shopkart_hero.png',
      metrics: ['FastAPI Backend', 'React 19 Frontend', 'Sub-50ms Latency'],
      tags: ['React', 'TypeScript', 'FastAPI', 'Tailwind CSS'],
      github: 'https://github.com/tamilselvan526',
      live: '#',
    },
    {
      id: 'ev-telemetry',
      title: 'EV Telemetry Studio',
      category: 'Automotive UI / Driver Cluster',
      year: '2026',
      description:
        'Futuristic electric vehicle cockpit instrumentation dashboard modeling battery thermals, regenerative braking state, and driver assistive computer vision warnings with real-time visual telemetry.',
      image: '/assets/majd_ref/project_2.png',
      metrics: ['120Hz Animation', 'CAN Bus Stream', 'Predictive Range AI'],
      tags: ['Digital Cluster', 'Electric Mobility', 'Telemetry', 'Motion'],
      github: 'https://github.com/tamilselvan526',
      live: '#',
    },
  ];

  return (
    <section id="works" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 pb-6 border-b border-[#111111]/8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
              / SELECTED WORK
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/tamilselvan526"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white font-inter font-semibold text-xs hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm group w-fit"
          >
            <span>View All Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 2-Column Asymmetrical Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="framer-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between gap-6 group cursor-pointer"
            >
              {/* Project Image Frame with Rounded Borders */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#ECEAE5] relative border border-[#111111]/6 shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Category Pill */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md text-white text-[11px] font-inter font-medium flex items-center gap-1.5 shadow-sm">
                  <span>{project.category}</span>
                  <span className="opacity-50">•</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-archivo font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight group-hover:text-[#EB4D6D] transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#FAF7F3] border border-[#111111]/8 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm font-inter text-[#555555] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2.5 py-0.5 rounded-md bg-[#111111]/5 text-[#111111] font-mono font-medium text-[11px]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Tags Footer */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#111111]/6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-[#FAF7F3] border border-[#111111]/8 text-[11px] font-inter text-[#666666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
