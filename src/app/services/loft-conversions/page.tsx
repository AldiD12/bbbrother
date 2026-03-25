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
      review={{
        rating: 10,
        title: "Professional",
        text: "Transformed our toilet, added a fantastic top-floor extension, and sorted out the garden — all while keeping the place tidy! Communication was great and price was spot on. Would definitely use again.",
        jobLocation: "HA5",
        verified: false,
      }}
      ctaTitle="Ready to Convert Your Loft?"
      ctaDescription="Get a free site survey and fixed-price quotation for your loft conversion. No obligation, no hidden costs."
      faqs={[
        {
          question: "Do I need planning permission for a loft conversion?",
          answer: "Most dormer and Velux loft conversions fall under permitted development, meaning no planning permission is needed — provided the dormer does not extend beyond the existing roof plane at the front, and the total volume added is within 40 cubic metres (terraced) or 50 cubic metres (detached/semi). Properties in conservation areas or flats usually need a full planning application. We check this during your free site survey.",
        },
        {
          question: "How do I know if my loft can be converted?",
          answer: "The key factor is head height. You need a minimum of 2.2 metres from the top of the ceiling joists to the underside of the ridge beam. Most houses built before 2000 have enough height. We also check the roof structure (cut timber vs. trussed rafters), floor joist strength, and staircase positioning. All of this is assessed during your free site survey.",
        },
        {
          question: "What is the difference between a dormer and hip-to-gable conversion?",
          answer: "A dormer extends outward from the rear roof slope, creating a box-shaped addition with full headroom. A hip-to-gable extends the sloping side of the roof to a vertical wall, increasing the overall loft floor area. Hip-to-gable is typically only possible on semi-detached and detached homes with hipped roofs. Many homeowners combine both — a hip-to-gable with a rear dormer — for maximum space.",
        },
        {
          question: "How much does a loft conversion cost?",
          answer: "A rear dormer loft conversion typically costs £38,000-£55,000. A hip-to-gable with rear dormer ranges from £45,000-£65,000. Mansard conversions start from around £55,000. The price depends on the existing roof structure, access, and your choice of finishes for the bedroom and en-suite. Our quotation is fixed-price and includes structural steelwork, insulation, plastering, electrics, plumbing, and building control fees.",
        },
        {
          question: "Will the loft conversion affect my neighbours?",
          answer: "If your loft conversion involves work on a party wall (common on semi-detached and terraced houses), you will need to serve a party wall notice. Rear dormers on terraced houses can sometimes affect neighbours' light, though this is rarely a planning issue for permitted development. We discuss all of this during your consultation.",
        },
      ]}
    />
  );
}
