"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "What is Quriouz Mankey Pvt Ltd?",
        answer: "Quriouz Mankey Pvt Ltd is a bootstrapped startup that provides workshops, internships, skill-oriented training, and academic project support. We also offer filmmaking, web development, app development, and media-related services.",
    },
    {
        question: "Who is the founder of Quriouz Mankey Pvt Ltd?",
        answer: "The founder of Quriouz Mankey Pvt Ltd is Yogendra Babu Sonti.",
    },
    {
        question: "Is Quriouz Mankey a registered company?",
        answer: "Yes, Quriouz Mankey Pvt Ltd is a legally registered company.",
    },
    {
        question: "Where is Quriouz Mankey located?",
        answer: "We operate in multiple locations, offering both online and offline training. Visit our Contact Us page for specific location details.",
    },
    {
        question: "Does Quriouz Mankey accept investors or funding?",
        answer: "No, we are a bootstrapped startup and do not accept external funding.",
    },
    {
        question: "How can I contact Quriouz Mankey Pvt Ltd?",
        answer: "You can reach us via our website, email, or social media platforms. Visit our Contact Us page for details.",
    },
    {
        question: "What industries does Quriouz Mankey serve?",
        answer: "We cater to the IT, media, filmmaking, education, and corporate training industries.",
    },
    {
        question: "What kind of training programs does Quriouz Mankey offer?",
        answer: "We provide training in Web Development, App Development, AI/ML, Cloud Computing, Ethical Hacking, and more.",
    },
    {
        question: "Are the training programs available online or offline?",
        answer: "We offer both online and offline training, depending on the course and availability.",
    },
    {
        question: "Who can apply for the internship programs?",
        answer: "Our internship programs are open to BTech, MTech, MCA, and other degree students looking for hands-on experience.",
    },
    {
        question: "Do the training programs provide industry-recognized certifications?",
        answer: "Yes, all our training and internship programs come with industry-recognized certifications.",
    },
    {
        question: "What is the duration of the training and internship programs?",
        answer: "The duration varies by course, typically ranging from 4 weeks to 6 months.",
    },
    {
        question: "How are the courses structured (live, recorded, or hybrid)?",
        answer: "We provide live sessions, recorded materials, and hybrid models depending on the course.",
    },
    {
        question: "Do you provide hands-on projects during training?",
        answer: "Yes, we emphasize hands-on learning with real-world projects.",
    },
    {
        question: "Do you offer placement assistance after training?",
        answer: "Yes, we provide resume building, interview preparation, and job referrals.",
    },
    {
        question: "What makes your training different from other institutes?",
        answer: "We offer affordable, industry-oriented, hands-on training with live projects and expert mentorship.",
    },
    {
        question: "What types of academic projects do you offer?",
        answer: "We assist with BTech, MTech, MCA, and degree projects in AI, IoT, cloud computing, and software development.",
    },
    {
        question: "Can students get a customized project as per university guidelines?",
        answer: "Yes, we provide tailored projects based on university requirements.",
    },
    {
        question: "Do you provide full project documentation?",
        answer: "Yes, we provide complete project reports, PPTs, and source codes.",
    },
    {
        question: "How can I apply for academic project assistance?",
        answer: "You can apply through our website by filling out the project request form or contacting us directly.",
    },
    {
        question: "What kind of filmmaking services do you provide?",
        answer: "We offer short films, advertisements, video editing, scriptwriting, and cinematography.",
    },
    {
        question: "Do you offer media production for businesses and startups?",
        answer: "Yes, we create promotional videos, corporate ads, and branding content.",
    },
    {
        question: "Can Quriouz Mankey handle corporate video production?",
        answer: "Yes, we specialize in creating high-quality corporate videos and brand storytelling.",
    },
    {
        question: "What is the LMS (Learning Management System) service provided by Quriouz Mankey?",
        answer: "We develop Learning Management Systems (LMS) for EdTech companies, offering custom solutions for online education.",
    },
    {
        question: "Can Quriouz Mankey develop a custom LMS for my institute?",
        answer: "Yes, we create tailor-made LMS solutions based on your institution’s needs.",
    },
    {
        question: "How much do your training programs cost?",
        answer: "Our training programs are highly affordable. Visit our Courses page or contact us for detailed pricing.",
    },
    {
        question: "Do you offer installment payment options?",
        answer: "Yes, installment plans are available for long-term courses. Contact us for details.",
    },
    {
        question: "Are there any hidden charges apart from the course fee?",
        answer: "No, the fee covers all materials, mentorship, and certification.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, debit/credit cards, net banking, and wallets for easy transactions.",
    },
    {
        question: "Why should I choose Quriouz Mankey for training instead of other institutes?",
        answer: "We offer industry-relevant training, hands-on experience, expert mentors, and placement assistance at an affordable cost.",
    },
];


export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section className="py-20 sm:py-24">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-3xl sm:text-5xl font-medium mt-6 text-center max-w-3xl mx-auto">
                    Questions? We&apos;ve got <span className="text-lime-400">answers</span>
                </h2>
                <div className="mt-10 flex flex-col gap-6 max-w-2xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-xl border border-white/10 p-5 sm:p-6 cursor-pointer"
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={() =>
                                    setSelectedIndex((prev) =>
                                        prev === faqIndex ? null : faqIndex
                                    )
                                }
                            >
                                <h3 className="font-medium text-base sm:text-lg">
                                    {faq.question}
                                </h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{ height: "auto", marginTop: 16 }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm sm:text-base text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
