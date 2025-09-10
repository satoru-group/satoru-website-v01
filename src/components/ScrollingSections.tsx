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
    
    // Special handling for Services section (index 2)
    if (sectionIndex === 2) {
      const servicesScrollStart = 2 * viewportHeight;
      const relativeScroll = scrollY - servicesScrollStart;
      
      // Create 4 discrete steps for card animations (don't move section)
      const stepSize = viewportHeight / 5; // 5 steps: enter + 3 cards + button
      const currentStep = Math.floor(relativeScroll / stepSize);
      
      if (relativeScroll < 0) {
        // Haven't reached services yet
        return {
          transform: 'translateY(0px)',
          opacity: 1,
          transition: "transform 0.3s ease-out",
        };
      }
      
      if (currentStep < 4) {
        // Stay fixed in services section while cards appear
        return {
          transform: 'translateY(0px)',
          opacity: 1,
          transition: "transform 0.3s ease-out",
        };
      } else {
        // All cards shown, check if contact section should appear
        const contactScrollTrigger = 2.5 * viewportHeight; // Earlier trigger
        if (scrollY >= contactScrollTrigger) {
          // Hide services section when contact appears
          return {
            transform: `translateY(-100vh)`,
            opacity: 0,
            transition: "all 0.6s ease-out",
          };
        } else {
          // Stay in services section
          return {
            transform: 'translateY(0px)',
            opacity: 1,
            transition: "transform 0.3s ease-out",
          };
        }
      }
    }
    
    // Special handling for Contact section (index 3) - slide from right
    if (sectionIndex === 3) {
      const servicesCompleteScroll = 2.5 * viewportHeight; // When services cards are done
      
      if (scrollY < servicesCompleteScroll) {
        // Contact section hidden off-screen to the right
        return {
          transform: 'translateX(100%)',
          opacity: 1,
          transition: "transform 0.6s ease-out",
        };
      } else {
        // Contact section slides in - simple calculation
        const contactProgress = (scrollY - servicesCompleteScroll) / (viewportHeight * 0.3);
        const clampedProgress = Math.min(Math.max(contactProgress, 0), 1);
        const translateX = (1 - clampedProgress) * 100;
        
        return {
          transform: `translateX(${translateX}%)`,
          opacity: 1,
          transition: "transform 0.6s ease-out",
        };
      }
    }
    
    // Regular handling for other sections
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
        {/* Contact Section - Highest z-index for content */}
        <div 
          className="absolute inset-0 w-full h-full z-50"
          style={getTransformStyle(3)}
        >
          <ContactSection />
        </div>
        
        {/* Hero Section */}
        <div 
          className="absolute inset-0 w-full h-full z-40"
          style={getTransformStyle(0)}
        >
          <Hero />
        </div>
        
        {/* About Us Section */}
        <div 
          className="absolute inset-0 w-full h-full z-30"
          style={getTransformStyle(1)}
        >
          <AboutUsSection />
        </div>
        
        {/* Services Section */}
        <div 
          className="absolute inset-0 w-full h-full z-20"
          style={getTransformStyle(2)}
        >
          <ServicesSection />
        </div>
      </div>
    </>
  );
};

export default ScrollingSections;