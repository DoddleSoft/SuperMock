"use client";

import Link from "next/link";

export default function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none">
            <div className="w-full max-w-7xl pointer-events-auto">
                <div className="relative flex items-center justify-between px-6 py-4 rounded-2xl glass-panel">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-xl font-bold tracking-tight text-supermock-text hover:opacity-80 transition-opacity cursor-pointer"
                        >
                            Super<span className="text-supermock-red">Mock</span>
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex items-center gap-8">
                        <a
                            href="#features"
                            onClick={(e) => handleScroll(e, "features")}
                            className="text-sm font-medium text-supermock-text-secondary hover:text-supermock-text transition-colors cursor-pointer"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            onClick={(e) => handleScroll(e, "pricing")}
                            className="text-sm font-medium text-supermock-text-secondary hover:text-supermock-text transition-colors cursor-pointer"
                        >
                            Pricing
                        </a>

                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <Link href="/register" className="px-5 py-2.5 text-sm font-bold text-white transition-all bg-supermock-red rounded-xl hover:bg-[#c4152b] shadow-lg shadow-supermock-red/20 hover:shadow-supermock-red/40 hover:-translate-y-0.5">
                            Get SuperMock
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}
