import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import legendreeLogo from "@/assets/legendree-logo.png";

const Quiz = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="py-6 px-6 border-b border-border">
        <div className="container mx-auto">
          <Link to="/">
            <img src={legendreeLogo} alt="Legendree" className="h-8 md:h-10" />
          </Link>
        </div>
      </header>

      {/* Quiz Invite Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary/90 to-[#002B7A]">
        <div className="container mx-auto max-w-4xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-inter">Takes less than 3 minutes</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6 text-white">
            Find Out If You're Ready to Be a Co-Founder
          </h1>
          
          <p className="text-xl text-white/90 mb-10 font-inter max-w-2xl mx-auto">
            Discover if your insight could become the next fundable B2B SaaS startup in your industry.
          </p>
          
          <Link to="/quiz/start">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base uppercase rounded-2xl px-10 py-6 transition-all hover:scale-105 shadow-xl"
            >
              Start the Quiz Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Quiz Result Value Promise */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card shadow-lg rounded-2xl py-12 px-8 md:px-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 text-center text-foreground">
              What You'll Learn from the Quiz
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-start space-y-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-outfit font-semibold text-lg text-foreground">
                  Your Co-Founder Readiness
                </h3>
                <p className="text-muted-foreground font-inter">
                  How close you are to becoming a Tech Co-Founder
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-outfit font-semibold text-lg text-foreground">
                  SaaS Potential Analysis
                </h3>
                <p className="text-muted-foreground font-inter">
                  Whether your industry insight has SaaS potential
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-outfit font-semibold text-lg text-foreground">
                  Your Next Steps
                </h3>
                <p className="text-muted-foreground font-inter">
                  What next step will help you turn your knowledge into equity
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 text-center">
              <p className="text-foreground font-inter text-lg">
                <span className="font-semibold">Plus:</span> You'll get a free 1-page summary of your result and next action plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-3xl text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-inter">
            Take the first step toward transforming your industry expertise into a thriving SaaS venture.
          </p>
          
          <Link to="/quiz/start">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base uppercase rounded-2xl px-10 py-6 transition-all hover:scale-105 shadow-xl"
            >
              Start the Quiz Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
