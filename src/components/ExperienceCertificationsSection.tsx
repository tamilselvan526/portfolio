import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

interface CredentialItem {
  category: string;
  title: string;
  role: string;
  period: string;
  description: string;
  icon: React.ElementType;
}

interface CredentialCardProps {
  item: CredentialItem;
  index: number;
  symbol: React.ReactNode;
  isInView: boolean;
}

const CredentialCard: React.FC<CredentialCardProps> = ({ item, index, symbol, isInView }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.025, y: -5 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[410px] sm:h-[420px] select-none cursor-pointer"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isInView ? 180 : 0 }}
        transition={{
          duration: 0.85,
          delay: 0.08 + index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {/* Front Face: Plain Black Card with Center Minimalist Symbol (Initial state) */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl bg-[#0F0F0F] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.22)] flex items-center justify-center p-8 select-none"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="flex items-center justify-center">
            {symbol}
          </div>
        </div>

        {/* Back Face: Clean Credential Content matching ref 4 (Revealed after 180° flip) */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl bg-[#0F0F0F] text-white p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.2)] border border-white/10 select-none"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Upper Text Description matching ref 4 layout */}
          <div className="pt-1">
            <p className="font-inter text-[12.5px] sm:text-[13px] text-white/80 leading-[1.65] font-normal">
              {item.description}
            </p>
          </div>

          {/* Bottom Profile / Credential Info matching ref 4 layout */}
          <div className="flex items-center gap-3 pt-3.5 border-t border-white/10">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-white">
              <Icon className="w-4 h-4 text-white/90" />
            </div>
            <div className="flex flex-col min-w-0">
              <h4 className="font-archivo font-bold text-xs sm:text-[13px] text-white truncate leading-snug">
                {item.title}
              </h4>
              <p className="font-inter text-[11px] text-white/50 truncate mt-0.5">
                {item.role} • {item.period}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ExperienceCertificationsSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  // Trigger 3D flip once when the cards themselves scroll 35% into view
  // This ensures the plain black cards with symbols are clearly visible first,
  // and then flip once as the user scrolls into the section, matching ref 4 exactly.
  const isInView = useInView(cardsRef, { once: true, amount: 0.35 });

  const credentials: CredentialItem[] = [
    {
      category: 'WORK EXPERIENCE',
      title: '8Queens Software Technologies',
      role: 'Software Engineer',
      period: 'Dec 2025 – Jan 2026',
      description:
        'Developed and integrated responsive web applications, designing RESTful APIs and managing database operations for efficient data handling. Focused on performance optimization, scalability, and reliability through rigorous testing.',
      icon: Briefcase,
    },
    {
      category: 'EDUCATION',
      title: 'SRM Institute of Science & Technology',
      role: 'B.Tech in CSE (AI & ML)',
      period: '2023 – 2027 • CGPA: 8.20',
      description:
        'Specializing in Deep Learning, Computer Vision, Quantum Machine Learning, and Intelligent Systems. Conducting applied research on hybrid quantum-classical U-Nets and industrial visual defect inspection.',
      icon: GraduationCap,
    },
    {
      category: 'GLOBAL CERTIFICATION',
      title: 'Oracle Cloud Infrastructure',
      role: 'Certified GenAI Professional',
      period: 'Issued 2025',
      description:
        'Certified expertise in foundational LLM architectures, fine-tuning, prompt engineering, Retrieval-Augmented Generation (RAG), vector embeddings, and enterprise generative AI solutions on OCI.',
      icon: Award,
    },
    {
      category: 'TECHNICAL CERTIFICATIONS',
      title: 'NPTEL & Cisco Networking',
      role: 'ML & Networks Certified',
      period: 'Verified Credential',
      description:
        'Introduction to Machine Learning (NPTEL) covering classification, regression, and model evaluation, alongside Cisco Networking Basics validating core protocol and architecture proficiency.',
      icon: CheckCircle2,
    },
  ];

  // 4 Minimalist Geometric Symbols for the plain black cards matching ref 4
  const symbols = [
    // Symbol 1: Concentric Arches / Fingerprint Geometry
    (
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 18 58 V 36 C 18 24 28 14 40 14 C 52 14 62 24 62 36 V 58" />
        <path d="M 26 58 V 38 C 26 30 32 24 40 24 C 48 24 54 30 54 38 V 58" />
        <path d="M 34 58 V 40 C 34 36 36.5 33 40 33 C 43.5 33 46 36 46 40 V 58" />
      </svg>
    ),
    // Symbol 2: Radial Sunburst Iris around Arched Doorway
    (
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 text-white"
        fill="none"
        stroke="currentColor"
      >
        {[
          [40, 10, 40, 22],
          [22, 15, 29, 25],
          [58, 15, 51, 25],
          [11, 28, 22, 34],
          [69, 28, 58, 34],
          [9, 44, 21, 44],
          [71, 44, 59, 44],
          [13, 60, 23, 54],
          [67, 60, 57, 54],
          [31, 12, 34, 23],
          [49, 12, 46, 23],
          [16, 21, 26, 29],
          [64, 21, 54, 29],
          [10, 36, 22, 39],
          [70, 36, 58, 39],
          [11, 52, 23, 49],
          [69, 52, 57, 49],
        ].map(([x1, y1, x2, y2], idx) => (
          <line
            key={idx}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
        <path
          d="M 31 66 V 46 A 9 9 0 0 1 49 46 V 66"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 36 66 V 49 A 4 4 0 0 1 44 49 V 66"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Symbol 3: Interlocking Geometric Blocks Loop
    (
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 text-white"
        fill="currentColor"
      >
        <path d="M 26 34 L 46 16 H 58 L 38 34 Z" />
        <path d="M 46 26 L 64 46 V 58 L 46 38 Z" />
        <path d="M 54 46 L 34 64 H 22 L 42 46 Z" />
        <path d="M 34 54 L 16 34 V 22 L 34 42 Z" />
      </svg>
    ),
    // Symbol 4: Geometric Monogram / Folded Ribbon
    (
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 text-white"
        fill="currentColor"
      >
        <path d="M 22 22 H 42 L 26 42 H 22 Z" />
        <path d="M 26 42 L 40 22 H 48 C 58 22 66 30 66 41 C 66 52 58 60 48 60 H 22 V 46 H 46 C 49 46 52 44 52 41 C 52 38 49 36 46 36 H 34 Z" />
      </svg>
    ),
  ];

  return (
    <section
      id="experience"
      className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8"
    >
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

        {/* 4 Cards Grid: plain black with symbols initially, flips once on scroll to reveal clean content, expands on hover */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {credentials.map((item, index) => (
            <CredentialCard
              key={item.title}
              item={item}
              index={index}
              symbol={symbols[index]}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};




