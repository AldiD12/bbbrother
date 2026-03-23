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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Borehamwood",
      addressRegion: "Hertfordshire",
      addressCountry: "GB",
    },
    priceRange: "£££",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      geoRadius: "15000",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
