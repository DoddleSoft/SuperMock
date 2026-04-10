"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center px-4 md:px-8 pb-14 sm:pb-16 md:pb-20 lg:pb-28 overflow-hidden">
      <div className="relative z-10 grid gap-12 lg:gap-8 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col items-center lg:items-start max-w-2xl mx-auto text-center lg:text-left">
          {/* Badge */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 md:px-4 mb-6 md:mb-8 mt-12 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all cursor-default group">
              <span className="text-[10px] md:text-xs font-bold tracking-wide text-slate-600 uppercase group-hover:text-slate-900 transition-colors">
                Mock Test Platform for IELTS Centres
              </span>
            </div>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-4 md:mb-6 text-balance transition-all duration-700 delay-200 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Unlimited{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 p-1">
              IELTS
            </span>{" "}
            mock test
          </h1>

          <p
            className={`max-w-md lg:max-w-xl text-base md:text-lg leading-relaxed text-slate-500 mb-8 md:mb-10 transition-all duration-700 delay-300 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Create, manage, and run unlimited CD mock tests in your IELTS
            training centre with our industry-leading software.
          </p>

          <div
            className={`flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/join-waitlist"
              className="w-full sm:w-auto relative group px-6 py-3 md:px-8 md:py-4 text-base font-bold text-white transition-all transform rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] duration-300 overflow-hidden bg-red-600"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300"></div>
              <span className="relative text-sm md:text-base flex items-center justify-center gap-2">
                Get SuperMock for Your Centre
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-8 md:mt-10 transition-all duration-700 delay-700 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {[
              "Custom questions",
              "Unlimited tests",
              "Fixed yearly pricing",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-red-200 transition-colors"
              >
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-100 text-green-800">
                  <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-600">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE */}
        <div
          className={`relative w-full max-w-2xl mx-auto mt-4 lg:mt-0 flex items-center justify-center transition-all duration-1000 delay-500 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/comic-hero.png"
            alt="I want the best mock test app. What do I do? Get SuperMock!"
            width={708}
            height={352}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
