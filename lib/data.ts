export interface Project {
    id: number;
    title: string;
    client: string;
    year: string;
    category: string;
    location: string;
    image: string;
    slug: string;
    description: string;
    tags: string[];
    gallery: string[];
}

// ─── UPDATE: Replace placeholder descriptions, tags, years, and gallery images
//             with your real project data before publishing. ───

export const projects: Project[] = [
    {
        id: 1,
        title: "Converse",
        client: "Converse",
        year: "2023",
        category: "Brand Activation",
        location: "Ossington Ave, Toronto",
        image: "/work/converse.jpg",
        slug: "converse",
        description: "A bold street-level activation for Converse, transforming a high-traffic Toronto wall into a living canvas that bridges sport, culture, and self-expression. The large-scale mural became an instant landmark and a focal point for the campaign's launch — driving organic reach and establishing One Day Creates as the studio behind the city's most-talked-about walls.",
        tags: ["Brand Activation", "Street Art", "Toronto", "Large-Scale"],
        gallery: [
            "/work/converse.jpg",
            "/ONE DAY PHOTOS/DSCF1075 copy.jpg",
            "/ONE DAY PHOTOS/DSC00113 copy.jpg",
            "/ONE DAY PHOTOS/DSCF3007.JPG",
            "/ONE DAY PHOTOS/DJI_0313.JPG",
            "/ONE DAY PHOTOS/DSCF2201 copy.jpg",
        ],
    },
    {
        id: 2,
        title: "Six Flags",
        client: "Six Flags",
        year: "2022",
        category: "Large-Scale Installation",
        location: "Mexico City, Mexico",
        image: "/work/ubisoft.JPG",
        slug: "six-flags",
        description: "A sweeping mural program for Six Flags Mexico City, transforming the park's public corridors with bold, theme-driven artwork designed to energize guests and reinforce brand identity at scale. One Day Creates managed the full project arc — from concept and art direction through to on-site execution with a cross-border crew.",
        tags: ["Theme Park", "Mexico City", "Immersive", "Large-Scale"],
        gallery: [
            "/work/ubisoft.JPG",
            "/ONE DAY PHOTOS/UBISOFT4.jpg",
            "/ONE DAY PHOTOS/DSC00186 copy.jpg",
            "/ONE DAY PHOTOS/DJI_0344.JPG",
            "/ONE DAY PHOTOS/DSCF1185 copy.jpg",
        ],
    },
    {
        id: 3,
        title: "Adidas Originals",
        client: "Adidas",
        year: "2023",
        category: "Brand Activation",
        location: "Toronto, Canada",
        image: "/work/adidas.jpg",
        slug: "adidas-originals",
        description: "An immersive brand activation for the Adidas Originals collection, translating the three-stripe heritage into a striking large-format mural installation that anchored the launch event and drove organic media coverage. The work was conceived as a dialogue between the brand's archive and Toronto's contemporary street culture.",
        tags: ["Adidas", "Brand Activation", "Launch Event", "Heritage"],
        gallery: [
            "/work/adidas.jpg",
            "/ONE DAY PHOTOS/adidasfinished.jpg",
            "/ONE DAY PHOTOS/DSC09098_copy.jpg",
            "/ONE DAY PHOTOS/DSCF0760 copy.jpg",
            "/ONE DAY PHOTOS/DSCF2271 copy.jpg",
        ],
    },
    {
        id: 4,
        title: "The Moxy Hotel",
        client: "Moxy Hotels",
        year: "2021",
        category: "Spatial Design",
        location: "Toronto, Canada",
        image: "/work/mural-1.jpg",
        slug: "moxy-hotel",
        description: "A full interior mural program for The Moxy Hotel, weaving vibrant character-driven artwork throughout the property's public spaces to establish a bold visual identity. The commission spanned lobby, corridors, and social areas — each space designed with its own visual language that collectively tells a unified story of the city.",
        tags: ["Hotel", "Interior", "Spatial Design", "Toronto"],
        gallery: [
            "/work/mural-1.jpg",
            "/work/mural-2.jpg",
            "/ONE DAY PHOTOS/DJI_0399.JPG",
            "/ONE DAY PHOTOS/DJI_0409-HDR.jpg",
            "/ONE DAY PHOTOS/DJI_0443.JPG",
            "/ONE DAY PHOTOS/DJI_0482 copy.jpg",
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
        description: "A community-rooted commission celebrating local culture, movement, and joy. Painted over several days in one of Toronto's most-trafficked corridors, the piece quickly became a neighbourhood landmark — a destination in its own right, and a testament to public art's power to define place.",
        tags: ["Community", "Street Art", "Toronto", "Independent"],
        gallery: [
            "/work/mural-3.JPG",
            "/ONE DAY PHOTOS/DSCF2188 copy.jpg",
            "/ONE DAY PHOTOS/DSCF2158 copy.jpg",
            "/ONE DAY PHOTOS/DSCF2157 copy.jpg",
            "/ONE DAY PHOTOS/DSCF2179 copy.jpg",
        ],
    },
    {
        id: 6,
        title: "McDonald's",
        client: "McDonald's Canada",
        year: "2019",
        category: "Brand Activation",
        location: "Toronto, Canada",
        image: "/ONE DAY PHOTOS/mcdonalds1.jpg",
        slug: "mcdonalds",
        description: "A high-impact street mural campaign for McDonald's Canada, connecting with local communities through bold, joyful artwork that amplified the brand's cultural footprint across key urban markets. The murals were designed to feel native to their neighbourhoods while remaining unmistakably on-brand.",
        tags: ["QSR", "Brand", "Community", "Urban"],
        gallery: [
            "/ONE DAY PHOTOS/mcdonalds1.jpg",
            "/ONE DAY PHOTOS/20190526_220154.jpg",
            "/ONE DAY PHOTOS/20190910_132137.jpg",
            "/ONE DAY PHOTOS/20191005_165712.jpg",
            "/ONE DAY PHOTOS/20191109_145104.jpg",
        ],
    },
    {
        id: 7,
        title: "American Express",
        client: "American Express",
        year: "2018",
        category: "Brand Activation",
        location: "Toronto, Canada",
        image: "/ONE DAY PHOTOS/20180528-2048-AMEX3 copy.jpg",
        slug: "american-express",
        description: "A prestige brand activation for American Express, fusing artistic excellence with the brand's premium positioning through a large-format mural that served as the centrepiece of a high-profile cardholder event. Conceived as a statement piece that rewards close looking — a mural that reveals more the longer you stand in front of it.",
        tags: ["Finance", "Premium", "Event", "Brand"],
        gallery: [
            "/ONE DAY PHOTOS/20180528-2048-AMEX3 copy.jpg",
            "/ONE DAY PHOTOS/20180628_192311.jpg",
            "/ONE DAY PHOTOS/20181020_185739_HDR.jpg",
            "/ONE DAY PHOTOS/20181022_180357_HDR.jpg",
            "/ONE DAY PHOTOS/20181120_163808_HDR.jpg",
        ],
    },
    {
        id: 8,
        title: "Taco Bell",
        client: "Taco Bell Canada",
        year: "2021",
        category: "Brand Activation",
        location: "Toronto, Canada",
        image: "/ONE DAY PHOTOS/tacobell girls.jpg",
        slug: "taco-bell",
        description: "A vibrant, youth-driven mural activation for Taco Bell's Canadian expansion, bringing irreverent energy and bold colour to Toronto streetscapes in alignment with the brand's cultural repositioning. The project demonstrated One Day Creates' ability to dial up energy when the brief calls for it — without sacrificing craft.",
        tags: ["QSR", "Youth Culture", "Street Art", "Brand"],
        gallery: [
            "/ONE DAY PHOTOS/tacobell girls.jpg",
            "/ONE DAY PHOTOS/20160508_192827.jpg",
            "/ONE DAY PHOTOS/20160530_173754.jpg",
            "/ONE DAY PHOTOS/20160728_155352.jpg",
            "/ONE DAY PHOTOS/20170531_195622.jpg",
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
    "American Express",
    "McDonald's",
    "Six Flags",
    "Taco Bell",
    "Moxy Hotels",
    "Enwave",
    "Rollerpony",
    "MLB",
];
