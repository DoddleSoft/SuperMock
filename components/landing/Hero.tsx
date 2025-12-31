import { PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20 overflow-hidden text-center sm:px-6 lg:px-8">

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 w-full max-w-[1000px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-supermock-red/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">

                {/* Badge / Label - Optional but premium feel */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-[fade-in_1s_ease-out_forwards]">
                    <span className="w-2 h-2 rounded-full bg-supermock-red animate-pulse"></span>
                    <span className="text-xs font-medium tracking-wide uppercase text-supermock-text-secondary">
                        Professional IELTS Mock Testing
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-[fade-in_1s_ease-out_0.2s_forwards] opacity-0 translate-y-4">
                    The Professional Way to <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                        Run IELTS Mock Tests
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg leading-relaxed text-supermock-text-secondary sm:text-xl animate-[fade-in_1s_ease-out_0.4s_forwards] opacity-0 translate-y-4">
                    A premium, cloud-based mock test system built for IELTS centres —
                    with no student limits and a fixed yearly cost.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-[fade-in_1s_ease-out_0.6s_forwards] opacity-0 translate-y-4">
                    <button className="px-8 py-4 text-base font-bold text-white transition-all transform rounded-lg bg-supermock-red hover:bg-[#c4152b] hover:scale-[1.02] shadow-[0_10px_30px_rgba(177,18,38,0.2)] hover:shadow-[0_15px_40px_rgba(177,18,38,0.3)]">
                        Get SuperMock for Your Centre
                    </button>
                </div>
            </div>

            {/* Hero Visual Card */}
            <div className="relative w-full max-w-5xl mt-16 animate-[fade-in_1.2s_ease-out_0.8s_forwards] opacity-0 translate-y-8">
                <div className="glass-card p-2 rounded-2xl sm:p-4">
                    <div className="relative overflow-hidden bg-[#1A1A1A] aspect-video rounded-xl shadow-2xl group">
                        {/* Fallback Dashboard Mockup or Video Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative flex items-center justify-center w-20 h-20 transition-transform rounded-full bg-white/10 backdrop-blur-md group-hover:scale-110">
                                    <PlayCircle className="w-8 h-8 text-white fill-white/20" />
                                </div>
                                <span className="text-sm font-medium tracking-wider uppercase text-supermock-text-secondary">Watch Intro</span>
                            </div>
                        </div>

                        {/* Simulated Glass Overlay on top of content for sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Reflection / Glow effect behind */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-supermock-red/20 to-transparent blur-2xl -z-10 opacity-40"></div>
                </div>
            </div>

        </section>
    );
}
