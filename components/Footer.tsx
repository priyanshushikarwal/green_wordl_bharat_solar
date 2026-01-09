import React from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from './OptimizedImage';

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
            <a
              href="https://wa.me/919352513913?text=Hi%2C%20I%20am%20interested%20in%20a%20free%20solar%20site%20audit%20in%20Jaipur."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 inline-block"
            >
              Request Your Free Audit
            </a>
            <a
              href="tel:+919352513913"
              className="bg-[#1D1D1F] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 py-12 border-t border-gray-100">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col gap-6 mb-6">
              <OptimizedImage
                src="/logo.png"
                alt="Green World Bharat Solar - Best Solar Company in Jaipur"
                className="h-16 w-auto object-contain self-start"
                width={64}
                height={64}
              />
              <p className="text-sm text-[#86868B] leading-relaxed">
                <strong>Green World Bharat Solar</strong> is a premier solar EPC company based in Jaipur, Rajasthan. Government approved, MNRE certified, and engineering-driven.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#1D1D1F]">Solar Solutions</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><Link to="/residential-solar-jaipur" className="hover:text-emerald-600 transition-colors">Residential Solar Jaipur</Link></li>
              <li><Link to="/commercial-solar-jaipur" className="hover:text-emerald-600 transition-colors">Commercial Solar Jaipur</Link></li>
              <li><Link to="/solar-panel-price-jaipur" className="hover:text-emerald-600 transition-colors">Solar Panel Prices</Link></li>
              <li><Link to="/solar-subsidy-rajasthan" className="hover:text-emerald-600 transition-colors">Govt Subsidy Info</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#1D1D1F]">Company</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="/#solutions" className="hover:text-emerald-600 transition-colors">Our Solutions</a></li>
              <li><a href="/#process" className="hover:text-emerald-600 transition-colors">Engineering Process</a></li>
              <li><a href="/#projects" className="hover:text-emerald-600 transition-colors">Solar Projects</a></li>
              <li><Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#1D1D1F]">Support & Legal</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="tel:+919352513913" className="hover:text-emerald-600 transition-colors">+91 93525 13913</a></li>
              <li><a href="mailto:info@greenworldbharatsolar.com" className="hover:text-emerald-600 transition-colors">Email Us</a></li>
              <li><a href="/sitemap.xml" className="hover:text-emerald-600 transition-colors">Sitemap</a></li>
              <li><a href="https://wa.me/919352513913" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">WhatsApp</a></li>
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
