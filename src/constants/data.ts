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
            "Eksplorasi dua ikon alam Jawa Timur dalam satu perjalanan. Nikmati magisnya sunrise di Bromo dan kemegahan air terjun seribu aliran, Tumpak Sewu, dengan layanan dokumentasi profesional.",
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
            { day: 1, activity: "Eksplorasi Kawasan Kawah Bromo & Penanjakan" },
            { day: 2, activity: "Petualangan Trekking Air Terjun Tumpak Sewu" },
        ],
    },
    {
        id: "jelejah-wonosobo",
        title: "Jelajah Wonosobo",
        duration: "2 Hari 1 Malam",
        price: 899000,
        image: "/images/paket/wonosobo.jpeg",
        description:
            "Menembus awan di Negeri Dieng. Perjalanan eksklusif menyusuri kawah vulkanik, candi bersejarah, hingga golden sunrise di Bukit Sikunir dengan kenyamanan armada Hiace Premio.",
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
                    "Sikapuk Hills, Candi Arjuna, Kawah Sikidang, & Batu Pandang Ratapan Angin",
            },
            {
                day: 2,
                activity:
                    "Golden Sunrise Bukit Sikunir & Eksplorasi Titik 0km Dieng",
            },
        ],
    },
    {
        id: "jelejah-banyuwangi",
        title: "Jelajah Banyuwangi",
        duration: "2 Hari 1 Malam",
        price: 599000,
        image: "/images/paket/jelajah-banyuwangi.jpeg",
        description:
            "Rasakan sensasi 'Africa van Java' di Baluran dan magisnya hutan De Djawatan. Destinasi impian bagi pecinta fotografi alam yang menginginkan perpaduan savana dan pantai.",
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
                    "Savana Bekol & Pantai Bama TN. Baluran, serta Hutan De Djawatan",
            },
            {
                day: 2,
                activity:
                    "Pantai Boom, Pulau Merah, & Wisata Belanja Osing Deles",
            },
        ],
    },
    {
        id: "jelejah-jogja-standard",
        title: "Jelajah Jogja (Standard)",
        duration: "2 Hari 1 Malam",
        price: 549000,
        image: "/images/paket/jogja-standard.jpeg",
        description:
            "Nikmati kehangatan kota budaya melalui destinasi ikonik. Dari kemegahan arsitektur Sheikh Zayed hingga romantisnya Malioboro, dikemas dengan budget yang tetap bersahabat.",
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
                    "Masjid Syeikh Zayed Solo, HeHa Sky View, & Hutan Pinus Mangunan",
            },
            {
                day: 2,
                activity:
                    "Taman Sari, Keraton Yogyakarta, & City Tour Malioboro",
            },
        ],
    },
    {
        id: "jelejah-jogja-premium",
        title: "Jelajah Jogja (Premium)",
        duration: "2 Hari 1 Malam",
        price: 799000,
        image: "/images/paket/jogja-premium.jpeg",
        description:
            "Upgrade pengalaman liburan Anda di Yogyakarta. Fasilitas lengkap termasuk tiket wisata, makan yang terjamin, serta pilihan destinasi premium seperti Obelix Sea View.",
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
                    "Masjid Syeikh Zayed, HeHa Sky View / Obelix Sea, & Pinus Mangunan",
            },
            {
                day: 2,
                activity:
                    "Taman Sari Premium Tour, Keraton, Malioboro, & Belanja Bakpia",
            },
        ],
    },
];

// DATA TRANSPORT
export interface Transport {
    id: string;
    name: string;
    capacity: string;
    price: string;
    image: string;
    features: string[];
    description: string;
}

export const TRANSPORTS: Transport[] = [
    {
        id: "hiace-premio",
        name: "Toyota Hiace Premio",
        capacity: "14 Seat",
        price: "1.000.000",
        image: "/images/transport/hiace-premio.jpg",
        description:
            "Definisi kemewahan dalam perjalanan grup. Dengan desain modern dan suspensi yang sangat lembut, Premio memberikan pengalaman berkendara kelas VIP.",
        features: [
            "Executive Design",
            "Full AC Double Blower",
            "Audio & Karaoke System",
            "Reclining Luxury Seat",
            "USB Charger Port",
            "Driver Profesional",
        ],
    },
    {
        id: "hiace-commuter",
        name: "Toyota Hiace Commuter",
        capacity: "14 Seat",
        price: "700.000",
        image: "/images/transport/hiace-commuter.jpg",
        description:
            "Partner setia perjalanan wisata keluarga. Hiace Commuter menawarkan kabin yang luas dan kenyamanan yang sudah teruji untuk perjalanan jarak jauh.",
        features: [
            "Kabin Luas & Ergonomis",
            "Full AC",
            "Audio Entertainment",
            "Reclining Seat",
            "Air Mineral",
            "Driver Profesional",
        ],
    },
    {
        id: "big-bus",
        name: "Big Bus",
        capacity: "50 Seat",
        price: "2.000.000",
        image: "/images/transport/big-bus.jpg",
        description:
            "Solusi transportasi kapasitas besar untuk korporat atau study tour. Dilengkapi fasilitas hiburan lengkap untuk memastikan rombongan tidak bosan di perjalanan.",
        features: [
            "Kapasitas Maksimal",
            "Full AC",
            "LED TV & Karaoke",
            "Cool Box",
            "Bagasi Sangat Luas",
            "Driver & Helper",
        ],
    },
    {
        id: "bus-medium",
        name: "Medium Bus",
        capacity: "30 Seat",
        price: "1.000.000",
        image: "/images/transport/bus-medium.jpg",
        description:
            "Keseimbangan antara kapasitas dan fleksibilitas. Medium Bus mampu menjangkau destinasi dengan akses jalan yang lebih terbatas dibanding Big Bus.",
        features: [
            "Desain Compact",
            "Full AC",
            "TV & Audio System",
            "Reclining Seat",
            "Bagasi Luas",
            "Driver & Helper",
        ],
    },
    {
        id: "elf-giga",
        name: "Elf Giga",
        capacity: "18-20 Seat",
        price: "700.000",
        image: "/images/transport/elf-giga.jpg",
        description:
            "Generasi terbaru dari Isuzu Elf dengan performa mesin tangguh dan kapasitas penumpang yang maksimal untuk kategori microbus.",
        features: [
            "Mesin Euro 4 Bertenaga",
            "Full AC",
            "Entertainment System",
            "Kabin Modern",
            "Bagasi Belakang",
            "Driver Profesional",
        ],
    },
    {
        id: "elf-long",
        name: "Elf Long",
        capacity: "18-20 Seat",
        price: "600.000",
        image: "/images/transport/elf-long.jpg",
        description:
            "Pilihan ekonomis untuk rombongan hingga 20 orang. Dimensi yang panjang memastikan setiap penumpang mendapatkan ruang kaki yang cukup.",
        features: [
            "Kapasitas 19 Penumpang",
            "Full AC",
            "Audio Player",
            "Reclining Seat",
            "Hemat Bahan Bakar",
            "Driver Profesional",
        ],
    },
    {
        id: "elf-short",
        name: "Elf Short",
        capacity: "12-15 Seat",
        price: "500.000",
        image: "/images/transport/elf-short.jpg",
        description:
            "Microbus lincah untuk rute perkotaan maupun pegunungan. Sangat cocok untuk grup kecil yang menginginkan kendaraan yang gesit di jalanan sempit.",
        features: [
            "Lincah & Gesit",
            "Full AC",
            "Audio System",
            "Reclining Seat",
            "Air Mineral",
            "Driver Profesional",
        ],
    },
    {
        id: "inova-reborn",
        name: "Innova Reborn",
        capacity: "6-7 Seat",
        price: "500.000",
        image: "/images/transport/inova-reborn.jpg",
        description:
            "Kendaraan MPV paling prestisius di kelasnya. Memberikan kenyamanan layaknya mobil pribadi untuk perjalanan keluarga kecil atau tamu penting.",
        features: [
            "Interior Premium",
            "Full AC Plasma Cluster",
            "Entertainment Head Unit",
            "Captain Seat (Opsional)",
            "Kabin Sangat Senyap",
            "Driver Ramah & Rapi",
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
        title: "Tour Bromo",
    },
    {
        id: "g3",
        type: "image",
        src: "/images/gallery/galeri3.jpg",
        title: "Perjalanan Bali",
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
        title: "Tour Kawah Ijen",
    },
    {
        id: "v1",
        type: "video",
        src: "/images/gallery/video1.mp4",
        title: "Taman Langit Dieng",
    },
    {
        id: "v2",
        type: "video",
        src: "/images/gallery/video2.mp4",
        title: "Taman Langit Dieng",
    },
    {
        id: "v3",
        type: "video",
        src: "/images/gallery/video3.mp4",
        title: "Taman Langit Dieng",
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
