interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  url: string;
}

export function ServiceSchema({ serviceType, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    description,
    image: "https://bbbrotherbuilding.co.uk/images/og-default.webp",
    url: `https://bbbrotherbuilding.co.uk${url}`,
    "@id": `https://bbbrotherbuilding.co.uk${url}#service`,
    offers: {
      "@type": "Offer",
      priceRange: "£££",
    },
    provider: {
      "@type": "GeneralContractor",
      name: "BBBrotherBuilding Ltd",
      telephone: "+447925921222",
      url: "https://bbbrotherbuilding.co.uk",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Hertfordshire"
      },
      {
        "@type": "AdministrativeArea",
        name: "Greater London"
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
