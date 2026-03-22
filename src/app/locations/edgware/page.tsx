import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Builders in Edgware | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Edgware for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/edgware",
  },
};

export default function EdgwarePage() {
  return (
    <LocationPage
      location="Edgware"
      description="BBBrotherBuilding provides expert building services throughout Edgware and the surrounding North London area. Whether you need a rear extension to open up your kitchen-diner, a loft conversion for extra bedrooms, or a complete bathroom overhaul, our experienced in-house team delivers every project to the highest standard. Ltd company, £10M insured, and rated 10/10 on Checkatrade."
      heroImage="/images/interior_bathroom_complete_tub_shower_tiling.jpeg"
      galleryImages={[
        { src: "/images/interior_kitchen_sink_gold_tap_marble.jpeg", alt: "Kitchen renovation with marble countertops in Edgware" },
        { src: "/images/exterior_extension_brickwork_integration.jpeg", alt: "Extension brickwork in Edgware" },
        { src: "/images/interior_bathroom_shower_tiling_detail.jpeg", alt: "Shower tiling detail in Edgware bathroom" },
      ]}
    />
  );
}
