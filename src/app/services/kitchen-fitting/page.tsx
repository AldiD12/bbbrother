import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Kitchen Fitting Hertfordshire | BBBrotherBuilding",
  description:
    "Full kitchen fitting in Hertfordshire including plumbing, electrics, tiling, and worktop installation. From design consultation to the final reveal. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/kitchen-fitting",
  },
};

export default function KitchenFittingPage() {
  return (
    <ServicePage
      serviceType="Kitchen Fitting"
      serviceSlug="kitchen-fitting"
      heroTitle="Kitchen Fitting"
      heroHighlight="Hertfordshire"
      heroDescription="Full kitchen fitting including plumbing, electrics, tiling, and worktop installation. From design consultation to the final reveal."
      heroImage="/images/interior_kitchen_complete_grey_cabinets_wide.jpeg"
      heroImageAlt="Completed kitchen fitting with grey cabinets by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="A new kitchen is the heart of any home renovation. We handle every trade — carpentry, plumbing, electrics, tiling — so your kitchen is fitted to perfection by one dedicated team."
      features={[
        {
          title: "Full Kitchen Installation",
          description: "Complete kitchen fitting from base units to wall cabinets, end panels, and plinths. We install kitchens from all major suppliers and ensure every door is perfectly aligned.",
        },
        {
          title: "Plumbing & Electrical",
          description: "Sink plumbing, dishwasher connections, waste runs, and all electrical work for ovens, hobs, extractors, and lighting. Everything routed cleanly and tested before sign-off.",
        },
        {
          title: "Tiling & Splashbacks",
          description: "From classic metro tiles to large-format porcelain and statement splashbacks. Precision cutting, level lines, and immaculate grouting that elevates the entire room.",
        },
        {
          title: "Worktops & Island Units",
          description: "We template, supply, and fit worktops in quartz, granite, marble, and laminate. Kitchen islands built and installed with integrated storage, seating, and power outlets.",
        },
      ]}
      processSteps={[
        { step: "01", title: "Free Consultation & Site Survey", description: "Besart visits your property to understand your vision, assess the site, and discuss your requirements in detail." },
        { step: "02", title: "Detailed Fixed-Price Quotation", description: "You receive a comprehensive, itemised quotation with no hidden costs. The price we quote is the price you pay." },
        { step: "03", title: "Project Management from Strip-Out to Finish", description: "One team throughout your project. No subcontractor surprises. Regular updates and meticulous attention to detail." },
        { step: "04", title: "Final Walkthrough & 2-Year Guarantee", description: "We walk through every detail together. Your project is backed by our 2-year workmanship guarantee and £10M insurance." },
      ]}
      galleryImages={[
        { src: "/images/interior_kitchen_islands_cabinets_marble_flooring_complete.jpeg", alt: "Kitchen island with cabinets and marble flooring by BBBrotherBuilding" },
        { src: "/images/interior_kitchen_sink_gold_tap_marble.jpeg", alt: "Kitchen sink with gold tap and marble worktop in Hertfordshire" },
        { src: "/images/interior_kitchen_hob_extractor_tiling_backsplash.jpeg", alt: "Kitchen hob, extractor and tiling backsplash fitted by BBBrotherBuilding" },
      ]}
      ctaTitle="Ready to Transform Your Kitchen?"
      ctaDescription="Get a free site survey and fixed-price quotation for your kitchen fitting. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a kitchen fitting take?",
          answer: "A typical kitchen fitting takes 2-3 weeks including strip-out, plumbing, electrics, unit installation, worktop fitting, tiling, and finishing. We provide a detailed timeline in your quotation.",
        },
        {
          question: "Can you fit a kitchen I've already purchased?",
          answer: "Yes, we fit kitchens from all major suppliers including Howdens, Wickes, IKEA, and bespoke manufacturers. We also supply and fit complete kitchens if preferred.",
        },
        {
          question: "Do you handle all electrical and plumbing work?",
          answer: "Yes. Our in-house team handles all plumbing, electrics, gas connections, tiling, and finishing work. One team, one point of contact, no subcontractor surprises.",
        },
      ]}
    />
  );
}
