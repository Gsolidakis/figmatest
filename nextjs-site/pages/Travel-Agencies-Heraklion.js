import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SEOHead, { breadcrumbSchema } from "../components/SEOHead";

const CITY_DATA = {
  chania: {
    title: "Travel Agencies from Chania",
    seoTitle: "Travel Agencies Chania — Samaria Gorge Tours",
    seoDesc: "Organized tours to Samaria Gorge departing from Chania. Compare agencies offering day trips including transport, guide and ferry return.",
    canonical: "/Travel-Agencies-Chania.html",
    agencies: [
      { name: "GetYourGuide", logo: "https://www.samaria-gorge.gr/images/GetYourGuide_logo.png", url: "https://www.getyourguide.com", desc: "Global booking platform — compare Samaria Gorge tours from multiple Chania agencies." },
      { name: "El Greco Tours", logo: "https://www.samaria-gorge.gr/images/ElGreco_LogoWhite100.png", url: null, desc: "Established Chania agency offering full-day Samaria Gorge excursions." },
      { name: "Diktyna Travel", logo: "https://www.samaria-gorge.gr/images/diktyna.png", url: null, desc: "Local Chania travel agency with organized gorge trips." },
      { name: "Sabine Travel (from Paleochora)", logo: null, url: "https://sabinetravel.gr/excursions/", desc: "Organized excursions to Samaria Gorge departing from Paleochora." },
      { name: "CTS Travel", logo: "https://www.samaria-gorge.gr/images/cts1.png", url: null, desc: "Chania travel services including Samaria Gorge day trips." },
      { name: "IO Tours", logo: "https://www.samaria-gorge.gr/images/iotours.png", url: null, desc: "Organized tours to Samaria Gorge from Chania." },
      { name: "Kyriakakis Travel", logo: "https://www.samaria-gorge.gr/images/kyriakakis.png", url: null, desc: "Chania agency with day trips to Samaria Gorge." },
      { name: "Elafonissos Travel", logo: "https://www.samaria-gorge.gr/images/elafonisos-travel.png", url: null, desc: "Chania travel agency — Samaria Gorge and Elafonissi excursions." },
      { name: "Vittorakis Travel", logo: "https://www.samaria-gorge.gr/images/vittorakistravel.png", url: null, desc: "Local Chania agency offering Samaria Gorge group tours." },
    ],
  },
  rethymnon: {
    title: "Travel Agencies from Rethymnon",
    seoTitle: "Travel Agencies Rethymnon — Samaria Gorge Tours",
    seoDesc: "Organized tours to Samaria Gorge departing from Rethymnon. Day trips including transport and guide.",
    canonical: "/Travel-Agencies-Rethymnon.html",
    agencies: [
      { name: "GetYourGuide", logo: "https://www.samaria-gorge.gr/images/GetYourGuide_logo.png", url: "https://www.getyourguide.com", desc: "Book Samaria Gorge tours online with pickup from Rethymnon hotels." },
      { name: "Klados Travel", logo: "https://www.samaria-gorge.gr/images/logoklados.png", url: null, desc: "Rethymnon travel agency offering organized Samaria Gorge excursions." },
      { name: "Check-In Creta", logo: "https://www.samaria-gorge.gr/images/check-in-creta.png", url: null, desc: "Full-day Samaria Gorge tours from Rethymnon." },
      { name: "Iakovos Travel", logo: "https://www.samaria-gorge.gr/images/iakovostravel1.png", url: null, desc: "Rethymnon-based agency with Samaria Gorge day trips." },
    ],
  },
  heraklion: {
    title: "Travel Agencies from Heraklion",
    seoTitle: "Travel Agencies Heraklion — Samaria Gorge Tours",
    seoDesc: "Organized tours to Samaria Gorge departing from Heraklion. Full-day trips with coach transfer.",
    canonical: "/Travel-Agencies-Heraklion.html",
    agencies: [
      { name: "GetYourGuide", logo: "https://www.samaria-gorge.gr/images/GetYourGuide_logo.png", url: "https://www.getyourguide.com", desc: "Compare Samaria Gorge tours from Heraklion on the world's largest activities platform." },
      { name: "Baccara Travel", logo: "https://www.samaria-gorge.gr/images/Baccara.png", url: null, desc: "Heraklion travel agency offering full-day Samaria Gorge excursions." },
      { name: "Tourline", logo: "https://www.samaria-gorge.gr/images/tourline.png", url: null, desc: "Day trips to Samaria Gorge departing from Heraklion." },
      { name: "Cretan Holidays", logo: "https://www.samaria-gorge.gr/images/cretanholidays.png", url: null, desc: "Heraklion agency with organized Samaria Gorge tours." },
    ],
  },
};

export default function TravelAgenciesPage({ city = "chania" }) {
  const current = CITY_DATA[city];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={current.seoTitle}
        description={current.seoDesc}
        canonical={current.canonical}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to Get There", path: "/How-to-get-there.html" },
          { name: current.title, path: current.canonical },
        ])}
      />

      {/* Hero */}
      <section className="relative h-56 sm:h-72 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1718135458959-e2d9d7faa3c3?w=1200"
            alt="Samaria Gorge organized tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <Link href="/How-to-get-there.html" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Getting There</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">Travel Agencies</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight">
              Organized Tours
            </h1>
            <p className="text-primary-foreground/75 font-body mt-2">
              Agencies offering guided day trips to Samaria Gorge.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* City tabs */}
        <Tabs defaultValue={city} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-lg mb-10 bg-muted">
            <TabsTrigger value="chania" asChild>
              <Link href="/Travel-Agencies-Chania.html" className="font-body text-sm">From Chania</Link>
            </TabsTrigger>
            <TabsTrigger value="rethymnon" asChild>
              <Link href="/Travel-Agencies-Rethymnon.html" className="font-body text-sm">From Rethymnon</Link>
            </TabsTrigger>
            <TabsTrigger value="heraklion" asChild>
              <Link href="/Travel-Agencies-Heraklion.html" className="font-body text-sm">From Heraklion</Link>
            </TabsTrigger>
          </TabsList>

          {["chania", "rethymnon", "heraklion"].map(c => (
            <TabsContent key={c} value={c}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="font-display font-semibold text-2xl text-foreground">{CITY_DATA[c].title}</h2>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    Contact agencies directly for current pricing and availability.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CITY_DATA[c].agencies.map((agency, i) => (
                    <Card key={i} className="bg-card border-border shadow-card card-hover">
                      <CardContent className="p-5 flex flex-col h-full">
                        {agency.logo ? (
                          <div className="h-12 mb-4 flex items-center">
                            <img
                              src={agency.logo}
                              alt={agency.name}
                              className="h-8 object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "block";
                              }}
                            />
                            <span className="hidden font-display font-semibold text-base text-foreground">{agency.name}</span>
                          </div>
                        ) : (
                          <h3 className="font-display font-semibold text-base text-foreground mb-3">{agency.name}</h3>
                        )}
                        <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">{agency.desc}</p>
                        {agency.url && (
                          <a
                            href={agency.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium font-body text-secondary hover:underline"
                          >
                            Visit website <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Note */}
        <Card className="mt-10 bg-muted border-border shadow-card">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              <strong className="text-foreground">Note:</strong> All prices listed by travel agencies include transport,
              park entry fee, and ferry return. Contact agencies directly for up-to-date pricing and
              availability. You can also visit the gorge independently — see{" "}
              <Link href="/How-to-get-there.html" className="text-primary font-medium hover:underline">
                How to Get There
              </Link>
              {" "}for public bus and ferry options.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
