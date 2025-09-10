const BlankSection = () => {
  return (
    <section className="h-screen bg-background relative z-0 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-2xl mx-auto"></div>
        <h2 className="text-4xl lg:text-6xl font-bold text-muted-foreground/30">
          Coming Soon
        </h2>
        <p className="text-muted-foreground/50 text-lg">
          This section is ready for your content
        </p>
      </div>
    </section>
  );
};

export default BlankSection;