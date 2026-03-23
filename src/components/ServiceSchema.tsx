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
    url: `https://bbbrotherbuilding.co.uk${url}`,
    provider: {
      "@type": "GeneralContractor",
      name: "BBBrotherBuilding Ltd",
      telephone: "+447925921222",
      url: "https://bbbrotherbuilding.co.uk",
    },
    areaServed: {
      "@type": "Place",
      name: "Hertfordshire and North West London",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
