export default function FinalCTA() {
    return (
        <section className="relative px-6 py-32 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-supermock-base -z-10"></div>

            <div className="max-w-3xl mx-auto space-y-8 animate-face-in">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Run IELTS Mock Tests <br />
                    <span className="text-supermock-red">the Professional Way</span>
                </h2>

                <div className="pt-4">
                    <button className="px-10 py-5 text-lg font-bold text-white transition-all transform rounded-xl bg-supermock-red hover:bg-[#c4152b] hover:scale-[1.02] shadow-[0_10px_40px_rgba(177,18,38,0.3)]">
                        Get SuperMock for Your Centre
                    </button>
                </div>
            </div>
        </section>
    );
}
