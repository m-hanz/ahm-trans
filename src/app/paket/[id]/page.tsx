"use client";

import { useParams, useRouter } from "next/navigation";
import { TOUR_PACKAGES } from "@/constants/data";
import FormBooking from "@/components/sections/FormBooking";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
    HiOutlineCalendar,
    HiOutlineMap,
    HiOutlineClock,
    HiOutlineArrowLeft,
    HiOutlineCheckCircle,
    HiOutlineUserGroup,
} from "react-icons/hi";

const DetailPaket = () => {
    const params = useParams();
    const router = useRouter();
    const data = TOUR_PACKAGES.find((p) => p.id === params.id);

    // Scroll Animation for Hero
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

                        <div className="flex flex-wrap gap-8 py-6 border-t border-white/10 mt-4">
                            <div className="flex items-center gap-3">
                                <HiOutlineClock
                                    className="text-orange-500"
                                    size={18}
                                />
                                <span className="text-[10px] font-mono uppercase tracking-widest">
                                    {data.duration}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlineUserGroup
                                    className="text-orange-500"
                                    size={18}
                                />
                                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 font-bold">
                                    Min. 13 Pax
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiOutlineMap
                                    className="text-orange-500"
                                    size={18}
                                />
                                <span className="text-[10px] font-mono uppercase tracking-widest">
                                    Selected Destinations
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTENT SECTION --- */}
            <section className="py-24 px-6 md:px-16 bg-white text-[#050505] rounded-t-[3rem] -mt-12 relative z-20">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* LEFT COLUMN: ITINERARY & INCLUDES */}
                        <div className="lg:col-span-7">
                            {/* ITINERARY */}
                            <div className="mb-24">
                                <p className="text-orange-600 font-mono text-xs uppercase tracking-[0.4em] mb-4">
                                    Curated Schedule
                                </p>
                                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                                    The{" "}
                                    <span className="italic">Itinerary.</span>
                                </h2>

                                <div className="space-y-12 relative before:absolute before:left-[1.65rem] before:top-4 before:bottom-4 before:w-px before:bg-black/10">
                                    {data.itinerary.map((item, idx) => (
                                        <motion.div
                                            key={item.day}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-10 relative group"
                                        >
                                            <div className="flex-none w-14 h-14 bg-[#050505] text-white rounded-full flex items-center justify-center font-mono text-xs z-10 group-hover:bg-orange-500 transition-colors duration-500">
                                                D{item.day}
                                            </div>
                                            <div className="pt-2">
                                                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-orange-600 mb-2">
                                                    Phase {item.day}
                                                </h4>
                                                <p className="text-xl font-light leading-relaxed text-gray-800 italic">
                                                    "{item.activity}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* INCLUDES / FACILITIES (DIAMBIL DARI DATA.TS) */}
                            <div className="pt-20 border-t border-gray-100">
                                <p className="text-orange-600 font-mono text-xs uppercase tracking-[0.4em] mb-4">
                                    Exclusive Facilities
                                </p>
                                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                                    What's{" "}
                                    <span className="italic">Included.</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.includes.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-colors"
                                        >
                                            <HiOutlineCheckCircle
                                                className="text-orange-500 flex-none"
                                                size={20}
                                            />
                                            <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
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
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                                    <div className="relative z-10">
                                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">
                                            Reservation
                                        </p>
                                        <h3 className="text-3xl font-bold uppercase tracking-tighter mb-8">
                                            Start Your <br />{" "}
                                            <span className="italic">
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

                                <p className="mt-8 text-center text-gray-400 font-mono text-[10px] uppercase tracking-widest">
                                    Support 24/7 — Min. 13 Participants Required
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CUSTOM STYLES --- */}
            <style jsx global>{`
                .booking-form-wrapper input,
                .booking-form-wrapper select,
                .booking-form-wrapper textarea {
                    background: #f5f5f5 !important;
                    border: 1px solid #eeeeee !important;
                    color: black !important;
                    border-radius: 1rem !important;
                    padding: 1rem !important;
                    font-size: 12px !important;
                }
                .booking-form-wrapper button {
                    background: #000000 !important;
                    color: white !important;
                    border-radius: 9999px !important;
                    padding: 1.25rem !important;
                    font-family: monospace !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.3em !important;
                    font-weight: bold !important;
                    transition: all 0.5s !important;
                }
                .booking-form-wrapper button:hover {
                    background: #f97316 !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default DetailPaket;
