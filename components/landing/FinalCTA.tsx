import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative px-4 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden text-center bg-gray-50">
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-12">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-supermock-text max-w-4xl mx-auto">
          Start running unlimited <br />
          <span className="relative inline-block mt-1 md:mt-2">
            {/* Background Blur Effect */}
            <span className="absolute inset-0 blur-xl md:blur-2xl opacity-20 transform scale-110"></span>

            {/* Gradient Text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-supermock-red to-orange-600 pb-1">
              IELTS mock tests
            </span>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-supermock-text-secondary max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          Join the top IELTS centres performing mock tests with zero
          limitations. Start your growth journey now.
        </p>

        {/* Buttons Container */}
        <div className="pt-2 md:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md sm:max-w-none mx-auto">
          {/* Primary Button */}
          <Link
            href="/join-waitlist"
            className="w-full sm:w-auto group relative px-6 py-3 md:px-8 md:py-4 font-bold text-white transition-all transform rounded-xl md:rounded-full shadow-md hover:shadow-lg hover:scale-[1.01] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-supermock-red to-[#B91C1C] group-hover:from-[#E31B23] group-hover:to-supermock-red transition-all duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>

            <span className="relative flex text-base md:text-lg items-center justify-center gap-2 md:gap-3">
              Get SuperMock Now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/8801635931004?text=Hi%20SuperMock%20team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20IELTS%20mock%20test%20platform."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group relative px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-[#25D366] bg-white border border-[#25D366]/20 rounded-xl md:rounded-full hover:scale-[1.01] hover:shadow-lg transition-all shadow-md group/whatsapp flex items-center justify-center gap-2 md:gap-3"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 fill-current transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
