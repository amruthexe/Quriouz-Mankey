"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Github, MessageCircle } from "lucide-react";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export default function ContactUs() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const form = event.currentTarget;

        try {
            const response = await fetch("https://getform.io/f/anllrkna", {
                method: "POST",
                body: new FormData(form),
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        Get in <span className="text-lime-400">Touch</span>
                    </motion.h2>
                    <p className="text-white/70 mt-4">
                        Have questions or want to start your project? Fill out the form below, and we’ll get back to you shortly!
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Contact Information & Social Links */}
                    <motion.div
                        className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col space-y-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center gap-4">
                            <Mail className="text-lime-400" />
                            <div>
                                <h4 className="text-lg font-semibold">Email</h4>
                                <p className="text-white/70">quriouzmankey.connect@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-lime-400" />
                            <div>
                                <h4 className="text-lg font-semibold">Phone</h4>
                                <p className="text-white/70">+91 72072 51404</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="text-lime-400" />
                            <div>
                                <h4 className="text-lg font-semibold">Address</h4>
                                <p className="text-white/70">Hyderabad, India</p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <h4 className="text-lg font-semibold mt-6">Follow Us</h4>
                        <div className="flex space-x-4">
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

                        {/* WhatsApp Contact */}
                        <a
                            href="https://wa.me/917207251404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-500 transition"
                        >
                            <MessageCircle className="mr-2" />
                            Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-neutral-900 border border-white/10 rounded-3xl p-8"
                        whileHover={{ scale: 1.02 }}
                    >
                        {isSubmitted ? (
                            <div className="text-center">
                                <h3 className="text-2xl font-medium text-lime-400">
                                    🎉 Message Sent Successfully!
                                </h3>
                                <p className="text-white/70 mt-4">
                                    Thank you for reaching out. We will get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/70">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="johndoe@example.com"
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Write your message..."
                                        rows={4}
                                        className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-lime-400"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full py-3 font-medium rounded-lg transition ${
                                        isSubmitting
                                            ? "bg-gray-500 cursor-not-allowed"
                                            : "bg-lime-400 hover:bg-lime-500 text-black"
                                    }`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : (
                                        <span className="flex items-center justify-center">
                                            <Send className="mr-2" /> Send Message
                                        </span>
                                    )}
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
