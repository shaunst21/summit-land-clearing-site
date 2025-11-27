import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#service-area", label: "Service Area" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2"
          >
            <div className="text-2xl font-bold">
              <span className="text-primary-foreground">SUMMIT</span>
              <span className="text-secondary ml-2">LAND CLEARING</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              variant="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <a href="tel:+19898988329">
                <Phone className="w-4 h-4 mr-2" />
                (989) 898-8329
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-sm font-medium hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              variant="default"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-4"
            >
              <a href="tel:+19898988329">
                <Phone className="w-4 h-4 mr-2" />
                (989) 898-8329
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
