import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WorkGrid } from "@/components/WorkGrid";
import { Services, About, Contact } from "@/components/Content";
import { MidCTA } from "@/components/MidCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
            <Navigation />
            <Hero />
            <Marquee />
            <WorkGrid />
            <MidCTA />
            <div className="bg-[#0a0a0a]">
                <Services />
            </div>
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
