import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ProjectModal, type ProjectDetail } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      id: 'fogvision',
      title: 'FogVision',
      subtitle: 'Hybrid Quantum-Classical Image Dehazing Pipeline',
      category: 'Quantum Computing & Computer Vision',
      image: '/projects/fogvision/fog_vision_hero.png',
      description:
        'Two-stage image dehazing pipeline combining classical convolutional neural networks with parameterized quantum circuits. Integrates an EfficientNet-B0 density classifier with a hybrid U-Net featuring a 4-qubit Pennylane VQC bottleneck to restore optical degradation in adverse weather.',
      deliverables: [
        'EfficientNet-B0 classifier estimating atmospheric scattering across 4 fog density categories',
        'Hybrid Quantum-Classical U-Net bottleneck with 4-qubit AngleEmbedding and BasicEntanglerLayers',
        'Demonstrated +8.43 dB PSNR increase over degraded inputs on Cityscapes-DBF dataset',
        'Exported to ONNX runtime with an interactive web telemetry interface'
      ],
      metrics: [
        { label: 'PSNR GAIN', value: '+8.43 dB' },
        { label: 'SSIM SCORE', value: '0.892' },
        { label: 'QUANTUM BOTTLENECK', value: '4 Qubits' }
      ],
      techStack: ['PyTorch', 'PennyLane', 'EfficientNet-B0', 'ONNX Runtime', 'Next.js', 'Cityscapes-DBF'],
      github: 'https://github.com/tamilselvan526/QuantumDehazer',
    },
    {
      id: 'casting',
      title: 'Automated Casting Defect Classification',
      subtitle: 'Industrial Computer Vision Inspection System',
      category: 'Industrial AI & Multiple CNNs',
      image: '/projects/casting/casting_industrial_real.jpg',
      description:
        'High-speed visual defect classification for aluminum impeller casting manufacturing lines. Compares and benchmarks Custom CNN, MobileNetV2, and ResNet50 architectures with class imbalance mitigation and automated quarantine alerting.',
      deliverables: [
        '4-class defect recognition covering Blowhole, Stress Crack, Parting Line Flash, and Normal components',
        'Benchmarked Custom CNN (96.4%), MobileNetV2 (94.8%), and fine-tuned ResNet50 (99.2%)',
        'Real-time Flask API delivering sub-15ms inference latency per inspection frame',
        'Automated quarantine dispatch telemetry integrated into foundry production workflow'
      ],
      metrics: [
        { label: 'TOP ACCURACY', value: '99.2%' },
        { label: 'INFERENCE LATENCY', value: '< 15 ms' },
        { label: 'DEFECT CLASSES', value: '4 Real-World' }
      ],
      techStack: ['PyTorch', 'ResNet50', 'MobileNetV2', 'OpenCV', 'Flask API', 'NumPy'],
      github: 'https://github.com/tamilselvan526/Automated-casting-defect-classification-using-multiple-cnn',
    },
    {
      id: 'shopkart',
      title: 'ShopKart',
      subtitle: 'Full-Stack E-Commerce & Inventory Management Platform',
      category: 'Full-Stack Web Architecture',
      image: '/projects/shopkart/shopkart_hero.png',
      description:
        'End-to-end commerce architecture featuring secure JWT authentication with HttpOnly cookies, relational MySQL data persistence, normalized Redux store, and real-time inventory management telemetry.',
      deliverables: [
        'Role-based access control (RBAC) separating customer purchasing and administrator management consoles',
        'Dynamic cart synchronization, multi-attribute product catalog filtering, and order lifecycle states',
        'Normalized relational MySQL schema with indexing for fast product and category queries',
        'Responsive, modern UI built with React and Tailwind CSS'
      ],
      metrics: [
        { label: 'AUTHENTICATION', value: 'JWT + Cookies' },
        { label: 'DATABASE', value: 'MySQL' },
        { label: 'STATE MANAGEMENT', value: 'Redux Toolkit' }
      ],
      techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MySQL', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/tamilselvan526/shopkart',
    },
    {
      id: 'self-pruning-nn',
      title: 'Self-Pruning Neural Network',
      subtitle: 'Adaptive Sparsity Optimization via Continuous Gating',
      category: 'Deep Learning Research',
      image: '/projects/self_pruning_nn.png',
      description:
        'Self-pruning neural network architecture utilizing L1 regularization on continuous sigmoid gates evaluated on CIFAR-10. Dynamically learns parameter sparsity during the standard training loop without separate pruning passes.',
      deliverables: [
        'Continuous sigmoid gating variables with L1 penalty driving redundant weight tensors toward zero',
        'Achieved over 82% parameter sparsity with under 1.6% accuracy degradation on CIFAR-10',
        'Eliminated costly multi-stage train-prune-finetune heuristic cycles',
        'Layer-wise sparsity distribution telemetry and loss convergence visualization'
      ],
      metrics: [
        { label: 'PARAMETER SPARSITY', value: '> 82%' },
        { label: 'ACCURACY RETENTION', value: '98.4%' },
        { label: 'BENCHMARK', value: 'CIFAR-10' }
      ],
      techStack: ['Python', 'PyTorch', 'CUDA', 'L1 Regularization', 'Matplotlib'],
      github: 'https://github.com/tamilselvan526/self-pruning-neural-network',
    },
  ];

  return (
    <section id="works" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
              / SELECTED WORKS
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/tamilselvan526?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-inter font-medium text-[#111111] hover:text-[#EB4D6D] transition-colors group"
          >
            <span>View All Repositories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 2-Column Grid with Click-to-Inspect Modal Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Rounded Project Thumbnail Container with smooth zoom & hover pill */}
              <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-[#ECEAE5] border border-[#111111]/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-shadow duration-500 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                />

                {/* Inspect Architecture Pill on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-[#111111]/85 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#EB4D6D]" />
                    <span>Inspect System</span>
                  </div>
                </div>
              </div>

              {/* Title & Category Below Image */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-archivo font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight group-hover:text-[#EB4D6D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#111111]/5 flex items-center justify-center group-hover:bg-[#111111] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#444444] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-inter text-[#666666]">
                  {project.category}
                </div>
                <p className="text-xs sm:text-sm font-inter text-[#777777] line-clamp-2 mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Glassmorphic Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

