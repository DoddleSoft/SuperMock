import { Infinity, ShieldCheck, Wallet, CheckCircle2, PenTool } from "lucide-react";

export default function Solution() {
    return (
        <section className="relative px-6 py-24 sm:py-32 overflow-hidden bg-white">
            {/* Background Transitions */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

            {/* Premium Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-supermock-red/5 blur-[120px] rounded-full pointer-events-none mix-blend-multiply"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-green-50 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide text-green-700">
                            THE SUPERMOCK WAY
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gradient-glass sm:text-5xl lg:text-6xl mb-6">
                        One System. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-supermock-text via-supermock-text to-supermock-text-secondary">
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
                            gradient: "from-blue-500/5 to-cyan-500/5",
                            border: "hover:border-blue-500/20",
                            iconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                        },
                        {
                            title: "Secure Cloud Platform",
                            icon: ShieldCheck,
                            desc: "Access from any device. Bank-grade security with automatic backups included.",
                            gradient: "from-purple-500/5 to-pink-500/5",
                            border: "hover:border-purple-500/20",
                            iconBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                        },
                        {
                            title: "Fixed Yearly Pricing",
                            icon: Wallet,
                            desc: "No monthly surprises. One flat annual fee covers unlimited students & modules.",
                            gradient: "from-amber-500/5 to-orange-500/5",
                            border: "hover:border-amber-500/20",
                            iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white"
                        },
                        {
                            title: "Your Own Questions",
                            icon: PenTool,
                            desc: "Build tests with your own listening, reading, writing & speaking modules.",
                            gradient: "from-red-500/5 to-rose-500/5",
                            border: "hover:border-red-500/20",
                            iconBg: "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`relative group p-6 rounded-3xl bg-white border border-black/5 ${item.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
                        >
                            {/* Detailed Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-black/5 group-hover:border-transparent transition-all duration-300 shadow-sm ${item.iconBg}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-supermock-text mb-3">
                                    {item.title}
                                </h3>

                                <div className="space-y-4">
                                    <p className="text-sm text-supermock-text-secondary leading-relaxed group-hover:text-supermock-text/80 transition-colors">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-2 pt-2 border-t border-black/5 group-hover:border-black/10 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        <span className="text-xs font-semibold text-supermock-text-secondary uppercase tracking-wide">Problem Solved</span>
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
