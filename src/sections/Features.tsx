"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Python Full Stack Development",
    "AI & Machine Learning",
    "Cloud Computing & DevOps",
    "Data Science & Analytics",
    "Cybersecurity & Ethical Hacking",
    "Mobile App Development",
    "Web Development (React, Next.js)",
    "Blockchain & Web3 Technologies",
    "UI/UX Design & Prototyping",
    "Digital Marketing & SEO",
    "Competitive Coding & DSA",
    "Database Management Systems",
    "IoT & Embedded Systems",
];

export default function Features() {
    return (
        <section className="py-24" id="features">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Why Choose Quriouz Mankey?</Tag>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto leading-snug">
                    Elevate Your Skills & <span className="text-lime-400">Career</span>
                </h2>
                
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-2">
                    {/* Feature 1: Hands-On Learning */}
                    <FeatureCard
                        title="Hands-On Learning"
                        description="Gain real-world experience with live projects, hackathons, and industry-driven case studies."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="avatar1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={avatar2} alt="avatar2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={avatar3} alt="avatar3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image src={avatar4} alt="Avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span className="size-1 roundeed-full bg-white inline-flex" key={i}></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    {/* Feature 2: Industry Experts & Mentorship */}
                    <FeatureCard
                        title="Industry Experts & Mentorship"
                        description="Learn from top industry leaders, engineers, and developers who guide you throughout your journey."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition text-center duration-500">
                                Transforming{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent relative">
                                    <span>Careers</span>
                                    <video
                                        src="/assets/gif-incredible.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                    />
                                </span>{" "}
                                every day.
                            </p>
                        </div>
                    </FeatureCard>

              
                </div>

                {/* Feature List */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-lime-400 text-black size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
