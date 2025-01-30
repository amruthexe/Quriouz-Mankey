"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <section className="py-16 md:py-24  text-white">
            <div className="container px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-medium mb-10 md:mb-14 text-lime-400">
    Our <span className="text-white">Mission</span>  And <span className="text-white">Vision</span>
</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
               
                    
                    {/* Mission Card */}
                    <motion.div
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 1, opacity: 0.85 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative group bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-lg text-center transition-all duration-500 w-full max-w-sm md:max-w-md lg:max-w-lg"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-lime-400">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-white/80 group-hover:text-white transition-all duration-500">
                            To empower future tech leaders by providing world-class Python Full Stack, AI, and Cloud training.  
                            We bridge the gap between education and industry through hands-on learning, mentorship, and career support.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-lime-400 rounded-2xl"
                        />
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 1, opacity: 0.85 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative group bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-lg text-center transition-all duration-500 w-full max-w-sm md:max-w-md lg:max-w-lg"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-lime-400">
                            Our Vision
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-white/80 group-hover:text-white transition-all duration-500">
                            To revolutionize education by making strong tech skills accessible and industry-relevant.  
                            We aim to create a future where every student has the skills and confidence to thrive in the global tech ecosystem.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-green-400 rounded-2xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
