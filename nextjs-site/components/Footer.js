import Link from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Wave top */}
      <div className="overflow-hidden h-12" style={{ background: 'hsl(var(--background))' }}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full" fill="hsl(var(--foreground))">
          <path d="M0 48V20C240 0 480 40 720 20S1200 0 1440 20V48H0z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/30">
                <KrikriFooterIcon />
              </div>
              <div>
                <div className="font-display font-bold text-base text-primary-foreground">Samaria Gorge</div>
                <div className="text-xs text-primary-foreground/60 font-body">National Park · Crete</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/65 font-body leading-relaxed mb-6">
              Europe's longest gorge. A UNESCO Biosphere Reserve nestled in the White Mountains of western Crete.
            </p>
            <div className="flex items-center gap-2">
              <span className="status-open text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1" style={{animation: 'pulse 2s infinite'}}></span>
                Open May – October
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-base text-primary-foreground mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/The-Hike.html", label: "The Hike" },
                { to: "/How-to-get-there.html", label: "Getting There" },
                { to: "/Live-camera.html", label: "Live Cameras" },
                { to: "/Gallery.html", label: "Gallery" },
                { to: "/BookVilla.html", label: "Book Villa" },
                { to: "/FAQ.html", label: "FAQ" },
                { to: "/Disclaimer.html", label: "Disclaimer" },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors font-body group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Info */}
          <div>
            <h4 className="font-display font-semibold text-base text-primary-foreground mb-5">Visit Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-primary-foreground/90 font-body">Location</div>
                  <div className="text-xs text-primary-foreground/55 font-body">Xyloskalo, Omalos Plateau<br />Chania, Crete, Greece</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-primary-foreground/90 font-body">Opening Hours</div>
                  <div className="text-xs text-primary-foreground/55 font-body">7:00 AM – 1:00 PM (full hike)<br />Until 3:00 PM (partial)</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-primary-foreground/90 font-body">Season</div>
                  <div className="text-xs text-primary-foreground/55 font-body">1 May – 31 October</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base text-primary-foreground mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@samaria-gorge.gr"
                  className="flex items-center gap-3 text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors font-body group"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  info@samaria-gorge.gr
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/7zTq4ZDxpxXWWYB68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors font-body"
                >
                  <ExternalLink className="w-4 h-4 text-accent shrink-0" />
                  Google Maps Directions
                </a>
              </li>
              <li className="mt-6 pt-6 border-t border-primary-foreground/10">
                <div className="text-xs text-primary-foreground/40 font-body">
                  Entry fee accepted by card and cash
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-primary-foreground/40 font-body">
            © {new Date().getFullYear()} Samaria Gorge National Park · All rights reserved
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://whc.unesco.org/en/tentativelists/5865/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 font-body transition-colors"
            >
              UNESCO Biosphere Reserve
            </a>
            <span className="text-xs text-primary-foreground/40 font-body">
              Habitat of the Kri-Kri
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const KrikriFooterIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C12 4 9 7 9 11c0 2 1 3.5 2 4.5L8 28h16l-3-12.5c1-1 2-2.5 2-4.5 0-4-3-7-7-7z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13 8c-2-1-4-0.5-5 1.5M19 8c2-1 4-0.5 5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 11c-1.5 0-2.5 1-2.5 2.5S14.5 16 16 16s2.5-1 2.5-2.5S17.5 11 16 11z" fill="currentColor" />
  </svg>
);
