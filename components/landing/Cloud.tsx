'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HardDrive, Info } from "lucide-react";

export default function Cloud() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mt-8">
            <div className="max-w-3xl mx-auto">
                <div className="group relative glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-6 border border-black/5 bg-gray-50 hover:bg-white transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">

                    {/* Subtle Gradient & Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>

                    <div className="flex items-start gap-5 relative z-10">
                        <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <HardDrive className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-supermock-text mb-2 flex items-center gap-2">
                                Need More Space?
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">Cloud</span>
                            </h3>
                            <p className="text-supermock-text-secondary leading-relaxed">
                                SuperMock includes <span className="text-supermock-text font-medium border-b border-blue-200">10GB secure cloud storage</span>.
                                That's enough for thousands of student records. Upgrade anytime if you scale up.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-black/5 pt-6 relative z-10">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center text-sm font-bold text-supermock-text-secondary hover:text-blue-600 transition-colors group/btn w-full"
                        >
                            <span className="flex-1 text-left">
                                {isOpen ? "Hide storage options" : "View storage upgrade options"}
                            </span>
                            <div className={`p-1.5 rounded-full bg-gray-100 group-hover/btn:bg-blue-50 transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : ''}`}>
                                {isOpen ?
                                    <ChevronUp className="w-4 h-4" /> :
                                    <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                                }
                            </div>
                        </button>

                        {isOpen && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-[fade-in_0.3s_ease-out_forwards]">
                                {[
                                    { size: "20GB", price: "499", tag: "Most Popular", tagColor: "blue" },
                                    { size: "50GB", price: "1,499", tag: "Best Value", tagColor: "green" },
                                    { size: "100GB", price: "2,999", tag: null, tagColor: null }
                                ].map((tier, idx) => (
                                    <div key={idx} className={`relative p-4 rounded-xl border transition-all duration-300 cursor-default group/card ${tier.tag ? `bg-${tier.tagColor}-50/50 border-${tier.tagColor}-200 shadow-sm` : 'bg-white border-black/5 hover:border-blue-200 hover:shadow-sm'}`}>
                                        {tier.tag && (
                                            <div className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-${tier.tagColor}-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm whitespace-nowrap`}>
                                                {tier.tag}
                                            </div>
                                        )}
                                        <div className={`text-sm font-medium text-supermock-text-secondary mb-1 ${tier.tag ? `text-${tier.tagColor}-700` : 'group-hover/card:text-blue-600'} transition-colors`}>{tier.size}</div>
                                        <div className="font-bold text-supermock-text text-lg">
                                            BDT {tier.price} <span className="text-xs font-normal text-supermock-text-secondary/70">/mo</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
