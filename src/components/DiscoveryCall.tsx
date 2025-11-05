import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const DiscoveryCall = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center animate-fade-up border-2 border-accent/20 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold mb-4 md:mb-6 text-foreground px-2">
            Serious about building something real?
          </h2>
          <p className="text-base sm:text-lg text-secondary-foreground mb-6 md:mb-10 font-inter max-w-2xl mx-auto px-2">
            Book a private strategy session to explore your industry's biggest SaaS opportunities.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm sm:text-base uppercase rounded-2xl px-6 sm:px-8 md:px-10 py-5 md:py-6 transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
