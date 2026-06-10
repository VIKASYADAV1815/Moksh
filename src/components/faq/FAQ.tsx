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
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
        open
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-slate-200 bg-slate-50 text-slate-500"
      }`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    <section id="faq" className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Everything you need to know about getting started with Mokshadagency. Can&apos;t find what you&apos;re looking for?
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Still need help?</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Our support team typically replies within a few hours on business days.
                  </p>
                  <Link
                    href="mailto:chand.mahaveer@gmail.com"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Contact support
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/30 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="w-full px-5 sm:px-6 py-5 flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base sm:text-[1.05rem] font-semibold text-slate-900 pr-2">
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
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-slate-600 leading-relaxed">
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
