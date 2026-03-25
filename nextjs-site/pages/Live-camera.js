import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Video, Radio } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SEOHead, { breadcrumbSchema } from "../components/SEOHead";

const CAMERA_DATA = {
  entrance: {
    id: "entrance",
    title: "Samaria Gorge Entrance",
    subtitle: "Xyloskalo — Gorge Entrance Camera",
    description: "Live view of the Samaria Gorge entrance at Xyloskalo. Use this camera to check weather conditions and visitor numbers before your hike.",
    embedId: "Z5dY9EKz",
    seoTitle: "Live Camera — Samaria Gorge Entrance",
    seoDesc: "Live camera view of the Samaria Gorge entrance at Xyloskalo. Check current conditions before your hike.",
    canonical: "/Live-camera.html",
  },
  omalos: {
    id: "omalos",
    title: "Omalos Plateau",
    subtitle: "Omalos — High Plateau Camera",
    description: "Live view of the Omalos plateau above the gorge at approximately 1050m altitude. Check the weather conditions on the plateau before your drive up.",
    embedId: "kb4d296N",
    seoTitle: "Live Camera — Omalos Plateau",
    seoDesc: "Live camera of the Omalos plateau above Samaria Gorge. Check plateau weather before driving up.",
    canonical: "/Live-Camera-Omalos.html",
  },
  samaria: {
    id: "samaria",
    title: "Inside the Gorge",
    subtitle: "Samaria Village — In-Gorge View",
    description: "View from inside the Samaria Gorge near the abandoned Samaria village. This camera gives you a sense of current conditions inside the canyon.",
    embedId: null,
    xyloskaloLink: "https://www.xyloskalo.gr/",
    seoTitle: "Live Camera — Inside Samaria Gorge",
    seoDesc: "Live camera inside Samaria Gorge near the abandoned Samaria village. Check gorge conditions in real time.",
    canonical: "/Live-Camera-Samaria.html",
  },
};

const cameras = ["entrance", "omalos", "samaria"];
const tabLabels = { entrance: "Gorge Entrance", omalos: "Omalos Plateau", samaria: "Inside Gorge" };

export default function LiveCameraPage({ camera = "entrance" }) {
  const current = CAMERA_DATA[camera];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={current.seoTitle}
        description={current.seoDesc}
        canonical={current.canonical}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Live Cameras", path: "/Live-camera.html" },
          ...(camera !== "entrance" ? [{ name: current.title, path: current.canonical }] : []),
        ])}
      />

      {/* Hero */}
      <section className="relative h-48 sm:h-64 overflow-hidden flex items-end" style={{ background: 'hsl(var(--foreground))' }}>
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg"
            alt="Samaria Gorge live camera"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">Live Cameras</span>
            </div>
            <div className="flex items-center gap-3">
              <Radio className="w-5 h-5 text-accent" />
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground">
                Live Cameras
              </h1>
            </div>
            <p className="text-primary-foreground/70 font-body mt-1 text-sm">
              Real-time views from Samaria Gorge and the Omalos plateau.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Camera tabs */}
        <Tabs defaultValue={camera} className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-8 bg-muted">
            {cameras.map(cam => (
              <TabsTrigger key={cam} value={cam} asChild>
                <Link to={CAMERA_DATA[cam].canonical} className="font-body text-sm">
                  {tabLabels[cam]}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>

          {cameras.map(cam => {
            const data = CAMERA_DATA[cam];
            return (
              <TabsContent key={cam} value={cam}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card border-border shadow-soft overflow-hidden">
                    <CardContent className="p-0">
                      {/* Camera embed or placeholder */}
                      <div className="relative bg-foreground" style={{ paddingTop: '56.25%' }}>
                        {data.embedId ? (
                          <iframe
                            title={data.title}
                            src={`https://rtsp.me/embed/${data.embedId}/`}
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            allow="autoplay"
                            loading="lazy"
                          />
                        ) : data.xyloskaloLink ? (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                            <div className="text-center">
                              <Video className="w-12 h-12 text-primary-foreground/30 mx-auto mb-4" />
                              <p className="text-primary-foreground/60 font-body text-sm mb-4">
                                Camera view available via the Xyloskalo Restaurant website
                              </p>
                              <a
                                href={data.xyloskaloLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-body font-medium text-sm hover:bg-accent/90 transition-colors"
                              >
                                View Xyloskalo Restaurant Camera
                              </a>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-accent text-accent-foreground border-0 text-xs">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-foreground mr-1.5 animate-pulse" />
                                Live
                              </Badge>
                            </div>
                            <h2 className="font-display font-semibold text-xl text-foreground">{data.title}</h2>
                            <p className="text-sm text-muted-foreground font-body">{data.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed mt-4">
                          {data.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-xs text-muted-foreground font-body">
                            Camera service powered by <a href="https://rtsp.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">RTSP.ME</a>.
                            Footage updates in real time. Use this to check conditions before your visit.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Info box */}
        <Card className="mt-8 bg-primary/5 border-primary/15 shadow-card">
          <CardContent className="p-5">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How to use:</strong> These cameras show live conditions at the gorge and plateau.
              If the gorge appears closed (barriers visible) or weather looks severe, check the
              {" "}<Link href="/" className="text-primary font-medium hover:underline">Home page</Link> for
              official closure announcements before travelling.
              The gorge is open <strong className="text-foreground">7:00 AM – 1:00 PM</strong> from
              <strong className="text-foreground"> 1 May to 31 October</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
