import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { OptimizedImage } from './OptimizedImage';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-[32px] ${isScrolled ? 'glass-header py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <OptimizedImage
              src="/logo.png"
              alt="Green World Bharat Solar Logo - Best Solar Company in Jaipur"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-white/20 text-[#1D1D1F]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 md:hidden">
            <div className="glass-header rounded-[32px] p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-200">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-widest text-[#1D1D1F] hover:text-emerald-600 py-3 border-b border-gray-100 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#1D1D1F] text-white px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Proposal
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
