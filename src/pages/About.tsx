import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";

const About = () => {
  return (
    <div className="relative">
      <Header />
      
      {/* Main About Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 px-6 lg:px-12">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
              About Us
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed">
              Satoru means to understand, to know, or to perceive.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6 lg:px-12 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Satoru Consulting is an operations and IT consulting firm that helps small and mid-sized businesses streamline workflows, optimize systems, and drive efficiency. We act as an extension of our clients' teams, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach is rooted in understanding and clarity, identifying bottlenecks and implementing tailored solutions that empower businesses to simplify, streamline, and succeed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Backed by over 70 years of combined experience across operations, technology, strategy, and leadership, Satoru Consulting's founding team brings a proven track record of building scalable systems, leading transformative projects, and driving business growth across sectors.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary/20 p-8 rounded-2xl backdrop-blur-sm border border-border/50">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">70+</div>
                      <div className="text-muted-foreground">Years Combined Experience</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-semibold text-foreground">Operations</div>
                        <div className="text-sm text-muted-foreground">Expertise</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-foreground">Technology</div>
                        <div className="text-sm text-muted-foreground">Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-6 lg:px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card/50 p-8 rounded-2xl backdrop-blur-sm border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6">Mission Statement</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Satoru Consulting, our mission is to empower your business to achieve sustainable success.
                </p>
              </div>
              <div className="bg-card/50 p-8 rounded-2xl backdrop-blur-sm border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6">Vision Statement</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the trusted force behind business transformation envisioning a future where clarity powers growth and every business challenge leads to an opportunity through streamlined operations, scalable systems, and expert leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 lg:px-12 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card/80 p-6 rounded-xl backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-foreground mb-4">People First, Always</h4>
                <p className="text-muted-foreground">We design solutions that empower people—owners, teams, and communities—not just systems.</p>
              </div>
              
              <div className="bg-card/80 p-6 rounded-xl backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-foreground mb-4">Entrepreneurial Mindset</h4>
                <p className="text-muted-foreground">We think like owners, not just advisors—because we are.</p>
              </div>
              
              <div className="bg-card/80 p-6 rounded-xl backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-foreground mb-4">Clarity Over Complexity</h4>
                <p className="text-muted-foreground">We simplify the path to growth—cutting through chaos with clear systems, processes, and priorities.</p>
              </div>
              
              <div className="bg-card/80 p-6 rounded-xl backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-foreground mb-4">Build for Scale</h4>
                <p className="text-muted-foreground">We create operational foundations that evolve with the business, not just patch today's pain points.</p>
              </div>
              
              <div className="bg-card/80 p-6 rounded-xl backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                <h4 className="text-xl font-semibold text-foreground mb-4">Progress Through Partnerships</h4>
                <p className="text-muted-foreground">We don't consult from the sidelines—we embed, collaborate, and move businesses forward together.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ContactSection />
    </div>
  );
};

export default About;