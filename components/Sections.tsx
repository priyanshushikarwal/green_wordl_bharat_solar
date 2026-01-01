
import React from 'react';
import { FAQS, SERVICE_AREAS, PROJECTS } from '../constants';

export const Solutions: React.FC = () => (
  <section id="solutions" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Commercial & Industrial Solar Solutions in Jaipur
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          As the leading solar company in Jaipur, we deliver engineering-grade solutions designed for maximum ROI and long-term sustainability.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Industrial Installation",
            desc: "Custom-engineered systems for manufacturing units in Sitapura Industrial Area, lowering overheads significantly.",
            img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=600",
            alt: "best solar company in jaipur industrial installation"
          },
          {
            title: "Warehouse Rooftops",
            desc: "Utilize huge idle roof space in Jaipur's logistic hubs. MNRE approved solar components for reliability.",
            img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43759?auto=format&fit=crop&q=80&w=600",
            alt: "warehouse solar company in jaipur"
          },
          {
            title: "Commercial Offices",
            desc: "Premium glass-on-glass modules for corporate buildings in C-Scheme and Malviya Nagar.",
            img: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=600",
            alt: "commercial solar company in jaipur"
          }
        ].map((item, idx) => (
          <div key={idx} className="group glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all border border-white/50 transform hover:-translate-y-2">
            <div className="h-56 overflow-hidden">
              <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <a href="#contact" className="text-emerald-600 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Solution <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Our Featured Solar Projects in Jaipur
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Take a look at how we've helped industries and businesses across Rajasthan switch to clean, affordable energy. These are real sites where we have installed high-efficiency solar panels.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="glass px-6 py-2 rounded-full font-bold text-sm text-emerald-700">View All Installations</button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group glass rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                {project.category}
              </div>
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-2xl flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-[#1D1D1F]">{project.capacity}</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {project.location}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-6 opacity-80">
                Turnkey EPC project including structural reinforcement and net-metering synchronization with JVVNL.
              </p>
              <button className="w-full py-3 rounded-xl border border-emerald-100 font-bold text-xs text-emerald-700 uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
                Project Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const RooftopSection: React.FC = () => (
  <section id="rooftop" className="py-24 relative bg-emerald-950/5">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800" 
          alt="Best rooftop solar panel installation company jaipur" 
          className="rounded-[48px] shadow-2xl relative z-10"
        />
        <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl z-20 shadow-xl max-w-xs">
          <p className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-widest">Client Spotlight</p>
          <p className="text-sm font-medium italic">"The most professional solar installation company in Jaipur we have worked with."</p>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">Rooftop Solar Panel Installation for Businesses & Luxury Homes</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We bring high-end engineering to your rooftop. As the <strong>best solar company in Jaipur</strong>, our specialized team ensures that your on-grid or off-grid solar system is optimized for Rajasthan's intense solar irradiance.
        </p>
        <div className="space-y-4 mb-10">
          {[
            "MNRE Approved Solar Panels",
            "Advanced On-Grid Solar System Jaipur Net Metering",
            "Bespoke Structural Civil Engineering",
            "Local Maintenance Team in Vaishali Nagar & Mansarovar"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-6 h-6 rounded-full glass flex items-center justify-center text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-semibold text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <button className="bg-[#1D1D1F] text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200">
          Request Site Audit
        </button>
      </div>
    </div>
  </section>
);

export const WhyChooseUs: React.FC = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-900 -z-10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#065f46_0%,transparent_50%)]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white mb-6">
          Why Choose the Best Solar Company in Jaipur?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Green World Bharat Solar combines world-class technology with local expertise to deliver the most reliable solar energy company services in Jaipur.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "25-Year Warranty", desc: "Long-term performance guarantee for every solar installation in Jaipur." },
          { title: "MNRE Certified", desc: "Official government approval ensures high standards and subsidy eligibility." },
          { title: "Custom Engineering", desc: "Structural designs built for Rajasthan's extreme wind and heat." },
          { title: "Smart Monitoring", desc: "Real-time generation tracking from your mobile or desktop." }
        ].map((item, idx) => (
          <div key={idx} className="glass-dark p-10 rounded-[32px] hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-emerald-400 mb-8 border-white/5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Process: React.FC = () => (
  <section id="process" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6">Engineering-First Solar Installation Process</h2>
        <p className="text-gray-500">How we maintain our status as the best solar company in Jaipur.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { step: "01", title: "Lidar Survey", desc: "Digital shading analysis of your Jaipur rooftop." },
          { step: "02", title: "CAD Design", desc: "Precision structural engineering and stringing layout." },
          { step: "03", title: "EPC Execution", desc: "Professional installation by certified solar engineers." },
          { step: "04", title: "Net Metering", desc: "Seamless synchronization with the Jaipur DISCOM grid." }
        ].map((item, idx) => (
          <div key={idx} className="glass p-10 rounded-[40px] text-center border-emerald-50 relative group overflow-hidden">
            <div className="absolute -top-10 -right-10 text-9xl font-bold text-emerald-50/50 group-hover:text-emerald-100/50 transition-colors -z-10">{item.step}</div>
            <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-8 shadow-lg shadow-emerald-200">
              {item.step}
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AreasAndFaq: React.FC = () => (
  <section className="py-24 bg-white/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="glass p-10 rounded-[40px]">
          <h2 id="areas" className="text-3xl font-bold mb-8">Serving All Locations in Jaipur</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            As a local <strong>solar energy company in Jaipur</strong>, we have active projects in:
          </p>
          <div className="grid grid-cols-2 gap-6 mb-12">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="font-bold text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          <div className="bg-emerald-950/5 p-8 rounded-3xl border border-emerald-900/5">
            <h3 className="font-bold mb-4 text-emerald-900 uppercase text-xs tracking-widest">Office HQ</h3>
            <p className="text-lg font-bold mb-1">Green World Bharat Solar</p>
            <address className="not-italic text-sm text-gray-600 mb-6 leading-relaxed">
              Industrial Estate, Mansarovar, Jaipur<br />
              Rajasthan 302020
            </address>
            <a href="tel:+911234567890" className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all inline-block border border-emerald-100">Call: +91 141-XXXXXXX</a>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Solar in Jaipur: Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group glass rounded-2xl overflow-hidden cursor-pointer">
                <summary className="flex justify-between items-center p-6 list-none font-bold text-gray-800">
                  {faq.question}
                  <span className="text-emerald-500 transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
