import { Infinity, ShieldCheck, Wallet, CheckCircle2, PenTool } from "lucide-react";

export default function Solution() {
    return (
        <section className="relative px-6 py-24 sm:py-32 overflow-hidden bg-[#0A0A0B]">
            {/* Background Transitions */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0D0D10] to-[#0A0A0B]"></div>

            {/* Premium Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-supermock-red/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-20 text-center">
                    <span className="mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-900/20 border border-green-500/20">
                        The SuperMock Way
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        One System. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-supermock-text-secondary">
                            Zero Limitations.
                        </span>
                    </h2>
                    <p className="max-w-2xl text-lg text-supermock-text-secondary leading-relaxed">
                        Replace chaos with clarity. Get everything you need to run thousands of mock tests without extra costs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Solution Cards */}
                    {[
                        {
                            title: "Unlimited Mock Tests",
                            icon: Infinity,
                            desc: "Run 10 or 10,000 tests. No student caps, no per-test fees. Just pure scalability.",
                            gradient: "from-blue-500/20 to-cyan-500/5"
                        },
                        {
                            title: "Secure Cloud Platform",
                            icon: ShieldCheck,
                            desc: "Access from any device. Bank-grade security with automatic backups included.",
                            gradient: "from-purple-500/20 to-pink-500/5"
                        },
                        {
                            title: "Fixed Yearly Pricing",
                            icon: Wallet,
                            desc: "No monthly surprises. One flat annual fee covers unlimited students & modules.",
                            gradient: "from-amber-500/20 to-orange-500/5"
                        },
                        {
                            title: "Your Own Questions",
                            icon: PenTool,
                            desc: "Build tests with your own listening, reading, writing & speaking modules.",
                            gradient: "from-red-500/20 to-rose-500/5"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Inner Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                <div className="space-y-3">
                                    <p className="text-sm text-supermock-text-secondary leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-medium text-white/60 group-hover:text-white transition-colors pt-2">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                        <span>Problem Solved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
