import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      title: "Healthcare Platform",
      description: "Domain expert transformed a gap in the healthcare value chain into a $2M ARR SaaS platform.",
      result: "Secured $100k pre-seed after prototype phase"
    },
    {
      title: "Aviation software",
      description: "Industry veteran turned an industry pain point into automated process management software.",
      result: "5+ early adopter clients in 6 months"
    },
    {
      title: "Home health agency software",
      description: "An agency manager identified a bottleneck in the home health agency industry and built a software solution to automate the process.",
      result: "Featured in industry publication, 200+ waitlist"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4 text-center text-foreground">
          Success Stories
        </h2>
        <p className="text-lg text-secondary-foreground text-center mb-12 font-inter">
          Real ventures launched by domain experts like you
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <h3 className="text-xl font-outfit font-bold mb-3 text-foreground">
                  {story.title}
                </h3>
                <p className="text-secondary-foreground mb-4 font-inter">
                  {story.description}
                </p>
                <div className="bg-primary/10 rounded-xl p-3 text-sm font-semibold text-primary font-inter">
                  {story.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
