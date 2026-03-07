
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full px-4 md:px-8 lg:px-12 py-20 md:py-32 max-w-[1800px] mx-auto",
                className
            )}
        >
            {children}
        </section>
    );
}
