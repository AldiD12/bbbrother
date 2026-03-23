import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "House Extensions Hertfordshire | BBBrotherBuilding",
  description:
    "Single & double storey house extensions in Hertfordshire. Transform your living space with additional rooms, open-plan layouts, and seamless integration. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/extensions",
  },
};

export default function ExtensionsPage() {
  return (
    <ServicePage
      serviceType="House Extensions"
      serviceSlug="extensions"
      heroTitle="House Extensions"
      heroHighlight="Hertfordshire"
      heroDescription="Single &amp; double storey extensions designed to transform your living space. From planning permission and party wall agreements through to foundations, footings, RSJ steel beams, and building control sign-off — we manage the entire process. Our structural engineer ensures every element is compliant, while our team handles underpinning where required for a seamless integration with your existing home."
      heroImage="/images/exterior_extension_finished_roof_back_view.jpeg"
      heroImageAlt="Completed house extension with roof and brickwork by BBBrotherBuilding in Hertfordshire"
      whatWeOfferIntro="Every extension is unique. We tailor our approach to your property, your lifestyle, and your budget — delivering outstanding results every time."
      features={[
        {
          title: "Single Storey Extensions",
          description:
            "Expand your ground floor with a beautifully designed single storey extension. We handle foundations and footings, structural engineer calculations, and building control sign-off. Perfect for larger kitchens, dining rooms, or open-plan living areas that flow naturally from your existing home.",
        },
        {
          title: "Double Storey Extensions",
          description:
            "Maximise your investment with a double storey extension that adds significant living space across two floors. RSJ steel beams and underpinning ensure structural integrity, while we manage planning permission applications and party wall agreements with your neighbours.",
        },
        {
          title: "Open-Plan Living Spaces",
          description:
            "Remove internal walls, install structural steelwork including RSJ steel beams, and create the bright, connected living spaces modern families need. Our structural engineer handles all calculations, and we manage building control sign-off for complete compliance.",
        },
        {
          title: "Structural Engineering & Building Regs",
          description:
            "From foundation design and footings to structural calculations and building control sign-off, we manage every technical requirement. This includes party wall agreements, planning permission applications, underpinning of existing foundations, and RSJ steel beam installation so you don't have to worry about compliance.",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Free Consultation & Site Survey",
          description:
            "Besart visits your property to understand your vision, assess the site, and discuss your requirements in detail.",
        },
        {
          step: "02",
          title: "Detailed Fixed-Price Quotation",
          description:
            "You receive a comprehensive, itemised quotation with no hidden costs. The price we quote is the price you pay.",
        },
        {
          step: "03",
          title: "Project Management from Foundations to Finish",
          description:
            "One team throughout your project. No subcontractor surprises. Regular updates and meticulous attention to detail.",
        },
        {
          step: "04",
          title: "Final Walkthrough & 2-Year Guarantee",
          description:
            "We walk through every detail together. Your project is backed by our 2-year workmanship guarantee and £10M insurance.",
        },
      ]}
      galleryImages={[
        { src: "/images/exterior_extension_brickwork_windows_view.jpeg", alt: "Extension brickwork with window frames fitted by BBBrotherBuilding" },
        { src: "/images/exterior_extension_roof_guttering_system.jpeg", alt: "Extension roof and guttering system completed in Hertfordshire" },
        { src: "/images/exterior_extension_brickwork_roof_line_wide.jpeg", alt: "Wide view of extension brickwork and roof line by BBBrotherBuilding" },
      ]}
      ctaTitle="Ready to Extend Your Home?"
      ctaDescription="Get a free site survey and fixed-price quotation for your house extension. No obligation, no hidden costs."
      faqs={[
        {
          question: "Do I need planning permission for a house extension?",
          answer:
            "Many single storey rear extensions fall under permitted development rights and do not require planning permission. However, this depends on the size, height, and proximity to boundaries. Double storey extensions typically require a full planning permission application. We assess your property during the free consultation and handle all applications if needed.",
        },
        {
          question: "What is a party wall agreement and do I need one?",
          answer:
            "A party wall agreement is a legal notice required when building work affects a shared wall or boundary with a neighbour. Most extensions require one. We guide you through the entire party wall process and can recommend experienced party wall surveyors.",
        },
        {
          question: "How much does a house extension cost in Hertfordshire?",
          answer:
            "A single-storey rear extension typically costs between £30,000 and £50,000 depending on size and specification. Double storey extensions range from £45,000 to £75,000. We provide free site surveys and detailed fixed-price quotations with no hidden costs.",
        },
      ]}
    />
  );
}
