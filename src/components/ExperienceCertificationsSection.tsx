import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

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
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">

        {/* Section Header matching Video 00:19 */}
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

        {/* 4 Dark Cards Grid matching Video 00:20 */}
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
                className="rounded-3xl bg-[#111111] text-white p-7 flex flex-col justify-between gap-6 shadow-[0_12px_36px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col gap-4">
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

                  <p className="font-inter text-xs text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-inter text-white/60">
                    {item.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
