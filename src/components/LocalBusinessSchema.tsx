import type { LocationData } from "@/data/locations";

interface LocalBusinessSchemaProps {
  location: LocationData;
}

export function LocalBusinessSchema({ location }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "BBBrotherBuilding Ltd",
    telephone: "+447925921222",
    email: "bledar@bbbrotherbuilding.co.uk",
    url: `https://bbbrotherbuilding.co.uk/locations/${location.slug}`,
    description: "Family-run building company in Hertfordshire specializing in extensions, loft conversions, bathrooms, and complete renovations.",
    image: "https://bbbrotherbuilding.co.uk/images/hero.webp",
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 Barkham Mews",
      addressLocality: "Reading",
      addressRegion: "Berkshire",
      postalCode: "RG1 4BX",
      addressCountry: "GB",
    },
    location: {
      "@type": "Place",
      name: "BBBrotherBuilding Operations Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "31 Arundel Drive",
        addressLocality: "Borehamwood",
        addressRegion: "Hertfordshire",
        postalCode: "WD6 2LE",
        addressCountry: "GB",
      },
    },
    sameAs: [
      "https://www.checkatrade.com/trades/bbbrotherbuildingltd",
      "https://www.instagram.com/bbbrotherbuilding/"
    ],
    award: "Checkatrade Approved & Verified",
    knowsAbout: [
      "House Extensions",
      "Loft Conversions",
      "Structural Engineering",
      "Kitchen Extensions",
      "Bathroom Design",
      "Home Renovations"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BBBrotherBuilding Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Fitting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plastering & Rendering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveways & Paving" } },
      ],
    },
    priceRange: "£££",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      geoRadius: "25000",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
