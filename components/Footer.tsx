import Image from "next/image";
import { Section } from "./ui/Section";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/[0.07] mt-0">
            <Section className="py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/logo.png"
                            alt="One Day Creates"
                            width={60}
                            height={20}
                            className="h-auto object-contain brightness-0 invert opacity-50"
                        />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-white/25">
                            Toronto, Canada
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:items-end gap-3">
                        <a
                            href="mailto:1daycreates@gmail.com"
                            className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
                        >
                            1daycreates@gmail.com
                        </a>
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
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/20">
                    <p>&copy; {currentYear} One Day Creates. All rights reserved.</p>
                </div>
            </Section>
        </footer>
    );
}
