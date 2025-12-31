import { PlayCircle, Check } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-4 pt-32 pb-20 overflow-hidden sm:px-6 lg:px-8">

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 w-full max-w-[1000px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-supermock-red/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 grid gap-12 max-w-7xl mx-auto lg:grid-cols-2 lg:gap-16 lg:items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-center max-w-2xl mx-auto text-center lg:items-start lg:text-left lg:mx-0">

                    {/* Badge / Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-[fade-in_1s_ease-out_forwards]">
                        <span className="w-2 h-2 rounded-full bg-supermock-red animate-pulse"></span>
                        <span className="text-xs font-medium tracking-wide uppercase text-supermock-text-secondary">
                            Professional IELTS Mock Testing
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight text-white mb-8 sm:text-7xl animate-[fade-in_1s_ease-out_0.2s_forwards] opacity-0 translate-y-4">
                        Run Unlimited <br className="hidden lg:block" />
                        IELTS Mock Tests
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-supermock-text-secondary/90 mb-10 sm:text-xl animate-[fade-in_1s_ease-out_0.4s_forwards] opacity-0 translate-y-4">
                        The complete platform for IELTS centres. Manage exams, students, and results without limits or per-student fees.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-[fade-in_1s_ease-out_0.6s_forwards] opacity-0 translate-y-4">
                        <button className="px-8 py-4 text-base font-bold text-white transition-all transform rounded-xl bg-supermock-red hover:bg-[#c4152b] hover:scale-[1.02] shadow-[0_10px_30px_rgba(177,18,38,0.2)] hover:shadow-[0_15px_40px_rgba(177,18,38,0.3)]">
                            Get SuperMock for Your Centre
                        </button>
                    </div>

                    {/* Trust Items / Key Benefits */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-sm font-medium text-supermock-text-secondary animate-[fade-in_1s_ease-out_0.8s_forwards] opacity-0 translate-y-4 lg:justify-start">
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-supermock-red" />
                            <span>Unlimited students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-supermock-red" />
                            <span>All 4 IELTS modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-supermock-red" />
                            <span>Fixed yearly pricing</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Visual Card */}
                <div className="relative w-full max-w-xl mx-auto lg:max-w-none animate-[fade-in_1.2s_ease-out_0.8s_forwards] opacity-0 translate-y-8 lg:translate-x-8">
                    <div className="glass-card p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl animate-float">

                        {/* Mac Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-80"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] opacity-80"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28C840] opacity-80"></div>
                        </div>

                        {/* Content Area */}
                        <div className="relative overflow-hidden bg-[#0F0F10] aspect-video rounded-b-xl group">
                            {/* Fallback Dashboard Mockup or Video Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>

                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <div className="flex flex-col items-center gap-5 transition-transform duration-500 group-hover:scale-105">
                                    <div className="relative flex items-center justify-center w-24 h-24 transition-all duration-300 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-supermock-red/90 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] border border-white/20 group-hover:border-transparent">
                                        <PlayCircle className="w-10 h-10 text-white fill-white/20 group-hover:fill-white/0" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm font-semibold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">Watch Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reflection / Glow effect behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-supermock-red/10 blur-[100px] -z-10 rounded-full"></div>
                </div>

            </div>
        </section>
    );
}
