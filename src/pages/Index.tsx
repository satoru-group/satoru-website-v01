import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import ServicesBackground from "@/components/ServicesBackground";

const Index = () => {
  return (
    <div className="relative">
      <AboutUs />
      <ServicesBackground />
      <Header />
      <main className="relative z-20">
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default Index;
