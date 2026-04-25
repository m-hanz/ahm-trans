"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    HiPhone,
    HiLocationMarker,
    HiClock,
    HiArrowRight,
    HiCheckCircle,
    HiX,
} from "react-icons/hi";
import { sendWhatsAppMessage } from "@/utils/whatsapp";

const ContactPage = () => {
    const [msgData, setMsgData] = useState({ nama: "", pesan: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleQuickChat = () => {
        if (!msgData.nama || !msgData.pesan) {
            alert("Mohon isi nama dan pesan Anda.");
            return;
        }

        sendWhatsAppMessage({
            type: "INQUIRY",
            nama: msgData.nama,
            pesan: msgData.pesan,
        });

        setIsSubmitted(true);
    };

    // Fungsi untuk mereset form ke kondisi semula
    const handleResetForm = () => {
        setMsgData({ nama: "", pesan: "" });
        setIsSubmitted(false);
    };

    return (
        <div className="bg-[#050505] text-[#EDEDED] min-h-screen selection:bg-orange-500">
            {/* HERO CONTACT - Tetap sama seperti sebelumnya */}
            <section className="relative pt-32 pb-20 px-6 md:px-16 overflow-hidden">
                <div className="max-w-[1800px] mx-auto border-b border-white/10 pb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-orange-500 font-mono tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8"
                    >
                        Available 24/7 Global Service
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase italic"
                    >
                        Connect <br />
                        <span className="not-italic text-white/90">
                            With Us.
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="py-20 px-6 md:px-16">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-5 space-y-12">
                        {/* Info Cards - Tetap sama */}
                        <div className="space-y-8">
                            {[
                                {
                                    icon: <HiPhone />,
                                    title: "Telepon / WA",
                                    value: "+62 856-0702-7172",
                                    label: "DIRECT LINE",
                                },
                                {
                                    icon: <HiLocationMarker />,
                                    title: "Alamat Kantor",
                                    value: "Jl. Wisata Indah No. 123, Kota Budaya, Indonesia",
                                    label: "HEADQUARTER",
                                },
                                {
                                    icon: <HiClock />,
                                    title: "Jam Kerja",
                                    value: "Senin - Minggu: 08:00 - 20:00 WIB",
                                    label: "OPERATIONAL",
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <p className="text-orange-500 font-mono text-[9px] tracking-[0.3em] mb-4 opacity-60">
                                        {item.label}
                                    </p>
                                    <div className="flex items-start gap-8">
                                        <div className="text-2xl text-white group-hover:text-orange-500 transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2 italic">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Form / Success Section */}
                        <div className="pt-8 border-t border-white/5 min-h-[300px]">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                            Kirim Pesan Cepat
                                        </h3>
                                        <input
                                            type="text"
                                            placeholder="Nama Anda"
                                            value={msgData.nama}
                                            onChange={(e) =>
                                                setMsgData({
                                                    ...msgData,
                                                    nama: e.target.value,
                                                })
                                            }
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-sm"
                                        />
                                        <textarea
                                            placeholder="Apa yang ingin Anda tanyakan?"
                                            rows={3}
                                            value={msgData.pesan}
                                            onChange={(e) =>
                                                setMsgData({
                                                    ...msgData,
                                                    pesan: e.target.value,
                                                })
                                            }
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-sm resize-none"
                                        ></textarea>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleQuickChat}
                                            className="flex items-center gap-6 group"
                                        >
                                            <span className="bg-orange-500 text-black px-10 py-5 rounded-full font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                                                Send via WhatsApp
                                            </span>
                                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                                <HiArrowRight />
                                            </div>
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    /* SUCCESS MESSAGE DENGAN TOMBOL CLOSE */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative bg-white/5 border border-orange-500/30 p-10 rounded-[2rem] flex flex-col items-center text-center space-y-6"
                                    >
                                        {/* Tombol Close di Pojok Kanan Atas */}
                                        <button
                                            onClick={handleResetForm}
                                            className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors"
                                        >
                                            <HiX className="text-xl" />
                                        </button>

                                        <HiCheckCircle className="text-orange-500 text-6xl" />
                                        <div>
                                            <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2">
                                                Pesan Terkirim
                                            </h3>
                                            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[280px]">
                                                Terima kasih,{" "}
                                                <strong>{msgData.nama}</strong>.
                                                Kami akan segera menghubungi
                                                Anda.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleResetForm}
                                            className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 hover:text-white transition-colors border-b border-orange-500/0 hover:border-white pb-1"
                                        >
                                            Kirim Pesan Lain
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* MAP SECTION - Tetap sama */}
                    <div className="lg:col-span-7 h-[400px] lg:h-[700px] grayscale invert contrast-125 opacity-80 rounded-[3rem] overflow-hidden border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.33825026937!2d114.2863901602492!3d-8.211756885375936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15bf2613867c7%3A0x63335b1d5c074df0!2sBanyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1714000000000!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Footer Background Text */}
            <div className="py-20 text-center opacity-20 select-none pointer-events-none">
                <h2 className="text-[18vw] font-black uppercase leading-none tracking-tighter outline-text">
                    Elite
                </h2>
            </div>

            <style jsx>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
