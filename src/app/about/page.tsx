import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BBBrotherBuilding | 12 Years Experience | Hertfordshire",
  description:
    "Family-run building company in Borehamwood, Hertfordshire. 12+ years experience in extensions, loft conversions & renovations. Companies House registered. 10/10 Checkatrade. £10M insured.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/about",
  },
  openGraph: {
    title: "About BBBrotherBuilding | 12 Years Experience | Hertfordshire",
    description:
      "Family-run building company in Borehamwood, Hertfordshire. 12+ years experience in extensions, loft conversions & renovations. Companies House registered. 10/10 Checkatrade. £10M insured.",
    url: "https://bbbrotherbuilding.co.uk/about",
  },
  twitter: {
    title: "About BBBrotherBuilding | 12 Years Experience | Hertfordshire",
    description:
      "Family-run building company in Borehamwood, Hertfordshire. 12+ years experience in extensions, loft conversions & renovations. Companies House registered. 10/10 Checkatrade. £10M insured.",
  },
};

const values = [
  {
    title: "Quality Without Compromise",
    description:
      "We never cut corners. Every joint, every finish, every detail is executed to the highest standard.",
  },
  {
    title: "Transparency & Honesty",
    description:
      "Fixed-price quotes with no hidden costs. Regular updates. No surprises.",
  },
  {
    title: "One Team, Start to Finish",
    description:
      "Our own experienced team handles every aspect. No subcontractor chaos.",
  },
];

const credentials = [
  {
    value: "Ltd",
    label: "Companies House Registered",
    detail: "#16950486",
  },
  {
    value: "£10M",
    label: "Public Liability",
    detail: "Insurance",
  },
  {
    value: "10/10",
    label: "Checkatrade",
    detail: "Rating",
  },
  {
    value: "2yr",
    label: "Workmanship",
    detail: "Guarantee",
  },
  {
    value: "12+",
    label: "Years of",
    detail: "Experience",
  },
];

const showcaseImages = [
  {
    src: "/images/exterior_extension_brickwork_windows_view.webp",
    alt: "Extension brickwork with window frames fitted by BBBrotherBuilding",
  },
  {
    src: "/images/interior_kitchen_islands_cabinets_marble_flooring_complete.webp",
    alt: "Completed kitchen with island, cabinets and marble flooring",
  },
  {
    src: "/images/interior_bathroom_complete_tub_shower_tiling.webp",
    alt: "Completed bathroom renovation with tub, shower and tiling",
  },
];

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Besart Dishani",
    jobTitle: "Director",
    worksFor: {
      "@type": "Organization",
      "@id": "https://bbbrotherbuilding.co.uk/#organization",
      name: "BBBrotherBuilding Ltd",
    },
    sameAs: ["https://www.checkatrade.com/trades/bbbrotherbuildingltd"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">
          <div>
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">
              About BBBrotherBuilding
            </p>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Built on Trust,{" "}
              <span className="text-secondary italic">
                Delivered with Pride
              </span>
            </h1>
            <p className="text-lg text-charcoal leading-relaxed max-w-lg">
              We are a family-run building company that believes every homeowner
              deserves a builder who treats their home with the same care and
              respect as their own. That is the standard we hold ourselves to on
              every single project.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/exterior_extension_finished_roof_back_view.webp"
              alt="Completed house extension with roof and brickwork by BBBrotherBuilding in Hertfordshire"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              BBBrotherBuilding Ltd is a family-run building company established
              by Besart, based in Borehamwood, Hertfordshire. With over 12 years
              of hands-on experience in extensions, loft conversions, and full
              home renovations, we have built a reputation that homeowners across
              Hertfordshire and North West London trust.
            </p>
            <p>
              The company was built on a simple belief: homeowners deserve
              transparency, quality, and a builder they can trust. Too many
              people have been let down by builders who overpromise and
              underdeliver. We set out to do things differently.
            </p>
            <p>
              Besart personally manages every project from the initial
              consultation through to the final walkthrough. There are no
              middlemen, no layers of management, and no surprises. When you work
              with BBBrotherBuilding, you work with a team that genuinely cares
              about the outcome of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            Our Values
          </h2>
          <p className="text-center text-charcoal mb-14 max-w-xl mx-auto">
            The principles that guide every project we take on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-10 shadow-sm border border-outline-variant/20 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-secondary"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="font-headline font-bold text-xl text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The BBBrother Difference */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            The BBBrother Difference
          </h2>
          <p className="text-center text-charcoal mb-14 max-w-xl mx-auto">
            Credentials and guarantees that give you complete peace of mind.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="bg-surface-container-low rounded-lg p-6 md:p-8 text-center flex flex-col items-center justify-center"
              >
                <span className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-2">
                  {item.value}
                </span>
                <span className="font-label text-[11px] uppercase tracking-widest text-muted leading-tight">
                  {item.label}
                </span>
                <span className="font-label text-[11px] uppercase tracking-widest text-muted leading-tight">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {showcaseImages.map((img) => (
              <div key={img.src} className="rounded-lg overflow-hidden">
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
