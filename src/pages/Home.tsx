import Navbar from "../components/Navbar";
import ThemeToogle from "../components/ThemeToogle";
import StarBackground from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LanguageToggle from "@/components/LanguageToogle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Language Toggle */}
      <LanguageToggle />
      {/* Theme Toggle */}
      <ThemeToogle />
      {/* Background */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Theme Toggle */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
