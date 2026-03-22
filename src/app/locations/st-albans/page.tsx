import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Builders in St Albans | Extensions & Lofts | BBBrotherBuilding",
  description:
    "Trusted builders in St Albans for extensions, loft conversions, kitchens, and bathrooms. Ltd company, £10M insured, 10/10 on Checkatrade. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations/st-albans",
  },
};

export default function StAlbansPage() {
  return (
    <LocationPage
      location="St Albans"
      description="BBBrotherBuilding delivers high-quality extensions, loft conversions, kitchen fitting, and bathroom renovations across St Albans and the surrounding areas. As a Companies House registered limited company with £10 million insurance and a 10/10 Checkatrade rating, we bring the reliability and craftsmanship that St Albans homeowners expect. One team from foundations to finish, no subcontractor surprises."
      heroImage="/images/exterior_extension_finished_roof_back_view.jpeg"
      galleryImages={[
        { src: "/images/exterior_extension_brickwork_windows_view.jpeg", alt: "House extension with window frames in St Albans" },
        { src: "/images/interior_kitchen_islands_cabinets_marble_flooring_complete.jpeg", alt: "Completed kitchen renovation in St Albans" },
        { src: "/images/interior_bathroom_complete_sink_tub_tiling.jpeg", alt: "Bathroom renovation in St Albans" },
      ]}
    />
  );
}
