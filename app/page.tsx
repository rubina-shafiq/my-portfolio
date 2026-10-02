import About from "./component/About";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import ProjectsSection from "./component/ProjectsSection";
import SkillsSection from "./component/SkillsSection";

// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      < ContactSection />

      < Footer />
    </div>
  );
}