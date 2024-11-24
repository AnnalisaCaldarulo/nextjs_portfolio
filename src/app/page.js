'use client';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ModeProvider , useMode} from "./Context/ModeContext";
import DarkModeButton from "./components/DarkModeButton";

export default function Home() {
  const { darkMode, toggleDarkMode } = useMode();


  return (
    <ModeProvider>

      <DarkModeButton />
      <div className={` ${darkMode ? 'dark' : ''} flex min-h-screen flex-col dark:bg-[#121212] bg-[#e3d8d8]`}>
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
    </ModeProvider>

  );
}
