import BookSection from "@/components/BookSection";
import CateringSection from "@/components/CateringSection";
import InstagramSection from "@/components/InstagramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JoinTeamSection from "@/components/JoinTeamSection";
import LandingFrame from "@/components/LandingFrame";
import { MenuModalProvider } from "@/components/MenuModalContext";
import Navbar from "@/components/Navbar";
import PhilosophyBlurb from "@/components/PhilosophyBlurb";
import ScrollingBanner from "@/components/ScrollingBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <MenuModalProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <LandingFrame>
        <Navbar />
        <HeroSection />
      </LandingFrame>

      <main id="main">
        <WhoWeAre />
        <InstagramSection />
        <PhilosophyBlurb />
        <TestimonialsSection />
        <BookSection />
        <CateringSection />
        <JoinTeamSection />
        <ContactSection />
      </main>
      <ScrollingBanner />
      <Footer />
    </MenuModalProvider>
  );
}
