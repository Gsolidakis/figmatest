import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Camera, MapPin, HelpCircle, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Mountain },
    { href: "/hike", label: "The Hike", icon: Navigation },
    { href: "/get-there", label: "Getting There", icon: MapPin },
    { href: "/gallery", label: "Gallery", icon: Camera },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
  ];

  const isScrolledOrNotHome = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledOrNotHome ? "nav-glass-light nav-scrolled" : "nav-glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
              isScrolledOrNotHome
                ? "bg-primary"
                : "bg-primary-foreground/15 border border-primary-foreground/30"
            }`}>
              <KrikriIcon
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolledOrNotHome ? "text-primary-foreground" : "text-primary-foreground"
                }`}
              />
            </div>
            <div>
              <div className={`font-display font-bold text-base leading-tight transition-colors duration-300 ${
                isScrolledOrNotHome ? "text-foreground" : "text-primary-foreground"
              }`}>
                Samaria Gorge
              </div>
              <div className={`text-xs font-body transition-colors duration-300 ${
                isScrolledOrNotHome ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}>
                National Park · Crete
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? isScrolledOrNotHome
                      ? "bg-primary/10 text-primary"
                      : "bg-primary-foreground/20 text-primary-foreground"
                    : isScrolledOrNotHome
                    ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/get-there">
              <Button
                size="sm"
                className={`font-medium transition-all duration-200 ${
                  isScrolledOrNotHome
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                }`}
              >
                Plan Your Visit
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolledOrNotHome
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-elevated">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
            <Link to="/get-there" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2 bg-primary text-primary-foreground">
                Plan Your Visit
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const KrikriIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 4C12 4 9 7 9 11c0 2 1 3.5 2 4.5L8 28h16l-3-12.5c1-1 2-2.5 2-4.5 0-4-3-7-7-7z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M13 8c-2-1-4-0.5-5 1.5M19 8c2-1 4-0.5 5 1.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16 11c-1.5 0-2.5 1-2.5 2.5S14.5 16 16 16s2.5-1 2.5-2.5S17.5 11 16 11z"
      fill="currentColor"
    />
  </svg>
);
