"use client";

export default function GrowBusinessSection() {
    return (
        <section className="py-20 sm:py-24">
            <div>
            <h2 className="text-3xl text-center pb-12 sm:text-5xl font-medium">
                        Lets <span className="text-lime-400">Connect </span>
                    </h2>
                {/* Call to Action */}
                <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 text-center max-w-lg mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-medium text-white">
                        Ready to level up your career?
                    </h2>
                    <p className="mt-4 text-white/70">
                        Book a free career consultation today and let&apos;s discuss how we can help you master in-demand tech skills and accelerate your professional growth.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/917207251404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-500 transition"
                        >
                            Book a Free Consultation
                        </a>
                        <a
                            href="#courses"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white/70 font-medium rounded-lg hover:bg-white/10 transition"
                        >
                            Explore Courses
                        </a>
                    </div>
                    <hr className="my-6 border-white/10" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">🚀</span>
                            <p className="mt-2 text-white/70">Industry-Focused Training</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">👨‍🏫</span>
                            <p className="mt-2 text-white/70">Expert Mentorship</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">🎯</span>
                            <p className="mt-2 text-white/70">Real-World Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
