import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EchoOrbitalPreloaderProps {
  onComplete?: () => void;
}

export const EchoOrbitalPreloader: React.FC<EchoOrbitalPreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasSeenPreloader = sessionStorage.getItem('echo_preloader_seen');
    if (hasSeenPreloader === 'true') {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Lock page scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Canvas animation setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();
    const duration = 1800; // 1.8s total smooth intro

    // Orbital configuration
    const rings = [
      { baseRadius: 65, dots: 36, waves: 4, speed: 0.0025, amp: 8, color: 'rgba(235, 77, 109, 0.9)' },
      { baseRadius: 105, dots: 48, waves: 6, speed: -0.002, amp: 12, color: 'rgba(250, 247, 243, 0.85)' },
      { baseRadius: 150, dots: 64, waves: 5, speed: 0.0015, amp: 14, color: 'rgba(255, 255, 255, 0.5)' },
      { baseRadius: 195, dots: 72, waves: 7, speed: -0.001, amp: 10, color: 'rgba(235, 77, 109, 0.4)' },
    ];

    const render = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Smooth cubic easing for counter
      const easeProgress = Math.round((1 - Math.pow(1 - t, 3)) * 100);
      setProgress(easeProgress);

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 20;

      // Center glowing core
      const pulse = 1 + Math.sin(now * 0.005) * 0.15;
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        35 * pulse
      );
      gradient.addColorStop(0, 'rgba(235, 77, 109, 0.45)');
      gradient.addColorStop(0.5, 'rgba(235, 77, 109, 0.12)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 35 * pulse, 0, Math.PI * 2);
      ctx.fill();

      // Center tiny white nucleus
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbital rings
      rings.forEach((ring) => {
        const step = (Math.PI * 2) / ring.dots;
        for (let i = 0; i < ring.dots; i++) {
          const angle = i * step + now * ring.speed;
          // Harmonic wave modulation
          const wave = Math.sin(angle * ring.waves + now * 0.003) * ring.amp;
          const currentRadius = (ring.baseRadius + wave) * (0.4 + 0.6 * t);

          const x = centerX + Math.cos(angle) * currentRadius;
          const y = centerY + Math.sin(angle) * currentRadius;

          const dotSize = (1.2 + Math.sin(i + now * 0.004) * 0.6) * Math.min(1, t * 1.5);

          ctx.fillStyle = ring.color;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.8, dotSize), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (t < 1) {
        animationFrameRef.current = requestAnimationFrame(render);
      } else {
        // Complete preloader and dissolve
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = '';
          sessionStorage.setItem('echo_preloader_seen', 'true');
          if (onComplete) onComplete();
        }, 250);
      }
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Handle instant skip on click or ESC key
  const handleDismiss = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
    sessionStorage.setItem('echo_preloader_seen', 'true');
    if (onComplete) onComplete();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(10px)',
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#0A0B0D] flex flex-col items-center justify-center select-none cursor-pointer"
          onClick={handleDismiss}
        >
          {/* Orbital Canvas Engine */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Minimalist Central Telemetry */}
          <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none mt-56 sm:mt-64">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB4D6D] animate-ping" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
                ECHO // ORBITAL INITIALIZATION
              </span>
            </div>

            <h1 className="font-archivo font-black text-2xl sm:text-3xl text-white tracking-widest uppercase">
              TAMILSELVAN P
            </h1>

            <div className="flex items-center gap-4 mt-3">
              <span className="font-mono text-xs text-[#EB4D6D] tracking-widest">
                {String(progress).padStart(3, '0')}%
              </span>
              <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#EB4D6D] to-white transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-white/40 tracking-wider">
                READY
              </span>
            </div>
          </div>

          {/* Bottom subtle hint */}
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/20 tracking-widest uppercase pointer-events-none hidden sm:block">
            CLICK OR [ESC] TO SKIP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
