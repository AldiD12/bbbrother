import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painting & Decorating Hertfordshire | BBBrotherBuilding",
  description:
    "Interior and exterior painting, wallpapering, and decorating. The finishing touches that bring your renovation to life.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/services/painting-decorating",
  },
};

const features = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, woodwork, and trim painted to perfection. We use premium paints and achieve clean, even coverage with sharp lines throughout.",
  },
  {
    title: "Exterior Painting",
    description:
      "Weather-resistant exterior painting for fascias, soffits, windows, doors, and rendered walls. Thorough preparation for a finish that lasts.",
  },
  {
    title: "Wallpapering",
    description:
      "Expert hanging of all wallpaper types including feature walls, patterned papers, and luxury vinyl. Precise pattern matching and seamless joins.",
  },
  {
    title: "Surface Preparation & Priming",
    description:
      "Proper preparation is everything. We fill, sand, prime, and seal every surface before applying a single coat of paint. No shortcuts, ever.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We visit your property to assess the scope of work, discuss colour choices, and understand your vision for the finished space.",
  },
  {
    step: "02",
    title: "Quote",
    description:
      "You receive a detailed, fixed-price quotation covering all preparation, materials, and labour. No hidden costs or surprises.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Our decorators prepare every surface meticulously before applying paint or paper. Furniture protected, edges taped, floors sheeted.",
  },
  {
    step: "04",
    title: "Walkthrough",
    description:
      "We walk through every room together to ensure you are completely satisfied. All work is backed by our 2-year workmanship guarantee.",
  },
];

const trustBadges = [
  {
    label: "Ltd Company",
    detail: "Companies House #16950486",
  },
  {
    label: "£10M Insurance",
    detail: "Public liability cover",
  },
  {
    label: "Checkatrade 10/10",
    detail: "Verified reviews",
  },
  {
    label: "2-Year Guarantee",
    detail: "Workmanship guaranteed",
  },
];

const galleryImages = [
  {
    src: "/images/interior_wall_plastering_detail_smooth.jpeg",
    alt: "Smooth wall finish detail by BBBrotherBuilding",
  },
  {
    src: "/images/interior_living_room_plastered_walls_skylight_detail.jpeg",
    alt: "Living room with plastered walls and skylight detail by BBBrotherBuilding",
  },
];

export default function PaintingDecoratingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">
              Our Services
            </p>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Painting &amp; Decorating in{" "}
              <span className="text-secondary italic hand-drawn-underline">
                Hertfordshire
              </span>
            </h1>
            <p className="text-lg text-charcoal mb-8 leading-relaxed max-w-lg">
              Interior and exterior painting, wallpapering, and decorating. The
              finishing touches that bring your renovation to life &mdash;
              delivered with care and precision by our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/interior_living_room_plastered_skylight_wide_view.jpeg"
              alt="Beautifully decorated living room with skylight by BBBrotherBuilding"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            What We Offer
          </h2>
          <p className="text-center text-charcoal mb-12 max-w-2xl mx-auto leading-relaxed">
            From feature walls to full property redecorations, we bring colour,
            character, and a flawless finish to every room we touch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-outline-variant/20 hover:border-secondary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <h3 className="font-headline font-bold text-xl text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={700}
                  height={467}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-headline text-6xl font-black text-secondary/20 mb-4 block">
                  {step.step}
                </span>
                <h3 className="font-headline font-bold text-lg text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="bg-white rounded-lg p-6 md:p-8 text-center shadow-sm border border-outline-variant/20"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <p className="font-headline font-bold text-primary text-lg mb-1">
                  {badge.label}
                </p>
                <p className="font-label text-xs text-muted">{badge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free consultation and fixed-price quotation for your painting
            and decorating project. No obligation, no hidden costs.
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
