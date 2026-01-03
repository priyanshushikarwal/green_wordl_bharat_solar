import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { OptimizedImage } from './OptimizedImage';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-[32px] ${isScrolled ? 'glass-header py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <OptimizedImage
              src="/logo.png"
              alt="Green World Bharat Solar Logo - Best Solar Company in Jaipur"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              width={48}
              height={48}
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#1D1D1F] leading-tight">
                Green World Bharat <span className="text-emerald-600">Solar</span>
              </span>
              <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-[0.2em] -mt-0.5">Premium Solar EPC Solutions</span>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F]/50 hover:text-emerald-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1D1D1F] text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-gray-200"
          >
            Get Proposal
          </a>
        </nav>
      </div>
    </header>
  );
};
