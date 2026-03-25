export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://bbbrotherbuilding.co.uk/#besart",
    name: "Besart Dishani",
    jobTitle: "Director",
    worksFor: {
      "@id": "https://bbbrotherbuilding.co.uk/#organization"
    },
    url: "https://bbbrotherbuilding.co.uk",
    image: "https://bbbrotherbuilding.co.uk/images/besart.webp",
    sameAs: [
      "https://www.linkedin.com/in/besart-dishani/",
      "https://www.checkatrade.com/trades/bbbrotherbuildingltd"
    ],
    knowsAbout: [
      "Residential Construction",
      "Project Management",
      "Structural Engineering",
      "High-end House Extensions",
      "Loft Conversions"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
