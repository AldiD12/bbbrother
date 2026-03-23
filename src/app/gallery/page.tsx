import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Our Work | BBBrotherBuilding",
  description:
    "Browse our portfolio of extensions, loft conversions, kitchens, bathrooms, driveways, and interior finishing across Hertfordshire & North West London.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/gallery",
  },
  openGraph: {
    title: "Gallery | Our Work | BBBrotherBuilding",
    description:
      "Browse our portfolio of extensions, loft conversions, kitchens, bathrooms, driveways, and interior finishing across Hertfordshire & North West London.",
    url: "https://bbbrotherbuilding.co.uk/gallery",
  },
  twitter: {
    title: "Gallery | Our Work | BBBrotherBuilding",
    description:
      "Browse our portfolio of extensions, loft conversions, kitchens, bathrooms, driveways, and interior finishing across Hertfordshire & North West London.",
  },
};

const categories = [
  {
    title: "Extensions & Structural Work",
    slug: "extensions",
    images: [
      {
        src: "/images/exterior_extension_finished_roof_back_view.jpeg",
        alt: "Completed rear extension with pitched roof and brickwork",
        span: true,
      },
      {
        src: "/images/exterior_extension_brickwork_windows_view.jpeg",
        alt: "Extension brickwork with new window frames installed",
        span: false,
      },
      {
        src: "/images/exterior_extension_roof_guttering_system.jpeg",
        alt: "Extension roof with professional guttering system",
        span: false,
      },
      {
        src: "/images/exterior_extension_brickwork_roof_line_wide.jpeg",
        alt: "Wide view of extension brickwork meeting the existing roof line",
        span: true,
      },
      {
        src: "/images/exterior_extension_wall_construction_windows.jpeg",
        alt: "Extension wall construction with window openings in progress",
        span: false,
      },
      {
        src: "/images/exterior_extension_groundwork_beams_block_flooring_workers.jpeg",
        alt: "Groundwork and beam installation with block flooring being laid by our team",
        span: false,
      },
    ],
  },
  {
    title: "Kitchen Transformations",
    slug: "kitchens",
    images: [
      {
        src: "/images/interior_kitchen_islands_cabinets_marble_flooring_complete.jpeg",
        alt: "Completed kitchen with island unit, cabinets, and marble flooring",
        span: true,
      },
      {
        src: "/images/interior_kitchen_complete_grey_cabinets_wide.jpeg",
        alt: "Modern kitchen with grey cabinets and integrated appliances",
        span: false,
      },
      {
        src: "/images/interior_kitchen_complete_oven_units_marble.jpeg",
        alt: "Kitchen with built-in oven, storage units, and marble worktop",
        span: false,
      },
      {
        src: "/images/interior_kitchen_sink_gold_tap_marble.jpeg",
        alt: "Kitchen sink area with gold tap fixture and marble countertop",
        span: false,
      },
      {
        src: "/images/interior_kitchen_hob_extractor_tiling_backsplash.jpeg",
        alt: "Kitchen hob with extractor fan and tiled backsplash detail",
        span: false,
      },
    ],
  },
  {
    title: "Bathroom Renovations",
    slug: "bathrooms",
    images: [
      {
        src: "/images/interior_bathroom_complete_sink_tub_tiling.jpeg",
        alt: "Completed bathroom with vanity sink, bathtub, and floor-to-ceiling tiling",
        span: false,
      },
      {
        src: "/images/interior_bathroom_complete_tub_shower_tiling.jpeg",
        alt: "Bathroom renovation with freestanding tub, walk-in shower, and modern tiling",
        span: true,
      },
      {
        src: "/images/interior_bathroom_complete_tub_fixtures_marble.jpeg",
        alt: "Luxury bathroom with bathtub, chrome fixtures, and marble finish",
        span: false,
      },
      {
        src: "/images/interior_bathroom_shower_tiling_detail.jpeg",
        alt: "Walk-in shower with detailed tile pattern work",
        span: false,
      },
      {
        src: "/images/interior_bathroom_sink_vanity_fixtures.jpeg",
        alt: "Bathroom vanity unit with basin and wall-mounted fixtures",
        span: false,
      },
    ],
  },
  {
    title: "Loft Conversions & Skylights",
    slug: "lofts",
    images: [
      {
        src: "/images/interior_skylight_installation_wide.jpeg",
        alt: "Skylight installation in loft conversion with natural light flooding in",
        span: true,
      },
      {
        src: "/images/interior_living_room_plastered_skylight_wide_view.jpeg",
        alt: "Plastered living room with skylight creating a bright open space",
        span: false,
      },
      {
        src: "/images/interior_skylight_lighting_effect.jpeg",
        alt: "Skylight casting natural light across the finished interior",
        span: false,
      },
      {
        src: "/images/interior_skylight_detail_view.jpeg",
        alt: "Close-up of skylight frame and glazing detail",
        span: false,
      },
    ],
  },
  {
    title: "Driveways & Landscaping",
    slug: "driveways",
    images: [
      {
        src: "/images/exterior_front_driveway_complete_block_paving_view.jpeg",
        alt: "Completed front driveway with block paving and clean edging",
        span: false,
      },
      {
        src: "/images/exterior_driveway_herringbone_paving_complete.jpeg",
        alt: "Herringbone pattern block paving driveway finished to a high standard",
        span: true,
      },
      {
        src: "/images/exterior_back_garden_patio_paving_complete.jpeg",
        alt: "Back garden patio with paving slabs and landscaped borders",
        span: false,
      },
      {
        src: "/images/exterior_front_driveway_finished_paving_curved_flowerbed.jpeg",
        alt: "Front driveway with curved flowerbed border and block paving",
        span: false,
      },
    ],
  },
  {
    title: "Plastering & Interior Finishing",
    slug: "plastering",
    images: [
      {
        src: "/images/interior_wall_plastering_finished_surface.jpeg",
        alt: "Smooth finished plastering on interior wall ready for decoration",
        span: false,
      },
      {
        src: "/images/interior_wall_plastering_large_room.jpeg",
        alt: "Large room with freshly plastered walls and clean finish",
        span: true,
      },
      {
        src: "/images/interior_flooring_installation_hardwood.jpeg",
        alt: "Hardwood flooring installation with precise fitting and finish",
        span: false,
      },
    ],
  },
];

export default function GalleryPage() {
  let imageIndex = 0;

  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-6">
            Our{" "}
            <span className="text-secondary italic hand-drawn-underline">
              Work
            </span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            Every project tells a story of craftsmanship. Browse extensions, loft
            conversions, kitchens, bathrooms, and more &mdash; all completed by
            our team across Hertfordshire and North West London.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      {categories.map((category, catIndex) => {
        return (
          <section
            key={category.slug}
            className={`px-6 mb-16 md:mb-24 ${
              catIndex % 2 === 1
                ? "bg-surface-container-low py-16 md:py-24 -mx-0"
                : ""
            }`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px flex-1 bg-secondary/30" />
                <h2 className="font-headline text-2xl md:text-3xl font-black text-primary tracking-tight text-center whitespace-nowrap">
                  {category.title}
                </h2>
                <div className="h-px flex-1 bg-secondary/30" />
              </div>

              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {category.images.map((image) => {
                  const currentIndex = imageIndex++;
                  const isPriority = currentIndex < 2;

                  return (
                    <div
                      key={image.src}
                      className="break-inside-avoid group"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.span ? 800 : 600}
                          height={image.span ? 600 : 450}
                          className={`w-full object-cover rounded-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl ${
                            image.span ? "aspect-[4/3]" : "aspect-[4/3]"
                          }`}
                          loading={isPriority ? undefined : "lazy"}
                          priority={isPriority}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 rounded-lg" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Like What You See?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation for your project.
            No obligation, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
            >
              Get a Free Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:07925921222"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-colors hover:bg-white hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 07925 921 222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
