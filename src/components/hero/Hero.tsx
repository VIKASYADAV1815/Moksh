import React from "react";
import HeroContent from "./HeroContent";
import HeroMockup from "./HeroMockup";
import TrustedBy from "./TrustedBy";

export default function Hero() {
  return (
    <section className="relative pt-4 pb-20 lg:pt-8 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <HeroContent />
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroMockup />
          </div>
        </div>
        <TrustedBy />
      </div>
    </section>
  );
}
