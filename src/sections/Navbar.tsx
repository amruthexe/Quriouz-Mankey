"use client";
import Link from 'next/link';
import Image from "next/image";

import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "OurServices", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" }, 
    { label: "ContactUs", href: "/contactus" },
    { label: "AboutUs", href: "/aboutus" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className=" lg:py-10 py-6 fixed w-full top-0 z-50">
                <div className="container  max-w-8xl">
                    <div className="border py-2 border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 items-center md:pr-2">
                            <div>
                                <h1 className='font-sans font-bold pl-5  text-2xl'>Quriouz Mankey</h1>
                            </div>
                            <div className="lg:flex text-lg w-full justify-center items-center hidden">
                                <nav className="flex gap-6 font-bold w-full justify-between">
                                    {navLinks.map((link) => (
                                        <Link href={link.href} key={link.label} className="text-white hover:text-green-400">
                                            {link.label}
                                        </Link>
                                    ))}

                                    
                                </nav>
                            </div>

                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>
                              
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <Link href={link.href} key={link.label} className="text-white hover:text-green-400">
                                                {link.label}
                                            </Link>
                                        ))}
                                        <Button variant="primary"
                                            className="shining-buttons"
                                            onClick={() =>
                                                window.open(
                                                    "https://wa.me/917207251404",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            Book A Call
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
