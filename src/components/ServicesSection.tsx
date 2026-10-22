import React from 'react';
import { motion } from 'motion/react';
import { Eye, Cpu, Layers, Activity } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Computer Vision & Edge AI',
      subtitle: 'Low-latency perception & synthetic dehazing',
      description:
        'Architecting real-time edge computer vision pipelines including atmospheric dehazing (AOD-Net), low-light restoration, and YOLOv8 object detection tuned for embedded platforms like NVIDIA Jetson Orin.',
      icon: Eye,
      tags: ['YOLOv8', 'Jetson Orin', 'TensorRT', 'OpenCV', 'AOD-Net', 'Edge Inference'],
    },
    {
      num: '02',
      title: 'Deep Learning & Neural Architectures',
      subtitle: 'Custom classifiers & precision loss functions',
      description:
        'Designing, training, and validating convolutional and transformer networks from scratch. Proven benchmark lead in industrial casting quality control with 99.2% test accuracy and confusion matrix validation.',
      icon: Cpu,
      tags: ['PyTorch', 'ResNet-50', 'VGG16', 'TensorFlow', '99.2% Accuracy', 'Loss Optimization'],
    },
    {
      num: '03',
      title: 'Full-Stack AI Engineering',
      subtitle: 'High-throughput client interfaces & APIs',
      description:
        'Bridging machine learning models with responsive user experiences. Building reactive dashboards with React 19, TypeScript, FastAPI microservices, and real-time WebSocket telemetry streaming.',
      icon: Layers,
      tags: ['React 19', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'Docker', 'WebSocket Stream'],
    },
    {
      num: '04',
      title: 'Systems Prototyping & Telemetry',
      subtitle: 'Automotive & industrial intelligent telemetry',
      description:
        'Prototyping futuristic electric vehicle digital instrumentation clusters, CAN bus telemetry ingestion, predictive battery thermal diagnostics, and automated manufacturing QA systems.',
      icon: Activity,
      tags: ['Electric Mobility', 'Automotive UX', 'Telemetry Pipelines', 'Hardware-in-Loop', 'Real-Time QA'],
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-6 border-b border-[#111111]/8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
              / WHAT I DELIVER
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mt-1">
              Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-inter text-[#666666] max-w-md">
            Production-grade AI systems combining deep learning theory, embedded inference efficiency, and human-centered design.
          </p>
        </div>

        {/* 2x2 Clean Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="framer-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-8 group"
              >
                <div className="flex flex-col gap-6">
                  {/* Top Bar inside Card */}
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[#888888]">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#FAF7F3] border border-[#111111]/8 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-archivo font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight group-hover:text-[#EB4D6D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-inter font-medium text-[#666666] mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-inter text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#111111]/6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#FAF7F3] border border-[#111111]/8 text-[11px] font-inter font-medium text-[#444444]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
