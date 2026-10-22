import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Lock, 
  Database, 
  ExternalLink, 
  ShieldAlert,
  Code2
} from 'lucide-react';

export const ProjectShopkart: React.FC = () => {
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);

  const flows = [
    {
      step: '01',
      title: 'Catalog Discovery & Dynamic Filtering',
      subtitle: 'Instant categorization, pagination, and multi-facet filtering',
      description: 'Engineered a fluid browsing interface with instantaneous client-side filter synchronization and debounced REST requests, avoiding unnecessary re-renders across product cards.',
      tech: ['React 18', 'Redux Toolkit', 'RESTful Endpoints'],
      image: '/projects/shopkart/product_electronics.jpg',
      badge: 'CLIENT-SIDE STATE'
    },
    {
      step: '02',
      title: 'State Synchronization & Cart Management',
      subtitle: 'Optimistic updates with resilient local & server storage',
      description: 'Implemented transactional cart state using Redux with optimistic UI updates. Items update immediately on user click while background synchronizations validate inventory quantity against the relational MySQL database.',
      tech: ['Redux Store', 'Optimistic UI', 'Cart Actions'],
      image: '/projects/shopkart/product_hardware.jpg',
      badge: 'ZERO-LATENCY SYNC'
    },
    {
      step: '03',
      title: 'Secure Checkout & Role-Based Access Control',
      subtitle: 'Granular JWT permissions for buyers, vendors, and admins',
      description: 'Constructed complete role-based authentication pipelines. Standard customers access order tracking and secure payment flows; administrative accounts obtain dedicated order fulfilment dashboards and inventory management controls.',
      tech: ['JWT Authentication', 'MySQL Schema', 'Role-Based Access'],
      image: '/projects/shopkart/product_electronics.jpg',
      badge: 'PROTECTED ROUTES'
    }
  ];

  return (
    <section className="py-28 relative bg-[#0D0E11] text-white border-t border-white/10 bg-dark-grid">
      
      {/* Background Ambient Coral Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1920px] mx-auto relative z-10">
        
        {/* Project Header Tag & Prominent Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16181D] border border-white/10 text-xs font-mono text-[#FF3B30] mb-3 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#FF3B30] shadow-[0_0_6px_#FF3B30]" />
              PROJECT 03 // FULL-STACK PRODUCT ARCHITECTURE
            </div>

            <h2 className="font-headline text-5xl sm:text-7xl font-black text-white tracking-tight uppercase leading-[0.9]">
              DESIGNED TO <span className="text-[#FF3B30] inline-block">FUNCTION</span>
            </h2>

            <div className="text-sm font-mono text-[#9B9CA2] mt-2 tracking-wider">
              ShopKart &bull; Decoupled Architecture, Redux State Caching, JWT Auth, and MySQL Persistence
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/tamilselvan526/shopkart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#16181D] border border-[#FF3B30]/40 text-xs font-oxanium font-bold tracking-widest text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white transition-all shadow-[0_0_15px_rgba(255,59,48,0.2)]"
            >
              <Code2 className="w-4 h-4" />
              <span>EXPLORE REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Product Experience Walkthrough Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Step Selection Sidebar */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-mono text-[#9B9CA2] uppercase tracking-[0.2em] mb-2">
              // INTERACTIVE PRODUCT EXPERIENCE FLOW
            </div>

            {flows.map((item, index) => (
              <button
                key={item.step}
                onClick={() => setActiveFlowStep(index)}
                className={`w-full text-left p-4 transition-all font-mono bracket-corner-red ${
                  activeFlowStep === index
                    ? 'bg-[#1C1F26] border border-[#FF3B30] shadow-[0_0_15px_rgba(255,59,48,0.25)]'
                    : 'bg-[#16181D] border border-white/10 text-[#9B9CA2] hover:border-[#FF3B30]/40 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold font-oxanium ${activeFlowStep === index ? 'text-[#FF3B30]' : 'text-[#9B9CA2]'}`}>
                    PHASE {item.step}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-black/60 border border-white/10 text-[#FF3B30]">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white font-oxanium">{item.title}</h3>
                <p className="text-xs text-[#9B9CA2] mt-1 font-space line-clamp-2">
                  {item.subtitle}
                </p>
              </button>
            ))}

            {/* Technical Stack Specifications */}
            <div className="p-6 bg-[#16181D] border border-white/10 bracket-corner-red mt-6 space-y-3">
              <h4 className="font-oxanium text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <Database className="w-4 h-4 text-[#FF3B30]" />
                TECHNICAL ARCHITECTURE SPEC
              </h4>
              <div className="space-y-2 text-xs font-mono text-[#9B9CA2]">
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span>Frontend:</span>
                  <span className="text-white">React 18, Redux Toolkit, Tailwind</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span>Backend &amp; API:</span>
                  <span className="text-white">RESTful Endpoints, Django Server</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span>Persistence:</span>
                  <span className="text-white">Relational MySQL Schema</span>
                </div>
                <div className="flex justify-between">
                  <span>Security:</span>
                  <span className="text-[#FF3B30]">Signed JWT &bull; RBAC Route Guards</span>
                </div>
              </div>
            </div>

          </div>

          {/* Active Flow Viewport */}
          <div className="lg:col-span-7 p-6 bg-[#16181D] border border-white/10 bracket-corner-red space-y-6">
            
            {/* Visual Canvas */}
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-black group select-none">
              <img
                src={flows[activeFlowStep].image}
                alt={flows[activeFlowStep].title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-block px-2.5 py-1 bg-[#FF3B30] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                  {flows[activeFlowStep].badge}
                </div>
                <h4 className="font-oxanium text-lg font-bold text-white uppercase tracking-wider">
                  {flows[activeFlowStep].title}
                </h4>
              </div>
            </div>

            {/* Description & Technical Breakdown */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#9B9CA2] font-space leading-relaxed">
                {flows[activeFlowStep].description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {flows[activeFlowStep].tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-black/60 border border-white/10 text-xs font-mono text-[#FF3B30]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3.5 bg-black/40 border border-white/10">
                <ShoppingBag className="w-4 h-4 text-[#FF3B30] mb-1.5" />
                <div className="text-xs font-bold text-white font-oxanium uppercase">Cart Consistency</div>
                <div className="text-[11px] text-[#9B9CA2] font-space mt-0.5">Optimistic sync + lock</div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/10">
                <Lock className="w-4 h-4 text-emerald-400 mb-1.5" />
                <div className="text-xs font-bold text-white font-oxanium uppercase">Token Security</div>
                <div className="text-[11px] text-[#9B9CA2] font-space mt-0.5">Signed JWT bearer auth</div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/10">
                <ShieldAlert className="w-4 h-4 text-rose-400 mb-1.5" />
                <div className="text-xs font-bold text-white font-oxanium uppercase">RBAC Guards</div>
                <div className="text-[11px] text-[#9B9CA2] font-space mt-0.5">Buyer vs Admin routes</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
