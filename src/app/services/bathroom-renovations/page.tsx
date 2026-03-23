import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bathroom Renovations Hertfordshire | BBBrotherBuilding",
  description:
    "Complete bathroom renovations in Hertfordshire. Tiling, plumbing, fixtures, underfloor heating — all handled by one team. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/bathroom-renovations",
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
      heroImage="/images/interior_bathroom_complete_tub_shower_tiling.jpeg"
      heroImageAlt="Completed bathroom renovation with tub, shower and tiling by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="From the first tile to the final tap, we manage every element of your bathroom renovation — plumbing, electrics, tiling, and finishing — so you get a stunning result without the stress."
      features={[
        {
          title: "Full Bathroom Redesign",
          description: "From layout planning to final styling, we redesign your bathroom from the ground up. New layouts, repositioned plumbing, and a cohesive design that transforms the space entirely.",
        },
        {
          title: "Tiling & Waterproofing",
          description: "Precision tiling in ceramic, porcelain, marble, or natural stone. Every shower enclosure and wet area is fully tanked and waterproofed to prevent leaks for decades to come.",
        },
        {
          title: "Plumbing & Fixtures",
          description: "We install all sanitaryware — basins, toilets, baths, showers, and taps. Pipework is neatly routed and pressure-tested before any walls are closed up.",
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
        { src: "/images/interior_bathroom_complete_sink_tub_tiling.jpeg", alt: "Completed bathroom with sink, tub and tiling by BBBrotherBuilding" },
        { src: "/images/interior_bathroom_complete_tub_fixtures_marble.jpeg", alt: "Luxury bathroom with tub, fixtures and marble finish in Hertfordshire" },
        { src: "/images/interior_bathroom_shower_tiling_detail.jpeg", alt: "Shower tiling detail in bathroom renovation by BBBrotherBuilding" },
      ]}
      ctaTitle="Ready to Renovate Your Bathroom?"
      ctaDescription="Get a free site survey and fixed-price quotation for your bathroom renovation. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a bathroom renovation take?",
          answer: "A typical bathroom renovation takes 2-4 weeks depending on the scope of work. This includes strip-out, plumbing, tiling, fixture installation, and finishing. We provide a detailed timeline in your quotation.",
        },
        {
          question: "How much does a bathroom renovation cost?",
          answer: "Bathroom renovations typically range from £5,000 to £15,000 depending on the size and specification. Premium finishes with underfloor heating and bespoke tiling can cost more. We provide free consultations and fixed-price quotations.",
        },
        {
          question: "Do you handle all trades for the bathroom?",
          answer: "Yes. Our in-house team handles plumbing, electrics, tiling, plastering, and all finishing work. You deal with one team from start to finish — no subcontractor surprises.",
        },
      ]}
    />
  );
}
