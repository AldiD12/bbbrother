import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("stanmore")!;

export const metadata: Metadata = {
  title: "Builders in Stanmore | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Stanmore for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/stanmore",
  },
  openGraph: {
    title: "Builders in Stanmore | Extensions & Lofts | BBBrotherBuilding",
    description:
      "Trusted builders in Stanmore for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
    url: "https://bbbrotherbuilding.co.uk/locations/stanmore",
  },
  twitter: {
    title: "Builders in Stanmore | Extensions & Lofts | BBBrotherBuilding",
    description:
      "Trusted builders in Stanmore for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  },
};

export default function StanmorePage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="Stanmore homeowners trust BBBrotherBuilding for extensions, loft conversions, kitchen fitting, and bathroom renovations that add real value to their properties. As a registered limited company with over 12 years of experience, we manage every project with a single dedicated team — no subcontractors, no surprises. Fully backed by £10 million insurance and our 2-year guarantee."
      heroImage="/images/exterior_front_driveway_complete_block_paving_view.jpeg"
      galleryImages={[
        { src: "/images/interior_kitchen_complete_oven_units_marble.jpeg", alt: "Kitchen installation in Stanmore" },
        { src: "/images/exterior_extension_roof_brickwork_detail.jpeg", alt: "Extension roof detail in Stanmore" },
        { src: "/images/interior_bathroom_tiling_fixtures_complete.jpeg", alt: "Completed bathroom tiling in Stanmore" },
      ]}
    />
  );
}
