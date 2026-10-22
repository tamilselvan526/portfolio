import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Lightbulb, 
  Cpu, 
  LineChart, 
  RefreshCw, 
  Sparkles, 
  CheckCircle, 
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const ProcessPhilosophy: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'documented' | 'proposed'>('all');

  const steps = [
    {
      num: '01',
      title: 'Problem Framing',
      icon: Compass,
      desc: 'Define real-world hardware, latency, and environmental constraints before training. Understand edge thermal envelopes and failure boundaries.'
    },
    {
      num: '02',
      title: 'Data & Physics Modeling',
      icon: Search,
      desc: 'Ground models in physics: atmospheric light scattering (Koschmieder equation), die-casting cooling stress fractures, or network state transitions.'
    },
    {
      num: '03',
      title: 'Architectural Exploration',
      icon: Lightbulb,
      desc: 'Prototype competing architectures systematically—comparing classical CNN baselines against quantum VQC layers or benchmarking MobileNet vs ResNet.'
    },
    {
      num: '04',
      title: 'Implementation & Export',
      icon: Cpu,
      desc: 'Develop modular PyTorch/TensorFlow pipelines, formulate compound loss functions, and package models via ONNX Runtime for edge execution.'
    },
    {
      num: '05',
      title: 'Rigorous Evaluation',
      icon: LineChart,
      desc: 'Evaluate with objective metrics (PSNR, SSIM, F1-scores, ROC curves) rather than surface appearance. Stress-test under distribution shifts.'
    },
    {
      num: '06',
      title: 'Human-Centered Iteration',
      icon: RefreshCw,
      desc: 'Design intuitive interfaces that translate machine outputs into actionable, calm cues for vehicle riders, factory technicians, or web users.'
    }
  ];

  const workItems = [
    {
      id: 'fogvision',
      type: 'documented',
      title: 'FogVision: Hybrid Quantum-Classical Image Dehazing',
      tag: 'DOCUMENTED REPOSITORY',
      description: 'Fully trained two-stage dehazing system with EfficientNet-B0 and a 4-qubit PyTorch VQC bottleneck, evaluated on Foggy Cityscapes-DBF with ONNX runtime.',
      link: 'https://github.com/tamilselvan526/QuantumDehazer',
      specs: ['Cityscapes-DBF', 'PyTorch VQC', 'PSNR/SSIM Evaluated', 'ONNX Export']
    },
    {
      id: 'casting',
      type: 'documented',
      title: 'AI Casting Guard: Multi-CNN Industrial QA',
      tag: 'DOCUMENTED REPOSITORY',
      description: 'Four-class defect classifier benchmarked across Custom SE-CNN, MobileNetV2, and ResNet50 using Kaggle submersible pump impeller casting images.',
      link: 'https://github.com/tamilselvan526/Automated-casting-defect-classification-using-multiple-cnn',
      specs: ['4-Class Sorting', 'ResNet50 / MobileNet', 'Cosine Decay LR', 'Flask Server']
    },
    {
      id: 'shopkart',
      type: 'documented',
      title: 'ShopKart Full-Stack Commerce System',
      tag: 'DOCUMENTED REPOSITORY',
      description: 'End-to-end e-commerce application with React client, Redux state caching, MySQL schema, and JWT role-based access control.',
      link: 'https://github.com/tamilselvan526/shopkart',
      specs: ['React + Redux', 'Relational DB', 'JWT Auth', 'RBAC Routing']
    },
    {
      id: 'pruning',
      type: 'documented',
      title: 'Self-Pruning Neural Network with L1 Regularization',
      tag: 'DOCUMENTED REPOSITORY',
      description: 'Research implementation analyzing weight-sparsity induction during active training via L1 regularization penalties on synthetic simulation data.',
      link: 'https://github.com/tamilselvan526/self-pruning-neural-network',
      specs: ['Sparsity Analysis', 'L1 Regularization', 'Simulation Benchmark', 'Weight Pruning']
    },
    {
      id: 'concept-hud',
      type: 'proposed',
      title: 'Autonomous Vision HUD: Low-Visibility Contrast Projection',
      tag: 'PROPOSED CONCEPT // R&D EXPLORATION',
      description: 'Concept proposing the integration of edge dehazing neural filters into forward-facing assist cameras or smart visor displays to highlight lane boundaries and road hazards in real time.',
      link: null,
      specs: ['Exploratory Idea', 'Mobility Ecosystem', 'Safety UX Concept', 'Edge Vision Pipeline']
    },
    {
      id: 'concept-casting',
      type: 'proposed',
      title: 'In-Line Aluminum Die-Casting Optical QC Station',
      tag: 'PROPOSED CONCEPT // R&D EXPLORATION',
      description: 'Concept applying multi-architecture CNN defect classifiers to automated casting inspection cells for vehicle structural alloy integrity.',
      link: null,
      specs: ['Factory Concept', 'Alloy QA', 'Automated Ejection Idea', 'Computer Vision Station']
    }
  ];

  const filteredItems = workItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="research" className="py-28 relative bg-[#F5F4F0] text-[#111315] border-t border-black/10 bg-light-grid">
      
      {/* Background Subtle Coordinate Tick Marks */}
      <div className="absolute top-12 left-8 text-black/25 font-mono text-xs pointer-events-none">+ 04.RESEARCH</div>
      <div className="absolute top-12 right-8 text-black/25 font-mono text-xs pointer-events-none">// METHODOLOGY</div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 text-xs font-mono text-[#FF3B30] mb-3 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#FF3B30]" />
            // METHODOLOGY &bull; SCOPE DISTINCTION
          </div>
          
          <h2 className="font-headline text-5xl sm:text-7xl font-black text-[#111315] tracking-tight uppercase leading-[0.9]">
            RESEARCH &amp; <span className="text-[#FF3B30] inline-block">PROCESS</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#68696E] font-space mt-3 leading-relaxed">
            A structured workflow connecting rigorous mathematical formulation to physical and interactive product touchpoints. Documented codebases are strictly distinguished from exploratory design proposals.
          </p>
        </div>

        {/* 6-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.num} 
                className="p-6 bg-white border border-black/10 hover:border-[#FF3B30] rounded-xl transition-all shadow-xs group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#ECEAE5] rounded-md text-[#FF3B30] group-hover:bg-[#FF3B30] group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#68696E] group-hover:text-[#FF3B30] transition-colors">
                    PHASE {s.num}
                  </span>
                </div>
                <h3 className="font-oxanium text-base font-bold text-[#111315] mb-2 uppercase">{s.title}</h3>
                <p className="text-xs text-[#68696E] font-space leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Scope Transparency Header */}
        <div className="border-t border-black/10 pt-16 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B30] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>INTEGRITY &amp; SCOPE TRANSPARENCY</span>
              </div>
              <h3 className="font-oxanium text-2xl font-bold text-[#111315] uppercase tracking-wider">
                Documented Implementations vs. Proposed Design Concepts
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 bg-white border border-black/10 rounded-lg">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-oxanium font-bold tracking-wider uppercase rounded-md transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#FF3B30] text-white shadow-xs'
                    : 'text-[#68696E] hover:text-[#111315]'
                }`}
              >
                All Works ({workItems.length})
              </button>
              <button
                onClick={() => setActiveFilter('documented')}
                className={`px-3 py-1.5 text-xs font-oxanium font-bold tracking-wider uppercase rounded-md transition-all ${
                  activeFilter === 'documented'
                    ? 'bg-[#FF3B30] text-white shadow-xs'
                    : 'text-[#68696E] hover:text-[#111315]'
                }`}
              >
                Verified Codebases (4)
              </button>
              <button
                onClick={() => setActiveFilter('proposed')}
                className={`px-3 py-1.5 text-xs font-oxanium font-bold tracking-wider uppercase rounded-md transition-all ${
                  activeFilter === 'proposed'
                    ? 'bg-[#FF3B30] text-white shadow-xs'
                    : 'text-[#68696E] hover:text-[#111315]'
                }`}
              >
                Design Concepts (2)
              </button>
            </div>
          </div>

          <p className="text-xs text-[#68696E] font-space max-w-3xl mb-8 leading-relaxed">
            All codebases in <strong>Documented Repositories</strong> represent genuine, inspectable open-source code on GitHub. Items tagged <strong>Proposed Concept</strong> are speculative product proposals demonstrating how my ML background applies to next-generation intelligent systems.
          </p>
        </div>

        {/* Filtered Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-black/10 hover:border-[#FF3B30] rounded-xl transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono px-2.5 py-1 font-bold uppercase tracking-wider rounded-sm ${
                    item.type === 'documented'
                      ? 'bg-[#ECEAE5] text-[#111315] border border-black/10'
                      : 'bg-red-50 text-[#FF3B30] border border-[#FF3B30]/30'
                  }`}>
                    {item.tag}
                  </span>
                  {item.type === 'documented' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-[#FF3B30]" />
                  )}
                </div>

                <h4 className="font-oxanium text-base font-bold text-[#111315] mb-2 uppercase tracking-wide">
                  {item.title}
                </h4>

                <p className="text-xs text-[#68696E] font-space leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.specs.map(spec => (
                    <span
                      key={spec}
                      className="px-2 py-0.5 bg-[#ECEAE5] border border-black/5 text-[10px] font-mono text-[#111315] rounded-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF3B30] hover:underline font-bold"
                  >
                    <span>Inspect Code on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <div className="text-[11px] font-mono text-[#68696E] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-[#FF3B30]" />
                    <span>Speculative Architectural Concept</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
