import React, { useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { VisionEyeIcon } from './Icons';

export const Hero: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const cards = [
    {
      id: 1,
      title: 'Neural Vision Core',
      category: 'QUANTUM ML // VQC',
      image: '/assets/ai_vision_core.jpg',
      rotation: -22,
      xOffset: -260,
      yOffset: 25,
      zIndex: 10,
      target: '#work',
      isRed: false,
    },
    {
      id: 2,
      title: 'AI Lab Research',
      category: 'SRM IST // RESEARCH',
      image: null, // Graphic Red Card
      rotation: -11,
      xOffset: -130,
      yOffset: 10,
      zIndex: 15,
      target: '#about',
      isRed: true,
    },
    {
      id: 3,
      title: 'Tamilselvan P',
      category: 'AI / ML ENGINEER',
      image: '/assets/tamilselvan_headshot.jpg', // Genuine professional headshot
      rotation: 0,
      xOffset: 0,
      yOffset: -15,
      zIndex: 25,
      target: '#about',
      isRed: false,
    },
    {
      id: 4,
      title: 'Autonomous Mobility',
      category: '1:1 // PERCEPTION',
      image: '/assets/card_vehicle.jpg',
      rotation: 11,
      xOffset: 130,
      yOffset: 10,
      zIndex: 15,
      target: '#work',
      isRed: false,
    },
    {
      id: 5,
      title: 'Industrial QA Guard',
      category: 'REALISTIC AOI // 04',
      image: '/projects/casting/casting_industrial_real.jpg', // Realistic factory inspection
      rotation: 22,
      xOffset: 260,
      yOffset: 25,
      zIndex: 10,
      target: '#work',
      isRed: false,
    },
  ];

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[105vh] pt-28 pb-20 overflow-hidden bg-light-grid flex flex-col justify-between w-full"
    >
      {/* Precision Grid Crosshair Markers (+) across full width */}
      <div className="absolute top-28 left-6 sm:left-12 text-black/30 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute top-28 right-6 sm:right-12 text-black/30 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute top-1/2 left-6 sm:left-12 text-black/30 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute top-1/2 right-6 sm:right-12 text-black/30 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute bottom-16 left-6 sm:left-12 text-black/30 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute bottom-16 right-6 sm:right-12 text-black/30 font-mono text-sm pointer-events-none select-none">+</div>

      {/* Main Expansive Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Top Header Row (Reference: "WELCOME TO MY" + Eye symbol) */}
        <div className="flex items-center justify-between pt-2 pb-6 border-b border-black/10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-1.5 h-6 bg-[#FF3B30] inline-block" />
            <div className="font-oxanium text-xs font-black tracking-[0.25em] text-[#111315] uppercase leading-tight">
              WELCOME<br />TO MY
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="hidden sm:block text-right">
              <span className="text-[10px] font-mono text-[#68696E] uppercase tracking-widest block">
                SPECIALIZATION
              </span>
              <span className="text-xs font-oxanium font-bold text-[#111315] uppercase">
                AI / ML &bull; COMPUTER VISION &bull; QUANTUM HYBRIDS
              </span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center hover:bg-[#FF3B30] transition-colors cursor-pointer shadow-xs">
              <VisionEyeIcon className="w-5 h-5 text-current" />
            </div>
          </motion.div>
        </div>

        {/* Center Typographic Stage with Vertical Red Rectangle */}
        <div className="relative pt-10 pb-12 text-center select-none">
          
          {/* Centered Vivid Coral-Red Geometric Block */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-36 sm:w-52 md:w-64 lg:w-72 h-[300px] sm:h-[380px] md:h-[460px] bg-[#FF3B30] shadow-[0_15px_45px_rgba(255,59,48,0.35)] origin-top z-0"
          />

          {/* Tri-Layer Kinetic Distortion Typography */}
          <div className="relative z-10 w-full max-w-[1700px] mx-auto">
            
            {/* Top Distorted Word: "POR" */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-left pl-6 sm:pl-16 md:pl-32 lg:pl-48 -mb-4 sm:-mb-8 md:-mb-14"
            >
              <span className="font-headline italic text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black text-[#111315] tracking-tighter uppercase inline-block transform -skew-x-12">
                POR
              </span>
            </motion.div>

            {/* Middle Outlined Massive Word: "PORTFOLIO" Overlapping Red Rectangle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative px-2"
            >
              <h1 className="font-headline text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] xl:text-[16.5rem] font-black tracking-tight uppercase leading-[0.9] text-stroke-thick-black drop-shadow-sm">
                PORTFOLIO
              </h1>
            </motion.div>

            {/* Bottom Solid Slanted Word: "FOLIO" */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-right pr-6 sm:pr-16 md:pr-32 lg:pr-48 -mt-4 sm:-mt-8 md:-mt-14"
            >
              <span className="font-headline text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black text-[#111315] tracking-tighter uppercase inline-block transform skew-x-6">
                FOLIO
              </span>
            </motion.div>

          </div>

          {/* Secondary Editorial Subtitles */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-between max-w-5xl mx-auto px-4 mt-6 text-xs sm:text-sm font-oxanium font-bold tracking-[0.25em] text-[#111315] uppercase"
          >
            <span>TAMILSELVAN.P</span>
            <span className="text-[#FF3B30] text-lg">&bull;</span>
            <span>AI / ML SYSTEMS &bull; COMPUTER VISION &bull; QUANTUM HYBRIDS</span>
          </motion.div>

        </div>

        {/* Floating Arc Project Cards Section */}
        <div className="relative mt-4 sm:mt-8 pb-20 flex justify-center items-center">
          
          {/* Circular Compass Dial Graphic Underneath Cards */}
          <div className="absolute -bottom-32 sm:-bottom-24 left-1/2 -translate-x-1/2 w-[420px] sm:w-[650px] md:w-[880px] lg:w-[1100px] h-[420px] sm:h-[650px] md:h-[880px] lg:h-[1100px] rounded-full border border-dashed border-black/20 pointer-events-none select-none z-0">
            <div className="absolute inset-6 sm:inset-10 rounded-full border border-black/10" />
            <div className="absolute inset-16 sm:inset-28 rounded-full border border-dashed border-black/15" />
            
            {/* Top Compass Marker: "ME" Needle */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="font-oxanium text-xs font-black tracking-widest text-[#111315]">ME</span>
              <div className="w-1.5 h-3.5 bg-[#FF3B30] mt-0.5" />
            </div>

            {/* Rotational Text Ring */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-black">
                PORTFOLIO &bull; INTELLIGENCE &bull; VISION &bull; SYSTEMS &bull; QUANTUM ML &bull; SRM IST
              </span>
            </div>
          </div>

          {/* Floating Cards Deck */}
          <div className="relative w-full max-w-6xl h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center z-10">
            
            {cards.map((card, index) => {
              const isHovered = hoveredCard === card.id;
              
              // Dynamic parallax displacement based on mouse movement
              const parallaxX = mousePos.x * (index - 2) * 20;
              const parallaxY = mousePos.y * 15;

              return (
                <motion.a
                  key={card.id}
                  href={card.target}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, y: 100, rotate: card.rotation }}
                  animate={{ 
                    opacity: 1, 
                    y: isHovered ? -30 : card.yOffset + parallaxY,
                    x: card.xOffset + parallaxX,
                    rotate: isHovered ? 0 : card.rotation,
                    scale: isHovered ? 1.08 : 1,
                  }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 220,
                    damping: 20
                  }}
                  style={{ zIndex: isHovered ? 40 : card.zIndex }}
                  className={`absolute w-36 sm:w-48 md:w-60 lg:w-64 rounded-2xl overflow-hidden card-depth-shadow cursor-pointer transition-shadow border ${
                    card.isRed 
                      ? 'bg-[#FF3B30] border-[#FF3B30] text-white p-5 flex flex-col justify-between'
                      : 'bg-[#111315] border-black/20 text-white'
                  }`}
                >
                  {card.isRed ? (
                    // Coral-Red Graphic Card (Reference Card 2)
                    <div className="h-48 sm:h-64 md:h-80 flex flex-col justify-between select-none">
                      <div className="flex items-center justify-between text-white/80">
                        <span className="text-[10px] font-mono font-bold tracking-widest">SRM IST</span>
                        <span className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      <div className="flex flex-col items-center justify-center my-auto py-6">
                        <div className="w-16 h-16 rounded-2xl bg-black/15 flex items-center justify-center mb-3">
                          <VisionEyeIcon className="w-10 h-10 text-white" />
                        </div>
                        <span className="font-oxanium text-sm font-extrabold tracking-widest text-white text-center">
                          AI &bull; ML CORE
                        </span>
                      </div>

                      <div className="pt-2 border-t border-white/20 flex justify-between items-center text-[10px] font-mono">
                        <span>RESEARCH</span>
                        <span>2026 // ED</span>
                      </div>
                    </div>
                  ) : (
                    // Image Project Card (Portrait, Vehicle, FogVision, Defect)
                    <div className="relative group select-none">
                      <div className="aspect-[3/4] w-full overflow-hidden bg-black/80">
                        <img 
                          src={card.image!} 
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Card Overlay Details */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-center">
                          <span className="px-2 py-0.5 bg-black/75 backdrop-blur-md text-[9px] font-mono text-[#FF3B30] uppercase tracking-wider rounded-sm font-bold">
                            {card.category}
                          </span>
                          <span className="text-[9px] font-mono text-white/70">0{card.id}</span>
                        </div>

                        <div>
                          <div className="font-oxanium text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-tight">
                            {card.title}
                          </div>
                          <div className="flex items-center gap-1 text-[9px] font-mono text-white/70 mt-1">
                            <span>EXPLORE CASE</span>
                            <ChevronRight className="w-3 h-3 text-[#FF3B30]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.a>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA / Ticker Strip */}
        <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FF3B30] text-white font-oxanium font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#e03126] hover:shadow-[0_0_25px_rgba(255,59,48,0.4)] transition-all group"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-black/15 text-[#111315] font-oxanium font-bold text-xs tracking-widest uppercase hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
            >
              <span>ABOUT ARCHITECTURE</span>
            </a>
          </div>

          <div className="text-[11px] font-mono text-[#68696E] uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B30]" />
            <span>FOGVISION DEHAZING</span>
            <span className="text-black/30">/</span>
            <span>CASTING QA MULTI-CNN</span>
            <span className="text-black/30">/</span>
            <span>SHOPKART FULL-STACK</span>
          </div>
        </div>

      </div>

    </section>
  );
};
