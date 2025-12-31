import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 pointer-events-none">
            {/* Glass Container for Navbar Content - optional, or just floating elements? 
          Prompt said "Glassmorphism hero card" but not explicitly glass navbar. 
          Usually a premium navbar has a blur background or is floating.
          Let's make the navbar content interactable but container minimal.
      */}
            <div className="absolute inset-0 pointer-events-auto bg-supermock-base/50 backdrop-blur-md border-b border-white/5 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 1 }}></div>

            <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pointer-events-auto">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white">
                        Super<span className="text-supermock-red">Mock</span>
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-supermock-text-secondary hover:text-white transition-colors hidden sm:block"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#features"
                        className="text-sm font-medium text-supermock-text-secondary hover:text-white transition-colors hidden sm:block"
                    >
                        Features
                    </Link>
                    <button className="px-5 py-2 text-sm font-semibold text-white transition-all bg-supermock-red rounded-lg hover:bg-red-700 hover:shadow-[0_0_20px_rgba(177,18,38,0.4)]">
                        Get SuperMock
                    </button>
                </div>
            </div>
        </nav>
    );
}
