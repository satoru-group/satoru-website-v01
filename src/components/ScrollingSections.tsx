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
    const currentScrollSection = Math.floor(scrollY / viewportHeight);
    const scrollProgress = (scrollY % viewportHeight) / viewportHeight;
    
    if (sectionIndex < currentScrollSection) {
      // Sections that have been scrolled past - keep them hidden with smooth exit
      return {
        transform: `translateY(-${viewportHeight}px)`,
        opacity: 0,
        transition: "opacity 0.3s ease-out",
      };
    }
    
    if (sectionIndex === currentScrollSection) {
      // Current section being scrolled - move it up gradually with easing
      const sectionScrollStart = sectionIndex * viewportHeight;
      const relativeScroll = scrollY - sectionScrollStart;
      
      // Apply smooth easing curve for professional feel
      const easedProgress = relativeScroll / viewportHeight;
      const smoothEasing = easedProgress < 0.5 
        ? 2 * easedProgress * easedProgress 
        : -1 + (4 - 2 * easedProgress) * easedProgress;
      
      const translateY = -relativeScroll;
      const opacity = 1 - (smoothEasing * 0.1); // Subtle fade as it scrolls
      
      return {
        transform: `translateY(${translateY}px)`,
        opacity: Math.max(opacity, 0.9),
        transition: "opacity 0.2s ease-out",
      };
    }
    
    if (sectionIndex === currentScrollSection + 1) {
      // Next section - prepare for entrance with subtle animation
      return {
        transform: 'translateY(0px)',
        opacity: 1,
        transition: "opacity 0.4s ease-in-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      };
    }
    
    // Sections further below - stay hidden but ready
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