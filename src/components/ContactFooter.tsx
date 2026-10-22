import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  ChevronUp,
  Rocket
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showDeploymentGuide, setShowDeploymentGuide] = useState(false);

  const email = 'tamilselvanpanchamoorthy@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/tamilselvan-panchamoorthy-55973b2a5/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-28 relative bg-[#090A0C] text-white border-t border-white/10 overflow-hidden bg-dark-grid">
      
      {/* Background Ambient Coral Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Large Typographic Statement */}
        <div className="mb-16 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131417] border border-white/10 text-xs font-mono text-[#FF3B30] mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#FF3B30] shadow-[0_0_6px_#FF3B30]" />
            // 05 &bull; COLLABORATION &bull; CONTACT
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl lg:text-9xl font-black text-white tracking-tight uppercase leading-[0.88]">
            LET&apos;S BUILD<br />
            <span className="text-[#FF3B30] inline-block">
              WHAT COMES NEXT.
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-[#FF3B30] mt-6" />
        </div>

        {/* Contact Action Card */}
        <div className="p-8 sm:p-12 bg-[#131417] border border-white/10 bracket-corner-red mb-16 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-6">
            <p className="text-sm sm:text-base text-[#9B9CA2] font-space leading-relaxed">
              Open to high-impact engineering roles, advanced computer vision research, and intelligent mobility product prototyping. Reach out directly or inspect my open-source repositories.
            </p>

            {/* Direct Channel Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Direct Mailto */}
              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20-%20Tamilselvan%20P`}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-none bg-[#FF3B30] text-white font-oxanium font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-[#e03126] hover:shadow-[0_0_25px_rgba(255,59,48,0.45)] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>SEND DIRECT EMAIL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* One-Click Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-none bg-black/60 border border-white/15 text-white font-oxanium font-bold text-xs tracking-wider uppercase hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FF3B30]" />
                    <span className="text-[#FF3B30]">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9B9CA2]" />
                    <span>COPY EMAIL: {email}</span>
                  </>
                )}
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/tamilselvan526"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-none bg-black/60 border border-white/15 text-white font-oxanium font-bold text-xs tracking-wider uppercase hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#FF3B30]" />
                <span>GITHUB // TAMILSELVAN526</span>
                <ArrowUpRight className="w-4 h-4 text-[#9B9CA2]" />
              </a>

              {/* Updated LinkedIn Link */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-none bg-black/60 border border-white/15 text-white font-oxanium font-bold text-xs tracking-wider uppercase hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FF3B30]" />
                <span>LINKEDIN PROFILE</span>
                <ArrowUpRight className="w-4 h-4 text-[#9B9CA2]" />
              </a>

            </div>
          </div>
        </div>

        {/* Deployment Instructions Modal Toggle */}
        <div className="mb-12 p-6 bg-[#131417] border border-white/10 bracket-corner-red">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-black border border-[#FF3B30]/40 text-[#FF3B30] rounded-sm">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-oxanium text-sm font-bold text-white uppercase tracking-wider">
                  DEPLOYMENT PROTOCOL // READY TO PUBLISH TODAY
                </h3>
                <p className="text-xs text-[#9B9CA2] font-space mt-0.5">
                  Production bundle verified. Single-command deployment instructions for Vercel, Netlify, and GitHub Pages.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowDeploymentGuide(!showDeploymentGuide)}
              className="px-4 py-2 bg-black border border-white/15 text-xs font-oxanium font-bold tracking-wider uppercase text-[#FF3B30] hover:border-[#FF3B30] transition-colors whitespace-nowrap"
            >
              {showDeploymentGuide ? 'HIDE INSTRUCTIONS' : 'VIEW DEPLOY COMMANDS'}
            </button>
          </div>

          {showDeploymentGuide && (
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4 font-mono text-xs">
              <div>
                <div className="text-[#FF3B30] font-bold mb-1">// OPTION 1 &bull; INSTANT VERCEL DEPLOYMENT</div>
                <div className="p-3.5 bg-black border border-white/10 text-[#F4F4F6] overflow-x-auto rounded-xs">
                  <code>npx vercel --prod</code>
                </div>
              </div>

              <div>
                <div className="text-[#FF3B30] font-bold mb-1">// OPTION 2 &bull; GIT PUSH &amp; CI/CD HOOK</div>
                <div className="p-3.5 bg-black border border-white/10 text-[#F4F4F6] overflow-x-auto space-y-1 rounded-xs">
                  <div>git init</div>
                  <div>git add .</div>
                  <div>git commit -m &quot;feat: experimental AI portfolio redesign&quot;</div>
                  <div>git branch -M main</div>
                  <div>git remote add origin https://github.com/tamilselvan526/portfolio.git</div>
                  <div>git push -u origin main</div>
                </div>
              </div>

              <div>
                <div className="text-[#FF3B30] font-bold mb-1">// OPTION 3 &bull; LOCAL PRODUCTION PREVIEW</div>
                <div className="p-3.5 bg-black border border-white/10 text-[#F4F4F6] overflow-x-auto rounded-xs">
                  <code>npm run build &amp;&amp; npm run preview</code>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9B9CA2]">
          <div>
            &copy; 2026 TAMILSELVAN P &bull; B.TECH AI &amp; ML, SRM IST &bull; CHENNAI, INDIA
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#9B9CA2]">AI / ML RESEARCH &bull; INTELLIGENT SYSTEMS</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#131417] border border-white/15 text-[#9B9CA2] hover:text-[#FF3B30] hover:border-[#FF3B30]/50 transition-colors rounded-sm"
              title="Return to Top"
              aria-label="Return to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
