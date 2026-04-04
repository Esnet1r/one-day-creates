import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact One Day Creates | Hire a Mural Company in Toronto",
    description:
        "Get in touch with One Day Creates for mural projects, brand activations, and large-scale art installations. Based in Toronto, working internationally.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
