"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpeedOfThought() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Google Ads",
      desc: "Search and display campaigns that drove 3x lead growth for Bangalore retail brands.",
      icon: "ads"
    },
    {
      id: 1,
      title: "SEO Projects",
      desc: "Organic ranking improvements that increased traffic by 180% within six months.",
      icon: "seo"
    },
    {
      id: 2,
      title: "Social Media",
      desc: "Facebook and Instagram campaigns with high engagement and quality lead generation.",
      icon: "social"
    },
    {
      id: 3,
      title: "Web Design",
      desc: "Modern, responsive websites built for credibility, speed, and conversion.",
      icon: "web"
    }
  ];

  const contentData = [
    {
      heading: "E-commerce Lead Gen",
      subheading: "Google Search & Shopping ads for a Bangalore retailer.",
      placeholder: "Target high-intent buyers in Karnataka",
      suggestions: ["Search campaign setup", "Shopping feed optimization", "Remarketing audiences", "Conversion tracking"],
      bgElements: [
        { className: "absolute left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-slate-100 rotate-45 transform skew-x-12 opacity-80" },
        { className: "absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 rotate-45 transform skew-y-12 blur-2xl" },
        { className: "absolute right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-slate-200 rotate-12 shadow-2xl" }
      ]
    },
    {
      heading: "Local SEO Growth",
      subheading: "Ranked #1 for competitive keywords in Bangalore market.",
      placeholder: "digital marketing company bangalore",
      suggestions: ["On-page optimization", "Technical SEO audit", "Link building strategy", "Content marketing plan"],
      bgElements: [
        { className: "absolute left-20 top-20 w-24 h-24 rounded-full bg-emerald-500/20 blur-xl" },
        { className: "absolute right-20 bottom-20 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl" },
        { className: "absolute right-32 top-1/2 -translate-y-1/2 w-40 h-40 border-4 border-slate-100 rounded-full border-dashed animate-pulse" }
      ]
    },
    {
      heading: "Social Ad Campaign",
      subheading: "Meta ads driving brand awareness and qualified leads.",
      placeholder: "Launch Instagram lead generation campaign",
      suggestions: ["Audience targeting", "Creative A/B testing", "Lookalike audiences", "Retargeting funnels"],
      bgElements: [
        { className: "absolute left-10 top-10 right-10 bottom-10 bg-slate-50/50 rounded-xl border border-slate-100" },
        { className: "absolute left-1/4 top-1/3 w-32 h-32 bg-orange-500/10 blur-xl rounded-full" },
        { className: "absolute right-1/4 bottom-1/3 w-40 h-40 bg-rose-500/10 blur-xl rounded-full" }
      ]
    },
    {
      heading: "Corporate Website",
      subheading: "Full-stack website with CMS and analytics integration.",
      placeholder: "Build a professional business website",
      suggestions: ["Responsive design", "CMS setup", "Speed optimization", "SEO-ready structure"],
      bgElements: [
        { className: "absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-100" },
        { className: "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-100" },
        { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-100 rounded-full" }
      ]
    }
  ];

  const current = contentData[activeTab];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white relative z-20 overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">Our Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              See our recent projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Real campaigns and websites we&apos;ve delivered for startups, small businesses, and established brands across Bangalore.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`text-left p-6 rounded-2xl transition-all duration-300 relative border overflow-hidden group ${
                activeTab === tab.id
                  ? "bg-white border-slate-300 shadow-lg scale-[1.02] z-10"
                  : "bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 transition-all duration-300 ${activeTab === tab.id ? 'bg-gradient-to-br from-blue-50/50 to-purple-50/30' : 'bg-transparent'}`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {tab.icon === "ads" && <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />}
                      {tab.icon === "seo" && <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />}
                      {tab.icon === "social" && <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />}
                      {tab.icon === "web" && <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                    </svg>
                  </span>
                  <h3 className={`font-bold ${activeTab === tab.id ? "text-slate-900" : "text-slate-600"}`}>
                    {tab.title}
                  </h3>
                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="ml-auto"
                    >
                      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  )}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {tab.desc}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Box with Advanced Masking */}
        <div className="relative mx-auto max-w-4xl">
          {/* Outer glow effect */}
          <div className="absolute -inset-6 bg-gradient-to-b from-purple-100/30 to-transparent rounded-3xl blur-2xl pointer-events-none" />
          
          {/* Main container with mask */}
          <div 
            className="relative h-[500px] overflow-hidden rounded-3xl"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Premium Card Background */}
                <div className="w-full h-full bg-gradient-to-br from-white via-slate-50/50 to-white rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.08)] border border-slate-200/80 flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Animated background shapes */}
                  {current.bgElements.map((element, idx) => (
                    <motion.div
                      key={idx}
                      className={element.className}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    />
                  ))}

                  {/* Content Overlay */}
                  <motion.div 
                    className="relative z-10 flex flex-col items-center w-full px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl flex items-center justify-center mb-6 border border-white/20"
                    >
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    
                    {/* Heading */}
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      {current.heading}
                    </motion.h3>

                    {/* Subheading */}
                    <motion.p 
                      className="text-base text-slate-600 font-medium mb-8 text-center max-w-md"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {current.subheading}
                    </motion.p>

                    {/* Input Box */}
                    <motion.div 
                      className="w-full sm:w-[480px] bg-white rounded-2xl shadow-lg border border-slate-200 p-3 flex items-center gap-3 mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      whileHover={{ boxShadow: "0 0 40px rgba(147, 51, 234, 0.1)" }}
                    >
                      <input 
                        type="text" 
                        placeholder={current.placeholder}
                        className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-slate-800 placeholder-slate-400 font-medium"
                        readOnly
                      />
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white hover:shadow-lg transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"/></svg>
                      </motion.button>
                    </motion.div>

                    {/* Suggestion Pills */}
                    <motion.div 
                      className="flex flex-wrap justify-center gap-2 max-w-2xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {current.suggestions.map((suggestion, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(147, 51, 234, 0.15)" }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-600 bg-white/80 hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm hover:border-purple-300"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom fade overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}