"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AiFeatures() {
  // We'll use a CSS keyframe animation for the continuous smooth scroll instead of discrete states.
  // This creates a much smoother infinite marquee effect for the feedback cards.
  const comments = [
    { id: 1, name: "Alejandra Martin", time: "2h ago", text: "Please update the audience targeting for Facebook.", img: "https://i.pravatar.cc/100?img=9" },
    { id: 2, name: "Mike Bryan", time: "3h ago", text: "The new ad copy looks great, aligns perfectly with the brief.", img: "https://i.pravatar.cc/100?img=11" },
    { id: 3, name: "Sarah Connor", time: "5h ago", text: "Let's increase the daily budget on the Google Search campaign.", img: "https://i.pravatar.cc/100?img=5" },
    { id: 4, name: "David Chen", time: "1d ago", text: "A/B test results are in: Version B has a 25% higher CTR.", img: "https://i.pravatar.cc/100?img=12" },
  ];

  // Duplicate for infinite scroll illusion
  const scrollItems = [...comments, ...comments, ...comments];

  return (
    <section className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Data-driven marketing capabilities
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            From campaign strategy to live performance tracking — we turn your marketing goals into measurable results across every channel.
          </p>
        </div>

        {/* Bento Grid Layout - closer gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Card 1 - Truly Collaborative (Spans 2 columns) */}
          <div className="md:col-span-2 bg-white border border-slate-200/45 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm overflow-hidden relative">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg mb-2 sm:mb-3">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Campaign Strategy
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-10 max-w-md font-medium">
              Plan and organize multi-channel campaigns with clear timelines, budgets, and performance milestones.
            </p>
            
            <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm p-2 sm:p-4 w-full relative h-32 sm:h-48 mt-2 sm:mt-4 overflow-hidden">
              <div className="text-[8px] sm:text-xs font-bold text-slate-500 mb-2 sm:mb-4">Timeline</div>
              <div className="flex justify-between text-[7px] sm:text-[10px] text-slate-500 font-medium border-b border-slate-200 pb-1 sm:pb-2 mb-2 sm:mb-4">
                <span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span>
              </div>
              {/* Timeline blocks */}
              <div className="relative h-16 sm:h-24">
                <motion.div 
                  className="absolute left-4 sm:left-8 top-0 bg-slate-900 text-white text-[8px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="hidden sm:inline">Google Ads</span>
                  <span className="sm:hidden">Ads</span>
                </motion.div>
                <motion.div 
                  className="absolute left-20 sm:left-48 top-0 bg-white border border-slate-300 text-slate-800 shadow-sm text-[7px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 cursor-pointer"
                  whileHover={{ x: -10, scale: 1.02 }}
                >
                  <svg className="w-2 sm:w-3 h-2 sm:h-3 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
                  <span className="hidden sm:inline">SEO Campaign</span>
                  <span className="sm:hidden">SEO</span>
                </motion.div>
                <motion.div 
                  className="absolute left-12 sm:left-32 top-6 sm:top-10 bg-white border border-slate-300 text-slate-800 shadow-sm text-[7px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-slate-300"></div>
                  <span className="hidden sm:inline">Social Ads</span>
                  <span className="sm:hidden">Social</span>
                </motion.div>
                {/* Purple Launch Marker */}
                <div className="absolute right-20 top-0 bottom-0 w-px bg-purple-300 flex flex-col items-center">
                  <motion.div 
                    className="text-purple-600 italic text-xs font-serif mt-12 transform translate-x-6"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    Launch
                  </motion.div>
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Advanced Analytics */}
          <div className="bg-white border border-slate-200/45 rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
            <div className="w-full text-left">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-3">
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Performance Analytics
              </div>
              <p className="text-slate-600 text-sm mb-12 font-medium">
                Track ROI, conversions, and campaign performance with detailed reports and optimization insights.
              </p>
            </div>
            {/* Visual */}
            <div className="relative w-40 h-40 flex items-center justify-center mt-auto">
              <div className="absolute inset-0 bg-purple-500/10 rounded-full animate-pulse scale-150 blur-xl"></div>
              <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-pulse scale-110 blur-md"></div>
              <motion.div 
                className="relative w-16 h-16 bg-slate-900 rounded-full border-[6px] border-white shadow-xl z-10 flex items-center justify-center cursor-pointer"
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-6 h-6 rounded-full bg-slate-800"></div>
              </motion.div>
              <motion.div 
                className="absolute left-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center -translate-x-4 cursor-pointer"
                whileHover={{ scale: 1.2, x: -8 }}
              >
                 <div className="w-3 h-3 bg-purple-300 rounded-sm rotate-45"></div>
              </motion.div>
              <motion.div 
                className="absolute right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center translate-x-4 cursor-pointer"
                whileHover={{ scale: 1.2, x: 8 }}
              >
                 <div className="w-3 h-3 bg-purple-300 rounded-sm rotate-45"></div>
              </motion.div>
            </div>
          </div>

          {/* Card 3 - Easy Integrations */}
          <div className="bg-white border border-slate-200/45 rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-3">
              <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Platform Integrations
            </div>
            <p className="text-slate-600 text-sm mb-8 font-medium">
              Connect Google, Meta, LinkedIn, and analytics tools instantly. No complex setup required.
            </p>
            
            {/* Visual (Ad Platform Hub) */}
            <div className="mt-auto relative h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-xl border border-blue-100/50"></div>
              
              {/* Central Node */}
              <motion.div 
                className="relative z-20 w-16 h-16 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-white font-bold text-lg">Hub</div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }}>
                <path d="M 80 50 Q 150 50 150 100" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 80 150 Q 150 150 150 100" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 280 100 Q 220 100 150 100" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
              </svg>

              {/* Platform Nodes */}
              <motion.div 
                className="absolute left-6 top-8 w-12 h-12 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center z-20 cursor-pointer text-[#1877F2]"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                {/* Meta Icon (simplified) */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </motion.div>

              <motion.div 
                className="absolute left-6 bottom-8 w-12 h-12 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center z-20 cursor-pointer"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                {/* Google Icon (simplified) */}
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </motion.div>


            </div>
          </div>

          {/* Card 4 - Precise Tracking */}
          <div className="bg-white border border-slate-200/45 rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col items-center">
            <div className="w-full text-left">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-3">
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Live Campaign Tracking
              </div>
              <p className="text-slate-600 text-sm mb-12 font-medium">
                Monitor live ad performance, bid adjustments, and audience engagement in real-time.
              </p>
            </div>
            {/* Visual */}
            <div className="relative mt-auto w-full flex justify-center pb-4">
              <div className="w-32 h-32 bg-gradient-to-b from-blue-600 to-indigo-900 rounded-full blur-sm"></div>
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-slate-200 p-3 flex items-center gap-3 w-64 z-10 cursor-pointer"
                whileHover={{ scale: 1.05, y: "-55%" }}
              >
                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0"><img src="https://i.pravatar.cc/100?img=5" alt="user" /></div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-900 flex justify-between">Manoela Irish <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>Live</span></div>
                  <div className="text-[10px] text-slate-500 font-medium truncate">Adjusting CPC bids...</div>
                </div>
              </motion.div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 bg-slate-200 rounded-full blur-md opacity-50"></div>
            </div>
          </div>

          {/* Card 5 - Real-time Feedback (Faded Scroll) */}
          <div className="bg-white border border-slate-200/45 rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-3">
              <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Client Collaboration
            </div>
            <p className="text-slate-600 text-sm mb-8 font-medium">
              Stay aligned with your dedicated team through real-time updates and campaign feedback.
            </p>
            
            {/* Visual with Masking for Top/Bottom Fade */}
            <div 
              className="mt-auto h-48 relative overflow-hidden flex flex-col justify-start"
              style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
            >
              <motion.div
                className="flex flex-col gap-3"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 15,
                }}
              >
                {scrollItems.map((comment, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-3 shadow-sm shrink-0 hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src={comment.img} alt="user" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-bold text-slate-900">{comment.name}</span>
                        <span className="text-slate-400 font-medium">{comment.time}</span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium leading-snug">
                        {comment.text}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}} />
    </section>
  );
}
