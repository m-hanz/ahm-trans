"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { DESTINATIONS } from "@/constants/data";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    HiOutlineArrowLeft,
    HiOutlineCheckCircle,
    HiOutlineSparkles,
    HiOutlineLocationMarker,
} from "react-icons/hi";
import FormBooking from "@/components/sections/FormBooking";

const DetailDestinasi = () => {
    const params = useParams();
    const router = useRouter();
    const data = DESTINATIONS.find((item) => item.id === params.id);

    // Scroll Animation Effects
    const { scrollY } = useScroll();
    const yImage = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

    if (!data)
        return (
            <div className="h-screen bg-[#050505] flex items-center justify-center font-mono uppercase tracking-[0.5em] text-orange-500">
                Destinasi tidak ditemukan.
            </div>
        );

    return (
        <main className="bg-[#050505] min-h-screen text-[#EDEDED] selection:bg-orange-500">
            {/* --- HERO SECTION: CINEMATIC HEADER --- */}
            <section className="relative h-[80vh] flex items-end overflow-hidden px-6 md:px-16 pb-20">
                <motion.div
                    style={{ y: yImage }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
                </motion.div>

                <div className="relative z-10 w-full max-w-[1800px] mx-auto">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => router.push("/destinasi")}
                        className="flex items-center gap-4 text-orange-500 hover:text-white transition-colors mb-12 group"
                    >
                        <HiOutlineArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">
                            Back to Destinasi
                        </span>
                    </motion.button>

                    <motion.div style={{ opacity: opacityHero }}>
                        <div className="flex items-center gap-3 text-orange-500 mb-6">
                            <HiOutlineLocationMarker size={18} />
                            <p className="font-mono text-xs uppercase tracking-[0.3em]">
                                {data.location}
                            </p>
                        </div>
                        <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] uppercase tracking-tighter italic">
                            {data.title.split(" ")[0]} <br />
                            <span className="not-italic text-white/90">
                                {data.title.split(" ").slice(1).join(" ")}
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTENT SECTION --- */}
            <section className="relative z-10 px-6 md:px-16 pb-40">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* LEFT: DESCRIPTION & DETAILS */}
                        <div className="lg:col-span-7 space-y-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <p className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em]">
                                    The Experience —
                                </p>
                                <h2 className="text-4xl md:text-6xl font-light leading-tight italic text-gray-300">
                                    "{data.description}"
                                </h2>
                                <p className="text-gray-500 leading-relaxed text-lg max-w-2xl font-light">
                                    Kami mengkurasi setiap detail perjalanan
                                    Anda untuk memastikan standar kenyamanan
                                    tertinggi. Dari transportasi private hingga
                                    akses eksklusif ke titik-titik tersembunyi
                                    di {data.location}.
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
                                <div className="space-y-4">
                                    <HiOutlineSparkles
                                        className="text-orange-500"
                                        size={24}
                                    />
                                    <h4 className="font-bold uppercase tracking-widest text-sm">
                                        VVIP Service
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Layanan pendampingan penuh selama
                                        perjalanan dengan protokol VIP global.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <HiOutlineCheckCircle
                                        className="text-orange-500"
                                        size={24}
                                    />
                                    <h4 className="font-bold uppercase tracking-widest text-sm">
                                        All-Inclusive
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Semua biaya teknis, perizinan, dan
                                        akomodasi premium telah tercakup dalam
                                        paket.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: BOOKING CARD */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="sticky top-12 bg-white text-black rounded-[3rem] p-10 md:p-14 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                            >
                                <div className="mb-12 space-y-2">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-orange-600">
                                        Exclusive Rate
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm font-mono text-gray-400">
                                            IDR
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter italic">
                                            {data.price.toLocaleString("id-ID")}
                                        </h3>
                                    </div>
                                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-2">
                                        *Termasuk pajak & layanan concierge
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Override FormBooking style via props or wrapper if possible */}
                                    <div className="booking-form-wrapper">
                                        <FormBooking
                                            defaultPaket={data.title}
                                        />
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <p className="text-[10px] font-mono text-center text-gray-400 uppercase tracking-widest">
                                        Secure your journey instantly
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CUSTOM STYLES --- */}
            <style jsx global>{`
                /* Kontainer Input */
                .booking-form-wrapper input,
                .booking-form-wrapper select,
                .booking-form-wrapper textarea {
                    background: #f8f8f8 !important; /* Abu sangat muda agar kontras dengan kartu putih */
                    border: 1px solid #e5e5e5 !important;
                    color: #000000 !important; /* Teks input hitam pekat */
                    border-radius: 1rem !important;
                    padding: 1rem !important;
                    font-size: 14px !important;
                    font-weight: 500 !important;
                }

                /* Label Form (Nama, WhatsApp, dll) */
                .booking-form-wrapper label {
                    color: #000000 !important; /* Label menjadi hitam pekat */
                    font-weight: 700 !important; /* Lebih tebal agar terbaca */
                    opacity: 1 !important;
                }

                /* Teks Pesan Berhasil (Success Message) */
                .booking-form-wrapper h3 {
                    color: #000000 !important; /* "Booking Terkirim" jadi Hitam */
                }

                .booking-form-wrapper p {
                    color: #000000 !important; /* Teks deskripsi sukses jadi Hitam */
                    font-weight: 600 !important; /* Lebih tebal */
                }

                /* Tombol Submit */
                .booking-form-wrapper button {
                    background: #000000 !important;
                    color: #ffffff !important;
                    border-radius: 9999px !important;
                    padding: 1.25rem !important;
                    font-family: monospace !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.3em !important;
                    font-weight: bold !important;
                    transition: all 0.5s !important;
                    margin-top: 1rem;
                }

                .booking-form-wrapper button:hover {
                    background: #f97316 !important; /* Orange saat hover */
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(249, 115, 22, 0.2);
                }

                /* Memastikan placeholder tidak terlalu pudar */
                .booking-form-wrapper input::placeholder {
                    color: #999999 !important;
                }
            `}</style>
        </main>
    );
};

export default DetailDestinasi;
