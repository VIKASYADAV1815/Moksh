"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

function StarRating({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          className="w-4 h-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.06, type: "spring", stiffness: 260, damping: 18 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
}

function Avatar({ src, alt, size = "md" }: { src: string; alt: string; size?: "md" | "lg" }) {
  const dim = size === "lg" ? 64 : 48;
  const ring = size === "lg" ? "ring-4" : "ring-2";

  return (
    <motion.div
      className="relative shrink-0"
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <Image
        src={src}
        alt={alt}
        width={dim}
        height={dim}
        className={`rounded-full object-cover ${ring} ring-white shadow-lg`}
      />
      <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </motion.div>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder",
    company: "Retail Brand, Bangalore",
    text: "Moksh Communication tripled our Google Ads leads in just two months. Their team understands the Bangalore market and delivers real ROI.",
    img: "https://i.pravatar.cc/150?img=12",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "Tech Startup",
    text: "Our SEO rankings jumped from page 3 to page 1 for key terms. Organic traffic is up 180% and still growing every month.",
    img: "https://i.pravatar.cc/150?img=32",
    featured: false,
  },
  {
    id: 3,
    name: "Arun Mehta",
    role: "Business Owner",
    company: "Local Services Co.",
    text: "From Facebook ads to a brand-new website — Moksh handled everything. Professional, responsive, and genuinely invested in our growth.",
    img: "https://i.pravatar.cc/150?img=47",
    featured: false,
  },
];

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />
      <motion.div
        className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100/80 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Testimonials
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
            Trusted by businesses across Bangalore
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Hear from clients who grew their online presence with Moksh Communication&apos;s data-driven digital marketing strategies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="lg:col-span-7 group bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/70 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(37,99,235,0.08)] hover:border-blue-200/60 transition-[box-shadow,border-color] duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-100/40 blur-2xl pointer-events-none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-col sm:flex-row gap-8">
              <div className="flex-1">
                <motion.svg
                  className="w-10 h-10 text-blue-200 mb-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </motion.svg>
                <StarRating delay={0.2} />
                <blockquote className="mt-5 text-xl sm:text-2xl font-medium text-slate-900 leading-snug tracking-tight">
                  &ldquo;{featured.text}&rdquo;
                </blockquote>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-center gap-4 sm:pt-2">
                <Avatar src={featured.img} alt={featured.name} size="lg" />
                <div className="text-center sm:text-right">
                  <p className="font-semibold text-slate-900">{featured.name}</p>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {featured.role}
                  </p>
                  <p className="text-xs text-blue-600 font-medium mt-1">{featured.company}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {rest.map((testimonial, idx) => (
              <motion.article
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -5, x: 2, transition: { duration: 0.25 } }}
                className="group flex-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/70 p-6 sm:p-7 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(37,99,235,0.07)] hover:border-blue-200/50 transition-[box-shadow,border-color] duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <StarRating delay={0.3 + idx * 0.1} />
                    <motion.svg
                      className="w-5 h-5 text-slate-200 group-hover:text-blue-200 transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </motion.svg>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <footer className="mt-5 flex items-center gap-3 pt-5 border-t border-slate-100/80">
                    <Avatar src={testimonial.img} alt={testimonial.name} size="md" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </footer>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
