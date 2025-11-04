import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import legendreeLogo from "@/assets/legendree-logo.png";

const questions = [
  {
    id: 1,
    question: "How long have you worked in your current industry?",
    options: [
      { text: "Less than 2 years", value: 1 },
      { text: "2–5 years", value: 2 },
      { text: "5–10 years", value: 3 },
      { text: "10+ years", value: 4 },
    ],
  },
  {
    id: 2,
    question: "Which category best describes your current situation?",
    options: [
      { text: "Student or early professional", value: 1 },
      { text: "Mid-level employee or manager", value: 2 },
      { text: "Senior leader or entrepreneur", value: 3 },
      { text: "Consultant, executive, or business owner", value: 4 },
    ],
  },
  {
    id: 3,
    question: "How clearly can you describe recurring inefficiencies or bottlenecks in your field?",
    options: [
      { text: "I've noticed some, but haven't thought deeply", value: 1 },
      { text: "I see clear gaps but not sure what could fix them", value: 2 },
      { text: "I can describe a few major recurring pain points", value: 3 },
      { text: "I understand where the biggest inefficiencies lie and why", value: 4 },
    ],
  },
  {
    id: 4,
    question: "How often do you discuss or share possible improvements with peers in your industry?",
    options: [
      { text: "Rarely or never", value: 1 },
      { text: "Occasionally", value: 2 },
      { text: "Often — I like discussing better ways of doing things", value: 3 },
      { text: "Frequently — I'm known for challenging the status quo", value: 4 },
    ],
  },
  {
    id: 5,
    question: "Have you ever been involved in improving a process, system, or workflow in your organization?",
    options: [
      { text: "Not yet", value: 1 },
      { text: "A few small tweaks", value: 2 },
      { text: "I've led or suggested process improvements", value: 3 },
      { text: "I've driven significant change or innovation", value: 4 },
    ],
  },
  {
    id: 6,
    question: "What best describes the kind of impact you'd like to make next?",
    options: [
      { text: "I want to see my insights make a difference", value: 1 },
      { text: "I'd like to build something meaningful with others", value: 2 },
      { text: "I want to help shape new tools that my industry adopts", value: 3 },
      { text: "I want to co-found a software business that changes my sector", value: 4 },
    ],
  },
  {
    id: 7,
    question: "What have you already tried to solve these inefficiencies or explore new ideas?",
    options: [
      { text: "Nothing yet", value: 1 },
      { text: "Talked to peers about potential solutions", value: 2 },
      { text: "Consulted or brainstormed with experts", value: 3 },
      { text: "Attempted or funded a small tech project", value: 4 },
    ],
  },
  {
    id: 8,
    question: "Have you invested time or money exploring a potential opportunity?",
    options: [
      { text: "Neither", value: 0 },
      { text: "Time researching or validating", value: 2 },
      { text: "Small financial investment (<$500)", value: 3 },
      { text: "Considerable time and money ($500–$5k+)", value: 4 },
    ],
  },
  {
    id: 9,
    question: "How much could you realistically invest monthly in collaborating with a venture studio to develop and test your industry insight?",
    options: [
      { text: "Less than $500", value: 1 },
      { text: "$500–$1,000", value: 2 },
      { text: "Up to $1,500", value: 3 },
      { text: "$2,000 or more if necessary", value: 4 },
    ],
  },
  {
    id: 10,
    question: "How close are you to the people or organizations that would buy a new SaaS in your industry?",
    options: [
      { text: "I'd need introductions", value: 1 },
      { text: "I know a few potential users", value: 2 },
      { text: "I'm well-connected to decision-makers", value: 3 },
      { text: "I directly advise or sell to them already", value: 4 },
    ],
  },
  {
    id: 11,
    question: "How confident are you in helping validate or promote a solution in your space?",
    options: [
      { text: "Not confident yet", value: 1 },
      { text: "Somewhat confident", value: 2 },
      { text: "Confident with guidance", value: 3 },
      { text: "Very confident — I already influence my market", value: 4 },
    ],
  },
  {
    id: 12,
    question: "How much time could you dedicate weekly to collaborating on a new venture?",
    options: [
      { text: "2–5 hours", value: 1 },
      { text: "5–10 hours", value: 2 },
      { text: "10–20 hours", value: 3 },
      { text: "Full-time if it gains traction", value: 4 },
    ],
  },
  {
    id: 13,
    question: "If you were part of a founding team, how would you prefer to contribute?",
    options: [
      { text: "Providing domain context", value: 1 },
      { text: "Helping shape product-market fit", value: 2 },
      { text: "Guiding go-to-market access", value: 3 },
      { text: "Leading growth and partnerships", value: 4 },
    ],
  },
  {
    id: 14,
    question: "What excites you most about building within your industry?",
    options: [
      { text: "Fixing inefficiencies", value: 1 },
      { text: "Creating something new with lasting impact", value: 2 },
      { text: "Co-owning a valuable product", value: 3 },
      { text: "Redefining how my industry operates", value: 4 },
    ],
  },
];

const QuizDetailed = () => {
  const [step, setStep] = useState<"info" | "quiz" | "result">("info");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setStep("quiz");
    }
  };

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("result");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const getResultData = () => {
    const score = calculateScore();
    if (score <= 25) {
      return {
        level: "Curious Collaborator",
        headline: "You're thinking like a problem-spotter — and that's where every great founder begins.",
        message: "Legendree helps professionals like you shape emerging insights into real software concepts. Through guided discovery and prototype design, you'll learn how industry challenges become investable startups.",
        cta: "Explore the Venture Process",
        color: "primary",
      };
    } else if (score <= 45) {
      return {
        level: "Co-Founder Ready",
        headline: "You're ready to collaborate on something meaningful.",
        message: "You bring insider knowledge and access to real markets — the two hardest things in B2B SaaS. Legendree Venture Studio partners with experts like you to validate, design, and launch scalable SaaS ventures.",
        cta: "Book a Strategy Call",
        color: "accent",
      };
    } else {
      return {
        level: "Visionary Partner",
        headline: "You're ready to help shape an industry-defining venture.",
        message: "You think like a founder and operate with conviction. Legendree Venture Studio invites a limited number of Visionary Partners each quarter to co-found scalable B2B SaaS products. You bring insight and influence; we bring execution and growth infrastructure.",
        cta: "Apply for a Private Co-Founder Session",
        color: "accent",
      };
    }
  };

  const resultData = step === "result" ? getResultData() : null;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border">
        <div className="container mx-auto">
          <Link to="/">
            <img src={legendreeLogo} alt="Legendree" className="h-8 md:h-10" />
          </Link>
        </div>
      </header>

      {/* Info Collection Step */}
      {step === "info" && (
        <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary/90 to-[#002B7A] min-h-[calc(100vh-88px)] flex items-center">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl animate-fade-up">
              <h1 className="text-3xl md:text-4xl font-outfit font-bold mb-4 text-foreground">
                Are You Ready to Co-Found the Next B2B SaaS in Your Industry?
              </h1>
              <p className="text-lg text-muted-foreground mb-8 font-inter">
                You don't need to be technical to shape the next generation of software companies.
                This short quiz will show how ready you are to partner with a venture studio.
              </p>

              <form onSubmit={handleStartQuiz} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-inter font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-inter font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base uppercase rounded-2xl py-6 transition-all hover:scale-105 shadow-xl"
                >
                  Start the Quiz Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center font-inter">
                  Takes less than 3 minutes
                </p>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Quiz Step */}
      {step === "quiz" && (
        <section className="py-12 px-6 min-h-[calc(100vh-88px)]">
          <div className="container mx-auto max-w-3xl">
            {/* Progress Bar */}
            <div className="mb-8 animate-fade-up">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-inter text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-inter font-semibold text-primary">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-8 text-foreground">
                {questions[currentQuestion].question}
              </h2>

              <RadioGroup
                value={answers[currentQuestion]?.toString()}
                onValueChange={(value) => handleAnswer(parseInt(value))}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-xl border-2 border-border hover:border-primary transition-all cursor-pointer"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer font-inter text-foreground"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentQuestion > 0 && (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    size="lg"
                    className="flex-1 rounded-2xl py-6"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === undefined}
                  size="lg"
                  className={`${currentQuestion === 0 ? "w-full" : "flex-1"} bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl py-6 transition-all hover:scale-105`}
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Result Step */}
      {step === "result" && resultData && (
        <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5 min-h-[calc(100vh-88px)]">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl animate-fade-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4 text-foreground">
                  {resultData.level}
                </h1>
                <p className="text-xl text-muted-foreground font-inter mb-2">
                  Your Score: {calculateScore()} / 60
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-outfit font-semibold text-foreground">
                  {resultData.headline}
                </h2>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  {resultData.message}
                </p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-8">
                <p className="text-foreground font-inter text-base">
                  <span className="font-semibold">What's Next:</span> We'll send a free 1-page summary of your result and next action plan to{" "}
                  <span className="font-semibold">{email}</span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Button
                  size="lg"
                  className={`flex-1 ${resultData.color === "accent" ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground"} font-semibold text-base uppercase rounded-2xl px-10 py-6 transition-all hover:scale-105 shadow-xl`}
                >
                  {resultData.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full font-semibold text-base rounded-2xl px-10 py-6 transition-all hover:scale-105"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-8 bg-card rounded-2xl p-8 shadow-lg animate-fade-up">
              <h3 className="text-xl font-outfit font-semibold mb-4 text-foreground">
                Anything else you'd like us to know?
              </h3>
              <Textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Share any additional insights about your background or industry experience..."
                className="min-h-32 mb-4"
              />
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl px-8"
              >
                Submit Additional Info
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default QuizDetailed;
