import { ShieldCheck, Award } from "lucide-react";

export default function Guarantee() {
    return (
        <section className="relative px-6 py-24 text-center overflow-hidden bg-white">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-supermock-red/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="relative p-8 sm:p-12 bg-white rounded-[2.5rem] shadow-2xl border border-black/5 hover:-translate-y-1 transition-transform duration-500 overflow-hidden">

                    {/* Golden Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5 opacity-50 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center justify-center p-5 mb-8 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-lg shadow-amber-500/10 group">
                            <Award className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        <h2 className="text-3xl font-bold text-supermock-text sm:text-4xl mb-6">
                            30-Day Money-Back Guarantee
                        </h2>

                        <p className="text-lg text-supermock-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
                            We're confident SuperMock will transform your centre. If you don't feel the difference within 30 days, we'll refund your full payment. <br className="hidden sm:block" />
                            <span className="text-supermock-text font-bold mt-1 inline-block border-b-2 border-amber-200">No questions asked.</span>
                        </p>

                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-50/50 border border-amber-100 text-sm text-amber-800 uppercase tracking-widest font-bold">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Official Promise</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
