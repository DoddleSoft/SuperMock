import { Award } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="relative px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 text-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="relative p-6 md:p-8 lg:p-12 rounded-3xl md:rounded-[2.5rem] bg-white shadow-2xl border border-black/5 hover:-translate-y-1 transition-transform duration-500 overflow-hidden">
          {/* Golden Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5 opacity-50 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Icon Container */}
            <div className="inline-flex items-center justify-center p-4 md:p-5 mb-6 md:mb-8 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-lg shadow-amber-500/10 group">
              <Award className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-supermock-text mb-4 md:mb-6">
              30-Day Money-Back Guarantee
            </h2>

            {/* Body Text */}
            <p className="text-sm md:text-base lg:text-lg text-supermock-text-secondary max-w-sm md:max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10">
              We're confident SuperMock will transform your centre. If you don't
              feel the difference within 30 days, we'll refund your full
              payment. <br className="hidden sm:block" />
              <span className="text-supermock-text font-bold mt-2 inline-block border-b-2 border-amber-200">
                No questions asked.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
