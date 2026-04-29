"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TOUR_PACKAGES } from "@/constants/data";
import FormBooking from "@/components/sections/FormBooking";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import {
    HiOutlineClock,
    HiOutlineArrowLeft,
    HiOutlineCheckCircle,
    HiOutlineUserGroup,
    HiX,
    HiOutlineMinusCircle,
    HiOutlineLocationMarker,
} from "react-icons/hi";

const DetailPaket = () => {
    const params = useParams();
    const router = useRouter();

    const data = TOUR_PACKAGES.find((p) => p.id === params.id);

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const { scrollY } = useScroll();
    const yImage = useTransform(scrollY, [0, 500], [0, 200]);

    if (!data) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-mono uppercase tracking-widest">
                Paket tidak ditemukan.
            </div>
        );
    }

    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] flex items-end overflow-hidden px-6 md:px-16 pb-12">
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
                        onClick={() => router.push("/paket")}
                        className="flex items-center gap-4 text-orange-500 hover:text-white transition-colors mb-12 group"
                    >
                        <HiOutlineArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">
                            Back to Paket Tour
                        </span>
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-orange-500 font-mono tracking-[0.6em] text-[10px] uppercase mb-4">
                            Premium Experience
                        </p>
                        <h1 className="text-[8vw] md:text-[5vw] leading-[0.9] font-black tracking-tighter uppercase italic mb-8">
                            {data.title}
                        </h1>

                        <div className="flex flex-wrap gap-8 py-6 border-t border-white/10 mt-4 font-mono text-[10px] uppercase tracking-widest">
                            <div className="flex items-center gap-3">
                                <HiOutlineClock
                                    className="text-orange-500"
                                    size={18}
                                />
                                <span>{data.duration}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlineUserGroup
                                    className="text-orange-500"
                                    size={18}
                                />
                                <span>Min. {data.minPax} Orang/Pax</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-orange-500 font-bold text-lg tracking-tighter">
                                    Rp {data.price.toLocaleString("id-ID")}
                                </span>
                                <span className="opacity-50">/ Pax</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTENT SECTION --- */}
            <section className="py-24 px-6 md:px-16 bg-white text-[#050505] rounded-t-[3rem] -mt-12 relative z-20">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20"
                            >
                                <p className="text-orange-600 font-mono text-xs uppercase tracking-[0.4em] mb-4">
                                    Trip Overview
                                </p>
                                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 mb-10">
                                    {data.description}
                                </p>

                                {/* IMAGE CONTAINER - UKURAN ASLI */}
                                <div
                                    onClick={() => setIsLightboxOpen(true)}
                                    className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-gray-100 border border-black/5 shadow-xl inline-block w-full"
                                >
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain transition-transform duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                                        <p className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.3em] mb-1">
                                            View Full Image
                                        </p>
                                        <h3 className="text-lg font-bold uppercase tracking-tight">
                                            {data.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>

                            {/* DESTINATIONS */}
                            <div className="mb-24">
                                <p className="text-orange-600 font-mono text-xs uppercase tracking-[0.4em] mb-4">
                                    Destinations
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {data.destinations.map((dest, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-gray-200"
                                        >
                                            <HiOutlineLocationMarker className="text-orange-500" />
                                            {dest}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* INCLUDES & EXCLUDES */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 border-t border-gray-100 mb-24">
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">
                                        What&apos;s{" "}
                                        <span className="text-orange-500">
                                            Included.
                                        </span>
                                    </h2>
                                    <div className="space-y-4">
                                        {data.includes.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 text-sm text-gray-600 font-medium uppercase tracking-wide"
                                            >
                                                <HiOutlineCheckCircle
                                                    className="text-green-500 flex-none"
                                                    size={20}
                                                />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">
                                        Excludes.
                                    </h2>
                                    <div className="space-y-4">
                                        {data.exclude.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 text-sm text-gray-400 font-medium uppercase tracking-wide"
                                            >
                                                <HiOutlineMinusCircle
                                                    className="text-red-400 flex-none"
                                                    size={20}
                                                />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: BOOKING FORM */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-24">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="bg-[#050505] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">
                                            Reservation
                                        </p>
                                        <h3 className="text-3xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                                            Start Your <br />
                                            <span className="italic text-orange-500 underline decoration-white/20 underline-offset-8">
                                                Voyage.
                                            </span>
                                        </h3>
                                        <div className="booking-form-wrapper">
                                            <FormBooking
                                                defaultPaket={data.title}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors z-[110]">
                            <HiX size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={data.image}
                                alt={data.title}
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .booking-form-wrapper input,
                .booking-form-wrapper select,
                .booking-form-wrapper textarea {
                    background: #111 !important;
                    border: 1px solid #222 !important;
                    color: white !important;
                    border-radius: 1rem !important;
                    padding: 1rem !important;
                }
                .booking-form-wrapper button {
                    background: #f97316 !important;
                    color: white !important;
                    border-radius: 9999px !important;
                    font-weight: bold !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.2em !important;
                }
            `}</style>
        </div>
    );
};

export default DetailPaket;
