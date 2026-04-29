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
    minPax: number;
    image: string;
    description: string;
    includes: string[];
    exclude: string[];
    destinations: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
    {
        id: "open-trip",
        title: "Open Trip Bromo & Tumpak Sewu",
        duration: "2 Hari 2 Malam",
        price: 499000,
        minPax: 13,
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
        ],
        exclude: ["Keperluan Pribadi di luar fasilitas"],
        destinations: ["Gunung Bromo", "Air Terjun Tumpak Sewu"],
    },
    {
        id: "jelejah-wonosobo",
        title: "Ayo Jelajahi Wonosobo",
        duration: "2 Hari 1 Malam",
        price: 899000,
        minPax: 13,
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
        exclude: ["Keperluan Pribadi di luar fasilitas"],
        destinations: [
            "Sikapuk Hills/Taman Langit",
            "Candi Arjuna",
            "Kawah Sikidang",
            "Batu Pandang Ratapan Angin",
            "Titik 0Km Dieng",
            "Titik 0Km Banjarnegara",
            "Bukit Sikunir",
        ],
    },
    {
        id: "jelejah-banyuwangi",
        title: "Ayo Jelajahi Banyuwangi",
        duration: "2 Hari 1 Malam",
        price: 599000,
        minPax: 13,
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
        exclude: ["Keperluan Pribadi di luar fasilitas"],
        destinations: [
            "Savana Bekol TN. Baluran",
            "Pantai Bama TN. Baluran",
            "De Djawatan",
            "Pantai Boom",
            "Pulau Merah",
            "Oleh-oleh Osing Deles",
        ],
    },
    {
        id: "jelejah-jogja-standard",
        title: "Ayo Jelajahi Jogja (Standard)",
        duration: "2 Hari 1 Malam",
        price: 549000,
        minPax: 13,
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
        exclude: ["Keperluan Pribadi di luar fasilitas"],
        destinations: [
            "Masjid Syeikh Zayed Solo",
            "HeHa Sky View",
            "Hutan Pinus Mangunan",
            "Keraton Jogja/Taman Sari",
            "Malioboro",
            "Bakpia Pathok 25",
        ],
    },
    {
        id: "jelejah-jogja-premium",
        title: "Ayo Jelajahi Jogja (Premium)",
        duration: "2 Hari 1 Malam",
        price: 799000,
        minPax: 13,
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
        exclude: ["Keperluan Pribadi di luar fasilitas"],
        destinations: [
            "Masjid Syeikh Zayed Surakarta",
            "HeHa Sky View/Obelix Sea View",
            "Hutan Pinus Mangunan",
            "Taman Sari + Keraton Jogja",
            "Malioboro",
            "Bakpia Pathok 25",
        ],
    },
    {
        id: "open-trip-dieng-wonosobo",
        title: "Open Trip Dieng Wonosobo",
        duration: "2 Hari 1 Malam",
        price: 500000,
        minPax: 18,
        image: "/images/paket/open-trip-dieng-wonosobo.jpeg",
        description:
            "Jelajahi keindahan 'Negeri di Atas Awan' secara ekonomis. Cocok untuk solo traveler yang ingin menikmati Golden Sunrise Sikunir dan kawah Dieng tanpa harus sewa satu mobil.",
        includes: [
            "New Giga Euro 20 seat",
            "Penginapan 1 Malam di Dieng",
            "Tour Leader",
            "Air Mineral",
        ],
        exclude: [
            "Tiket Masuk Destinasi (HTM)",
            "Keperluan Pribadi di luar fasilitas",
        ],
        destinations: [
            "Bukit Sikunir",
            "Kawah Sikidang",
            "Candi Arjuna",
            "Taman Langit",
            "Sikapuk Hill",
            "Titik Nol Dieng",
            "Oleh-oleh Khas Dieng",
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
    includes: string[]; // Properti baru
    description: string;
    fullDescription: string;
    gallery: { type: "image" | "video"; src: string }[];
}

export const TRANSPORTS: Transport[] = [
    {
        id: "hiace-premio-luxury",
        name: "Hiace Premio Luxury",
        capacity: "8 Seat",
        price: "2.500.000",
        image: "/images/transport/hiace-premio-luxury.jpeg",
        description:
            "Kabin VIP eksklusif dengan Captain Seat untuk pengalaman perjalanan First Class yang tak terlupakan.",
        fullDescription:
            "Hiace Premio Luxury 8 Seat adalah kasta tertinggi dalam layanan transportasi kami. Dirancang khusus untuk privasi dan kenyamanan maksimal, unit ini dilengkapi dengan kursi mewah (Captain Seat) yang memiliki fitur recline dan leg rest. Interior yang telah dimodifikasi dengan aksen elegan dan ambient lighting menciptakan suasana lounge berjalan, menjadikannya pilihan sempurna bagi delegasi bisnis, tamu VVIP, atau keluarga yang menginginkan privasi mutlak.",
        features: [
            "Luxury Captain Seat",
            "Leg Rest & Reclining",
            "Android TV & Premium Audio",
            "Ambient Mood Lighting",
            "USB Port di Setiap Kursi",
            "Cool Box / Air Mineral",
            "Tissue & Sanitizer",
            "Full AC",
            "Full Karaoke",
        ],
        includes: [
            "Unit Mobil Luxury",
            "Driver Profesional",
            "Bahan Bakar (BBM)",
            "Biaya Tol",
        ],
        gallery: [
            {
                type: "image",
                src: "/images/transport/gallery/hiace-premio-luxury1.jpeg",
            },
            {
                type: "image",
                src: "/images/transport/gallery/hiace-premio-luxury2.jpeg",
            },
            {
                type: "image",
                src: "/images/transport/gallery/hiace-premio-luxury3.jpeg",
            },
            {
                type: "video",
                src: "/images/transport/gallery/hiace-premio-luxury.mp4",
            },
            {
                type: "video",
                src: "/images/transport/gallery/hiace-premio-luxury2.mp4",
            },
        ],
    },
    {
        id: "hiace-premio",
        name: "Hiace Premio",
        capacity: "14 Seat",
        price: "1.800.000",
        image: "/images/transport/hiace-premio.jpg",
        description:
            "Definisi kemewahan dalam perjalanan grup. Dengan desain modern dan suspensi yang sangat lembut.",
        fullDescription:
            "Toyota Hiace Premio adalah pilihan utama bagi mereka yang mengutamakan kenyamanan dan gengsi. Dengan kabin yang lebih luas dibanding generasi sebelumnya, armada ini menawarkan atmosfer VIP dengan fitur keselamatan mutakhir.",
        features: ["Full AC", "Full Karaoke", "Air Mineral", "Tissue"],
        includes: [
            "Unit Mobil",
            "Driver Profesional",
            "Bahan Bakar (BBM)",
            "Biaya Tol",
        ],
        gallery: [
            {
                type: "video",
                src: "/images/transport/gallery/hiace-premio.mp4",
            },
        ],
    },
    {
        id: "hiace-commuter",
        name: "Hiace Commuter",
        capacity: "14 Seat",
        price: "1.500.000",
        image: "/images/transport/hiace-commuter.jpg",
        description:
            "Partner setia perjalanan wisata keluarga yang telah teruji kenyamanannya.",
        fullDescription:
            "Dikenal sebagai legenda di kelas microbus, Hiace Commuter tetap menjadi favorit karena keandalannya. Konfigurasi kursi yang ergonomis memastikan setiap penumpang merasa rileks.",
        features: ["Full AC", "Full Karaoke", "Air Mineral", "Tissue"],
        includes: [
            "Unit Mobil",
            "Driver Profesional",
            "Bahan Bakar (BBM)",
            "Biaya Tol",
        ],
        gallery: [
            {
                type: "video",
                src: "/images/transport/gallery/hiace-commuter.mp4",
            },
        ],
    },
    {
        id: "inova-reborn",
        name: "Innova Reborn",
        capacity: "5-8 Seat",
        price: "1.200.000",
        image: "/images/transport/inova-reborn.jpg",
        description:
            "Kendaraan MPV paling prestisius untuk perjalanan keluarga kecil atau tamu penting.",
        fullDescription:
            "Toyota Innova Reborn memberikan sensasi berkendara mobil pribadi yang mewah. Menjadi standar emas untuk layanan jemputan bandara maupun city tour privat.",
        features: ["Full AC", "Full Karaoke", "Air Mineral", "Tissue"],
        includes: [
            "Unit Mobil",
            "Driver Profesional",
            "Bahan Bakar (BBM)",
            "Biaya Tol",
        ],
        gallery: [
            {
                type: "video",
                src: "/images/transport/gallery/innova-reborn.mp4",
            },
        ],
    },
    {
        id: "elf-giga",
        name: "Elf Giga",
        capacity: "18 Seat",
        price: "1.600.000",
        image: "/images/transport/elf-giga.jpg",
        description:
            "Microbus generasi terbaru dengan performa mesin tangguh dan kapasitas maksimal.",
        fullDescription:
            "Isuzu Elf Giga merupakan standar baru dalam kategori microbus pariwisata. Menggunakan mesin Euro 4 yang ramah lingkungan dan bertenaga, sangat andal untuk medan menanjak.",
        features: ["Full AC", "Full Karaoke", "Air Mineral", "Tissue"],
        includes: [
            "Unit Mobil",
            "Driver Profesional",
            "Bahan Bakar (BBM)",
            "Biaya Tol",
        ],
        gallery: [
            { type: "video", src: "/images/transport/gallery/elf-giga1.mp4" },
            { type: "video", src: "/images/transport/gallery/elf-giga2.mp4" },
        ],
    },
    {
        id: "paket-preweding",
        name: "Paket Prewedding",
        capacity: "Service",
        price: "Custom",
        image: "/images/transport/paket-preweding.jpeg",
        description:
            "Layanan transportasi khusus sesi foto prewedding dengan properti dan driver standby.",
        fullDescription:
            "Momen prewedding Anda membutuhkan dukungan logistik yang fleksibel. Kami menyediakan unit yang telah dikondisikan untuk kebutuhan ganti kostum dan penyimpanan properti.",
        features: ["Full AC", "Air Mineral", "Tissue", "Space Properti"],
        includes: [
            "Unit Mobil",
            "Driver Standby 12 Jam",
            "BBM & Parkir",
            "Spot Foto Assistance",
        ],
        gallery: [
            {
                type: "video",
                src: "/images/transport/gallery/paket-preweding.mp4",
            },
            {
                type: "image",
                src: "/images/transport/gallery/paket-preweding.jpeg",
            },
        ],
    },
];

// DATA GALLERY
export interface GalleryItem {
    id: string;
    type: "image" | "video";
    src: string;
    thumbnail?: string;
    title: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "g1",
        type: "image",
        src: "/images/gallery/galeri1.jpg",
        title: "Lavatour Semeru",
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
        title: "Dreamland",
    },
    {
        id: "g5",
        type: "image",
        src: "/images/gallery/galeri5.jpg",
        title: "Tour Bromo",
    },
    {
        id: "g6",
        type: "image",
        src: "/images/gallery/galeri6.jpg",
        title: "Tour Kawah Ijen",
    },
    {
        id: "g7",
        type: "image",
        src: "/images/gallery/galeri7.jpg",
        title: "Pantai Pandawa Bali",
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
        title: "Taman Langit Dieng",
    },
    {
        id: "v5",
        type: "video",
        src: "/images/gallery/video5.mp4",
        title: "Jeep Tour Coban Talun, Batu",
    },
    {
        id: "v6",
        type: "video",
        src: "/images/gallery/video6.mp4",
        title: "Nusa Penida Bali",
    },
    {
        id: "v7",
        type: "video",
        src: "/images/gallery/video7.mp4",
        title: "Lavatour Semeru",
    },
];
