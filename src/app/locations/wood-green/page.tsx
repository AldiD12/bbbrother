import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const locationData = getLocationBySlug("wood-green")!;

export const metadata: Metadata = {
  title: "Builders in Wood Green | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Wood Green for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/wood-green",
  },
  openGraph: {
    title: "Builders in Wood Green | Extensions & Lofts | BBBrotherBuilding",
    description:
      "Trusted builders in Wood Green for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
    url: "https://bbbrotherbuilding.co.uk/locations/wood-green",
  },
  twitter: {
    title: "Builders in Wood Green | Extensions & Lofts | BBBrotherBuilding",
    description:
      "Trusted builders in Wood Green for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  },
};

export default function WoodGreenPage() {
  return (
    <LocationPage
      location={locationData.name}
      locationData={locationData}
      description="BBBrotherBuilding serves Wood Green and the wider Haringey area with professional extensions, loft conversions, kitchen installations, and bathroom renovations. Whether you are extending a Victorian terrace or converting a loft in a 1930s semi, our experienced team delivers exceptional results. Ltd company with £10 million insurance, 10/10 on Checkatrade, and a 2-year workmanship guarantee on every project."
      heroImage="/images/exterior_front_driveway_complete_block_paving_view.webp"
      galleryImages={[
        { src: "/images/interior_living_room_plastered_skylight_wide_view.webp", alt: "Living room with skylight in Wood Green" },
        { src: "/images/interior_kitchen_sink_fixtures_marble_countertops.webp", alt: "Kitchen marble countertops in Wood Green" },
        { src: "/images/exterior_back_garden_patio_paving_complete.webp", alt: "Garden patio paving in Wood Green" },
      ]}
    />
  );
}
