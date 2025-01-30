"use client";

import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";

// Import Tech Icons
import figmaIcon from "@/assets/images/figma-logo.svg";
import nextjsIcon from "@/assets/images/nextjs-icon.svg";
import javaIcon from "@/assets/images/java.svg";
import jsIcon from "@/assets/images/js.svg";
import tailwindIcon from "@/assets/images/tailwind.svg";
import mongodbIcon from "@/assets/images/mongodb.svg";
import postgresqlIcon from "@/assets/images/post.svg";
import reactIcon from "@/assets/images/react.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import pythonIcon from "@/assets/images/python.svg";
import djangoIcon from "@/assets/images/django.svg";

export default function Integrations() {
    return (
        <section className="py-32 overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 items-start lg:gap-16">
                    
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <Tag>Technologies We Use</Tag>
                        <h2 className="text-4xl sm:text-5xl font-medium mt-6">
                            Powering the <span className="text-lime-400">Future of Tech</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-base sm:text-lg">
                            Our training programs leverage cutting-edge tools and industry-standard frameworks to equip students with the most relevant skills.
                        </p>
                        <p className="text-white/70 text-base sm:text-lg">
                            From mastering Python & Java for backend development to using React for modern UI/UX applications, we ensure students work with industry-preferred technologies.
                        </p>
                        <p className="text-white/70 text-base sm:text-lg">
                            We use Next.js & Tailwind CSS for frontend, MongoDB & PostgreSQL for databases, and Django for high-performance backend systems.
                        </p>
                        <p className="text-white/70 text-base sm:text-lg">
                            Our curriculum covers GitHub for collaboration, Figma for UI/UX design, and JavaScript for full-stack development, ensuring students are job-ready.
                        </p>
                    </div>

                    {/* Right Content: Tech Grid */}
                    <div>
                        <div className="h-[400px] sm:h-[600px] lg:h-[1000px] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden sm:flex"
                                reverse
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export type IntegrationsType = typeof integrations;

const integrations = [
    {
        name: "Python",
        icon: pythonIcon,
        description: "The foundation of AI, Machine Learning, and Backend Development.",
    },
    {
        name: "Java",
        icon: javaIcon,
        description: "A powerful object-oriented programming language for enterprise applications.",
    },
    {
        name: "Django",
        icon: djangoIcon,
        description: "A high-level Python framework for building scalable web applications.",
    },
    {
        name: "React",
        icon: reactIcon,
        description: "A JavaScript library for building modern UI/UX applications.",
    },
    {
        name: "Next.js",
        icon: nextjsIcon,
        description: "A React framework for fast, scalable, and SEO-friendly web apps.",
    },
    {
        name: "Tailwind CSS",
        icon: tailwindIcon,
        description: "Utility-first CSS framework for rapid UI development.",
    },
    {
        name: "MongoDB",
        icon: mongodbIcon,
        description: "NoSQL database for scalable and flexible data management.",
    },
    {
        name: "PostgreSQL",
        icon: postgresqlIcon,
        description: "Advanced open-source relational database system.",
    },
    {
        name: "JavaScript",
        icon: jsIcon,
        description: "The core programming language of the modern web.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "The ultimate platform for code collaboration and version control.",
    },
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Collaborative UI/UX design tool for seamless teamwork.",
    },
];
