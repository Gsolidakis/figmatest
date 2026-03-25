import { Helmet } from "react-helmet-async";

/**
 * SEOHead — centralised SEO meta tags for every page.
 * Covers: title, description, canonical, Open Graph, Twitter Card, JSON-LD
 */
export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg",
  jsonLd = null,
  noIndex = false,
}) {
  const siteName = "Samaria Gorge National Park";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonicalUrl = canonical
    ? `https://www.samaria-gorge.gr${canonical}`
    : "https://www.samaria-gorge.gr/";

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Samaria Gorge National Park, Crete, Greece" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

// ─── Reusable JSON-LD schemas ───────────────────────────────────────────────

export const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Samaria Gorge",
  "description": "Samaria Gorge is Europe's longest gorge, located in the White Mountains of Crete, Greece. A UNESCO Biosphere Reserve and home to the endemic Kri-Kri mountain goat.",
  "url": "https://www.samaria-gorge.gr/",
  "image": "https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Xyloskalo, Omalos",
    "addressRegion": "Crete",
    "addressCountry": "GR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.3081",
    "longitude": "23.9726"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "07:00",
      "closes": "15:00",
      "validFrom": "--05-01",
      "validThrough": "--10-31"
    }
  ],
  "touristType": ["Hikers", "Nature lovers", "Adventure travelers"],
  "isAccessibleForFree": false,
  "publicAccess": true,
  "containedInPlace": {
    "@type": "Park",
    "name": "Samaria National Park"
  }
};

export const hikeSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "Samaria Gorge Hike",
  "description": "Hike through the 16km Samaria Gorge in the White Mountains of Crete, from Xyloskalo (1250m) to the Libyan Sea at Agia Roumeli. Europe's longest gorge.",
  "location": {
    "@type": "Place",
    "name": "Samaria Gorge",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Xyloskalo, Omalos",
      "addressRegion": "Crete",
      "addressCountry": "GR"
    }
  },
  "url": "https://www.samaria-gorge.gr/The-Hike.html"
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.samaria-gorge.gr${item.path}`
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});
