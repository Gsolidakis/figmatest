import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "react-router-dom";
import { ChevronRight, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import SEOHead, { faqSchema, breadcrumbSchema } from "../components/SEOHead";

const HERO_FAQ = "https://images.pexels.com/photos/13671191/pexels-photo-13671191.jpeg";

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

const faqs = [
  {
    category: "Opening & Season",
    questions: [
      {
        q: "What are the opening hours?",
        a: "Samaria Gorge opens at 7:00 AM every day from 1 May to 31 October. The gorge closes at 1:00 PM for the complete hike (you must start before 1 PM to walk through entirely). Partial walks are permitted until 3:00 PM.",
      },
      {
        q: "Is the gorge open tomorrow?",
        a: "There is an announcement on the Home page of this website only when the gorge will be closed. Closures happen due to bad weather, strong winds, or extreme heat. Always refresh the Home page before your visit — announcements may be posted up to 8:30 PM the previous evening.",
      },
      {
        q: "When is the best time of year to hike?",
        a: "May and June offer the best conditions: comfortable temperatures, spring wildflowers in bloom, and running springs along the trail. July and August are the busiest months and can be very hot. September and October are also excellent with fewer crowds.",
      },
    ],
  },
  {
    category: "Tickets & Entry",
    questions: [
      {
        q: "Can I book tickets online in advance?",
        a: "We recommend buying tickets at the gorge entrance on the day. Since the gorge may close unexpectedly due to weather, buying in advance carries risk. There will always be available entry tickets, ferry seats, and buses for all visitors.",
      },
      {
        q: "Do I need to pay at the entrance? Can I pay by card?",
        a: "Yes, there is an entry fee payable at the gorge entrance. Credit/debit cards are accepted, as well as cash.",
      },
      {
        q: "What are the entry fees?",
        a: "Personal ticket: €10.00. Group ticket: €8.00 per person. Family ticket: €6.00 per person. Children under 15 accompanied by parents enter free.",
      },
    ],
  },
  {
    category: "The Hike",
    questions: [
      {
        q: "Do I have to walk the entire gorge?",
        a: "No. You can walk as far as you like and turn back at any point. There are no restrictions on distance. Many visitors walk a few kilometres in and return the same way.",
      },
      {
        q: "Can I walk from Agia Roumeli up to Xyloskalo?",
        a: "Yes, you can enter from either end of the gorge. Some experienced hikers prefer the upward (southern) route from Agia Roumeli.",
      },
      {
        q: "How difficult is the hike?",
        a: "Medium difficulty. The trail is mostly downhill and steep at the start from 1,250m altitude. The lower section is relatively flat. Some stretches have sharp rocks, so sturdy footwear is essential. Average fitness is sufficient for most visitors.",
      },
      {
        q: "How long does the hike take?",
        a: "With an average fitness level, a slow pace, and 4–5 stops for rest or photos, the hike takes 5 to 5.5 hours. Allow extra time for the 3 km walk from the gorge exit to the ferry dock at Agia Roumeli.",
      },
    ],
  },
  {
    category: "Practical Info",
    questions: [
      {
        q: "Is there a coffee shop or food inside the gorge?",
        a: "There is a coffee shop at the entrance (Xyloskalo) where you can buy drinks and snacks before starting. After that, there are no shops inside the gorge until you reach Agia Roumeli at the end. Buy everything you need before entering.",
      },
      {
        q: "Are there toilets along the trail?",
        a: "Yes, there are toilet facilities at several rest points along the trail.",
      },
      {
        q: "Is there mobile phone signal in the gorge?",
        a: "No. Mobile phones have no signal inside the gorge. In case of an emergency, contact one of the Park Rangers or Firefighters stationed along the trail.",
      },
      {
        q: "Is there water available in the gorge?",
        a: "There are natural springs along the trail, but by late summer many of them dry up. We strongly recommend bringing plenty of your own water. Check at the entrance whether springs are currently flowing.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ — Samaria Gorge Frequently Asked Questions"
        description="Answers to the most common questions about Samaria Gorge: opening hours, ticket prices, how to book, hike difficulty, what to bring, mobile signal, water, toilets and more."
        canonical="/FAQ.html"
        jsonLd={faqSchema(faqs.flatMap(s => s.questions))}
      />
      {/* Hero */}
      <section className="relative h-72 sm:h-80 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={HERO_FAQ} alt="Kri-Kri goat" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-primary-foreground/60 text-sm font-body hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/40" />
              <span className="text-primary-foreground/90 text-sm font-body">FAQ</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight">
              Frequently Asked
              <span className="italic font-normal block text-3xl sm:text-4xl" style={{ color: 'hsl(var(--accent-light))' }}>Questions</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionReveal>
          {faqs.map((section, si) => (
            <motion.div key={si} variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="section-label">{section.category}</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {section.questions.map((faq, qi) => (
                  <AccordionItem
                    key={qi}
                    value={`${si}-${qi}`}
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-card"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-display font-semibold text-base text-foreground hover:no-underline hover:text-primary data-[state=open]:text-primary [&>svg]:text-muted-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </SectionReveal>

        {/* Contact CTA */}
        <SectionReveal>
          <motion.div variants={fadeUp}>
            <Card className="bg-gradient-cta border-0 text-primary-foreground shadow-glow">
              <CardContent className="p-8 text-center">
                <Mail className="w-10 h-10 mx-auto mb-4 text-primary-foreground/70" />
                <h3 className="font-display font-bold text-2xl mb-3">Still have questions?</h3>
                <p className="text-primary-foreground/75 font-body mb-6 max-w-sm mx-auto">
                  Can't find the answer you're looking for? Send us an email and we'll get back to you.
                </p>
                <a href="mailto:info@samaria-gorge.gr?subject=Question about Samaria Gorge">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    info@samaria-gorge.gr
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </SectionReveal>
      </div>
    </div>
  );
}
