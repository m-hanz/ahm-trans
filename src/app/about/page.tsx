"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AboutPage = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* --- HERO SECTION: ABOUT --- */}
            <section className="relative h-[80vh] flex items-center overflow-hidden px-6 md:px-16">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <Image
                        src="/images/about.jpg"
                        alt="Our Story"
                        fill
                        className="object-cover opacity-40 scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
                </motion.div>

                <div className="relative z-10 w-full max-w-[1800px] mx-auto">
                    <p className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8">
                        The Legacy Since 2015
                    </p>
                    <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase italic">
                        Our <br />
                        <span className="not-italic text-white/90">
                            Heritage.
                        </span>
                    </h1>
                </div>
            </section>

            {/* --- HISTORY SECTION --- */}
            <section className="py-40 px-6 md:px-16 bg-white text-[#050505]">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-5">
                        <p className="text-orange-600 font-mono text-xs uppercase tracking-[0.4em] mb-4">
                            History — AHM Trans
                        </p>
                        <h2 className="text-[8vw] md:text-[5vw] font-black leading-[0.9] uppercase tracking-tighter mb-8">
                            A Decade of <br />{" "}
                            <span className="italic">Excellence.</span>
                        </h2>
                    </div>
                    <div className="md:col-span-7 space-y-8">
                        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
                            Berdiri sejak tahun 2015, AHM Trans memulai
                            perjalanannya sebagai penyedia jasa transportasi
                            lokal yang mengedepankan kualitas.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                            Dengan dedikasi tinggi terhadap kepuasan pelanggan
                            dan standar operasional yang ketat, kami
                            bertransformasi menjadi kurator perjalanan mewah
                            yang melayani ribuan penjelajah dari seluruh penjuru
                            dunia.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-black/10">
                            <div>
                                <h4 className="text-4xl font-black italic mb-2">
                                    100+
                                </h4>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                                    Exclusive Destinations
                                </p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black italic mb-2">
                                    5K+
                                </h4>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                                    Elite Members
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VISION & MISSION: CINEMATIC BENTO --- */}
            <section className="py-40 px-6 md:px-16">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Visi */}
                        <motion.div
                            whileInView={{ opacity: [0, 1], y: [20, 0] }}
                            viewport={{ once: true }}
                            className="bg-[#111] p-12 md:p-20 rounded-[3rem] flex flex-col justify-between h-[500px] border border-white/5"
                        >
                            <h3 className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em]">
                                Our Vision
                            </h3>
                            <p className="text-3xl md:text-5xl font-light italic leading-tight">
                                "Menjadi{" "}
                                <span className="text-white font-medium not-italic">
                                    standar global
                                </span>{" "}
                                dalam layanan perjalanan eksklusif yang tak
                                terlupakan."
                            </p>
                            <div className="w-12 h-px bg-white/20"></div>
                        </motion.div>

                        {/* Misi */}
                        <motion.div
                            whileInView={{ opacity: [0, 1], y: [20, 0] }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-orange-500 p-12 md:p-20 rounded-[3rem] text-black h-[500px]"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-[0.4em] mb-12">
                                Our Mission
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Penyediaan armada VVIP terbaru dan terawat.",
                                    "Kurasi destinasi yang autentik dan privat.",
                                    "Protokol layanan tamu tingkat tinggi.",
                                    "Keberlanjutan ekosistem pariwisata lokal.",
                                ].map((misi, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 border-b border-black/10 pb-4"
                                    >
                                        <span className="font-mono text-xs font-bold">
                                            0{i + 1}
                                        </span>
                                        <p className="text-lg font-bold uppercase tracking-tight leading-none">
                                            {misi}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-40 flex flex-col items-center justify-center text-center px-6 border-t border-white/5">
                <p className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em] mb-12">
                    Ready to start?
                </p>
                <h2 className="text-[10vw] font-black uppercase leading-none mb-16 outline-text">
                    Let's Connect<span className="text-orange-500">.</span>
                </h2>
                <Link
                    href="/contact"
                    className="group flex items-center gap-8 px-12 py-6 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-700"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.3em]">
                        Work With Us
                    </span>
                    <HiOutlineArrowNarrowRight
                        size={20}
                        className="group-hover:translate-x-2 transition-transform"
                    />
                </Link>
            </section>

            <style jsx>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
