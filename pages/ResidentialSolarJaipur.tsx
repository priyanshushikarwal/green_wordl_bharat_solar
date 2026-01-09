import React from 'react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';

export const ResidentialSolarJaipur: React.FC = () => {
    return (
        <Layout>
            <SEOHead
                title="Residential Solar Panel Installation Jaipur | Home Solar System | Green World Bharat Solar"
                description="Install rooftop solar panels for your home in Jaipur. Get up to ₹78,000 subsidy under PM Surya Ghar Yojana. 25-year warranty. Zero electricity bills. Free site survey!"
                canonical="https://greenworldbharatsolar.com/residential-solar-jaipur"
                keywords="residential solar jaipur, home solar panel jaipur, rooftop solar for home, pm surya ghar yojana jaipur, solar for house jaipur, home solar installation rajasthan"
            />

            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                            PM Surya Ghar Yojana Approved
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#1D1D1F] mb-6 leading-tight">
                            Residential Solar Installation in <span className="text-emerald-600">Jaipur</span>
                        </h1>
                        <p className="text-xl text-[#86868B] mb-8 leading-relaxed">
                            Power your home with clean, renewable solar energy. Join 500+ Jaipur homeowners
                            who have switched to solar and enjoy zero electricity bills.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919352513913?text=Hi%2C%20I%20want%20to%20install%20solar%20panels%20at%20my%20home%20in%20Jaipur."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
                            >
                                Get Free Home Survey
                            </a>
                            <a
                                href="tel:+919352513913"
                                className="bg-[#1D1D1F] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all"
                            >
                                Call: +91 93525 13913
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                            Why Install Solar at Your Jaipur Home?
                        </h2>
                        <p className="text-center text-[#86868B] mb-12 max-w-2xl mx-auto">
                            Jaipur receives 300+ sunny days annually, making it one of the best cities in India for solar energy generation.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { number: "₹0", label: "Monthly Bills", desc: "Eliminate electricity bills completely" },
                                { number: "₹78K", label: "Govt Subsidy", desc: "Under PM Surya Ghar Yojana" },
                                { number: "25", label: "Year Warranty", desc: "Long-term performance guarantee" },
                                { number: "3", label: "Year Payback", desc: "Recover investment quickly" }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                    <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                                    <div className="text-lg font-semibold text-[#1D1D1F] mb-2">{stat.label}</div>
                                    <div className="text-sm text-[#86868B]">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* System Sizes Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Choose the Right System for Your Home
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    size: "2-3 kW",
                                    home: "1-2 BHK Apartment",
                                    units: "240-360 units/month",
                                    appliances: "Lights, Fans, TV, Fridge",
                                    price: "₹30,000 - ₹87,000",
                                    note: "After Subsidy",
                                    popular: false
                                },
                                {
                                    size: "4-5 kW",
                                    home: "3 BHK Home / Villa",
                                    units: "480-600 units/month",
                                    appliances: "AC, Geyser, Kitchen Appliances",
                                    price: "₹88,000 - ₹1,53,000",
                                    note: "After Subsidy",
                                    popular: true
                                },
                                {
                                    size: "8-10 kW",
                                    home: "Large Villa / Bungalow",
                                    units: "960-1200 units/month",
                                    appliances: "Multiple ACs, Pool Pump, EV Charger",
                                    price: "₹3,06,000 - ₹4,28,000",
                                    note: "After Subsidy",
                                    popular: false
                                }
                            ].map((system, index) => (
                                <div key={index} className={`relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow ${system.popular ? 'border-2 border-emerald-600' : ''}`}>
                                    {system.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-3xl font-bold text-emerald-600 mb-2">{system.size}</div>
                                    <div className="text-lg font-semibold text-[#1D1D1F] mb-4">{system.home}</div>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center text-[#86868B]">
                                            <span className="text-emerald-600 mr-2">✓</span>
                                            {system.units}
                                        </li>
                                        <li className="flex items-center text-[#86868B]">
                                            <span className="text-emerald-600 mr-2">✓</span>
                                            {system.appliances}
                                        </li>
                                    </ul>
                                    <div className="border-t pt-4">
                                        <div className="text-2xl font-bold text-[#1D1D1F]">{system.price}</div>
                                        <div className="text-sm text-emerald-600">{system.note}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                            We Serve All Areas in Jaipur
                        </h2>
                        <p className="text-center text-[#86868B] mb-12">
                            Our residential solar installation team covers every locality in Jaipur and surrounding areas of Rajasthan.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Vaishali Nagar", "Malviya Nagar", "Mansarovar", "Jagatpura", "C-Scheme",
                                "Raja Park", "Tonk Road", "Pratap Nagar", "Jawahar Nagar", "Bani Park",
                                "Shyam Nagar", "Nirman Nagar", "Vidhyadhar Nagar", "Sodala", "Sanganer",
                                "Amer", "Jhotwara", "Murlipura", "Gopalpura", "Adarsh Nagar"
                            ].map((area, index) => (
                                <span key={index} className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Our Residential Installation Process
                        </h2>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "1", title: "Free Survey", desc: "Our engineer visits your home to assess roof structure and shading" },
                                { step: "2", title: "Custom Design", desc: "We design the optimal system based on your electricity consumption" },
                                { step: "3", title: "Installation", desc: "Professional installation in just 1-2 days with minimal disruption" },
                                { step: "4", title: "Net Metering", desc: "We handle all paperwork with JVVNL for net metering approval" }
                            ].map((process, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {process.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#1D1D1F]">{process.title}</h3>
                                    <p className="text-[#86868B]">{process.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Explore More</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/solar-panel-price-jaipur" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Solar Panel Prices →
                            </Link>
                            <Link to="/solar-subsidy-rajasthan" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Govt Subsidy Info →
                            </Link>
                            <Link to="/commercial-solar-jaipur" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Commercial Solar →
                            </Link>
                            <Link to="/contact" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Contact Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Power Your Home with Solar?
                    </h2>
                    <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
                        Get a free site survey and customized quote for your Jaipur home. Our experts will guide you through the entire process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919352513913?text=Hi%2C%20I%20want%20a%20free%20survey%20for%20residential%20solar%20installation%20in%20Jaipur."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
                        >
                            Book Free Survey
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
