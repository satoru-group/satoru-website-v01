import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useRef } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const getSectionStyle = () => {
    return {
      transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };
  return (
    <section ref={sectionRef} className="w-full h-screen bg-secondary/30 flex items-center justify-center relative overflow-hidden">
      {/* Contact grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#contact-grid)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
          Get In Touch
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Ready to transform your business operations? Let's discuss how we can help you streamline workflows and drive growth.
        </p>
        
        <div className="max-w-lg mx-auto space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First Name" className="bg-card/80 backdrop-blur-sm border-border/50" />
            <Input placeholder="Last Name" className="bg-card/80 backdrop-blur-sm border-border/50" />
          </div>
          <Input placeholder="Email Address" className="bg-card/80 backdrop-blur-sm border-border/50" />
          <Input placeholder="Company" className="bg-card/80 backdrop-blur-sm border-border/50" />
          <Textarea 
            placeholder="Tell us about your project..." 
            className="bg-card/80 backdrop-blur-sm border-border/50 min-h-[120px]" 
          />
          <Button size="lg" className="w-full text-base">
            Send Message
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground mt-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>info@satoruconsulting.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
        
        {/* Floating contact elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-primary rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/5 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping opacity-30" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-50" style={{animationDelay: '1.2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;