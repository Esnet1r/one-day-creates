"use client";

import { marqueeClients } from "@/lib/data";

export function Marquee() {
    // Double the array so the CSS animation loops seamlessly
    const items = [...marqueeClients, ...marqueeClients];

    return (
        <div
            className="w-full overflow-hidden border-y border-white/[0.06] py-[14px] bg-[#050505]"
            aria-hidden="true"
        >
            <div className="flex animate-marquee whitespace-nowrap">
                {items.map((name, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-10 text-[10px] uppercase tracking-[0.45em] text-white/25 px-10"
                    >
                        {name}
                        <span className="inline-block w-1 h-1 rounded-full bg-orange-500/40 flex-shrink-0" />
                    </span>
                ))}
            </div>
        </div>
    );
}
