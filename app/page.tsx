import Nav        from "@/components/Nav";
import Hero       from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features   from "@/components/Features";
import Community  from "@/components/Community";
import FAQ        from "@/components/FAQ";
import FinalCTA   from "@/components/FinalCTA";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Community />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
