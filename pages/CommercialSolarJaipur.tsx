import React from 'react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';

export const CommercialSolarJaipur: React.FC = () => {
    return (
        <Layout>
            <SEOHead
                title="Commercial & Industrial Solar Installation Jaipur | Business Solar | Green World Bharat Solar"
                description="Leading commercial solar EPC in Jaipur. Industrial rooftop solar for factories, warehouses, offices. 50kW to 10MW capacity. Net metering. Reduce electricity costs by 80%."
                canonical="https://greenworldbharatsolar.com/commercial-solar-jaipur"
                keywords="commercial solar jaipur, industrial solar rajasthan, factory solar installation, warehouse solar panels, business solar jaipur, solar EPC jaipur, net metering commercial"
            />

            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold mb-6">
                            MNRE Approved EPC Partner
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Commercial & Industrial <span className="text-emerald-400">Solar Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Reduce your business electricity costs by up to 80%. We specialize in large-scale
                            solar installations for factories, warehouses, and commercial buildings across Jaipur and Rajasthan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919352513913?text=Hi%2C%20I%20need%20a%20commercial%20solar%20quote%20for%20my%20business%20in%20Jaipur."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl"
                            >
                                Get Commercial Quote
                            </a>
                            <a
                                href="tel:+919352513913"
                                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                            >
                                Call: +91 93525 13913
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "15+", label: "MW Installed" },
                                { number: "200+", label: "Commercial Projects" },
                                { number: "80%", label: "Bill Reduction" },
                                { number: "4-5", label: "Year Payback" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                                    <div className="text-[#86868B] font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                            Commercial Solar Solutions We Offer
                        </h2>
                        <p className="text-center text-[#86868B] mb-12 max-w-2xl mx-auto">
                            Tailored solar solutions for every type of commercial and industrial establishment in Jaipur.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Factory Rooftop Solar",
                                    capacity: "100 kW - 5 MW",
                                    description: "High-capacity installations for manufacturing units in Sitapura, VKI, and Bagru industrial areas.",
                                    features: ["Heavy load synchronization", "Dust-resistant panels", "Remote monitoring"]
                                },
                                {
                                    title: "Warehouse Solar",
                                    capacity: "50 kW - 2 MW",
                                    description: "Large roof area utilization for warehouses and logistics centers across Jaipur.",
                                    features: ["Elevated mounting structures", "Maximum roof coverage", "Quick installation"]
                                },
                                {
                                    title: "Office Building Solar",
                                    capacity: "20 kW - 200 kW",
                                    description: "Aesthetic installations for corporate offices in C-Scheme, Malviya Nagar, and business districts.",
                                    features: ["Building integrated design", "Silent operation", "Green certification support"]
                                },
                                {
                                    title: "Hotel & Hospitality",
                                    capacity: "50 kW - 500 kW",
                                    description: "24/7 power solutions for hotels, resorts, and banquet halls in Jaipur.",
                                    features: ["AC load management", "Hybrid systems available", "Zero disruption install"]
                                },
                                {
                                    title: "Educational Institutions",
                                    capacity: "30 kW - 300 kW",
                                    description: "Solar for schools, colleges, and universities with educational monitoring displays.",
                                    features: ["CSR compliance", "Student learning integration", "Long-term savings"]
                                },
                                {
                                    title: "Healthcare Facilities",
                                    capacity: "50 kW - 500 kW",
                                    description: "Reliable solar with battery backup for hospitals and clinics in Jaipur.",
                                    features: ["Critical load backup", "Hybrid systems", "Uninterrupted power"]
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-emerald-600 text-sm font-semibold mb-2">{solution.capacity}</div>
                                    <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">{solution.title}</h3>
                                    <p className="text-[#86868B] mb-4">{solution.description}</p>
                                    <ul className="space-y-2">
                                        {solution.features.map((feature, i) => (
                                            <li key={i} className="text-sm text-[#86868B] flex items-center">
                                                <span className="text-emerald-600 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Areas */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                            Industrial Areas We Serve in Jaipur
                        </h2>
                        <p className="text-center text-[#86868B] mb-12">
                            Our commercial solar team has extensive experience in all major industrial zones of Jaipur and Rajasthan.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { area: "Sitapura Industrial Area", projects: "50+ Projects" },
                                { area: "VKI Industrial Area", projects: "35+ Projects" },
                                { area: "Bagru Industrial Area", projects: "25+ Projects" },
                                { area: "Mahindra SEZ", projects: "20+ Projects" },
                                { area: "Bindayaka Industrial", projects: "15+ Projects" },
                                { area: "Bassi Industrial", projects: "10+ Projects" },
                                { area: "Sanganer Industrial", projects: "20+ Projects" },
                                { area: "Jhotwara Industrial", projects: "15+ Projects" }
                            ].map((item, index) => (
                                <div key={index} className="bg-emerald-50 p-6 rounded-2xl text-center">
                                    <h3 className="font-bold text-[#1D1D1F] mb-1">{item.area}</h3>
                                    <p className="text-emerald-600 text-sm">{item.projects}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Commercial Solar ROI in Jaipur
                        </h2>

                        <div className="bg-white p-10 rounded-3xl shadow-xl">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-[#1D1D1F]">Example: 100 kW Factory Installation</h3>
                                <p className="text-[#86868B]">Sitapura Industrial Area, Jaipur</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-4 text-[#1D1D1F]">Investment Details</h4>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="text-[#86868B]">System Cost</span>
                                            <span className="font-semibold">₹45-50 Lakhs</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="text-[#86868B]">Per kW Cost</span>
                                            <span className="font-semibold">₹45,000-50,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-[#86868B]">Accelerated Depreciation</span>
                                            <span className="font-semibold text-emerald-600">40% Tax Benefit</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-4 text-[#1D1D1F]">Returns</h4>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="text-[#86868B]">Monthly Generation</span>
                                            <span className="font-semibold">12,000-14,000 units</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="text-[#86868B]">Monthly Savings</span>
                                            <span className="font-semibold text-emerald-600">₹90,000-1,10,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-[#86868B]">Payback Period</span>
                                            <span className="font-semibold">4-5 Years</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t text-center">
                                <div className="text-3xl font-bold text-emerald-600">₹2.5 - 3 Crores</div>
                                <div className="text-[#86868B]">Total 25-Year Savings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Why Choose Us for Commercial Solar?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Engineering Expertise", desc: "Dedicated structural and electrical engineering team for complex industrial installations." },
                                { title: "MNRE Approved", desc: "Government-approved EPC ensuring quality standards and eligibility for all incentives." },
                                { title: "Net Metering Support", desc: "Complete documentation and liaison with JVVNL for net metering approval." },
                                { title: "5-Year Warranty", desc: "Comprehensive warranty on installation with 25-year panel performance guarantee." },
                                { title: "O&M Services", desc: "Optional annual maintenance contracts with remote monitoring and quick support." },
                                { title: "Financing Support", desc: "Assistance with solar financing options and bank loan documentation." }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-600 text-xl">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-[#1D1D1F]">{item.title}</h3>
                                        <p className="text-[#86868B]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Related Pages</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/solar-panel-price-jaipur" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Solar Panel Prices →
                            </Link>
                            <Link to="/residential-solar-jaipur" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Residential Solar →
                            </Link>
                            <Link to="/solar-subsidy-rajasthan" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Subsidy Info →
                            </Link>
                            <Link to="/contact" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Contact Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Get a Free Commercial Solar Assessment
                    </h2>
                    <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                        Our engineers will visit your facility, analyze your load profile, and provide a detailed proposal with ROI projections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919352513913?text=Hi%2C%20I%20need%20a%20commercial%20solar%20assessment%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl"
                        >
                            Request Site Visit
                        </a>
                        <a
                            href="tel:+919352513913"
                            className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                        >
                            +91 93525 13913
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
