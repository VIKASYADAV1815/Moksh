"use client";

import { motion } from "framer-motion";
import AboutMockup from "./AboutMockup";

const stats = [
  { label: "18+ yrs of Experience", border: "border-pink-400", text: "text-slate-900" },
  { label: "Best Service", border: "border-blue-500", text: "text-slate-900" },
  { label: "Onsite Support", border: "border-orange-400", text: "text-slate-900" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative flex justify-center"
          >
            <AboutMockup />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              About{" "}
              <span className="text-blue-600">Moksh Communication?</span>
            </h2>
            <p className="mt-3 text-lg text-slate-500 italic">
              &ldquo;Leading Digital Marketing Company in Bangalore&rdquo;
            </p>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Moksh Communication is a leading digital marketing agency based in Bangalore with over{" "}
              <strong className="text-slate-900 font-semibold">18+ years of experience</strong> in
              advertising and online marketing. We help businesses grow their online presence through
              result-driven strategies including SEO, Google Ads, PPC advertising, social media
              marketing, website design, and graphic design.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Our team of experienced Google Ads specialists focuses on creating data-driven campaigns
              that generate quality leads and improve return on investment. We work with startups,
              small businesses, and established brands to build strong digital visibility and achieve
              measurable growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className={`flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 ${stat.border} bg-white shadow-sm`}
                >
                  <span className={`text-center text-xs sm:text-sm font-bold leading-tight px-2 ${stat.text}`}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
