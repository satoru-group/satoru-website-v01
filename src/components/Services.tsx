import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-20 relative z-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
          Let's discuss how Satoru Consulting can help streamline your operations, optimize your systems, and drive sustainable growth for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-base">
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;