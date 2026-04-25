// DATA DESTINASI
export interface Destination {
    id: string;
    title: string;
    location: string;
    image: string;
    description: string;
    price: number;
}

export const DESTINATIONS: Destination[] = [
    {
        id: "bromo",
        title: "Bromo Mountain",
        location: "Jawa Timur, Indonesia",
        image: "/images/destinasi/bromo.jpeg",
        description:
            "Petualangan jeep menantang menuju kawah Bromo dan melihat matahari terbit terbaik di dunia.",
        price: 1500000,
    },
    {
        id: "tumpak-sewu",
        title: "Tumpak Sewu",
        location: "Lumajang, Jawa Timur, Indonesia",
        image: "/images/destinasi/tumpaksewu.jpeg",
        description:
            "Air Terjun Tumpak Sewu dikenal sebagai Niagara dari Indonesia dengan panorama megah dari tebing-tebing tinggi.",
        price: 850000,
    },
    {
        id: "kawah-ijen",
        title: "Kawah Ijen",
        location: "Banyuwangi, Jawa Timur, Indonesia",
        image: "/images/destinasi/kawah-ijen.jpeg",
        description:
            "Kawah Ijen terkenal dengan fenomena api biru (blue fire) dan danau asam berwarna toska yang memesona.",
        price: 3500000,
    },
    {
        id: "dieng",
        title: "Dieng",
        location: "Wonosobo, Jawa Tengah, Indonesia",
        image: "/images/destinasi/dieng.jpeg",
        description:
            "Dataran Tinggi Dieng menawarkan panorama pegunungan, kawah aktif, serta budaya khas masyarakat setempat.",
        price: 3500000,
    },
    {
        id: "merapi",
        title: "Merapi",
        location: "Yogyakarta, Indonesia",
        image: "/images/destinasi/merapi.jpeg",
        description:
            "Gunung Merapi merupakan gunung berapi paling aktif di Indonesia, terkenal dengan wisata jeep adventure dan pemandangan spektakuler.",
        price: 3500000,
    },
];

// DATA PAKET TOUR
export interface TourPackage {
    id: string;
    title: string;
    duration: string;
    price: number;
    image: string;
    description: string;
    includes: string[];
    itinerary: { day: number; activity: string }[];
}

export const TOUR_PACKAGES: TourPackage[] = [
    {
        id: "open-trip",
        title: "Open Trip Bromo & Tumpak Sewu",
        duration: "2 Hari 2 Malam",
        price: 499000,
        image: "/images/paket/open-trip.jpg",
        description:
            "Paket lengkap untuk keluarga besar termasuk villa dengan kolam renang pribadi dan transportasi bus.",
        includes: [
            "Transportasi Service",
            "Tol & Parkir",
            "Tiket Wisata",
            "Photo & Video Trip",
            "All File Media",
            "Guide Lokal",
            "Air Mineral",
            "P3K Standart",
            "Bahagia Bersama",
        ],
        itinerary: [
            { day: 1, activity: "Bromo" },
            {
                day: 2,
                activity: "Tumpak Sewu",
            },
        ],
    },
    {
        id: "jelejah-banyuwangi",
        title: "Jelajah Banyuwangi",
        duration: "2 Hari 1 Malam",
        price: 599000,
        image: "/images/paket/banyuwangi.jpeg",
        description:
            "Paket lengkap untuk keluarga besar termasuk villa dengan kolam renang pribadi dan transportasi bus.",
        includes: [
            "Hiace Premio",
            "Tiket Masuk Wisata",
            "Tol & Parkir",
            "Tour Leader",
            "Makan 2x (Sego Tempong Mbok Wah)",
            "Penginapan",
            "Dokumentasi",
            "Snack Box",
            "Free Gift",
        ],
        itinerary: [
            {
                day: 1,
                activity:
                    "Tour Savana Bekol TN. Baluran, Pantai Bama TN. Baluran, De D Jawatan",
            },
            {
                day: 2,
                activity:
                    "Tour Pantai Boom, pulau Merah, Oleh-oleh Osing Deles",
            },
        ],
    },
    {
        id: "jelejah-wonosobo",
        title: "Jelajah Wonosobo",
        duration: "2 Hari 1 Malam",
        price: 899000,
        image: "/images/paket/wonosobo.jpeg",
        description:
            "Paket lengkap untuk keluarga besar termasuk villa dengan kolam renang pribadi dan transportasi bus.",
        includes: [
            "Hiace Premio",
            "Tiket Masuk Wisata",
            "Tol & Parkir",
            "Tour Leader",
            "Makan 2x (Mie Ongklok)",
            "Penginapan",
            "Dokumentasi",
            "Snack Box",
            "Free Gift",
        ],
        itinerary: [
            {
                day: 1,
                activity:
                    "Tour Sikapuk Hilis / Taman Langit, Candi Air Juna, Kawah Sikidang, Batu Pandang Ratapan Angin",
            },
            {
                day: 2,
                activity:
                    "Tour Titik 0km Dieng, Titik 0km Banjarnegara, Bukit Sikunir",
            },
        ],
    },
    {
        id: "jelejah-jogja-standard",
        title: "Jelajah Jogja (Standard)",
        duration: "2 Hari 1 Malam",
        price: 549000,
        image: "/images/paket/jogja.jpg",
        description:
            "Paket lengkap untuk keluarga besar termasuk villa dengan kolam renang pribadi dan transportasi bus.",
        includes: [
            "Hiace Premio",
            "Tol & Parkir",
            "Tour Leader",
            "Penginapan",
            "Dokumentasi",
            "Air Mineral",
        ],
        itinerary: [
            {
                day: 1,
                activity:
                    "Tour Masjid Syeikh Zayed Surakarta, Haha Sky View, Hutan Pinus Mangunan",
            },
            {
                day: 2,
                activity:
                    "Tour Keraton Joga / Taman Sari, Malioboro, Bakpia Pathok 25",
            },
        ],
    },
    {
        id: "jelejah-jogja-premium",
        title: "Jelajah Jogja (Premium)",
        duration: "2 Hari 1 Malam",
        price: 799000,
        image: "/images/paket/jogja.jpg",
        description:
            "Paket lengkap untuk keluarga besar termasuk villa dengan kolam renang pribadi dan transportasi bus.",
        includes: [
            "Hiace Premio",
            "Tiket Masuk Wisata",
            "Tol & Parkir",
            "Tour Leader",
            "Makan 3x",
            "Penginapan",
            "Dokumentasi",
            "Snack Box",
            "Free Gift",
        ],
        itinerary: [
            {
                day: 1,
                activity:
                    "Tour Masjid Syeikh Zayed Surakarta, Haha Sky View / Obelix Sea, Hutan Pinus Mangunan",
            },
            {
                day: 2,
                activity:
                    "Tour Taman Sari + Keraton Joga, Malioboro, Bakpia Pathok 25",
            },
        ],
    },
];

// DATA GALLERY
export interface GalleryItem {
    id: string;
    type: "image" | "video";
    src: string;
    thumbnail?: string; // Opsional untuk video
    title: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "g1",
        type: "image",
        src: "/images/gallery/galeri1.jpg",
        title: "Keindahan Pantai Bali",
    },
    {
        id: "g2",
        type: "image",
        src: "/images/gallery/galeri2.jpg",
        title: "Sunset di Uluwatu",
    },
    {
        id: "g3",
        type: "image",
        src: "/images/gallery/galeri3.jpg",
        title: "Perjalanan Bromo",
    },
    {
        id: "g4",
        type: "image",
        src: "/images/gallery/galeri4.jpg",
        title: "Pemandangan Pegunungan",
    },
    {
        id: "g5",
        type: "image",
        src: "/images/gallery/galeri5.jpg",
        title: "Villa Eksklusif",
    },
    {
        id: "g6",
        type: "image",
        src: "/images/gallery/galeri6.jpg",
        title: "Villa Eksklusif",
    },
    {
        id: "v1",
        type: "video",
        src: "/images/gallery/video1.mp4",
        title: "Villa Eksklusif",
    },
    {
        id: "v2",
        type: "video",
        src: "/images/gallery/video2.mp4",
        title: "Villa Eksklusif",
    },
    {
        id: "v3",
        type: "video",
        src: "/images/gallery/video3.mp4",
        title: "Villa Eksklusif",
    },
    {
        id: "v4",
        type: "video",
        src: "/images/gallery/video4.mp4",
        title: "Villa Eksklusif",
    },
    {
        id: "v5",
        type: "video",
        src: "/images/gallery/video5.mp4",
        title: "Villa Eksklusif",
    },
];
