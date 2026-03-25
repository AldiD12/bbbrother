import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NearbyLocations } from "@/components/NearbyLocations";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import type { LocationData } from "@/data/locations";

interface LocationPageProps {
  location: string;
  description: string;
  heroImage: string;
  galleryImages: { src: string; alt: string }[];
  locationData: LocationData;
}

const services = [
  {
    title: "Extensions",
    href: "/services/extensions",
    description: "Single and double storey extensions that transform your living space.",
    image: "/images/exterior_extension_finished_roof_back_view.webp",
  },
  {
    title: "Loft Conversions",
    href: "/services/loft-conversions",
    description: "Dormer, hip-to-gable, and mansard conversions to maximise your home.",
    image: "/images/interior_skylight_installation_wide.webp",
  },
  {
    title: "Bathrooms",
    href: "/services/bathroom-renovations",
    description: "Complete bathroom renovations from design through to final finish.",
    image: "/images/interior_bathroom_complete_tub_shower_tiling.webp",
  },
  {
    title: "Kitchens",
    href: "/services/kitchen-fitting",
    description: "Full kitchen fitting including plumbing, electrics, and tiling.",
    image: "/images/interior_kitchen_complete_grey_cabinets_wide.webp",
  },
];

const trustBadges = [
  {
    title: "Ltd Company",
    description: "Companies House registered #16950486. Full accountability and transparency.",
  },
  {
    title: "£10M Insurance",
    description: "£10 million public liability insurance. Complete peace of mind for every project.",
  },
  {
    title: "Checkatrade 10/10",
    description: "Vetted, reviewed, and trusted by homeowners across Hertfordshire and North West London.",
  },
  {
    title: "2-Year Guarantee",
    description: "Every project backed by our comprehensive 2-year workmanship guarantee.",
  },
  {
    title: "12 Years Experience",
    description: "Over a decade of delivering extensions, lofts, and renovations to the highest standard.",
  },
];

const locationFaqs: Record<string, { question: string; answer: string }[]> = {
  "St Albans": [
    {
      question: "Can I extend my home in a St Albans conservation area?",
      answer: "Yes, but permitted development rights are often restricted in St Albans conservation areas like the city centre and Marshalswick. You will likely need a full planning application, and materials must match the existing property — for example, matching brickwork on a Victorian terrace. We have experience working within these restrictions and handle the entire planning process for you.",
    },
    {
      question: "What type of loft conversion suits a 1930s semi in St Albans?",
      answer: "A rear dormer is the most popular choice for 1930s semis in St Albans. It creates full standing headroom and enough space for a double bedroom with en-suite. Many St Albans semis qualify under permitted development so no planning permission is needed, but we check this during your free site survey.",
    },
    {
      question: "How much does a house extension cost in St Albans?",
      answer: "A single-storey rear extension in St Albans typically costs between £35,000 and £55,000 depending on size and specification. Costs can be slightly higher than surrounding areas because many St Albans properties require heritage-sensitive materials to match existing brickwork and rooflines. We provide a detailed fixed-price quotation after your free site survey — the price we quote is the price you pay.",
    },
    {
      question: "Do you work on Georgian and Victorian properties in St Albans?",
      answer: "Yes. We regularly work on older properties around St Albans including Georgian townhouses near the cathedral and Victorian terraces in the city centre. These properties often need underpinning, specialist brickwork, and careful structural engineering — all of which our team handles in-house.",
    },
  ],
  "Watford": [
    {
      question: "What challenges do Victorian terraces in Watford present for extensions?",
      answer: "Victorian terraces in areas like Nascot Wood and West Watford often have narrow side returns and shallow rear gardens. A side-return extension or rear infill can add significant kitchen and dining space without eating into your garden. We also commonly remove the internal wall between the front and back reception rooms to create an open-plan layout with structural steelwork.",
    },
    {
      question: "Do I need a party wall agreement for an extension in Watford?",
      answer: "If your extension is being built on or near a shared boundary — which covers most terraced and semi-detached houses in Watford — yes, you will need a party wall agreement with your neighbour. We guide you through the process and can recommend experienced party wall surveyors in the Watford area.",
    },
    {
      question: "How long does a full house renovation take in Watford?",
      answer: "A full house renovation including kitchen, bathroom, and extension typically takes 16-22 weeks. For a standalone kitchen or bathroom renovation, expect 2-4 weeks. We provide a detailed project timeline in your quotation and keep you updated with regular progress photos.",
    },
    {
      question: "Can you convert a loft on a post-war semi in Watford?",
      answer: "Yes. Post-war semis — common across Watford estates built in the 1950s-1970s — usually have enough ridge height for a dormer loft conversion. We assess the existing roof structure, floor joists, and head height during your free site survey to confirm what is possible.",
    },
  ],
  "Edgware": [
    {
      question: "Can I build a double-storey extension on my Edgware home?",
      answer: "Many detached and semi-detached homes in Edgware have the plot size and garden depth to support a double-storey rear extension. Permitted development allows certain double-storey extensions without planning permission, but the rear wall cannot extend more than 3 metres and must be at least 7 metres from the rear boundary. We check all of this during your free site survey.",
    },
    {
      question: "What if my Edgware property has narrow side access?",
      answer: "Narrow side access is common in Edgware, especially on properties around Burnt Oak and Broadfields. We plan deliveries and skip placement carefully to avoid disrupting neighbours. For very tight access, we use smaller equipment and stage materials in phases. This is something we assess and plan for before work starts.",
    },
    {
      question: "How much does a bathroom renovation cost in Edgware?",
      answer: "A full bathroom renovation in Edgware typically costs between £5,000 and £15,000 depending on the size and specification. This includes strip-out, plumbing, tiling, fixture installation, and finishing. Premium finishes with underfloor heating cost more. We provide a fixed-price quotation with no hidden costs.",
    },
    {
      question: "Do you handle all trades for a renovation in Edgware?",
      answer: "Yes. Our in-house team handles every trade — plumbing, electrics, plastering, tiling, carpentry, and decorating. You deal with one team from start to finish. No subcontractors turning up unannounced.",
    },
  ],
  "Stanmore": [
    {
      question: "Are double-storey extensions popular in Stanmore?",
      answer: "Very. Stanmore has a high proportion of larger detached and semi-detached family homes where a double-storey extension adds serious value — often £100,000+ in property value for a £60,000-75,000 build cost. Many homeowners in Stanmore combine a ground-floor kitchen extension with an additional bedroom and en-suite above.",
    },
    {
      question: "Can you convert the loft on a detached house in Stanmore?",
      answer: "Yes. Detached homes in Stanmore — particularly the larger executive-style properties around Bentley Priory and Canons Park — often have excellent loft conversion potential. Hip-to-gable conversions are popular as they maximise usable space by squaring off the sloping roof ends. We assess feasibility during your free site survey.",
    },
    {
      question: "How do you manage larger renovation projects in Stanmore?",
      answer: "For larger projects — say a full extension plus loft conversion plus kitchen and bathrooms — Besart personally manages the programme of works, sequencing each trade so there is no downtime. We provide a detailed project plan before starting and keep you updated with weekly progress reports and photos.",
    },
    {
      question: "Do I need planning permission for a rear extension in Stanmore?",
      answer: "Many single-storey rear extensions in Stanmore fall under permitted development rights. However, if your home is in a conservation area or if the extension exceeds the size limits (4m for detached, 3m for semi-detached), a full planning application is needed. We handle all of this for you.",
    },
  ],
  "Barnet": [
    {
      question: "Are there planning restrictions for extensions in Barnet conservation areas?",
      answer: "Yes. Parts of Barnet — including Monken Hadley, Chipping Barnet High Street, and areas around the Old Courthouse — are conservation areas where permitted development rights are removed or restricted. You will need a full planning application, and the design must respect the character of the area. We have experience navigating Barnet Council's planning requirements.",
    },
    {
      question: "What type of extension works best on an Edwardian semi in Barnet?",
      answer: "Edwardian semis in Barnet typically suit a rear extension — either single or double storey — that opens up the kitchen-dining area into the garden. Many homeowners also combine this with a side-return extension to maximise the ground floor. Structural steelwork removes the internal walls while maintaining the property's character.",
    },
    {
      question: "How much does a loft conversion cost in Barnet?",
      answer: "A dormer loft conversion in Barnet typically costs between £38,000 and £55,000. Hip-to-gable conversions on semi-detached homes cost slightly more at £45,000 to £65,000. The exact price depends on the roof structure, access, and your specification. We provide a detailed fixed-price quotation after your free site survey.",
    },
    {
      question: "Do you work on 1930s detached properties in Barnet?",
      answer: "Yes. 1930s detached homes are one of the most common property types we work on in Barnet. They typically have good-sized plots that allow for generous rear and side extensions, and the original roof structure usually accommodates a loft conversion well.",
    },
  ],
  "Harrow": [
    {
      question: "Does Harrow's hilly terrain affect extension foundations?",
      answer: "It can. Properties on sloping ground — particularly around Harrow on the Hill — sometimes need deeper foundations or stepped footings to reach stable ground. Mature tree roots near the building line can also affect foundation depth. Our structural engineer assesses ground conditions during your site survey and designs the foundations accordingly.",
    },
    {
      question: "Can I extend a Victorian terrace near Harrow town centre?",
      answer: "Yes. Victorian terraces around Harrow town centre often benefit from rear extensions and loft conversions. Side-return infills are popular for opening up narrow kitchen layouts. You will likely need a party wall agreement with your neighbours, which we guide you through.",
    },
    {
      question: "How long does a kitchen fitting take in Harrow?",
      answer: "A typical kitchen fitting takes 2-3 weeks including strip-out, plumbing, electrics, unit installation, worktop fitting, tiling, and finishing. If the kitchen is part of a larger extension project, we schedule the kitchen install towards the end so the new space is watertight and plastered first.",
    },
    {
      question: "What is included in your fixed-price quotation?",
      answer: "Everything. Our quotation covers all materials, labour, structural engineering fees, building control fees, skip hire, and scaffolding. There are no hidden extras. If something unexpected arises — like discovering asbestos or rotten joists — we discuss it with you before any additional costs are agreed.",
    },
  ],
  "Wembley": [
    {
      question: "Do I need a party wall agreement for building work in Wembley?",
      answer: "Almost certainly. Wembley is predominantly terraced and semi-detached housing, which means most extensions and loft conversions will affect a shared wall or boundary. A party wall agreement is a legal requirement under the Party Wall Act 1996. We guide you through the notice process and can recommend local party wall surveyors.",
    },
    {
      question: "What type of extensions work on 1930s semis in Wembley?",
      answer: "The most popular option for 1930s semis in Wembley is a single-storey rear extension that opens up the kitchen-dining area — typically 3-4 metres deep. Many homeowners also convert the loft at the same time, creating a new bedroom and en-suite above. Combining both projects saves on scaffolding and overall build time.",
    },
    {
      question: "Can you renovate a flat in Wembley?",
      answer: "Yes. We have recently completed a full flat renovation in HA9 including plastering, tiling, kitchen, bathroom, electrical and plumbing work. Flat renovations require careful coordination of trades to minimise disruption to neighbours. We manage the entire process and keep the site tidy throughout.",
    },
    {
      question: "How much does an extension cost in Wembley?",
      answer: "A single-storey rear extension in Wembley typically costs between £30,000 and £48,000 depending on size and specification. Double-storey extensions range from £45,000 to £70,000. We provide free site surveys and fixed-price quotations — the price we quote is the price you pay.",
    },
  ],
  "Wood Green": [
    {
      question: "What adds the most value to a Victorian terrace in Wood Green?",
      answer: "A rear extension combined with a loft conversion typically adds the most value per pound spent. Victorian terraces in Wood Green often have untapped potential — opening up the ground floor into a modern kitchen-diner and adding a loft bedroom with en-suite can add significant value. Many of our Wood Green clients do both projects together to save on costs.",
    },
    {
      question: "Are there planning restrictions in the Noel Park Conservation Area?",
      answer: "Yes. If your property is within the Noel Park Conservation Area in Wood Green, permitted development rights are restricted. Extensions and alterations visible from the street may need planning permission, and designs must respect the original architecture. We have experience working within these restrictions and handle all planning applications.",
    },
    {
      question: "Can you convert a loft on a Victorian terrace in Wood Green?",
      answer: "Yes. Most Victorian terraces in Wood Green have enough ridge height for a rear dormer loft conversion, which creates a full bedroom with en-suite bathroom. Many qualify under permitted development so no planning permission is needed — unless you are in a conservation area. We confirm this during your free site survey.",
    },
    {
      question: "Do you work on ex-council properties in Wood Green?",
      answer: "Yes. We regularly work on ex-council flats and houses across Wood Green. Common projects include full bathroom and kitchen renovations, plastering, and decorating. Our team handles every trade in-house so you get consistent quality throughout.",
    },
  ],
};

function getLocationFaqs(location: string) {
  return locationFaqs[location] || [
    {
      question: `How much does a house extension cost in ${location}?`,
      answer: `Extension costs in ${location} vary depending on size, complexity, and specification. A single-storey rear extension typically ranges from £30,000 to £50,000, while double-storey extensions range from £45,000 to £75,000. We provide free site surveys and detailed fixed-price quotations with no hidden costs.`,
    },
    {
      question: `Do I need planning permission for building work in ${location}?`,
      answer: `Many extensions and loft conversions in ${location} fall under permitted development rights and do not require planning permission. However, this depends on the size, position, and your property type. We assess planning requirements during your free consultation and handle all applications if needed.`,
    },
    {
      question: `How long does a typical project take in ${location}?`,
      answer: `A single-storey extension typically takes 10-14 weeks from foundations to completion. Loft conversions usually take 8-12 weeks. Bathroom renovations take 2-4 weeks. We provide a detailed project timeline in your quotation and keep you updated throughout.`,
    },
  ];
}

export function LocationPage({ location, description, heroImage, galleryImages, locationData }: LocationPageProps) {
  const faqs = getLocationFaqs(location);

  const housingTypesText = locationData.housingTypes.length > 1
    ? `${locationData.housingTypes.slice(0, -1).join(', ')} and ${locationData.housingTypes.slice(-1)}`
    : locationData.housingTypes[0];

  const landmarksText = locationData.landmarks.length > 1
    ? `${locationData.landmarks[0]} or ${locationData.landmarks[1]}`
    : locationData.landmarks[0];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <LocalBusinessSchema location={locationData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: location },
        ]}
      />

      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Builders in{" "}
              <span className="text-secondary italic">{location}</span>
            </h1>
            <p className="text-lg text-charcoal mb-4 leading-relaxed max-w-lg">
              {description}
            </p>
            <p className="text-base text-charcoal/80 mb-8 leading-relaxed max-w-lg">
              Operating locally across {location}, we have extensive experience extending and renovating{" "}
              {housingTypesText}. Whether your property is near {landmarksText}, we understand the local architecture perfectly.{" "}
              <span className="font-semibold">{locationData.localChallenge}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
                aria-label={`Get a free quote for building work in ${location}`}
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a
                href="tel:07925921222"
                className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors hover:bg-primary hover:text-white"
                aria-label="Call BBBrotherBuilding on 07925 921 222"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 07925 921 222
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src={heroImage}
              alt={`Building project completed by BBBrotherBuilding in ${location}`}
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-20 md:mb-28">
        <div className="px-6 mb-10 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
            Our Services in {location}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-lg overflow-hidden"
                aria-label={`View ${service.title} services in ${location}`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} in ${location} by BBBrotherBuilding`}
                  width={400}
                  height={530}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-primary p-5">
                  <h3 className="font-headline font-bold text-lg text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm font-label">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Why {location} Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20"
              >
                <h3 className="font-headline font-bold text-lg text-primary mb-3">
                  {badge.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
              Our Work in {location}
            </h2>
            <Link
              href="/gallery"
              className="font-label font-bold text-secondary text-sm hover:underline underline-offset-4"
              aria-label="View all project gallery photos"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-outline-variant/20 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-headline font-bold text-primary hover:text-secondary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-charcoal text-base leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <NearbyLocations nearbySlugs={locationData.nearby} />

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project in {location}?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
              aria-label={`Get a free quote for your project in ${location}`}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07925921222"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
              aria-label="Call BBBrotherBuilding on 07925 921 222"
            >
              Call 07925 921 222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
