import React, { useState } from 'react';
import { 
  Eye, 
  Layers, 
  Cpu, 
  Sliders, 
  ExternalLink, 
  Activity, 
  Code2, 
  Workflow,
  Zap
} from 'lucide-react';
import { FOG_VISION_SAMPLES } from '../data/projectsData';

export const ProjectFogVision: React.FC = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'comparison' | 'architecture' | 'code'>('comparison');

  const currentSample = FOG_VISION_SAMPLES[activeSampleIndex];

  return (
    <section id="work" className="py-28 relative bg-[#090A0C] text-white overflow-hidden bg-dark-grid">
      
      {/* Background Ambient Coral Glow */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Project Header Tag & Prominent Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131417] border border-white/10 text-xs font-mono text-[#FF3B30] mb-3 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#FF3B30] shadow-[0_0_6px_#FF3B30]" />
              PROJECT 01 // COMPUTER VISION &bull; QUANTUM HYBRID
            </div>
            
            <h2 className="font-headline text-5xl sm:text-7xl font-black text-white tracking-tight uppercase leading-[0.9]">
              SEE THROUGH <span className="text-[#FF3B30] inline-block">THE FOG</span>
            </h2>
            
            <div className="text-sm font-mono text-[#9B9CA2] mt-2 tracking-wider">
              FogVision &bull; Hybrid Quantum-Classical Image Dehazing Pipeline
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/tamilselvan526/QuantumDehazer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#131417] border border-[#FF3B30]/40 text-xs font-oxanium font-bold tracking-widest text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white transition-all shadow-[0_0_15px_rgba(255,59,48,0.2)]"
            >
              <Code2 className="w-4 h-4" />
              <span>EXPLORE REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Narrative & Problem Formulation */}
        <div className="p-6 bg-[#131417] border border-white/10 mb-10 bracket-corner-red">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-oxanium text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#FF3B30]" />
                AUTONOMOUS VEHICLE PERCEPTION UNDER HARSH AEROSOL SCATTERING
              </h3>
              <p className="text-xs sm:text-sm text-[#9B9CA2] font-space leading-relaxed">
                Atmospheric aerosol particles scatter incoming light, causing rapid exponential contrast decay and chromatic shifting in autonomous vision sensors. FogVision combines an <strong className="text-white">EfficientNet-B0 density classifier</strong> with a <strong className="text-[#FF3B30]">hybrid quantum-classical U-Net</strong> containing a 4-qubit parameterized Variational Quantum Circuit (VQC) bottleneck, evaluated on the Foggy Cityscapes-DBF dataset.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2 font-mono text-xs text-[#9B9CA2] border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
              <div><span className="text-white font-bold">DATASET:</span> Foggy Cityscapes-DBF</div>
              <div><span className="text-white font-bold">CIRCUIT:</span> 4 Qubits / 2 Parameterized Layers</div>
              <div><span className="text-white font-bold">RUNTIME:</span> ONNX Runtime + Next.js 15</div>
            </div>
          </div>
        </div>

        {/* Interactive Mode Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 mb-8 pb-3">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-oxanium font-bold tracking-wider uppercase transition-all ${
              activeTab === 'comparison'
                ? 'bg-[#FF3B30] text-white shadow-[0_0_15px_rgba(255,59,48,0.4)]'
                : 'bg-[#131417] text-[#9B9CA2] hover:text-white border border-white/10'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Dehazing Slider</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-oxanium font-bold tracking-wider uppercase transition-all ${
              activeTab === 'architecture'
                ? 'bg-[#FF3B30] text-white shadow-[0_0_15px_rgba(255,59,48,0.4)]'
                : 'bg-[#131417] text-[#9B9CA2] hover:text-white border border-white/10'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Architecture Diagram</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-oxanium font-bold tracking-wider uppercase transition-all ${
              activeTab === 'code'
                ? 'bg-[#FF3B30] text-white shadow-[0_0_15px_rgba(255,59,48,0.4)]'
                : 'bg-[#131417] text-[#9B9CA2] hover:text-white border border-white/10'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Differentiable VQC Tensor Spec</span>
          </button>
        </div>

        {/* Tab 1: Interactive Before/After Image Comparison Slider */}
        {activeTab === 'comparison' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Visual Viewport Column */}
            <div className="lg:col-span-8 p-5 bg-[#131417] border border-white/10 bracket-corner-red">
              
              {/* Sample Selector Controls */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#9B9CA2]">TEST CONDITION:</span>
                  {FOG_VISION_SAMPLES.map((sample, idx) => (
                    <button
                      key={sample.id}
                      onClick={() => setActiveSampleIndex(idx)}
                      className={`px-3 py-1 text-xs font-mono transition-all ${
                        activeSampleIndex === idx
                          ? 'bg-[#FF3B30] text-white border border-[#FF3B30] font-bold shadow-[0_0_8px_rgba(255,59,48,0.4)]'
                          : 'bg-[#090A0C] text-[#9B9CA2] border border-white/10 hover:text-white'
                      }`}
                    >
                      {sample.beta}
                    </button>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-[#9B9CA2]">
                  Cityscapes-DBF Dataset Validated
                </div>
              </div>

              {/* Interactive Image Split Canvas */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/10 select-none bg-black">
                
                {/* Restored Output (Base Image) */}
                <img
                  src={currentSample.restoredUrl}
                  alt="Restored Quantum Dehazed Output"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foggy Input (Clipped Top Layer) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentSample.foggyUrl}
                    alt="Degraded Foggy Input"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-red-500/40 text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
                    DEGRADED INPUT ({currentSample.beta})
                  </div>
                </div>

                {/* Restored Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-[#FF3B30]/40 text-[10px] font-mono text-[#FF3B30] font-bold uppercase tracking-wider">
                  FOGVISION QUANTUM RESTORED
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-[#FF3B30] pointer-events-none shadow-[0_0_12px_#FF3B30]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FF3B30] border-2 border-white flex items-center justify-center shadow-[0_0_15px_#FF3B30]">
                    <Sliders className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Range Input Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="comparison-slider absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Image comparison slider"
                />
              </div>

              {/* Slider instruction */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#9B9CA2]">
                <span>&larr; Drag to inspect structural recovery &amp; lane boundaries &rarr;</span>
                <span className="text-[#FF3B30] font-bold font-mono">{sliderPosition}% SPLIT</span>
              </div>
            </div>

            {/* Metrics & Architecture Telemetry */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="p-6 bg-[#131417] border border-white/10 bracket-corner-red space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-oxanium text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF3B30]" />
                    RECONSTRUCTION TELEMETRY
                  </span>
                  <span className="text-[10px] font-mono text-[#FF3B30]">VERIFIED</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#9B9CA2]">Peak SNR (PSNR)</span>
                    <span className="text-[#FF3B30] font-bold">
                      {currentSample.restoredMetrics.psnr} dB 
                      <span className="text-[10px] text-[#9B9CA2] ml-1">
                        (+{(currentSample.restoredMetrics.psnr - currentSample.inputMetrics.psnr).toFixed(2)} dB)
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#090A0C] border border-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-[#FF3B30] shadow-[0_0_8px_#FF3B30] transition-all duration-500"
                      style={{ width: `${(currentSample.restoredMetrics.psnr / 35) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#9B9CA2]">Structural Similarity (SSIM)</span>
                    <span className="text-[#FF3B30] font-bold">
                      {currentSample.restoredMetrics.ssim.toFixed(3)}
                      <span className="text-[10px] text-[#9B9CA2] ml-1">
                        (+{(currentSample.restoredMetrics.ssim - currentSample.inputMetrics.ssim).toFixed(3)})
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#090A0C] border border-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-[#FF3B30] shadow-[0_0_8px_#FF3B30] transition-all duration-500"
                      style={{ width: `${currentSample.restoredMetrics.ssim * 100}%` }}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono text-[#9B9CA2]">
                  <div className="flex justify-between">
                    <span>Density Classifier:</span>
                    <span className="text-white font-bold">{currentSample.beta === 'β = 0.010' ? 'Medium Fog (Class 2)' : 'Light Fog (Class 1)'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Backbone:</span>
                    <span className="text-white">EfficientNet-B0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bottleneck:</span>
                    <span className="text-white">4 Qubits / 2 Layers</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loss Function:</span>
                    <span className="text-[#FF3B30]">Charbonnier + SSIM + Edge</span>
                  </div>
                </div>
              </div>

              {/* Engineering Takeaways Box */}
              <div className="p-6 bg-[#131417] border border-white/10 space-y-3">
                <div className="text-xs font-oxanium font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FF3B30]" />
                  KEY INNOVATIONS
                </div>
                <p className="text-xs text-[#9B9CA2] font-space leading-relaxed">
                  The VQC bottleneck is implemented as a differentiable PyTorch module using explicit Ry rotation and CNOT matrix mathematics, making the hybrid model directly exportable to ONNX for low-latency inference on edge platforms without external quantum cloud dependencies.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Visual Architecture Pipeline */}
        {activeTab === 'architecture' && (
          <div className="p-8 bg-[#131417] border border-white/10 bracket-corner-red">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-mono text-[#FF3B30] tracking-[0.2em] uppercase">// SYSTEM ARCHITECTURE</span>
                <h3 className="font-oxanium text-2xl sm:text-3xl font-extrabold text-white mt-1 uppercase">
                  Dual-Phase Quantum-Classical Pipeline
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-6 bg-[#090A0C] border border-white/10">
                  <div className="text-[10px] font-mono text-[#FF3B30] font-bold mb-1">STAGE 01 // CLASSIFICATION</div>
                  <h4 className="font-oxanium text-sm font-bold text-white uppercase flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#FF3B30]" />
                    Density Classifier
                  </h4>
                  <p className="text-xs text-[#9B9CA2] font-space mt-2 leading-relaxed">
                    EfficientNet-B0 backbone with adaptive classification head sorting input frames into 4 density bins: [Clear, Light, Medium, Dense].
                  </p>
                </div>

                <div className="p-6 bg-[#090A0C] border border-[#FF3B30]/50 shadow-[0_0_20px_rgba(255,59,48,0.2)]">
                  <div className="text-[10px] font-mono text-[#FF3B30] font-bold mb-1">STAGE 02 // QUANTUM HYBRID</div>
                  <h4 className="font-oxanium text-sm font-bold text-white uppercase flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#FF3B30]" />
                    4-Qubit VQC Bottleneck
                  </h4>
                  <p className="text-xs text-[#9B9CA2] font-space mt-2 leading-relaxed">
                    Latent representations pass through parameterized single-qubit Ry rotations and cyclic CNOT entanglement gates in Hilbert space.
                  </p>
                </div>

                <div className="p-6 bg-[#090A0C] border border-white/10">
                  <div className="text-[10px] font-mono text-[#FF3B30] font-bold mb-1">STAGE 03 // DEPLOYMENT</div>
                  <h4 className="font-oxanium text-sm font-bold text-white uppercase flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#FF3B30]" />
                    ONNX Runtime &amp; Next.js
                  </h4>
                  <p className="text-xs text-[#9B9CA2] font-space mt-2 leading-relaxed">
                    Exported into optimized ONNX graph running under 30ms latency on CPU/GPU, hot-bridged to a Next.js 15 user interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Code Spec */}
        {activeTab === 'code' && (
          <div className="p-7 bg-black border border-white/10 font-mono text-xs overflow-x-auto bracket-corner-red">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-[#9B9CA2]">
              <span>models/quantum_restoration.py &bull; FastVectorizedVQCSimulator</span>
              <span className="text-[#FF3B30]">PyTorch Tensor Matrix Simulation (ONNX Exportable)</span>
            </div>
            <pre className="text-white leading-relaxed">
{`# 4-Qubit Variational Quantum Circuit (VQC) Bottleneck Layer
# Implemented with differentiable PyTorch matrix operations for native ONNX exportability

class FastVectorizedVQCSimulator(nn.Module):
    def __init__(self, n_qubits: int = 4, n_layers: int = 2):
        super().__init__()
        self.n_qubits = n_qubits
        self.n_layers = n_layers
        # Parameterized rotation angles (Ry)
        self.weights = nn.Parameter(torch.randn(n_layers, n_qubits))
        
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # x shape: [B, n_qubits] normalized feature representation
        # Computes single-qubit rotations Ry(theta) followed by cyclic CNOT entanglement gates
        state = self.initialize_state(x)
        for layer in range(self.n_layers):
            state = self.apply_ry_rotations(state, self.weights[layer])
            state = self.apply_cnot_entanglement(state)
        # Pauli-Z expectation values extracted as enhanced latent representation
        return self.measure_expectations(state)`}
            </pre>
          </div>
        )}

      </div>
    </section>
  );
};
