import { Infinity, ShieldCheck, Wallet } from "lucide-react";

export default function Solution() {
    const solutions = [
        {
            title: "Unlimited mock tests",
            icon: Infinity,
            description: "Run as many tests as you need. No caps, no per-test fees."
        },
        {
            title: "Cloud-based & secure",
            icon: ShieldCheck,
            description: "Access from anywhere. Data is encrypted and backed up automatically."
        },
        {
            title: "Fixed yearly cost",
            icon: Wallet,
            description: "Predictable pricing. One payment covers everything for the year."
        }
    ];

    return (
        <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
            {/* Background with slight lightness from previous section transition flow */}
            <div className="absolute inset-0 bg-[#1a1a1c]"></div>

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-supermock-red/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        SuperMock Replaces All of That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-supermock-red to-white">
                            With One System
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group p-8 glass-panel rounded-2xl bg-[#141416]/60 hover:bg-[#1A1A1D] transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-white/10`}
                            style={{
                                /* Subtle staggering could be done with delay prop if using framer, 
                                   here just CSS spacing */
                            }}
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-supermock-red/10 text-supermock-red border border-supermock-red/20 group-hover:bg-supermock-red group-hover:text-white transition-all duration-300">
                                <item.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">
                                {item.title}
                            </h3>

                            <p className="text-supermock-text-secondary">
                                {item.description}
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-supermock-red/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
