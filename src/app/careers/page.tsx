"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export default function Careers() {
    const [isSubmittedIntern, setIsSubmittedIntern] = useState(false);
    const [isSubmittedExperienced, setIsSubmittedExperienced] = useState(false);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>, type: string) => {
        event.preventDefault();
        const form = event.currentTarget;

        fetch("https://getform.io/f/amddzjmb", {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => {
                if (response.ok) {
                    type === "intern"
                        ? setIsSubmittedIntern(true)
                        : setIsSubmittedExperienced(true);
                    form.reset();
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch(() => alert("An error occurred. Please try again later."));
    };

    return (
       <>
       <Navbar/>
        <section className="py-20 sm:py-24 text-white">
            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Page Title */}
                <div className="text-center">
                    <Tag>Careers</Tag>
                    <h2 className="text-4xl sm:text-5xl font-medium mt-6">
                        Work With <span className="text-lime-400">Quriouz Mankey</span>
                    </h2>
                    <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                        Join our mission to empower the next generation of tech innovators. Whether you are a student looking for an internship or a professional seeking career growth, we have the right opportunity for you.
                    </p>
                </div>

                {/* Forms Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Internship Application Form */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold text-lime-400">Internship Application</h3>
                        <p className="text-white/70 mt-2">
                            Apply for an internship at Quriouz Mankey and gain real-world experience in tech, media, and development.
                        </p>

                        {isSubmittedIntern ? (
                            <div className="text-center mt-6">
                                <h3 className="text-xl font-medium text-lime-400">
                                    🎉 Application Submitted!
                                </h3>
                                <p className="text-white/70 mt-2">
                                    Thank you for applying! We will get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={(e) => handleFormSubmit(e, "intern")} className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="johndoe@example.com"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+91 98765 43210"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Upload Resume (PDF)</label>
                                    <input
                                        type="file"
                                        name="resume"
                                        accept=".pdf"
                                        required
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white"
                                    />
                                </div>
                                <button type="submit" className="w-full py-3 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-500 transition">
                                    Apply Now
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Experienced Professional Application Form */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold text-lime-400">Experienced Professionals</h3>
                        <p className="text-white/70 mt-2">
                            Looking for a new challenge? Join Quriouz Mankey as an experienced developer, designer, or manager.
                        </p>

                        {isSubmittedExperienced ? (
                            <div className="text-center mt-6">
                                <h3 className="text-xl font-medium text-green-400">
                                    🎉 Application Submitted!
                                </h3>
                                <p className="text-white/70 mt-2">
                                    Thank you for applying! We will review your profile and reach out.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={(e) => handleFormSubmit(e, "experienced")} className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Jane Doe"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="janedoe@example.com"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+91 98765 43210"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white/70">Upload Resume (PDF)</label>
                                    <input
                                        type="file"
                                        name="resume"
                                        accept=".pdf"
                                        required
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white"
                                    />
                                </div>
                                <button type="submit" className="w-full py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition">
                                    Apply Now
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}
