export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://bbbrotherbuilding.co.uk/#organization",
    name: "BBBrotherBuilding Ltd",
    url: "https://bbbrotherbuilding.co.uk",
    telephone: "+447925921222",
    email: "bledar@bbbrotherbuilding.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Borehamwood",
      addressRegion: "Hertfordshire",
      addressCountry: "GB",
    },
    foundingDate: "2013",
    founder: {
      "@type": "Person",
      name: "Bledar Dishani",
    },
    employee: {
      "@type": "Person",
      name: "Besart Dishani",
      jobTitle: "Director",
    },
    priceRange: "£££",
    image: "https://bbbrotherbuilding.co.uk/images/hero.webp",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Building Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Fitting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plastering" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
