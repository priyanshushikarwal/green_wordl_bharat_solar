import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { OptimizedImage } from './OptimizedImage';

// SEO Pages for dropdown
const SEO_PAGES = [
  { label: 'Solar Prices', href: '/solar-panel-price-jaipur' },
  { label: 'Residential Solar', href: '/residential-solar-jaipur' },
  { label: 'Commercial Solar', href: '/commercial-solar-jaipur' },
  { label: 'Govt Subsidy', href: '/solar-subsidy-rajasthan' },
];

// Home page section links
const HOME_SECTIONS = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Process', href: '/#process' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-[32px] ${isScrolled ? 'glass-header py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
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
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F]/50 hover:text-emerald-600 transition-colors flex items-center gap-1"
            >
              Services
              <svg className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top ${isServicesOpen
                  ? 'opacity-100 scale-100 translate-y-0 visible'
                  : 'opacity-0 scale-95 -translate-y-2 invisible'
                }`}
              style={{ zIndex: 100 }}
            >
              {SEO_PAGES.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-sm text-[#1D1D1F] hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Regular Nav Links */}
          {HOME_SECTIONS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F]/50 hover:text-emerald-600 transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Contact Link */}
          <Link
            to="/contact"
            className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F]/50 hover:text-emerald-600 transition-colors"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="bg-[#1D1D1F] text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-gray-200"
          >
            Get Proposal
          </Link>
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
          <div className="absolute top-full left-0 right-0 mt-4 p-4 md:hidden" style={{ zIndex: 100 }}>
            <div className="bg-white rounded-[32px] p-6 shadow-2xl flex flex-col gap-2 border border-gray-100">

              {/* Services Section */}
              <div className="py-2 border-b border-gray-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Our Services</span>
                {SEO_PAGES.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-sm font-semibold text-[#1D1D1F] hover:text-emerald-600 py-2 pl-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    → {item.label}
                  </Link>
                ))}
              </div>

              {/* Home Sections */}
              <div className="py-2 border-b border-gray-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Explore</span>
                {HOME_SECTIONS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-semibold text-[#1D1D1F] hover:text-emerald-600 py-2 pl-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    → {item.label}
                  </a>
                ))}
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                className="text-sm font-semibold text-[#1D1D1F] hover:text-emerald-600 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                to="/contact"
                className="bg-[#1D1D1F] text-white px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
