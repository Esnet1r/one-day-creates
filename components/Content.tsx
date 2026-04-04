"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

// ─── Services ───────────────────────────────────────────────────────────────

import Link from "next/link";

const services = [
    { id: "01", name: "Murals",                     detail: "Interior, exterior, and site-specific work", slug: "murals-and-street-art" },
    { id: "02", name: "Large-Scale Installations",  detail: "Permanent, temporary, and built for public view", slug: "large-scale-installations" },
    { id: "03", name: "Brand Activations",          detail: "Campaigns, launches, events, and retail environments", slug: "brand-activations" },
    { id: "04", name: "Art Direction",              detail: "Creative development, visual systems, and execution support", slug: "art-direction" },
    { id: "05", name: "Painted Environments",       detail: "Walls, corridors, facades, and public-facing spaces", slug: "spatial-design" },
];

export function Services() {
    return (
        <Section id="services" className="border-t border-white/[0.07]">
            {/* Services list */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-10 items-start">
                {/* Left: heading + copy */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6">What We Do</p>
                    <h2 className="font-asoma text-5xl md:text-7xl uppercase leading-none mb-8">
                        Services
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-sm font-light">
                        We design and deliver large-scale visual work for brands, public spaces, hospitality, and the built environment. Sometimes that means one wall. Sometimes it means a full program across a site.
                    </p>
                </div>

                {/* Center: bowl photo */}
                <div className="hidden md:flex items-center justify-start self-stretch">
                    <div className="relative w-[28rem] h-[90%] overflow-hidden rounded-sm">
                        <Image
                            src="/work/WEBSITE PHOTOS/HANGAR JAM/DSCF9967 copy.jpg"
                            alt="Hangar Jam crew group photo"
                            fill
                            sizes="288px"
                            className="object-cover grayscale"
                        style={{ objectPosition: "38% center" }}
                        />
                    </div>
                </div>

                {/* Right: numbered service list */}
                <ul className="space-y-0">
                    {services.map((service, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group flex items-start gap-5 border-b border-white/[0.07] py-6 cursor-pointer"
                            >
                                <span className="font-mono text-[10px] text-orange-500/70 tracking-widest mt-1.5 flex-shrink-0">
                                    {service.id}
                                </span>
                                <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-orange-500 transition-colors duration-300">
                                        {service.name}
                                    </span>
                                    <span className="text-[11px] uppercase tracking-[0.35em] text-white/30">
                                        {service.detail}
                                    </span>
                                </div>
                                <span className="text-white/20 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300 mt-2 text-sm">
                                    &rarr;
                                </span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

// ─── About ──────────────────────────────────────────────────────────────────

const headshots = [
    { src: "/work/headshots/DSC00507 copy.jpg",  name: "David Loran",       role: "Co-Founder" },
    { src: "/work/headshots/rudjer-new.jpg",      name: "Rudjer Bosiljevac", role: "Co-Founder" },
    { src: "/work/headshots/DSCF5624 copy.jpg",  name: "Jason Pinney",      role: "Lead Artist" },
    { src: "/work/headshots/download (2).jpg",   name: "Adam Loran",        role: "Art Direction" },
];

export function About() {
    return (
        <Section id="about" className="border-t border-white/[0.07]">
            <div className="flex flex-col gap-20 md:gap-28">

                {/* Pull-quote */}
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">The Studio</p>
                    <p className="text-lg md:text-2xl leading-relaxed font-light text-neutral-300">
                        A mural studio specializing in the design and execution of large-format visual work, public art installations, and curated experiences for enterprise, institutional, and cultural clients across North America.
                    </p>
                </div>

                {/* Team */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/25 text-center mb-10">The Team</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full max-w-[75%] mx-auto">
                        {headshots.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.7 }}
                                className="group relative w-full aspect-square bg-neutral-900 overflow-hidden"
                            >
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Name — always visible on mobile, hover reveal on desktop */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-white uppercase tracking-widest text-[10px] font-light leading-none">
                                        {member.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export function Contact() {
    return (
        <Section id="contact" className="border-t border-white/[0.07]">
            <div className="w-full">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-10 text-center">
                    Start a Project
                </p>
                <motion.h2
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="font-asoma text-[14vw] md:text-[11vw] leading-none tracking-tight uppercase select-none hover:text-orange-500 transition-colors duration-500 cursor-pointer text-center"
                >
                    <a href="/contact">
                        Say Hello.
                    </a>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm text-white/25 font-light text-center mt-8"
                >
                    Have a site, surface, or project in mind? Get in touch and we&apos;ll see if it&apos;s a fit.
                </motion.p>

            </div>
        </Section>
    );
}
