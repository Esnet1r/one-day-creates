"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Interstitial() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={ref}
            className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
        >
            {/* Parallax background image */}
            <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
                <Image
                    src="/work/lifestyle-brush.jpg"
                    alt="The craft"
                    fill
                    sizes="100vw"
                    className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-[#050505]/60" />
            </motion.div>

            {/* Centered statement */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center text-xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/80 max-w-[700px] tracking-wide"
                >
                    Every wall is a decision.
                    <br />
                    <span className="text-white/40">We make sure it&apos;s the right one.</span>
                </motion.p>
            </div>
        </section>
    );
}
