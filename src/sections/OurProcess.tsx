"use client";

import Tag from "@/components/Tag";

export default function OurProcess() {
    const processSteps = [
        {
            title: "Discovery & Consultation",
            icon: "🔍",
            description: "Understanding your needs & setting goals",
            duration: "30-45 minutes",
            points: [
                "Understanding business & project needs",
                "Discussing training & development goals",
                "Customizing the right solution",
                "Budget & timeline estimation",
            ],
        },
        {
            title: "Customized Strategy",
            icon: "📊",
            description: "Planning a tailored roadmap for your success",
            duration: "2-4 days",
            points: [
                "Designing a structured training plan",
                "Building a development strategy",
                "Allocating resources efficiently",
                "Defining key success metrics",
            ],
        },
        {
            title: "Training / Development Execution",
            icon: "🚀",
            description: "Hands-on learning & seamless development",
            duration: "1-6 weeks",
            points: [
                "Live project-based training sessions",
                "Building websites, apps & LMS platforms",
                "Progress tracking & mentorship",
                "Optimizing for performance & scalability",
            ],
        },
        {
            title: "Final Delivery & Ongoing Support",
            icon: "🎯",
            description: "Project handover, certification & long-term assistance",
            duration: "Ongoing",
            points: [
                "Course certification for students",
                "Deployment & product launch",
                "Post-launch support & updates",
                "Continuous improvement & scaling",
            ],
        },
    ];

    return (
        <section className="py-24" id="ourprocess">
            <div className="container px-4">
                <div className="flex justify-center">
                    <Tag>Our Process</Tag>
                </div>
                <h2 className="text-5xl md:text-7xl font-semibold text-center mt-6 max-w-2xl mx-auto">
                    A <span className="text-lime-400">seamless</span> journey to success
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-md transition-transform duration-300 hover:scale-105"
                        >
                            {/* Animated Icon */}
                            <div className="text-6xl animate-bounce mb-6">{step.icon}</div>
                            <h3 className="text-3xl md:text-4xl font-bold">{step.title}</h3>
                            <p className="text-white/70 mt-4 text-lg md:text-xl">{step.description}</p>
                            <div className="mt-4 text-lime-400 font-bold text-lg md:text-xl">
                                {step.duration}
                            </div>
                            <ul className="mt-6 text-white/80 text-base md:text-lg space-y-3 text-left">
                                {step.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-lime-400">✔</span> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
