"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `We provide industry-focused training in Python Full Stack, AI, and Cloud, bridging the gap between education and real-world applications.`;

const words = text.split(" ");

export default function Introduction() {
    const scrollTargetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTargetRef,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useMotionValueEvent(wordIndex, "change", (latest) => {
        setCurrentWord(latest);
    });

    return (
        <section className="py-20 md:py-28 lg:py-36">
            <div className="container px-4 md:px-8">
                <div className="sticky top-16 md:top-24 lg:top-32">
                    <div className="flex justify-center">
                        <Tag>Introducing Quriouz Mankey</Tag>
                    </div>

                    <div className="text-2xl md:text-4xl lg:text-6xl text-center font-medium mt-8 leading-snug">
                        <span className="block">Your career deserves more than just learning;</span>
                        <span className="block">it deserves transformation.</span>
                        <span className="mt-4 block">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        index < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block mt-6">
                            That&apos;s why we built <br className="hidden md:block" /> Quriouz Mankey.
                        </span>
                    </div>
                </div>

                {/* Adjust height dynamically for better mobile experience */}
                <div className="h-[100vh] md:h-[100vh]" ref={scrollTargetRef}></div>
            </div>
        </section>
    );
}
