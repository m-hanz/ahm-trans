"use client";

import { motion } from "framer-motion";
import { TRANSPORTS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import {
    HiOutlineUserGroup,
    HiOutlineShieldCheck,
    HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const TransportPage = () => {
    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen pb-32">
            <header className="pt-32 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto">
                <div className="border-l border-orange-500 pl-6 md:pl-10">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-4"
                    >
                        Premium Fleet — 2026
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mb-6 italic"
                    >
                        Our <br />{" "}
                        <span className="not-italic text-white/90">
                            Transport.
                        </span>
                    </motion.h1>
                </div>
            </header>

            <section className="px-6 md:px-16 max-w-[1800px] mx-auto space-y-12">
                {TRANSPORTS.map((unit, index) => (
                    <motion.div
                        key={unit.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-orange-500/30 transition-all duration-500"
                    >
                        <div className="lg:col-span-5 relative h-[300px] lg:h-[450px] overflow-hidden">
                            <Image
                                src={unit.image}
                                alt={unit.name}
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                        </div>

                        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-2">
                                        {unit.name}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineUserGroup className="text-orange-500" />
                                            <span className="text-[10px] font-mono uppercase tracking-widest">
                                                {unit.capacity}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                                        Rate From
                                    </p>
                                    <p className="text-2xl font-black text-orange-500 italic">
                                        Rp {unit.price}{" "}
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                            /day
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
                                {unit.description}
                            </p>

                            <Link
                                href={`/transport/${unit.id}`}
                                className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all duration-500 w-fit"
                            >
                                <span>Explore Details</span>
                                <HiOutlineArrowNarrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default TransportPage;
