import { ClipboardCheck, MessageSquare, FileText, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Take the Co-Founder Quiz",
      description: "Discover fit and readiness."
    },
    {
      icon: MessageSquare,
      title: "Schedule a Discovery Chat",
      description: "Explore your insights and opportunities."
    },
    {
      icon: FileText,
      title: "Define the Product Vision",
      description: "We create your PRD and clickable prototype."
    },
    {
      icon: TrendingUp,
      title: "Co-Invest + Build",
      description: "Partner to take your MVP to market."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-16 text-center text-foreground">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-8">
                  <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent w-10 h-10 rounded-full flex items-center justify-center font-outfit font-bold text-accent-foreground shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-outfit font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground font-inter">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
