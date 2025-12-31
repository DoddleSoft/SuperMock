import { Check, Info } from "lucide-react";
import Link from "next/link";
import Cloud from "./Cloud";

export default function Pricing() {
    return (
        <section id="pricing" className="relative px-6 py-24 sm:py-32 bg-gray-50">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-supermock-red/5 via-gray-50 to-gray-50 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-amber-50 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide text-amber-700">
                            PREMIUM VALUE
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gradient-glass sm:text-5xl mb-6">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-supermock-text-secondary">
                        Invest in your centre's growth with a single, predictable yearly payment.
                    </p>
                </div>

                <div className="relative mx-auto max-w-xl">
                    {/* Glowing effect behind card */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-supermock-red to-orange-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                    <div className="relative p-10 bg-white border border-black/5 rounded-[2rem] shadow-2xl overflow-hidden group hover:border-supermock-red/20 transition-all duration-300">

                        {/* Shimmer effect */}
                        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-100/50 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none"></div>

                        <div className="text-center mb-8">
                            <h3 className="text-lg font-semibold tracking-wider text-supermock-red uppercase mb-2">Yearly License</h3>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-2xl font-bold text-supermock-text-secondary align-top mt-2">BDT</span>
                                <span className="text-7xl font-bold text-supermock-text tracking-tighter">36,000</span>
                                <span className="text-xl font-medium text-supermock-text-secondary self-end mb-2">/year</span>
                            </div>
                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-black/5 mx-auto">
                                <Info className="w-4 h-4 text-supermock-text-secondary" />
                                <span className="text-sm text-supermock-text-secondary">Equivalent to just 3,000 BDT/mo</span>
                            </div>
                        </div>

                        <div className="space-y-5 mb-10">
                            {[
                                "Unlimited Students & Tests",
                                "Access to All 4 Modules",
                                "Owner, Admin & Teacher Roles",
                                "10GB Secure Cloud Storage",
                                "Free Updates for 12 Months",
                                "Priority Email & Phone Support"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-left">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-supermock-red/10 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-supermock-red" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-supermock-text font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/register" className="relative w-full py-5 text-lg font-bold text-white transition-all transform rounded-xl shadow-lg hover:scale-[1.02] overflow-hidden group/btn flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-supermock-red to-[#B91C1C] group-hover/btn:from-[#E31B23] group-hover/btn:to-supermock-red transition-all duration-300"></div>
                            <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                Get Started Now
                                <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                        </Link>

                        <p className="mt-6 text-sm text-center text-supermock-text-secondary">
                            No hidden fees. 30-day money-back guarantee.
                        </p>
                    </div>

                    {/* Cloud Storage Component */}
                    <Cloud />
                </div>
            </div>
        </section>
    );
}
