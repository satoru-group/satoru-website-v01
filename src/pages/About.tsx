import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Eye, Heart, Brain, Lightbulb, Building, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#about-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
            About Us
          </h1>
          <p className="text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            <span className="text-primary font-medium">Satoru</span> means to understand, to know, or to perceive.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Group Therapy
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 lg:p-12">
            <CardContent className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Satoru Consulting is an operations and IT consulting firm that helps small and mid-sized businesses 
                streamline workflows, optimize systems, and drive efficiency. We act as an extension of our clients' 
                teams, providing fractional operations and IT leadership to support growth, scalability, and long-term 
                success. Our approach is rooted in understanding and clarity, identifying bottlenecks and implementing 
                tailored solutions that empower businesses to simplify, streamline, and succeed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Mission Statement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      At Satoru Consulting, our mission is to empower your business to achieve sustainable success.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Vision Statement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the trusted force behind business transformation envisioning a future where clarity powers 
                      growth and every business challenge leads to an opportunity through streamlined operations, 
                      scalable systems, and expert leadership.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border/50 p-8 lg:p-12">
            <CardContent className="space-y-6">
              <div className="text-6xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                70+
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Years of Combined Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Backed by over 70 years of combined experience across operations, technology, strategy, and leadership, 
                Satoru Consulting's founding team brings a proven track record of building scalable systems, leading 
                transformative projects, and driving business growth across sectors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">People First, Always</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We design solutions that empower people—owners, teams, and communities—not just systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Entrepreneurial Mindset</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We think like owners, not just advisors—because we are.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Clarity Over Complexity</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We simplify the path to growth—cutting through chaos with clear systems, processes, and priorities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Building className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Build for Scale</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We create operational foundations that evolve with the business, not just patch today's pain points.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Progress Through Partnerships</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We don't consult from the sidelines—we embed, collaborate, and move businesses forward together.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50 p-8 lg:p-12">
            <CardContent className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's work together to streamline your operations, optimize your systems, and drive sustainable growth.
              </p>
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;