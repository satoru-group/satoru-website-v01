import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const ScrollingSections = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll events for better performance
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransformStyle = (sectionIndex: number) => {
    const viewportHeight = window.innerHeight;
    
    // Special handling for Services section (index 2)
    if (sectionIndex === 2) {
      const servicesScrollStart = 2 * viewportHeight;
      const relativeScroll = scrollY - servicesScrollStart;
      
      // Create 4 discrete steps within services section (each 25% of viewport)
      const stepSize = viewportHeight / 4;
      const currentStep = Math.floor(relativeScroll / stepSize);
      const maxSteps = 4; // 3 cards + button step
      
      if (relativeScroll < 0) {
        // Haven't reached services yet
        return {
          transform: 'translateY(0px)',
          opacity: 1,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        };
      }
      
      if (currentStep < maxSteps) {
        // Stay in services section, constrain movement to current step
        const constrainedScroll = Math.min(relativeScroll, currentStep * stepSize + stepSize * 0.8);
        return {
          transform: `translateY(-${constrainedScroll}px)`,
          opacity: 1,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        };
      } else {
        // Allow scrolling to next section
        return {
          transform: `translateY(-${relativeScroll}px)`,
          opacity: 1,
          transition: "transform 0.3s ease-out",
        };
      }
    }
    
    // Regular handling for other sections
    const currentScrollSection = Math.floor(scrollY / viewportHeight);
    
    if (sectionIndex < currentScrollSection) {
      return {
        transform: `translateY(-${viewportHeight}px)`,
        opacity: 0,
        transition: "opacity 0.3s ease-out",
      };
    }
    
    if (sectionIndex === currentScrollSection) {
      const sectionScrollStart = sectionIndex * viewportHeight;
      const relativeScroll = scrollY - sectionScrollStart;
      const translateY = -relativeScroll;
      
      return {
        transform: `translateY(${translateY}px)`,
        opacity: 1,
        transition: "opacity 0.2s ease-out",
      };
    }
    
    return {
      transform: 'translateY(0px)',
      opacity: 1,
      transition: "opacity 0.3s ease-out",
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