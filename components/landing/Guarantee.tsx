export default function Guarantee() {
    return (
        <section className="relative px-6 py-24 text-center overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-supermock-red/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-white">30-Day Satisfaction Guarantee</h2>
                <p className="text-lg text-supermock-text-secondary">
                    Try SuperMock for 30 days. <br />
                    If it’s not right for your centre, we’ll refund you.
                </p>
            </div>

            {/* Final CTA in same flow or separate? Prompt had them numbered 10 and 11. 
            I'll put Final CTA after this in page.tsx or here. 
            Let's make a separate FinalCTA component to match 11.
         */}
        </section>
    );
}
