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
    logo: "https://bbbrotherbuilding.co.uk/images/logo.png",
    image: "https://bbbrotherbuilding.co.uk/images/hero.webp",
    sameAs: [
      "https://www.checkatrade.com/trades/bbbrotherbuildingltd",
      "https://www.instagram.com/bbbrotherbuilding/",
      "https://www.facebook.com/bbbrotherbuilding/"
    ],
    award: "Checkatrade Approved & Verified",
    founder: {
      "@id": "https://bbbrotherbuilding.co.uk/#besart"
    },
    member: [
      {
        "@type": "Organization",
        "name": "Checkatrade"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BBBrotherBuilding Construction Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Home Renovations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen & Bathroom Remodelling" } },
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
