import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ExternalLink, 
  BarChart3, 
  Gauge, 
  Workflow, 
  Factory, 
  CheckCircle,
  Code2
} from 'lucide-react';
import { CASTING_DEFECTS } from '../data/projectsData';

export const ProjectCasting: React.FC = () => {
  const [selectedDefectId, setSelectedDefectId] = useState('blowhole');
  const activeDefect = CASTING_DEFECTS.find(d => d.id === selectedDefectId) || CASTING_DEFECTS[0];

  return (
    <section className="py-28 relative bg-[#ECEAE5] text-[#111315] border-t border-black/10 bg-light-grid">
      
      {/* Background Subtle Coordinate Tick Marks */}
      <div className="absolute top-12 left-8 text-black/25 font-mono text-xs pointer-events-none">+ 03.DEFECT_QA</div>
      <div className="absolute top-12 right-8 text-black/25 font-mono text-xs pointer-events-none">// MULTI_CNN</div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Project Header Tag & Prominent Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 text-xs font-mono text-[#FF3B30] mb-3 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#FF3B30] shadow-[0_0_6px_#FF3B30]" />
              PROJECT 02 // INDUSTRIAL COMPUTER VISION &bull; MULTI-CNN
            </div>

            <h2 className="font-headline text-5xl sm:text-7xl font-black text-[#111315] tracking-tight uppercase leading-[0.9]">
              INTELLIGENCE ON THE <span className="text-[#FF3B30] inline-block">INSPECTION LINE</span>
            </h2>

            <div className="text-sm font-mono text-[#68696E] mt-2 tracking-wider">
              Automated Casting Defect Classification &bull; Custom SE-CNN / MobileNetV2 / ResNet50
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/tamilselvan526/Automated-casting-defect-classification-using-multiple-cnn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-white border border-[#FF3B30] text-xs font-oxanium font-bold tracking-widest text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white transition-all shadow-sm"
            >
              <Code2 className="w-4 h-4" />
              <span>EXPLORE REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Industrial Vision Context Box */}
        <div className="p-6 bg-white border border-black/10 mb-10 bracket-corner-red shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#111315] text-[#FF3B30] shrink-0 mt-0.5 rounded-sm">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-oxanium text-sm font-bold text-[#111315] uppercase tracking-wider">
                HIGH-THROUGHPUT QUALITY CONTROL FOR DIE-CAST COMPONENTS
              </h3>
              <p className="text-xs sm:text-sm text-[#68696E] font-space mt-1.5 leading-relaxed">
                Trained on the <strong className="text-[#111315]">Real-life Industrial Dataset of Casting Product</strong> (top-view images of submersible pump impellers), this system sorts casting defects into four classes: <strong className="text-[#111315]">Blowhole, Crack, Flash, and Normal</strong>. It compares a Custom CNN (with Squeeze-and-Excitation attention and SiLU), MobileNetV2 for low-compute factory edges, and ResNet50 for deep structural extraction, connected to a real-time Flask inference server.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Defect Classification Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Visual Asset & Reticle Inspection Canvas */}
          <div className="lg:col-span-7 p-5 bg-white border border-black/10 bracket-corner-red shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#68696E] flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-[#FF3B30]" />
                OPTICAL SENSOR FEED // 224x224 RGB
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-[#ECEAE5] border border-black/10 text-[#111315]">
                Kaggle Casting Dataset
              </span>
            </div>

            {/* Industrial Inspection Canvas */}
            <div className="relative aspect-[16/10] overflow-hidden border border-black/10 bg-black group select-none">
              <img
                src="/projects/casting/casting_industrial_real.jpg"
                alt="Automated Casting Defect Inspection"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Technical Reticle Overlay */}
              <div className="absolute inset-0 border border-[#FF3B30]/30 pointer-events-none p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-[10px] font-mono text-[#FF3B30] bg-black/85 px-2.5 py-1 backdrop-blur-md border border-[#FF3B30]/40">
                    TARGET: IMPELLER VANE // LIVE
                  </div>
                  <div className={`text-[10px] font-mono px-2.5 py-1 font-bold backdrop-blur-md ${
                    activeDefect.severity === 'Pass'
                      ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/50'
                      : 'bg-red-950/90 text-red-300 border border-red-500/50'
                  }`}>
                    VERDICT: {activeDefect.severity.toUpperCase()}
                  </div>
                </div>

                {/* Crosshairs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-[#FF3B30]/50 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#FF3B30]" />
                </div>

                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-mono text-white/70 bg-black/85 px-2 py-0.5">
                    TOP-VIEW PLANAR
                  </div>
                  <div className="text-[10px] font-mono text-[#FF3B30] bg-black/85 px-2.5 py-1 font-bold">
                    CLASS: {activeDefect.name.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Class Selector Buttons */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {CASTING_DEFECTS.map((defect) => (
                <button
                  key={defect.id}
                  onClick={() => setSelectedDefectId(defect.id)}
                  className={`p-3 text-left transition-all font-mono rounded-lg ${
                    selectedDefectId === defect.id
                      ? 'bg-[#111315] border border-[#FF3B30] text-white shadow-md'
                      : 'bg-[#ECEAE5] border border-black/10 text-[#68696E] hover:border-black/30 hover:text-[#111315]'
                  }`}
                >
                  <div className="text-[10px] uppercase text-[#9B9CA2]">{defect.severity}</div>
                  <div className="text-xs font-bold font-oxanium truncate mt-1">{defect.name}</div>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Multi-Model Confidence Comparison */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 bg-white border border-black/10 bracket-corner-red space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <span className="font-oxanium text-xs font-bold text-[#111315] uppercase tracking-wider flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#FF3B30]" />
                  MULTI-MODEL CONFIDENCE
                </span>
                <span className="text-[10px] font-mono text-[#FF3B30] font-bold">Keras 3</span>
              </div>

              {/* Model 1: Custom CNN with SE Attention */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#111315] font-medium">Custom CNN (SE-Attention + SiLU)</span>
                  <span className="text-[#FF3B30] font-bold">{activeDefect.predictions.customCnn}%</span>
                </div>
                <div className="w-full h-2 bg-[#ECEAE5] border border-black/10 overflow-hidden">
                  <div 
                    className="h-full bg-[#FF3B30] shadow-[0_0_8px_#FF3B30] transition-all duration-500"
                    style={{ width: `${activeDefect.predictions.customCnn}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-[#68696E] mt-1 block">VGG blocks with Squeeze-and-Excitation channel gating</span>
              </div>

              {/* Model 2: MobileNetV2 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#111315] font-medium">MobileNetV2 (Edge Factory Deploy)</span>
                  <span className="text-blue-600 font-bold">{activeDefect.predictions.mobileNet}%</span>
                </div>
                <div className="w-full h-2 bg-[#ECEAE5] border border-black/10 overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${activeDefect.predictions.mobileNet}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-[#68696E] mt-1 block">Depthwise separable convolutions (~3.5M params)</span>
              </div>

              {/* Model 3: ResNet50 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#111315] font-medium">ResNet50 (Deep Residual Extraction)</span>
                  <span className="text-emerald-600 font-bold">{activeDefect.predictions.resNet}%</span>
                </div>
                <div className="w-full h-2 bg-[#ECEAE5] border border-black/10 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-500"
                    style={{ width: `${activeDefect.predictions.resNet}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-[#68696E] mt-1 block">50-layer deep bottleneck for micro-fracture line detection</span>
              </div>

              {/* Assembly Line Disposition Action */}
              <div className="pt-4 border-t border-black/10">
                <div className="text-[11px] font-mono text-[#68696E] uppercase mb-2">FACTORY DISPOSITION ACTION:</div>
                <div className="p-3 bg-[#F5F4F0] border border-black/10 flex items-start gap-2.5">
                  {activeDefect.severity === 'Pass' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                  )}
                  <p className="text-xs font-mono text-[#111315] leading-relaxed">
                    {activeDefect.action}
                  </p>
                </div>
              </div>
            </div>

            {/* Pipeline Feature Pills */}
            <div className="p-6 bg-white border border-black/10 space-y-2.5 text-xs font-mono text-[#68696E] shadow-xs">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>Cosine-decay LR schedule with linear warmup epochs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>Industrial augmentations (rotations, shear, illumination normalization)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>Flask REST backend serving real-time predictions</span>
              </div>
            </div>

          </div>

        </div>

        {/* Conveyor Workflow Diagram */}
        <div className="p-8 bg-white border border-black/10 bracket-corner-red shadow-sm">
          <h3 className="font-oxanium text-xs font-bold text-[#111315] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-[#FF3B30]" />
            CONTINUOUS INDUSTRIAL OPTICAL INSPECTION PIPELINE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 bg-[#ECEAE5] border border-black/10 rounded-lg">
              <div className="text-xs font-mono text-[#FF3B30] font-bold mb-1">01 // OPTICAL RIG</div>
              <h4 className="font-oxanium text-sm font-bold text-[#111315] uppercase">Image Capture</h4>
              <p className="text-xs text-[#68696E] font-space mt-1.5 leading-relaxed">
                Overhead telecentric industrial camera captures high-resolution 224x224 top-view frames of impellers.
              </p>
            </div>

            <div className="p-5 bg-[#ECEAE5] border border-black/10 rounded-lg">
              <div className="text-xs font-mono text-[#FF3B30] font-bold mb-1">02 // PREPROCESSING</div>
              <h4 className="font-oxanium text-sm font-bold text-[#111315] uppercase">Glint Normalization</h4>
              <p className="text-xs text-[#68696E] font-space mt-1.5 leading-relaxed">
                Adaptive illumination filtering dampens metallic alloy reflections to isolate contour voids.
              </p>
            </div>

            <div className="p-5 bg-[#ECEAE5] border border-black/10 rounded-lg">
              <div className="text-xs font-mono text-[#FF3B30] font-bold mb-1">03 // INFERENCE</div>
              <h4 className="font-oxanium text-sm font-bold text-[#111315] uppercase">Multi-CNN Voting</h4>
              <p className="text-xs text-[#68696E] font-space mt-1.5 leading-relaxed">
                ResNet50 / MobileNetV2 evaluates confidence weights across Blowhole, Crack, Flash, and Normal.
              </p>
            </div>

            <div className="p-5 bg-[#ECEAE5] border border-black/10 rounded-lg">
              <div className="text-xs font-mono text-[#FF3B30] font-bold mb-1">04 // ACTUATION</div>
              <h4 className="font-oxanium text-sm font-bold text-[#111315] uppercase">Automated Sorter</h4>
              <p className="text-xs text-[#68696E] font-space mt-1.5 leading-relaxed">
                Pneumatic diverters quarantine defective castings within 120ms of conveyor transit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
