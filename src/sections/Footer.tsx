"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className=" text-white py-12">
            <div className="container px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold text-lime-400">Quriouz Mankey</h3>
                        <p className="mt-3 text-white/70 text-sm">
                            Empowering careers through internships, training, and digital solutions.  
                            Learn. Build. Grow.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold text-lime-400">Quick Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/aboutus" className="hover:text-lime-400 transition">About Us</Link></li>
                            <li><Link href="/faq" className="hover:text-lime-400 transition">FAQs</Link></li>
                            <li><Link href="/careers" className="hover:text-lime-400 transition">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-lime-400 transition">Contact</Link></li>
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold text-lime-400">Our Services</h3>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/training" className="hover:text-lime-400 transition">Training & Internships</Link></li>
                            <li><Link href="/development" className="hover:text-lime-400 transition">Web & App Development</Link></li>
                            <li><Link href="/lms" className="hover:text-lime-400 transition">LMS & EdTech Solutions</Link></li>
                        </ul>
                    </motion.div>

                    {/* Social Media & Contact */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold text-lime-400">Follow Us</h3>
                        <div className="flex space-x-4 mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="text-2xl hover:text-lime-400 transition" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="text-2xl hover:text-lime-400 transition" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="text-2xl hover:text-lime-400 transition" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="text-2xl hover:text-lime-400 transition" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="text-2xl hover:text-lime-400 transition" />
                            </a>
                        </div>
                        <p className="mt-4 text-white/70 text-sm">quriouzmankey.connect@gmail.com</p>
                        <p className="text-white/70 text-sm">📍 Hyderabad, India</p>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
                    © {new Date().getFullYear()} Quriouz Mankey Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
