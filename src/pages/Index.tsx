import Hero from "@/components/Hero";
import ProblemPromise from "@/components/ProblemPromise";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import LegendreeEdge from "@/components/LegendreeEdge";
import SuccessStories from "@/components/SuccessStories";
import QuizSection from "@/components/QuizSection";
import DiscoveryCall from "@/components/DiscoveryCall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemPromise />
      <ValueProposition />
      <HowItWorks />
      <LegendreeEdge />
      <SuccessStories />
      <QuizSection />
      <DiscoveryCall />
      <Footer />
    </div>
  );
};

export default Index;
