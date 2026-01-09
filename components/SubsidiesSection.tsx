import React from 'react';

export const SubsidiesSection: React.FC = () => {
    return (
        <section id="subsidies" className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-200/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-200/20 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Government Incentives</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#1D1D1F]">
                        Solar Subsidies & Schemes <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500">
                            Save up to ₹95,000
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Take advantage of Central and State government initiatives to make your transition to solar energy incredibly affordable.
                    </p>
                </div>

                {/* PM Surya Ghar Scheme */}
                <div className="mb-16">
                    <div className="glass-dark bg-[#1D1D1F] text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-2">PM Surya Ghar: Muft Bijli Yojana</h3>
                                <p className="text-gray-400">Central Government Subsidy Scheme 2026-27</p>
                            </div>
                            <div className="mt-4 md:mt-0 bg-yellow-500/20 border border-yellow-500/50 px-6 py-2 rounded-full text-yellow-400 font-bold text-sm uppercase tracking-wider">
                                Most Popular
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 relative z-10">
                            {[
                                { capacity: "1 kW System", subsidy: "₹30,000", label: "Fixed Subsidy" },
                                { capacity: "2 kW System", subsidy: "₹60,000", label: "Fixed Subsidy" },
                                { capacity: "3 kW - 10 kW", subsidy: "₹78,000", label: "Max Subsidy" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/15 transition-all">
                                    <p className="text-gray-400 text-sm mb-2">{item.capacity}</p>
                                    <p className="text-3xl font-bold text-yellow-400 mb-1">{item.subsidy}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rajasthan State & Eligibility Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Rajasthan State Benefits */}
                    <div className="glass p-10 rounded-[40px] border-emerald-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1D1D1F]">Rajasthan State Benefits</h3>
                                <p className="text-gray-500 text-sm">Additional incentives for Jaipur residents</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mt-1 flex-shrink-0">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Additional Top-up Subsidy</h4>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Up to <span className="text-emerald-600 font-bold">₹17,000</span> extra for eligible households (e.g., beneficiaries of Mukhyamantri Nishulk Bijli Yojana consuming &gt;150 units).
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mt-1 flex-shrink-0">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Export Incentives</h4>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Earn ₹0.15 per unit for surplus power exported to grid + Induction Cooktop scheme for general consumers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Eligibility & Process */}
                    <div className="glass p-10 rounded-[40px] border-emerald-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1D1D1F]">Eligibility & Process</h3>
                                <p className="text-gray-500 text-sm">Simple steps to claim your subsidy</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Must be a residential homeowner in Rajasthan",
                                "Valid electricity connection with JVVNL",
                                "System must be Grid-Connected (On-Grid)",
                                "Installation by MNRE approved vendor (like us)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <a href="#contact" className="flex items-center justify-between w-full p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors group cursor-pointer">
                                <span className="font-bold text-emerald-800">Check Your Eligibility Now</span>
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:translate-x-1 transition-transform">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
