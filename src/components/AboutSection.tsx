import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowUpRight, 
  Cpu, 
  Eye, 
  Workflow, 
  Database,
  Award,
  BookOpen,
  Code2,
  Binary
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AboutSection: React.FC = () => {
  const [activeDoor, setActiveDoor] = useState<'who' | 'what' | 'think'>('who');

  const doors = [
    {
      id: 'who' as const,
      num: '01',
      kicker: '( Identity )',
      title: 'Who I Am',
      subtitle: 'Tamilselvan P — B.Tech CSE (AI & ML) at SRM Institute of Science and Technology.',
      image: '/assets/tamilselvan_headshot.jpg', // Genuine professional portrait
      fullText: 'I am Tamilselvan P, an AI / ML engineer and computer science undergraduate at SRM Institute of Science and Technology, Kattankulathur, Chennai. My work lives at the intersection of deep mathematical machine learning research and real-world software engineering. Rather than building models that stay confined to Kaggle notebooks, I formulate custom loss functions, train novel vision architectures, and engineer sub-30ms production deployment pipelines.',
      tags: ['SRM IST Chennai', 'AI & ML Major (2022-2026)', 'Deep Learning', 'Computer Vision']
    },
    {
      id: 'what' as const,
      num: '02',
      kicker: '( Craft )',
      title: 'What I Do',
      subtitle: 'Computer Vision · Quantum-Classical Neural Latents · Edge Model Deployment',
      image: '/assets/ai_vision_core.jpg',
      fullText: 'My technical stack spans end-to-end perception engineering: building U-Net encoder-decoder architectures with skip connections and attention gating for harsh image restoration (FogVision), training 4-class multi-CNN industrial defect classifiers (AI Casting Guard), and integrating 4-qubit variational quantum circuit (VQC) bottlenecks in PyTorch. I export neural graphs to ONNX Runtime and build responsive full-stack applications with React 19, TypeScript, and REST APIs.',
      tags: ['PyTorch 2.x', 'U-Net Vision', 'VQC Quantum Circuits', 'ONNX Runtime', 'React 19']
    },
    {
      id: 'think' as const,
      num: '03',
      kicker: '( Approach )',
      title: 'How I Think',
      subtitle: 'Physical Grounding · Rigorous Benchmarking · Human-Centered System Ergonomics',
      image: '/projects/casting/casting_industrial_real.jpg', // Realistic industrial inspection
      fullText: 'I approach machine learning through physical grounding. In atmospheric vision, models must account for exponential light attenuation (Koschmieder scatter equation). In industrial die-casting quality control, models must isolate thermal contraction micro-fractures amidst metallic surface glare. I evaluate systems using empirical telemetry (PSNR, SSIM, F1-scores, latency) rather than surface appearance, ensuring machine outputs become trustworthy product experiences.',
      tags: ['Physics-Grounded ML', 'Objective Telemetry', 'Sub-30ms Edge Budget', 'System Ergonomics']
    }
  ];

  const currentDoor = doors.find(d => d.id === activeDoor) || doors[0];

  const academicHighlights = [
    {
      icon: BookOpen,
      title: 'Core AI / ML Curriculum',
      desc: 'Advanced Deep Learning, Computer Vision, Quantum Computing, Neural Optimization, Distributed Systems, Data Structures & Algorithms.'
    },
    {
      icon: Binary,
      title: 'Hybrid Quantum Computing',
      desc: 'Parameterized Variational Quantum Circuits (VQC) in PennyLane and differentiable PyTorch tensor matrix simulation for Hilbert latent compression.'
    },
    {
      icon: Code2,
      title: 'Full-Stack Integration',
      desc: 'Translating Python model checkpoints into ONNX runtime engines, Flask/REST backends, and decoupled React 19 user interfaces.'
    },
    {
      icon: Award,
      title: 'Open Source Track Record',
      desc: 'Active developer of 4 verified GitHub repositories with full codebases, benchmark telemetry, and end-to-end reproducible documentation.'
    }
  ];

  return (
    <section id="about" className="py-28 bg-[#F5F4F0] border-t border-black/10 relative overflow-hidden w-full">
      
      {/* Background Subtle Coordinate Tick Marks */}
      <div className="absolute top-12 left-6 sm:left-12 text-black/25 font-mono text-xs pointer-events-none">+ 02.ABOUT</div>
      <div className="absolute top-12 right-6 sm:right-12 text-black/25 font-mono text-xs pointer-events-none">// IDENTITY</div>
      <div className="absolute bottom-12 right-6 sm:right-12 text-black/25 font-mono text-xs pointer-events-none">+ FULL_SCREEN</div>

      {/* Expansive Full-Width Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Section Identifier Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#FF3B30]" />
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#111315] uppercase">
            // 02 &bull; ABOUT &bull; SYSTEM IDENTITY &bull; SRM IST
          </span>
        </div>

        {/* Large Typographic Statement (Clean and properly padded so no text clips) */}
        <div className="mb-16 pt-2 max-w-6xl">
          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-[#111315] tracking-tight uppercase leading-[0.95]">
            FROM VISUAL DATA<br />
            TO <span className="text-[#FF3B30] inline-block">INTELLIGENT</span><br />
            EXPERIENCES.
          </h2>
          <div className="w-20 h-1.5 bg-[#FF3B30] mt-6" />
        </div>

        {/* 3 Interactive Doors / Cards (Expands gracefully across full width) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {doors.map((door) => {
            const isSelected = activeDoor === door.id;

            return (
              <button
                key={door.id}
                type="button"
                onClick={() => setActiveDoor(door.id)}
                className={`text-left p-6 sm:p-8 rounded-2xl transition-all duration-300 relative border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#FF3B30] shadow-xl ring-2 ring-[#FF3B30]/30'
                    : 'bg-[#ECEAE5] border-black/10 hover:border-black/30 hover:bg-white/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-black ${isSelected ? 'text-[#FF3B30]' : 'text-[#68696E]'}`}>
                      {door.num}
                    </span>
                    <span className="text-xs font-mono text-[#68696E]">{door.kicker}</span>
                  </div>

                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 bg-black/10 shadow-xs">
                    <img 
                      src={door.image} 
                      alt={door.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <h3 className="font-oxanium text-2xl lg:text-3xl font-bold text-[#111315] uppercase mb-2">
                    {door.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#68696E] font-space line-clamp-2">
                    {door.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-[#FF3B30] font-bold' : 'text-[#68696E]'}>
                    {isSelected ? 'ACTIVE VIEW' : 'EXPAND DETAILS'}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#FF3B30] text-white' : 'bg-black/5 text-[#111315]'
                  }`}>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Door Expanded Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDoor.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 bg-white rounded-2xl border border-black/10 shadow-sm mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 text-xs font-mono text-[#FF3B30] uppercase rounded-xs">
                  <span>{currentDoor.num}</span>
                  <span>&bull;</span>
                  <span>{currentDoor.kicker}</span>
                </div>

                <h3 className="font-oxanium text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] uppercase">
                  {currentDoor.title} &mdash; <span className="text-[#FF3B30]">Deep Dive</span>
                </h3>

                <p className="text-sm sm:text-base text-[#111315] font-space leading-relaxed">
                  {currentDoor.fullText}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentDoor.tags.map((t) => (
                    <span 
                      key={t}
                      className="px-3.5 py-1.5 rounded-full bg-[#ECEAE5] text-xs font-mono text-[#111315] border border-black/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-6 bg-[#ECEAE5] rounded-xl border border-black/10 space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-oxanium font-bold uppercase text-[#111315]">
                    <GraduationCap className="w-4 h-4 text-[#FF3B30]" />
                    <span>ACADEMIC FOUNDATION</span>
                  </div>
                  <div className="text-sm text-[#111315] font-space font-bold">
                    SRM Institute of Science and Technology
                  </div>
                  <div className="text-xs text-[#68696E] font-mono leading-relaxed">
                    B.Tech Computer Science &amp; Engineering<br />
                    Specialization: Artificial Intelligence &amp; Machine Learning<br />
                    Location: Kattankulathur, Chennai, India (2022&ndash;2026)
                  </div>
                  <div className="pt-2 border-t border-black/10 text-[11px] font-mono text-[#FF3B30] font-bold">
                    VERIFIED ENROLLMENT &bull; ACTIVE RESEARCH
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Detailed Academic & Engineering Competencies (Rich Addition requested by user) */}
        <div className="mb-16">
          <div className="text-xs font-mono text-[#68696E] uppercase tracking-widest mb-4">
            // SPECIALIZED ENGINEERING METHODOLOGY &amp; RIGOR
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {academicHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 bg-white rounded-xl border border-black/10 hover:border-[#FF3B30] transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#ECEAE5] flex items-center justify-center mb-4 text-[#FF3B30]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-oxanium font-bold text-base text-[#111315] uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#68696E] font-space leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Pillars Grid (4 Columns spanning full width) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 bg-white rounded-xl border border-black/10 hover:border-[#FF3B30] transition-colors shadow-2xs">
            <Eye className="w-6 h-6 text-[#FF3B30] mb-3" />
            <div className="font-oxanium font-bold text-sm sm:text-base text-[#111315] uppercase">COMPUTER VISION</div>
            <div className="text-xs text-[#68696E] font-space mt-1">U-Net &bull; Multi-CNNs &bull; Edge Restoration</div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-black/10 hover:border-[#FF3B30] transition-colors shadow-2xs">
            <Cpu className="w-6 h-6 text-[#FF3B30] mb-3" />
            <div className="font-oxanium font-bold text-sm sm:text-base text-[#111315] uppercase">QUANTUM ML</div>
            <div className="text-xs text-[#68696E] font-space mt-1">4-Qubit VQC &bull; Hilbert Latents &bull; PennyLane</div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-black/10 hover:border-[#FF3B30] transition-colors shadow-2xs">
            <Workflow className="w-6 h-6 text-[#FF3B30] mb-3" />
            <div className="font-oxanium font-bold text-sm sm:text-base text-[#111315] uppercase">EDGE INFERENCE</div>
            <div className="text-xs text-[#68696E] font-space mt-1">ONNX Runtime &bull; REST &bull; &lt;30ms Latency</div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-black/10 hover:border-[#FF3B30] transition-colors shadow-2xs">
            <Database className="w-6 h-6 text-[#FF3B30] mb-3" />
            <div className="font-oxanium font-bold text-sm sm:text-base text-[#111315] uppercase">FULL-STACK SYSTEMS</div>
            <div className="text-xs text-[#68696E] font-space mt-1">React 19 &bull; Redux &bull; MySQL &bull; TypeScript</div>
          </div>
        </div>

      </div>

    </section>
  );
};
