import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Kitchen Fitting Hertfordshire | BBBrotherBuilding",
  description:
    "Full kitchen fitting in Hertfordshire including plumbing, electrics, tiling, and worktop installation. From design consultation to the final reveal. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/kitchen-fitting",
  },
  openGraph: {
    title: "Kitchen Fitting Hertfordshire | BBBrotherBuilding",
    description:
      "Full kitchen fitting in Hertfordshire including plumbing, electrics, tiling, and worktop installation. From design consultation to the final reveal. Ltd company, £10M insured, 10/10 Checkatrade.",
    url: "https://bbbrotherbuilding.co.uk/services/kitchen-fitting",
  },
  twitter: {
    title: "Kitchen Fitting Hertfordshire | BBBrotherBuilding",
    description:
      "Full kitchen fitting in Hertfordshire including plumbing, electrics, tiling, and worktop installation. From design consultation to the final reveal. Ltd company, £10M insured, 10/10 Checkatrade.",
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
      heroImage="/images/interior_kitchen_complete_grey_cabinets_wide.webp"
      heroImageAlt="Completed kitchen fitting with grey cabinets by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="A new kitchen is the heart of any home renovation. We handle every trade — carpentry, plumbing, electrics, tiling — so your kitchen is fitted to perfection by one dedicated team."
      features={[
        {
          title: "Full Kitchen Installation",
          description: "Complete kitchen fitting from base units to wall cabinets, end panels, and plinths. We install kitchens from all major suppliers and ensure every door is perfectly aligned.",
        },
        {
          title: "Plumbing & Electrical",
          description: "Sink plumbing, Gas Safe connections, waste runs, and all electrical work to Part P compliance standards for ovens, hobs, extractors, and lighting. Everything routed cleanly and tested before sign-off.",
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
        { src: "/images/interior_kitchen_islands_cabinets_marble_flooring_complete.webp", alt: "Kitchen island with cabinets and marble flooring by BBBrotherBuilding" },
        { src: "/images/interior_kitchen_sink_gold_tap_marble.webp", alt: "Kitchen sink with gold tap and marble worktop in Hertfordshire" },
        { src: "/images/interior_kitchen_hob_extractor_tiling_backsplash.webp", alt: "Kitchen hob, extractor and tiling backsplash fitted by BBBrotherBuilding" },
      ]}
      review={{
        rating: 10,
        title: "This company is very good — I strongly recommend, 10/10",
        text: "I had a whole renovation of my flat from BBBrother Building including plastering, tiles, kitchen, bathroom and electrical and plumbing work. They were very good to deal with, very understanding and hard working. Always made sure and kept me up to date with everything they were doing. I strongly recommend this company. Top job and trustworthy people. 10/10.",
        jobLocation: "HA9",
        verified: false,
      }}
      ctaTitle="Ready to Transform Your Kitchen?"
      ctaDescription="Get a free site survey and fixed-price quotation for your kitchen fitting. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does a kitchen fitting take?",
          answer: "A straightforward kitchen replacement takes 2-3 weeks. This covers strip-out, first-fix plumbing and electrics, unit installation, worktop templating and fitting, tiling, second-fix, and snagging. If the kitchen is part of a larger extension or involves wall removal, the kitchen install happens in the final 2-3 weeks once the new space is plastered and ready.",
        },
        {
          question: "Can you fit a kitchen I have already purchased?",
          answer: "Yes. We regularly fit kitchens from Howdens, Wickes, IKEA, Wren, Magnet, and bespoke manufacturers. We review your kitchen plan and delivery schedule before starting, and coordinate so units arrive when we are ready to install. If you haven't purchased yet, we can advise on suppliers that offer good value at different budget levels.",
        },
        {
          question: "Do I need to move out during a kitchen fitting?",
          answer: "No. We set up a temporary kitchen area — usually in your living room or utility room — with your kettle, microwave, and a temporary water supply for washing up. We keep the work area contained and tidy at the end of each day. Most clients live at home throughout the project.",
        },
        {
          question: "What worktop materials do you recommend?",
          answer: "Quartz (e.g. Silestone, Caesarstone) is the most popular choice — it is durable, low-maintenance, and comes in a wide range of colours. Granite offers a natural stone look with excellent heat resistance. Laminate has improved dramatically and offers great value. We template all worktops on-site once the units are level to ensure a perfect fit.",
        },
        {
          question: "Can you remove a wall to create an open-plan kitchen?",
          answer: "Yes. If the wall is load-bearing, we install an RSJ steel beam to carry the load above — our structural engineer calculates the exact specification. This is one of the most popular kitchen upgrades we do, and it dramatically transforms the feel of the ground floor. Building control sign-off is included in our quotation.",
        },
      ]}
    />
  );
}
