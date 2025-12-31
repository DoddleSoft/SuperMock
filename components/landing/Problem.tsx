import { XCircle, Clock, FileWarning, Database } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            title: "Student limits increase costs",
            icon: XCircle,
            description: "Paying per studnet limits your growth and eats into profits."
        },
        {
            title: "Manual checking wastes time",
            icon: Clock,
            description: "Grading paper tests and managing spreadsheets is slow and error-prone."
        },
        {
            title: "Scattered records",
            icon: Database,
            description: "Student data living in physical files or multiple excel sheets is a liability."
        },
        {
            title: "Tools not built for centres",
            icon: FileWarning,
            description: "Generic exam software doesn't handle the specifics of IELTS modules."
        }
    ];

    return (
        <section className="relative px-6 py-24 sm:py-32 bg-gradient-to-b from-supermock-base via-[#131315] to-[#1a1a1c]">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        IELTS Mock Testing Is Often <br />
                        <span className="text-supermock-text-secondary">Messy and Manual</span>
                    </h2>
                    <div className="h-1 w-20 bg-supermock-red/50 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 glass-card rounded-2xl border-white/5 hover:border-supermock-red/30 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-supermock-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-supermock-red" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-supermock-red transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-supermock-text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
