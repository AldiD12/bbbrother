import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Home Renovations Hertfordshire | BBBrotherBuilding",
  description:
    "Complete home renovations and refurbishments. From structural changes to finishing touches, we transform tired properties into beautiful homes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/general-renovations",
  },
  openGraph: {
    title: "Home Renovations Hertfordshire | BBBrotherBuilding",
    description:
      "Complete home renovations and refurbishments. From structural changes to finishing touches, we transform tired properties into beautiful homes.",
    url: "https://bbbrotherbuilding.co.uk/services/general-renovations",
  },
  twitter: {
    title: "Home Renovations Hertfordshire | BBBrotherBuilding",
    description:
      "Complete home renovations and refurbishments. From structural changes to finishing touches, we transform tired properties into beautiful homes.",
  },
};

export default function GeneralRenovationsPage() {
  return (
    <ServicePage
      serviceType="General Renovations"
      serviceSlug="general-renovations"
      heroTitle="Home Renovations"
      heroHighlight="Hertfordshire"
      heroDescription="Complete home renovations and refurbishments. From structural changes to finishing touches, we transform tired properties into beautiful homes you will love living in."
      heroImage="/images/interior_flooring_installation_hardwood.webp"
      heroImageAlt="Hardwood flooring installation as part of a home renovation by BBBrotherBuilding"
      whatWeOfferIntro="Every renovation is different. We tailor our approach to your property, your vision, and your budget — delivering a home that feels brand new."
      features={[
        { title: "Full Property Renovation", description: "Complete transformations from tired and outdated to modern and beautiful. We manage every trade, every detail, and every finish under one roof." },
        { title: "Structural Alterations", description: "Removing walls, installing steelwork, reconfiguring layouts, and opening up spaces. We handle the engineering, building control, and construction." },
        { title: "Flooring Installation", description: "Hardwood, engineered wood, luxury vinyl, and tiled flooring installed to perfection. Subfloor preparation, underfloor heating compatibility, and flawless finishing." },
        { title: "Project Management", description: "One point of contact from start to finish. We coordinate every trade, manage timelines, and keep you informed at every stage of your renovation." },
      ]}
      processSteps={[
        { step: "01", title: "Consultation", description: "We visit your property to understand your vision, assess the scope of work, and discuss priorities, timelines, and budget." },
        { step: "02", title: "Quote", description: "You receive a comprehensive, fixed-price quotation covering every element of the renovation. No hidden costs, no surprises along the way." },
        { step: "03", title: "Build", description: "Our team manages the entire renovation from strip-out to finishing touches. One crew, consistent quality, regular progress updates." },
        { step: "04", title: "Walkthrough", description: "We walk through every room together to ensure perfection. All work is backed by our 2-year workmanship guarantee and £10M insurance." },
      ]}
      galleryImages={[
        { src: "/images/interior_flooring_installation_progress.webp", alt: "Flooring installation in progress by BBBrotherBuilding" },
        { src: "/images/interior_utility_room_plastering_wiring_pipes.webp", alt: "Utility room renovation with plastering and wiring by BBBrotherBuilding" },
      ]}
      galleryColumns={2}
      ctaTitle="Ready to Start?"
      ctaDescription="Get a free consultation and fixed-price quotation for your home renovation. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a full home renovation take?",
          answer: "A full home renovation typically takes 8-16 weeks depending on the scope of work. This includes structural alterations, plastering, electrics, plumbing, flooring, and finishing. We provide a detailed project timeline in your quotation.",
        },
        {
          question: "Can I live in my home during the renovation?",
          answer: "In many cases, yes. We plan the work in phases to minimise disruption. For major structural renovations, we advise on the best approach and can prioritise essential rooms like kitchens and bathrooms first.",
        },
        {
          question: "Do you handle planning and building regulations?",
          answer: "Yes. We manage all planning applications, building regulation submissions, and structural engineering requirements. We work with trusted architects and engineers to ensure full compliance.",
        },
      ]}
    />
  );
}
