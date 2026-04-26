"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const PrivacyPage = () => {
    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen py-32 px-6 md:px-16">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-4 text-orange-500 mb-12 group"
                >
                    <HiOutlineArrowNarrowLeft className="group-hover:-translate-x-2 transition-transform" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                        Back to Home
                    </span>
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic"
                >
                    Privacy{" "}
                    <span className="not-italic text-white/20">Policy.</span>
                </motion.h1>

                <div className="space-y-8 text-gray-400 font-light leading-relaxed">
                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                            1. Informasi yang Kami Kumpulkan
                        </h2>
                        <p>
                            Kami mengumpulkan informasi yang Anda berikan
                            langsung kepada kami saat melakukan pemesanan paket
                            tour melalui WhatsApp atau formulir kontak, termasuk
                            nama, nomor telepon, dan detail perjalanan.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                            2. Penggunaan Data
                        </h2>
                        <p>
                            Data Anda digunakan secara eksklusif untuk memproses
                            reservasi perjalanan, menghubungi Anda terkait
                            detail paket, dan meningkatkan layanan personalisasi
                            AHM TRANS.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                            3. Keamanan
                        </h2>
                        <p>
                            Kami berkomitmen untuk memastikan informasi Anda
                            aman. Kami tidak menjual, mendistribusikan, atau
                            menyewakan informasi pribadi Anda kepada pihak
                            ketiga kecuali diwajibkan oleh hukum.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
