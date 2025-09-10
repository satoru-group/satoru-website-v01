import { Button } from "@/components/ui/button";
import businessMeeting from "@/assets/business-meeting.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="relative">
            {/* Purple brushstroke circle effect */}
            <div className="absolute -left-16 -top-8 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Simplify.
                <br />
                <span className="text-primary">Streamline.</span>
                <br />
                Succeed.
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            At Satoru Consulting, our mission is to empower your business to achieve sustainable success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-base">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img 
              src={businessMeeting} 
              alt="Professional business consulting meeting with two executives reviewing data and analytics" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;