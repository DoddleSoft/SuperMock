"use client";

import { Check, X } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      name: "Question Customization",
      competitors: { available: false, text: "Hard-coded questions" },
      supermock: { available: true, text: "Unlimited custom questions" },
    },
    {
      name: "Student Limits",
      competitors: { available: false, text: "Per-student fees" },
      supermock: { available: true, text: "Unlimited students" },
    },
    {
      name: "Mock Test Limits",
      competitors: { available: false, text: "Limited by subscription" },
      supermock: { available: true, text: "Unlimited tests" },
    },
    {
      name: "Annual Cost",
      competitors: { available: false, text: "High recurring costs" },
      supermock: { available: true, text: "Fixed yearly rate" },
    },
    {
      name: "Maintenance & Updates",
      competitors: { available: false, text: "Extra developer costs" },
      supermock: { available: true, text: "Included free" },
    },
    {
      name: "AI-Powered Grading",
      competitors: { available: false, text: "Basic if/else logic" },
      supermock: { available: true, text: "Smart AI grading" },
    },
    {
      name: "Cloud Platform",
      competitors: { available: true, text: "Limited access" },
      supermock: { available: true, text: "Full cloud access" },
    },
    {
      name: "Custom Modules",
      competitors: { available: false, text: "Not available" },
      supermock: { available: true, text: "All 4 modules" },
    },
  ];

  return (
    <section className="relative flex items-center justify-center px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl font-bold tracking-tight text-slate-900 mb-4 md:mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
              SuperMock
            </span>
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
            Compare features and see why IELTS centres choose us
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-0 border-b items-center border-slate-200">
              {/* Features Column Header */}
              <div className="col-span-1 bg-slate-50 px-6 py-5 flex items-center">
                <h3 className="text-md font-bold text-slate-700 uppercase tracking-wider">
                  Features
                </h3>
              </div>

              {/* Competitors Header */}
              <div className="col-span-1 bg-gradient-to-br from-slate-100 to-slate-200 px-6 py-5 text-center border-l border-slate-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">
                    Competitors
                  </h3>
                </div>
              </div>

              {/* SuperMock Header */}
              <div className="col-span-1 bg-gradient-to-br from-red-500 to-red-700 px-6 py-5 text-center border-l border-red-600">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    SuperMock
                  </h3>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-100">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-0 hover:bg-slate-50/50 transition-colors group"
                >
                  {/* Feature Name */}
                  <div className="col-span-1 px-6 py-5 flex items-center gap-3 bg-white">
                    <span className="text-sm md:text-base font-semibold text-slate-800">
                      {feature.name}
                    </span>
                  </div>

                  {/* Competitors Value */}
                  <div className="col-span-1 px-6 py-5 flex items-center justify-center border-l border-slate-100 bg-slate-50/30">
                    <div className="flex flex-row items-center gap-4 text-center">
                      {feature.competitors.available ? (
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                          <Check className="w-4 h-4 text-slate-600" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                      <span className="text-md text-slate-600">
                        {feature.competitors.text}
                      </span>
                    </div>
                  </div>

                  {/* SuperMock Value */}
                  <div className="col-span-1 px-6 py-5 flex items-center justify-center border-l border-red-100 bg-gradient-to-br from-red-50/50 to-orange-50/30">
                    <div className="flex flex-row items-center gap-4 text-center">
                      {feature.supermock.available ? (
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                          <Check
                            className="w-4 h-4 text-white"
                            strokeWidth={3}
                          />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                          <X className="w-4 h-4 text-slate-600" />
                        </div>
                      )}
                      <span className="text-md text-gray-900 font-semibold">
                        {feature.supermock.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="grid grid-cols-3 gap-0 border-t border-slate-200 bg-slate-50">
              <div className="col-span-1 px-6 py-4"></div>
              <div className="col-span-1 px-6 py-4 text-center border-l border-slate-200">
                <p className="text-sm font-semibold text-slate-500">
                  High ongoing costs
                </p>
              </div>
              <div className="col-span-1 px-6 py-4 text-center border-l border-slate-200 bg-gradient-to-r from-red-50 to-orange-50">
                <p className="text-sm font-bold text-red-700">
                  Best value for IELTS centres
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Feature Name Header */}
                <div className="bg-slate-50 px-4 py-4 border-b border-slate-200">
                  <h3 className="text-base font-bold text-slate-900">
                    {feature.name}
                  </h3>
                </div>

                {/* Competitors Section */}
                <div className="px-4 py-4 border-b border-slate-100 bg-slate-50/40">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Competitors
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {feature.competitors.available ? (
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-slate-600" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                    )}
                    <span className="text-sm text-slate-700">
                      {feature.competitors.text}
                    </span>
                  </div>
                </div>

                {/* SuperMock Section */}
                <div className="px-4 py-4 bg-gradient-to-br from-red-50/50 to-orange-50/30">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      SuperMock
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {feature.supermock.available ? (
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-sm flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-slate-600" />
                      </div>
                    )}
                    <span className="text-sm font-semibold text-slate-800">
                      {feature.supermock.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">AI Grading</span>{" "}
              feature coming soon • All prices exclude VAT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
