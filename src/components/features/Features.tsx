"use client";

import { useState } from "react";

type ServiceId = "Google Ads" | "Social Media Ads" | "SEO" | "Website Development";

const tabData: Record<ServiceId, { headers: string[]; rows: { id: number; cols: string[]; active: boolean }[] }> = {
  "Google Ads": {
    headers: ["Campaign", "Impressions", "Clicks", "CTR"],
    rows: [
      { id: 1, cols: ["Brand Search", "24,500", "1,820", "7.4%"], active: false },
      { id: 2, cols: ["Lead Generation", "18,200", "2,140", "11.8%"], active: true },
      { id: 3, cols: ["Shopping Ads", "31,000", "980", "3.2%"], active: false },
      { id: 4, cols: ["Display Remarketing", "45,600", "1,250", "2.7%"], active: false },
      { id: 5, cols: ["Video Ads", "12,800", "640", "5.0%"], active: false },
    ],
  },
  "Social Media Ads": {
    headers: ["Platform", "Reach", "Engagement", "Leads"],
    rows: [
      { id: 1, cols: ["Facebook", "52,400", "4.2%", "86"], active: false },
      { id: 2, cols: ["Instagram", "38,900", "6.8%", "124"], active: true },
      { id: 3, cols: ["LinkedIn", "12,300", "3.1%", "42"], active: false },
      { id: 4, cols: ["Retargeting", "28,100", "5.4%", "67"], active: false },
      { id: 5, cols: ["Lead Forms", "19,500", "7.2%", "98"], active: false },
    ],
  },
  SEO: {
    headers: ["Keyword", "Position", "Traffic", "Change"],
    rows: [
      { id: 1, cols: ["digital marketing bangalore", "#3", "2,400", "+5"], active: true },
      { id: 2, cols: ["google ads agency", "#7", "1,120", "+3"], active: false },
      { id: 3, cols: ["seo services india", "#5", "1,850", "+8"], active: false },
      { id: 4, cols: ["ppc management", "#11", "890", "+2"], active: false },
      { id: 5, cols: ["social media marketing", "#6", "1,340", "+4"], active: false },
    ],
  },
  "Website Development": {
    headers: ["Project", "Status", "Timeline", "Type"],
    rows: [
      { id: 1, cols: ["E-commerce Store", "Live", "6 weeks", "React"], active: false },
      { id: 2, cols: ["Corporate Website", "In Progress", "4 weeks", "Next.js"], active: true },
      { id: 3, cols: ["Landing Pages", "Live", "2 weeks", "Static"], active: false },
      { id: 4, cols: ["CMS Integration", "Testing", "3 weeks", "WordPress"], active: false },
      { id: 5, cols: ["Maintenance", "Ongoing", "Monthly", "Support"], active: false },
    ],
  },
};

const tabs: { id: ServiceId; title: string; desc: string }[] = [
  {
    id: "Google Ads",
    title: "Google Ads",
    desc: "Search, Display, Shopping, and Video campaigns with precise targeting and performance tracking to maximize ROI.",
  },
  {
    id: "Social Media Ads",
    title: "FB | Insta | LinkedIn Ads",
    desc: "Reach your audience on Facebook, Instagram, and LinkedIn with diverse ad formats and detailed analytics reporting.",
  },
  {
    id: "SEO",
    title: "Search Engine Optimization",
    desc: "Keyword research, on-page optimization, link building, and technical SEO to drive organic traffic long-term.",
  },
  {
    id: "Website Development",
    title: "Website Development",
    desc: "From planning and design to development, testing, and maintenance — websites built for credibility and growth.",
  },
];

const sidebarMap: Record<ServiceId, string> = {
  "Google Ads": "Google Ads",
  "Social Media Ads": "Social Ads",
  SEO: "SEO",
  "Website Development": "Web Dev",
};

export default function Features() {
  const [activeTab, setActiveTab] = useState<ServiceId>("Google Ads");
  const currentData = tabData[activeTab];

  return (
    <section id="services" className="relative bg-[#1e3a8a] py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-[#1e3a8a] to-indigo-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-bold tracking-tight text-white mb-6">
            Everything you need to grow online.
          </h2>
          <p className="text-lg text-blue-100/90 font-medium">
            Result-driven digital marketing strategies from Bangalore&apos;s trusted agency with 18+ years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col space-y-2 relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-6 py-6 rounded-[2rem] transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-white/20"
                    : "hover:bg-white/5"
                }`}
              >
                <h3 className={`text-[1.1rem] font-semibold mb-2 ${activeTab === tab.id ? "text-white" : "text-blue-100"}`}>
                  {tab.title}
                </h3>
                <p className={`text-[0.95rem] leading-relaxed ${activeTab === tab.id ? "text-white/80" : "text-blue-200/60"}`}>
                  {tab.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 relative z-0 mt-12 lg:mt-0 lg:-mr-48 xl:-mr-64">
            <div className="w-[800px] lg:w-[950px] p-2 bg-slate-200/40 rounded-[1.25rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-sm">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-[520px]">
                <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                  </div>
                  <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1.5 text-[10px] text-slate-400 w-64 text-center shadow-sm">
                    mokshadagency.com
                  </div>
                </div>

                <div className="flex flex-col md:flex-row flex-1">
                  <div className="w-full md:w-56 bg-white border-r border-slate-100 p-6 flex flex-col shrink-0">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-8">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-3 h-[2px] bg-white rounded-full" />
                      </div>
                      Moksh
                    </div>
                    <nav className="flex flex-col space-y-3.5 text-[0.9rem] font-medium">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className={`text-left transition-colors ${
                            activeTab === tab.id ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                          }`}
                        >
                          {sidebarMap[tab.id]}
                        </button>
                      ))}
                      <span className="text-slate-500">GMB</span>
                      <span className="text-slate-500">Analytics</span>
                      <span className="text-slate-500">Reports</span>
                    </nav>
                    <div className="mt-8 md:mt-auto flex items-center gap-2 text-xs font-medium text-slate-500 pt-8 border-t border-slate-100">
                      <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px]">M</div>
                      Moksh Communication
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-50/50 p-6 sm:p-10 w-full overflow-y-auto">
                    <h2 className="text-[1.35rem] font-bold text-slate-900 mb-6">{activeTab}</h2>
                    <div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden min-w-[500px]">
                      <table className="w-full text-left text-[0.85rem]">
                        <thead className="bg-slate-50/80 border-b border-slate-100 text-slate-500">
                          <tr>
                            {currentData.headers.map((header) => (
                              <th key={header} className="px-5 py-3.5 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-slate-600">
                          {currentData.rows.map((row) => (
                            <tr
                              key={row.id}
                              className={`transition-colors ${row.active ? "bg-blue-50/40 relative" : "hover:bg-slate-50/50"}`}
                            >
                              {row.cols.map((col, colIdx) => (
                                <td
                                  key={colIdx}
                                  className={`px-5 py-3.5 ${colIdx === 0 ? "flex items-center gap-3" : ""} ${row.active ? "text-slate-900 font-medium" : ""}`}
                                >
                                  {colIdx === 0 && row.active && (
                                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600" />
                                  )}
                                  {colIdx === 0 && (
                                    <div
                                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                        row.active ? "bg-blue-600" : "border border-slate-200"
                                      }`}
                                    >
                                      {row.active && (
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                      )}
                                    </div>
                                  )}
                                  {col}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
