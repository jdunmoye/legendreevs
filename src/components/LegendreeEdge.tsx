const LegendreeEdge = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-foreground">
              The Legendree Edge
            </h2>
            <div className="space-y-4 text-lg text-secondary-foreground font-inter leading-relaxed">
              <p>
                At Legendree, we blend strategic thinking, technical translation,product execution and business development.
              </p>
              <p className="font-semibold text-foreground">
                You don't need to be technical to build powerful B2B software — you just need deep domain knowledge and the right partner.
              </p>
              <p>
                We've built a proven process that takes industry experts from "I see a viable problem" to "I own equity in a profitable SaaS business."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendreeEdge;
