"use client";

import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Users, Lock, Phone, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* Responsive adjustments: py-16 for mobile, py-24 for larger screens, tighter container padding on mobile (px-4) */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="container px-4 sm:px-8 lg:px-20 mx-auto">
          {/* Main Title Section */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              // Responsive Font Size: text-3xl for mobile, sm:text-4xl, md:text-5xl
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
              // Keep motion, but hover effects are more visible on desktop
              whileHover={{ scale: 1.02 }}
            >
              Privacy <span className="text-lime-400">Policy</span>
            </motion.h1>
            <p className="text-white/70 mt-3 text-sm sm:text-base">
              Last Updated: <span className="text-lime-400">28 October 2025</span>
            </p>
            <p className="text-white/70 mt-1 text-sm sm:text-base">
              Developed By: <span className="text-lime-400">Quriouz Mankey Pvt Ltd</span>
            </p>
            <p className="text-white/70 mt-1 text-xs sm:text-sm">MIG - 328, Road No. 4, KPHB, Hyderabad - 500085, Telangana, India</p>
          </div>

          {/* Policy Articles Container */}
          <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8">
            
            {/* ARTICLE TEMPLATE: Reduced padding p-6 for mobile */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }} // Slightly reduced translate for mobile feel
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <ShieldCheck className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">1. Introduction</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                Welcome to Sahasa Veera! This Privacy Policy describes how Quriouz Mankey Pvt Ltd ("we,"
                "our," or "us") collects, uses, and protects information when you play the Sahasa Veera
                mobile game (the "App"). We respect your privacy and are committed to protecting your data
                while providing a safe and enjoyable gaming experience.
              </p>
            </motion.article>

            {/* 2. Information We Collect */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <FileText className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">2. Information We Collect</h2>
              </div>

              <h3 className="text-lime-400 font-semibold mt-2 text-base sm:text-lg">a. Non-Personal Information</h3>
              <ul className="text-white/80 list-disc list-inside mt-2 space-y-1 text-sm sm:text-base">
                <li>Device details (such as model, operating system version, device identifiers).</li>
                <li>Gameplay-related data (progress, scores, levels completed, in-game preferences).</li>
                <li>Crash reports, performance analytics, and usage statistics to help improve the game.</li>
              </ul>

              <h3 className="text-lime-400 font-semibold mt-4 text-base sm:text-lg">b. Personal Information</h3>
              <p className="text-white/80 mt-2 text-sm sm:text-base">
                We do not collect personally identifiable information (PII) such as your name, email, phone
                number, or address unless you voluntarily provide it (for example, if you contact us for support).
              </p>
            </motion.article>

            {/* 3. How We Use Information */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <Users className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">3. How We Use Information</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                The information we collect is used solely to:
              </p>
              <ul className="text-white/80 list-disc list-inside mt-2 space-y-1 text-sm sm:text-base">
                <li>Enhance the gameplay experience and improve game performance.</li>
                <li>Diagnose bugs and technical issues.</li>
                <li>Analyze player engagement and optimize game features.</li>
                <li>Respond to player support queries or feedback.</li>
              </ul>
              <p className="text-white/80 mt-3 text-sm sm:text-base">
                We do not sell, rent, or share your data with third parties for marketing purposes.
              </p>
            </motion.article>

            {/* 4. Data Security */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <Lock className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">4. Data Security</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                We take appropriate technical and organizational measures to protect user information from
                unauthorized access, disclosure, or misuse. Although no system is completely secure, we
                continuously monitor and update our systems to maintain high security standards.
              </p>
            </motion.article>

            {/* 5. Third-Party Services */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <ShieldCheck className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">5. Third-Party Services</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                Sahasa Veera may use trusted third-party tools and services such as analytics tools (for
                understanding gameplay patterns and app performance), ad services (if applicable) to show
                relevant advertisements, and Apple Game Center or similar gaming platforms for achievements
                or leaderboards. These third-party providers have their own privacy policies. We encourage
                users to review them to understand how they handle your data.
              </p>
            </motion.article>

            {/* 6. Children’s Privacy */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <Users className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">6. Children’s Privacy</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                Our game is suitable for general audiences. We do not knowingly collect personal data from
                children under 13 years of age. If you believe that a child has provided personal information,
                please contact us — we will promptly delete such data.
              </p>
            </motion.article>

            {/* 7. User Rights */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <Mail className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">7. User Rights</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                You have the right to:
              </p>
              <ul className="text-white/80 list-disc list-inside mt-2 space-y-1 text-sm sm:text-base">
                <li>Access or request deletion of any personal data you may have shared with us.</li>
                <li>Withdraw consent to data processing (if applicable).</li>
                <li>Contact us for clarification about how your data is used.</li>
              </ul>
              <p className="text-white/80 mt-3 text-sm sm:text-base">To exercise these rights, reach us through the contact details below.</p>
            </motion.article>

            {/* 8. Contact Us */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <Phone className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">8. Contact Us</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">For any questions or concerns regarding this Privacy Policy or data practices, please contact:</p>

              <ul className="text-white/80 mt-3 space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <a href="mailto:quriouzmankey.connect@gmail.com" className="text-lime-400 hover:text-lime-300 transition-colors">quriouzmankey.connect@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lime-400 font-bold flex-shrink-0">🏢</span>
                  <span>Quriouz Mankey Pvt Ltd</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold flex-shrink-0">📍</span>
                  <span>MIG - 328, Road No. 4, KPHB, Hyderabad - 500085, Telangana, India</span>
                </li>
              </ul>
            </motion.article>

            {/* 9. Updates to This Policy */}
            <motion.article
              className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <FileText className="text-lime-400 mt-0.5 sm:mt-0 w-6 h-6 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold">9. Updates to This Policy</h2>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. All updates will be posted on our official website, and the "Last Updated"
                date will be revised accordingly. Continued use of the Sahasa Veera game after any such updates
                constitutes your acknowledgment and acceptance of the changes.
              </p>
            </motion.article>

            {/* Final Statement */}
            <motion.article className="text-center text-white/80 pt-4 pb-8 sm:pb-4">
              <p className="mt-6 text-sm sm:text-base">By using the Sahasa Veera game, you agree to this Privacy Policy.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}