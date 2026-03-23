import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Painting & Decorating Hertfordshire | BBBrotherBuilding",
  description:
    "Interior and exterior painting, wallpapering, and decorating. The finishing touches that bring your renovation to life.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/painting-decorating",
  },
  openGraph: {
    title: "Painting & Decorating Hertfordshire | BBBrotherBuilding",
    description:
      "Interior and exterior painting, wallpapering, and decorating. The finishing touches that bring your renovation to life.",
    url: "https://bbbrotherbuilding.co.uk/services/painting-decorating",
  },
  twitter: {
    title: "Painting & Decorating Hertfordshire | BBBrotherBuilding",
    description:
      "Interior and exterior painting, wallpapering, and decorating. The finishing touches that bring your renovation to life.",
  },
};

export default function PaintingDecoratingPage() {
  return (
    <ServicePage
      serviceType="Painting & Decorating"
      serviceSlug="painting-decorating"
      heroTitle="Painting & Decorating"
      heroHighlight="Hertfordshire"
      heroDescription="Interior and exterior painting, wallpapering, and decorating. The finishing touches that bring your renovation to life — delivered with care and precision by our experienced team."
      heroImage="/images/interior_living_room_plastered_skylight_wide_view.jpeg"
      heroImageAlt="Beautifully decorated living room with skylight by BBBrotherBuilding"
      whatWeOfferIntro="From feature walls to full property redecorations, we bring colour, character, and a flawless finish to every room we touch."
      features={[
        { title: "Interior Painting", description: "Walls, ceilings, woodwork, and trim painted to perfection. We use premium paints and achieve clean, even coverage with sharp lines throughout." },
        { title: "Exterior Painting", description: "Weather-resistant exterior painting for fascias, soffits, windows, doors, and rendered walls. Thorough preparation for a finish that lasts." },
        { title: "Wallpapering", description: "Expert hanging of all wallpaper types including feature walls, patterned papers, and luxury vinyl. Precise pattern matching and seamless joins." },
        { title: "Surface Preparation & Priming", description: "Proper preparation is everything. We fill, sand, prime, and seal every surface before applying a single coat of paint. No shortcuts, ever." },
      ]}
      processSteps={[
        { step: "01", title: "Consultation", description: "We visit your property to assess the scope of work, discuss colour choices, and understand your vision for the finished space." },
        { step: "02", title: "Quote", description: "You receive a detailed, fixed-price quotation covering all preparation, materials, and labour. No hidden costs or surprises." },
        { step: "03", title: "Build", description: "Our decorators prepare every surface meticulously before applying paint or paper. Furniture protected, edges taped, floors sheeted." },
        { step: "04", title: "Walkthrough", description: "We walk through every room together to ensure you are completely satisfied. All work is backed by our 2-year workmanship guarantee." },
      ]}
      galleryImages={[
        { src: "/images/interior_wall_plastering_detail_smooth.jpeg", alt: "Smooth wall finish detail by BBBrotherBuilding" },
        { src: "/images/interior_living_room_plastered_walls_skylight_detail.jpeg", alt: "Living room with plastered walls and skylight detail by BBBrotherBuilding" },
      ]}
      galleryColumns={2}
      ctaTitle="Ready to Start?"
      ctaDescription="Get a free consultation and fixed-price quotation for your painting and decorating project. No obligation, no hidden costs."
      faqs={[
        {
          question: "How long does interior painting take?",
          answer: "A single room typically takes 1-2 days including preparation, priming, and two coats. A full house redecoration usually takes 1-2 weeks depending on the number of rooms and scope of work.",
        },
        {
          question: "Do you supply the paint?",
          answer: "We can supply premium paints from leading brands (Dulux, Farrow & Ball, Little Greene) or use paint you have already purchased. We advise on the best products for each surface.",
        },
        {
          question: "Do you remove wallpaper?",
          answer: "Yes, wallpaper removal and surface preparation is included in our service. We strip existing paper, repair any underlying damage, and prepare walls to a smooth finish before redecorating.",
        },
      ]}
    />
  );
}
