import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ServicesBackground from "@/components/ServicesBackground";

const Index = () => {
  return (
    <div className="relative">
      <ServicesBackground />
      <Header />
      <main className="relative">
        <Hero />
        <AboutUs />
        <Services />
      </main>
    </div>
  );
};

export default Index;
