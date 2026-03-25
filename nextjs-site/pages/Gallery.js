import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";
import SEOHead, { breadcrumbSchema } from "../components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SectionReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
};

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg",
    title: "Gorge Trail",
    desc: "Hikers navigating the iconic rocky trail through the gorge",
    tag: "Trail",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1715974336759-fab78c6e21dc?w=800",
    title: "Rock Formations",
    desc: "Dramatic limestone cliffs tower over the narrow canyon",
    tag: "Landscape",
  },
  {
    src: "https://images.pexels.com/photos/13671191/pexels-photo-13671191.jpeg",
    title: "Kri-Kri",
    desc: "The endemic Cretan mountain goat in its natural rocky habitat",
    tag: "Wildlife",
  },
  {
    src: "https://images.pexels.com/photos/13459802/pexels-photo-13459802.jpeg",
    title: "Agia Roumeli",
    desc: "The coastal village and Libyan Sea at the end of the hike",
    tag: "Coast",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1718135458959-e2d9d7faa3c3?w=800",
    title: "White Mountains",
    desc: "The majestic Lefka Ori range above the gorge",
    tag: "Mountain",
  },
  {
    src: "https://images.unsplash.com/photo-1594569567351-ad9e90210643?w=800",
    title: "Mountain Goat",
    desc: "Kri-Kri goat on steep rocky terrain",
    tag: "Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1719450557419-580db300afb9?w=800",
    title: "Canyon Walls",
    desc: "Towering canyon walls with ancient vegetation",
    tag: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1530717385694-f05b16123c4a?w=800",
    title: "Rocky Hillside",
    desc: "The rugged terrain characteristic of the White Mountains",
    tag: "Nature",
  },
];

const tags = ["All", "Trail", "Landscape", "Wildlife", "Coast", "Mountain", "Nature"];

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTag === "All"
    ? galleryImages
    : galleryImages.filter(img => img.tag === activeTag);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Gallery — Samaria Gorge Photos"
        description="Photo gallery of Samaria Gorge National Park. See the Iron Gates, Kri-Kri mountain goats, the gorge trail, Agia Roumeli coastal village, and the White Mountains of Crete."
        canonical="/Gallery.html"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/Gallery.html" }])}
      />
      {/* Hero */}
      <section className="relative h-64 sm:h-80 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg"
            alt="Samaria Gorge gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">Gallery</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight">
              Gallery
            </h1>
            <p className="text-primary-foreground/75 font-body mt-2">Samaria Gorge through the lens.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <SectionReveal>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors duration-200 ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="break-inside-avoid relative rounded-2xl overflow-hidden img-overlay cursor-pointer card-hover"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '200px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-primary text-primary-foreground border-0 text-xs mb-1">{img.tag}</Badge>
                  <div className="text-primary-foreground font-display font-semibold text-base">{img.title}</div>
                  <div className="text-primary-foreground/75 text-xs font-body">{img.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'hsl(var(--foreground)/0.9)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-card/20 text-primary-foreground hover:bg-card/40 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div onClick={e => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-elevated"
            />
            <div className="mt-4 text-center">
              <Badge className="bg-primary text-primary-foreground border-0 mb-2">{lightbox.tag}</Badge>
              <div className="font-display font-semibold text-xl text-primary-foreground">{lightbox.title}</div>
              <div className="text-primary-foreground/65 font-body text-sm mt-1">{lightbox.desc}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
