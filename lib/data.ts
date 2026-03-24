export interface GalleryImage {
    src: string;
    /** CSS object-position — defaults to "top" in the component */
    position?: string;
    /** "v" for vertical/portrait, "h" for horizontal/landscape — drives layout */
    orientation: "v" | "h";
    /** Optional section title — renders a divider above this image */
    sectionTitle?: string;
    /** CSS scale transform — e.g. 1.35 to zoom in 35% */
    scale?: number;
    /** Show vertical image at full width without cropping */
    fullWidth?: boolean;
}

export interface Project {
    id: number;
    title: string;
    client: string;
    year: string;
    category: string;
    location: string;
    image: string;
    /** Optional separate image for landing page grid — falls back to `image` */
    landingImage?: string;
    /** CSS object-position for landing page image — falls back to heroPosition */
    landingPosition?: string;
    /** CSS object-position for hero image on landing page — defaults to "center" */
    heroPosition?: string;
    slug: string;
    description: string;
    tags: string[];
    /** Dominant color swatches from the mural — 5 hex values */
    colors?: string[];
    gallery: GalleryImage[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Converse",
        client: "Converse",
        year: "2021 — 2023",
        category: "Brand Activation",
        location: "Toronto, Canada",
        image: "/work/converse.jpg",
        slug: "converse",
        description:
            "Two fun and unique projects produced with our friends at Kadence World. A skateable ledge was built and installed below the artwork. Projects like this open up new opportunities for engagement and give the work a life beyond the wall.",
        tags: ["Brand Activation", "Street Art", "Portraiture", "Large-Scale"],
        colors: ["#E8621E", "#D94B7A", "#1A1A1A", "#F5C6A0", "#FFFFFF"],
        gallery: [
            // ── Converse Go Skate Day ──
            { src: "/work/converse.jpg", orientation: "h", sectionTitle: "Converse Go Skate Day" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/2020_0901_00552400.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/2020_0901_00550800.jpg", position: "center", orientation: "v" },
            // ── Kaytranada × Converse ──
            { src: "/work/WEBSITE PHOTOS/CONVERSE/DSC04025 copy.jpg", orientation: "h", sectionTitle: "Kaytranada × Converse — Ossington Ave" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/CONVERSE HERO 1.jpeg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/KAYTRANADA LIFT ACTION 2.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/DSCF1112_copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/KAYTRANADA OSSINGTON REALISM CLOSE UP.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/KAYTRANADA LIFT ACTION.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/CLOSE UP SRPAY PAINTING .jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/CONVERSE/CLOSE UP PAINTING LIFESTYLE BRUSH.jpg", position: "center", orientation: "v" },
        ],
    },
    {
        id: 2,
        title: "Spotify",
        client: "Spotify",
        year: "2023",
        category: "Brand Activation",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/SPOTIFY/SPOTIFY ACTION LIFESTYLE.jpg",
        heroPosition: "center 40%",
        slug: "spotify",
        description:
            "This project really challenged us. 14 realistic portraits of musicians in 10 days. Our team rose to it and executed to the highest quality. Weather wasn't on our side, but we always make it happen. We don't really know how to not deliver.",
        tags: ["Brand Activation", "Music", "Toronto", "Portraiture"],
        colors: ["#1DB954", "#E8328A", "#F5D442", "#191414", "#8B5E3C"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/SPOTIFY/page-06.jpg", position: "center 35%", orientation: "h", scale: 1.35 },
            { src: "/work/WEBSITE PHOTOS/SPOTIFY/DSC09545.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/SPOTIFY/DSCF1154.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/SPOTIFY/DSCF1193.jpg", position: "center", orientation: "v" },
        ],
    },
    {
        id: 3,
        title: "Adidas Originals",
        client: "Adidas",
        year: "2023",
        category: "Brand Activation",
        location: "Queen West, Toronto",
        image: "/work/adidas.jpg",
        slug: "adidas-originals",
        description:
            "A heartfelt campaign featuring a painterly portrait of Kyle Lowry. This one meant a lot. Painting a hometown hero on a Toronto wall hits different. The style leaned more fine art than street, and we were into it.",
        tags: ["Adidas", "Brand Activation", "Sport", "Portraiture"],
        colors: ["#1A1A1A", "#FFFFFF", "#C8A96E", "#4A7C59", "#8BC34A"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/ADIDAS/case-adidas-wall-029.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ADIDAS/IMG_1631.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ADIDAS/lifestyle-brush.jpg", orientation: "h" },
        ],
    },
    {
        id: 4,
        title: "The Moxy Hotel",
        client: "Moxy Hotels",
        year: "2021",
        category: "Spatial Design",
        location: "Los Angeles / Toronto",
        image: "/work/mural-1.jpg",
        slug: "moxy-hotel",
        description:
            "One of our most ambitious projects to date. Painting in downtown LA poses its own set of challenges, let alone painting a monumental mural on a building this size. 100 gallons of paint, completed in 30 days. The team lived on the lift for a month and loved every minute of it.",
        tags: ["Hotel", "Interior", "Spatial Design", "Multi-Surface"],
        colors: ["#5BC1D9", "#FFFFFF", "#2C2C2C", "#B8B8B8", "#7ECFD6"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/MOXY HOTEL/DJI_0391-HDR.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/MOXY HOTEL/MOXY HOTEL ACTION RUDJER SUNNY.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/MOXY HOTEL/PXL_20221017_000537634.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/MOXY HOTEL/photo-craft-shot-113.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/MOXY HOTEL/DSCF6630 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/MOXY HOTEL/MOXY HOTEL ACTION NIGHT.jpg", position: "center", orientation: "v" },
        ],
    },
    {
        id: 5,
        title: "Rollerpony",
        client: "Independent",
        year: "2022",
        category: "Street Art",
        location: "Toronto, Canada",
        image: "/work/mural-3.JPG",
        slug: "rollerpony",
        description:
            "Nothing is impossible. Imagine the most detailed design you've ever seen, now paint it as big as possible on the floor. That's exactly what our team did for an indoor roller rink in winter 2022. 28,000 sq. ft., completed in 8 weeks.",
        tags: ["Community", "Street Art", "Toronto", "Independent"],
        colors: ["#E8222E", "#FF6B35", "#4B2D8E", "#F7E74A", "#FF69B4"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/photo-craft-shot-051.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/ROLLER PONY PORTRAIT.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/DSC09159 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/ROLLERPONY SKETCHING START.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/DSCF8173 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/DSC09196 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/ROLLERPONY FLOOR PROGRESS.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ROLLERPONY/ROLLERPONY FINISH HIGH.jpg", orientation: "h" },
        ],
    },
    {
        id: 6,
        title: "Enwave",
        client: "Enwave Energy",
        year: "2022",
        category: "Large-Scale Mural",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/ENWAVE/ENWAVE HERO 2.jpg",
        slug: "enwave",
        description:
            "One of our flagship downtown Toronto murals. This wall demanded precision at a scale where every decision is visible from blocks away. The kind of project where preparation matters just as much as paint.",
        tags: ["Large-Scale", "Building Mural", "Toronto", "Landmark"],
        colors: ["#2E6DB4", "#E8872E", "#1A3A5C", "#4A90C4", "#D4A05A"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/ENWAVE/case-enwave-wall-107.jpeg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ENWAVE/DSCF5042_copy.jpg", position: "center", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ENWAVE/ENWAVE CLOSE UP BRUSH HERO.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ENWAVE/DJI_0397.JPG", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ENWAVE/ENWAVE ACTION JASON.jpg", orientation: "h" },
        ],
    },
    {
        id: 14,
        title: "Google",
        client: "Google",
        year: "2024",
        category: "Brand Mural",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/GOOGLE/GOOGLE SWINGSTAGE ASTRAL.jpg",
        heroPosition: "center 40%",
        slug: "google",
        description:
            "A photorealistic rendering in the heart of downtown Toronto. Every project is unique, and our team improvises and adapts to the challenges of each surface. This one had us on swing stages for weeks, working through fall weather to get the detail right.",
        tags: ["Brand Mural", "Large-Scale", "Toronto", "Building"],
        colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#A8D8F0"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/GOOGLE/GOOGLE SWINGSTAGE ASTRAL.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/GOOGLE/DSC04149-2.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/GOOGLE/DSC03461.JPG", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/GOOGLE/GOOGLE TEAMWORK.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/GOOGLE/DSC04144.JPG", position: "center", orientation: "v", fullWidth: true },
        ],
    },
    {
        id: 7,
        title: "Sapporo",
        client: "Sapporo Beer",
        year: "2023",
        category: "Brand Mural",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/SAPPORO/SAPPORO ACTION 3.jpg",
        heroPosition: "center 60%",
        slug: "sapporo",
        description:
            "A newly renovated bar wanted some attention, so we gave them an enticing beer ad. We created a real-life thirst trap. Bold type, clean lines, and a colour palette that makes you want to grab a cold one.",
        tags: ["Brand Mural", "Typography", "Toronto", "Large-Scale"],
        colors: ["#D4A017", "#1A1A1A", "#C0C0C0", "#8B7D3C", "#FFFFFF"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/SAPPORO/SAPPORO NIGHT ACTION.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/SAPPORO/SAPPORO MOODY STORM ACTION.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/SAPPORO/SAPPORO TEAMWORK.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/SAPPORO/SAPPORO CLOSE UP ACTION.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/SAPPORO/SAPPORO ACTION 3.jpg", position: "center", orientation: "v" },
        ],
    },
    {
        id: 8,
        title: "Hershey's",
        client: "Hershey's",
        year: "2024",
        category: "Community Mural",
        location: "Nova Scotia, Canada",
        image: "/work/WEBSITE PHOTOS/REESE'S/REESE'S HERO DRONE.jpg",
        slug: "reeses",
        description:
            "A community-based mural project involving two full basketball courts. One in Sydney, Nova Scotia, the other in Saint John, New Brunswick. Both were designed to be seen from above and played on every day. Function and art in the same surface.",
        tags: ["Court Mural", "Community", "Brand", "Aerial"],
        colors: ["#E8721E", "#F5A623", "#6B3A1F", "#F7D94A", "#8B4513"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/REESE'S/HERSHEYS .jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/REESE'S/REESE'S HERO DRONE.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/REESE'S/adidas.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/REESE'S/REESES BASKETBALL COURT NOVA SCOTIA.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/REESE'S/2024-06-01_13-06-41_000.jpeg", orientation: "h" },
        ],
    },
    {
        id: 9,
        title: "Astro",
        client: "Independent",
        year: "2023",
        category: "Rooftop Mural",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/ASTRO/Lactalis_Canada_Astro_Yogurt_is_Literally_Shouting_from_the_Roof (1).jpg",
        landingImage: "/work/WEBSITE PHOTOS/ASTRO/photo-craft-shot-111.jpg",
        landingPosition: "center 35%",
        heroPosition: "center bottom",
        slug: "astro",
        description:
            "Unconventional murals require unconventional approaches. Paint applied directly to aggregate, meant to be viewed from the flight path of Pearson Airport. Not every studio would take this on, but we're not every studio.",
        tags: ["Rooftop", "Street Art", "Toronto", "Independent"],
        colors: ["#D42B2B", "#FFFFFF", "#5EB1E0", "#C8C8C8", "#2E8B57"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/ASTRO/Lactalis_Canada_Astro_Yogurt_is_Literally_Shouting_from_the_Roof.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/ASTRO/DSCF1927 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASTRO/DSCF1938 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASTRO/photo-craft-shot-111.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASTRO/ASTRO ROOF ACTION SKETCHING.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASTRO/ASTRO ROOF SKETCH.jpg", orientation: "h" },
        ],
    },
    {
        id: 10,
        title: "Hangar Jam",
        client: "Independent",
        year: "2023",
        category: "Live Painting",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/HANGAR JAM/HANGAR JAM HERO JARUS.jpg",
        slug: "hangar-jam",
        description:
            "A one-weekend live street art festival curated by our team for Northcrest Developers. The festival acted as an activation of the future development site. A massive aircraft hangar turned into a canvas for some of the best artists in North America.",
        tags: ["Live Painting", "Event", "Collaboration", "Toronto"],
        colors: ["#D4A06A", "#FFFFFF", "#8B6F47", "#C9B89E", "#3D3D3D"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/HANGAR JAM HERO JARUS.jpg", position: "center", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/DSCF8108 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/lauren1.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/DSCF8174 copy.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/DSCF7695 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/DSCF7926 copy.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/HANGAR JAM/DSCF9950 copy.jpg", orientation: "h" },
        ],
    },
    {
        id: 11,
        title: "Asahi",
        client: "Asahi Beer",
        year: "2023",
        category: "Brand Mural",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/ASAHI/ASAHI ACTION.jpg",
        heroPosition: "center 25%",
        slug: "asahi",
        description:
            "A mural that really fit the wall and the neighbourhood, painted on the patio of Leslieville's beloved Betty's Bar. Sometimes the best projects are the ones where everything just clicks. The brand, the spot, the cold beer.",
        tags: ["Brand Mural", "Large-Scale", "Toronto", "Beer"],
        colors: ["#7A7A7A", "#D4A831", "#C41E1E", "#FFFFFF", "#1A1A1A"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/ASAHI/ASAHI ACTION.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASAHI/PXL_20220803_014930560.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASAHI/PXL_20220811_155600218.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/ASAHI/ASAHI HERO.webp", position: "center", orientation: "v" },
        ],
    },
    {
        id: 12,
        title: "Madri",
        client: "Madri Excepcional",
        year: "2024",
        category: "Brand Mural",
        location: "Toronto, Canada",
        image: "/work/WEBSITE PHOTOS/MADRI/MADRI HERO .jpg",
        landingImage: "/work/WEBSITE PHOTOS/MADRI/MADRIC ACTION RIGHT.jpg",
        landingPosition: "center 30%",
        heroPosition: "center 45%",
        slug: "madri",
        description:
            "Masters of our craft, we bring quality to all of our projects. Cheers to the craft. 🍻",
        tags: ["Brand Mural", "Large-Scale", "Toronto", "Beer"],
        colors: ["#C83C23", "#D4901E", "#FFFFFF", "#1A1A1A", "#F5D4A0"],
        gallery: [
            { src: "/work/WEBSITE PHOTOS/MADRI/MADRI HERO .jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/MADRI/MADRIC ACTION RIGHT.jpg", position: "center", orientation: "v" },
            { src: "/work/WEBSITE PHOTOS/MADRI/DSCF2302 copy.jpg", orientation: "h" },
        ],
    },
    {
        id: 13,
        title: "Six Flags",
        client: "Six Flags",
        year: "2022",
        category: "Large-Scale Installation",
        location: "Mexico City, Mexico",
        image: "/work/WEBSITE PHOTOS/SIX FLAGS/CALIFORNIA FINISHED SIX FLAGS NIGHT.jpg",
        slug: "six-flags",
        description:
            "Working on an active construction site in a foreign country comes with its challenges, but our team maintains professionalism in any scenario. Big walls, tight timelines, and a theme park audience waiting on the other side.",
        tags: ["Theme Park", "Mexico City", "International", "Large-Scale"],
        colors: ["#2E7D32", "#E8A331", "#5C9BD4", "#D4533C", "#F5E6C8"],
        gallery: [
            { src: "/work/ubisoft.JPG", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/SIX FLAGS/SIX FLAGS MEXICO SUNSET.jpg", orientation: "h" },
            { src: "/work/WEBSITE PHOTOS/SIX FLAGS/photo-mural-shot-020.jpg", orientation: "h" },
        ],
    },
];

// ─── Stats — UPDATE these with your real numbers before publishing ───
export const stats = [
    { value: "10+", label: "Years" },
    { value: "100+", label: "Projects" },
    { value: "20+", label: "Clients" },
    { value: "3", label: "Countries" },
];

// ─── Marquee client names ───
export const marqueeClients = [
    "Converse",
    "Adidas",
    "Enwave",
    "Six Flags",
    "Sapporo",
    "Moxy Hotels",
    "Rollerpony",
    "Hershey's",
    "Asahi",
    "Madri",
    "Spotify",
    "Google",
];
