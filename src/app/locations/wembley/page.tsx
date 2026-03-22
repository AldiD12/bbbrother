import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Builders in Wembley | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in Wembley for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/wembley",
  },
};

export default function WembleyPage() {
  return (
    <LocationPage
      location="Wembley"
      description="Wembley homeowners choose BBBrotherBuilding for quality extensions, loft conversions, kitchen fitting, and bathroom renovations that genuinely transform their homes. We bring over 12 years of hands-on building experience, a dedicated in-house team, and the security of a registered limited company with £10 million insurance. Fixed-price quotes with no hidden costs."
      heroImage="/images/interior_bathroom_complete_tub_shower_tiling.jpeg"
      galleryImages={[
        { src: "/images/exterior_driveway_herringbone_paving_complete.jpeg", alt: "Herringbone driveway paving in Wembley" },
        { src: "/images/interior_kitchen_island_marble_tile_view.jpeg", alt: "Kitchen island with marble tiling in Wembley" },
        { src: "/images/interior_bathroom_renovation_tiling_fixtures.jpeg", alt: "Bathroom renovation in Wembley" },
      ]}
    />
  );
}
