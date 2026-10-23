import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, CheckCircle, Send } from 'lucide-react';
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
    }, 700);
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

          {/* Left Column: Big "Let's talk." matching Video 00:25 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-archivo font-black text-5xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight leading-[0.95]">
                Let’s talk.
              </h2>
              <p className="font-inter text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
                Have an AI/ML opportunity or research collaboration? Fill out the form, and I’ll get back to you soon.
              </p>
            </div>

            {/* Direct Contact Details from CV */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="framer-card rounded-2xl p-4 flex items-center justify-between group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F3] flex items-center justify-center text-[#111111]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#888888] uppercase">Email</div>
                    <div className="text-xs sm:text-sm font-inter font-medium text-[#111111] truncate max-w-[200px] sm:max-w-xs">
                      tamilselvanpanchamoorthy@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-xs font-inter font-medium text-[#111111] px-2.5 py-1 rounded-full bg-[#FAF7F3] border border-[#111111]/8">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <div className="framer-card rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F3] flex items-center justify-center text-[#111111]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#888888] uppercase">Phone</div>
                    <div className="text-xs sm:text-sm font-inter font-medium text-[#111111]">
                      +91 9994371185
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Row matching Video 00:25 bottom icons */}
            <div className="flex items-center gap-2.5 pt-4">
              <a
                href="https://github.com/tamilselvan526"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-[#111111]/12 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white hover:scale-105 transition-all shadow-2xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-[#111111]/12 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white hover:scale-105 transition-all shadow-2xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:tamilselvanpanchamoorthy@gmail.com"
                className="w-11 h-11 rounded-xl bg-white border border-[#111111]/12 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white hover:scale-105 transition-all shadow-2xs"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dark Form Card matching Video 00:25 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 rounded-[32px] bg-[#111111] text-white p-8 sm:p-10 shadow-2xl"
          >
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-3">
                <CheckCircle className="w-12 h-12 text-[#10B981]" />
                <h3 className="font-archivo font-bold text-2xl text-white">
                  Message Sent!
                </h3>
                <p className="font-inter text-sm text-white/70 max-w-sm">
                  Thank you for reaching out. I’ll review your note and respond to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-full bg-white text-[#111111] font-inter text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-inter font-medium text-white/90">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-sm font-inter text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-inter font-medium text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-sm font-inter text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-inter font-medium text-white/90">
                    Your Project
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project or role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-sm font-inter text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 rounded-xl bg-white text-[#111111] font-inter font-bold text-sm hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
