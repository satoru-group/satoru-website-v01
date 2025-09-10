import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";

const ScrollingSections = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Calculate which section should be visible based on scroll position
      const viewportHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / viewportHeight);
      
      // Limit to available sections (0: Hero, 1: About, 2: Services)
      const newSection = Math.min(Math.max(sectionIndex, 0), 2);
      setCurrentSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransformStyle = (sectionIndex: number) => {
    const offset = (currentSection - sectionIndex) * 100;
    return {
      transform: `translateY(${offset}vh)`,
      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <>
      {/* Create scrollable height for 3 sections */}
      <div className="h-[300vh]"></div>
      
      {/* Fixed container for sections */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        {/* Hero Section */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={getTransformStyle(0)}
        >
          <Hero />
        </div>
        
        {/* About Us Section */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={getTransformStyle(1)}
        >
          <AboutUsSection />
        </div>
        
        {/* Services Section */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={getTransformStyle(2)}
        >
          <ServicesSection />
        </div>
      </div>
    </>
  );
};

export default ScrollingSections;