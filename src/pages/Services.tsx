import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import AIBackground from "@/components/AIBackground";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Services = () => {
  return (
    <PageTransition>
      <div className="relative font-body ai-bg neural-bg">
      <Header />
      
      {/* Main Services Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full h-screen bg-background flex items-center justify-center relative overflow-hidden">
          {/* AI Background Component */}
          <AIBackground showParticles={true} showMatrix={true} showCircuits={true} showDataStream={true} />
          
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-20 px-4 sm:px-6 lg:px-12">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-[#27254c] dark:bg-gradient-primary dark:bg-clip-text dark:text-transparent mb-6 sm:mb-8 leading-tight">
              <span className="inline-block animate-float-subtle">Our</span>{" "}
              <span className="text-[#564a94] dark:text-primary inline-block animate-float-dynamic text-glow">Services</span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-[#1f232f] dark:text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto data-stream holographic">
              We act as an extension of your team, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-card/30 ai-bg">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Operations Optimization */}
              <div className="ai-card-hover bg-card/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-primary/30 shadow-glow-ai">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6 animate-float-subtle">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Operations Optimization</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  Streamline workflows and improve operational efficiency through systematic analysis and implementation of best practices.
                </p>
                <ul className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full animate-ai-pulse"></div>
                    Process mapping and improvement
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full animate-ai-pulse"></div>
                    Workflow automation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full animate-ai-pulse"></div>
                    Resource allocation optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full animate-ai-pulse"></div>
                    Performance metrics and KPI development
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full hover-lift border-primary/50 text-sm">
                  Learn More
                </Button>
              </div>

              {/* IT Systems Management */}
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">IT Systems Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Optimize your technology infrastructure to support business growth and operational excellence.
                </p>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    System integration and architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Technology stack assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    IT strategy development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Digital transformation planning
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>

              {/* Fractional Leadership */}
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">Fractional Leadership</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Expert C-level guidance and strategic leadership without the full-time executive cost.
                </p>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Fractional COO services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Fractional CTO services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Strategic planning and execution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Team leadership and development
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 px-6 lg:px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
              How We Work
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Discovery</h4>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">We analyze your current operations and identify opportunities for improvement.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Strategy</h4>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">We develop a customized roadmap aligned with your business goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Implementation</h4>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">We work alongside your team to execute solutions and drive results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-primary">4</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Optimization</h4>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">We continuously refine processes to ensure sustainable growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how we can help you streamline operations, optimize systems, and drive sustainable growth.
            </p>
            <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      
      <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Services;