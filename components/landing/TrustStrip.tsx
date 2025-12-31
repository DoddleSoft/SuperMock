
export default function TrustStrip() {
    const items = [
        "Unlimited students",
        "All 4 IELTS modules",
        "Fixed yearly pricing",
        "30-day guarantee"
    ];

    return (
        <div className="relative z-20 w-full px-4 -mt-10 sm:-mt-20 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-8 py-6 glass-panel rounded-2xl sm:justify-between">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            {/* Minimal separator line for all but last - conceptual, or just space. 
                     Prompt says "Minimal check icons" in 'What's Included', but here 'No icons, or very thin line icons'.
                     Wait, prompt says "Trust Strip... No icons, or very thin line icons."
                     I'll verify if I should put a dot or thin line between them or just text.
                     Prompt: "Glass bar with soft separators"
                 */}
                            <span className="text-sm font-medium tracking-wide text-supermock-text/90 whitespace-nowrap">
                                {item}
                            </span>
                            {index < items.length - 1 && (
                                <div className="hidden h-4 w-[1px] bg-white/10 sm:block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
