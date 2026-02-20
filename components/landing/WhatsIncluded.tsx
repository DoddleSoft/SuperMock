import { HardDrive, Zap, Headphones, ChartNoAxesCombined } from "lucide-react";

export default function WhatsIncluded() {
  const features = [
    // ROW 1: WIDE + SMALL
    {
      title: "Limitless Scale",
      desc: "Add unlimited students, mock tests and scale your business with us.",
      icon: ChartNoAxesCombined,
      className: "md:col-span-3", // Wide
      colorClass: "bg-teal-50 text-teal-600 group-hover:bg-teal-100",
      gradient: "from-teal-50/50 to-transparent",
    },
    {
      title: "Priority Support",
      desc: "Direct talk to our technical team via Whatsapp or Email.",
      icon: Headphones,
      className: "md:col-span-2", // Small
      colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
      gradient: "from-indigo-50/50 to-transparent",
    },

    // ROW 2: SMALL + WIDE
    {
      title: "Cloud Storage",
      desc: "10 GB of secure cloud storage included for your data.",
      icon: HardDrive,
      className: "md:col-span-2", // Small
      colorClass: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
      gradient: "from-amber-50/50 to-transparent",
    },
    {
      title: "Always Updated",
      desc: "Experience continuous improvements with instant updates.",
      icon: Zap,
      className: "md:col-span-3", // Wide
      colorClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
      gradient: "from-blue-50/50 to-transparent",
    },
  ];

  return (
    <section
      id="features"
      className="relative flex items-center justify-center px-4 md:px-8 py-20 lg:py-28 overflow-hidden"
    >
      {/* Background decoration (Dot Pattern) */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
              Included in One Plan
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500">
            No hidden fees. You get the full power of SuperMock from day one
            with a design built for scale.
          </p>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[minmax(180px,auto)]">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1
                ${item.className}
              `}
            >
              <div className="relative z-10 h-full px-8 py-6 flex flex-col justify-between">
                {/* Header: Icon & Title */}
                <div
                  className={`flex flex-col gap-4 ${
                    item.className.includes("col-span-2")
                      ? "md:flex-row md:items-center md:justify-between"
                      : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${item.colorClass}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-slate-600">
                    {item.desc}
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
