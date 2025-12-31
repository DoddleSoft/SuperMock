import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-gray-50 pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="px-4 md:px-8 mx-auto max-w-7xl">
        {/* Grid Layout:
            - Mobile: 1 column, gap-8
            - Tablet (sm): 2 columns
            - Desktop (lg): 4 columns, gap-12
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-4 md:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-supermock-text">
                Super<span className="text-supermock-red">Mock</span>
              </span>
            </Link>
            <p className="text-sm md:text-base text-supermock-text-secondary leading-relaxed max-w-xs">
              The professional mock test platform for IELTS centres.
            </p>
            <div className="flex items-center gap-4 text-supermock-text-secondary/60">
              <Link
                href="#"
                className="hover:text-supermock-red transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-supermock-red transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-supermock-red transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-supermock-red transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-supermock-text mb-4 md:mb-6">
              Product
            </h3>
            <ul className="space-y-3 md:space-y-4 text-supermock-text-secondary text-sm md:text-base">
              <li>
                <Link
                  href="/#pricing"
                  className="hover:text-supermock-text transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-supermock-text transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-supermock-text mb-4 md:mb-6">
              Legal
            </h3>
            <ul className="space-y-3 md:space-y-4 text-supermock-text-secondary text-sm md:text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-supermock-text transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-supermock-text transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-supermock-text mb-4 md:mb-6">
              Contact
            </h3>
            <ul className="space-y-3 md:space-y-4 text-supermock-text-secondary text-sm md:text-base">
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-supermock-red flex-shrink-0" />
                <span>hello@supermock.com</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-supermock-red flex-shrink-0" />
                <span>+880 1711 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-supermock-text-secondary/60">
            &copy; {new Date().getFullYear()} Doddlesoft. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-supermock-text-secondary/60">
            Designed by Doddlesoft.inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
