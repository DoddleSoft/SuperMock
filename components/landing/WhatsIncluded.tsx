import { Check } from "lucide-react";

export default function WhatsIncluded() {
    const features = [
        "Unlimited IELTS mocks",
        "Unlimited students",
        "Listening, Reading, Writing, Speaking",
        "Owner, admin, teacher & reception access",
        "10GB secure cloud storage included",
        "Web-based system (Mac, PC, Tablet)",
        "All updates for 1 year",
        "Priority support"
    ];

    return (
        <section className="relative px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">

                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-2">What's Included</h2>
                        <p className="text-supermock-text-secondary">Everything you need to run a professional IELTS centre</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-supermock-red/20 flex items-center justify-center border border-supermock-red/30">
                                    <Check className="w-3 h-3 text-supermock-red" strokeWidth={3} />
                                </div>
                                <span className="text-supermock-text font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Decorative shine */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-supermock-red/20 blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>

                </div>
            </div>
        </section>
    );
}
