import { Button } from "@/components/ui/button";
import { Phone, FileText, Shield, User, Wrench } from "lucide-react";

export default function Hero() {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-6">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wide">
              Serving Northeast Ohio
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            CLEAR THE WAY FOR{" "}
            <span className="text-secondary">PROGRESS</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Professional forestry mulching, land clearing, and site preparation.
            We turn overgrown properties into usable land for homeowners,
            farmers, and developers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
            >
              <a href="#contact" onClick={handleQuoteClick}>
                <FileText className="w-5 h-5 mr-2" />
                Request a Free Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              <a href="tel:+19898988329">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-8 h-8 text-secondary flex-shrink-0" />
              <span className="text-primary-foreground font-semibold">
                Fully Insured
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <User className="w-8 h-8 text-secondary flex-shrink-0" />
              <span className="text-primary-foreground font-semibold">
                Owner-Operated
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Wrench className="w-8 h-8 text-secondary flex-shrink-0" />
              <span className="text-primary-foreground font-semibold">
                Professional Equipment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
