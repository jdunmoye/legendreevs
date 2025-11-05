import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuizSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-4xl text-center animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-foreground">
          Ready to Co-Found a SaaS Venture in Your Industry?
        </h2>
        <p className="text-lg text-secondary-foreground mb-10 font-inter">
          Take our 3-minute quiz to discover if you're a fit for the Legendree co-founder program.
        </p>
        
        <Link to="/quiz">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base uppercase rounded-2xl px-10 py-6 transition-all hover:scale-105 shadow-xl"
          >
            Take the Co-Founder Quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default QuizSection;
