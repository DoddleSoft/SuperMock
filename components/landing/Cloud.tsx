'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HardDrive } from "lucide-react";

export default function Cloud() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="px-6 py-12">
            <div className="max-w-3xl mx-auto">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <HardDrive className="w-6 h-6 text-supermock-text-secondary" />
                        </div>
                        <div>
                            <p className="text-lg text-white font-medium leading-relaxed">
                                SuperMock includes <span className="text-supermock-red">10GB secure cloud storage</span>.
                            </p>
                            <p className="text-supermock-text-secondary mt-1">
                                Need more? Upgrade anytime — without changing your licence.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center text-sm font-medium text-supermock-text-secondary hover:text-white transition-colors"
                        >
                            {isOpen ? "Hide storage options" : "View storage upgrade options"}
                            {isOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                        </button>

                        {isOpen && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
                                <div className="p-3 rounded bg-white/5 border border-white/5 text-center">
                                    <div className="text-sm text-supermock-text-secondary">50GB</div>
                                    <div className="font-semibold text-white">+ BDT 5,000/yr</div>
                                </div>
                                <div className="p-3 rounded bg-white/5 border border-white/5 text-center">
                                    <div className="text-sm text-supermock-text-secondary">100GB</div>
                                    <div className="font-semibold text-white">+ BDT 9,000/yr</div>
                                </div>
                                <div className="p-3 rounded bg-white/5 border border-white/5 text-center">
                                    <div className="text-sm text-supermock-text-secondary">500GB</div>
                                    <div className="font-semibold text-white">Contact Us</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
