"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { TRANSPORTS } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    HiOutlineArrowLeft,
    HiOutlineCheck,
    HiX,
    HiPlay,
    HiOutlineChatAlt2,
    HiOutlineUserGroup,
    HiOutlineCheckCircle,
} from "react-icons/hi";

const TransportDetail = () => {
    const params = useParams();
    const router = useRouter();
    const unit = TRANSPORTS.find((t) => t.id === params.id);

    const [selectedMedia, setSelectedMedia] = useState<{
        src: string;
        type: string;
    } | null>(null);

    if (!unit)
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono uppercase tracking-widest">
                Unit not found.
            </div>
        );

    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen pb-20 selection:bg-orange-500 font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
                <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover opacity-50 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />

                <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-16 max-w-[1800px] mx-auto">
                    <motion.button
                        onClick={() => router.push("/transport")}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-10 hover:text-white transition-colors group"
                    >
                        <HiOutlineArrowLeft
                            size={20}
                            className="group-hover:-translate-x-2 transition-transform"
                        />
                        Back to Fleet
                    </motion.button>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-orange-500 font-mono text-xs uppercase tracking-[0.5em] mb-4"
                    >
                        Premium Fleet
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none mb-6"
                    >
                        {unit.name}
                    </motion.h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 font-mono text-xs uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <HiOutlineUserGroup
                                className="text-orange-500"
                                size={18}
                            />
                            <span>{unit.capacity}</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                        <span>
                            Price Starts{" "}
                            <span className="text-white font-bold italic ml-2 text-sm">
                                Rp {unit.price} / Day
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="max-w-[1800px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-24">
                {/* LEFT COLUMN: INFO & GALLERY */}
                <div className="lg:col-span-8 space-y-24">
                    {/* Narrative Description */}
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 italic">
                            The{" "}
                            <span className="text-orange-500">Excellence.</span>
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed text-xl md:text-3xl">
                            {unit.fullDescription}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="pt-16 border-t border-white/10">
                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">
                            Unit Facilities
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {unit.features.map((feat) => (
                                <div
                                    key={feat}
                                    className="flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                        <HiOutlineCheck
                                            className="text-orange-500"
                                            size={16}
                                        />
                                    </div>
                                    {feat}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Price Includes */}
                    <div className="pt-16 border-t border-white/10">
                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">
                            Price Includes
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {unit.includes.map((item) => (
                                <div
                                    key={item}
                                    className="p-6 rounded-[2rem] bg-[#0a0a0a] border border-white/5 flex flex-col gap-4 hover:border-orange-500/30 transition-colors group"
                                >
                                    <HiOutlineCheckCircle
                                        className="text-orange-500 group-hover:scale-110 transition-transform"
                                        size={24}
                                    />
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- MASONRY GALLERY (FIXED FOR PORTRAIT) --- */}
                    <div className="pt-16 border-t border-white/10">
                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">
                            Unit Gallery
                        </p>
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {unit.gallery.map((media, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    onClick={() =>
                                        setSelectedMedia({
                                            src: media.src,
                                            type: media.type,
                                        })
                                    }
                                    className="relative h-auto rounded-[2rem] overflow-hidden bg-[#0a0a0a] cursor-pointer group border border-white/5 break-inside-avoid shadow-lg"
                                >
                                    {media.type === "image" ? (
                                        <img
                                            src={media.src}
                                            alt={`${unit.name} gallery ${i}`}
                                            className="w-full h-auto object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative w-full h-auto flex items-center justify-center bg-black overflow-hidden">
                                            <video
                                                src={media.src}
                                                className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                                muted
                                                loop
                                                onMouseOver={(e) =>
                                                    e.currentTarget.play()
                                                }
                                                onMouseOut={(e) => {
                                                    e.currentTarget.pause();
                                                    e.currentTarget.currentTime = 0;
                                                }}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl z-10 group-hover:scale-110 transition-transform">
                                                    <HiPlay className="text-white text-3xl ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: STICKY BOOKING CARD */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32 p-8 md:p-12 bg-[#0a0a0a] border border-white/5 rounded-[3.5rem] text-center shadow-2xl">
                        <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
                            Ready to Depart?
                        </p>
                        <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4">
                            Reserve Now
                        </h3>

                        <div className="py-8 border-y border-white/5 my-12">
                            <p className="text-[9px] font-mono text-gray-500 uppercase mb-3 tracking-widest">
                                Daily Rate
                            </p>
                            <p className="text-5xl font-black text-white italic tracking-tighter">
                                <span className="text-xs text-orange-500 not-italic mr-1">
                                    IDR
                                </span>
                                {unit.price}
                            </p>
                        </div>

                        <Link
                            href={`https://wa.me/6285746828292?text=Halo AHM Trans, saya ingin booking unit ${unit.name}`}
                            target="_blank"
                            className="flex items-center justify-center gap-4 w-full py-7 bg-orange-500 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-orange-500/20"
                        >
                            <HiOutlineChatAlt2 size={24} />
                            Book Via WhatsApp
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- MEDIA LIGHTBOX (FIXED FOR PORTRAIT) --- */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button className="absolute top-6 right-6 text-white/50 hover:text-orange-500 transition-colors z-[110]">
                            <HiX size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative max-w-full max-h-screen flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === "image" ? (
                                <img
                                    src={selectedMedia.src}
                                    alt="Full view"
                                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                                />
                            ) : (
                                <video
                                    src={selectedMedia.src}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TransportDetail;
