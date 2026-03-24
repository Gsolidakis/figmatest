import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Mountain, Clock, AlertTriangle, CheckCircle, Info, ChevronRight, Flame } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const HERO_HIKE = "https://images.unsplash.com/photo-1718135458959-e2d9d7faa3c3?w=1200";
const TRAIL_IMG = "https://images.unsplash.com/photo-1530717385694-f05b16123c4a?w=800";
const IRON_GATES = "https://images.unsplash.com/photo-1715974336759-fab78c6e21dc?w=800";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const SectionReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
};

export default function HikePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={HERO_HIKE} alt="Samaria Gorge trail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link to="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">The Hike</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight">
              The Hike
            </h1>
            <p className="text-primary-foreground/75 font-body mt-2 max-w-xl">
              Everything you need to know before you set foot in the gorge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 divide-y-2 sm:divide-y-0 sm:divide-x divide-primary-foreground/15">
            {[
              { label: "Total Length", value: "~16 km", sub: "incl. 3km to beach" },
              { label: "Duration", value: "5–5.5 hrs", sub: "avg. fitness, slow pace" },
              { label: "Difficulty", value: "Medium", sub: "mostly downhill" },
              { label: "Start Altitude", value: "1,250 m", sub: "Xyloskalo plateau" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-1 first:pl-0">
                <div className="text-xs text-primary-foreground/55 font-body">{s.label}</div>
                <div className="font-display font-bold text-2xl text-primary-foreground mt-0.5">{s.value}</div>
                <div className="text-xs text-primary-foreground/55 font-body mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* About */}
            <SectionReveal>
              <motion.div variants={fadeUp}>
                <span className="section-label">Overview</span>
                <h2 className="font-display font-bold text-3xl text-foreground mt-2 mb-5">The Gorge</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-base text-muted-foreground font-body leading-relaxed mb-4">
                Samaria Gorge begins at Xyloskalo at 1,250m altitude and descends through a dramatic
                limestone canyon to the remote coastal village of Agia Roumeli on the Libyan Sea.
                The total hiking distance is approximately 13 km through the gorge, plus an additional
                3 km to the beach and ferry dock at Agia Roumeli.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-muted-foreground font-body leading-relaxed mb-6">
                The most famous landmark is the <strong className="text-foreground">Iron Gates (Sideroportes)</strong> —
                where the gorge narrows to just 4 metres wide while the walls tower 500 metres above.
                It is one of the most dramatic natural passages in all of Europe.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden h-56">
                  <img src={IRON_GATES} alt="Iron Gates narrow passage" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-primary-foreground text-sm font-medium font-body">The Iron Gates</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-56">
                  <img src={TRAIL_IMG} alt="Gorge trail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-primary-foreground text-sm font-medium font-body">Rocky Trail</span>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>

            {/* Route Stops */}
            <SectionReveal>
              <motion.div variants={fadeUp}>
                <span className="section-label">The Route</span>
                <h2 className="font-display font-bold text-3xl text-foreground mt-2 mb-6">Stop by Stop</h2>
              </motion.div>
              <div className="space-y-3">
                {[
                  { name: "Xyloskalo — Entrance", dist: "—", time: "Start", desc: "Wooden stairs descent from the plateau. Coffee shop available.", start: true },
                  { name: "Neroutsiko", dist: "1.7 km", time: "40 min", desc: "First rest point with spring water (seasonal)." },
                  { name: "Sykia", dist: "1.2 km", time: "25 min", desc: "Fig tree area, scenic pine forest section." },
                  { name: "Ag. Nikolaos", dist: "0.9 km", time: "25 min", desc: "900m altitude. Small chapel and rest area." },
                  { name: "Vryssi", dist: "0.9 km", time: "20 min", desc: "Spring water fountain. Excellent rest stop." },
                  { name: "Prinari", dist: "1.1 km", time: "20 min", desc: "Pine grove area." },
                  { name: "Samaria Village", dist: "1.2 km", time: "25 min", desc: "Abandoned village ruins & Church of Osia Maria. Rangers station.", highlight: true },
                  { name: "Perdika", dist: "1.1 km", time: "15 min", desc: "Narrow canyon section begins." },
                  { name: "Iron Gates (Christos)", dist: "3.1 km", time: "70 min", desc: "The most dramatic passage — 4m wide, 500m high walls.", highlight: true },
                  { name: "Gorge Exit", dist: "1.8 km", time: "45 min", desc: "Official exit checkpoint." },
                  { name: "Agia Roumeli", dist: "3.0 km", time: "70 min", desc: "Libyan Sea. Ferry dock, tavernas, beach. Journey's end!", end: true },
                ].map((stop, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <div className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
                      stop.highlight ? "border-accent/30 bg-accent-light/30" :
                      stop.start || stop.end ? "border-primary/30 bg-primary/5" :
                      "border-border bg-card"
                    }`}>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0 mt-0.5 font-body ${
                          stop.start || stop.end ? "bg-primary text-primary-foreground" :
                          stop.highlight ? "bg-accent text-accent-foreground" :
                          "bg-muted text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-display font-semibold text-base text-foreground">{stop.name}</span>
                          {stop.highlight && <Badge className="text-xs bg-accent text-accent-foreground border-0">Highlight</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground font-body">{stop.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-medium text-muted-foreground font-body">{stop.dist}</div>
                        <div className="text-xs font-semibold font-body" style={{ color: 'hsl(var(--accent))' }}>{stop.time}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>

            {/* Safety Rules */}
            <SectionReveal>
              <motion.div variants={fadeUp}>
                <span className="section-label">Regulations</span>
                <h2 className="font-display font-bold text-3xl text-foreground mt-2 mb-6">Strictly Prohibited</h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Lighting fires",
                  "Camping overnight",
                  "Picking flowers or plants",
                  "Removing or destroying nests",
                  "Hunting and fishing",
                  "Pets without a leash",
                  "Throwing stones",
                  "Swimming in streams",
                  "Smoking (except rest points)",
                  "Consumption of alcohol",
                  "Excessive noise",
                  "Straying from main path",
                ].map((rule, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/15"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-destructive/15">
                      <span className="text-destructive text-xs font-bold">✕</span>
                    </div>
                    <span className="text-sm text-foreground font-body">{rule}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours Card */}
            <Card className="bg-gradient-cta border-0 text-primary-foreground shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-display font-semibold text-lg">Opening Hours</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-primary-foreground/10 pb-3">
                    <span className="text-sm font-body text-primary-foreground/75">Full hike entry</span>
                    <span className="font-semibold text-sm font-body">until 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-primary-foreground/10 pb-3">
                    <span className="text-sm font-body text-primary-foreground/75">Partial walk</span>
                    <span className="font-semibold text-sm font-body">until 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-primary-foreground/10 pb-3">
                    <span className="text-sm font-body text-primary-foreground/75">Opens</span>
                    <span className="font-semibold text-sm font-body">7:00 AM daily</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-body text-primary-foreground/75">Season</span>
                    <span className="font-semibold text-sm font-body">May 1 – Oct 31</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Mountain className="w-5 h-5 text-primary" />
                  <span className="font-display font-semibold text-lg text-foreground">What to Bring</span>
                </div>
                <ul className="space-y-3">
                  {[
                    { item: "Hiking shoes (hard soles)", essential: true },
                    { item: "Plenty of water", essential: true },
                    { item: "Hat & sunscreen", essential: true },
                    { item: "Walking sticks", essential: false },
                    { item: "Swimming suit & towel", essential: false },
                    { item: "Sunglasses", essential: false },
                    { item: "Light snacks", essential: false },
                    { item: "Cash or card for entry", essential: true },
                  ].map((i, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 shrink-0 ${i.essential ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-sm font-body ${i.essential ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {i.item}
                        {i.essential && <span className="ml-1 text-xs text-accent font-medium">(essential)</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Note */}
            <Card className="border-accent/30 bg-accent-light/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-display font-semibold text-base text-foreground">Start Early</span>
                    <p className="text-sm text-muted-foreground font-body mt-2 leading-relaxed">
                      Plan to start by 8–9 AM to avoid the intense midday heat (12:00–3:00 PM).
                      From Chania, driving to Xyloskalo takes approximately 1 hour (45 km of windy mountain road).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* No signal note */}
            <Card className="border-border bg-muted shadow-card">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="font-body font-medium text-sm text-foreground">No Mobile Signal</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      There is no mobile phone signal inside the gorge. In emergencies, contact a Park Ranger or Firefighter.
                      They are stationed along the entire trail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Link to="/get-there">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft font-medium">
                Plan Your Visit
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
