import {
  Check,
  Globe,
  HardDrive,
  Layout,
  Users,
  Zap,
  Shield,
  Headphones,
  GitGraph,
  ChartNoAxesColumnIncreasing,
  ChartColumnIncreasing,
  ChartNoAxesCombined,
} from "lucide-react";

export default function WhatsIncluded() {
  return (
    <section
      id="features"
      className="relative flex items-center justify-center px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* --- Header Section --- */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-glass mb-4 md:mb-6">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-supermock-text to-supermock-text-secondary">
              Included in One Plan
            </span>
          </h2>
          <p className="max-w-2xl lg:max-w-4xl mx-auto text-base md:text-lg text-supermock-text-secondary">
            No hidden fees. You get the full power of SuperMock from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Feature Cards */}
          {[
            {
              title: "Continuous updates",
              icon: GitGraph,
              desc: "New features and improvements added regularly at no extra cost.",
              color: "blue",
            },
            {
              title: "Cloud Storage",
              icon: HardDrive,
              desc: "10 GB of cloud storage for students, test papers, and results.",
              color: "amber",
            },

            {
              title: "Instant Updates",
              icon: Zap,
              desc: "Updates are automatic and instant—no manual installs needed.",
              color: "yellow",
            },
            {
              title: "Data Security",
              icon: Shield,
              desc: "We use enterprise-grade data security and backups.",
              color: "red",
            },
            {
              title: "Priority Support",
              icon: Headphones,
              desc: "Get direct access to our technical team for any questions.",
              color: "indigo",
            },
            {
              title: "Uncapped Growth",
              icon: ChartNoAxesCombined,
              desc: "We never charge extra for adding more students, or tests.",
              color: "teal",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full"
            >
              <div className="relative z-10 flex justify-between items-center gap-4 mb-5">
                <h3 className="font-bold text-xl leading-tight group-hover:text-black transition-colors">
                  {item.title}
                </h3>

                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-black/5 group-hover:scale-110 transition-transform duration-300 shadow-sm
    group-hover:bg-${item.color}-50 group-hover:text-${item.color}-600`}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <p className="relative z-10 text-sm transition-colors pl-[3.5rem] md:pl-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
