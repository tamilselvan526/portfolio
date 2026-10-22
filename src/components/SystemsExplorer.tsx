import React, { useState } from 'react';
import { 
  Cpu, 
  Eye, 
  Atom, 
  Rocket, 
  Layout, 
  Database, 
  ChevronRight
} from 'lucide-react';

export const SystemsExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ai-ml');

  const categories = [
    {
      id: 'ai-ml',
      name: 'AI / ML',
      icon: Cpu,
      technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
      headline: 'Deep Learning & Neural Formulation',
      description: 'Custom gradient backpropagation, modular layer design, compound multi-objective loss formulation (Charbonnier, SSIM, VGG perceptual loss), and training pipeline orchestration with cosine decay and warmup scheduling.',
      projectLink: 'Applied in FogVision & AI Casting Guard',
      details: [
        { label: 'Core Frameworks', value: 'PyTorch 2.x, TensorFlow 2.x, Keras 3' },
        { label: 'Optimization', value: 'AdamW, Cosine Annealing, L1 Weight Sparsity' },
        { label: 'Telemetry & Evaluation', value: 'Loss Curves, ROC-AUC, F1 Matrix' }
      ]
    },
    {
      id: 'cv',
      name: 'COMPUTER VISION',
      icon: Eye,
      technologies: ['OpenCV', 'CNNs', 'U-Net', 'Image Restoration'],
      headline: 'Spatial Feature Extraction & Dense Reconstruction',
      description: 'End-to-end vision pipelines handling degraded input frames. Implements U-Net encoder-decoder architectures with skip connections, Squeeze-and-Excitation channel attention, and multi-scale image enhancement.',
      projectLink: 'Applied in FogVision (Cityscapes-DBF) & Casting Defect Inspection',
      details: [
        { label: 'Architectures', value: 'U-Net, EfficientNet-B0, ResNet50, MobileNetV2' },
        { label: 'Preprocessing', value: 'Bilateral Filtering, Glare Reduction, Data Augmentation' },
        { label: 'Verification', value: 'PSNR (Peak SNR), SSIM (Structural Similarity)' }
      ]
    },
    {
      id: 'quantum',
      name: 'QUANTUM ML',
      icon: Atom,
      technologies: ['Variational Quantum Circuits', 'Hybrid Quantum-Classical Models'],
      headline: 'Hilbert-Space Latent Representation',
      description: 'Parameterized quantum circuits acting as neural bottlenecks. Simulates Ry single-qubit rotations and CNOT cyclic entanglement gates via differentiable PyTorch tensor math, enabling ONNX export without cloud QPU latencies.',
      projectLink: 'Applied in FogVision 4-Qubit Bottleneck',
      details: [
        { label: 'Circuits', value: '4-Qubit, 2-Layer Variational Quantum Circuit (VQC)' },
        { label: 'Entanglement', value: 'Cyclic CNOT Gate Coupling Matrix' },
        { label: 'Export Strategy', value: 'Differentiable PyTorch Tensor Matrix Simulation' }
      ]
    },
    {
      id: 'deployment',
      name: 'DEPLOYMENT',
      icon: Rocket,
      technologies: ['ONNX Runtime', 'Flask', 'REST APIs'],
      headline: 'Edge Acceleration & Production Serving',
      description: 'Compiling computational graphs into platform-agnostic ONNX runtime artifacts for sub-30ms edge inference. Building persistent socket and REST daemons for decoupled front-end microservice communication.',
      projectLink: 'Applied in FogVision Inference Server & Casting Flask App',
      details: [
        { label: 'Runtime Engine', value: 'ONNX Runtime (CPU / CUDA Execution Providers)' },
        { label: 'Backend Serving', value: 'Flask REST API, Python Persistent Daemon' },
        { label: 'Latency Envelope', value: '<30ms Local Inference Execution' }
      ]
    },
    {
      id: 'frontend',
      name: 'FRONTEND',
      icon: Layout,
      technologies: ['React', 'Next.js', 'TypeScript'],
      headline: 'High-Performance Interactive Interfaces',
      description: 'Designing intuitive, high-impact user experiences that make complex machine learning models intelligible. Building real-time before/after comparison sliders, inspection reticles, and optimistic state synchronization.',
      projectLink: 'Applied in ShopKart & FogVision Web UI',
      details: [
        { label: 'Core Libraries', value: 'React 18/19, Next.js 15, TypeScript, Tailwind' },
        { label: 'State & Caching', value: 'Redux Toolkit, Context API, Optimistic Mutations' },
        { label: 'Interaction Design', value: 'Custom Sliders, Canvas HUDs, Responsive Grid' }
      ]
    },
    {
      id: 'data',
      name: 'DATA',
      icon: Database,
      technologies: ['Python', 'NumPy', 'Pandas', 'MySQL', 'PostgreSQL'],
      headline: 'Pipelines & Relational Storage',
      description: 'Building robust data ingest pipelines, image normalization routines, and relational database schemas with strict foreign key integrity, ACID compliance, and indexing for rapid retrieval.',
      projectLink: 'Applied across all projects & ShopKart DB',
      details: [
        { label: 'Analysis & Array Math', value: 'NumPy, Pandas, Scipy' },
        { label: 'Relational Schemas', value: 'MySQL, PostgreSQL, Django ORM' },
        { label: 'Image Datasets', value: 'Cityscapes-DBF, Kaggle Industrial Casting' }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="py-28 relative bg-[#090A0C] text-white border-t border-white/10 bg-dark-grid">
      
      {/* Background Ambient Coral Glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#FF3B30]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131417] border border-white/10 text-xs font-mono text-[#FF3B30] mb-4 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#FF3B30]" />
            // ARCHITECTURE &bull; FULL TECHNICAL STACK
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl font-black text-white tracking-tight uppercase leading-[0.9]">
            THE SYSTEMS BEHIND <span className="text-[#FF3B30] inline-block">THE INTERFACE.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9B9CA2] font-space mt-3 max-w-2xl">
            A comprehensive mapping of technologies, algorithms, and deployment stacks across mathematical AI research, computer vision, and interactive product engineering.
          </p>
        </div>

        {/* Interactive Domain Explorer Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Domain Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-[#9B9CA2] uppercase tracking-[0.2em] mb-2">
              // SELECT ARCHITECTURAL DOMAIN
            </div>

            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-4 transition-all bracket-corner-red flex items-center justify-between rounded-sm ${
                    isActive
                      ? 'bg-[#181A1F] border border-[#FF3B30] shadow-[0_0_15px_rgba(255,59,48,0.25)]'
                      : 'bg-[#131417] border border-white/10 text-[#9B9CA2] hover:border-[#FF3B30]/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 border rounded-sm ${
                      isActive 
                        ? 'bg-black border-[#FF3B30] text-[#FF3B30]' 
                        : 'bg-black border-white/10 text-[#9B9CA2]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`font-oxanium text-sm font-bold tracking-wider ${isActive ? 'text-white' : 'text-[#F4F4F6]'}`}>
                        {cat.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#9B9CA2] mt-0.5">
                        {cat.technologies.join(' • ')}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#FF3B30] translate-x-1' : 'text-[#9B9CA2]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Domain Telemetry Inspection Card */}
          <div className="lg:col-span-7 p-8 bg-[#131417] border border-white/10 bracket-corner-red space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#FF3B30] tracking-widest uppercase">
                  DOMAIN SPECIFICATION
                </span>
                <h3 className="font-oxanium text-2xl font-bold text-white uppercase tracking-wider mt-1">
                  {currentCategory.headline}
                </h3>
              </div>
              <div className="p-3 bg-black border border-[#FF3B30]/40 text-[#FF3B30] rounded-sm">
                {React.createElement(currentCategory.icon, { className: 'w-6 h-6' })}
              </div>
            </div>

            {/* Core Narrative */}
            <p className="text-sm text-[#F4F4F6] font-space leading-relaxed">
              {currentCategory.description}
            </p>

            {/* Technologies Pills */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#9B9CA2] uppercase tracking-wider block">
                Primary Toolchain &amp; Libraries:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentCategory.technologies.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-black/60 border border-white/10 text-xs font-mono text-[#FF3B30] rounded-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Structured Technical Specifications */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <span className="text-[11px] font-mono text-[#9B9CA2] uppercase tracking-wider block mb-2">
                Technical Implementations:
              </span>
              {currentCategory.details.map((d) => (
                <div key={d.label} className="p-3 bg-black/60 border border-white/10 flex justify-between items-center text-xs font-mono rounded-xs">
                  <span className="text-[#9B9CA2]">{d.label}:</span>
                  <span className="text-white font-semibold">{d.value}</span>
                </div>
              ))}
            </div>

            {/* Project Mapping Badge */}
            <div className="p-3.5 bg-black/80 border border-[#FF3B30]/30 flex items-center justify-between text-xs font-mono rounded-xs">
              <span className="text-[#9B9CA2]">Applied Verification:</span>
              <span className="text-[#FF3B30] font-bold">{currentCategory.projectLink}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
