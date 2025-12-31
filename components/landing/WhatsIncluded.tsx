import { Check, Globe, HardDrive, Layout, Users, Zap, Shield, Headphones } from "lucide-react";

export default function WhatsIncluded() {
    return (
        <section id="features" className="relative px-6 py-24 sm:py-32 overflow-hidden bg-white">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-supermock-red/5 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide text-blue-700">
                            EVERYTHING INCLUDED
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gradient-glass sm:text-5xl mb-6">
                        Everything You Need <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-supermock-text to-supermock-text-secondary">
                            Included in One Plan
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-supermock-text-secondary">
                        No hidden fees or "pro" tiers. You get the full power of SuperMock from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Feature Cards */}
                    {[
                        {
                            title: "Full Access Roles",
                            icon: Users,
                            desc: "Accounts for Owners, Admins, Teachers & Receptionists.",
                            color: "blue"
                        },
                        {
                            title: "All 4 Modules",
                            icon: Layout,
                            desc: "Listening, Reading, Writing & Speaking capabilities built-in.",
                            color: "purple"
                        },
                        {
                            title: "10GB Cloud Storage",
                            icon: HardDrive,
                            desc: "Securely store unlimited student papers and audio recordings.",
                            color: "amber"
                        },
                        {
                            title: "Any Device",
                            icon: Globe,
                            desc: "Works perfectly on Mac, PC, Tablets, and all modern browsers.",
                            color: "green"
                        },
                        {
                            title: "Instant Updates",
                            icon: Zap,
                            desc: "Get new features automatically. No manual installations needed.",
                            color: "yellow"
                        },
                        {
                            title: "Bank-Grade Security",
                            icon: Shield,
                            desc: "Daily backups and encrypted data protection.",
                            color: "red"
                        },
                        {
                            title: "Priority Support",
                            icon: Headphones,
                            desc: "Direct access to our support team whenever you need help.",
                            color: "indigo"
                        },
                        {
                            title: "Unlimited Growth",
                            icon: Check,
                            desc: "Add as many students and tests as you want. No limits.",
                            color: "teal"
                        }
                    ].map((item, index) => (
                        <div key={index} className="group relative p-6 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50/0 to-${item.color}-50/0 group-hover:from-${item.color}-50/50 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>

                            <div className="relative z-10 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-supermock-text border border-black/5 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:bg-${item.color}-50 group-hover:text-${item.color}-600`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-supermock-text mb-2 group-hover:text-black transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-supermock-text-secondary leading-relaxed group-hover:text-supermock-text/80 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
