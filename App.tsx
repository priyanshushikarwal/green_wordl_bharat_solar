
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions, ProjectsSection, RooftopSection, WhyChooseUs, Process, AreasAndFaq } from './components/Sections';
import { Footer } from './components/Footer';

const App: React.FC = () => {
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

        <Solutions />
        <ProjectsSection />
        <RooftopSection />
        <WhyChooseUs />
        <Process />
        <AreasAndFaq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
