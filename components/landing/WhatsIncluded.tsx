import {
  Check,
  Globe,
  HardDrive,
  Layout,
  Users,
  Zap,
  Shield,
  Headphones,
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
            No hidden fees or "pro" tiers. You get the full power of SuperMock
            from day one.
          </p>
        </div>

        {/* --- Grid Section --- 
            Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Feature Cards */}
          {[
            {
              title: "Role-Based Access",
              icon: Users,
              desc: "Modular permissions for your entire team and distinct roles.",
              color: "blue",
            },
            {
              title: "All 4 Modules",
              icon: Layout,
              desc: "Seamlessly conduct all modules (Listening, Reading, and Writing).",
              color: "purple",
            },
            {
              title: "Cloud Storage",
              icon: HardDrive,
              desc: "10 GB of cloud storage for students, test papers, and results.",
              color: "amber",
            },
            {
              title: "Cross-Platform",
              icon: Globe,
              desc: "Zero compatibility issues on Windows, Mac, or tablets.",
              color: "green",
            },
            {
              title: "Instant Updates",
              icon: Zap,
              desc: "We push new features and improvements automatically.",
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
              icon: Check,
              desc: "We never charge extra for adding more students, or tests.",
              color: "teal",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50/0 to-${item.color}-50/0 group-hover:from-${item.color}-50/50 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100`}
              ></div>

              <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-4 mb-3 md:mb-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center text-supermock-text border border-black/5 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:bg-${item.color}-50 group-hover:text-${item.color}-600`}
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-supermock-text group-hover:text-black transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="relative z-10 text-sm text-supermock-text-secondary group-hover:text-supermock-text/80 transition-colors pl-[3.5rem] md:pl-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
