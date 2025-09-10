import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ServicesBackground from "@/components/ServicesBackground";

const Index = () => {
  return (
    <div className="relative">
      <ServicesBackground />
      <AboutUs />
      <Header />
      <main className="relative z-20">
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default Index;
