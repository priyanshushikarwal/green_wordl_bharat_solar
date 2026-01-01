
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to transition to solar energy in Jaipur?</h2>
          <p className="text-xl text-[#86868B] mb-10">
            Join 500+ businesses and homeowners who trust us for engineering-first solar installations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
              Request Your Free Audit
            </button>
            <button className="bg-[#1D1D1F] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all">
              Contact Us Today
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 py-12 border-t border-gray-100">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col gap-6 mb-6">
              <img 
                src="logo.png" 
                alt="Green World Bharat Solar - Best Solar Company in Jaipur" 
                className="h-16 w-auto object-contain self-start"
              />
              <p className="text-sm text-[#86868B] leading-relaxed">
                <strong>Green World Bharat Solar</strong> is a premier solar EPC company based in Jaipur, Rajasthan. Government approved, MNRE certified, and engineering-driven.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-[#1D1D1F]">Solar Solutions</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="#solutions" className="hover:text-emerald-600 transition-colors">Commercial Solar Jaipur</a></li>
              <li><a href="#solutions" className="hover:text-emerald-600 transition-colors">Industrial Solar Solutions</a></li>
              <li><a href="#rooftop" className="hover:text-emerald-600 transition-colors">On-Grid Solar Systems</a></li>
              <li><a href="#rooftop" className="hover:text-emerald-600 transition-colors">Off-Grid Solar Jaipur</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#1D1D1F]">Company</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">About Our Expertise</a></li>
              <li><a href="#process" className="hover:text-emerald-600 transition-colors">Engineering Process</a></li>
              <li><a href="#projects" className="hover:text-emerald-600 transition-colors">Solar Projects in Jaipur</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Get a Site Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#1D1D1F]">Support & Legal</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Maintenance Support</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#86868B]">
            © {new Date().getFullYear()} Green World Bharat Solar. All rights reserved. Registered Solar EPC in Rajasthan. Site optimized for "Best Solar Company in Jaipur".
          </p>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#86868B]">Follow our updates</span>
            <div className="flex gap-4 grayscale opacity-50">
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
