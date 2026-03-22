import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Builders in Harrow | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Harrow for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/harrow",
  },
};

export default function HarrowPage() {
  return (
    <LocationPage
      location="Harrow"
      description="BBBrotherBuilding has been delivering outstanding extensions, loft conversions, and home renovations to Harrow homeowners for over a decade. From period properties in Harrow on the Hill to semi-detached homes across the borough, our in-house team handles every aspect of your build. Registered limited company, £10M insured, and rated 10/10 on Checkatrade."
      heroImage="/images/interior_kitchen_islands_cabinets_marble_flooring_complete.jpeg"
      galleryImages={[
        { src: "/images/exterior_extension_brickwork_window_frames.jpeg", alt: "Extension window frames in Harrow" },
        { src: "/images/interior_kitchen_cabinets_countertops_renovation.jpeg", alt: "Kitchen countertop renovation in Harrow" },
        { src: "/images/interior_bathroom_fixtures_detail_view.jpeg", alt: "Bathroom fixtures in Harrow" },
      ]}
    />
  );
}
