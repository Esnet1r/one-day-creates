"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project, GalleryImage, projects } from "@/lib/data";
import { Navigation } from "@/components/Navigation";

/* ── Gallery image tile ─────────────────────────────────── */
function GalleryTile({
    img,
    index,
    title,
    onClick,
    className = "",
}: {
    img: GalleryImage;
    index: number;
    title: string;
    onClick: () => void;
    className?: string;
}) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
            onClick={onClick}
            className={`relative overflow-hidden bg-neutral-900 cursor-zoom-in group ${className}`}
        >
            <Image
                src={img.src}
                alt={`${title} — ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{
                    objectPosition: img.position || "center",
                    ...(img.scale ? { transform: `scale(${img.scale})` } : {}),
                }}
            />
        </motion.button>
    );
}

/* ── Smart gallery layout based on orientation ─────────── */
function GalleryLayout({
    gallery,
    title,
    onImageClick,
}: {
    gallery: GalleryImage[];
    title: string;
    onImageClick: (i: number) => void;
}) {
    // Build rows from the gallery images
    const rows: { images: { img: GalleryImage; globalIndex: number }[]; type: "full" | "pair" | "divider" }[] = [];
    let i = 0;

    while (i < gallery.length) {
        const current = gallery[i];

        // If this image starts a new section, insert a divider row first
        if (current.sectionTitle) {
            rows.push({
                type: "divider",
                images: [{ img: current, globalIndex: i }],
            });
        }

        // Full-width vertical — don't pair it
        if (current.orientation === "v" && current.fullWidth) {
            rows.push({
                type: "full",
                images: [{ img: current, globalIndex: i }],
            });
            i += 1;
            continue;
        }

        // Look ahead: can we pair two verticals side by side?
        if (
            current.orientation === "v" &&
            i + 1 < gallery.length &&
            gallery[i + 1].orientation === "v" &&
            !gallery[i + 1].sectionTitle // don't pair across sections
        ) {
            rows.push({
                type: "pair",
                images: [
                    { img: current, globalIndex: i },
                    { img: gallery[i + 1], globalIndex: i + 1 },
                ],
            });
            i += 2;
        } else {
            // Single image — full width
            rows.push({
                type: "full",
                images: [{ img: current, globalIndex: i }],
            });
            i += 1;
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {rows.map((row, rowIndex) => {
                // Section divider
                if (row.type === "divider") {
                    const sectionTitle = row.images[0].img.sectionTitle!;
                    return (
                        <motion.div
                            key={`divider-${rowIndex}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex items-center gap-6 ${rowIndex > 0 ? "pt-12 pb-4" : "pb-4"}`}
                        >
                            <div className="h-px flex-1 bg-white/[0.08]" />
                            <p className="text-[10px] uppercase tracking-[0.45em] text-white/30 whitespace-nowrap">
                                {sectionTitle}
                            </p>
                            <div className="h-px flex-1 bg-white/[0.08]" />
                        </motion.div>
                    );
                }

                if (row.type === "pair") {
                    // Two verticals side by side
                    return (
                        <div key={rowIndex} className="grid grid-cols-2 gap-4">
                            {row.images.map(({ img, globalIndex }) => (
                                <GalleryTile
                                    key={globalIndex}
                                    img={img}
                                    index={globalIndex}
                                    title={title}
                                    onClick={() => onImageClick(globalIndex)}
                                    className="aspect-[3/4] w-full"
                                />
                            ))}
                        </div>
                    );
                }

                // Single image
                const { img, globalIndex } = row.images[0];
                if (img.orientation === "v" && img.fullWidth) {
                    // Full-width vertical hero — big, no crop
                    return (
                        <GalleryTile
                            key={rowIndex}
                            img={img}
                            index={globalIndex}
                            title={title}
                            onClick={() => onImageClick(globalIndex)}
                            className="aspect-[2/3] w-full"
                        />
                    );
                }
                if (img.orientation === "v") {
                    // Lone vertical — centered, not full width
                    return (
                        <div key={rowIndex} className="flex justify-center">
                            <GalleryTile
                                img={img}
                                index={globalIndex}
                                title={title}
                                onClick={() => onImageClick(globalIndex)}
                                className="aspect-[3/4] w-full max-w-[55%]"
                            />
                        </div>
                    );
                }

                // Landscape — full width
                return (
                    <GalleryTile
                        key={rowIndex}
                        img={img}
                        index={globalIndex}
                        title={title}
                        onClick={() => onImageClick(globalIndex)}
                        className="aspect-[3/2] w-full"
                    />
                );
            })}
        </div>
    );
}

interface ProjectDetailProps {
    project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const gallery = project.gallery;

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const goNext = useCallback(() => {
        if (lightboxIndex !== null)
            setLightboxIndex((lightboxIndex + 1) % gallery.length);
    }, [lightboxIndex, gallery.length]);
    const goPrev = useCallback(() => {
        if (lightboxIndex !== null)
            setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
    }, [lightboxIndex, gallery.length]);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [lightboxIndex, closeLightbox, goNext, goPrev]);

    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <Navigation />

            {/* ── Hero Image ─────────────────────────────────── */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: project.heroPosition || "center" }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-[#050505]/30" />

                {/* Back link */}
                <div className="absolute top-28 left-6 md:left-12 z-10">
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-white/50 hover:text-white transition-colors duration-300"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        All Work
                    </Link>
                </div>
            </motion.section>

            {/* ── Project Info (centered, pulled up into hero) ──── */}
            <section className="max-w-[900px] mx-auto px-6 md:px-12 -mt-32 md:-mt-40 relative z-10">
                {/* Title block */}
                <div className="pb-10 md:pb-14 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center justify-center mb-6"
                    >
                        <span className="font-mono text-[10px] text-orange-500/70 tracking-widest">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="font-bebas uppercase text-[12vw] md:text-[5.5vw] leading-[0.9] tracking-wide"
                    >
                        {project.title}
                    </motion.h1>
                </div>

                {/* Meta row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-8 md:gap-12 pb-10 md:pb-14 border-b border-white/[0.06]"
                >
                    {[
                        { label: "Client", value: project.client },
                        { label: "Year", value: project.year },
                        { label: "Location", value: project.location },
                    ].map((meta) => (
                        <div key={meta.label} className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.45em] text-white/25 mb-1">
                                {meta.label}
                            </p>
                            <p className="text-sm text-white/60 tracking-wide">
                                {meta.value}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Color swatches */}
                {project.colors && project.colors.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex justify-center pt-8"
                    >
                        {project.colors.map((color, i) => (
                            <div
                                key={i}
                                className="w-6 h-6"
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </motion.div>
                )}

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="py-12 md:py-16"
                >
                    <p className="text-base md:text-lg leading-[1.8] text-neutral-400 font-light text-center max-w-[640px] mx-auto">
                        {project.description}
                    </p>
                </motion.div>
            </section>

            {/* ── Gallery ─────────────────────────────────────── */}
            {gallery.length > 0 && (
                <section className="max-w-[1100px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
                    <GalleryLayout
                        gallery={gallery}
                        title={project.title}
                        onImageClick={setLightboxIndex}
                    />
                </section>
            )}

            {/* ── Next Project ────────────────────────────────── */}
            <div className="border-t border-white/[0.06]">
                <Link
                    href={`/work/${nextProject.slug}`}
                    className="group block text-center py-24 md:py-32 px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-4"
                    >
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                            Next Project
                        </p>
                        <p className="font-instrument italic text-4xl md:text-6xl text-white/60 group-hover:text-white transition-colors duration-500">
                            {nextProject.title}
                        </p>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-white/20 group-hover:text-orange-400 group-hover:translate-x-2 transition-all duration-500 mt-2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.div>
                </Link>
            </div>

            {/* ── Lightbox ────────────────────────────────────── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Prev */}
                        {gallery.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10 p-2"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] pointer-events-none"
                        >
                            <Image
                                src={gallery[lightboxIndex].src}
                                alt={`${project.title} — ${lightboxIndex + 1}`}
                                fill
                                sizes="90vw"
                                className="object-contain pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                                priority
                            />
                        </motion.div>

                        {/* Next */}
                        {gallery.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10 p-2"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}

                        {/* Counter */}
                        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/30">
                            {lightboxIndex + 1} / {gallery.length}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
