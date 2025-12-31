import { XCircle, Clock, FileWarning, Lock } from "lucide-react";

export default function Problem() {
  return (
    <section className="relative flex items-center justify-center px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 md:mb-8">
            IELTS Mock Testing Is <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
              Messy, Manual & Expensive
            </span>
          </h2>
          <p className="max-w-2xl lg:max-w-5xl text-base md:text-lg text-slate-600 md:text-slate-800 leading-relaxed">
            Running exams with student limits and scattered spreadsheets is
            holding your centre back.
          </p>
        </div>

        {/* --- Grid Section --- 
            Mobile: 1 column
            Tablet (md): 2 columns
            Desktop (lg): 4 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              title: "Student Limits",
              icon: XCircle,
              desc: "Paying per student punishes your growth.",
            },
            {
              title: "Manual Grading",
              icon: Clock,
              desc: "Hours wasted marking paper tests by hand.",
            },
            {
              title: "Rigid Content",
              icon: Lock,
              desc: "Stuck with generic questions that don't fit.",
            },
            {
              title: "Generic Tools",
              icon: FileWarning,
              desc: "Software that doesn't understand IELTS logic.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-1 overflow-hidden h-full"
            >
              {/* Card Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 mb-6 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-50 text-red-600 border border-red-100 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="relative z-10 text-sm text-slate-600 md:text-slate-800 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
