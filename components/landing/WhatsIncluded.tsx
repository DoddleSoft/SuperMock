import { Check, Globe, HardDrive, Layout, Users, Zap, Shield, Headphones } from "lucide-react";

export default function WhatsIncluded() {
    return (
        <section className="relative px-6 py-24 sm:py-32 overflow-hidden bg-[#0A0A0B]">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        Everything You Need <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
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
                            desc: "Accounts for Owners, Admins, Teachers & Receptionists."
                        },
                        {
                            title: "All 4 Modules",
                            icon: Layout,
                            desc: "Listening, Reading, Writing & Speaking capabilities built-in."
                        },
                        {
                            title: "10GB Cloud Storage",
                            icon: HardDrive,
                            desc: "Securely store unlimited student papers and audio recordings."
                        },
                        {
                            title: "Any Device",
                            icon: Globe,
                            desc: "Works perfectly on Mac, PC, Tablets, and all modern browsers."
                        },
                        {
                            title: "Instant Updates",
                            icon: Zap,
                            desc: "Get new features automatically. No manual installations needed."
                        },
                        {
                            title: "Bank-Grade Security",
                            icon: Shield,
                            desc: "Daily backups and encrypted data protection."
                        },
                        {
                            title: "Priority Support",
                            icon: Headphones,
                            desc: "Direct access to our support team whenever you need help."
                        },
                        {
                            title: "Unlimited Growth",
                            icon: Check,
                            desc: "Add as many students and tests as you want. No limits."
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors group">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-supermock-text-secondary leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
