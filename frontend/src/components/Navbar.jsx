import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Camera, MapPin, HelpCircle, Navigation, ChevronDown, Bus, Home, Users } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const planRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (planRef.current && !planRef.current.contains(e.target)) setPlanOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const mainLinks = [
    { href: "/", label: "Home", icon: Mountain },
    { href: "/The-Hike.html", label: "The Hike", icon: Navigation },
    { href: "/Live-camera.html", label: "Live Cameras", icon: Camera },
    { href: "/Gallery.html", label: "Gallery", icon: Camera },
    { href: "/FAQ.html", label: "FAQ", icon: HelpCircle },
  ];

  const planLinks = [
    { href: "/How-to-get-there.html", label: "How to Get There", icon: Bus, desc: "Transport, timetables & prices" },
    { href: "/BookVilla.html", label: "Book a Villa", icon: Home, desc: "800m from the gorge entrance" },
    { href: "/Travel-Agencies-Chania.html", label: "Tours from Chania", icon: Users, desc: "Organised day trips" },
    { href: "/Travel-Agencies-Rethymnon.html", label: "Tours from Rethymnon", icon: Users, desc: "Organised day trips" },
    { href: "/Travel-Agencies-Heraklion.html", label: "Tours from Heraklion", icon: Users, desc: "Organised day trips" },
  ];

  const isPlanActive = planLinks.some(l => location.pathname === l.href);
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
            {mainLinks.map((link) => (
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

            {/* Plan Your Visit Dropdown */}
            <div className="relative" ref={planRef}>
              <button
                onClick={() => setPlanOpen(!planOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isPlanActive
                    ? isScrolledOrNotHome
                      ? "bg-primary/10 text-primary"
                      : "bg-primary-foreground/20 text-primary-foreground"
                    : isScrolledOrNotHome
                    ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                Plan Your Visit
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${planOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown panel */}
              {planOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-elevated z-50 overflow-hidden">
                  <div className="p-2">
                    {planLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setPlanOpen(false)}
                          className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                            location.pathname === link.href
                              ? "bg-primary/10"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className={`text-sm font-medium font-body ${location.pathname === link.href ? "text-primary" : "text-foreground"}`}>
                              {link.label}
                            </div>
                            <div className="text-xs text-muted-foreground font-body mt-0.5">{link.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/BookVilla.html">
              <Button
                size="sm"
                variant="outline"
                className={`font-medium transition-all duration-200 ${
                  isScrolledOrNotHome
                    ? "border-border text-foreground hover:bg-muted"
                    : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                Book Villa
              </Button>
            </Link>
            <Link to="/How-to-get-there.html">
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
            {mainLinks.map((link) => {
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

            {/* Plan Your Visit group in mobile */}
            <div className="mt-2 pt-2 border-t border-border">
              <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider font-body">
                Plan Your Visit
              </div>
              {planLinks.map((link) => {
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
            </div>

            <div className="flex gap-2 mt-2">
              <Link to="/BookVilla.html" onClick={() => setIsOpen(false)} className="flex-1">
                <Button variant="outline" className="w-full border-border text-foreground">
                  Book Villa
                </Button>
              </Link>
              <Link to="/How-to-get-there.html" onClick={() => setIsOpen(false)} className="flex-1">
                <Button className="w-full bg-primary text-primary-foreground">
                  Getting There
                </Button>
              </Link>
            </div>
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
