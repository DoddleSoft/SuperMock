import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="relative px-6 py-32 overflow-hidden text-center bg-gray-50">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-supermock-red/5 via-gray-50 to-gray-50 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-supermock-red/5 to-transparent blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

            <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-supermock-red/5 border border-supermock-red/10 animate-fade-in-up">
                    <Sparkles className="w-4 h-4 text-supermock-red" />
                    <span className="text-sm font-bold text-supermock-red tracking-wide uppercase">Join 100+ Centres</span>
                </div>

                <h2 className="text-5xl font-bold tracking-tight text-supermock-text sm:text-7xl/none max-w-4xl mx-auto">
                    Ready to Run Your Centre <br />
                    <span className="relative inline-block mt-2">
                        <span className="absolute inset-0 bg-gradient-to-r from-supermock-red to-orange-600 blur-2xl opacity-20 transform -skew-x-12"></span>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-supermock-red to-orange-600">
                            Like a Pro?
                        </span>
                    </span>
                </h2>

                <p className="text-xl text-supermock-text-secondary max-w-2xl mx-auto leading-relaxed">
                    Join the top IELTS centres delivering professional mock tests with zero limitations. Start your premium journey today.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="group relative px-10 py-5 text-xl font-bold text-white transition-all transform rounded-full shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-supermock-red to-[#B91C1C] group-hover:from-[#E31B23] group-hover:to-supermock-red transition-all duration-300"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-300"></div>
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>

                        <span className="relative flex items-center gap-3">
                            Get SuperMock Now
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="relative px-8 py-5 text-lg font-bold text-[#25D366] bg-white border border-[#25D366]/20 rounded-full hover:bg-[#25D366]/5 transition-all shadow-sm hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1 group/whatsapp flex items-center gap-3">
                        <svg className="w-6 h-6 fill-current transition-transform group-hover/whatsapp:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Talk to Sales
                    </button>
                </div>


            </div>
        </section>
    );
}
