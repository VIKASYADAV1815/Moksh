export default function HeroMockup() {
  return (
    <div className="relative flex justify-center lg:justify-end items-center z-10 w-full lg:w-[450px] p-2 sm:p-4">
      <div
        className="relative w-[280px] sm:w-[320px] h-[540px] sm:h-[610px] bg-black rounded-[36px] sm:rounded-[46px] p-2 sm:p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-800/50 ring-1 ring-slate-900/5 flex flex-col overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000000 55%, transparent 92%)",
          maskImage: "linear-gradient(to bottom, #000000 55%, transparent 92%)",
        }}
      >
        <div className="absolute top-3.5 inset-x-0 h-6 bg-black rounded-full w-26 mx-auto z-30 flex items-center justify-end px-3.5 gap-1">
          <div className="w-1 h-1 rounded-full bg-slate-900/40 border border-slate-800/30" />
        </div>

        <div className="flex-1 bg-neutral-50 rounded-[38px] flex flex-col relative w-full h-full overflow-hidden border border-black/5 select-none">
          <div className="flex justify-between items-center px-7 pt-3 pb-1 text-[11px] font-semibold text-neutral-900 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 19h2v2H2v-2zm4-4h2v6H6v-6zm4-4h2v10h-2V11zm4-4h2v14h-2V7zm4-4h2v18h-2V3z" />
              </svg>
              <div className="w-5 h-2.5 border border-neutral-900 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-3.5 bg-neutral-900 rounded-2xs" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-5 py-3.5 bg-transparent">
            <div className="flex items-center gap-2">
              <div className="w-5.5 h-5.5 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-white rounded-2xs transform rotate-45" />
              </div>
              <span className="text-xs font-bold tracking-tight text-neutral-950">Moksh</span>
            </div>
            <button className="bg-blue-600 text-white text-[9px] font-medium px-2.5 py-1.5 rounded-full shadow-xs">
              Free Quote
            </button>
          </div>

          <div className="flex-1 px-4 pt-2 flex flex-col pb-6 overflow-hidden">
            <div className="text-center mb-4">
              <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">Campaign Dashboard</p>
              <h2 className="text-lg font-bold text-neutral-900 mt-1 leading-tight">
                SEO &amp; Ads<br />
                <span className="text-blue-600">Performance</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-white rounded-xl border border-neutral-200 p-2.5 shadow-xs">
                <p className="text-[9px] text-neutral-500">Traffic</p>
                <p className="text-sm font-bold text-neutral-900">+42%</p>
                <div className="mt-1 h-1 rounded-full bg-blue-100">
                  <div className="h-full w-3/4 rounded-full bg-blue-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-neutral-200 p-2.5 shadow-xs">
                <p className="text-[9px] text-neutral-500">Leads</p>
                <p className="text-sm font-bold text-emerald-600">128</p>
                <div className="mt-1 h-1 rounded-full bg-emerald-100">
                  <div className="h-full w-2/3 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-3 shadow-xs flex-1">
              <p className="text-[10px] font-semibold text-neutral-700 mb-2">Active Campaigns</p>
              <div className="space-y-2">
                {[
                  { name: "Google Search Ads", status: "Live", color: "bg-emerald-500" },
                  { name: "Facebook Ads", status: "Optimizing", color: "bg-blue-500" },
                  { name: "SEO Rankings", status: "+12 positions", color: "bg-purple-500" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[9px]">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      <span className="text-neutral-700 font-medium">{item.name}</span>
                    </div>
                    <span className="text-neutral-500">{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-blue-600/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <button className="mt-3 w-full bg-neutral-950 text-white rounded-xl py-2.5 text-xs font-medium shadow-sm">
              Boost Your Traffic
            </button>
          </div>

          <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-20">
            <div className="w-28 h-1 bg-neutral-950/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
