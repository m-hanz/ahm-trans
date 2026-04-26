"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Mencegah scroll pada body saat mobile menu terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Varian animasi untuk garis hamburger ke X
    const lineVariants = {
        closed: { rotate: 0, y: 0, opacity: 1 },
        opened1: { rotate: 45, y: 6 },
        opened2: { opacity: 0, x: -20 },
        opened3: { rotate: -45, y: -6 },
    };

    // Varian untuk staggered children di mobile menu
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
    };

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-[100] px-4 sm:px-6 pointer-events-none transition-all duration-500 pt-2">
                <nav
                    className={`mx-auto pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
              flex items-center justify-between w-full max-w-6xl relative z-[110]
              ${
                  isScrolled && !isOpen
                      ? "bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3"
                      : "bg-transparent border-transparent px-2 py-4"
              }`}
                >
                    {/* LOGO */}
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="relative flex items-center group"
                    >
                        <span className="text-2xl font-black tracking-tighter text-zinc-900 transition-transform duration-300 group-hover:scale-105">
                            AHM<span className="text-orange-500">.</span>
                            <span className="font-light text-zinc-500">
                                Trans
                            </span>
                        </span>
                    </Link>

                    {/* DESKTOP NAV - Elegant Line Hover */}
                    <div className="hidden md:flex items-center gap-9">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.key}
                                href={link.href}
                                className="relative group py-2"
                            >
                                <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-zinc-500 group-hover:text-zinc-900 transition-colors duration-300">
                                    {link.label}
                                </span>
                                {/* Animated Underline */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* DESKTOP CTA BUTTON */}
                    <div className="hidden md:block">
                        <Link
                            href="https://wa.me/6285746828292"
                            className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium tracking-wide hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    {/* CUSTOM ANIMATED TOGGLE BUTTON (MOBILE) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? "opened1" : "closed"}
                            variants={lineVariants}
                            className="w-6 h-[2px] bg-zinc-900 block rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? "opened2" : "closed"}
                            variants={lineVariants}
                            className="w-6 h-[2px] bg-zinc-900 block rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? "opened3" : "closed"}
                            variants={lineVariants}
                            className="w-6 h-[2px] bg-zinc-900 block rounded-full"
                        />
                    </button>
                </nav>
            </header>

            {/* MOBILE NAV */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                        exit={{
                            opacity: 0,
                            backdropFilter: "blur(0px)",
                            transition: { delay: 0.3 },
                        }}
                        className="fixed inset-0 bg-white/95 z-[90] md:hidden flex flex-col items-center justify-center pt-16"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="flex flex-col items-center gap-8 w-full px-6"
                        >
                            {NAV_LINKS.map((link) => (
                                <motion.div
                                    key={link.key}
                                    variants={itemVariants}
                                    className="overflow-hidden"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="relative text-2xl font-semibold uppercase tracking-widest text-zinc-600 hover:text-orange-500 transition-colors duration-300 group flex items-center justify-center"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* MOBILE CTA BUTTON */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-6 w-full max-w-xs"
                            >
                                <Link
                                    href="https://wa.me/6285746828292"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center py-4 rounded-full bg-zinc-900 text-white text-lg font-medium tracking-wide hover:bg-orange-500 transition-all duration-300"
                                >
                                    Hubungi Kami
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
