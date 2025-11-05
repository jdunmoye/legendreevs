import { Lightbulb, Handshake, Rocket } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "From Insight to Prototype",
      description: "We turn raw industry pain points into fundable, sellable,clickable SaaS products."
    },
    {
      icon: Handshake,
      title: "Co-Founder Partnership Model",
      description: "You bring industry access and knowledge. We bring product design, strategy, and build execution."
    },
    {
      icon: Rocket,
      title: "Equity + Cash Model",
      description: "Invest at a reduced rate, gain equity in a real venture."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-outfit font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-secondary-foreground font-inter leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
