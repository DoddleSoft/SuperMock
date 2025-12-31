import { Play, Check } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-4 pt-32 pb-20 overflow-hidden sm:px-6 lg:px-8">

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 w-full max-w-[1000px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-supermock-red/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />

            <div className="relative z-10 grid gap-12 max-w-7xl mx-auto lg:grid-cols-2 lg:gap-16 lg:items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-center max-w-2xl mx-auto text-center lg:items-start lg:text-left lg:mx-0">

                    {/* Badge / Label */}
                    {/* Badge / Label */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 animate-[fade-in_1s_ease-out_forwards] hover:border-supermock-red/20 group cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-supermock-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-supermock-red"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide text-supermock-text/80 group-hover:text-supermock-text transition-colors">
                            MOCK TESTS PLATFORM FOR IELTS CENTRES
                        </span>
                    </div>

                    <h1 className="text-5xl font-medium tracking-tight text-supermock-text mb-8 sm:text-7xl animate-[fade-in_1s_ease-out_0.2s_forwards] translate-y-4">
                        Run <span className="text-sand font-extrabold italic pr-1">unlimited</span> <br className="hidden lg:block" />
                        <span className="text-sand-red italic">IELTS</span> mock tests
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-supermock-text-secondary mb-10 sm:text-xl animate-[fade-in_1s_ease-out_0.4s_forwards] opacity-0 translate-y-4">
                        The complete platform for IELTS centres. Manage exams, students, and results without limits or per-student fees.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-[fade-in_1s_ease-out_0.6s_forwards] opacity-0 translate-y-4">
                        <button className="relative group px-8 py-4 text-base font-bold text-white transition-all transform rounded-xl shadow-lg hover:scale-[1.02] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-supermock-red to-[#B91C1C] group-hover:from-[#E31B23] group-hover:to-supermock-red transition-all duration-300"></div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
                            <span className="relative flex items-center gap-2">
                                Get SuperMock for Your Centre
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>
                        </button>
                    </div>

                    {/* Trust Items / Key Benefits */}
                    {/* Trust Items / Key Benefits */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-[fade-in_1s_ease-out_0.8s_forwards] opacity-0 translate-y-4 lg:justify-start">
                        {[
                            "Unlimited students",
                            "Unlimited questions",
                            "Fixed yearly pricing"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/60 border border-black/5 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                                    <Check className="w-3 h-3" strokeWidth={3} />
                                </div>
                                <span className="text-sm font-semibold text-supermock-textish">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Hero Visual Card */}
                <div className="relative w-full max-w-xl mx-auto lg:max-w-none animate-[fade-in_1.2s_ease-out_0.8s_forwards] opacity-0 translate-y-8 lg:translate-x-8">
                    <div className="glass-card p-2 rounded-3xl animate-float shadow-2xl bg-white/40 backdrop-blur-md border border-white/50">
                        {/* Content Area */}
                        <div className="relative overflow-hidden bg-gray-900 aspect-video rounded-2xl group border border-black/5 shadow-inner">
                            {/* Fallback Dashboard Mockup or Video Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="group/play flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-110 cursor-pointer z-20">
                                    <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                                        {/* Wave Animations */}
                                        <div className="absolute inset-0 rounded-full bg-white/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] group-hover/play:bg-supermock-red/40"></div>
                                        <div className="absolute inset-0 rounded-full bg-white/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s] group-hover/play:bg-supermock-red/40"></div>

                                        {/* Main Backdrop */}
                                        <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 rounded-full bg-white/10 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover/play:bg-supermock-red group-hover/play:border-supermock-red group-hover/play:shadow-[0_0_50px_rgba(220,38,38,0.6)]">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white transition-all duration-300 group-hover/play:scale-90 ml-1.5 flex items-center justify-center">
                                                <Play className="w-full h-full" strokeWidth={0} fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md group-hover/play:text-supermock-red-100 transition-colors">Watch Demo</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Reflection / Glow effect behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-supermock-red/5 blur-[100px] -z-10 rounded-full"></div>
                </div>

            </div>
        </section>
    );
}
