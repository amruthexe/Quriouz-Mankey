import { AnimatedTestimonialsDemo } from "@/sections/AnimatedTestimonialsDemo";
import CallToAction from "@/sections/CallToAction";
import ContactForm from "@/sections/ContactForm";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import GrowBusinessSection from "@/sections/GrowBusinessSection";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import { LampDemo } from "@/sections/LampDemo";
import LogoTicker from "@/sections/LogoTicker";
import MissionVision from "@/sections/MissionVision";
import Navbar from "@/sections/Navbar";
import OurProcess from "@/sections/OurProcess";
import Pricing from "@/sections/Pricing";
import Link from 'next/link'
export default function Home() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Logo Ticker */}
            <LogoTicker />

            {/* Introduction Section */}
            <Introduction />

            {/* Features Section */}
            <Features />

            {/* Our Process */}
            <OurProcess />
        <MissionVision/>

            {/* Pricing Section */}
            <Pricing />

            {/* Integrations */}
            <Integrations />

            {/* FAQs */}
            {/* <Faqs /> */}
<AnimatedTestimonialsDemo/>
            {/* Contact Form */}
            <ContactForm />

            {/* Grow Business Section */}
            <GrowBusinessSection />

            {/* Call To Action */}
            <CallToAction />
            <LampDemo/>

            {/* Footer */}
            <Footer />

            {/* Footer Credits */}
            <div className=" text-white py-4">
                
<p className="text-center text-sm">
    Developed by 
    <Link href="https://amruthexe.vercel.app">
        <span className="text-lime-400 pl-2">amruthexe ❤️</span>
    </Link>
</p>

            </div>
        </>
    );
}
