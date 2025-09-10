import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlankSection from "@/components/BlankSection";
import ServicesBackground from "@/components/ServicesBackground";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="relative">
      <BlankSection />
      <ServicesBackground />
      <Header />
      <main className="relative z-20">
        <Hero />
        {/* Spacer to allow scrolling past hero to reveal About Us */}
        <div className="h-screen"></div>
        <Services />
        {/* Spacer to allow scrolling past services */}
        <div className="h-screen"></div>
      </main>
    </div>
  );
};

export default Index;
