import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  github: string;
  liveDemo?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none overflow-y-auto">
          {/* Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0C0E]/80 backdrop-blur-xl"
          />

          {/* Modal Card with Spring Physics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#121316] border border-white/10 rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.6)] text-white overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#16171B]/90 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EB4D6D] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
                  / PROJECT INSPECTION // {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 sm:p-8 flex flex-col gap-8 custom-scrollbar">
              
              {/* Header Info */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-medium text-[#EB4D6D] tracking-wider uppercase">
                  {project.subtitle}
                </span>
                <h2 className="font-archivo font-black text-3xl sm:text-4xl text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl mt-1">
                  {project.description}
                </p>
              </div>

              {/* Media Preview Banner */}
              <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-[#1A1B20] relative shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Benchmarks & Engineering Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono tracking-wider text-white/40 uppercase">
                    / KEY METRICS & BENCHMARKS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col gap-1"
                      >
                        <span className="text-[11px] font-mono text-white/50 uppercase">
                          {metric.label}
                        </span>
                        <span className="font-archivo font-bold text-base sm:text-lg text-[#FAF7F3]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverable Scope */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono tracking-wider text-white/40 uppercase">
                  / ARCHITECTURAL SCOPE & DELIVERABLES
                </span>
                <div className="flex flex-col gap-2">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-inter text-white/80 leading-relaxed p-3 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono tracking-wider text-white/40 uppercase">
                  / TECHNOLOGIES & TOOLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 sm:p-6 border-t border-white/10 bg-[#16171B]/95 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
                PRESS [ESC] TO DISMISS
              </span>

              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] hover:bg-[#EB4D6D] hover:text-white transition-colors font-inter font-semibold text-xs tracking-wide shadow-md"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
