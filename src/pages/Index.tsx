import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
      </main>
    </div>
  );
};

export default Index;
