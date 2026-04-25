"use client";

import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/constants/data";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const DestinasiPage = () => {
    return (
        <main className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* --- HEADER: CINEMATIC DARK --- */}
            <header className="pt-32 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto">
                {/* Decorative Element matching Home */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-500 to-transparent opacity-50"></div>

                <div className="max-w-[1800px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8">
                            Curated Collection — 2026
                        </p>
                        <h1 className="text-5xl md:text-[10vw] leading-[0.75] font-black tracking-tighter uppercase italic">
                            The <br />
                            <span className="not-italic text-white/90 underline underline-offset-[1rem] decoration-orange-500/30">
                                Destinations.
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </header>

            {/* --- LIST SECTION: ASYMMETRICAL GRID --- */}
            <section className="py-24 px-6 md:px-16 bg-white text-[#050505] rounded-t-[3rem] md:rounded-t-[5rem] md:mb-10">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
                        {DESTINATIONS.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.8,
                                }}
                                // Efek asimetris: kolom tengah sedikit turun (offset)
                                className={`group relative cursor-pointer ${index % 3 === 1 ? "lg:translate-y-24" : ""}`}
                            >
                                <Link
                                    href={`/destinasi/${item.id}`}
                                    className="block"
                                >
                                    {/* Image Wrapper matching Home Showcase */}
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl mb-8">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full">
                                            <p className="text-[9px] font-mono tracking-widest uppercase">
                                                IDR{" "}
                                                {item.price.toLocaleString(
                                                    "id-ID",
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Info Wrapper */}
                                    <div className="px-2">
                                        <p className="text-[10px] font-mono text-orange-600 uppercase tracking-[0.4em] mb-3">
                                            {item.location}
                                        </p>

                                        <div className="flex justify-between items-end gap-4">
                                            <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none transition-colors group-hover:text-orange-600">
                                                {item.title}
                                            </h3>
                                            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                                                <HiOutlineArrowNarrowRight
                                                    size={20}
                                                    className="-rotate-45 group-hover:rotate-0 transition-transform"
                                                />
                                            </div>
                                        </div>

                                        <div className="h-px w-0 bg-black mt-4 group-hover:w-full transition-all duration-700 opacity-20" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </main>
    );
};

export default DestinasiPage;
