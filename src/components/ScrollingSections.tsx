import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const ScrollingSections = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransformStyle = (sectionIndex: number) => {
    const viewportHeight = window.innerHeight;
    const currentScrollSection = Math.floor(scrollY / viewportHeight);
    
    // Only transform the section that should be rolling up
    if (sectionIndex === currentScrollSection) {
      const sectionScrollStart = sectionIndex * viewportHeight;
      const relativeScroll = scrollY - sectionScrollStart;
      const translateY = -relativeScroll;
      
      return {
        transform: `translateY(${translateY}px)`,
        transition: "none",
      };
    }
    
    // All other sections stay in their natural position
    return {
      transform: 'translateY(0px)',
      transition: "none",
    };
  };

  return (
    <>
      {/* Create scrollable height for 4 sections */}
      <div className="h-[400vh]"></div>
      
      {/* Fixed container for sections */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        {/* Hero Section */}
        <div 
          className="absolute inset-0 w-full h-full z-30"
          style={getTransformStyle(0)}
        >
          <Hero />
        </div>
        
        {/* About Us Section */}
        <div 
          className="absolute inset-0 w-full h-full z-20"
          style={getTransformStyle(1)}
        >
          <AboutUsSection />
        </div>
        
        {/* Services Section */}
        <div 
          className="absolute inset-0 w-full h-full z-10"
          style={getTransformStyle(2)}
        >
          <ServicesSection />
        </div>
        
        {/* Contact Section */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={getTransformStyle(3)}
        >
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default ScrollingSections;