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
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-10 items-start">
                {/* Left: heading + copy */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6">What We Do</p>
                    <h2 className="font-asoma text-5xl md:text-7xl uppercase leading-none mb-8">
                        Services
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-sm font-light">
                        We paint walls. Sometimes we design them too. Either way, we show up ready and we don't leave until it's done right.
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
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">Our Story</p>
                    <p className="text-2xl md:text-4xl leading-relaxed font-light text-neutral-300">
                        We're a small crew out of Toronto that paints murals — for brands, for
                        buildings, for whoever has a wall that needs something on it.{" "}
                        <span className="text-white font-normal">One Day Creates</span>{" "}
                        isn't a big agency. We just show up and do the work.
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
                    Let&apos;s Work Together
                </p>
                <motion.h2
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="font-asoma text-[14vw] md:text-[11vw] leading-none tracking-tight uppercase select-none hover:text-orange-500 transition-colors duration-500 cursor-pointer text-center mb-16 md:mb-24"
                >
                    <a href="#contact">
                        Say Hello.
                    </a>
                </motion.h2>

                {/* Contact Form */}
                <motion.form
                    action="https://formspree.io/f/xplaceholder"
                    method="POST"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light focus:border-orange-500 focus:outline-none transition-colors duration-300 placeholder:text-white/15"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light focus:border-orange-500 focus:outline-none transition-colors duration-300 placeholder:text-white/15"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="project-type" className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">
                            Project Type
                        </label>
                        <select
                            id="project-type"
                            name="project-type"
                            className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light focus:border-orange-500 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                            defaultValue=""
                        >
                            <option value="" disabled className="bg-[#050505] text-white/30">Select a project type</option>
                            <option value="mural" className="bg-[#050505]">Mural</option>
                            <option value="brand-activation" className="bg-[#050505]">Brand Activation</option>
                            <option value="event" className="bg-[#050505]">Event</option>
                            <option value="other" className="bg-[#050505]">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none placeholder:text-white/15"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full sm:w-auto text-xs uppercase tracking-[0.4em] border border-white/30 px-12 py-4 hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </div>
                </motion.form>

                {/* Direct contact links */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="mailto:1daycreates@gmail.com"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] border border-white/10 px-8 py-4 text-white/50 hover:border-white/30 hover:text-white transition-all duration-300"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        1daycreates@gmail.com
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
