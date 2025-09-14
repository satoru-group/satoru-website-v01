import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const ScrollingSections = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle scroll events for better performance
      requestAnimationFrame(() => {
        const newScrollY = window.scrollY;
        setScrollY(newScrollY);
        
        // Responsive viewport height calculation
        const viewportHeight = window.innerHeight;
        const currentScrollSection = Math.floor(newScrollY / viewportHeight);
        
        // Show arrow for the current active section
        setActiveSection(Math.min(Math.max(currentScrollSection, 0), 3));
        
        // Set scrolling state
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      });
    };

    // Smooth scroll behavior with section snapping
    const handleWheelScroll = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      const viewportHeight = window.innerHeight;
      const currentSection = Math.round(window.scrollY / viewportHeight);
      const isScrollingDown = e.deltaY > 0;
      
      let targetSection = currentSection;
      
      if (isScrollingDown && currentSection < 3) {
        targetSection = currentSection + 1;
      } else if (!isScrollingDown && currentSection > 0) {
        targetSection = currentSection - 1;
      }
      
      // Smooth scroll to target section
      if (targetSection !== currentSection) {
        setIsScrolling(true);
        window.scrollTo({
          top: targetSection * viewportHeight,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheelScroll, { passive: false });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheelScroll);
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  const getTransformStyle = (sectionIndex: number) => {
    const viewportHeight = window.innerHeight;
    const currentScrollSection = Math.floor(scrollY / viewportHeight);
    const scrollProgress = (scrollY % viewportHeight) / viewportHeight;
    
    // Responsive breakpoints
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    // Modern easing function
    const modernEasing = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    
    // Enhanced Services section handling for mobile responsiveness
    if (sectionIndex === 2) {
      if (currentScrollSection < 2) {
        // Services section hidden below
        return {
          transform: `translateY(100vh)`,
          opacity: 0,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      } else if (currentScrollSection === 2) {
        // Services section active
        const floatY = isMobile ? 0 : Math.sin(Date.now() * 0.001) * 2;
        return {
          transform: `translateY(${floatY}px)`,
          opacity: 1,
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      } else {
        // Services section moving up
        return {
          transform: `translateY(-100vh) scale(0.95)`,
          opacity: 0,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      }
    }
    
    // Enhanced Contact section with responsive slide animation
    if (sectionIndex === 3) {
      if (currentScrollSection < 3) {
        // Contact section hidden off-screen
        const slideDirection = isMobile ? 'translateY(100vh)' : 'translateX(100%)';
        return {
          transform: slideDirection,
          opacity: 0,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      } else {
        // Contact section active and visible
        return {
          transform: 'translate(0%, 0%)',
          opacity: 1,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      }
    }
    
    // Enhanced handling for Hero and About sections
    if (sectionIndex < currentScrollSection) {
      // Sections that have been scrolled past
      return {
        transform: `translateY(-100vh) scale(0.95)`,
        opacity: 0,
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }
    
    if (sectionIndex === currentScrollSection) {
      // Current active section
      const parallaxIntensity = isMobile ? 0.3 : 0.5;
      const translateY = -scrollProgress * viewportHeight * parallaxIntensity;
      const scale = 1 - (scrollProgress * 0.03);
      const opacity = 1 - (scrollProgress * 0.1);
      
      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: Math.max(opacity, 0.9),
        transition: "opacity 0.3s ease-out",
      };
    }
    
    // Sections below current - waiting state
    if (sectionIndex > currentScrollSection) {
      const anticipationScale = sectionIndex === currentScrollSection + 1 ? 1.01 : 1;
      return {
        transform: `translateY(0px) scale(${anticipationScale})`,
        opacity: 1,
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }

    return {
      transform: 'translateY(0px) scale(1)',
      opacity: 1,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <>
      {/* Create scrollable height for 4 sections */}
      <div className="h-[400vh]"></div>
      
      {/* Fixed container for sections */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden ai-bg neural-bg">
        {/* AI Background Animation Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {/* Neural Network Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Animated connection lines */}
            <g className="animate-pulse" style={{animationDuration: '4s'}}>
              <line x1="100" y1="150" x2="300" y2="200" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="200" y1="300" x2="500" y2="180" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="400" y1="400" x2="700" y2="250" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="600" y1="500" x2="900" y2="300" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="800" y1="600" x2="1100" y2="350" stroke="url(#connectionGradient)" strokeWidth="1"/>
            </g>
            
            {/* Floating nodes */}
            <g>
              <circle cx="150" cy="180" r="3" fill="hsl(var(--primary))" opacity="0.4" className="animate-float-subtle"/>
              <circle cx="350" cy="220" r="2" fill="hsl(var(--accent))" opacity="0.5" className="animate-float-dynamic"/>
              <circle cx="550" cy="280" r="2.5" fill="hsl(var(--primary))" opacity="0.3" className="animate-ai-pulse"/>
              <circle cx="750" cy="320" r="2" fill="hsl(var(--accent))" opacity="0.4" className="animate-float-subtle"/>
              <circle cx="950" cy="380" r="3" fill="hsl(var(--primary))" opacity="0.5" className="animate-float-dynamic"/>
            </g>
          </svg>
          
          {/* Data Stream Particles */}
          <div className="absolute inset-0">
            <div 
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-ping"
              style={{
                left: '20%',
                top: '25%',
                animationDuration: '3s',
                animationDelay: '0s'
              }}
            ></div>
            <div 
              className="absolute w-1.5 h-1.5 bg-accent rounded-full opacity-25 animate-pulse"
              style={{
                left: '70%',
                top: '40%',
                animationDuration: '4s',
                animationDelay: '1s'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-primary rounded-full opacity-35 animate-ping"
              style={{
                left: '45%',
                top: '60%',
                animationDuration: '2.5s',
                animationDelay: '2s'
              }}
            ></div>
            <div 
              className="absolute w-2 h-2 bg-accent rounded-full opacity-20 animate-pulse"
              style={{
                left: '85%',
                top: '20%',
                animationDuration: '3.5s',
                animationDelay: '0.5s'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-primary rounded-full opacity-40 animate-ping"
              style={{
                left: '15%',
                top: '70%',
                animationDuration: '4.5s',
                animationDelay: '1.5s'
              }}
            ></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(180deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'drift 30s linear infinite'
            }}
          ></div>
        </div>
        
        {/* Contact Section - Highest z-index, guaranteed main viewport positioning */}
        <div 
          className="absolute inset-0 w-full h-full z-50 ai-bg"
          style={getTransformStyle(3)}
        >
          <ContactSection />
        </div>
        
        {/* Hero Section */}
        <div 
          className="absolute inset-0 w-full h-full z-40 ai-bg"
          style={getTransformStyle(0)}
        >
          <Hero showArrow={activeSection === 0} />
        </div>
        
        {/* About Us Section */}
        <div 
          className="absolute inset-0 w-full h-full z-30 ai-bg"
          style={getTransformStyle(1)}
        >
          <AboutUsSection showArrow={activeSection === 1} />
        </div>
        
        {/* Services Section */}
        <div 
          className="absolute inset-0 w-full h-full z-20 ai-bg"
          style={getTransformStyle(2)}
        >
          <ServicesSection showArrow={activeSection === 2} />
        </div>
      </div>
    </>
  );
};

export default ScrollingSections;