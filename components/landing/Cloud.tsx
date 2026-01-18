"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HardDrive } from "lucide-react";

export default function Cloud() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-6 md:mt-8">
      <div className="max-w-3xl mx-auto">
        <div className="group relative glass-panel p-5 md:p-8 rounded-2xl md:rounded-3xl flex flex-col gap-4 md:gap-6 border border-black/5 bg-gray-50 hover:bg-white transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 blur-[40px] md:blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>

          <div className="flex items-start gap-3 md:gap-5 relative z-10">
            <div className="flex-shrink-0 p-2.5 md:p-3 bg-blue-50 rounded-xl md:rounded-2xl border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <HardDrive className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-bold text-supermock-text mb-1 md:mb-2 flex flex-wrap items-center gap-2">
                Need More Space?
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  Cloud
                </span>
              </h3>
              <p className="text-sm md:text-base text-supermock-text-secondary leading-relaxed">
                SuperMock includes{" "}
                <span className="text-supermock-text font-medium border-b border-blue-200">
                  10GB secure cloud storage for free{" "}
                </span>
                . That's enough for most centres. Upgrade anytime whenever you
                scale up.
              </p>
            </div>
          </div>

          {/* Bottom Section: Toggle & Options */}
          <div className="border-t border-black/5 pt-4 md:pt-6 relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-sm font-bold text-supermock-text-secondary hover:text-blue-600 transition-colors group/btn w-full py-1"
            >
              <span className="flex-1 text-left text-xs md:text-sm">
                {isOpen
                  ? "Hide storage options"
                  : "View storage upgrade options"}
              </span>
              <div
                className={`p-1 md:p-1.5 rounded-full bg-gray-100 group-hover/btn:bg-blue-50 transition-colors ${
                  isOpen ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                {isOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                )}
              </div>
            </button>

            {/* Expanding Grid */}
            {isOpen && (
              <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 animate-[fade-in_0.3s_ease-out_forwards]">
                {[
                  {
                    size: "20GB",
                    price: "499",
                    tag: "Most Popular",
                    // Explicit classes because Tailwind can't interpolate dynamic strings
                    styles: "bg-blue-50/50 border-blue-200 shadow-sm",
                    tagBg: "bg-blue-500",
                    textStyle: "text-blue-700",
                  },
                  {
                    size: "50GB",
                    price: "1,499",
                    tag: "Best Value",
                    styles: "bg-green-50/50 border-green-200 shadow-sm",
                    tagBg: "bg-green-600",
                    textStyle: "text-green-700",
                  },
                  {
                    size: "100GB",
                    price: "2,999",
                    tag: null,
                    styles:
                      "bg-white border-black/5 hover:border-blue-200 hover:shadow-sm",
                    tagBg: "",
                    textStyle: "group-hover/card:text-blue-600",
                  },
                ].map((tier, idx) => (
                  <div
                    key={idx}
                    className={`relative p-3 md:p-4 rounded-xl border transition-all duration-300 cursor-default group/card ${tier.styles}`}
                  >
                    {tier.tag && (
                      <div
                        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 ${tier.tagBg} text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm whitespace-nowrap`}
                      >
                        {tier.tag}
                      </div>
                    )}
                    <div
                      className={`text-xs md:text-sm font-medium text-supermock-text-secondary mb-1 ${tier.textStyle} transition-colors`}
                    >
                      {tier.size}
                    </div>
                    <div className="font-bold text-supermock-text text-base md:text-lg">
                      BDT {tier.price}{" "}
                      <span className="text-[10px] md:text-xs font-normal text-supermock-text-secondary/70">
                        /mo
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
