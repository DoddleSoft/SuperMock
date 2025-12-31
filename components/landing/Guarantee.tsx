import { ShieldCheck, Award } from "lucide-react";

export default function Guarantee() {
    return (
        <section className="relative px-6 py-24 text-center overflow-hidden bg-[#0A0A0B]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-supermock-red/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 mb-8 rounded-full bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/20 shadow-lg shadow-yellow-500/5">
                    <Award className="w-10 h-10 text-yellow-500" />
                </div>

                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                    30-Day Money-Back Guarantee
                </h2>

                <p className="text-lg text-supermock-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
                    We're confident SuperMock will transform your centre. If you don't feel the difference within 30 days, we'll refund your full payment. <br className="hidden sm:block" />
                    <span className="text-white font-medium">No questions asked.</span>
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-white/40 uppercase tracking-widest font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Official Promise</span>
                </div>
            </div>
        </section>
    );
}
