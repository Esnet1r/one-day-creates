"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, projects } from "@/lib/data";
import { Navigation } from "@/components/Navigation";

interface ProjectDetailProps {
    project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    // Gallery layout: alternate full-width and 2-col grids
    const gallery = project.gallery;

    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <Navigation />

            {/* ── Page Header ─────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex flex-col justify-end pb-12 md:pb-16 pt-32 px-6 md:px-12 overflow-hidden">
                {/* Background image blurred */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20 blur-sm scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/50" />
                </div>

                <div className="relative z-10 max-w-[1800px] mx-auto w-full">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-white/30 hover:text-white/70 transition-colors duration-300 mb-16"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            All Work
                        </Link>
                    </motion.div>

                    {/* Project index + category */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="font-mono text-[10px] text-orange-500/70 tracking-widest">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="w-8 h-px bg-white/20" />
                        <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
                            {project.category}
                        </span>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="font-asoma text-[14vw] md:text-[9vw] uppercase leading-[0.82] tracking-tight mb-10"
                    >
                        {project.title}
                    </motion.h1>

                    {/* Meta strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-white/[0.08]"
                    >
                        {[
                            { label: "Client",   value: project.client },
                            { label: "Year",     value: project.year },
                            { label: "Location", value: project.location },
                            { label: "Type",     value: project.category },
                        ].map((meta) => (
                            <div key={meta.label} className="flex flex-col gap-1">
                                <span className="text-[9px] uppercase tracking-[0.45em] text-white/25">
                                    {meta.label}
                                </span>
                                <span className="text-sm text-white/70 tracking-wide">
                                    {meta.value}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Hero Image ──────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full aspect-[16/9] relative overflow-hidden"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* ── Description ─────────────────────────────────── */}
            <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Tags */}
                    <div className="flex flex-col gap-6">
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                            Disciplines
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-[0.35em] text-white/50 border border-white/10 px-4 py-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-6">
                            Overview
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-neutral-300 font-light">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Gallery ─────────────────────────────────────── */}
            {gallery.length > 1 && (
                <section className="px-0 pb-0">
                    <div className="px-6 md:px-12 mb-8 max-w-[1800px] mx-auto">
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">Gallery</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        {/* Layout: first image full-width, then pairs, then singles */}
                        {gallery.slice(1).map((src, i) => {
                            const isEven = i % 3 === 0;
                            const isPair = i % 3 === 1;

                            if (isPair && gallery[i + 2]) {
                                // 2-column pair
                                return (
                                    <div key={i} className="grid grid-cols-2 gap-1">
                                        <GalleryImage src={src} alt={`${project.title} ${i + 2}`} />
                                        <GalleryImage src={gallery[i + 2]} alt={`${project.title} ${i + 3}`} />
                                    </div>
                                );
                            } else if (i % 3 === 2) {
                                // Skip — already rendered in pair
                                return null;
                            } else {
                                // Full-width
                                return (
                                    <GalleryImage
                                        key={i}
                                        src={src}
                                        alt={`${project.title} ${i + 2}`}
                                        fullWidth
                                    />
                                );
                            }
                        })}
                    </div>
                </section>
            )}

            {/* ── Next Project ────────────────────────────────── */}
            <Link
                href={`/work/${nextProject.slug}`}
                className="group block relative w-full aspect-[16/6] overflow-hidden mt-1"
            >
                <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/40">
                        Next Project
                    </p>
                    <h3 className="font-bebas text-[12vw] md:text-[7vw] leading-none text-white group-hover:text-orange-300 transition-colors duration-500 tracking-widest">
                        {nextProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white/70 transition-colors mt-2">
                        <span>View</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </Link>
        </main>
    );
}

function GalleryImage({
    src,
    alt,
    fullWidth = false,
}: {
    src: string;
    alt: string;
    fullWidth?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden bg-neutral-900 ${fullWidth ? "aspect-[16/9]" : "aspect-square"}`}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={fullWidth ? "100vw" : "50vw"}
                className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
            />
        </motion.div>
    );
}
