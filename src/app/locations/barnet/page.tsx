import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("barnet")!;

export const metadata: Metadata = {
  title: "Builders in Barnet | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Barnet for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/barnet",
  },
};

export default function BarnetPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Looking for reliable builders in Barnet? BBBrotherBuilding specialises in house extensions, loft conversions, kitchen installations, and bathroom renovations across the Barnet borough. We are a Companies House registered limited company with £10 million public liability insurance and a perfect 10/10 Checkatrade rating. Every project is managed by our own team from start to finish."
      heroImage="/images/exterior_extension_finished_roof_back_view.jpeg"
      galleryImages={[
        { src: "/images/exterior_extension_roofline_brickwork_view.jpeg", alt: "Extension roofline in Barnet" },
        { src: "/images/interior_kitchen_hob_extractor_tiling_backsplash.jpeg", alt: "Kitchen backsplash tiling in Barnet" },
        { src: "/images/interior_bathroom_complete_tub_shower_tiling.jpeg", alt: "Bathroom renovation in Barnet" },
      ]}
    />
  );
}
