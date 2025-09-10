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
    
    if (sectionIndex === 0) {
      // Hero section - rolls up as curtain
      const translateY = Math.max(-scrollY, -viewportHeight);
      return {
        transform: `translateY(${translateY}px)`,
        transition: scrollY === 0 ? "transform 0.3s ease-out" : "none",
      };
    }
    
    if (sectionIndex === 1) {
      // About Us section stays fixed behind
      return {
        transform: 'translateY(0px)',
        transition: "none",
      };
    }
    
    // Other sections roll up as curtains
    const sectionOffset = (sectionIndex - 1) * viewportHeight;
    const relativeScroll = scrollY - viewportHeight - sectionOffset;
    const translateY = Math.max(-relativeScroll, -viewportHeight);
    
    return {
      transform: `translateY(${translateY}px)`,
      transition: scrollY === 0 ? "transform 0.3s ease-out" : "none",
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
        
        {/* Contact Section */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={getTransformStyle(3)}
        >
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default ScrollingSections;