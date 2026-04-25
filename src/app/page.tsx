"use client";

import { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight, HiSearch, HiX } from "react-icons/hi";
import { DESTINATIONS, TOUR_PACKAGES } from "@/constants/data";

export default function Home() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();

    // Scroll Animation for Hero
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        if (query.length > 1) {
            const filtered = [
                ...DESTINATIONS.filter((d) =>
                    d.title.toLowerCase().includes(query.toLowerCase()),
                ).map((d) => ({
                    ...d,
                    type: "Destinasi",
                    category: "destinasi",
                })),
                ...TOUR_PACKAGES.filter((p) =>
                    p.title.toLowerCase().includes(query.toLowerCase()),
                ).map((p) => ({ ...p, type: "Paket Tour", category: "paket" })),
            ];
            setResults(filtered.slice(0, 5));
            setIsSearching(true);
        } else {
            setResults([]);
            setIsSearching(false);
        }
    }, [query]);

    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* --- HERO SECTION: CINEMATIC --- */}
            <section className="relative h-[110vh] flex items-center overflow-hidden px-6 md:px-16">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero.jpg" // Pastikan path ini benar
                        alt="Luxury Travel"
                        fill
                        className="object-cover opacity-60 scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
                </motion.div>

                <div className="relative z-10 w-full max-w-[1800px] mx-auto">
                    <motion.div style={{ opacity }}>
                        <p className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8 overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="block"
                            >
                                Beyond Conventional Travel
                            </motion.span>
                        </p>
                        <h1 className="text-[14vw] md:text-[10vw] leading-[0.75] font-black tracking-tighter uppercase mb-12 italic">
                            Voyage <br />
                            <span className="not-italic text-white/90">
                                Elite.
                            </span>
                        </h1>
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-12 border-t border-white/10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-md space-y-6"
                        >
                            <p className="text-gray-400 font-light leading-relaxed text-base italic">
                                "Definisi baru kemewahan dalam setiap
                                perjalanan. Kami mengkurasi destinasi paling
                                eksklusif dengan protokol layanan VVIP."
                            </p>
                            <div className="flex gap-8 items-center">
                                <Link
                                    href="/destinasi"
                                    className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-orange-500 transition-colors"
                                >
                                    Explore Gallery
                                </Link>
                                <div className="h-px w-12 bg-white/20"></div>
                                <Link
                                    href="/paket"
                                    className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-orange-500 transition-colors"
                                >
                                    Our Packages
                                </Link>
                            </div>
                        </motion.div>

                        {/* Search Bar Minimalist */}
                        <div className="relative w-full md:w-72 group">
                            {" "}
                            <div
                                className={`flex items-center border-b transition-all duration-500 pb-1.5 ${isSearching ? "border-orange-500" : "border-white/20 group-hover:border-white/40"}`}
                            >
                                <HiSearch
                                    className={`${isSearching ? "text-orange-500" : "text-gray-500"} transition-colors`}
                                    size={14}
                                />
                                <input
                                    type="text"
                                    placeholder="Cari..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="bg-transparent px-3 w-full outline-none font-mono text-[10px] uppercase tracking-[0.2em] placeholder:text-gray-700 text-white"
                                />
                                {query && (
                                    <button
                                        onClick={() => setQuery("")}
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        <HiX size={14} />
                                    </button>
                                )}
                            </div>
                            {/* Compact Results Dropdown */}
                            <AnimatePresence>
                                {isSearching && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md text-black rounded-xl shadow-2xl z-50 overflow-hidden border border-white/10"
                                    >
                                        {results.length > 0 ? (
                                            <div className="p-1">
                                                {results.map((r) => (
                                                    <button
                                                        key={r.id}
                                                        onClick={() =>
                                                            router.push(
                                                                `/${r.category}/${r.id}`,
                                                            )
                                                        }
                                                        className="w-full p-2.5 hover:bg-orange-500 hover:text-white text-left flex items-center justify-between group rounded-lg transition-all"
                                                    >
                                                        <div className="truncate">
                                                            <p className="text-[8px] font-mono uppercase tracking-tighter opacity-60">
                                                                {r.type}
                                                            </p>
                                                            <p className="font-bold text-[11px] uppercase truncate">
                                                                {r.title}
                                                            </p>
                                                        </div>
                                                        <HiOutlineArrowNarrowRight
                                                            size={12}
                                                            className="opacity-0 group-hover:opacity-100 transition-all"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-4 text-center">
                                                <p className="text-[10px] font-bold uppercase tracking-tight text-gray-400">
                                                    Tidak ditemukan
                                                </p>
                                                <p className="text-[9px] text-gray-500 mt-1 leading-tight">
                                                    Pencarian untuk{" "}
                                                    <span className="italic">
                                                        "{query}"
                                                    </span>{" "}
                                                    nihil.
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SHOWCASE: ASYMMETRICAL GRID --- */}
            <section className="py-40 px-6 md:px-16 bg-white text-[#050505]">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24">
                        <div className="md:col-span-8">
                            <p className="text-orange-600 font-mono text-xs uppercase tracking-[0.4em] mb-4">
                                Portfolio — 2026
                            </p>
                            <h2 className="text-[10vw] md:text-[7vw] font-black leading-[0.85] uppercase tracking-tighter">
                                Selected <br />{" "}
                                <span className="italic">Encounters.</span>
                            </h2>
                        </div>
                        <div className="md:col-span-4 md:text-right">
                            <Link
                                href="/destinasi"
                                className="inline-flex items-center gap-6 group"
                            >
                                <span className="font-mono text-xs uppercase tracking-widest">
                                    Discover More
                                </span>
                                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                                    <HiOutlineArrowNarrowRight size={24} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DESTINATIONS.slice(0, 3).map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className={`group relative cursor-pointer ${idx === 1 ? "md:translate-y-20" : ""}`}
                                onClick={() =>
                                    router.push(`/destinasi/${item.id}`)
                                }
                            >
                                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                    <div className="absolute bottom-10 left-10 right-10">
                                        <p className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-2">
                                            {item.location}
                                        </p>
                                        <h4 className="text-3xl font-bold text-white uppercase tracking-tighter leading-none mb-4">
                                            {item.title}
                                        </h4>
                                        <div className="h-px w-0 bg-white group-hover:w-full transition-all duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS: DARK MODE ELEGANCE --- */}
            <section className="py-60 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-500 to-transparent"></div>
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <h3 className="text-4xl md:text-7xl font-extralight italic leading-[1.1] mb-32 tracking-tight">
                        "Eksplorasi bukan tentang sejauh mana Anda pergi,{" "}
                        <br className="hidden md:block" />
                        tapi tentang seberapa{" "}
                        <span className="text-orange-500 font-medium not-italic">
                            mendalam
                        </span>{" "}
                        Anda merasakannya."
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "VIP FLEET", val: "24" },
                            { label: "CURATED PACKS", val: "12" },
                            { label: "HAPPY JOURNEY", val: "2.4K" },
                            { label: "YEARS OF TRUST", val: "10" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileInView={{
                                    scale: [0.9, 1],
                                    opacity: [0, 1],
                                }}
                                className="space-y-4"
                            >
                                <p className="text-5xl md:text-7xl font-black tracking-tighter italic outline-text">
                                    {stat.val}
                                </p>
                                <div className="h-px w-8 bg-orange-500 mx-auto opacity-40"></div>
                                <p className="text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION: BOLD & LARGE --- */}
            <section className="py-40 bg-orange-500 text-white flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-[15vw] font-black uppercase leading-none tracking-[ -0.05em] mb-12">
                    Let's Go<span className="italic text-black">.</span>
                </h2>
                <Link
                    href="/contact"
                    className="px-20 py-8 bg-black text-white rounded-full font-mono text-xs uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 shadow-2xl"
                >
                    Start Booking
                </Link>
            </section>

            <style jsx>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    );
}
