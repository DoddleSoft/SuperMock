import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-12">
            <div className="px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Super<span className="text-supermock-red">Mock</span>
                            </span>
                        </Link>
                        <p className="text-supermock-text-secondary leading-relaxed max-w-xs">
                            The professional mock test platform for IELTS centres.
                            Built for speed, security, and scale.
                        </p>
                        <div className="flex items-center gap-4 text-white/40">
                            <Link href="#" className="hover:text-supermock-red transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-supermock-red transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-supermock-red transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-supermock-red transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">Product</h3>
                        <ul className="space-y-4 text-supermock-text-secondary">
                            <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">API Access</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">Legal</h3>
                        <ul className="space-y-4 text-supermock-text-secondary">
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-supermock-text-secondary">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-supermock-red" />
                                <span>hello@supermock.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-supermock-red" />
                                <span>+880 1711 000 000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-supermock-text-secondary/60">
                        &copy; {new Date().getFullYear()} SuperMock. All rights reserved.
                    </p>
                    <p className="text-sm text-supermock-text-secondary/60">
                        Designed for Excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
