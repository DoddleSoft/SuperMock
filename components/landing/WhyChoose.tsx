"use client";

import { Check, X } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function WhyChoose() {
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };
  const features = [
    {
      name: "Question Customization",
      comp: "Hard-coded questions",
      sm: "Unlimited custom questions",
      compOk: false,
    },
    {
      name: "Student Limits",
      comp: "Per-student fees",
      sm: "Unlimited students",
      compOk: false,
    },
    {
      name: "Mock Test Limits",
      comp: "Limited by subscription",
      sm: "Unlimited tests",
      compOk: false,
    },
    {
      name: "Annual Cost",
      comp: "High recurring costs",
      sm: "Fixed yearly rate",
      compOk: false,
    },
    {
      name: "Maintenance & Updates",
      comp: "Extra developer costs",
      sm: "Included in the package",
      compOk: false,
    },
    {
      name: "Cloud Platform",
      comp: "Limited access",
      sm: "Full cloud access",
      compOk: true,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-red-600 mb-4">
            Comparison
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-neutral-900">
            Why choose SuperMock?
          </h2>
          <p className="text-base md:text-md mt-4 text-neutral-500 leading-relaxed">
            See how we stack up against traditional solutions.
          </p>
        </div>

        {/* Clean table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 md:mt-16"
        >
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-0 pb-4 border-b border-neutral-200">
            <div className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
              Feature
            </div>
            <div className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
              Others
            </div>
            <div className="text-sm font-semibold tracking-widest text-red-600 uppercase">
              SuperMock
            </div>
          </div>

          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-2 md:gap-0 py-5 md:py-6 border-b border-neutral-100 last:border-0"
            >
              <div className="text-md font-semibold text-neutral-900 md:text-base">
                {f.name}
              </div>
              <div className="flex items-center gap-4 text-md text-neutral-500">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${f.compOk ? "bg-neutral-200" : "bg-red-100"}`}
                >
                  {f.compOk ? (
                    <Check
                      className="w-2.5 h-2.5 text-neutral-500"
                      strokeWidth={3}
                    />
                  ) : (
                    <X className="w-2.5 h-2.5 text-red-500" strokeWidth={3} />
                  )}
                </div>
                {f.comp}
              </div>
              <div className="flex items-center gap-4 text-md font-medium text-neutral-900">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check
                    className="w-2.5 h-2.5 text-green-600"
                    strokeWidth={3}
                  />
                </div>
                {f.sm}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
