import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlankSection from "@/components/BlankSection";

const Index = () => {
  return (
    <div className="relative">
      <BlankSection />
      <Header />
      <main className="relative z-20">
        <Hero />
        {/* Spacer to allow scrolling past hero */}
        <div className="h-screen"></div>
      </main>
    </div>
  );
};

export default Index;
