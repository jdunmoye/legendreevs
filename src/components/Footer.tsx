import { Linkedin, Youtube, Mail } from "lucide-react";
import legendreeLogo from "@/assets/legendree-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={legendreeLogo} alt="Legendree Venture Studio" className="h-16 mb-6 brightness-0 invert" />
            <p className="text-background/80 font-inter mb-6">
              Turning industry insight into profitable SaaS startups through strategic co-founder partnerships.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@legendree.co" 
                className="bg-background/10 hover:bg-primary w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-outfit font-bold text-lg mb-4">Studio</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Philosophy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Process</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-outfit font-bold text-lg mb-4">Get Started</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Co-Founder Quiz</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Discovery Call</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Resources</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 font-inter text-sm">
            © 2025 Legendree Venture Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
