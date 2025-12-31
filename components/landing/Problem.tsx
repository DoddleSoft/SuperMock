import { XCircle, Clock, FileWarning, Database, Lock } from "lucide-react";

export default function Problem() {
    return (
        <section className="relative px-6 py-24 sm:py-32 bg-[#0A0A0B] overflow-hidden">

            {/* Darker, constrained background ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A0A0B] to-[#0A0A0B] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="flex flex-col items-center mb-20 text-center">
                    <span className="mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-red-500 uppercase bg-red-500/10 border border-red-500/20">
                        The Old Way
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        IELTS Mock Testing Is <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                            Messy, Manual & Expensive
                        </span>
                    </h2>
                    <p className="max-w-2xl text-lg text-supermock-text-secondary leading-relaxed">
                        Running exams with student limits and scattered spreadsheets is holding your centre back.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Problem Cards */}
                    {[
                        {
                            title: "Student Limits",
                            icon: XCircle,
                            desc: "Paying per student punishes your growth."
                        },
                        {
                            title: "Manual Grading",
                            icon: Clock,
                            desc: "Hours wasted marking paper tests by hand."
                        },
                        {
                            title: "Rigid Content",
                            icon: Lock,
                            desc: "Stuck with generic questions that don't fit your students' needs."
                        },
                        {
                            title: "Generic Tools",
                            icon: FileWarning,
                            desc: "Software that doesn't understand IELTS logic."
                        }
                    ].map((item, index) => (
                        <div key={index} className="group relative p-6 rounded-2xl bg-[#141416] border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.2)]">
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-supermock-text-secondary leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
