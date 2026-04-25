"use client";

import React, { useState, useEffect } from "react";
import { sendWhatsAppMessage } from "@/utils/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight, HiCheckCircle, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface FormBookingProps {
    defaultPaket?: string;
}

const FormBooking = ({ defaultPaket = "" }: FormBookingProps) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        nama: "",
        whatsapp: "",
        paket: defaultPaket,
        tanggal: "",
        jumlahOrang: "1",
    });

    useEffect(() => {
        if (!isSuccess) {
            setFormData((prev) => ({ ...prev, paket: defaultPaket }));
        }
    }, [defaultPaket, isSuccess]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mengirim data dengan tipe BOOKING
        sendWhatsAppMessage({
            type: "BOOKING",
            ...formData,
        });

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 800);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleResetAndClose = () => {
        setFormData({
            nama: "",
            whatsapp: "",
            paket: defaultPaket,
            tanggal: "",
            jumlahOrang: "1",
        });
        setIsSuccess(false);
    };

    const inputClass =
        "w-full bg-transparent border-b border-white/20 py-3 text-sm outline-none focus:border-orange-500 transition-all placeholder:text-gray-600 font-medium";
    const labelClass =
        "block text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1";

    return (
        <div className="w-full text-white relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <motion.form
                        key="form-booking"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onSubmit={handleSubmit}
                        className="w-full space-y-8"
                    >
                        <div>
                            <label className={labelClass}>Nama Lengkap</label>
                            <input
                                required
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                placeholder="Ketik nama Anda..."
                                className={inputClass}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className={labelClass}>
                                    Nomor WhatsApp
                                </label>
                                <input
                                    required
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="0812..."
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className={labelClass}>
                                    Jumlah Tamu
                                </label>
                                <input
                                    required
                                    type="number"
                                    min="1"
                                    name="jumlahOrang"
                                    value={formData.jumlahOrang}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className={labelClass}>Destinasi</label>
                                <input
                                    readOnly
                                    type="text"
                                    name="paket"
                                    value={formData.paket}
                                    className={`${inputClass} border-white/10 text-gray-400 cursor-default`}
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Tanggal</label>
                                <input
                                    required
                                    type="date"
                                    name="tanggal"
                                    value={formData.tanggal}
                                    onChange={handleChange}
                                    className={`${inputClass}`}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group relative w-full ${isSubmitting ? "bg-gray-700" : "bg-orange-600 hover:bg-orange-500"} text-white font-bold py-5 rounded-full transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden`}
                        >
                            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.3em]">
                                {isSubmitting
                                    ? "Membuka WhatsApp..."
                                    : "Konfirmasi Reservasi"}
                            </span>
                            {!isSubmitting && (
                                <HiOutlineArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                            )}
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full py-10 flex flex-col items-center text-center space-y-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-8 relative"
                    >
                        <button
                            onClick={handleResetAndClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors p-2"
                        >
                            <HiX size={16} />
                        </button>
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                            <HiCheckCircle className="text-green-500 text-6xl" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold tracking-tight text-white">
                                Booking Terkirim!
                            </h3>
                            <p className="text-gray-400 text-sm max-w-[300px] mx-auto">
                                Pesanan untuk{" "}
                                <span className="text-orange-500 font-semibold">
                                    {formData.paket}
                                </span>{" "}
                                telah diproses.
                            </p>
                        </div>
                        <div className="flex flex-col w-full gap-3 pt-4">
                            <button
                                onClick={() => router.push("/")}
                                className="w-full bg-white text-black font-bold py-4 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] hover:bg-gray-200"
                            >
                                Kembali ke Beranda
                            </button>
                            <button
                                onClick={handleResetAndClose}
                                className="w-full bg-transparent border border-white/20 text-white font-bold py-4 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] hover:bg-white/10"
                            >
                                Buat Pesanan Baru
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormBooking;
