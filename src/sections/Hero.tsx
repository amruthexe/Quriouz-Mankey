"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.jpg";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: -100, y: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5 },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);

    return (
        <section
            className="py-24 overflow-x-clip relative"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="container relative">
                {/* Left Design Image */}
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 50, x: -50 }}
                    className="absolute left-[-200px] md:left-[-100px] top-10 hidden lg:block"
                    drag
                >
                    <Image
                        src={designExample1Image}
                        alt="Design Example 1"
                        draggable="false"
                        className="w-60 md:w-80 lg:w-80 object-contain"
                    />
                </motion.div>

                {/* Left Pointer */}
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, x: -150, y: 80 }}
                    className="absolute left-[-150px] md:left-[-120px] top-72 hidden lg:block"
                >
                    <Pointer name="jason" color="red" />
                </motion.div>

                {/* Right Design Image */}
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 80, y: 50 }}
                    drag
                    className="absolute right-[-250px] md:right-[-100px] top-10 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        alt="Design Example 2"
                        draggable="false"
                        className="w-40 md:w-80 lg:w-80 object-contain"
                    />
                </motion.div>

                {/* Right Pointer */}
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 200, y: 50 }}
                    className="absolute right-[-150px] md:right-[-220px] top-40 hidden lg:block"
                >
                    <Pointer name="amruth" color="green" />
                </motion.div>

                {/* Tagline */}
                <div className="flex justify-center">
                    <div className="flex items-center justify-center py-2 px-4 bg-gradient-to-r from-blue-500 to-green-400 rounded-full text-white text-sm md:text-base font-semibold mx-auto">
                        ⚡ Effortless Innovation 📈 
                    </div>
                </div>

                {/* Hero Title */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Innovate Learn <br /> Grow Succeed{" "}
                </h1>

                {/* Description */}
                <p className="text-center text-lg md:text-xl text-white/80 mt-8 max-w-2xl mx-auto">
                    🚀 Unlock Your Potential! Gain hands-on expertise in Python Full Stack, AI, and Cloud with industry-focused training. Learn from experts, work on real-world projects, and accelerate your career with future-ready skills. Start your journey today!
                </p>

                {/* Call-to-Action Button */}
                <div className="flex flex-col md:flex-row justify-center md:ml-14 mt-14 gap-4">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Button
                            variant="secondary"
                            className="shining-button font-extrabold w-full sm:w-auto text-center"
                            size="sm"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/917207251404",
                                    "_blank"
                                )
                            }
                        >
                            Book a Call Now 🔥 
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
