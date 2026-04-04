export interface ServicePage {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    details: string[];
    relatedProjects: string[]; // slugs from projects data
}

export const servicePages: ServicePage[] = [
    {
        slug: "murals-and-street-art",
        name: "Murals & Street Art",
        tagline: "Exterior and interior, any scale.",
        description:
            "From a single wall to an entire building, we design and execute murals that hold up at any distance. We work across surfaces, styles, and conditions. Photorealism, graphic, typographic, abstract. If it can be painted, we've probably painted it.",
        details: [
            "Exterior building murals",
            "Interior feature walls",
            "Photorealistic portraiture",
            "Typographic and graphic murals",
            "Multi-surface and multi-storey projects",
            "Surface preparation and priming",
        ],
        relatedProjects: ["converse", "enwave", "sapporo", "rollerpony", "asahi"],
    },
    {
        slug: "large-scale-installations",
        name: "Large-Scale Installations",
        tagline: "Permanent and temporary.",
        description:
            "We take on projects that most studios won't. Rooftops, building wraps, courts, hangars. Scale doesn't scare us. We've painted in rain, on lifts 100 feet up, and on surfaces that weren't designed to be canvases. That's the work we're built for.",
        details: [
            "Building-scale murals and wraps",
            "Rooftop and aerial-view installations",
            "Court and floor murals",
            "Multi-wall programs",
            "Permanent and temporary installations",
            "Swing stage and boom lift execution",
        ],
        relatedProjects: ["moxy-hotel", "reeses", "astro", "google", "six-flags"],
    },
    {
        slug: "brand-activations",
        name: "Brand Activations",
        tagline: "Events, launches, pop-ups.",
        description:
            "Live painting, event murals, and brand-driven installations that create real moments. We've worked with global brands to turn walls into content, foot traffic into engagement, and blank spaces into something worth stopping for.",
        details: [
            "Live painting at events and launches",
            "Pop-up mural installations",
            "Festival and concert activations",
            "Product launch visual campaigns",
            "Social-first mural content",
            "Collaborative brand partnerships",
        ],
        relatedProjects: ["spotify", "converse", "adidas-originals", "hangar-jam"],
    },
    {
        slug: "art-direction",
        name: "Art Direction",
        tagline: "Concept to completion.",
        description:
            "Not every project starts with a design in hand. When clients come to us with a vision, a brand, or just a wall, we handle the creative from start to finish. Concept development, colour studies, mockups, and execution. We think about what the wall needs before we pick up a brush.",
        details: [
            "Concept development and ideation",
            "Colour studies and mockups",
            "Design-to-wall translation",
            "Brand alignment and visual strategy",
            "Multi-format creative direction",
            "Client presentation and revision cycles",
        ],
        relatedProjects: ["madri", "sapporo", "adidas-originals", "enwave"],
    },
    {
        slug: "spatial-design",
        name: "Spatial Design",
        tagline: "Environments and wayfinding.",
        description:
            "We think about how a space feels, not just how a wall looks. Hotels, offices, retail, public spaces. The mural is part of the room, not separate from it. We design work that responds to architecture, flow, and function.",
        details: [
            "Hotel and hospitality environments",
            "Retail and commercial interiors",
            "Office and workspace murals",
            "Wayfinding and environmental graphics",
            "Multi-room mural programs",
            "Architecture-responsive design",
        ],
        relatedProjects: ["moxy-hotel", "rollerpony", "asahi"],
    },
];
