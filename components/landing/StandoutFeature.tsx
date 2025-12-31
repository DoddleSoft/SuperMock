import { PenTool } from "lucide-react";

export default function StandoutFeature() {
    return (
        <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-supermock-red/20 via-white/5 to-supermock-red/10 animate-[fade-in_1s_ease-out_forwards]">
                    <div className="relative overflow-hidden rounded-[22px] bg-[#0E0E11] px-6 py-12 md:p-16 isolate">

                        {/* Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-supermock-red/10 border border-supermock-red/20">
                                    <PenTool className="w-4 h-4 text-supermock-red" />
                                    <span className="text-xs font-semibold tracking-wider uppercase text-supermock-red">
                                        Full Control
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                                    Use Your Own <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                                        Questions
                                    </span>
                                </h2>

                                <div className="space-y-4 text-lg text-supermock-text-secondary">
                                    <p>
                                        Build mock tests using your own questions and materials.
                                        Your content stays private to your centre.
                                    </p>
                                    <p>
                                        Create listening, reading, writing, and speaking modules
                                        that match your exact curriculum.
                                    </p>
                                </div>
                            </div>

                            {/* Screenshot Mockup */}
                            <div className="order-1 lg:order-2 relative">
                                {/* Glow effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[400px] bg-supermock-red/20 blur-[80px] rounded-full -z-10"></div>

                                <div className="glass-card rounded-xl border border-white/10 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                    <div className="bg-[#1A1A1A] rounded-lg aspect-[4/3] flex flex-col overflow-hidden relative">
                                        {/* Fake UI Header */}
                                        <div className="h-8 bg-[#252525] border-b border-white/5 flex items-center px-4 gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                        </div>
                                        {/* Fake UI Content */}
                                        <div className="flex-1 p-6 space-y-4">
                                            <div className="flex gap-4">
                                                <div className="w-1/3 space-y-3">
                                                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                                                    <div className="h-4 bg-white/5 rounded w-full"></div>
                                                    <div className="h-4 bg-white/5 rounded w-5/6"></div>
                                                </div>
                                                <div className="w-2/3 h-full bg-white/5 rounded border border-dashed border-white/10 flex items-center justify-center">
                                                    <span className="text-xs text-white/30">Question Editor Preview</span>
                                                </div>
                                            </div>
                                            <div className="h-20 bg-supermock-red/5 rounded border border-supermock-red/10 p-4">
                                                <div className="h-3 bg-supermock-red/20 rounded w-1/4 mb-2"></div>
                                                <div className="h-2 bg-supermock-red/10 rounded w-full"></div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-20 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
