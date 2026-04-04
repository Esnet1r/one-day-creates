"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            await fetch("https://formspree.io/f/mgoppanr", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            setSubmitted(true);
        } catch {
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    }

    const inputClass =
        "w-full bg-transparent border-b border-white/10 pb-2.5 text-white text-base font-light focus:outline-none focus:border-orange-500 transition-colors duration-300 placeholder:text-white/15";
    const labelClass =
        "block text-[10px] uppercase tracking-[0.35em] text-white/50 mb-2.5";
    const selectClass =
        "w-full bg-transparent border-b border-white/10 pb-2.5 text-white/30 text-sm focus:outline-none focus:border-orange-500 transition-colors duration-300 appearance-none cursor-pointer";
    const optionalClass =
        "text-white/12 normal-case tracking-normal text-[8px]";

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
            <Navigation />

            <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 mb-5">
                        Get In Touch
                    </p>
                    <h1 className="font-bebas uppercase text-[11vw] md:text-[5vw] leading-[0.9] tracking-wide text-white/90">
                        Say Hello.
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16 md:gap-20">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {submitted ? (
                            <div className="py-16">
                                <h2 className="font-bebas uppercase text-3xl md:text-4xl tracking-wide mb-3 text-white/90">
                                    Thanks for reaching out.
                                </h2>
                                <p className="text-white/40 text-sm">
                                    We&apos;ll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-7">
                                {/* Name row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div>
                                        <label htmlFor="first-name" className={labelClass}>
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="first-name"
                                            name="first-name"
                                            required
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className={labelClass}>
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="last-name"
                                            name="last-name"
                                            required
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                {/* Email & Company row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div>
                                        <label htmlFor="email" className={labelClass}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className={labelClass}>
                                            Company <span className={optionalClass}>(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                {/* Project description */}
                                <div>
                                    <label htmlFor="message" className={labelClass}>
                                        Tell Us About Your Project
                                    </label>
                                    <p className="text-[10px] text-white/15 mb-2.5">
                                        Describe the project, vision, space, or any relevant context.
                                    </p>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {/* Dimensions & Timeline row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div>
                                        <label htmlFor="dimensions" className={labelClass}>
                                            Dimensions <span className={optionalClass}>(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="dimensions"
                                            name="dimensions"
                                            className={inputClass}
                                            placeholder="e.g. 20 ft × 40 ft"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="timeline" className={labelClass}>
                                            Project Timeline
                                        </label>
                                        <input
                                            type="text"
                                            id="timeline"
                                            name="timeline"
                                            className={inputClass}
                                            placeholder="e.g. Summer 2025"
                                        />
                                    </div>
                                </div>

                                {/* Budget & Referral row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div>
                                        <label htmlFor="budget" className={labelClass}>
                                            Budget Range
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            className={selectClass}
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-[#111] text-white/30">Select a range</option>
                                            <option value="under-5k" className="bg-[#111]">Under $5,000</option>
                                            <option value="5k-15k" className="bg-[#111]">$5,000 – $15,000</option>
                                            <option value="15k-50k" className="bg-[#111]">$15,000 – $50,000</option>
                                            <option value="50k-100k" className="bg-[#111]">$50,000 – $100,000</option>
                                            <option value="100k+" className="bg-[#111]">$100,000+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="referral" className={labelClass}>
                                            How Did You Find Us? <span className={optionalClass}>(optional)</span>
                                        </label>
                                        <select
                                            id="referral"
                                            name="referral"
                                            className={selectClass}
                                            defaultValue=""
                                        >
                                            <option value="" className="bg-[#111] text-white/30">Select one</option>
                                            <option value="instagram" className="bg-[#111]">Instagram</option>
                                            <option value="google" className="bg-[#111]">Google Search</option>
                                            <option value="referral" className="bg-[#111]">Referral</option>
                                            <option value="saw-our-work" className="bg-[#111]">Saw Our Work In Person</option>
                                            <option value="other" className="bg-[#111]">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-orange-500 transition-colors duration-300 pt-6 disabled:opacity-40"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                                        &rarr;
                                    </span>
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10 md:pt-1"
                    >
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.35em] text-white/20 mb-3">
                                Email
                            </p>
                            <a
                                href="mailto:1daycreates@gmail.com"
                                className="text-sm text-white/50 hover:text-orange-500 transition-colors duration-300"
                            >
                                1daycreates@gmail.com
                            </a>
                        </div>

                        <div>
                            <p className="text-[9px] uppercase tracking-[0.35em] text-white/20 mb-3">
                                Location
                            </p>
                            <p className="text-sm text-white/50">Toronto, Canada</p>
                        </div>

                        <div>
                            <p className="text-[9px] uppercase tracking-[0.35em] text-white/20 mb-3">
                                Follow Us
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://instagram.com/onedaycreates"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/50 hover:text-orange-500 transition-colors duration-300"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://tiktok.com/@onedaycreates"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/50 hover:text-orange-500 transition-colors duration-300"
                                >
                                    TikTok
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/50 hover:text-orange-500 transition-colors duration-300"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
