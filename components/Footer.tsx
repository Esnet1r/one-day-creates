import Image from "next/image";
import { Section } from "./ui/Section";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/[0.07] mt-0">
            <Section className="py-14 md:py-20">
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Logo */}
                    <Image
                        src="/logo.png"
                        alt="One Day Creates"
                        width={60}
                        height={20}
                        className="h-auto object-contain brightness-0 invert opacity-40"
                    />

                    {/* Email */}
                    <a
                        href="mailto:1daycreates@gmail.com"
                        className="text-sm text-white/40 hover:text-white transition-colors duration-300 tracking-wide"
                    >
                        1daycreates@gmail.com
                    </a>

                    {/* Social links */}
                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.35em] text-white/25">
                        <a
                            href="https://instagram.com/onedaycreates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            Instagram
                        </a>
                        <span className="w-1 h-1 rounded-full bg-white/10 inline-block" />
                        <a
                            href="https://tiktok.com/@onedaycreates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            TikTok
                        </a>
                        <span className="w-1 h-1 rounded-full bg-white/10 inline-block" />
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                    </div>

                    {/* Location */}
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/15">
                        Toronto, Canada
                    </p>

                    {/* Divider + Copyright */}
                    <div className="w-12 h-px bg-white/[0.07]" />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/15">
                        &copy; {currentYear} One Day Creates. All rights reserved.
                    </p>
                </div>
            </Section>
        </footer>
    );
}
