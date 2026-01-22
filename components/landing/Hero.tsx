"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      src: "/dashboard.png",
      alt: "SuperMock dashboard page overview",
      label: "Dashboard",
      width: 1200,
      height: 800,
    },
    {
      src: "/students.png",
      alt: "Student management system view",
      label: "Students",
      width: 1200,
      height: 800,
    },
    {
      src: "/test.png",
      alt: "Mock test experience for students",
      label: "Test",
      width: 1200,
      height: 800,
    },
    {
      src: "/create.png",
      alt: "Create a new mock test",
      label: "Create",
      width: 1200,
      height: 800,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section className="relative flex items-center justify-center px-4 md:px-8 pb-14 sm:pb-16 md:pb-20 lg:pb-28 overflow-hidden">
      {/* Background Fade-in */}
      <div className={` ${isMounted ? "opacity-100" : "opacity-0"}`} />

      <div className="relative z-10 grid gap-12 lg:gap-8 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 items-center">
        {/* --- LEFT COLUMN: CONTENT --- */}
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

          {/* Subtext */}
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

          {/* CTA Buttons */}
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

          {/* Features List */}
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

        {/* --- RIGHT COLUMN: IMAGES & NAVIGATION --- */}
        <div
          className={`relative w-full max-w-2xl mx-auto mt-4 lg:mt-0 flex flex-col items-center transition-all duration-1000 delay-500`}
        >
          {/* Image Container */}
          <div className="overflow-hidden rounded-xl shadow-lg border border-slate-100 bg-white">
            <div className="relative">
              <Image
                src={slides[activeSlide].src}
                alt={slides[activeSlide].alt}
                width={slides[activeSlide].width || 1200}
                height={slides[activeSlide].height || 800}
                className="w-auto h-auto opacity-90 transition-opacity duration-700 block"
                priority
              />
            </div>
          </div>

          {/* Text Description */}
          <div className="text-center text-sm font-semibold tracking-wide text-slate-600 mt-4">
            {slides[activeSlide].alt}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-red-600" // Active: Wide & Red
                    : "w-2 bg-slate-300 hover:bg-red-300" // Inactive: Dot & Gray
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
