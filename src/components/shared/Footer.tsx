"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] text-[#EDEDED] pt-32 pb-12 overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-16">
                {/* Upper Section: Big Brand Statement */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
                    <div className="lg:col-span-6 space-y-8">
                        <div className="flex flex-col">
                            <h2 className="text-[12vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase italic">
                                AHM
                                <span className="not-italic text-orange-500">
                                    .
                                </span>
                                <br />
                                <span className="not-italic">TRANS</span>
                            </h2>
                            <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase mt-4">
                                Premium Travel Experience
                            </p>
                        </div>
                        <p className="max-w-md text-gray-400 font-light leading-relaxed italic text-sm md:text-base">
                            "Menyusun standar baru dalam perjalanan eksklusif.
                            Kami tidak hanya mengantar Anda, kami mengkurasi
                            memori."
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-3 space-y-8">
                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] border-b border-white/10 pb-4">
                            Explore
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Destinasi",
                                "Paket Tour",
                                "Gallery",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "")}`}
                                        className="text-xl font-bold uppercase tracking-tighter hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div className="lg:col-span-3 space-y-8">
                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] border-b border-white/10 pb-4">
                            Connect
                        </p>
                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                                    Office
                                </p>
                                <p className="text-sm font-medium group-hover:text-white transition-colors leading-snug">
                                    Senayan Regency, Kav 12
                                    <br />
                                    Jakarta Selatan, Indonesia
                                </p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                                    Direct Inquiries
                                </p>
                                <p className="text-sm font-medium group-hover:text-orange-500 transition-colors uppercase tracking-wider">
                                    info@ahmtrans.com
                                </p>
                            </div>

                            {/* Social Icons with Minimal Circle Style */}
                            <div className="flex gap-4 pt-4">
                                {[
                                    { icon: <FaInstagram />, href: "#" },
                                    { icon: <FaFacebookF />, href: "#" },
                                    { icon: <FaWhatsapp />, href: "#" },
                                ].map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.href}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-500"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Legal & Credits */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-8 text-[9px] font-mono uppercase tracking-[0.3em] text-gray-600">
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>

                    <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-600">
                        &copy; {currentYear} AHM TRANS{" "}
                        <span className="mx-2">—</span> All Rights Reserved
                    </p>

                    <div className="hidden md:block h-px w-24 bg-white/10"></div>
                </div>
            </div>

            {/* Background Decorative Element (Large Watermark) */}
            <div className="absolute bottom-[-5%] right-[-5%] text-[25vw] font-black italic text-white/[0.02] pointer-events-none select-none">
                EST.2016
            </div>
        </footer>
    );
};

export default Footer;
