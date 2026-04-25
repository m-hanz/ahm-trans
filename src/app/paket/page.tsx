"use client";

import { TOUR_PACKAGES } from "@/constants/data";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineClock,
    HiOutlineArrowNarrowRight,
    HiOutlineUserGroup,
} from "react-icons/hi";
import Image from "next/image";
import { useRef } from "react";

const PaketPage = () => {
    const containerRef = useRef(null);

    return (
        <main className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* --- HEADER SECTION: CINEMATIC --- */}
            <header className="relative pt-32 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <p className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8">
                        Our Curated Selection
                    </p>
                    <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.75] tracking-tighter uppercase mb-12">
                        Luxury <br />
                        <span className="italic text-white/90">Packages.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-8 pt-12 border-t border-white/10">
                        <div className="h-px w-24 bg-orange-500 hidden md:block"></div>
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base italic max-w-xl">
                            "Menghilangkan kerumitan dalam perencanaan. Setiap
                            paket dirancang untuk memberikan kenyamanan absolut
                            dengan akses eksklusif ke destinasi tersembunyi."
                        </p>
                    </div>
                </motion.div>
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orange-500/5 rounded-full blur-[120px] -z-0" />
            </header>

            {/* --- PACKAGES LIST --- */}
            <section className="px-6 md:px-16 max-w-[1800px] mx-auto space-y-32 md:space-y-60 pb-32">
                {TOUR_PACKAGES.map((paket, index) => (
                    <motion.div
                        key={paket.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                    >
                        {/* Visual Side */}
                        <div
                            className={`lg:col-span-7 relative ${index % 2 !== 0 ? "lg:order-last" : ""}`}
                        >
                            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] lg:aspect-[16/9] border border-white/5">
                                <Image
                                    src={paket.image}
                                    alt={paket.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                                {/* Floating Badges */}
                                <div className="absolute top-8 left-8 flex flex-col gap-3">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-3 w-fit">
                                        <HiOutlineClock className="text-orange-500" />
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-white">
                                            {paket.duration}
                                        </span>
                                    </div>
                                    {/* Badge Minimal Peserta di Visual */}
                                    <div className="bg-orange-500/20 backdrop-blur-md border border-orange-500/30 px-4 py-2 rounded-full flex items-center gap-3 w-fit">
                                        <HiOutlineUserGroup className="text-orange-500" />
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-white">
                                            Min. 13 Pax
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Side */}
                        <div className="lg:col-span-5 space-y-8">
                            <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                                Experience 0{index + 1}
                            </p>

                            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] italic">
                                {paket.title}
                            </h3>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    {paket.includes
                                        .slice(0, 4)
                                        .map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 text-[11px] font-mono uppercase text-gray-500"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-orange-500" />
                                                {item}
                                            </div>
                                        ))}
                                </div>

                                <div className="pt-8 flex flex-wrap items-end justify-between gap-6 border-t border-white/10">
                                    <div>
                                        <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-2">
                                            Investment{" "}
                                            <span className="text-orange-500/50 ml-2">
                                                / Min. 13 Pax
                                            </span>
                                        </p>
                                        <p className="text-4xl font-black tracking-tighter text-white outline-text">
                                            Rp{" "}
                                            {paket.price.toLocaleString(
                                                "id-ID",
                                            )}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/paket/${paket.id}`}
                                        className="flex items-center gap-6 group/btn"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] group-hover/btn:text-orange-500 transition-colors">
                                            Details
                                        </span>
                                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-orange-500 group-hover/btn:border-orange-500 transition-all duration-500">
                                            <HiOutlineArrowNarrowRight
                                                size={24}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* --- MARQUEE --- */}
            <div className="py-24 bg-white text-black overflow-hidden flex items-center">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[1, 2].map((i) => (
                        <span
                            key={i}
                            className="text-[12vw] font-black uppercase leading-none pr-12"
                        >
                            Voyage Elite • High-End Service • Curated
                            Destinations •
                        </span>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .outline-text {
                    color: white;
                    -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </main>
    );
};

export default PaketPage;
