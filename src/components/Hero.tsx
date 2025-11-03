import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#003D99] to-[#002B7A] text-primary-foreground">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-outfit font-bold mb-6 leading-tight">
          Turn Your Industry Insight into a SaaS Startup — Without Writing Code
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto font-inter">
          Legendree Venture Studio partners with domain leaders to turn deep industry insight into profitable B2B software startups.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/quiz">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base uppercase rounded-2xl px-8 py-6 transition-all hover:scale-105 shadow-lg"
            >
              Take the Co-Founder Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base uppercase rounded-2xl px-8 py-6 transition-all hover:scale-105 backdrop-blur-sm"
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
