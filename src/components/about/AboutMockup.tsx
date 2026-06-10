"use client";

import { motion } from "framer-motion";

export default function AboutMockup() {
  return (
    <div className="relative flex justify-center items-center z-10 w-full lg:w-[450px] p-2 sm:p-4">
      <div
        className="relative w-[280px] sm:w-[320px] h-[480px] sm:h-[550px] bg-black rounded-[36px] sm:rounded-[46px] p-2 sm:p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-800/50 ring-1 ring-slate-900/5 flex flex-col overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000000 50%, transparent 90%)",
          maskImage: "linear-gradient(to bottom, #000000 50%, transparent 90%)",
        }}
      >
        <div className="absolute top-2.5 sm:top-3.5 inset-x-0 h-5 sm:h-6 bg-black rounded-full w-24 sm:w-26 mx-auto z-30 flex items-center justify-end px-2.5 sm:px-3.5 gap-1">
          <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-slate-900/40 border border-slate-800/30" />
        </div>

        <div className="flex-1 bg-neutral-50 rounded-[32px] sm:rounded-[38px] flex flex-col relative w-full h-full overflow-hidden border border-black/5 select-none">
          <div className="flex justify-between items-center px-4 sm:px-7 pt-2 sm:pt-3 pb-0.5 sm:pb-1 text-[9px] sm:text-[11px] font-semibold text-neutral-900 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 19h2v2H2v-2zm4-4h2v6H6v-6zm4-4h2v10h-2V11zm4-4h2v14h-2V7zm4-4h2v18h-2V3z" />
              </svg>
              <div className="w-4 sm:w-5 h-2 border border-neutral-900 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-2.5 sm:w-3.5 bg-neutral-900 rounded-2xs" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-3 sm:px-5 py-2 sm:py-3.5 bg-transparent">
            <div className="flex items-center gap-1.5">
              <div className="w-4.5 sm:w-5.5 h-4.5 sm:h-5.5 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                <div className="w-2 h-1 sm:w-2 sm:h-[2px] bg-white rounded-full" />
              </div>
              <span className="text-[8px] sm:text-xs font-bold tracking-tight text-neutral-950">Moksh</span>
            </div>
            <button className="bg-blue-600 text-white text-[7px] sm:text-[9px] font-medium px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full shadow-xs">
              Contact
            </button>
          </div>

          <div className="flex-1 px-3 sm:px-4 pt-2 sm:pt-3 flex flex-col pb-4 sm:pb-6 overflow-hidden">
            <div className="mb-3 sm:mb-4">
              <p className="text-[9px] sm:text-[11px] font-semibold text-blue-600 uppercase tracking-wide">About Moksh</p>
              <h2 className="text-sm sm:text-lg font-bold text-neutral-900 mt-1 sm:mt-1.5 leading-snug">
                18+ Years of<br />
                <span className="text-blue-600">Excellence</span>
              </h2>
            </div>

            <div className="space-y-2 sm:space-y-2.5 mb-3 sm:mb-4">
              <motion.div 
                className="bg-white border border-neutral-200 rounded-lg p-2 sm:p-3 shadow-xs"
                whileHover={{ scale: 1.01, backgroundColor: "rgb(249, 250, 251)" }}
              >
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-semibold text-neutral-900 leading-snug">Google Ads Experts</p>
                    <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Certified specialists</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white border border-neutral-200 rounded-lg p-2 sm:p-3 shadow-xs"
                whileHover={{ scale: 1.01, backgroundColor: "rgb(249, 250, 251)" }}
              >
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-semibold text-neutral-900 leading-snug">500+ Projects</p>
                    <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Delivered & thriving</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white border border-neutral-200 rounded-lg p-2 sm:p-3 shadow-xs"
                whileHover={{ scale: 1.01, backgroundColor: "rgb(249, 250, 251)" }}
              >
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-semibold text-neutral-900 leading-snug">Onsite Support</p>
                    <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Bangalore based</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 sm:p-3.5 flex-1 flex flex-col shadow-xs">
              <p className="text-[9px] sm:text-[10px] font-bold text-neutral-900 mb-2 sm:mb-2.5">Key Metrics</p>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 flex-1">
                <motion.div 
                  className="bg-white border border-neutral-200 rounded p-1.5 sm:p-2 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-[10px] sm:text-[11px] font-bold text-blue-600">50+</p>
                  <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Team</p>
                </motion.div>
                <motion.div 
                  className="bg-white border border-neutral-200 rounded p-1.5 sm:p-2 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-[10px] sm:text-[11px] font-bold text-blue-600">95%</p>
                  <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Clients</p>
                </motion.div>
                <motion.div 
                  className="bg-white border border-neutral-200 rounded p-1.5 sm:p-2 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-[10px] sm:text-[11px] font-bold text-blue-600">24/7</p>
                  <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Support</p>
                </motion.div>
                <motion.div 
                  className="bg-white border border-neutral-200 rounded p-1.5 sm:p-2 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-[10px] sm:text-[11px] font-bold text-blue-600">100%</p>
                  <p className="text-[8px] sm:text-[9px] text-neutral-600 mt-0.5">Dedicated</p>
                </motion.div>
              </div>
            </div>

            <motion.button 
              className="mt-2.5 sm:mt-3.5 w-full bg-blue-600 text-white rounded-lg py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-semibold shadow-sm hover:bg-blue-700 transition-colors"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us →
            </motion.button>
          </div>

          <div className="absolute bottom-1 sm:bottom-1.5 inset-x-0 flex justify-center z-20">
            <div className="w-24 sm:w-28 h-0.5 sm:h-1 bg-neutral-950/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
