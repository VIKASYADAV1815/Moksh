"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "What services does Moksh Communication offer?",
    answer:
      "We offer Google Ads, Facebook/Instagram/LinkedIn advertising, SEO, website development, Google My Business optimization, and graphic design — all tailored to grow your online presence.",
  },
  {
    id: 2,
    question: "How long before I see results?",
    answer:
      "Paid campaigns can generate leads within days of launch. SEO typically shows meaningful ranking improvements within 3–6 months. We provide regular reports so you always know where things stand.",
  },
  {
    id: 3,
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We work with startups, small businesses, and established brands across Bangalore and India. Our strategies scale to your budget and business goals.",
  },
  {
    id: 4,
    question: "Is there a free consultation?",
    answer:
      "Absolutely. Request a free quote and our team will assess your needs, recommend the right channels, and outline a strategy — no obligation required.",
  },
  {
    id: 5,
    question: "Do you provide onsite support?",
    answer:
      "Yes. We offer onsite support for clients in Bangalore. Our team can meet in person at our Chamrajpet office or visit your location when needed.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all ${
        open
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-slate-200 bg-white text-slate-500"
      }`}
    >
      <svg className="w-4 h-4 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
        )}
      </svg>
    </span>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white relative z-20 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Content Block Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-16 lg:self-start">
            <p className="text-[13px] font-bold uppercase tracking-widest text-blue-600 mb-3">
              Support Center
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="mt-3.5 text-[15px] text-slate-500 leading-relaxed">
              Everything you need to know about getting started with our framework. Can&apos;t find what you&apos;re looking for?
            </p>

            <div className="mt-8 rounded-xl border border-slate-200/60 bg-slate-50/50 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-bold text-slate-900">Still need help?</p>
                  <p className="mt-1 text-sm text-slate-500 leading-normal">
                    Our support team typically replies within a few hours on business days.
                  </p>
                  <Link
                    href="mailto:chand.mahaveer@gmail.com"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Contact support
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion List Right */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className={`rounded-xl border transition-all duration-150 ${
                    isOpen
                      ? "border-slate-300 bg-slate-50/30"
                      : "border-slate-200/60 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base font-bold text-slate-900 pr-1 tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                    <PlusIcon open={isOpen} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[14px] text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}