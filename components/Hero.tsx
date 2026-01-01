
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Glass Shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold mb-8 text-emerald-800 border-emerald-100/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            MNRE Approved | No. 1 Rated Solar EPC in Rajasthan
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-[#1D1D1F] mb-6 tracking-tight">
            Best Solar Company in Jaipur – <span className="text-emerald-600">Green World Bharat Solar</span>
          </h1>
          <p className="text-xl text-[#4b5563] mb-10 leading-relaxed max-w-xl">
            Empowering Jaipur with engineering-first solar installations. As the premier solar company in Jaipur, we specialize in high-efficiency commercial and industrial energy systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200/50 transform hover:-translate-y-1">
              Free Site Assessment in Jaipur
            </button>
            <button className="glass text-[#1D1D1F] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/60 transition-all border border-gray-200">
              Request Commercial Proposal
            </button>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#1D1D1F]">15MW+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">Capacity Installed</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#1D1D1F]">500+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">Happy Clients</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="glass p-4 rounded-[40px] transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800" 
                alt="Best solar company in jaipur commercial installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Floating Glass Stats */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl animate-bounce shadow-xl hidden md:block">
            <div className="text-emerald-600 font-bold text-2xl">98%</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Efficiency Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
