"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Building2,
  User,
  AlertCircle,
  Loader2,
  Check,
} from "lucide-react";
import Link from "next/link";
import { addToWaitlist, type WaitlistData } from "@/helpers/waitlist";

const LOCATIONS = [
  "Dhaka",
  "Chattogram",
  "Khulna",
  "Rajshahi",
  "Barisal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Custom Dropdown State ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: WaitlistData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || undefined,
      centreName: (formData.get("centre") as string) || undefined,
      location: (formData.get("location") as string) || undefined,
    };

    try {
      const response = await addToWaitlist(data);
      if (response.success) {
        setSubmitted(true);
      } else {
        // Show user-friendly error message
        setError(response.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-5xl mx-auto bg-white border border-slate-200 shadow-xl rounded-3xl p-8 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" strokeWidth={2} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          You're on the list!
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-8">
          We have received your details. Our team will contact your centre
          shortly to set up your account.
        </p>
        <Link
          href="/"
          className="inline-flex px-4 py-2 items-center justify-center gap-2 text-slate-900 font-semibold hover:text-red-600 transition-colors group"
        >
          Return to Home{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-12 relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Join Super<span className="text-red-600">Mock</span>
          </h2>
          <p className="text-slate-500">
            Secure your centre's spot today for exclusive deals!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error Message */}
          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl animate-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name (Required) */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-700 pl-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  disabled={loading}
                  placeholder="John Smith"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all placeholder:text-slate-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Phone Number (Required) */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-slate-700 pl-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  disabled={loading}
                  placeholder="+880 1XXXXXX..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all placeholder:text-slate-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Email (Optional) */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700 pl-1"
            >
              Email Address{" "}
              <span className="text-slate-400 font-normal text-xs ml-1">*</span>
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
              <input
                type="email"
                id="email"
                name="email"
                maxLength={100}
                disabled={loading}
                placeholder="centre@example.com"
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all placeholder:text-slate-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Centre Name (Optional) */}
            <div className="space-y-1.5">
              <label
                htmlFor="centre"
                className="text-sm font-semibold text-slate-700 pl-1"
              >
                Centre Name{" "}
                <span className="text-slate-400 font-normal text-xs ml-1">
                  (Optional)
                </span>
              </label>
              <div className="relative group">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="text"
                  id="centre"
                  name="centre"
                  maxLength={200}
                  disabled={loading}
                  placeholder="IELTS Academy"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all placeholder:text-slate-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* --- CUSTOM DROPDOWN --- */}
            <div className="space-y-1.5 relative" ref={dropdownRef}>
              <label
                htmlFor="location"
                className="text-sm font-semibold text-slate-700 pl-1"
              >
                Division{" "}
                <span className="text-slate-400 font-normal text-xs ml-1">
                  (Optional)
                </span>
              </label>

              {/* Hidden input to ensure FormData collects the value */}
              <input type="hidden" name="location" value={selectedLocation} />

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-red-500 transition-colors z-10" />

                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  disabled={loading}
                  className={`w-full pl-12 pr-10 py-3 bg-white border rounded-xl text-left transition-all focus:outline-none focus:ring-4 focus:ring-red-500/10 ${
                    isDropdownOpen
                      ? "border-red-500 ring-4 ring-red-500/10"
                      : "border-slate-200 hover:border-slate-300"
                  } ${
                    selectedLocation ? "text-slate-900" : "text-slate-400"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {selectedLocation || "Select division..."}
                  <ChevronDown
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>

                {/* The Floating Menu */}
                {isDropdownOpen && (
                  <div className="absolute bottom-[calc(100%+8px)] left-0 w-full bg-white border border-slate-100 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
                      {LOCATIONS.map((loc) => (
                        <div
                          key={loc}
                          onClick={() => {
                            setSelectedLocation(loc);
                            setIsDropdownOpen(false);
                          }}
                          className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                            selectedLocation === loc
                              ? "bg-red-50 text-red-700 font-medium"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span className="pl-8">{loc}</span>
                          {selectedLocation === loc && (
                            <Check className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full group relative px-8 py-3.5 text-lg font-bold text-white transition-all transform rounded-xl shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-6 bg-red-600"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300"></div>

            <span className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
