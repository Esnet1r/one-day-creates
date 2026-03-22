"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function WorkGrid() {
    return (
        <section id="work" className="w-full">
            {/* Section header */}
            <div className="flex flex-col items-center py-10 md:py-14">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                    Selected Work
                </span>
            </div>

            {/* Project rows */}
            {projects.map((project, index) => (
                <Link
                    key={project.id}
                    href={`/work/${project.slug}`}
                    className="block w-full"
                    tabIndex={0}
                >
                    <motion.div
                        className="group relative w-full aspect-[16/9] overflow-hidden bg-neutral-800/30 cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-8%" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* ── Image ── */}
                        <Image
                            src={project.landingImage || project.image}
                            alt={project.title}
                            fill
                            sizes="100vw"
                            quality={index < 2 ? 80 : 70}
                            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                            style={{ objectPosition: project.landingPosition || project.heroPosition || "center" }}
                            priority={index < 2}
                        />

                        {/* ── Gradient overlay ── */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10 z-10 pointer-events-none" />

                        {/* ── Hover darken ── */}
                        <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none" />

                        {/* ── Centered title + View Project ── */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none">
                            <p className="font-mono text-[10px] text-white/30 tracking-widest mb-3">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="font-bebas text-4xl md:text-6xl text-white leading-none tracking-widest">
                                {project.title}
                            </h3>
                            {/* Slides in below on hover */}
                            <div className="mt-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-white/70 border border-white/30 px-6 py-3">
                                <span>View Project</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Separator */}
                    <div className="w-full h-[2px] bg-[#050505]" />
                </Link>
            ))}
        </section>
    );
}
