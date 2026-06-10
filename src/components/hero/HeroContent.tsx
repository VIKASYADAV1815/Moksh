import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-0 z-10">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
        Welcome to Moksh Communication,
      </p>
      
      <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-slate-900 leading-[1.08] max-w-3xl mx-auto lg:mx-0">
        Your ultimate destination for{" "}
        <span className="text-blue-600">
          digital marketing
        </span>{" "}
        <br className="hidden sm:block" />
        strategies and solutions!
      </h1>

      <p className="mt-6 text-lg tracking-tight text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        In today&apos;s fast-paced digital landscape, driving traffic to your website is crucial for
        success. We provide the knowledge and tools to maximize your online presence and attract the
        right audience.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
        <Link
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
        >
          Free Quote
        </Link>
        
        <Link
          href="#services"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-full shadow-sm text-base font-semibold text-slate-900 bg-white hover:bg-slate-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          Our Services
        </Link>
      </div>
    </div>
  );
}