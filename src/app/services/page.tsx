import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | BBBrotherBuilding",
  description:
    "Extensions, loft conversions, bathrooms, kitchens, plastering, roofing & renovations in Hertfordshire & North West London. Free quotes from BBBrotherBuilding.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services",
  },
  openGraph: {
    title: "Our Services | BBBrotherBuilding",
    description:
      "Extensions, loft conversions, bathrooms, kitchens, plastering, roofing & renovations in Hertfordshire & North West London. Free quotes from BBBrotherBuilding.",
    url: "https://bbbrotherbuilding.co.uk/services",
  },
  twitter: {
    title: "Our Services | BBBrotherBuilding",
    description:
      "Extensions, loft conversions, bathrooms, kitchens, plastering, roofing & renovations in Hertfordshire & North West London. Free quotes from BBBrotherBuilding.",
  },
};

const services = [
  {
    title: "Extensions",
    href: "/services/extensions",
    description:
      "Single and double storey extensions that transform your living space.",
    image: "/images/exterior_extension_finished_roof_back_view.webp",
  },
  {
    title: "Loft Conversions",
    href: "/services/loft-conversions",
    description:
      "Dormer, hip-to-gable, and mansard conversions to maximise your home.",
    image: "/images/interior_skylight_installation_wide.webp",
  },
  {
    title: "Bathroom Renovations",
    href: "/services/bathroom-renovations",
    description:
      "Complete bathroom renovations from design through to final finish.",
    image: "/images/interior_bathroom_complete_tub_shower_tiling.webp",
  },
  {
    title: "Kitchen Fitting",
    href: "/services/kitchen-fitting",
    description:
      "Full kitchen fitting including plumbing, electrics, and tiling.",
    image: "/images/interior_kitchen_complete_grey_cabinets_wide.webp",
  },
  {
    title: "Plastering",
    href: "/services/plastering",
    description:
      "Smooth, flawless plastering for walls and ceilings throughout your home.",
    image: "/images/interior_wall_plastering_finished_surface.webp",
  },
  {
    title: "Painting & Decorating",
    href: "/services/painting-decorating",
    description:
      "Professional interior and exterior painting with a premium finish.",
    image: "/images/interior_living_room_plastered_skylight_wide_view.webp",
  },
  {
    title: "Roofing",
    href: "/services/roofing",
    description:
      "Roof repairs, replacements, and new-build roofing with guttering systems.",
    image: "/images/exterior_extension_roof_guttering_system.webp",
  },
  {
    title: "General Renovations",
    href: "/services/general-renovations",
    description:
      "Full property renovations including flooring, structural work, and more.",
    image: "/images/interior_flooring_installation_hardwood.webp",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-6">
            What We{" "}
            <span className="text-secondary italic">Build</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            From foundations to finishing touches, we deliver complete building
            solutions across Hertfordshire &amp; North West London.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} by BBBrotherBuilding`}
                    width={800}
                    height={450}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary via-primary/90 to-transparent pt-16 pb-6 px-6">
                  <h2 className="font-headline font-bold text-xl text-white mb-1">
                    {service.title}
                  </h2>
                  <p className="text-white/70 text-sm font-label">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no
            hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07925921222"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
            >
              Call 07925 921 222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
