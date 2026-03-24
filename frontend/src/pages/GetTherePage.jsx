import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Bus, Ship, MapPin, Phone, ChevronRight, ExternalLink, Home, Users, Link as LinkIcon } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import SEOHead, { breadcrumbSchema } from "../components/SEOHead";

const HERO_TRANSPORT = "https://images.pexels.com/photos/13459802/pexels-photo-13459802.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const SectionReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
};

export default function GetTherePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Get to Samaria Gorge — Transport, Tickets & Prices"
        description="All transport options to Samaria Gorge: buses from Chania, Sougia and Paleochora, ferry timetables, ticket prices, taxi contacts, travel agencies, and villa accommodation near the gorge entrance."
        canonical="/How-to-get-there.html"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "How to Get There", path: "/How-to-get-there.html" }])}
      />
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={HERO_TRANSPORT} alt="Agia Roumeli coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link to="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">Getting There</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight">
              Getting There
            </h1>
            <p className="text-primary-foreground/75 font-body mt-2 max-w-xl">
              All transportation options, timetables, and ticket prices.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Google Maps Link */}
        <SectionReveal>
          <motion.div variants={fadeUp} className="mb-12">
            <Card className="bg-secondary/10 border-secondary/20 shadow-card">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: 'hsl(var(--secondary)/0.15)' }}>
                      <MapPin className="w-5 h-5" style={{ color: 'hsl(var(--secondary))' }} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-base text-foreground">Samaria Gorge — Xyloskalo</div>
                      <div className="text-sm text-muted-foreground font-body">Omalos Plateau, Chania, Crete · ~45 km from Chania city (1 hour drive)</div>
                    </div>
                  </div>
                  <a
                    href="https://goo.gl/maps/7zTq4ZDxpxXWWYB68"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-border text-foreground hover:bg-muted shrink-0 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionReveal>

        {/* Transport Tabs */}
        <SectionReveal>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="section-label">Transport Options</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">How to Get There</h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Tabs defaultValue="car" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md mb-8 bg-muted">
                <TabsTrigger value="car" className="gap-2 font-body">
                  <Car className="w-4 h-4" />By Car
                </TabsTrigger>
                <TabsTrigger value="bus" className="gap-2 font-body">
                  <Bus className="w-4 h-4" />By Bus
                </TabsTrigger>
                <TabsTrigger value="tour" className="gap-2 font-body">
                  <Users className="w-4 h-4" />Tours
                </TabsTrigger>
              </TabsList>

              {/* By Car */}
              <TabsContent value="car">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-card border-border shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                          <Car className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display font-semibold text-xl text-foreground">By Car / Rental</h3>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                          Renting a car gives you the most flexibility to choose your start time.
                          Drive from Chania to Xyloskalo — approximately 45 km (1 hour) on a scenic
                          mountain road.
                        </p>
                        <div className="bg-accent-light/30 border border-accent/20 rounded-xl p-4">
                          <p className="text-sm font-medium text-foreground font-body mb-2">⚠️ Important Note</p>
                          <p className="text-sm text-muted-foreground font-body">
                            If you come by car, the <strong className="text-foreground">only way back to Xyloskalo is from Sougia</strong>.
                            Take the ferry from Agia Roumeli to Sougia, then the bus back.
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {[
                            "Two parking lots at the entrance — €5/day",
                            "Coffee shop at entrance (buy ferry tickets here)",
                            "Bus departs Sougia → Xyloskalo at 18:15",
                            "Estimated return: ~7:30 PM",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <PriceCard
                      title="Parking"
                      items={[{ label: "Per day", price: "€5.00" }]}
                      icon={<Car className="w-4 h-4" />}
                    />
                    <PriceCard
                      title="Gorge Entry Fee"
                      items={[
                        { label: "Personal", price: "€10.00" },
                        { label: "Group", price: "€8.00" },
                        { label: "Family", price: "€6.00" },
                      ]}
                      icon={<MapPin className="w-4 h-4" />}
                      highlight
                    />
                  </div>
                </div>
              </TabsContent>

              {/* By Bus */}
              <TabsContent value="bus">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <Card className="bg-card border-border shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Bus className="w-5 h-5 text-primary" />
                          <h3 className="font-display font-semibold text-lg text-foreground">Morning Buses to Xyloskalo</h3>
                        </div>
                        <div className="space-y-4">
                          <TimetableRow from="Chania" to="Xyloskalo" time="06:15 → 07:45" note="Every day" />
                          <TimetableRow from="Sougia" to="Xyloskalo" time="07:00" note="Every day" />
                          <TimetableRow from="Paleochora" to="Xyloskalo" time="06:30" note="Mon, Wed, Fri" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Bus className="w-5 h-5 text-primary" />
                          <h3 className="font-display font-semibold text-lg text-foreground">Evening Returns</h3>
                        </div>
                        <div className="space-y-4">
                          <TimetableRow from="Sougia" to="Chania" time="18:15" note="After ferry arrival" />
                          <TimetableRow from="Chora Sfakion" to="Chania" time="18:30" note="After ferry arrival" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <PriceCard
                      title="Bus Prices (one way)"
                      items={[
                        { label: "Chania → Xyloskalo (adult)", price: "€7.10" },
                        { label: "Chania → Xyloskalo (student)", price: "€5.30" },
                        { label: "Chania → Xyloskalo (disabled)", price: "€3.60" },
                        { label: "Sougia → Xyloskalo (adult)", price: "€7.00" },
                        { label: "Paleochora (adult)", price: "€6.40" },
                      ]}
                      icon={<Bus className="w-4 h-4" />}
                      highlight
                    />
                    <PriceCard
                      title="Gorge Entry Fee"
                      items={[
                        { label: "Personal", price: "€10.00" },
                        { label: "Group", price: "€8.00" },
                        { label: "Family", price: "€6.00" },
                      ]}
                      icon={<MapPin className="w-4 h-4" />}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Tours */}
              <TabsContent value="tour">
                {/* City CTA cards — linked */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { city: "Chania", href: "/Travel-Agencies-Chania.html", count: "9 agencies", desc: "Closest city · most buses depart from here" },
                    { city: "Rethymnon", href: "/Travel-Agencies-Rethymnon.html", count: "4 agencies", desc: "Central Crete · hotel pick-up often included" },
                    { city: "Heraklion", href: "/Travel-Agencies-Heraklion.html", count: "4 agencies", desc: "Eastern Crete · full-day coach trips" },
                  ].map((item) => (
                    <Link key={item.city} to={item.href} className="block group">
                      <Card className="bg-gradient-cta border-0 text-primary-foreground shadow-soft h-full card-hover">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/15">
                              <Users className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <ChevronRight className="w-4 h-4 text-primary-foreground/40 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                          <div className="font-display font-bold text-xl text-primary-foreground mb-1">From {item.city}</div>
                          <p className="text-primary-foreground/65 font-body text-xs leading-relaxed flex-1">{item.desc}</p>
                          <div className="mt-4 pt-3 border-t border-primary-foreground/15">
                            <span className="text-xs font-semibold text-accent font-body">{item.count} listed →</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "From Chania",
                      href: "/Travel-Agencies-Chania.html",
                      desc: "Multiple agencies in Chania offer organized day tours including transport, guide, and ferry return."
                    },
                    {
                      name: "From Rethymnon",
                      href: "/Travel-Agencies-Rethymnon.html",
                      desc: "Organized tours departing from Rethymnon, pick-up often included from hotels."
                    },
                    {
                      name: "From Heraklion",
                      href: "/Travel-Agencies-Heraklion.html",
                      desc: "Full-day tours from Heraklion include coach transfer and experienced local guide."
                    },
                    {
                      name: "Private Certified Guide",
                      href: "/How-to-get-there.html",
                      desc: "Hire a certified mountain guide for a personalized, expert-led experience.",
                      highlight: true
                    },
                  ].map((agency, i) => (
                    <Link key={i} to={agency.href} className="block group">
                      <Card className={`shadow-card h-full card-hover ${
                        agency.highlight ? "border-accent/30 bg-accent-light/20" : "bg-card border-border"
                      }`}>
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="font-display font-semibold text-lg text-foreground">{agency.name}</h3>
                            <div className="flex items-center gap-1 shrink-0">
                              {agency.highlight && (
                                <Badge className="bg-accent text-accent-foreground border-0">Premium</Badge>
                              )}
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">{agency.desc}</p>
                          <div className="mt-4 pt-4 border-t border-border">
                            <span className="text-sm font-medium text-primary font-body group-hover:underline">View agencies →</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Private Guides */}
                <div className="mt-8">
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-5">Private Certified Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <GuideCard
                      name="Christoforos Baladimas"
                      org="Terra Petra Trekking"
                      bio="Local mountaineer, caver, and certified trekking guide. Founded Terra Petra to share his passion for Cretan nature expeditions."
                      email="info@terrapetra.eu"
                      website="https://terrapetra.eu/"
                    />
                    <GuideCard
                      name="Pari Vigli"
                      org="Samaria & Sfakia Adventures"
                      bio="Local certified guide specializing in private hiking adventures in the Chania region of Crete."
                      email="vigli.pari@gmail.com"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </SectionReveal>

        <Separator className="my-16 bg-border" />

        {/* Boat & Return */}
        <SectionReveal>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="section-label">Return Journey</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">Ferry Back</h2>
            <p className="text-muted-foreground font-body mt-2 max-w-2xl">
              After the hike ends at Agia Roumeli, the only way to return is by ferry. You have two routes:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeUp}>
              <Card className="bg-gradient-sky border-0 text-primary-foreground shadow-soft h-full">
                <CardContent className="p-6">
                  <Ship className="w-8 h-8 mb-4 text-primary-foreground/70" />
                  <h3 className="font-display font-bold text-xl mb-2">Option 1: Agia Roumeli → Sougia</h3>
                  <p className="text-sm text-primary-foreground/75 font-body mb-4">Faster & cheaper. Bus then returns to Xyloskalo or Chania.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/70 font-body">Departure</span>
                      <span className="font-semibold font-body">17:30 daily</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/70 font-body">Adult</span>
                      <span className="font-semibold font-body">€15.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/70 font-body">Child (5–12 yrs)</span>
                      <span className="font-semibold font-body">€7.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/70 font-body">Student</span>
                      <span className="font-semibold font-body">€12.00</span>
                    </div>
                  </div>
                  <Badge className="mt-4 bg-primary-foreground/20 text-primary-foreground border-0 text-xs">Recommended</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="bg-card border-border shadow-card h-full">
                <CardContent className="p-6">
                  <Ship className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Option 2: Agia Roumeli → Chora Sfakion</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">Longer ferry ride. Bus to Chania departs after ferry arrival.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-body">Departure</span>
                      <span className="font-semibold text-foreground font-body">17:30 daily</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-body">Adult</span>
                      <span className="font-semibold text-foreground font-body">€15.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-body">Child (5–12 yrs)</span>
                      <span className="font-semibold text-foreground font-body">€7.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-body">Student</span>
                      <span className="font-semibold text-foreground font-body">€12.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="bg-card border-border shadow-card h-full">
                <CardContent className="p-6">
                  <div className="w-8 h-8 mb-4 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Taxi Boat Option</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">Private taxi boat available from Agia Roumeli port.</p>
                  <div className="space-y-3">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground font-body mb-1">Agia Roumeli → Sougia</div>
                      <div className="font-semibold text-foreground font-body">Up to €100</div>
                      <a href="tel:+306984664687" className="text-sm text-secondary font-body mt-1 flex items-center gap-1">
                        <Phone className="w-3 h-3" /> +30 698 466 4687 (Vasilis)
                      </a>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground font-body mb-1">Sougia → Xyloskalo (Taxi)</div>
                      <div className="font-semibold text-foreground font-body">€50 flat rate</div>
                      <a href="tel:+306970344422" className="text-sm text-secondary font-body mt-1 flex items-center gap-1">
                        <Phone className="w-3 h-3" /> +30 697 034 4422
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </SectionReveal>

        <Separator className="my-16 bg-border" />

        {/* Villa */}
        <SectionReveal>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="section-label">Accommodation</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">Stay the Night Before</h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card className="border-accent/20 bg-gradient-card shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <Badge className="bg-accent text-accent-foreground border-0 mb-4">No Commission</Badge>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                      Villa 800m from the Gorge Entrance
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                      Start your hike without a long drive in the dark. This comfortable villa is
                      just 800 metres from the entrance to Samaria Gorge.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { label: "Price", value: "€70 / night" },
                        { label: "Capacity", value: "4 persons + extra bed" },
                        { label: "Parking", value: "Free" },
                        { label: "Distance", value: "800m to gorge" },
                      ].map((s) => (
                        <div key={s.label} className="bg-muted rounded-lg p-3">
                          <div className="text-xs text-muted-foreground font-body">{s.label}</div>
                          <div className="font-semibold text-foreground text-sm font-body mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <a href="tel:+306980070140" className="flex items-center gap-3 text-sm text-foreground font-body hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 text-accent" /> +30 698 007 0140
                      </a>
                      <a href="mailto:samaria-village@outlook.com" className="flex items-center gap-3 text-sm text-foreground font-body hover:text-primary transition-colors">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        samaria-village@outlook.com
                      </a>
                      <div className="pt-2">
                        <Link to="/BookVilla.html">
                          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent w-full sm:w-auto font-medium">
                            View Full Villa Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4">
                        <Home className="w-10 h-10 text-primary" />
                      </div>
                      <div className="font-display font-bold text-4xl text-foreground mb-1">€70</div>
                      <div className="text-muted-foreground text-sm font-body">per night</div>
                      <div className="text-xs text-muted-foreground font-body mt-3">Direct contact with owners<br />No booking commission</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionReveal>
      </div>
    </div>
  );
}

function TimetableRow({ from, to, time, note }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
      <div>
        <div className="text-sm font-medium text-foreground font-body">
          {from} → {to}
        </div>
        {note && <div className="text-xs text-muted-foreground font-body mt-0.5">{note}</div>}
      </div>
      <div className="font-semibold text-primary font-body text-sm">{time}</div>
    </div>
  );
}

function PriceCard({ title, items, icon, highlight }) {
  return (
    <Card className={`shadow-card ${
      highlight
        ? "border-primary/20 bg-primary/5"
        : "bg-card border-border"
    }`}>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
            highlight ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
          }`}>
            {icon}
          </div>
          <span className="font-display font-semibold text-base text-foreground">{title}</span>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-body">{item.label}</span>
              <span className="font-semibold text-foreground font-body text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function GuideCard({ name, org, bio, email, website }) {
  return (
    <Card className="bg-card border-border shadow-card">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
            <span className="font-display font-bold text-lg text-primary">{name[0]}</span>
          </div>
          <div>
            <h4 className="font-display font-semibold text-base text-foreground">{name}</h4>
            <div className="text-sm text-accent font-body font-medium">{org}</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{bio}</p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${email}`} className="text-sm text-secondary font-body hover:underline">{email}</a>
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary font-body hover:underline flex items-center gap-1">
              Website <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
