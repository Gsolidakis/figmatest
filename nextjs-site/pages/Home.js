import { useState, useEffect, useRef } from "react";
import Link from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowDown, MapPin, Clock, Calendar, Mountain, ChevronRight, Waves, TreePine, Star, Shield, AlertCircle, Bus, Home, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import SEOHead, { touristAttractionSchema } from "../components/SEOHead";

const HERO_IMAGE = "https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg";
const IRON_GATES_IMG = "https://images.unsplash.com/photo-1715974336759-fab78c6e21dc?w=800";
const GOAT_IMG1 = "https://images.pexels.com/photos/13671191/pexels-photo-13671191.jpeg";
const COASTAL_IMG = "https://images.pexels.com/photos/13459802/pexels-photo-13459802.jpeg";
const MOUNTAIN_IMG = "https://images.unsplash.com/photo-1718135458959-e2d9d7faa3c3?w=800";
const GOAT_IMG2 = "https://images.unsplash.com/photo-1594569567351-ad9e90210643?w=800";
const TRAIL_IMG = "https://images.unsplash.com/photo-1530717385694-f05b16123c4a?w=800";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  const [parallax, setParallax] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setParallax(window.scrollY * 0.35);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Samaria Gorge National Park — Official Website"
        description="Official website of Samaria Gorge National Park, Crete. Europe's longest gorge, a UNESCO Biosphere Reserve. Hike information, opening hours, ticket prices, timetables, travel agencies and accommodation."
        canonical="/index.html"
        jsonLd={touristAttractionSchema}
      />
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] max-h-[900px] overflow-hidden flex items-end">
        {/* Parallax image */}
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ transform: `translateY(${parallax}px)` }}
        >
          <img
            src={HERO_IMAGE}
            alt="Samaria Gorge dramatic landscape"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(155,30%,8%,0.3)] via-[hsl(155,25%,10%,0.5)] to-[hsl(155,20%,6%,0.85)]" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-5">
              <span className="nature-tag text-xs font-body" style={{ background: 'hsl(var(--accent)/0.2)', color: 'hsl(var(--accent-light))', border: '1px solid hsl(var(--accent)/0.35)' }}>
                🇬🇷 UNESCO Biosphere Reserve · Crete, Greece
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-primary-foreground leading-tight hero-heading mb-6"
            >
              Samaria
              <span className="block italic font-normal text-4xl sm:text-5xl lg:text-6xl" style={{ color: 'hsl(var(--accent-light))' }}>
                Gorge
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-primary-foreground/80 font-body leading-relaxed max-w-xl mb-8"
            >
              Europe's longest gorge. 16 kilometres of ancient limestone, wild Cretan beauty,
              and the legendary Kri-Kri mountain goat — home to one of the world's most breathtaking hikes.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <div className="info-pill" style={{ background: 'hsl(var(--primary)/0.25)', borderColor: 'hsl(var(--primary)/0.4)', color: 'hsl(var(--primary-foreground))' }}>
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs">Opens 7:00 AM</span>
              </div>
              <div className="info-pill" style={{ background: 'hsl(var(--primary)/0.25)', borderColor: 'hsl(var(--primary)/0.4)', color: 'hsl(var(--primary-foreground))' }}>
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">May 1 – Oct 31</span>
              </div>
              <div className="info-pill" style={{ background: 'hsl(var(--primary)/0.25)', borderColor: 'hsl(var(--primary)/0.4)', color: 'hsl(var(--primary-foreground))' }}>
                <Mountain className="w-3.5 h-3.5" />
                <span className="text-xs">13 km Trail</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/The-Hike.html">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent font-medium px-8"
                >
                  Explore the Hike
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/How-to-get-there.html">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 font-medium px-8"
                >
                  Plan Your Visit
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-primary-foreground/50 text-xs font-body tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary-foreground/50 animate-scroll" />
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x divide-primary-foreground/15">
            {[
              { icon: Mountain, label: "Gorge Length", value: "16 km" },
              { icon: Clock, label: "Hike Duration", value: "5–5.5 hrs" },
              { icon: MapPin, label: "Starting Point", value: "Xyloskalo" },
              { icon: Shield, label: "Entry Fee", value: "€10 / person" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 px-4 py-1 first:pl-0 last:pr-0">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-foreground/10 shrink-0">
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-foreground/60 font-body">{item.label}</div>
                    <div className="text-sm font-semibold font-body">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* HIGHLIGHTS */}
      <HighlightsSection />

      {/* KRI-KRI SECTION */}
      <KrikriSection />

      {/* TRAIL ROUTE */}
      <TrailRouteSection />

      {/* PLAN YOUR TRIP */}
      <PlanYourTripSection />

      {/* GALLERY TEASER */}
      <GalleryTeaser />

      {/* CTA */}
      <CTASection />
    </div>
  );
}

const SectionReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">About the Gorge</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-3 mb-6 leading-tight"
            >
              A Living Natural
              <span className="italic font-normal block" style={{ color: 'hsl(var(--primary))' }}>
                Cathedral
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground font-body leading-relaxed mb-5">
              Samaria Gorge lies deep within the Samaria National Park, an UNESCO Biosphere Reserve
              in the heart of the White Mountains (<em>Lefka Ori</em>) of western Crete. Stretching
              approximately 16 km from the Omalos plateau to the Libyan Sea, it is Europe's longest
              gorge.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              Named after an ancient village abandoned in 1962 when the area was declared a National
              Park, the gorge was preserved primarily to protect the endangered <em>Capra Aegagrus
              Cretica</em> — the Kri-Kri, Crete's iconic wild mountain goat.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                "UNESCO Biosphere Reserve",
                "European Diploma of Protected Areas",
                "Natura 2000 Site",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs font-body font-medium border-border text-muted-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-72 col-span-2">
              <img src={MOUNTAIN_IMG} alt="White Mountains Crete" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-primary-foreground text-xs font-body font-medium px-3 py-1.5 rounded-full" style={{ background: 'hsl(var(--primary)/0.7)' }}>
                  White Mountains · 1250m altitude
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img src={GOAT_IMG1} alt="Kri-Kri mountain goat" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-primary-foreground text-xs font-body font-medium">Kri-Kri</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img src={COASTAL_IMG} alt="Agia Roumeli coastline" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-primary-foreground text-xs font-body font-medium">Agia Roumeli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "The Iron Gates",
      description:
        "The most iconic stretch of the gorge — where two towering walls of limestone rise 500m high, just 4m apart. An unforgettable natural spectacle.",
      tag: "Must See",
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Ancient Flora",
      description:
        "Over 450 plant species including endemic Cretan wildflowers, towering Aleppo pines, and rare orchids that bloom in spring and early summer.",
      tag: "Nature",
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Agia Roumeli",
      description:
        "The journey ends at this remote coastal village on the Libyan Sea — reward yourself with a swim in crystal-clear waters before the ferry home.",
      tag: "Destination",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Abandoned Village",
      description:
        "Walk through the ruins of the medieval village of Samaria, deserted in 1962. The old church of Osia Maria still stands as a poignant landmark.",
      tag: "History",
    },
  ];

  return (
    <section className="py-24" style={{ background: 'hsl(var(--muted))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="section-label">Trail Highlights</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-3 leading-tight">
              What Awaits You
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              Every step through Samaria reveals a new wonder. Here are the unmissable moments of the hike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="bg-card border-border card-hover h-full flex flex-col shadow-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10" style={{ color: 'hsl(var(--primary))' }}>
                        {item.icon}
                      </div>
                      <Badge className="text-xs font-body bg-accent-light text-stone-dark border-0">
                        {item.tag}
                      </Badge>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function KrikriSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-elevated">
              <img src={GOAT_IMG2} alt="Kri-Kri Cretan wild goat" className="w-full h-full object-cover" />
            </div>
            {/* Decorative stat */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-card border border-border rounded-2xl px-6 py-4 shadow-soft">
              <div className="text-xs text-muted-foreground font-body mb-1">Endemic to</div>
              <div className="font-display font-bold text-xl text-foreground">Crete &amp; Aegean Islands</div>
              <div className="text-xs text-accent font-body mt-1 font-medium">Protected since 1962</div>
            </div>
          </div>

          {/* Text */}
          <SectionReveal>
            <motion.div variants={fadeUp}>
              <span className="section-label">The Symbol of Samaria</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-3 mb-6 leading-tight">
              Meet the
              <span className="italic font-normal block" style={{ color: 'hsl(var(--accent))' }}>Kri-Kri</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground font-body leading-relaxed mb-5">
              The <em>Capra Aegagrus Cretica</em>, known locally as the Kri-Kri, is Crete's iconic wild
              mountain goat. With its distinctive backward-curved horns and sure-footed grace on
              sheer cliffs, the Kri-Kri has been revered in Cretan culture for thousands of years.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              When Samaria National Park was established in 1962, protecting this endangered species
              was the primary mission. Today the park is one of the last refuges for these magnificent
              animals. Lucky hikers may spot them on the rocky cliffsides above the gorge.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6">
              {[
                { label: "Horns span", value: "up to 85cm" },
                { label: "Weight", value: "up to 55kg" },
                { label: "Habitat", value: "Rocky cliffs" },
                { label: "Status", value: "Protected" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 pl-4" style={{ borderColor: 'hsl(var(--accent))' }}>
                  <div className="text-xs text-muted-foreground font-body">{stat.label}</div>
                  <div className="font-display font-semibold text-lg text-foreground">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function TrailRouteSection() {
  const stops = [
    { name: "Xyloskalo", alt: "1250m", time: "Start", km: "0 km" },
    { name: "Neroutsiko", alt: "", time: "40 min", km: "1.7 km" },
    { name: "Sykia", alt: "", time: "25 min", km: "1.2 km" },
    { name: "Ag. Nikolaos", alt: "900m", time: "25 min", km: "0.9 km" },
    { name: "Samaria Village", alt: "", time: "25 min", km: "1.2 km" },
    { name: "Iron Gates", alt: "", time: "70 min", km: "3.1 km" },
    { name: "Agia Roumeli", alt: "0m", time: "70 min", km: "3.0 km" },
  ];

  return (
    <section className="py-24" style={{ background: 'hsl(var(--muted))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="section-label">Trail Map</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-3 leading-tight">
              The Route
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
              From the high mountain plateau to the Libyan Sea — 16 km of unforgettable descent.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-px" style={{ background: 'hsl(var(--primary)/0.2)' }} />

            <div className="space-y-6">
              {stops.map((stop, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                    style={{
                      background: i === 0 || i === stops.length - 1 ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
                      borderColor: 'hsl(var(--card))',
                      boxShadow: '0 0 0 3px hsl(var(--primary)/0.2)'
                    }}
                  />

                  {/* Content */}
                  <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                  }`}>
                    <Card className="bg-card border-border shadow-card">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display font-semibold text-base text-foreground">{stop.name}</span>
                          {stop.alt && (
                            <Badge variant="outline" className="text-xs font-body">{stop.alt}</Badge>
                          )}
                        </div>
                        <div className="flex gap-4 mt-2">
                          <span className="text-xs text-muted-foreground font-body">{stop.km}</span>
                          <span className="text-xs font-medium font-body" style={{ color: 'hsl(var(--accent))' }}>{stop.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link href="/The-Hike.html">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft font-medium px-8">
                Full Hike Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  const images = [
    { src: IRON_GATES_IMG, label: "The Iron Gates" },
    { src: GOAT_IMG1, label: "Kri-Kri" },
    { src: COASTAL_IMG, label: "Agia Roumeli" },
    { src: TRAIL_IMG, label: "Gorge Trail" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label">Gallery</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-3 leading-tight">
                Through the Lens
              </h2>
            </div>
            <Link href="/Gallery.html">
              <Button variant="outline" className="border-border text-foreground hover:bg-muted hidden sm:flex items-center gap-2">
                View Gallery
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative rounded-2xl overflow-hidden img-overlay card-hover ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2 h-64 lg:h-auto" : "h-44"
                }`}
                style={{ minHeight: i === 0 ? "260px" : "176px" }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-primary-foreground text-sm font-body font-medium">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function PlanYourTripSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="section-label">Before You Go</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-3 leading-tight">
              Plan Your Trip
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              Everything you need to organise your visit — from getting there to where to sleep.
            </p>
          </motion.div>

          {/* Top row — two large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Getting There */}
            <motion.div variants={fadeUp}>
              <Link href="/How-to-get-there.html" className="block group">
                <Card className="bg-gradient-cta border-0 text-primary-foreground shadow-glow h-full card-hover overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at bottom right, hsl(var(--accent)) 0%, transparent 70%)" }} />
                  <CardContent className="p-8 flex flex-col h-full min-h-[220px]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/15">
                        <Bus className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-primary-foreground mb-2">How to Get There</h3>
                    <p className="text-primary-foreground/70 font-body text-sm leading-relaxed flex-1">
                      Buses from Chania, Sougia & Paleochora · Ferry timetables · Taxi contacts · Ticket prices
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Bus from Chania", "Ferry Return", "By Car", "Taxi Boat"].map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground/80 font-body">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Book Villa */}
            <motion.div variants={fadeUp}>
              <Link href="/BookVilla.html" className="block group">
                <Card className="bg-card border-border shadow-soft h-full card-hover overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: "hsl(var(--accent-light))", filter: "blur(40px)", transform: "translate(30%, -30%)", opacity: 0.6 }} />
                  <CardContent className="p-8 flex flex-col h-full min-h-[220px]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-light">
                        <Home className="w-6 h-6 text-accent" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Book a Villa</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                      Sleep 800m from the gorge entrance. Wake up early, start first, beat the crowd.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div>
                        <div className="font-display font-bold text-3xl text-foreground">€70</div>
                        <div className="text-xs text-muted-foreground font-body">per night · 4 persons</div>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-xs text-muted-foreground font-body">
                        <div className="font-medium text-foreground text-sm">No booking fee</div>
                        Contact owners directly
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>

          {/* Bottom row — three agency cards */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-muted-foreground font-body uppercase tracking-wider">Organised Tours</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { city: "Chania", href: "/Travel-Agencies-Chania.html", count: "9 agencies", desc: "Closest city to the gorge. Most buses depart from here." },
              { city: "Rethymnon", href: "/Travel-Agencies-Rethymnon.html", count: "4 agencies", desc: "Central Crete. Hotels often include gorge tours." },
              { city: "Heraklion", href: "/Travel-Agencies-Heraklion.html", count: "4 agencies", desc: "Eastern Crete. Full-day coach trips available." },
            ].map((item) => (
              <motion.div key={item.city} variants={fadeUp}>
                <Link to={item.href} className="block group">
                  <Card className="bg-card border-border shadow-card card-hover h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/10">
                            <Users className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="font-display font-semibold text-lg text-foreground">
                            From {item.city}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">{item.desc}</p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-xs font-semibold text-accent font-body">{item.count} listed</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}


function CTASection() {
  return (
    <section className="py-24 bg-gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: 'hsl(var(--primary-light))', filter: 'blur(80px)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ background: 'hsl(var(--accent))', filter: 'blur(80px)', transform: 'translate(30%, 30%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <AlertCircle className="w-5 h-5 text-primary-foreground/60 mr-2" />
              <span className="text-primary-foreground/70 text-sm font-body">
                Open 1 May – 31 October every year
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight mb-6">
              Ready to Walk the
              <span className="italic font-normal block">Gorge of Samaria?</span>
            </h2>
            <p className="text-primary-foreground/75 font-body text-base leading-relaxed mb-10">
              No advance tickets needed. Buy your entry at the gorge entrance and prepare
              for one of Greece's greatest natural adventures.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/How-to-get-there.html">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent font-medium px-10"
                >
                  How to Get There
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/The-Hike.html">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 font-medium px-10"
                >
                  Hike Information
                </Button>
              </Link>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
