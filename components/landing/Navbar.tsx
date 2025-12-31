import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none">
            <div className="w-full max-w-7xl pointer-events-auto">
                <div className="relative flex items-center justify-between px-6 py-4 rounded-2xl bg-[#0A0A0B]/70 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-white">
                            Super<span className="text-supermock-red">Mock</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Pricing
                        </Link>

                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="hidden sm:block text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Sign In
                        </Link>
                        <button className="px-5 py-2.5 text-sm font-bold text-white transition-all bg-supermock-red rounded-xl hover:bg-[#c4152b] shadow-lg shadow-supermock-red/20 hover:shadow-supermock-red/40 hover:-translate-y-0.5">
                            Get SuperMock
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
