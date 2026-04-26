"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const TermsPage = () => {
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
                    Terms of{" "}
                    <span className="not-italic text-white/20">Service.</span>
                </motion.h1>

                <div className="space-y-8 text-gray-400 font-light leading-relaxed">
                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                            1. Reservasi & Pembayaran
                        </h2>
                        <p>
                            Pemesanan dianggap sah setelah pelanggan melakukan
                            konfirmasi melalui WhatsApp resmi kami. Down Payment
                            (DP) diperlukan untuk mengamankan slot perjalanan
                            sesuai ketentuan masing-masing paket.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                            2. Pembatalan
                        </h2>
                        <p>
                            Pembatalan oleh peserta dapat mengakibatkan
                            hangusnya DP sesuai dengan kebijakan vendor
                            (hotel/transportasi). Jika pembatalan dilakukan oleh
                            pihak AHM TRANS karena alasan teknis, dana akan
                            dikembalikan 100%.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                            3. Tanggung Jawab
                        </h2>
                        <p>
                            AHM TRANS bertanggung jawab memberikan layanan
                            sesuai deskripsi paket. Kami tidak bertanggung jawab
                            atas kehilangan barang pribadi atau kejadian di luar
                            kendali (Force Majeure) seperti bencana alam.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
