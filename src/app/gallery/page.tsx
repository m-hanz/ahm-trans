"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GalleryItem } from "@/constants/data";
import { HiX, HiPlay, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

const GalleryPage = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* --- HEADER SECTION --- */}
            <section className="pt-32 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto">
                <div className="border-l border-orange-500 pl-6 md:pl-10">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-4"
                    >
                        Visual Archives — 2026
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mb-6 italic"
                    >
                        The <br />
                        <span className="not-italic text-white/90">
                            Gallery.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-xl text-gray-400 font-light leading-relaxed text-sm md:text-base italic"
                    >
                        "Koleksi fragmen perjalanan yang kami kurasi. Setiap
                        frame menceritakan definisi baru tentang kenyamanan dan
                        eksklusivitas."
                    </motion.p>
                </div>
            </section>

            {/* --- MASONRY GRID SECTION --- */}
            <section className="pb-40 px-6 md:px-16 max-w-[1800px] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {GALLERY_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedItem(item)}
                            className="relative overflow-hidden rounded-[2rem] group cursor-pointer bg-[#111] border border-white/5"
                        >
                            {item.type === "image" ? (
                                <div className="relative w-full aspect-auto">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                </div>
                            ) : (
                                <div className="relative aspect-video bg-black flex items-center justify-center">
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover opacity-60"
                                        muted
                                        loop
                                        onMouseOver={(e) =>
                                            e.currentTarget.play()
                                        }
                                        onMouseOut={(e) =>
                                            e.currentTarget.pause()
                                        }
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
                                            <HiPlay className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Overlay Info Sesuai Style Home */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <p className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.type === "video"
                                        ? "Motion Capture"
                                        : "Still Photography"}
                                </p>
                                <h3 className="text-xl font-bold text-white uppercase tracking-tighter leading-none mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                                    {item.title}
                                </h3>
                                <div className="h-px w-0 bg-white group-hover:w-full transition-all duration-1000" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- LIGHTBOX MODAL --- */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-orange-500 transition-colors z-[110] flex items-center gap-2 group"
                            onClick={() => setSelectedItem(null)}
                        >
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all">
                                Close
                            </span>
                            <HiX size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="max-w-6xl w-full flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10">
                                {selectedItem.type === "image" ? (
                                    <img
                                        src={selectedItem.src}
                                        alt={selectedItem.title}
                                        className="max-h-[75vh] w-full object-contain bg-[#0a0a0a]"
                                    />
                                ) : (
                                    <video
                                        src={selectedItem.src}
                                        controls
                                        autoPlay
                                        className="max-h-[75vh] w-full"
                                    />
                                )}
                            </div>
                            <div className="mt-8 text-center">
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">
                                    {selectedItem.title}
                                </h3>
                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <div className="h-px w-8 bg-orange-500"></div>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">
                                        Captured by Voyage Elite
                                    </p>
                                    <div className="h-px w-8 bg-orange-500"></div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .italic {
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};

export default GalleryPage;
