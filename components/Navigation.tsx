"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Work",     href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "About",    href: "/#about" },
    { name: "Contact",  href: "/contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-7">
                {/* Logo */}
                <Link
                    href="/"
                    className="relative z-10 flex-shrink-0"
                    onClick={(e) => {
                        setIsOpen(false);
                        if (window.location.pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                >
                    <Image
                        src="/logo.png"
                        alt="One Day Creates"
                        width={80}
                        height={28}
                        className="w-14 md:w-20 h-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />
                </Link>

                {/* Desktop nav — always visible */}
                <ul className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] font-light relative z-10">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith("/#") && window.location.pathname === "/") {
                                        e.preventDefault();
                                        const id = item.href.replace("/#", "");
                                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="text-white/60 hover:text-white transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
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
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            if (item.href.startsWith("/#") && window.location.pathname === "/") {
                                                e.preventDefault();
                                                const id = item.href.replace("/#", "");
                                                setTimeout(() => {
                                                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                                                }, 350);
                                            }
                                        }}
                                        className="block font-asoma text-5xl uppercase py-5 text-white/80 hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.a
                            href="/contact"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 text-[11px] uppercase tracking-[0.4em] text-white/30"
                        >
                            1daycreates@gmail.com
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
