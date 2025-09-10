import { Button } from "@/components/ui/button";
import operationsIcon from "@/assets/operations-icon.png";
import itSystemsIcon from "@/assets/it-systems-icon.png";
import leadershipIcon from "@/assets/leadership-icon.png";

const Services = () => {
  const services = [
    {
      title: "Operations Optimization",
      description: "Streamline workflows and improve operational efficiency",
      features: [
        "Process mapping and improvement",
        "Workflow automation", 
        "Resource allocation"
      ],
      icon: operationsIcon,
      alt: "Operations optimization workflow diagram showing streamlined business processes"
    },
    {
      title: "IT Systems Management",
      description: "Optimize your technology infrastructure",
      features: [
        "System integration",
        "Technology stack assessment",
        "IT strategy development"
      ],
      icon: itSystemsIcon,
      alt: "IT systems management visualization with server networks and cloud infrastructure"
    },
    {
      title: "Fractional Leadership", 
      description: "Expert guidance without the full-time cost",
      features: [
        "Fractional COO services",
        "Fractional CTO services",
        "Strategic planning"
      ],
      icon: leadershipIcon,
      alt: "Leadership strategy icons representing executive guidance and business growth"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-subtle px-6 lg:px-12 py-20 pt-32 z-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8">
            Our Services
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            How We Help Your Business
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We act as an extension of your team, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/30 shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <img 
                    src={service.icon} 
                    alt={service.alt}
                    className="w-12 h-12 object-contain opacity-80"
                  />
                </div>
              </div>

              {/* Service Content */}
              <h4 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-60"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button variant="outline" className="w-full">
                Learn more
              </Button>
            </div>
          ))}
        </div>

        {/* Spacer for scroll effect */}
        <div className="h-screen"></div>
      </div>
    </section>
  );
};

export default Services;