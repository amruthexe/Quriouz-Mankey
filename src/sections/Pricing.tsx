"use client";

import Tag from "@/components/Tag";

export default function Pricing() {
    const handleWhatsAppClick = (message: string) => {
        const url = `https://wa.me/917207251404?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="py-24" id="pricing">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Pricing</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Affordable <span className="text-lime-400">Training & Development</span> Solutions
                </h2>
                <p className="text-center text-xl text-white/80 mt-4">
                    Skill-building, web development, and LMS solutions designed to empower students & businesses.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Training & Internship Programs */}
                    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg">
                        <h3 className="text-3xl font-semibold">Training & Internship</h3>
                        <p className="text-white/70 mt-4">
                            Hands-on training in Web Dev, AI, Cloud & More.
                        </p>
                        <div className="mt-6 text-lime-400 text-4xl font-bold">$99+</div>
                        <p className="text-white/50 mt-2">Duration: 4-12 weeks</p>
                        <ul className="mt-4 text-white/80 space-y-2">
                            <li>Live & Recorded Sessions</li>
                            <li>Project-Based Learning</li>
                            <li>Industry Mentorship</li>
                            <li>Internship Certificate</li>
                            <li>Placement Assistance</li>
                        </ul>
                        <button
                            className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition"
                            onClick={() => handleWhatsAppClick("Hi, I am interested in Training & Internship.")}
                        >
                            Apply Now
                        </button>
                    </div>

                    {/* Web & App Development */}
                    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg relative">
                        <span className="absolute top-4 right-4 bg-lime-500 text-black px-3 py-1 text-sm font-semibold rounded-lg">
                            Most Popular 🚀
                        </span>
                        <h3 className="text-3xl mt-6 font-semibold">Web & App Development</h3>
                        <p className="text-white/70 mt-4">
                            Full-stack solutions for businesses & startups.
                        </p>
                        <div className="mt-6 text-lime-400 text-4xl font-bold">$299+</div>
                        <p className="text-white/50 mt-2">Delivery in 2-4 weeks</p>
                        <ul className="mt-4 text-white/80 space-y-2">
                            <li>Custom Website or App</li>
                            <li>SEO & Mobile Optimization</li>
                            <li>API & Database Integration</li>
                            <li>Free Maintenance (3 Months)</li>
                            <li>Multiple Revision Rounds</li>
                        </ul>
                        <button
                            className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition"
                            onClick={() => handleWhatsAppClick("Hi, I am interested in Web & App Development.")}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* LMS & EdTech Solutions */}
                    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg">
                        <h3 className="text-3xl font-semibold">LMS & EdTech Solutions</h3>
                        <p className="text-white/70 mt-4">
                            Custom LMS platforms for online education & training.
                        </p>
                        <div className="mt-6 text-lime-400 text-4xl font-bold">$499+</div>
                        <p className="text-white/50 mt-2">Delivery in 3-6 weeks</p>
                        <ul className="mt-4 text-white/80 space-y-2">
                            <li>Custom LMS Development</li>
                            <li>Student & Course Management</li>
                            <li>Payment Gateway Integration</li>
                            <li>Live & Recorded Classes Support</li>
                            <li>Admin Panel & Analytics</li>
                        </ul>
                        <button
                            className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition"
                            onClick={() => handleWhatsAppClick("Hi, I am interested in LMS & EdTech Solutions.")}
                        >
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>

            {/* Key Features */}
            <div className="container px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">🔒</span>
                        <p className="mt-2 text-white/70">Secure Payment</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">🤝</span>
                        <p className="mt-2 text-white/70">Cancel Anytime</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">📞</span>
                        <p className="mt-2 text-white/70">24/7 Support</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">⚡</span>
                        <p className="mt-2 text-white/70">Instant Setup</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
