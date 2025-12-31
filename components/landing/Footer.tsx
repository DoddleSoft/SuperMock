import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0A0A0C]">
            <div className="px-6 py-12 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold tracking-tight text-white">
                            Super<span className="text-supermock-red">Mock</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-supermock-text-secondary">
                        <Link href="#" className="hover:text-white transition-colors">Contact / WhatsApp</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    </div>

                    <div className="text-xs text-supermock-text-secondary/50">
                        &copy; {new Date().getFullYear()} SuperMock. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}
