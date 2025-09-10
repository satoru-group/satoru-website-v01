import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlankSection from "@/components/BlankSection";

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <main className="relative">
        <Hero />
        <BlankSection />
      </main>
    </div>
  );
};

export default Index;
