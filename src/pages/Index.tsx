import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BlankSection from "@/components/BlankSection";

const Index = () => {
  return (
    <div className="relative">
      <BlankSection />
      <Header />
      <main className="relative z-20">
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default Index;
