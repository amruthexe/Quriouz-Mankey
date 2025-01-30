"use client";

import { useState } from "react";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        const form = event.currentTarget;

        // Use fetch to send the form data to Getform.io
        fetch("https://getform.io/f/anllrkna", {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => {
                if (response.ok) {
                    setIsSubmitted(true); // Show the success message
                    form.reset(); // Reset the form
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch(() => alert("An error occurred. Please try again later."));
    };

    return (
        <section className="py-20 sm:py-24" id="contact">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-5xl font-medium">
                        Get in <span className="text-lime-400">Touch</span>
                    </h2>
                    <p className="text-white/70 mt-4">
                        Have questions or want to start your project? Fill out the form below, and we&apos;ll get back to you shortly!
                    </p>
                </div>

                <div className="mt-10 max-w-lg mx-auto bg-neutral-900 border border-white/10 rounded-3xl p-8">
                    {isSubmitted ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-medium text-lime-400">
                                🎉 Message Sent Successfully!
                            </h3>
                            <p className="text-white/70 mt-4">
                                Thank you for reaching out. We&apos;ll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} noValidate>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-white/70"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Amruth Raj"
                                    className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white/70"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="amruthexe@gmail.com"
                                    id="email"
                                    name="email"
                                    className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    required
                                />
                            </div>

                            {/* 📌 Phone Number Field */}
                            <div className="mb-6">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-white/70"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    id="phone"
                                    name="phone"
                                    pattern="^\+?[0-9]{10,14}$"
                                    className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    required
                                />
                                <small className="text-white/50 block mt-1">
                                    Enter a valid phone number with country code.
                                </small>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-white/70"
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder="Im Interested  let&apos;s connect!"
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-500 transition"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
