import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, Mail, Home, Car, Users, BedDouble } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import SEOHead, { breadcrumbSchema } from "../components/SEOHead";

const villaImages = [
  "https://www.samaria-gorge.gr/images/11281611.jpg",
  "https://www.samaria-gorge.gr/images/11281621.jpg",
  "https://www.samaria-gorge.gr/images/11281616.jpg",
  "https://www.samaria-gorge.gr/images/11281613.jpg",
  "https://www.samaria-gorge.gr/images/20796754.jpg",
  "https://www.samaria-gorge.gr/images/11281609.jpg",
];

export default function BookVillaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Book a Villa 800m from Samaria Gorge Entrance"
        description="Book a 4-person villa just 800 metres from the Samaria Gorge entrance. €70/night, free parking, no booking commission. Contact owners directly."
        canonical="/BookVilla.html"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "Samaria Village Villa",
          "description": "4-person villa 800m from the Samaria Gorge entrance. Free parking, no booking commission.",
          "url": "https://www.samaria-gorge.gr/BookVilla.html",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Samaria Village, Omalos",
            "addressRegion": "Crete",
            "addressCountry": "GR"
          },
          "priceRange": "€70/night",
          "telephone": "+306980070140",
          "email": "samaria-village@outlook.com"
        }}
      />

      {/* Hero */}
      <section className="relative h-64 sm:h-80 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13459802/pexels-photo-13459802.jpeg"
            alt="Stay near Samaria Gorge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">Book Villa</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight">
              Stay the Night Before
            </h1>
            <p className="text-primary-foreground/75 font-body mt-2 max-w-xl">
              A comfortable villa just 800 metres from the gorge entrance.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Badge className="bg-accent text-accent-foreground border-0 mb-5">No Booking Commission</Badge>
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Samaria Village
            </h2>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              Wake up steps from the gorge. This private villa is just <strong className="text-foreground">800 metres
              from the Samaria Gorge entrance</strong>, making it the most convenient base for an early
              morning start. Contact the owners directly — no intermediary, no commission.
            </p>

            {/* Key specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <BedDouble className="w-5 h-5" />, label: "Price", value: "€70 per night" },
                { icon: <Users className="w-5 h-5" />, label: "Capacity", value: "4 persons + extra bed" },
                { icon: <Car className="w-5 h-5" />, label: "Parking", value: "Free on-site" },
                { icon: <Home className="w-5 h-5" />, label: "Distance", value: "800m to gorge" },
              ].map((spec, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted">
                  <div className="text-primary mt-0.5 shrink-0">{spec.icon}</div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">{spec.label}</div>
                    <div className="font-semibold text-foreground text-sm font-body mt-0.5">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <Card className="bg-gradient-cta border-0 text-primary-foreground shadow-glow">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-xl mb-5">Contact the Owners Directly</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+306980070140"
                    className="flex items-center gap-4 p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/15 shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-foreground/60 font-body">Phone / WhatsApp</div>
                      <div className="font-semibold font-body">+30 698 007 0140</div>
                    </div>
                  </a>
                  <a
                    href="mailto:samaria-village@outlook.com?subject=Villa reservation"
                    className="flex items-center gap-4 p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/15 shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-foreground/60 font-body">Email</div>
                      <div className="font-semibold font-body text-sm">samaria-village@outlook.com</div>
                    </div>
                  </a>
                </div>
                <p className="text-primary-foreground/55 text-xs font-body mt-5">
                  No booking platform. No commission. All payments are arranged directly with the owners.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Photo grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-3">
              {villaImages.map((src, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden ${
                    i === 0 ? "col-span-2 h-56" : "h-36"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Samaria Village Villa photo ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background = "hsl(var(--muted))";
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-body mt-3 text-center">
              Villa photos courtesy of Samaria Village
            </p>
          </motion.div>
        </div>

        {/* Why stay note */}
        <Card className="mt-12 bg-accent-light/30 border-accent/20 shadow-card">
          <CardContent className="p-6">
            <h3 className="font-display font-semibold text-lg text-foreground mb-3">
              Why Stay the Night Before?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Beat the Heat", desc: "Start at 7 AM before the midday sun makes the gorge uncomfortable. Essential in July and August." },
                { title: "No Early Morning Drive", desc: "The drive from Chania is 1 hour on a winding mountain road. Arriving the night before means no 5 AM departure." },
                { title: "Closest Accommodation", desc: "This villa is literally 800m from the entrance. No closer option exists." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-body font-semibold text-foreground text-sm mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
