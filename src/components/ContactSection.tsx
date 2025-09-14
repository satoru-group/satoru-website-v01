import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-secondary/30 overflow-hidden px-3 sm:px-4 lg:px-6 pt-20 sm:pt-24 lg:pt-28">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float-subtle" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent opacity-15 rounded-full blur-3xl animate-float-dynamic" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl animate-ai-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-accent opacity-20 rounded-full blur-xl animate-digital-pulse" />
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10 w-full items-center">
        {/* Left Column - Heading and Description */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Ready to transform your business operations? Let&apos;s discuss how we can help you streamline workflows and drive growth.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 lg:gap-3 xl:gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email us</p>
                <p className="text-sm font-medium text-foreground">info@satoruconsulting.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Call us</p>
                <p className="text-sm font-medium text-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          {/* Response Time Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs text-primary font-medium">We respond within 24 hours</span>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full">
          <div className="max-w-md mx-auto lg:max-w-none space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Input 
                placeholder="First Name" 
                className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm h-10 sm:h-12" 
              />
              <Input 
                placeholder="Last Name" 
                className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm h-10 sm:h-12" 
              />
            </div>
            <Input 
              placeholder="Email Address" 
              className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm h-10 sm:h-12" 
            />
            <Input 
              placeholder="Company" 
              className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm h-10 sm:h-12" 
            />
            <Textarea 
              placeholder="Tell us about your project..." 
              className="bg-card/80 backdrop-blur-sm border border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors min-h-[100px] sm:min-h-[120px] text-sm resize-none" 
            />
            <Button size="lg" className="w-full text-sm h-10 sm:h-12">
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
    </section>
  );
};

export default ContactSection;