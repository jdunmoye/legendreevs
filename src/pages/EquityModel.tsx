import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Lock, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const EquityModel = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1️⃣ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D47A1] via-[#1a5cc0] to-[#2E2E2E]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.05), transparent)"
          }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-20 relative z-10 text-center max-w-5xl">
          <h1 
            className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-white leading-tight animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Turn Your Industry Insight Into a Venture — and Own a Share of It
          </h1>
          <p 
            className="text-lg text-white/80 mb-10 font-inter max-w-3xl mx-auto animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Legendree Venture Studio partners with domain experts to co-found B2B software ventures that scale. You bring the insight, access, and conviction. We bring the product, process, and build engine.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button 
              onClick={() => scrollToSection("how-it-works")}
              size="lg"
              className="bg-gradient-to-r from-[#0D47A1] to-emerald-green hover:from-[#0a3d8f] hover:to-[#00a068] text-white font-semibold text-base rounded-2xl px-6 py-3 transition-all hover:scale-105 shadow-lg"
            >
              See How It Works
            </Button>
            <Button 
              onClick={() => scrollToSection("cta")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#0D47A1] font-semibold text-base rounded-2xl px-6 py-3 transition-all hover:scale-105 backdrop-blur-sm"
            >
              Take Co-Founder Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* 2️⃣ HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-16 md:py-20 px-6 bg-cloud-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              How the Legendree Co-Founder Model Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
              We turn your experience and market knowledge into co-owned ventures — using a clear, structured model designed for long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6 mx-auto">
                🧩
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins text-center">Prototype</h3>
              <p className="text-gray-600 text-center font-inter">
                We translate your insight into a coded, clickable concept — web, mobile, or both.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins text-center">MVP Co-Build</h3>
              <p className="text-gray-600 text-center font-inter">
                You invest capital; we invest technical and product expertise to build your first version.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6 mx-auto">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins text-center">Spin-Out & Scale</h3>
              <p className="text-gray-600 text-center font-inter">
                We form a new entity and allocate equity based on your investment and our contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ EQUITY & INVESTMENT TIERS */}
      <section id="equity-structure" className="py-16 md:py-20 px-6 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6 font-poppins">
                Transparent Equity, Flexible Investment
              </h2>
              <div className="border-b-4 border-emerald-green w-16 mb-6"></div>
              <p className="text-lg text-gray-700 mb-8 font-inter">
                Your contribution isn't a cost — it's equity in a product you co-own.
              </p>
            </div>

            {/* Right: Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0D47A1] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-poppins font-semibold">Investment Amount</th>
                      <th className="px-6 py-4 text-left font-poppins font-semibold">Equity Share</th>
                      <th className="px-6 py-4 text-left font-poppins font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 font-inter">$4,000</td>
                      <td className="px-6 py-4 text-gray-700 font-inter">10%</td>
                      <td className="px-6 py-4 text-gray-600 font-inter text-sm">Entry-level contributor</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 font-inter">$8,000</td>
                      <td className="px-6 py-4 text-gray-700 font-inter">20%</td>
                      <td className="px-6 py-4 text-gray-600 font-inter text-sm">Early collaborator</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 font-inter">$12,000</td>
                      <td className="px-6 py-4 text-gray-700 font-inter">30%</td>
                      <td className="px-6 py-4 text-gray-600 font-inter text-sm">Strategic partner</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 font-inter">$16,000</td>
                      <td className="px-6 py-4 text-gray-700 font-inter">40%</td>
                      <td className="px-6 py-4 text-gray-600 font-inter text-sm">Co-founder tier</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 font-inter">$20,000</td>
                      <td className="px-6 py-4 text-gray-700 font-inter">50%</td>
                      <td className="px-6 py-4 text-gray-600 font-inter text-sm">Exceptional partner (invite-only)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <p className="text-gray-600 font-inter max-w-3xl mx-auto">
              Equity vests only after full payment and delivery milestones are met.
              Legendree retains IP and product ownership until both sides fulfill commitments.
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ PROTOTYPE & MVP PACKAGES */}
      <section id="packages" className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center font-poppins animate-fade-up">
            Choose Your Starting Point
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Web Prototype</h3>
              <p className="text-gray-600 mb-4 font-inter text-sm">Clickable coded web experience</p>
              <p className="text-2xl font-semibold text-[#0D47A1] mb-6 font-poppins">$6,000–$7,500</p>
              <p className="text-sm text-gray-500 mb-6 font-inter">Ideal for SaaS or dashboard ideas</p>
              <Button 
                onClick={() => scrollToSection("cta")}
                className="w-full bg-gradient-to-r from-[#0D47A1] to-emerald-green hover:from-[#0a3d8f] hover:to-[#00a068] text-white rounded-2xl"
              >
                Book a Discovery Call
              </Button>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Mobile Prototype</h3>
              <p className="text-gray-600 mb-4 font-inter text-sm">Clickable mobile app</p>
              <p className="text-2xl font-semibold text-[#0D47A1] mb-6 font-poppins">$8,000–$9,500</p>
              <p className="text-sm text-gray-500 mb-6 font-inter">Ideal for field or client-facing tools</p>
              <Button 
                onClick={() => scrollToSection("cta")}
                className="w-full bg-gradient-to-r from-[#0D47A1] to-emerald-green hover:from-[#0a3d8f] hover:to-[#00a068] text-white rounded-2xl"
              >
                Book a Discovery Call
              </Button>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Web + Mobile</h3>
              <p className="text-gray-600 mb-4 font-inter text-sm">Both experiences connected</p>
              <p className="text-2xl font-semibold text-[#0D47A1] mb-6 font-poppins">$12,000–$14,000</p>
              <p className="text-sm text-gray-500 mb-6 font-inter">Ideal for full user experience</p>
              <Button 
                onClick={() => scrollToSection("cta")}
                className="w-full bg-gradient-to-r from-[#0D47A1] to-emerald-green hover:from-[#0a3d8f] hover:to-[#00a068] text-white rounded-2xl"
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>

          {/* MVP Packages */}
          <div className="border-t border-gray-200 pt-12 animate-fade-up" style={{ animationDelay: "800ms" }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">MVP Development Packages:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Lean MVP</h4>
                <p className="text-2xl font-bold text-[#0D47A1] mb-2 font-poppins">$30,000</p>
                <p className="text-sm text-gray-600 font-inter">Core features only</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Growth MVP</h4>
                <p className="text-2xl font-bold text-[#0D47A1] mb-2 font-poppins">$40,000</p>
                <p className="text-sm text-gray-600 font-inter">Multi-role + payments</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Investor-Ready MVP</h4>
                <p className="text-2xl font-bold text-[#0D47A1] mb-2 font-poppins">$50,000</p>
                <p className="text-sm text-gray-600 font-inter">Analytics + admin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ PAYMENT FLEXIBILITY BANNER */}
      <section id="payment-plan" className="py-10 px-6 bg-gradient-to-r from-emerald-green to-[#0D47A1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ width: "200%", transform: "translateX(-50%)" }}></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">💡</span>
            <h3 className="text-xl md:text-2xl font-medium font-poppins">Flexible Co-Founder Plans</h3>
          </div>
          <p className="text-base md:text-lg font-inter text-white/90">
            You can split your investment into affordable, equal monthly payments — agreed upon in advance, and designed to match your comfort level.
          </p>
        </div>
      </section>

      {/* 6️⃣ CONTROL, IP & GOVERNANCE */}
      <section id="ip-governance" className="py-16 md:py-20 px-6 bg-[#F7F8FA]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6 font-poppins">
                Fair, Transparent, and Protected Partnership
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-green mt-1">✓</span>
                  <p className="text-gray-700 font-inter">
                    All IP and code belong to Legendree until full payment and delivery
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-green mt-1">✓</span>
                  <p className="text-gray-700 font-inter">
                    After payment, IP is transferred to the new co-founded venture
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-green mt-1">✓</span>
                  <p className="text-gray-700 font-inter">
                    Both equity stakes vest after meeting milestones
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-green mt-1">✓</span>
                  <p className="text-gray-700 font-inter">
                    Default clauses protect both parties if someone doesn't fulfill their role
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
              <blockquote className="italic text-gray-700 text-lg text-center border-l-4 border-emerald-green pl-6 font-inter">
                "Every dollar, every line of code, and every commitment is protected by structure — not just trust."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ WHY THIS MODEL WORKS */}
      <section id="why-model" className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-6 hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Shared Risk, Shared Reward</h3>
              <p className="text-gray-600 font-inter">
                You co-own what you help fund — not just rent a service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-6 hover:scale-110 transition-transform">
                🔒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Protected by Design</h3>
              <p className="text-gray-600 font-inter">
                Transparent equity and IP structure from day one.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-6 hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Venture Portfolio</h3>
              <p className="text-gray-600 font-inter">
                Your product joins a growing ecosystem of B2B startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ CALL-TO-ACTION BLOCK */}
      <section id="cta" className="py-20 px-6 bg-gradient-to-br from-[#0D47A1]/5 to-emerald-green/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/5 via-emerald-green/5 to-[#0D47A1]/5 animate-pulse" style={{ animationDuration: "20s" }}></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins animate-fade-up">
            Find Out If You're Co-Founder Material
          </h2>
          <p className="text-lg text-gray-600 mb-10 font-inter max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Take our 3-minute quiz to see if your experience and ambition align with the Legendree model.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link to="/quiz">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#0D47A1] to-emerald-green hover:from-[#0a3d8f] hover:to-[#00a068] text-white font-semibold text-base rounded-xl px-8 py-6 transition-all hover:scale-105 shadow-lg"
              >
                🧭 Take the Co-Founder Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-base rounded-xl px-8 py-6 transition-all hover:scale-105"
            >
              📅 Book a Strategy Call
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 9️⃣ FOOTER */}
      <Footer />
    </div>
  );
};

export default EquityModel;

