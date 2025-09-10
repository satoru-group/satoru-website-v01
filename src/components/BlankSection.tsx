const BlankSection = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-muted flex items-center justify-center z-0">
      <div className="text-center space-y-6">
        <div className="w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-2xl mx-auto"></div>
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground/30">
          Coming Soon
        </h2>
        <p className="text-muted-foreground text-lg">
          This section is ready for your content
        </p>
      </div>
    </section>
  );
};

export default BlankSection;