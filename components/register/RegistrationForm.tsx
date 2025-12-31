"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin, Mail, Phone, Building2, User } from "lucide-react";
import Link from "next/link";

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="w-full max-w-md mx-auto text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-supermock-text">Thank You!</h2>
                <p className="text-supermock-text-secondary text-lg">
                    We have received your details. We will get back to you as soon as possible.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-supermock-red font-semibold hover:underline mt-8"
                >
                    Return to Home <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12 relative overflow-hidden animate-fade-in-up">
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-supermock-red/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-supermock-text">
                        Join SuperMock
                    </h2>
                    <p className="text-supermock-text-secondary">
                        Register your interest and transform your IELTS centre today.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name (Required) */}
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-semibold text-supermock-text pl-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-supermock-red transition-colors" />
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-supermock-red/20 focus:border-supermock-red transition-all placeholder:text-gray-400 text-supermock-text"
                            />
                        </div>
                    </div>

                    {/* Phone Number (Required) */}
                    <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-sm font-semibold text-supermock-text pl-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-supermock-red transition-colors" />
                            <input
                                type="tel"
                                id="phone"
                                required
                                placeholder="+880 1XXX XXXXXX"
                                className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-supermock-red/20 focus:border-supermock-red transition-all placeholder:text-gray-400 text-supermock-text"
                            />
                        </div>
                    </div>

                    {/* Email (Optional) */}
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-semibold text-supermock-text pl-1">
                            Email Address <span className="text-gray-400 font-normal text-xs ml-1">(Optional)</span>
                        </label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-supermock-red transition-colors" />
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-supermock-red/20 focus:border-supermock-red transition-all placeholder:text-gray-400 text-supermock-text"
                            />
                        </div>
                    </div>

                    {/* Centre Name (Optional) */}
                    <div className="space-y-1.5">
                        <label htmlFor="centre" className="text-sm font-semibold text-supermock-text pl-1">
                            Centre Name <span className="text-gray-400 font-normal text-xs ml-1">(Optional)</span>
                        </label>
                        <div className="relative group">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-supermock-red transition-colors" />
                            <input
                                type="text"
                                id="centre"
                                placeholder="Your IELTS Centre Name"
                                className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-supermock-red/20 focus:border-supermock-red transition-all placeholder:text-gray-400 text-supermock-text"
                            />
                        </div>
                    </div>

                    {/* Location (Dropdown) */}
                    <div className="space-y-1.5">
                        <label htmlFor="location" className="text-sm font-semibold text-supermock-text pl-1">
                            Division
                        </label>
                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-supermock-red transition-colors" />
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            <select
                                id="location"
                                className="w-full pl-12 pr-10 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-supermock-red/20 focus:border-supermock-red transition-all text-supermock-text appearance-none cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled>Select your division</option>
                                {LOCATIONS.map((loc) => (
                                    <option key={loc} value={loc}>
                                        {loc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full group relative px-8 py-4 text-lg font-bold text-white transition-all transform rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-supermock-red to-[#B91C1C] group-hover:from-[#E31B23] group-hover:to-supermock-red transition-all duration-300"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-300"></div>

                        <span className="relative flex items-center justify-center gap-2">
                            {loading ? "Submitting..." : "Get Started Now"}
                            {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </span>
                    </button>

                    <p className="text-xs text-center text-gray-500 pt-2">
                        By registering, you agree to our Terms & Privacy Policy.
                    </p>
                </form>
            </div>
        </div>
    );
}
