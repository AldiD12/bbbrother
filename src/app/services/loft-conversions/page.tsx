import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Loft Conversions Hertfordshire | BBBrotherBuilding",
  description:
    "Dormer, hip-to-gable, and mansard loft conversions in Hertfordshire. Maximise your home's potential with a beautifully finished additional floor. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/loft-conversions",
  },
  openGraph: {
    title: "Loft Conversions Hertfordshire | BBBrotherBuilding",
    description:
      "Dormer, hip-to-gable, and mansard loft conversions in Hertfordshire. Maximise your home's potential with a beautifully finished additional floor. Ltd company, £10M insured, 10/10 Checkatrade.",
    url: "https://bbbrotherbuilding.co.uk/services/loft-conversions",
  },
  twitter: {
    title: "Loft Conversions Hertfordshire | BBBrotherBuilding",
    description:
      "Dormer, hip-to-gable, and mansard loft conversions in Hertfordshire. Maximise your home's potential with a beautifully finished additional floor. Ltd company, £10M insured, 10/10 Checkatrade.",
  },
};

export default function LoftConversionsPage() {
  return (
    <ServicePage
      serviceType="Loft Conversions"
      serviceSlug="loft-conversions"
      heroTitle="Loft Conversions"
      heroHighlight="Hertfordshire"
      heroDescription="Dormer, hip-to-gable, and mansard loft conversions. Maximise your home's potential with a beautifully finished additional floor. From navigating permitted development rights to securing building control sign-off, our expert team manages the entire process."
      heroImage="/images/interior_skylight_installation_wide.webp"
      heroImageAlt="Skylight installation in loft conversion by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="From initial structural assessment to the final coat of paint, we handle every aspect of your loft conversion with precision and care."
      features={[
        {
          title: "Dormer Conversions",
          description:
            "The most popular loft conversion type. A dormer adds a box-shaped structure to the roof slope, creating full standing headroom, more floor space, and room for larger windows.",
        },
        {
          title: "Hip-to-Gable Conversions",
          description:
            "Ideal for semi-detached and detached homes with hipped roofs. We extend the sloping side wall to a vertical gable end, dramatically increasing usable loft space.",
        },
        {
          title: "Velux/Skylight Installations",
          description:
            "Flood your new loft room with natural light. We install high-quality Velux skylights that are thermally efficient, weatherproof, and perfectly positioned for maximum daylight.",
        },
        {
          title: "Structural Steelwork & Compliance",
          description:
            "Every loft conversion requires precision steelwork and exceptional insulation to meet building regulations. We handle all structural calculations, party wall agreements, and ensure your new floor receives full building control sign-off.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Consultation & Site Survey",
          description: "Besart visits your property to understand your vision, assess the site, and discuss your requirements in detail.",
        },
        {
          step: "02",
          title: "Detailed Fixed-Price Quotation",
          description: "You receive a comprehensive, itemised quotation with no hidden costs. The price we quote is the price you pay.",
        },
        {
          step: "03",
          title: "Project Management from Foundations to Finish",
          description: "One team throughout your project. No subcontractor surprises. Regular updates and meticulous attention to detail.",
        },
        {
          step: "04",
          title: "Final Walkthrough & 2-Year Guarantee",
          description: "We walk through every detail together. Your project is backed by our 2-year workmanship guarantee and £10M insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/interior_living_room_plastered_skylight_wide_view.webp", alt: "Plastered living room with skylight installed by BBBrotherBuilding" },
        { src: "/images/interior_skylight_lighting_effect.webp", alt: "Natural light streaming through skylight in loft conversion" },
        { src: "/images/interior_skylight_detail_view.webp", alt: "Skylight detail view in completed loft conversion in Hertfordshire" },
      ]}
      ctaTitle="Ready to Convert Your Loft?"
      ctaDescription="Get a free site survey and fixed-price quotation for your loft conversion. No obligation, no hidden costs."
      faqs={[
        {
          question: "Do I need planning permission for a loft conversion?",
          answer: "Most loft conversions fall under permitted development rights and do not require planning permission. However, if your property is in a conservation area or the conversion exceeds size limits, a planning application may be needed. We assess this during your free consultation.",
        },
        {
          question: "How long does a loft conversion take?",
          answer: "A typical loft conversion takes 8-12 weeks from start to completion. This includes structural work, insulation, plastering, electrics, plumbing, and final finishing. We provide a detailed timeline in your quotation.",
        },
        {
          question: "How much does a loft conversion cost?",
          answer: "Loft conversions in Hertfordshire typically range from £35,000 to £65,000 depending on the type (dormer, hip-to-gable, or mansard), size, and specification. We provide free site surveys and fixed-price quotations.",
        },
      ]}
    />
  );
}
