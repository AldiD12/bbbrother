import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bathroom Renovations Hertfordshire | BBBrotherBuilding",
  description:
    "Complete bathroom renovations in Hertfordshire. Tiling, plumbing, fixtures, underfloor heating — all handled by one team. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/bathroom-renovations",
  },
  openGraph: {
    title: "Bathroom Renovations Hertfordshire | BBBrotherBuilding",
    description:
      "Complete bathroom renovations in Hertfordshire. Tiling, plumbing, fixtures, underfloor heating — all handled by one team. Ltd company, £10M insured, 10/10 Checkatrade.",
    url: "https://bbbrotherbuilding.co.uk/services/bathroom-renovations",
  },
  twitter: {
    title: "Bathroom Renovations Hertfordshire | BBBrotherBuilding",
    description:
      "Complete bathroom renovations in Hertfordshire. Tiling, plumbing, fixtures, underfloor heating — all handled by one team. Ltd company, £10M insured, 10/10 Checkatrade.",
  },
};

export default function BathroomRenovationsPage() {
  return (
    <ServicePage
      serviceType="Bathroom Renovations"
      serviceSlug="bathroom-renovations"
      heroTitle="Bathroom Renovations"
      heroHighlight="Hertfordshire"
      heroDescription="Complete bathroom renovations from design through to final finish. Tiling, plumbing, fixtures, underfloor heating — all handled by one team."
      heroImage="/images/interior_bathroom_complete_tub_shower_tiling.webp"
      heroImageAlt="Completed bathroom renovation with tub, shower and tiling by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="From the first tile to the final tap, we manage every element of your bathroom renovation — plumbing, electrics, tiling, and finishing — so you get a stunning result without the stress."
      features={[
        {
          title: "Full Bathroom Redesign",
          description: "From layout planning to final styling, we redesign your bathroom from the ground up. New layouts, repositioned plumbing, and a cohesive design that transforms the space entirely.",
        },
        {
          title: "Tiling & Waterproofing",
          description: "Precision tiling in ceramic, porcelain, marble, or natural stone. Every shower enclosure and wet area is professionally tanked and waterproofed to prevent leaks for decades to come.",
        },
        {
          title: "Plumbing & Fixtures",
          description: "We handle all first-fix and second-fix plumbing to ensure perfect sanitaryware installation — basins, toilets, baths, showers, and taps. Pipework is neatly routed and pressure-tested before any walls are closed up.",
        },
        {
          title: "Underfloor Heating",
          description: "Warm tiles underfoot make all the difference. We install electric underfloor heating systems beneath your bathroom floor for year-round comfort and a touch of luxury.",
        },
      ]}
      processSteps={[
        { step: "01", title: "Free Consultation & Site Survey", description: "Besart visits your property to understand your vision, assess the site, and discuss your requirements in detail." },
        { step: "02", title: "Detailed Fixed-Price Quotation", description: "You receive a comprehensive, itemised quotation with no hidden costs. The price we quote is the price you pay." },
        { step: "03", title: "Project Management from Strip-Out to Finish", description: "One team throughout your project. No subcontractor surprises. Regular updates and meticulous attention to detail." },
        { step: "04", title: "Final Walkthrough & 2-Year Guarantee", description: "We walk through every detail together. Your project is backed by our 2-year workmanship guarantee and £10M insurance." },
      ]}
      galleryImages={[
        { src: "/images/interior_bathroom_complete_sink_tub_tiling.webp", alt: "Completed bathroom with sink, tub and tiling by BBBrotherBuilding" },
        { src: "/images/interior_bathroom_complete_tub_fixtures_marble.webp", alt: "Luxury bathroom with tub, fixtures and marble finish in Hertfordshire" },
        { src: "/images/interior_bathroom_shower_tiling_detail.webp", alt: "Shower tiling detail in bathroom renovation by BBBrotherBuilding" },
      ]}
      review={{
        rating: 10,
        title: "This company is very good — I strongly recommend, 10/10",
        text: "I had a whole renovation of my flat from BBBrother Building including plastering, tiles, kitchen, bathroom and electrical and plumbing work. They were very good to deal with, very understanding and hard working. Always made sure and kept me up to date with everything they were doing. I strongly recommend this company. Top job and trustworthy people. 10/10.",
        jobLocation: "HA9",
        verified: false,
      }}
      ctaTitle="Ready to Renovate Your Bathroom?"
      ctaDescription="Get a free site survey and fixed-price quotation for your bathroom renovation. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a bathroom renovation take?",
          answer: "A standard bathroom renovation takes 2-3 weeks. This includes day 1-2 strip-out, days 3-5 first-fix plumbing and electrics, days 6-8 waterproofing (tanking) and floor preparation, days 9-12 tiling, and the final days for second-fix plumbing, fixture installation, grouting, silicone, and snagging. Larger bathrooms or those with layout changes may take up to 4 weeks.",
        },
        {
          question: "How much does a bathroom renovation cost?",
          answer: "A full bathroom renovation typically costs £6,000-£12,000 for a standard family bathroom and £8,000-£18,000 for a larger or premium-spec bathroom. This covers strip-out, plumbing, electrics, waterproofing, tiling, fixtures, and finishing. Underfloor heating adds roughly £500-£800. Our quotation is fixed-price and itemised so you know exactly where every pound goes.",
        },
        {
          question: "Do you supply the bathroom fixtures or do I choose my own?",
          answer: "Either works. Many clients choose their own sanitaryware, tiles, and taps from suppliers like Victorian Plumbing, Bathstore, or Porcelanosa, and we install them. We can also recommend suppliers and products based on your budget and style preferences. We just need fixture selections confirmed before the tiling stage so everything fits perfectly.",
        },
        {
          question: "What is tanking and does my bathroom need it?",
          answer: "Tanking is a waterproof membrane applied to walls and floors in wet areas — particularly around showers and baths. It prevents water from seeping through tiles and grout into the wall structure, which can cause damp and mould. Every bathroom we renovate includes proper tanking in wet zones. It is essential for a long-lasting finish.",
        },
        {
          question: "Can you move the toilet, shower, or bath to a different position?",
          answer: "Yes. Repositioning fixtures requires rerouting waste pipes and water supply, which we handle as part of the first-fix plumbing stage. Moving a toilet is the most complex (it needs a fall to the soil stack), but it is usually achievable. We advise on what is practical during your free consultation.",
        },
      ]}
    />
  );
}
