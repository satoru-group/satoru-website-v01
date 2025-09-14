import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="w-full h-screen bg-secondary/30 flex items-center justify-center relative overflow-hidden">
      {/* Consistent Background Patterns */}
      <div className="absolute inset-0 tech-grid opacity-10 dark:opacity-15 pointer-events-none" />
      <div className="absolute inset-0 light-dots-bg opacity-15 dark:opacity-0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 sm:mb-8">
          Get In Touch
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          Ready to transform your business operations? Let&apos;s discuss how we can help you streamline workflows and drive growth.
        </p>
        
        <div className="max-w-lg mx-auto space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First Name" className="bg-card/80 backdrop-blur-sm border-2 border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base" />
            <Input placeholder="Last Name" className="bg-card/80 backdrop-blur-sm border-2 border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base" />
          </div>
          <Input placeholder="Email Address" className="bg-card/80 backdrop-blur-sm border-2 border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base" />
          <Input placeholder="Company" className="bg-card/80 backdrop-blur-sm border-2 border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors text-sm sm:text-base" />
          <Textarea 
            placeholder="Tell us about your project..." 
            className="bg-card/80 backdrop-blur-sm border-2 border-border/40 hover:border-border/60 focus:border-primary/50 transition-colors min-h-[100px] sm:min-h-[120px] text-sm sm:text-base" 
          />
          <Button size="lg" className="w-full text-sm sm:text-base">
            Send Message
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-xs sm:text-sm text-muted-foreground mt-8 sm:mt-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>info@satoruconsulting.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>+1 (555) 123-4567</span>
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