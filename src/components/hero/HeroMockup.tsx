export default function HeroMockup() {
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
            <div className="text-center mb-2 sm:mb-4">
              <p className="text-[7px] sm:text-[10px] font-semibold text-blue-600 uppercase tracking-wide">Dashboard</p>
              <h2 className="text-xs sm:text-lg font-bold text-neutral-900 mt-0.5 sm:mt-1 leading-tight">
                SEO &amp; Ads<br />
                <span className="text-blue-600">Performance</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-4">
              <div className="bg-white rounded-lg sm:rounded-xl border border-neutral-200 p-1.5 sm:p-2.5 shadow-xs">
                <p className="text-[7px] sm:text-[9px] text-neutral-500">Traffic</p>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">+42%</p>
                <div className="mt-0.5 sm:mt-1 h-0.5 sm:h-1 rounded-full bg-blue-100">
                  <div className="h-full w-3/4 rounded-full bg-blue-600" />
                </div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl border border-neutral-200 p-1.5 sm:p-2.5 shadow-xs">
                <p className="text-[7px] sm:text-[9px] text-neutral-500">Leads</p>
                <p className="text-xs sm:text-sm font-bold text-emerald-600">128</p>
                <div className="mt-0.5 sm:mt-1 h-0.5 sm:h-1 rounded-full bg-emerald-100">
                  <div className="h-full w-2/3 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl border border-neutral-200 p-2 sm:p-3 shadow-xs flex-1">
              <p className="text-[7px] sm:text-[10px] font-semibold text-neutral-700 mb-1.5 sm:mb-2">Active</p>
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  { name: "Google Search", status: "Live", color: "bg-emerald-500" },
                  { name: "Facebook Ads", status: "Opt.", color: "bg-blue-500" },
                  { name: "SEO Rankings", status: "+12", color: "bg-purple-500" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[7px] sm:text-[9px]">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${item.color}`} />
                      <span className="text-neutral-700 font-medium truncate">{item.name}</span>
                    </div>
                    <span className="text-neutral-500 text-[6px] sm:text-[8px] whitespace-nowrap ml-1">{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 sm:mt-3 flex items-end gap-0.5 h-10 sm:h-12">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-blue-600/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <button className="mt-1.5 sm:mt-3 w-full bg-neutral-950 text-white rounded-lg sm:rounded-xl py-1.5 sm:py-2.5 text-[7px] sm:text-xs font-medium shadow-sm">
              Boost Your Traffic
            </button>
          </div>

          <div className="absolute bottom-1 sm:bottom-1.5 inset-x-0 flex justify-center z-20">
            <div className="w-24 sm:w-28 h-0.5 sm:h-1 bg-neutral-950/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
