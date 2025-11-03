import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const DiscoveryCall = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl shadow-xl p-12 text-center animate-fade-up border-2 border-accent/20">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-foreground">
            Serious about building something real?
          </h2>
          <p className="text-lg text-secondary-foreground mb-10 font-inter max-w-2xl mx-auto">
            Book a private strategy session to explore your industry's biggest SaaS opportunities.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base uppercase rounded-2xl px-10 py-6 transition-all hover:scale-105 shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
