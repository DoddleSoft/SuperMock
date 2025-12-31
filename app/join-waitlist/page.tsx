import RegistrationForm from "@/components/register/RegistrationForm";
import Footer from "@/components/landing/Footer";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-supermock-base selection:bg-supermock-red selection:text-white flex flex-col">
      <div className="flex-grow flex items-center justify-center relative overflow-hidden py-20">
        <RegistrationForm />
      </div>

      <Footer />
    </main>
  );
}
