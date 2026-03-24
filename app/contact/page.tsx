import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Content";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | One Day Creates",
    description:
        "Get in touch with One Day Creates for murals, brand activations, and large-scale art projects across North America.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
            <Navigation />
            <div className="pt-32">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
