"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypewriterText = ({ words }: { words: string[] }) => {
  const [displayedWord, setDisplayedWord] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[displayedWord];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(current.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setDisplayedWord((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayedText(current.substring(0, displayedText.length + 1));
        if (displayedText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, displayedWord, words]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-blue-600"
      >
        |
      </motion.span>
    </span>
  );
};

export default function HeroMockup() {
  const typewriterWords = [
    "Grow Your Business",
    "Maximize Your ROI",
    "Boost Your Sales",
    "Scale Your Brand",
  ];

  return (
    <div className="relative flex justify-center lg:justify-end items-center z-10 w-full lg:w-[450px] p-2 sm:p-4">
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
              Free Quote
            </button>
          </div>

          <div className="flex-1 px-3 sm:px-4 pt-1.5 sm:pt-2 flex flex-col pb-4 sm:pb-6 overflow-hidden">
            <div className="text-center mb-2 sm:mb-3">
              <p className="text-[7px] sm:text-[9px] font-semibold text-blue-600 uppercase tracking-wide">Smart Dashboard</p>
              <h2 className="text-[9px] sm:text-sm font-bold text-neutral-900 mt-0.5 sm:mt-1 leading-tight h-5 sm:h-6 flex items-center justify-center">
                <TypewriterText words={typewriterWords} />
              </h2>
            </div>

            <div className="space-y-2 sm:space-y-2.5 flex-1 mb-3 sm:mb-4">
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg sm:rounded-xl border border-blue-200 p-2.5 sm:p-3.5 shadow-sm"
                whileHover={{ y: -1 }}
              >
                <p className="text-[7px] sm:text-[9px] text-neutral-600 font-medium">Today's Performance</p>
                <div className="flex items-end gap-2 mt-1.5 sm:mt-2">
                  <div>
                    <p className="text-sm sm:text-base font-bold text-blue-600">+42%</p>
                    <p className="text-[6px] sm:text-[7px] text-neutral-600">Traffic Boost</p>
                  </div>
                  <div className="flex-1 flex items-end gap-1">
                    {[40, 60, 45, 70, 55].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-blue-500 opacity-70 hover:opacity-100"
                        style={{ height: `${(h / 70) * 20}px` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg sm:rounded-xl border border-emerald-200 p-2.5 sm:p-3.5 shadow-sm"
                whileHover={{ y: -1 }}
              >
                <p className="text-[7px] sm:text-[9px] text-neutral-600 font-medium">Lead Generation</p>
                <div className="flex items-center justify-between mt-1.5 sm:mt-2">
                  <div>
                    <p className="text-sm sm:text-base font-bold text-emerald-600">156</p>
                    <p className="text-[6px] sm:text-[7px] text-neutral-600">New Leads</p>
                  </div>
                  <div className="text-[11px] sm:text-sm font-semibold text-emerald-600">↑ 28%</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg sm:rounded-xl border border-purple-200 p-2.5 sm:p-3.5 shadow-sm"
                whileHover={{ y: -1 }}
              >
                <p className="text-[7px] sm:text-[9px] text-neutral-600 font-medium">ROI Status</p>
                <div className="flex items-center justify-between mt-1.5 sm:mt-2">
                  <div>
                    <p className="text-sm sm:text-base font-bold text-purple-600">3.2x</p>
                    <p className="text-[6px] sm:text-[7px] text-neutral-600">Return on Ad Spend</p>
                  </div>
                  <div className="w-12 h-8 rounded-lg bg-white/50 flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-purple-600">+18%</div>
                </div>
              </motion.div>
            </div>

            <motion.button 
              className="mt-1.5 sm:mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg sm:rounded-xl py-1.5 sm:py-2.5 text-[7px] sm:text-xs font-medium shadow-md hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Boost Traffic →
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
