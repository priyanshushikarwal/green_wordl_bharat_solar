import React from 'react';
import { TESTIMONIALS } from '../testimonials';

const MarqueeRow: React.FC<{ items: typeof TESTIMONIALS; direction: 'left' | 'right'; speed?: number }> = ({ items, direction, speed = 40 }) => {
    return (
        <div className="relative flex overflow-hidden py-4 group">
            <div
                className={`flex gap-6 whitespace-nowrap animate-marquee-${direction} hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={`${item.id}-${idx}`}
                        className="w-[350px] flex-shrink-0 glass p-6 rounded-2xl border border-white/20 hover:border-emerald-400/50 transition-colors cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1D1D1F] text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-3 h-3 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-normal line-clamp-3">"{item.quote}"</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {item.location}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TestimonialsSection: React.FC = () => {
    // Limit testimonials to reduce DOM elements and improve performance
    const chunk1 = TESTIMONIALS.slice(0, 10);
    const chunk2 = TESTIMONIALS.slice(10, 20);
    const chunk3 = TESTIMONIALS.slice(20, 30);

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>

            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#1D1D1F]">
                    Trusted by 100+ Jaipur Families & Businesses
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    Don't just take our word for it. Read what our customers from Mansarovar to Sitapura have to say about their solar journey.
                </p>
            </div>

            <div className="space-y-8 relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <MarqueeRow items={chunk1} direction="left" speed={35} />
                <MarqueeRow items={chunk2} direction="right" speed={40} />
                <MarqueeRow items={chunk3} direction="left" speed={38} />
            </div>

            <div className="mt-16 text-center">
                <button className="bg-[#1D1D1F] text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200">
                    Join Our Happy Customers
                </button>
            </div>
        </section>
    );
};
