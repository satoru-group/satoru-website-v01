import Header from "@/components/Header";
import ScrollingSections from "@/components/ScrollingSections";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="relative ai-bg neural-bg">
        <Header />
        <ScrollingSections />
      </div>
    </PageTransition>
  );
};

export default Index;
