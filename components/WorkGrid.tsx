"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function WorkGrid() {
    return (
        <section id="work" className="w-full">
            {/* Section header */}
            <div className="flex items-center gap-6 px-6 md:px-12 py-10 md:py-14">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                    Selected Work
                </span>
                <div className="flex-1 h-px bg-white/[0.07]" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                    {String(projects.length).padStart(2, "0")}
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
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="100vw"
                            quality={index < 2 ? 80 : 70}
                            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                            priority={index < 2}
                        />

                        {/* ── Bottom gradient + label ── */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 md:px-10 pb-5 md:pb-7 pointer-events-none">
                            <div className="flex flex-col gap-1">
                                <p className="font-mono text-xs text-white/35 tracking-widest">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="font-bebas text-3xl md:text-5xl text-white leading-none tracking-widest">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                                    {project.category}
                                </p>
                                <p className="text-xs uppercase tracking-[0.3em] text-white/25">
                                    {project.year}
                                </p>
                            </div>
                        </div>

                        {/* ── Hover: subtle overlay + View Project ── */}
                        <div className="absolute inset-0 z-20 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-white/70 border border-white/30 px-6 py-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span>View Project</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Thin separator */}
                    <div className="w-full h-px bg-white/[0.04]" />
                </Link>
            ))}
        </section>
    );
}
