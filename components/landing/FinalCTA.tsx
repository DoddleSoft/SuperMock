import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="relative px-6 py-32 overflow-hidden text-center bg-[#0A0A0B]">
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-supermock-red/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl/none">
                    Ready to Run Your Centre <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-supermock-red to-supermock-red/60">
                        Like a Pro?
                    </span>
                </h2>

                <p className="text-xl text-supermock-text-secondary max-w-2xl mx-auto">
                    Join the top IELTS centres delivering professional mock tests with zero limitations.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="group relative px-10 py-5 text-xl font-bold text-white transition-all transform rounded-full bg-supermock-red hover:bg-[#c4152b] shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-10px_rgba(220,38,38,0.7)] hover:-translate-y-1">
                        <span className="flex items-center gap-3">
                            Get SuperMock Now
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>

                <p className="text-sm text-white/30 font-medium tracking-wide uppercase">
                    Instant Access • No Credit Card Required
                </p>
            </div>
        </section>
    );
}
