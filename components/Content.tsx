"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

// ─── Services ───────────────────────────────────────────────────────────────

const services = [
    { id: "01", name: "Murals & Street Art",        detail: "Exterior & interior, any scale" },
    { id: "02", name: "Large-Scale Installations",  detail: "Permanent & temporary" },
    { id: "03", name: "Brand Activations",          detail: "Events, launches, pop-ups" },
    { id: "04", name: "Art Direction",              detail: "Concept to completion" },
    { id: "05", name: "Spatial Design",             detail: "Environments & wayfinding" },
];

export function Services() {
    return (
        <Section id="services" className="border-t border-white/[0.07]">
            {/* Services list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                {/* Left: heading + copy */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6">What We Do</p>
                    <h2 className="font-asoma text-5xl md:text-7xl uppercase leading-none mb-8">
                        Services
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-sm font-light">
                        Concept to keys-back. We handle the full arc — creative direction,
                        production, and execution — so the only thing you see is the finished wall.
                    </p>
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
                            className="flex items-start gap-5 border-b border-white/[0.07] py-6"
                        >
                            <span className="font-mono text-[10px] text-orange-500/70 tracking-widest mt-1.5 flex-shrink-0">
                                {service.id}
                            </span>
                            <div className="flex flex-col gap-1 flex-1">
                                <span className="text-xl md:text-2xl font-light tracking-wide text-white">
                                    {service.name}
                                </span>
                                <span className="text-[11px] uppercase tracking-[0.35em] text-white/30">
                                    {service.detail}
                                </span>
                            </div>
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
    { src: "/work/headshots/DSCF0539 copy.jpg",  name: "Rudjer Bosiljevac", role: "Co-Founder" },
    { src: "/work/headshots/DSCF5175.jpg",       name: "Jason Pinney",      role: "Lead Artist" },
    { src: "/work/headshots/download (2).jpg",   name: "Adam Loran",        role: "Art Direction" },
];

export function About() {
    return (
        <Section id="about" className="border-t border-white/[0.07]">
            <div className="flex flex-col gap-20 md:gap-28">

                {/* Pull-quote */}
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">Our Story</p>
                    <p className="text-2xl md:text-4xl leading-relaxed font-light text-neutral-300">
                        We believe art has the power to transform environments and communities.
                        Founded on bold expression and disciplined execution,{" "}
                        <span className="text-white font-normal">One Day Creates</span>{" "}
                        partners with brands and cities to turn blank walls into landmarks.
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
                                    <span className="text-white/40 uppercase tracking-widest text-[9px] mt-1">
                                        {member.role}
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
        <Section id="contact" className="border-t border-white/[0.07] min-h-[60vh] flex items-center justify-center">
            <div className="text-center w-full">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-10">
                    Let&apos;s Work Together
                </p>
                <motion.h2
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="font-asoma text-[14vw] md:text-[11vw] leading-none tracking-tight uppercase cursor-default select-none group"
                >
                    <span className="inline-block transition-colors duration-500 hover:text-orange-500">
                        Say
                    </span>{" "}
                    <span className="inline-block transition-colors duration-500 hover:text-orange-500 delay-75">
                        Hello.
                    </span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="mailto:hello@onedaycreates.com"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        hello@onedaycreates.com
                    </a>
                    <a
                        href="https://instagram.com/onedaycreates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] border border-white/10 px-8 py-4 text-white/50 hover:border-white/30 hover:text-white transition-all duration-300"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        @onedaycreates
                    </a>
                </motion.div>
            </div>
        </Section>
    );
}
