import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';

export const ExperienceCertificationsSection: React.FC = () => {
  const credentials = [
    {
      category: 'WORK EXPERIENCE',
      title: '8Queens Software Technologies',
      role: 'Software Engineer',
      period: 'Dec 2025 – Jan 2026',
      description:
        'Developed and integrated responsive web applications, designing RESTful APIs and managing database operations for efficient data handling. Focused on performance optimization, scalability, and reliability through rigorous testing.',
      icon: Briefcase,
      badge: 'Full-Stack & APIs',
      highlights: [
        'Designed RESTful endpoints & relational schemas',
        'Optimized client latency and state management',
        'Automated unit testing and performance auditing',
      ],
      skills: ['React', 'REST APIs', 'Node.js', 'MySQL', 'System Design'],
    },
    {
      category: 'EDUCATION',
      title: 'SRM Institute of Science & Technology',
      role: 'B.Tech in CSE (AI & ML)',
      period: '2023 – 2027 • CGPA: 8.20/10',
      description:
        'Specializing in Deep Learning, Computer Vision, Quantum Machine Learning, and Intelligent Systems. Conducting applied research on hybrid quantum-classical U-Nets and industrial visual defect inspection.',
      icon: GraduationCap,
      badge: 'AI & ML Major',
      highlights: [
        'Core focus on Computer Vision & Neural Architectures',
        'Hybrid Quantum-Classical U-Net research',
        'Benchmarked industrial defect classification models',
      ],
      skills: ['Deep Learning', 'PyTorch', 'Quantum VQC', 'U-Net', 'TensorFlow'],
    },
    {
      category: 'GLOBAL CERTIFICATION',
      title: 'Oracle Cloud Infrastructure',
      role: 'Certified Generative AI Professional',
      period: 'Issued 2025',
      description:
        'Certified expertise in foundational LLM architectures, fine-tuning, prompt engineering, Retrieval-Augmented Generation (RAG), vector embeddings, and enterprise generative AI solutions on OCI.',
      icon: Award,
      badge: 'Oracle Certified',
      highlights: [
        'Enterprise LLM fine-tuning & prompt pipelines',
        'RAG architecture & vector embedding indexing',
        'Production GenAI deployment on OCI infrastructure',
      ],
      skills: ['Generative AI', 'LLMs', 'RAG Pipelines', 'Vector DB', 'OCI'],
    },
    {
      category: 'TECHNICAL CERTIFICATIONS',
      title: 'NPTEL & Cisco Networking',
      role: 'Machine Learning & Networks',
      period: 'NPTEL + Cisco Certified',
      description:
        'Introduction to Machine Learning (NPTEL) covering classification, regression, and model evaluation, alongside Cisco Networking Basics validating core protocol and architecture proficiency.',
      icon: CheckCircle2,
      badge: 'Verified Credential',
      highlights: [
        'Mathematical formulation of ML algorithms (NPTEL)',
        'Cisco network architectures, subnets & routing',
        'Cross-validation and model regularization theory',
      ],
      skills: ['ML Theory', 'Cisco Networking', 'Optimization', 'TCP/IP'],
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
              / VERIFIED CREDENTIALS & EXPERIENCE
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mt-1">
              Experience & Certifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-inter text-[#666666] max-w-sm">
            Authentic industry experience, academic excellence at SRM IST, and globally accredited certifications.
          </p>
        </div>

        {/* 4 Interactive 3D Flip Cards Grid matching Reference Testimonials style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative h-[410px] sm:h-[420px] group select-none transition-transform duration-500 hover:scale-[1.03]"
                style={{ perspective: '1200px' }}
              >
                {/* 3D Flipping Card Container */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                  
                  {/* Front Face: Dark Card with Summary & Badge */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-[#111111] text-white p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.2)] border border-white/10 [backface-visibility:hidden] -webkit-[backface-visibility:hidden]">
                    <div className="flex flex-col gap-3.5">
                      {/* Top Bar inside Dark Card */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/50 tracking-wider">
                        <span>{item.category}</span>
                        <Icon className="w-4 h-4 text-white/70" />
                      </div>

                      <div>
                        <h3 className="font-archivo font-bold text-lg text-white leading-snug">
                          {item.title}
                        </h3>
                        <div className="text-xs font-inter font-medium text-[#EB4D6D] mt-0.5">
                          {item.role}
                        </div>
                        <div className="text-[11px] font-inter text-white/50 mt-0.5">
                          {item.period}
                        </div>
                      </div>

                      <p className="font-inter text-xs text-white/70 leading-relaxed line-clamp-5">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Tag & Flip Hint */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span className="text-[11px] font-inter text-white/60">
                          {item.badge}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 group-hover:text-[#EB4D6D] transition-colors">
                        Flip ⟳
                      </span>
                    </div>
                  </div>

                  {/* Back Face: Detailed Highlights & Verified Tech Stack */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-[#0E0F12] text-white p-7 flex flex-col justify-between shadow-[0_20px_48px_rgba(0,0,0,0.35)] border border-[#EB4D6D]/35 [transform:rotateY(180deg)] [backface-visibility:hidden] -webkit-[backface-visibility:hidden]">
                    <div className="flex flex-col gap-3">
                      {/* Back Header */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#EB4D6D] tracking-wider">
                        <span>/ KEY COMPETENCIES</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#EB4D6D]" />
                      </div>

                      <div>
                        <h4 className="font-archivo font-bold text-base text-white">
                          {item.role}
                        </h4>
                        <div className="text-[11px] font-mono text-white/50">
                          {item.title}
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="flex flex-col gap-2 pt-1">
                        {item.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-[11px] font-inter text-white/80 leading-snug">
                            <span className="text-[#EB4D6D] mt-0.5">•</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
                          Technologies
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/75"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back Footer */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#10B981] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Verified Credentials
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        Back ⟳
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

