import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "House Extensions Hertfordshire | BBBrotherBuilding",
  description:
    "Single & double storey house extensions in Hertfordshire. Transform your living space with additional rooms, open-plan layouts, and seamless integration. Ltd company, £10M insured, 10/10 Checkatrade.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/extensions",
  },
  openGraph: {
    title: "House Extensions Hertfordshire | BBBrotherBuilding",
    description:
      "Single & double storey house extensions in Hertfordshire. Transform your living space with additional rooms, open-plan layouts, and seamless integration. Ltd company, £10M insured, 10/10 Checkatrade.",
    url: "https://bbbrotherbuilding.co.uk/services/extensions",
  },
  twitter: {
    title: "House Extensions Hertfordshire | BBBrotherBuilding",
    description:
      "Single & double storey house extensions in Hertfordshire. Transform your living space with additional rooms, open-plan layouts, and seamless integration. Ltd company, £10M insured, 10/10 Checkatrade.",
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
      heroImage="/images/exterior_extension_finished_roof_back_view.webp"
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
        { src: "/images/exterior_extension_brickwork_windows_view.webp", alt: "Extension brickwork with window frames fitted by BBBrotherBuilding" },
        { src: "/images/exterior_extension_roof_guttering_system.webp", alt: "Extension roof and guttering system completed in Hertfordshire" },
        { src: "/images/exterior_extension_brickwork_roof_line_wide.webp", alt: "Wide view of extension brickwork and roof line by BBBrotherBuilding" },
      ]}
      review={{
        rating: 10,
        title: "Excellent work from start to finish",
        text: "Excellent work carried out on our property. The team handled the bathroom, tiling, loft conversion and extension, and the quality of workmanship was excellent throughout. Everything was well organised, completed as agreed, and finished to a very high standard. They were punctual, respectful, and communicated clearly from start to finish. The final result exceeded our expectations.",
        jobLocation: "NW4",
        verified: true,
      }}
      ctaTitle="Ready to Extend Your Home?"
      ctaDescription="Get a free site survey and fixed-price quotation for your house extension. No obligation, no hidden costs."
      faqs={[
        {
          question: "Do I need planning permission for a house extension?",
          answer:
            "It depends on the size and type. Single-storey rear extensions up to 4 metres deep (detached) or 3 metres (semi/terrace) usually fall under permitted development and do not need planning permission. Double-storey extensions almost always need a full application. Properties in conservation areas often have additional restrictions. We check all of this during your free site survey and handle the application if one is required.",
        },
        {
          question: "What is a party wall agreement and when do I need one?",
          answer:
            "A party wall agreement is a legal notice required under the Party Wall Act 1996 when your extension is built on or within 3-6 metres of a shared boundary. This applies to most semi-detached and terraced houses. You must serve notice on your neighbours at least two months before starting work on the boundary wall, or one month for excavation near the boundary. We guide you through the process and can recommend experienced surveyors.",
        },
        {
          question: "How much does a house extension cost in Hertfordshire?",
          answer:
            "A single-storey rear extension typically costs £35,000-£55,000, while a double-storey extension ranges from £50,000-£80,000. The final price depends on size, ground conditions, structural complexity, and your choice of finishes. Our quotation is fixed-price and itemised — it includes foundations, structural steelwork, building control fees, scaffolding, and skip hire. No hidden costs.",
        },
        {
          question: "What is an RSJ steel beam and will my extension need one?",
          answer:
            "An RSJ (Rolled Steel Joist) is a structural steel beam used to support the load above when internal or external walls are removed. Almost every extension that opens into the existing house needs at least one RSJ. Our structural engineer calculates the exact size and specification required, and we handle installation as part of the build. The cost is included in your quotation.",
        },
        {
          question: "How long will the extension take from start to finish?",
          answer:
            "A single-storey rear extension typically takes 10-14 weeks. A double-storey extension takes 14-20 weeks. These timelines include groundwork, foundations, brickwork, roofing, first-fix plumbing and electrics, plastering, second-fix, and finishing. Weather and planning approval can affect timelines — we build realistic buffers into every project plan.",
        },
      ]}
    />
  );
}
