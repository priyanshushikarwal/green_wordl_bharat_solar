import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load heavy sections (existing)
const Solutions = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Solutions })));
const ProjectsSection = React.lazy(() => import('./components/Sections').then(module => ({ default: module.ProjectsSection })));
const RooftopSection = React.lazy(() => import('./components/Sections').then(module => ({ default: module.RooftopSection })));
const WhyChooseUs = React.lazy(() => import('./components/Sections').then(module => ({ default: module.WhyChooseUs })));
const Process = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Process })));
const AreasAndFaq = React.lazy(() => import('./components/Sections').then(module => ({ default: module.AreasAndFaq })));
const SubsidiesSection = React.lazy(() => import('./components/SubsidiesSection').then(module => ({ default: module.SubsidiesSection })));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection').then(module => ({ default: module.TestimonialsSection })));

// Lazy load new SEO pages
const SolarPanelPriceJaipur = React.lazy(() => import('./pages/SolarPanelPriceJaipur').then(module => ({ default: module.SolarPanelPriceJaipur })));
const ResidentialSolarJaipur = React.lazy(() => import('./pages/ResidentialSolarJaipur').then(module => ({ default: module.ResidentialSolarJaipur })));
const CommercialSolarJaipur = React.lazy(() => import('./pages/CommercialSolarJaipur').then(module => ({ default: module.CommercialSolarJaipur })));
const SolarSubsidyRajasthan = React.lazy(() => import('./pages/SolarSubsidyRajasthan').then(module => ({ default: module.SolarSubsidyRajasthan })));
const ContactPage = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

const PageLoader = () => (
  <div className="min-h-screen flex justify-center items-center">
    <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

// Home Page Component (existing layout unchanged)
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Trust Bar / Logos - Minimalist Style */}
        <section className="py-12 border-y border-emerald-100/30 glass mx-6 my-12 rounded-[32px]">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              <span className="font-bold text-lg tracking-widest text-[#1D1D1F]">MNRE APPROVED</span>
              <span className="font-bold text-lg tracking-widest text-[#1D1D1F]">RAJASTHAN RENEWABLES</span>
              <span className="font-bold text-lg tracking-widest text-[#1D1D1F]">ISO 9001:2015</span>
              <span className="font-bold text-lg tracking-widest text-[#1D1D1F]">GOVT OF INDIA</span>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionLoader />}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <RooftopSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SubsidiesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AreasAndFaq />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Home Page - Existing */}
            <Route path="/" element={<HomePage />} />

            {/* New SEO Pages */}
            <Route path="/solar-panel-price-jaipur" element={<SolarPanelPriceJaipur />} />
            <Route path="/residential-solar-jaipur" element={<ResidentialSolarJaipur />} />
            <Route path="/commercial-solar-jaipur" element={<CommercialSolarJaipur />} />
            <Route path="/solar-subsidy-rajasthan" element={<SolarSubsidyRajasthan />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback to Home for unknown routes */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Analytics />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
