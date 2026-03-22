import Image from "next/image";
import Link from "next/link";

interface LocationPageProps {
  location: string;
  description: string;
  heroImage: string;
  galleryImages: { src: string; alt: string }[];
}

const services = [
  {
    title: "Extensions",
    href: "/services/extensions",
    description: "Single and double storey extensions that transform your living space.",
    image: "/images/exterior_extension_finished_roof_back_view.jpeg",
  },
  {
    title: "Loft Conversions",
    href: "/services/loft-conversions",
    description: "Dormer, hip-to-gable, and mansard conversions to maximise your home.",
    image: "/images/interior_skylight_installation_wide.jpeg",
  },
  {
    title: "Bathrooms",
    href: "/services/bathroom-renovations",
    description: "Complete bathroom renovations from design through to final finish.",
    image: "/images/interior_bathroom_complete_tub_shower_tiling.jpeg",
  },
  {
    title: "Kitchens",
    href: "/services/kitchen-fitting",
    description: "Full kitchen fitting including plumbing, electrics, and tiling.",
    image: "/images/interior_kitchen_complete_grey_cabinets_wide.jpeg",
  },
];

const trustBadges = [
  {
    title: "Ltd Company",
    description: "Companies House registered #16950486. Full accountability and transparency.",
  },
  {
    title: "£10M Insurance",
    description: "£10 million public liability insurance. Complete peace of mind for every project.",
  },
  {
    title: "Checkatrade 10/10",
    description: "Vetted, reviewed, and trusted by homeowners across Hertfordshire and North West London.",
  },
  {
    title: "2-Year Guarantee",
    description: "Every project backed by our comprehensive 2-year workmanship guarantee.",
  },
  {
    title: "12 Years Experience",
    description: "Over a decade of delivering extensions, lofts, and renovations to the highest standard.",
  },
];

export function LocationPage({ location, description, heroImage, galleryImages }: LocationPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Trusted Builders in{" "}
              <span className="text-secondary italic">{location}</span>
            </h1>
            <p className="text-lg text-charcoal mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a
                href="tel:07925921222"
                className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors hover:bg-primary hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 07925 921 222
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src={heroImage}
              alt={`Building project completed by BBBrotherBuilding in ${location}`}
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-20 md:mb-28">
        <div className="px-6 mb-10 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
            Our Services in {location}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} in ${location} by BBBrotherBuilding`}
                  width={400}
                  height={530}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-primary p-5">
                  <h3 className="font-headline font-bold text-lg text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm font-label">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Why {location} Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20"
              >
                <h3 className="font-headline font-bold text-lg text-primary mb-3">
                  {badge.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
              Our Work in {location}
            </h2>
            <Link
              href="/gallery"
              className="font-label font-bold text-secondary text-sm hover:underline underline-offset-4"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project in {location}?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no hidden costs.
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
