import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, CheckCircle, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tamilselvanpanchamoorthy@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-[#FAF7F3] py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#888888]">
                / INQUIRIES & COLLABORATION
              </span>
              <h2 className="font-archivo font-black text-5xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight mt-1 leading-[0.95]">
                Let’s talk.
              </h2>
            </div>

            <p className="font-inter text-base text-[#555555] leading-relaxed">
              Have an AI/ML engineering opportunity, research inquiry, or technical challenge? Reach out directly or fill out the form and I’ll get back to you promptly.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={handleCopyEmail}
                className="framer-card rounded-2xl p-4 flex items-center justify-between group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F3] flex items-center justify-center text-[#111111]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#888888] uppercase">Email Address</div>
                    <div className="text-sm font-inter font-medium text-[#111111] truncate max-w-[200px] sm:max-w-xs">
                      tamilselvanpanchamoorthy@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-xs font-inter font-medium text-[#111111] px-2.5 py-1 rounded-full bg-[#FAF7F3] border border-[#111111]/8">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <a
                href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
                target="_blank"
                rel="noreferrer"
                className="framer-card rounded-2xl p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F3] flex items-center justify-center text-[#111111]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#888888] uppercase">LinkedIn</div>
                    <div className="text-sm font-inter font-medium text-[#111111]">
                      tamilselvan-panchamoorthy
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-colors" />
              </a>

              <a
                href="https://github.com/tamilselvan526"
                target="_blank"
                rel="noreferrer"
                className="framer-card rounded-2xl p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F3] flex items-center justify-center text-[#111111]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#888888] uppercase">GitHub</div>
                    <div className="text-sm font-inter font-medium text-[#111111]">
                      @tamilselvan526
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#111111]/8 shadow-sm"
          >
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-3">
                <CheckCircle className="w-12 h-12 text-[#10B981]" />
                <h3 className="font-archivo font-bold text-2xl text-[#111111]">
                  Message Received!
                </h3>
                <p className="font-inter text-sm text-[#555555] max-w-sm">
                  Thank you for reaching out. I’ll review your note and respond to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full bg-[#111111] text-white font-inter text-xs font-semibold hover:bg-black transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-inter font-semibold text-[#111111] uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name or Team"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F3] border border-[#111111]/10 text-sm font-inter text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-inter font-semibold text-[#111111] uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F3] border border-[#111111]/10 text-sm font-inter text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-inter font-semibold text-[#111111] uppercase tracking-wider">
                    Your Project / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your AI/ML requirements, research project, or engineering position..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F3] border border-[#111111]/10 text-sm font-inter text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 rounded-full bg-[#111111] text-white font-inter font-semibold text-sm hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
