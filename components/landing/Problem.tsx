import { XCircle, Clock, FileWarning, Database, Lock } from "lucide-react";

export default function Problem() {
    return (
        <section className="relative px-6 py-24 sm:py-32 bg-gray-50 overflow-hidden">

            {/* Background ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-red-50 border border-red-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide text-red-700">
                            THE OLD WAY
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gradient-glass sm:text-5xl lg:text-6xl mb-6">
                        IELTS Mock Testing Is <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
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
                        <div key={index} className="group relative p-6 rounded-2xl bg-white border border-black/5 hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:to-transparent transition-all duration-500"></div>

                            <div className="relative z-10 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-600 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="relative z-10 text-lg font-bold text-supermock-text mb-2 group-hover:text-red-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="relative z-10 text-sm text-supermock-text-secondary leading-relaxed group-hover:text-supermock-text/80 transition-colors">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
