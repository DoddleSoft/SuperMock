'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HardDrive, Info } from "lucide-react";

export default function Cloud() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="px-6 pb-24 sm:pb-32 bg-[#0A0A0B]">
            <div className="max-w-3xl mx-auto">
                <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-6 border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-colors relative overflow-hidden">

                    {/* Subtle Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="flex items-start gap-5 relative z-10">
                        <div className="p-3 bg-supermock-red/10 rounded-xl border border-supermock-red/20">
                            <HardDrive className="w-6 h-6 text-supermock-red" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-2">
                                Need More Space?
                            </h3>
                            <p className="text-supermock-text-secondary leading-relaxed">
                                SuperMock includes <span className="text-white font-medium">10GB secure cloud storage</span>.
                                That's enough for thousands of student records. Upgrade anytime if you scale up.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-4 relative z-10">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors group"
                        >
                            {isOpen ? "Hide storage options" : "View storage upgrade options"}
                            {isOpen ?
                                <ChevronUp className="w-4 h-4 ml-2 text-supermock-red" /> :
                                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                            }
                        </button>

                        {isOpen && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
                                {[
                                    { size: "20GB", price: "499" },
                                    { size: "50GB", price: "1,499" },
                                    { size: "100GB", price: "2,999" }
                                ].map((tier, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-[#0A0A0B] border border-white/10 text-center hover:border-supermock-red/30 transition-colors">
                                        <div className="text-sm font-medium text-supermock-text-secondary mb-1">{tier.size}</div>
                                        <div className="font-bold text-white text-lg">
                                            BDT {tier.price} <span className="text-xs font-normal text-white/50">/mo</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
