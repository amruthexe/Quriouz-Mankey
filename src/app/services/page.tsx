"use client";

import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { motion } from "framer-motion";
import { Code, Cpu, Server, CircuitBoard, Database, Zap } from "lucide-react";

export default function Services() {
    const branches = [
        {
            name: "Computer Science Engineering (CSE)",
            icon: <Code className="text-lime-400" />,
            courses: [
                "Java Full Stack",
                "Python Full Stack",
                "Artificial Intelligence (AI)",
                "Machine Learning (ML)",
                "Data Science",
                "Cyber Security",
                "Cloud Computing",
            ],
        },
        {
            name: "Electronics & Communication Engineering (ECE)",
            icon: <CircuitBoard className="text-blue-400" />,
            courses: [
                "Embedded Systems",
                "VLSI Design",
                "Signal Processing",
                "IoT & Automation",
                "Wireless Communication",
            ],
        },
        {
            name: "Electrical Engineering (EE)",
            icon: <Zap className="text-yellow-400" />,
            courses: [
                "Power Systems",
                "Electric Vehicles (EV)",
                "Industrial Automation",
                "Smart Grid Technologies",
                "Renewable Energy",
            ],
        },
        {
            name: "Information Technology (IT)",
            icon: <Server className="text-purple-400" />,
            courses: [
                "Web Development",
                "App Development",
                "Cloud Computing & DevOps",
                "Cyber Security",
                "Blockchain Development",
            ],
        },
        {
            name: "Mechanical Engineering (ME)",
            icon: <Cpu className="text-red-400" />,
            courses: [
                "CAD & CAM",
                "Automobile Engineering",
                "Robotics & AI",
                "3D Printing",
                "Industrial Automation",
            ],
        },
        {
            name: "Data Science & AI",
            icon: <Database className="text-teal-400" />,
            courses: [
                "Big Data Analytics",
                "Deep Learning",
                "Natural Language Processing",
                "Data Visualization",
            ],
        },
    ];

    return (
      <>
      <Navbar/>
        <section className="py-24 bg-black text-white">
            <div className="container px-6 sm:px-12 lg:px-20">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-medium"
                        whileHover={{ scale: 1.05 }}
                    >
                        Our <span className="text-lime-400">Training Programs</span>
                    </motion.h2>
                    <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                        Explore our industry-focused training programs designed for different engineering branches. 
                        Gain hands-on experience in trending technologies.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-md transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {branch.icon}
                                <h3 className="text-2xl font-semibold">{branch.name}</h3>
                            </div>
                            <ul className="text-white/80 space-y-2">
                                {branch.courses.map((course, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-lime-400">✔</span> {course}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
      </>
    );
}
