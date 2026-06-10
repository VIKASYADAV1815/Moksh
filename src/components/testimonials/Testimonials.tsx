import Image from "next/image";

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder",
    company: "Retail Brand",
    text: "Moksh Communication tripled our Google Ads leads in just two months. Their team understands the local market layout and delivers real ROI.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "Tech Startup",
    text: "Our SEO rankings jumped from page 3 to page 1 for key terms. Organic traffic is up 180% and still growing steadily every month.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Arun Mehta",
    role: "Business Owner",
    company: "Local Services Co.",
    text: "From targeted ads to an optimized infrastructure — Moksh handled everything. Highly professional, responsive, and genuinely invested in growth.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "Ananya Rao",
    role: "E-commerce Dir.",
    company: "Fashion Hub",
    text: "Incredible social media management framework. Our baseline engagement rate escalated by 250% over last quarter.",
    img: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Managing Dir.",
    company: "Real Estate Group",
    text: "Their lead generation campaigns are unparalleled. High-intent enterprise buyers are reaching out consistently.",
    img: "https://i.pravatar.cc/150?img=68",
  },
];

export default function Testimonials() {
  // Triple the data array to create a completely endless continuous loop track
  const marqueeList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 relative z-20 overflow-hidden bg-white border-y border-slate-100">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-smooth {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header aligned exactly with the FAQ section styling parameters */}
      <div className="max-w-5xl mx-auto px-4 relative mb-12">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-[13px] font-bold uppercase tracking-widest text-blue-600 mb-3">
            Client Success
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Trusted by Growing Businesses
          </h2>
        </div>
      </div>

      {/* Track Container Matrix */}
      <div className="relative flex overflow-x-hidden w-full">
        {/* Soft elegant edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Dynamic Running Track */}
        <div className="flex gap-4 pr-4 animate-marquee-smooth whitespace-nowrap">
          {marqueeList.map((testimonial, idx) => (
            <article
              key={`${testimonial.id}-${idx}`}
              className="w-[290px] sm:w-[320px] shrink-0 bg-slate-50/50 rounded-xl border border-slate-200/60 p-5 flex flex-col justify-between whitespace-normal transition-colors duration-150 hover:bg-slate-50 hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <StarRating />
                  {/* Scaled checkmark indicator to map visually to FAQ badges */}
                  <span className="flex items-center gap-1 text-[11px] text-blue-600 font-semibold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Partner
                  </span>
                </div>
                {/* Scaled body text to perfectly mirror the FAQ answer blocks */}
                <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Enhanced Footer Infrastructure */}
              <footer className="mt-5 flex items-center gap-3 pt-3.5 border-t border-slate-200/50">
                <div className="relative shrink-0">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover border border-slate-200"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-slate-900 truncate">{testimonial.name}</p>
                  <p className="text-[12px] text-slate-500 truncate mt-0.5">
                    {testimonial.role} &middot; <span className="text-blue-600 font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}