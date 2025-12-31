import {
  Infinity,
  ShieldCheck,
  Wallet,
  CheckCircle2,
  PenTool,
} from "lucide-react";

export default function Solution() {
  return (
    <section className="relative flex items-center justify-center px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background Transitions */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl p-1 font-bold tracking-tight text-gradient-glass mb-4 md:mb-6">
            One System, Zero Limitations.
            <br className="hidden sm:block" />
          </h2>
          <p className="max-w-2xl lg:max-w-4xl text-base md:text-lg text-supermock-text-secondary leading-relaxed">
            Replace chaos with clarity. Get everything you need to run thousands
            of mock tests without extra costs.
          </p>
        </div>

        {/* --- Grid Section --- 
            Mobile: 1 column
            Tablet: 2 columns
            Desktop: 4 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Solution Cards */}
          {[
            {
              title: "Unlimited Mock Tests",
              icon: Infinity,
              desc: "Run 10 or 10,000 tests. No student caps, no per-test fees. Just pure scalability.",
              gradient: "from-blue-500/5 to-cyan-500/5",
              border: "hover:border-blue-500/20",
              iconBg:
                "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
            },
            {
              title: "Secure Cloud Platform",
              icon: ShieldCheck,
              desc: "Access from any device. Bank-grade security with automatic backups included.",
              gradient: "from-purple-500/5 to-pink-500/5",
              border: "hover:border-purple-500/20",
              iconBg:
                "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
            },
            {
              title: "Fixed Yearly Pricing",
              icon: Wallet,
              desc: "No monthly surprises. One flat annual fee covers unlimited students & modules.",
              gradient: "from-amber-500/5 to-orange-500/5",
              border: "hover:border-amber-500/20",
              iconBg:
                "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
            },
            {
              title: "Your Own Questions",
              icon: PenTool,
              desc: "Build tests with your own listening, reading, writing & speaking modules.",
              gradient: "from-red-500/5 to-rose-500/5",
              border: "hover:border-red-500/20",
              iconBg:
                "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white",
            },
          ].map((item, index) => (
            <div
              key={index}
              /* added h-full and flex-col to ensure footers align */
              className={`relative group p-5 md:p-6 rounded-3xl bg-white border border-black/5 ${item.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full flex flex-col`}
            >
              {/* Detailed Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col flex-1">
                <div
                  className={`mb-5 md:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-black/5 group-hover:border-transparent transition-all duration-300 shadow-sm ${item.iconBg}`}
                >
                  <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-supermock-text mb-2 md:mb-3">
                  {item.title}
                </h3>

                {/* Content wrapper with flex-1 pushes the footer down */}
                <div className="flex-1 space-y-4">
                  <p className="text-sm text-supermock-text-secondary leading-relaxed group-hover:text-supermock-text/80 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="mt-4 pt-4 flex items-center gap-2 border-t border-black/5 group-hover:border-black/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] md:text-xs font-semibold text-supermock-text-secondary uppercase tracking-wide">
                    Problem Solved
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
