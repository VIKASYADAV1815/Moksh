import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Features from "@/components/features/Features";
import AiFeatures from "@/components/ai-features/AiFeatures";
import SpeedOfThought from "@/components/speed-of-thought/SpeedOfThought";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <SpeedOfThought />
      <AiFeatures />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
