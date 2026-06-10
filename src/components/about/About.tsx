"use client";

import { motion } from "framer-motion";

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
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-blue-50/80 scale-90" />
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 p-4">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="h-8 rounded-lg bg-slate-100 flex items-center px-3 text-xs text-slate-400">
                  Search engine optimization...
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded bg-slate-100 w-full" />
                  <div className="h-2 rounded bg-slate-100 w-4/5" />
                  <div className="h-2 rounded bg-blue-100 w-3/5" />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 right-4"
              >
                <svg className="w-20 h-20 text-blue-600/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 14h6l-1 8 9-12h-6l0-8z" />
                </svg>
              </motion.div>
              <div className="absolute bottom-20 left-4 w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
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
