import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Plastering Services Hertfordshire | BBBrotherBuilding",
  description:
    "Professional plastering for new builds, extensions, and renovations. Smooth finishes, skimming, rendering, and plasterboard installation.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/plastering",
  },
  openGraph: {
    title: "Plastering Services Hertfordshire | BBBrotherBuilding",
    description:
      "Professional plastering for new builds, extensions, and renovations. Smooth finishes, skimming, rendering, and plasterboard installation.",
    url: "https://bbbrotherbuilding.co.uk/services/plastering",
  },
  twitter: {
    title: "Plastering Services Hertfordshire | BBBrotherBuilding",
    description:
      "Professional plastering for new builds, extensions, and renovations. Smooth finishes, skimming, rendering, and plasterboard installation.",
  },
};

export default function PlasteringPage() {
  return (
    <ServicePage
      serviceType="Plastering"
      serviceSlug="plastering"
      heroTitle="Plastering Services"
      heroHighlight="Hertfordshire"
      heroDescription="Professional plastering for new builds, extensions, and renovations. Smooth finishes, skimming, rendering, and plasterboard installation by experienced tradespeople who take pride in every surface."
      heroImage="/images/interior_wall_plastering_finished_surface.webp"
      heroImageAlt="Professional plastering finished surface by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="From fresh skim coats to full plasterboard installations, we deliver flawless surfaces that form the perfect canvas for your interiors."
      features={[
        { title: "Skimming & Finishing", description: "Flawless skim coats over existing plaster or plasterboard. We achieve a perfectly smooth, paint-ready finish every time — no ripples, no ridges." },
        { title: "Plasterboard Installation", description: "Dot-and-dab or mechanically fixed plasterboard for new walls, ceilings, and partitions. Precise fitting with seamless joints throughout." },
        { title: "Rendering", description: "Traditional sand and cement rendering and modern monocouche finishes for exterior walls. Weather-resistant and built to last for decades." },
        { title: "Patch Repairs & Restoration", description: "Expert repair of cracked, blown, or damaged plaster. We restore period features and blend repairs seamlessly with existing surfaces." },
      ]}
      processSteps={[
        { step: "01", title: "Consultation", description: "We visit your property to assess the plastering work required, discuss finishes, and understand your project timeline." },
        { step: "02", title: "Quote", description: "You receive a clear, itemised quotation with fixed pricing. No hidden costs, no surprises. The price we quote is the price you pay." },
        { step: "03", title: "Build", description: "Our skilled plasterers prepare surfaces meticulously and apply coats with precision. Dust sheets down, workspace kept tidy throughout." },
        { step: "04", title: "Walkthrough", description: "We inspect every wall and ceiling together, ensuring a flawless finish. All work is backed by our 2-year workmanship guarantee." },
      ]}
      galleryImages={[
        { src: "/images/interior_wall_plastering_large_room.webp", alt: "Plastering a large room interior by BBBrotherBuilding" },
        { src: "/images/interior_wall_plastering_finishing_room.webp", alt: "Finishing room plastering work by BBBrotherBuilding" },
      ]}
      galleryColumns={2}
      ctaTitle="Ready to Start?"
      ctaDescription="Get a free site survey and fixed-price quotation for your plastering project. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does plastering take?",
          answer: "A single room can be skimmed in 1-2 days. Larger projects like full house re-plasters or new-build plastering take 1-2 weeks. We provide detailed timelines in your quotation.",
        },
        {
          question: "How long before I can paint newly plastered walls?",
          answer: "New plaster typically needs 2-4 weeks to fully dry before painting, depending on ventilation and room conditions. We advise applying a mist coat of diluted emulsion first for the best results.",
        },
        {
          question: "Do you plaster ceilings as well as walls?",
          answer: "Yes, we plaster both walls and ceilings. This includes plasterboard installation, skimming, artex removal, and ceiling repairs. Our team handles all aspects of interior plastering.",
        },
      ]}
    />
  );
}
