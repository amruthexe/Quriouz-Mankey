"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export default function AboutUs() {
    return (
        <>
        <Navbar/>
        <section className="py-16 sm:py-24 bg-black text-white">
            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center">
                    <Tag>About Us</Tag>
                    <h2 className="text-4xl sm:text-5xl font-medium mt-6">
                        Welcome to <span className="text-lime-400">Quriouz Mankey Pvt Ltd</span>
                    </h2>
                    <p className="text-white/70 mt-4 max-w-3xl mx-auto">
                        Quriouz Mankey Pvt Ltd is a bootstrapped startup focused on bridging the gap between education and industry by providing hands-on training, internships, academic project support, and digital media services. 
                        Our goal is to equip students and professionals with real-world skills at an affordable cost, eliminating the need to relocate for quality education and career growth.
                    </p>
                </div>

                {/* Founder & Director Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold text-lime-400">
                            Yogendra Babu Sonti
                        </h3>
                        <p className="text-white/70">Founder & CEO</p>
                        <p className="mt-3 text-white/50 text-sm">
                            A visionary entrepreneur dedicated to building a tech-driven learning ecosystem. 
                            With a passion for education and technology, he has shaped Quriouz Mankey into a company that provides students with career-focused training and development opportunities.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold text-lime-500">
                            Chitra Meghana Karanam
                        </h3>
                        <p className="text-white/70">Director</p>
                        <p className="mt-3 text-white/50 text-sm">
                            Driving operational excellence and strategic growth, Chitra Meghana Karanam ensures the company delivers high-quality training and services. 
                            Her expertise in education and technology helps shape Quriouz Mankey’s future in EdTech, media, and software solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Mission, Vision & Core Values */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-3xl font-bold text-lime-500">Our Mission</h3>
                        <p className="mt-3 text-white/70">
                            To provide affordable, industry-oriented skill development through training, internships, and real-world projects. 
                            We empower students and professionals with hands-on experience, preparing them for high-growth careers.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-3xl font-bold text-lime-500">Our Vision</h3>
                        <p className="mt-3 text-white/70">
                            To revolutionize EdTech, filmmaking, and software development, making knowledge and career opportunities accessible to everyone.
                            We strive to be a leading provider of tech-driven learning solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-3xl font-bold text-lime-500">Our Core Values</h3>
                        <p className="mt-3 text-white/70">
                             Innovation: Pioneering new ways to learn and grow  <br />
                             Affordability: Making skill development accessible to all  <br />
                             Excellence: Providing top-quality education and training  <br />
                             Integrity: Ensuring trust, transparency, and ethics  <br />
                        </p>
                    </motion.div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-20">
                    <h2 className="text-4xl text-center font-medium">
                        Why Choose <span className="text-lime-400">Quriouz Mankey?</span>
                    </h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                        >
                            <h3 className="text-2xl font-bold text-blue-400">Industry-Focused Training</h3>
                            <p className="mt-3 text-white/70">
                                Our courses are designed based on real-world industry demands, ensuring students gain practical experience and job-ready skills.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                        >
                            <h3 className="text-2xl font-bold text-purple-400">Live Projects & Internships</h3>
                            <p className="mt-3 text-white/70">
                                We provide hands-on learning with real-world projects, helping students apply their knowledge and gain practical skills.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900 p-6 rounded-2xl shadow-lg text-center"
                        >
                            <h3 className="text-2xl font-bold text-orange-400">Affordable & Accessible</h3>
                            <p className="mt-3 text-white/70">
                                Our low-cost, high-value training programs ensure that quality education is within reach, eliminating the need to relocate for skill development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
          
        </section>
        <Footer/>
        </>
    );
}
