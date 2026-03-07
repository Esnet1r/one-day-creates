"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Work",     href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About",    href: "#about" },
    { name: "Contact",  href: "#contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 60);
            setHidden(y > 120 && y > lastY);
            lastY = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navVisible = scrolled && !hidden;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-7">
                {/* Background — fades in after scroll, out when hidden */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-md border-b border-white/[0.06] transition-opacity duration-500 ${navVisible ? "opacity-100" : "opacity-0"}`} />

                {/* Logo — always visible */}
                <Link href="/" className="relative z-10 flex-shrink-0" onClick={() => setIsOpen(false)}>
                    <Image
                        src="/logo.png"
                        alt="One Day Creates"
                        width={80}
                        height={28}
                        className="w-14 md:w-20 h-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                    />
                </Link>

                {/* Desktop nav — fades with background */}
                <ul className={`hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] font-light relative z-10 transition-opacity duration-500 ${navVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-white/60 hover:text-white transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="mailto:hello@onedaycreates.com"
                            className="text-[11px] uppercase tracking-[0.35em] border border-white/20 px-5 py-2.5 text-white/60 hover:border-white/60 hover:text-white transition-all duration-300"
                        >
                            Hire Us
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle — always accessible */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-50 text-white/70 hover:text-white transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-2 w-full px-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: index * 0.07, duration: 0.4 }}
                                    className="w-full border-b border-white/[0.07] last:border-b-0"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block font-asoma text-5xl uppercase py-5 text-white/80 hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.a
                            href="mailto:hello@onedaycreates.com"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 text-[11px] uppercase tracking-[0.4em] text-white/30"
                        >
                            hello@onedaycreates.com
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
