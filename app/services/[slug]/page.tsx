import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { servicePages } from "@/lib/services";
import { projects } from "@/lib/data";
import { ServicePageContent } from "@/components/ServicePageContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
    return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = servicePages.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.name} | One Day Creates`,
        description: service.description.slice(0, 160),
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = servicePages.find((s) => s.slug === slug);
    if (!service) notFound();

    const related = service.relatedProjects
        .map((pSlug) => projects.find((p) => p.slug === pSlug))
        .filter(Boolean) as typeof projects;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
            <Navigation />
            <ServicePageContent service={service} relatedProjects={related} />
            <Footer />
        </main>
    );
}
