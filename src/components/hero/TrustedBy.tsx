export default function TrustedBy() {
  const platforms = [
    { name: "Google Ads", color: "text-[#4285F4]" },
    { name: "Meta", color: "text-[#1877F2]" },
    { name: "LinkedIn", color: "text-[#0A66C2]" },
    { name: "SEO", color: "text-slate-800" },
    { name: "Analytics", color: "text-emerald-600" },
  ];

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40 mb-16">
      <p className="text-center text-sm font-medium text-slate-600 mb-8">
        Trusted platforms we specialize in
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16 opacity-80">
        {platforms.map((platform) => (
          <div key={platform.name} className={`flex items-center gap-2 font-bold text-lg ${platform.color}`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            {platform.name}
          </div>
        ))}
      </div>
    </div>
  );
}
