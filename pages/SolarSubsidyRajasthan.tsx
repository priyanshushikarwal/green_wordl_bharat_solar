import React from 'react';
import { Layout } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';

export const SolarSubsidyRajasthan: React.FC = () => {
    return (
        <Layout>
            <SEOHead
                title="Solar Subsidy in Rajasthan 2026 | PM Surya Ghar Yojana Jaipur | Green World Bharat Solar"
                description="Get up to ₹78,000 solar subsidy in Rajasthan. Complete guide to PM Surya Ghar Yojana, eligibility, documents, and application process. Apply with Green World Bharat Solar."
                canonical="https://greenworldbharatsolar.com/solar-subsidy-rajasthan"
                keywords="solar subsidy rajasthan, pm surya ghar yojana jaipur, solar panel subsidy 2026, free solar scheme rajasthan, government solar subsidy, rooftop solar subsidy"
            />

            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                            Government Approved Scheme
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#1D1D1F] mb-6 leading-tight">
                            Solar Subsidy in <span className="text-emerald-600">Rajasthan 2026</span>
                        </h1>
                        <p className="text-xl text-[#86868B] mb-8 leading-relaxed">
                            Save up to ₹78,000 on your rooftop solar installation through PM Surya Ghar Yojana.
                            We handle the complete subsidy application process for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919352513913?text=Hi%2C%20I%20want%20to%20know%20about%20solar%20subsidy%20for%20my%20home%20in%20Jaipur."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
                            >
                                Check Your Eligibility
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

            {/* Subsidy Amounts */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                            PM Surya Ghar Yojana Subsidy Amounts
                        </h2>
                        <p className="text-center text-[#86868B] mb-12 max-w-2xl mx-auto">
                            Central Government subsidy for residential rooftop solar installations under PM Surya Ghar Muft Bijli Yojana.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    capacity: "Up to 2 kW",
                                    subsidy: "₹30,000/kW",
                                    total: "Up to ₹60,000",
                                    highlight: false
                                },
                                {
                                    capacity: "2 kW to 3 kW",
                                    subsidy: "₹18,000/kW (additional)",
                                    total: "Up to ₹78,000",
                                    highlight: true
                                },
                                {
                                    capacity: "Above 3 kW",
                                    subsidy: "No additional subsidy",
                                    total: "Max ₹78,000",
                                    highlight: false
                                }
                            ].map((item, index) => (
                                <div key={index} className={`relative p-8 rounded-3xl text-center ${item.highlight ? 'bg-emerald-600 text-white' : 'bg-white shadow-lg'}`}>
                                    {item.highlight && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <h3 className={`text-xl font-bold mb-4 ${item.highlight ? 'text-white' : 'text-[#1D1D1F]'}`}>
                                        {item.capacity}
                                    </h3>
                                    <div className={`text-lg mb-2 ${item.highlight ? 'text-emerald-100' : 'text-[#86868B]'}`}>
                                        {item.subsidy}
                                    </div>
                                    <div className={`text-3xl font-bold ${item.highlight ? 'text-white' : 'text-emerald-600'}`}>
                                        {item.total}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                            <p className="text-blue-800 text-center">
                                <strong>Important:</strong> Subsidy is only available for residential consumers connected to JVVNL/AVVNL/JdVVNL.
                                Commercial and industrial installations are not eligible for subsidy but can avail accelerated depreciation benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Eligibility Criteria for Solar Subsidy
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-lg">
                                <h3 className="text-xl font-bold mb-6 text-emerald-600 flex items-center">
                                    <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">✓</span>
                                    Eligible
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Residential electricity consumers",
                                        "Individual homeowners in Rajasthan",
                                        "Own roof space or shared rooftop with consent",
                                        "Valid electricity connection with DISCOM",
                                        "No existing solar installation with subsidy"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start text-[#86868B]">
                                            <span className="text-emerald-600 mr-3 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg">
                                <h3 className="text-xl font-bold mb-6 text-red-500 flex items-center">
                                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">✗</span>
                                    Not Eligible
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Commercial or industrial consumers",
                                        "Government buildings or offices",
                                        "Already availed solar subsidy before",
                                        "Rented property without owner consent",
                                        "Off-grid or hybrid systems with batteries"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start text-[#86868B]">
                                            <span className="text-red-500 mr-3 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Documents Required for Subsidy
                        </h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { doc: "Aadhar Card", icon: "🪪" },
                                { doc: "Electricity Bill", icon: "📄" },
                                { doc: "Bank Passbook", icon: "🏦" },
                                { doc: "Passport Photo", icon: "📷" },
                                { doc: "Property Documents", icon: "🏠" },
                                { doc: "Mobile Number (Linked to Aadhar)", icon: "📱" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="font-semibold text-[#1D1D1F]">{item.doc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                            Solar Subsidy Application Process
                        </h2>
                        <p className="text-center text-[#86868B] mb-12 max-w-2xl mx-auto">
                            We handle the complete subsidy process on your behalf. Here's how it works:
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    step: "1",
                                    title: "Register on National Portal",
                                    desc: "Apply online at pmsuryaghar.gov.in with your electricity consumer number and basic details."
                                },
                                {
                                    step: "2",
                                    title: "Get Feasibility Approval",
                                    desc: "DISCOM (JVVNL) approves your application based on sanctioned load and technical feasibility."
                                },
                                {
                                    step: "3",
                                    title: "Select Empaneled Vendor",
                                    desc: "Choose Green World Bharat Solar as your MNRE-approved installation partner."
                                },
                                {
                                    step: "4",
                                    title: "Installation & Inspection",
                                    desc: "We complete the installation. DISCOM inspector verifies and approves the system."
                                },
                                {
                                    step: "5",
                                    title: "Net Metering Activation",
                                    desc: "Bidirectional meter installed. Your solar system is now connected to the grid."
                                },
                                {
                                    step: "6",
                                    title: "Subsidy Disbursement",
                                    desc: "Subsidy amount directly credited to your bank account within 30-45 days."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg flex-grow">
                                        <h3 className="font-bold text-lg text-[#1D1D1F] mb-2">{item.title}</h3>
                                        <p className="text-[#86868B]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Comparison */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Solar Cost With & Without Subsidy
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">
                                <thead className="bg-emerald-600 text-white">
                                    <tr>
                                        <th className="px-6 py-5 text-left font-bold">System Size</th>
                                        <th className="px-6 py-5 text-left font-bold">Without Subsidy</th>
                                        <th className="px-6 py-5 text-left font-bold">Subsidy Amount</th>
                                        <th className="px-6 py-5 text-left font-bold">Your Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { size: "1 kW", without: "₹50,000", subsidy: "₹30,000", cost: "₹20,000" },
                                        { size: "2 kW", without: "₹1,00,000", subsidy: "₹60,000", cost: "₹40,000" },
                                        { size: "3 kW", without: "₹1,50,000", subsidy: "₹78,000", cost: "₹72,000" },
                                        { size: "4 kW", without: "₹2,00,000", subsidy: "₹78,000", cost: "₹1,22,000" },
                                        { size: "5 kW", without: "₹2,50,000", subsidy: "₹78,000", cost: "₹1,72,000" }
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-emerald-50 transition-colors">
                                            <td className="px-6 py-5 font-semibold">{row.size}</td>
                                            <td className="px-6 py-5 text-[#86868B]">{row.without}</td>
                                            <td className="px-6 py-5 text-amber-600 font-semibold">{row.subsidy}</td>
                                            <td className="px-6 py-5 text-emerald-600 font-bold">{row.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "How long does it take to get the solar subsidy?",
                                    a: "After installation and net metering, the subsidy is typically credited within 30-45 days directly to your bank account linked with Aadhar."
                                },
                                {
                                    q: "Can I get subsidy for a 10 kW system?",
                                    a: "The maximum subsidy is capped at ₹78,000 (for systems up to 3 kW). For larger systems, you'll pay the full price for capacity above 3 kW, but you can still avail the ₹78,000 subsidy for the first 3 kW."
                                },
                                {
                                    q: "Is the subsidy available for flats/apartments?",
                                    a: "Yes, if you have access to your own roof space or shared rooftop with consent from the housing society. Group housing societies can also apply for common area solar installations."
                                },
                                {
                                    q: "What if my subsidy application is rejected?",
                                    a: "Common reasons include incomplete documents, existing solar installation, or non-residential connection. We help you rectify issues and reapply if eligible."
                                },
                                {
                                    q: "Do I need to pay the vendor upfront?",
                                    a: "Yes, you pay the full installation cost to us. The government subsidy is reimbursed directly to your bank account after verification."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="font-bold text-lg text-[#1D1D1F] mb-2">{faq.q}</h3>
                                    <p className="text-[#86868B]">{faq.a}</p>
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
                                Solar Prices →
                            </Link>
                            <Link to="/residential-solar-jaipur" className="bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-semibold text-emerald-600 hover:bg-emerald-50 border">
                                Residential Solar →
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
            <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-500 to-amber-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Apply for Solar Subsidy Today
                    </h2>
                    <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
                        Let us handle the complete subsidy process. From application to disbursement, we ensure you get the maximum benefit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919352513913?text=Hi%2C%20I%20want%20to%20apply%20for%20solar%20subsidy%20under%20PM%20Surya%20Ghar%20Yojana."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-50 transition-all shadow-xl"
                        >
                            Apply Now via WhatsApp
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
