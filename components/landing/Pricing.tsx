import { ArrowRight, Check, Info } from "lucide-react";
import Link from "next/link";
import Cloud from "./Cloud";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* --- Header --- */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-glass mb-4 md:mb-6 p-1">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-supermock-text-secondary max-w-2xl mx-auto">
            Invest in your centre's growth with a single, predictable yearly
            payment.
          </p>
        </div>

        {/* --- Card Container --- */}
        <div className="relative mx-auto max-w-lg md:max-w-2xl">
          <div className="relative p-6 md:p-8 lg:p-10 bg-white border border-black/5 rounded-[2rem] shadow-lg overflow-hidden group hover:border-supermock-red/20 transition-all duration-300">
            {/* Shimmer effect */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-100/50 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none"></div>

            {/* Price Tag Section */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-sm md:text-md font-semibold tracking-wider text-supermock-red uppercase mb-2">
                Yearly License
              </h3>
              <div className="flex items-baseline justify-center gap-1 p-1">
                <span className="text-xl md:text-2xl font-bold text-supermock-text-secondary align-top mt-2">
                  BDT{" "}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-supermock-text tracking-tighter">
                  36,000
                </span>
                <span className="text-sm md:text-md font-medium text-supermock-text-secondary self-end mb-2">
                  /year
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-black/5 mx-auto max-w-full">
                <Info className="w-4 h-4 text-supermock-text-secondary flex-shrink-0" />
                <span className="text-xs md:text-sm text-supermock-text-secondary truncate">
                  Equivalent to just{" "}
                  <span className="font-bold text-gray-800">
                    3,000 BDT/month
                  </span>
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {[
                "Unlimited Students, Papers & Tests",
                "Access to All 4 Modules",
                "Owner, Admin & Teacher Roles",
                "10GB Secure Cloud Storage",
                "Free Updates for 12 Months",
                "Priority Email & Phone Support",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start md:items-center gap-3 text-left px-2 md:px-8"
                >
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-supermock-red/10 flex items-center justify-center mt-0.5 md:mt-0">
                    <Check
                      className="w-3 h-3 md:w-3.5 md:h-3.5 text-supermock-red"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-base md:text-lg text-gray-600 font-medium leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/join-waitlist"
              className="relative w-full py-3 md:py-4 text-base md:text-lg font-bold text-white transition-all transform rounded-xl shadow-lg hover:scale-[1.02] overflow-hidden group/btn flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-supermock-red to-[#B91C1C] group-hover/btn:from-[#E31B23] group-hover/btn:to-supermock-red transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
              <span className="relative flex items-center justify-center gap-2 md:gap-4">
                Get Started Now
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Link>

            <p className="mt-4 md:mt-6 text-xs md:text-sm text-center font-semibold text-gray-700">
              No hidden fees. 30-day money-back guarantee.
            </p>
          </div>

          {/* Cloud Storage Component */}
          <Cloud />
        </div>
      </div>
    </section>
  );
}
