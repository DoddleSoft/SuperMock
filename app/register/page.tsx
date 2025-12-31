import RegistrationForm from "@/components/register/RegistrationForm";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-supermock-base selection:bg-supermock-red selection:text-white flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center relative px-6 py-32 lg:py-40 overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-supermock-red/5 via-supermock-base to-supermock-base pointer-events-none"></div>
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-supermock-red/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                {/* Noise Texture */}
                <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="relative z-10 w-full">
                    <RegistrationForm />
                </div>
            </div>

            <Footer />
        </main>
    );
}
