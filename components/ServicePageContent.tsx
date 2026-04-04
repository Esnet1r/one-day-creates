"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ServicePage } from "@/lib/services";
import type { Project } from "@/lib/data";

export function ServicePageContent({
    service,
    relatedProjects,
}: {
    service: ServicePage;
    relatedProjects: Project[];
}) {
    return (
        <>
            {/* Hero */}
            <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-white/25 hover:text-white/50 transition-colors duration-300 mb-8"
                    >
                        <span>&larr;</span> Services
                    </Link>
                    <h1 className="font-bebas uppercase text-[11vw] md:text-[5vw] leading-[0.9] tracking-wide text-white/90 mb-6">
                        {service.name}
                    </h1>
                    <p className="text-base md:text-lg text-white/30 font-light max-w-lg">
                        {service.tagline}
                    </p>
                </motion.div>
            </section>

            {/* Description + Details */}
            <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-5">
                            Overview
                        </p>
                        <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-light">
                            {service.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-5">
                            What This Includes
                        </p>
                        <ul className="space-y-3">
                            {service.details.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-white/50 font-light"
                                >
                                    <span className="text-orange-500/50 mt-0.5 text-xs">&#9642;</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-8">
                            Related Projects
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {relatedProjects.slice(0, 3).map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/work/${project.slug}`}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                                >
                                    <Image
                                        src={project.landingImage || project.image}
                                        alt={`${project.title} mural — ${project.location} — One Day Creates`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{
                                            objectPosition:
                                                project.landingPosition ||
                                                project.heroPosition ||
                                                "center",
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="font-bebas uppercase text-xl tracking-wide text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            {project.title}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}

            {/* CTA */}
            <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto border-t border-white/[0.07] pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-base md:text-lg text-white/30 font-light mb-6">
                        Have a project in mind?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-orange-500 transition-colors duration-300"
                    >
                        Get In Touch
                        <span className="inline-block transition-transform duration-300 hover:translate-x-1">
                            &rarr;
                        </span>
                    </Link>
                </motion.div>
            </section>
        </>
    );
}
