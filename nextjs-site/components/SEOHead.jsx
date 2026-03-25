import Head from "next/head";

/**
 * SEOHead — centralised SEO meta tags for every page using Next.js Head
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
    <Head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}

// Export schema objects for pages to use
export const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Samaria Gorge",
  description:
    "Europe's longest gorge, a 16-kilometre UNESCO Biosphere Reserve hike through the White Mountains of Crete.",
  url: "https://www.samaria-gorge.gr",
  image: "https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Omalos",
    addressRegion: "Crete",
    addressCountry: "GR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.3081,
    longitude: 23.9726,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "15:00",
  },
};

export const hikeSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Samaria Gorge Hike",
  description: "Hike through the 16km Samaria Gorge in the White Mountains of Crete, from Xyloskalo (1250m) to the Libyan Sea at Agia Roumeli. Europe's longest gorge.",
  location: {
    "@type": "Place",
    name: "Samaria Gorge",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Xyloskalo, Omalos",
      addressRegion: "Crete",
      addressCountry: "GR",
    },
  },
  url: "https://www.samaria-gorge.gr/The-Hike.html",
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://www.samaria-gorge.gr${item.path}`,
  })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q || faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a || faq.answer,
    },
  })),
});

export const faqPageSchema = faqSchema;
