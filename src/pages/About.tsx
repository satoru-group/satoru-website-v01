import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import AIBackground from "@/components/AIBackground";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Lightbulb, TrendingUp, Handshake } from "lucide-react";

const About = () => {
  return (
    <div className="relative font-body ai-bg neural-bg">
      <Header />
      
      {/* Main About Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
          {/* AI Background Component */}
          <AIBackground showParticles={true} showMatrix={true} showCircuits={true} showDataStream={true} />
          
          <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 relative z-20 px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-[#27254c] dark:text-foreground leading-tight">
                <span className="inline-block animate-float-subtle">About</span>{" "}
                <span className="text-[#564a94] dark:text-primary inline-block animate-float-dynamic text-glow">Satoru</span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full shadow-glow-ai animate-digital-pulse"></div>
              <p className="text-lg sm:text-2xl lg:text-3xl text-[#1f232f] dark:text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto data-stream">
                <span className="italic holographic">Satoru</span> means to understand, to know, or to perceive—the foundation of transformative business consulting.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
          {/* Animated Microchip Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Microchip 1 */}
            <div className="absolute top-20 left-10 w-16 h-16 opacity-10 dark:opacity-20 animate-float-subtle">
              <svg viewBox="0 0 64 64" className="w-full h-full text-primary">
                <rect x="8" y="8" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" rx="4"/>
                <rect x="16" y="16" width="32" height="32" fill="currentColor" opacity="0.2" rx="2"/>
                <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                <g className="animate-digital-pulse">
                  <line x1="0" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="32" x2="8" y2="32" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="44" x2="8" y2="44" stroke="currentColor" strokeWidth="1"/>
                  <line x1="56" y1="20" x2="64" y2="20" stroke="currentColor" strokeWidth="1"/>
                  <line x1="56" y1="32" x2="64" y2="32" stroke="currentColor" strokeWidth="1"/>
                  <line x1="56" y1="44" x2="64" y2="44" stroke="currentColor" strokeWidth="1"/>
                </g>
              </svg>
            </div>

            {/* Microchip 2 */}
            <div className="absolute bottom-32 right-16 w-20 h-20 opacity-10 dark:opacity-20 animate-float-dynamic">
              <svg viewBox="0 0 64 64" className="w-full h-full text-accent">
                <rect x="4" y="4" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1" rx="6"/>
                <rect x="12" y="12" width="40" height="40" fill="currentColor" opacity="0.15" rx="3"/>
                <g className="animate-digital-pulse" style={{animationDelay: '0.5s'}}>
                  <rect x="20" y="20" width="6" height="6" fill="currentColor" opacity="0.6"/>
                  <rect x="38" y="20" width="6" height="6" fill="currentColor" opacity="0.6"/>
                  <rect x="20" y="38" width="6" height="6" fill="currentColor" opacity="0.6"/>
                  <rect x="38" y="38" width="6" height="6" fill="currentColor" opacity="0.6"/>
                </g>
                <g>
                  <line x1="0" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="24" x2="4" y2="24" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="40" x2="4" y2="40" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="48" x2="4" y2="48" stroke="currentColor" strokeWidth="1"/>
                  <line x1="60" y1="16" x2="64" y2="16" stroke="currentColor" strokeWidth="1"/>
                  <line x1="60" y1="24" x2="64" y2="24" stroke="currentColor" strokeWidth="1"/>
                  <line x1="60" y1="40" x2="64" y2="40" stroke="currentColor" strokeWidth="1"/>
                  <line x1="60" y1="48" x2="64" y2="48" stroke="currentColor" strokeWidth="1"/>
                </g>
              </svg>
            </div>

            {/* Microchip 3 */}
            <div className="absolute top-1/2 left-1/4 w-12 h-12 opacity-15 dark:opacity-25 animate-float-subtle" style={{animationDelay: '1s'}}>
              <svg viewBox="0 0 48 48" className="w-full h-full text-primary">
                <rect x="6" y="6" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1" rx="3"/>
                <rect x="12" y="12" width="24" height="24" fill="currentColor" opacity="0.3" rx="2"/>
                <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="1" className="animate-digital-pulse"/>
                <g>
                  <line x1="0" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="24" x2="6" y2="24" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="36" x2="6" y2="36" stroke="currentColor" strokeWidth="1"/>
                  <line x1="42" y1="12" x2="48" y2="12" stroke="currentColor" strokeWidth="1"/>
                  <line x1="42" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="1"/>
                  <line x1="42" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="1"/>
                </g>
              </svg>
            </div>

            {/* Small Microchip 4 */}
            <div className="absolute bottom-20 left-1/3 w-10 h-10 opacity-12 dark:opacity-22 animate-float-dynamic" style={{animationDelay: '1.5s'}}>
              <svg viewBox="0 0 40 40" className="w-full h-full text-accent">
                <rect x="4" y="4" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1" rx="2"/>
                <rect x="8" y="8" width="24" height="24" fill="currentColor" opacity="0.2" rx="1"/>
                <g className="animate-digital-pulse" style={{animationDelay: '1s'}}>
                  <rect x="14" y="14" width="4" height="4" fill="currentColor" opacity="0.8"/>
                  <rect x="22" y="14" width="4" height="4" fill="currentColor" opacity="0.8"/>
                  <rect x="14" y="22" width="4" height="4" fill="currentColor" opacity="0.8"/>
                  <rect x="22" y="22" width="4" height="4" fill="currentColor" opacity="0.8"/>
                </g>
              </svg>
            </div>

            {/* Microchip 5 */}
            <div className="absolute top-16 right-32 w-14 h-14 opacity-8 dark:opacity-18 animate-float-subtle" style={{animationDelay: '2s'}}>
              <svg viewBox="0 0 56 56" className="w-full h-full text-primary">
                <rect x="7" y="7" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1" rx="4"/>
                <rect x="14" y="14" width="28" height="28" fill="currentColor" opacity="0.25" rx="2"/>
                <circle cx="28" cy="28" r="4" fill="currentColor" opacity="0.5" className="animate-digital-pulse"/>
                <g>
                  <line x1="0" y1="14" x2="7" y2="14" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="28" x2="7" y2="28" stroke="currentColor" strokeWidth="1"/>
                  <line x1="0" y1="42" x2="7" y2="42" stroke="currentColor" strokeWidth="1"/>
                  <line x1="49" y1="14" x2="56" y2="14" stroke="currentColor" strokeWidth="1"/>
                  <line x1="49" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="1"/>
                  <line x1="49" y1="42" x2="56" y2="42" stroke="currentColor" strokeWidth="1"/>
                </g>
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                    Who We Are
                  </h2>
                  <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    Satoru Consulting is an operations and IT consulting firm that helps small and mid-sized businesses streamline workflows, optimize systems, and drive efficiency. We act as an extension of our clients&apos; teams, providing fractional operations and IT leadership to support growth, scalability, and long-term success. Our approach is rooted in understanding and clarity, identifying bottlenecks and implementing tailored solutions that empower businesses to simplify, streamline, and succeed.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="backdrop-modern bg-card/20 p-12 rounded-3xl border-2 border-border/40 shadow-elegant hover:border-border/60 transition-all duration-300">
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                        70+
                      </div>
                      <div className="text-lg font-medium text-muted-foreground">
                        Years Combined Experience
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/30">
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-heading font-semibold text-foreground">Operations</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">Expertise</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-heading font-semibold text-foreground">Technology</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-2xl animate-float-subtle opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-primary rounded-xl animate-float-dynamic opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-subtle relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-12 mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Our Purpose
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="backdrop-modern bg-card/10 p-12 rounded-3xl border-2 border-border/30 hover:border-border/50 hover:shadow-elegant transition-all duration-500 group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Mission</h3>
                  </div>
                  <p className="text-base sm:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                    At Satoru Consulting, our mission is to empower your business to achieve sustainable success.
                  </p>
                </div>
              </div>
              
              <div className="backdrop-modern bg-card/10 p-12 rounded-3xl border-2 border-border/30 hover:border-border/50 hover:shadow-elegant transition-all duration-500 group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Vision</h3>
                  </div>
                  <p className="text-base sm:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                    To be the trusted force behind business transformation envisioning a future where clarity powers growth and every business challenge leads to an opportunity through streamlined operations, scalable systems, and expert leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 lg:px-12 bg-background relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-12 mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These core principles guide every decision we make and every solution we deliver.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "People First, Always",
                  description: "We design solutions that empower people—owners, teams, and communities—not just systems.",
                  icon: Users
                },
                {
                  title: "Entrepreneurial Mindset", 
                  description: "We think like owners, not just advisors—because we are.",
                  icon: Rocket
                },
                {
                  title: "Clarity Over Complexity",
                  description: "We simplify the path to growth—cutting through chaos with clear systems, processes, and priorities.",
                  icon: Lightbulb
                },
                {
                  title: "Build for Scale",
                  description: "We create operational foundations that evolve with the business, not just patch today's pain points.",
                  icon: TrendingUp
                },
                {
                  title: "Progress Through Partnerships",
                  description: "We don't consult from the sidelines—we embed, collaborate, and move businesses forward together.",
                  icon: Handshake
                }
              ].map((value, index) => (
                <div key={index} className={`backdrop-modern bg-card/5 p-8 rounded-2xl border-2 border-border/30 hover:border-border/50 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Excellence Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-subtle relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-12 mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Excellence in Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Backed by over 70 years of combined experience across operations, technology, strategy, and leadership, our founding team brings a proven track record of building scalable systems, leading transformative projects, and driving business growth across sectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "70+",
                  label: "Years Experience",
                  description: "Combined expertise across our leadership team"
                },
                {
                  number: "100+",
                  label: "Projects Delivered",
                  description: "Successful transformations across industries"
                },
                {
                  number: "95%",
                  label: "Client Satisfaction",
                  description: "Consistently exceeding expectations"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-6 group">
                  <div className="space-y-4">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">
                      {stat.label}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 lg:px-12 bg-background relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Let's discuss how our expertise can help you streamline operations, optimize systems, and achieve sustainable growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-lift bg-gradient-primary border-0 font-medium">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-lift border-border/30 font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ContactSection />
    </div>
  );
};

export default About;