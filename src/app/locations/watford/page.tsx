import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Builders in Watford | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Watford for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/watford",
  },
};

export default function WatfordPage() {
  return (
    <LocationPage
      location="Watford"
      description="From Victorian terraces to modern new-builds, BBBrotherBuilding has been transforming homes across Watford for over 12 years. We specialise in extensions, loft conversions, complete kitchen installations, and bathroom renovations. Fully insured with £10 million cover, Checkatrade verified with a 10/10 rating, and backed by our 2-year workmanship guarantee."
      heroImage="/images/interior_kitchen_islands_cabinets_marble_flooring_complete.jpeg"
      galleryImages={[
        { src: "/images/exterior_extension_roof_guttering_system.jpeg", alt: "Extension with completed roof in Watford" },
        { src: "/images/interior_bathroom_complete_tub_fixtures_marble.jpeg", alt: "Luxury bathroom renovation in Watford" },
        { src: "/images/exterior_front_driveway_complete_block_paving_view.jpeg", alt: "Block paving driveway in Watford" },
      ]}
    />
  );
}
