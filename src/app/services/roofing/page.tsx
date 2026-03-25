import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Roofing Services Hertfordshire | BBBrotherBuilding",
  description:
    "New roofs, roof repairs, flat roofing, and guttering for extensions and renovations. Watertight results guaranteed.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/roofing",
  },
  openGraph: {
    title: "Roofing Services Hertfordshire | BBBrotherBuilding",
    description:
      "New roofs, roof repairs, flat roofing, and guttering for extensions and renovations. Watertight results guaranteed.",
    url: "https://bbbrotherbuilding.co.uk/services/roofing",
  },
  twitter: {
    title: "Roofing Services Hertfordshire | BBBrotherBuilding",
    description:
      "New roofs, roof repairs, flat roofing, and guttering for extensions and renovations. Watertight results guaranteed.",
  },
};

export default function RoofingPage() {
  return (
    <ServicePage
      serviceType="Roofing"
      serviceSlug="roofing"
      heroTitle="Roofing Services"
      heroHighlight="Hertfordshire"
      heroDescription="New roofs, roof repairs, flat roofing, and guttering for extensions and renovations. Watertight results guaranteed by experienced tradespeople who never cut corners overhead."
      heroImage="/images/exterior_extension_roof_guttering_system.webp"
      heroImageAlt="Completed roofing and guttering system by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="Whether you need a brand-new roof for an extension or urgent repairs to keep the weather out, we deliver watertight results every time."
      features={[
        { title: "New Roof Installation", description: "Complete new roof installations for extensions, conversions, and new builds. From timber framing to felt, battens, and tiles — built to last a lifetime." },
        { title: "Flat Roofing", description: "High-performance flat roofing systems using EPDM rubber, GRP fibreglass, and felt. Watertight solutions for extensions, dormers, and garage roofs." },
        { title: "Guttering & Fascias", description: "New guttering, fascia boards, and soffits installed or replaced. We ensure proper drainage and a clean finish that protects your property for years." },
        { title: "Roof Repairs & Maintenance", description: "Leak repairs, ridge tile repointing, flashing renewal, and storm damage restoration. Fast response to keep your home watertight and secure." },
      ]}
      processSteps={[
        { step: "01", title: "Consultation", description: "We inspect your roof, discuss your requirements, and advise on the best materials and approach for your property and budget." },
        { step: "02", title: "Quote", description: "You receive a transparent, fixed-price quotation covering all materials, labour, and scaffolding. No hidden costs, no surprises." },
        { step: "03", title: "Build", description: "Our experienced roofers work efficiently and safely, keeping your property protected throughout. Scaffolding erected, site kept tidy daily." },
        { step: "04", title: "Walkthrough", description: "We inspect every detail together from ground and roof level. All roofing work is backed by our 2-year workmanship guarantee." },
      ]}
      galleryImages={[
        { src: "/images/exterior_extension_roof_detail_shingles.webp", alt: "Extension roof detail with shingles completed by BBBrotherBuilding" },
        { src: "/images/exterior_roof_tile_completion_brick_wall.webp", alt: "Roof tile completion and brick wall by BBBrotherBuilding in Hertfordshire" },
      ]}
      galleryColumns={2}
      ctaTitle="Ready to Start?"
      ctaDescription="Get a free roof inspection and fixed-price quotation for your roofing project. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a new roof take to install?",
          answer: "A new roof for an extension typically takes 3-5 days. A full re-roof of an existing property takes 1-2 weeks depending on size and complexity. We provide a detailed timeline in your quotation.",
        },
        {
          question: "Do you provide scaffolding?",
          answer: "Yes, scaffolding is included in our quotation. We arrange erection and dismantling, and ensure it meets all health and safety requirements throughout the project.",
        },
        {
          question: "What roofing materials do you use?",
          answer: "We work with concrete tiles, clay tiles, natural slate, EPDM rubber, GRP fibreglass, and traditional felt. We advise on the best material for your property, budget, and local planning requirements.",
        },
      ]}
    />
  );
}
