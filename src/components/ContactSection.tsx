import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen bg-secondary/30 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Consistent Background Patterns */}
      <div className="absolute inset-0 tech-grid opacity-10 dark:opacity-15 pointer-events-none" />
      <div className="absolute inset-0 light-dots-bg opacity-15 dark:opacity-0 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Heading and Description */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Ready to transform your business operations? Let&apos;s discuss how we can help you streamline workflows and drive growth.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-4 xl:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email us</p>
                  <p className="text-sm sm:text-base font-medium text-foreground">info@satoruconsulting.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="text-sm sm:text-base font-medium text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-primary font-medium">We respond within 24 hours</span>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <div className="max-w-md mx-auto lg:max-w-none space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base h-12" 
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base h-12" 
                />
              </div>
              <Input 
                placeholder="Email Address" 
                className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base h-12" 
              />
              <Input 
                placeholder="Company" 
                className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base h-12" 
              />
              <Textarea 
                placeholder="Tell us about your project..." 
                className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors min-h-[120px] sm:min-h-[140px] text-sm sm:text-base resize-none" 
              />
              <Button size="lg" className="w-full text-sm sm:text-base h-12">
                Send Message
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating contact elements with enhanced animations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-primary rounded-full animate-pulse opacity-40"
               style={{
                 animationDuration: '3.5s',
                 transform: `translate(${Math.sin(Date.now() * 0.0007) * 14}px, ${Math.cos(Date.now() * 0.001) * 8}px)`,
               }}></div>
          <div className="absolute bottom-1/5 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping opacity-30" 
               style={{
                 animationDelay: '0.8s',
                 transform: `translateX(${Math.sin(Date.now() * 0.0011) * 16}px)`,
               }}></div>
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-50" 
               style={{
                 animationDelay: '1.2s',
                 transform: `translate(${Math.cos(Date.now() * 0.0009) * 12}px, ${Math.sin(Date.now() * 0.0013) * 6}px)`,
               }}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;