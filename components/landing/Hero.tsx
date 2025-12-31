"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Check, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background Fade-in */}
      <div className={` ${isMounted ? "opacity-100" : "opacity-0"}`} />

      <div className="relative z-10 grid gap-12 lg:gap-8 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col items-center lg:items-start max-w-2xl mx-auto text-center lg:text-left">
          {/* 1. Badge */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 md:px-4 mb-6 md:mb-8 mt-8 lg:mt-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all cursor-default group">
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
            mock tests
          </h1>

          {/* 3. Subtext */}
          <p
            className={`max-w-md lg:max-w-xl text-base md:text-lg leading-relaxed text-slate-500 mb-8 md:mb-10 transition-all duration-700 delay-300 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Create, manage, and analyse IELTS mock exams across all four modules
            with our industry-leading dashboard.
          </p>

          {/* 4. CTA Buttons */}
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
              "Unlimited questions",
              "Unlimited mock tests",
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

        <div
          className={`relative w-full max-w-2xl mx-auto mt-4 lg:mt-0 transition-all duration-1000 delay-500 ${
            isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {/* Glass Card Container */}
          <div className="p-2 rounded-2xl md:rounded-3xl bg-white/50 backdrop-blur-md border border-white/50">
            <div className="relative overflow-hidden aspect-video rounded-xl md:rounded-2xl group border border-slate-100 bg-slate-900">
              {/* Image */}
              <Image
                src="/image.png"
                alt="SuperMock Dashboard Interface"
                fill
                className="object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              {/* Play Button (Interactive) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="group/play flex flex-col items-center gap-3 md:gap-4 transition-transform duration-500 hover:scale-110 cursor-pointer z-20 focus:outline-none"
                  aria-label="Watch Demo Video"
                  onClick={() => console.log("Open Video Modal Here")}
                >
                  <div className="relative flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24">
                    {/* Ping Rings */}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-[ping_2s_infinite_0.5s]"></div>

                    {/* Button Core */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 rounded-full bg-white/10 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover/play:bg-red-600 group-hover/play:border-red-600">
                      <Play className="w-6 h-6 sm:w-10 sm:h-10 text-white fill-white ml-1 transition-transform group-hover/play:scale-90" />
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white drop-shadow-md group-hover/play:text-red-100 transition-colors">
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
