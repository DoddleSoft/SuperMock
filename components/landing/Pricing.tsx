export default function Pricing() {
    return (
        <section id="pricing" className="relative px-6 py-24 sm:py-32">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-12">
                    Simple, Honest Pricing
                </h2>

                <div className="relative mx-auto max-w-lg">
                    <div className="absolute inset-0 bg-supermock-red/20 blur-[100px] rounded-full -z-10"></div>

                    <div className="glass-card p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-supermock-red to-transparent opacity-50"></div>

                        <h3 className="text-xl font-medium text-supermock-text-secondary mb-6">Yearly License</h3>

                        <div className="flex items-baseline justify-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-supermock-text-secondary">BDT</span>
                            <span className="text-5xl font-bold text-white tracking-tight">36,000</span>
                            <span className="text-supermock-text-secondary">/year</span>
                        </div>
                        <p className="text-sm text-supermock-text-secondary mb-8">
                            Equivalent to BDT 3,000/mo, billed yearly
                        </p>

                        <ul className="space-y-4 mb-10 text-supermock-text/90">
                            <li className="flex items-center justify-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-supermock-red"></span>
                                No per-student fees
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-supermock-red"></span>
                                No exam limits
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-supermock-red"></span>
                                No surprise charges
                            </li>
                        </ul>

                        <button className="w-full py-4 text-base font-bold text-white transition-all bg-supermock-red rounded-xl hover:bg-[#c4152b] shadow-lg hover:shadow-supermock-red/25 group-hover:scale-[1.02]">
                            Start Using SuperMock
                        </button>
                        <div className="mt-4 h-[2px] w-0 bg-supermock-red mx-auto transition-all duration-300 group-hover:w-1/2 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
