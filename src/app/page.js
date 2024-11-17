import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
import styles from "@/app/ui/style.css"
export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <>
        <Navbar />
        <div className="container mx-auto py-4 px-12 mt-24">
          <HeroSection />
          {/* <AchievementSection /> */}
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <Footer />
      </>
    </div>

  );
}
