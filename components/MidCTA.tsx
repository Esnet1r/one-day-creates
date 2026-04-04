"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function MidCTA() {
    return (
        <section className="py-16 md:py-20 px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
            >
                <p className="text-sm text-white/30 font-light">
                    Have a project in mind?
                </p>
                <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-orange-500 transition-colors duration-300"
                >
                    Let&apos;s talk
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </Link>
            </motion.div>
        </section>
    );
}
