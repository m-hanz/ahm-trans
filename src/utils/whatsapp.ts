// Definisi tipe data untuk Booking
interface BookingData {
    type: "BOOKING";
    nama: string;
    whatsapp: string;
    paket: string;
    tanggal: string;
    jumlahOrang: string;
}

// Definisi tipe data untuk Tanya-tanya (Contact Page)
interface InquiryData {
    type: "INQUIRY";
    nama: string;
    pesan: string;
}

export const sendWhatsAppMessage = (data: BookingData | InquiryData) => {
    const phoneNumber = "6285607027172";
    let text = "";

    if (data.type === "BOOKING") {
        // Format Pesan untuk Reservasi Paket
        text = `Halo Admin AHM Trans, saya ingin memesan paket wisata:

*Nama:* ${data.nama}
*WhatsApp:* ${data.whatsapp}
*Paket/Destinasi:* ${data.paket}
*Tanggal:* ${data.tanggal}
*Jumlah Orang:* ${data.jumlahOrang} orang

Mohon info ketersediaan dan langkah selanjutnya. Terima kasih!`;
    } else {
        // Format Pesan untuk Tanya Umum (Halaman Contact)
        text = `Halo Admin AHM Trans, saya ingin bertanya:

*Nama:* ${data.nama}
*Pesan:* ${data.pesan}

Mohon informasinya. Terima kasih!`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
};
