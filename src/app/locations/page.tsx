import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Cover | Hertfordshire & NW London | BBBrotherBuilding",
  description:
    "BBBrotherBuilding serves St Albans, Watford, Edgware, Stanmore, Barnet, Harrow, Wembley, Wood Green & all of Hertfordshire and North West London.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/locations",
  },
  openGraph: {
    title: "Areas We Cover | Hertfordshire & NW London | BBBrotherBuilding",
    description:
      "BBBrotherBuilding serves St Albans, Watford, Edgware, Stanmore, Barnet, Harrow, Wembley, Wood Green & all of Hertfordshire and North West London.",
    url: "https://bbbrotherbuilding.co.uk/locations",
  },
  twitter: {
    title: "Areas We Cover | Hertfordshire & NW London | BBBrotherBuilding",
    description:
      "BBBrotherBuilding serves St Albans, Watford, Edgware, Stanmore, Barnet, Harrow, Wembley, Wood Green & all of Hertfordshire and North West London.",
  },
};

const locations = [
  { name: "St Albans", href: "/locations/st-albans" },
  { name: "Watford", href: "/locations/watford" },
  { name: "Edgware", href: "/locations/edgware" },
  { name: "Stanmore", href: "/locations/stanmore" },
  { name: "Barnet", href: "/locations/barnet" },
  { name: "Harrow", href: "/locations/harrow" },
  { name: "Wembley", href: "/locations/wembley" },
  { name: "Wood Green", href: "/locations/wood-green" },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-6">
            Areas We{" "}
            <span className="text-secondary italic">Cover</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            Based at 31 Arundel Drive, Borehamwood — proudly serving homeowners
            across Hertfordshire and North West London.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {locations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="group bg-white border border-outline-variant/30 rounded-lg p-6 md:p-8 transition-colors hover:border-secondary"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                    {location.name}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted group-hover:text-secondary transition-colors flex-shrink-0 mt-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
                <p className="text-sm text-muted leading-relaxed font-label">
                  Extensions, lofts &amp; renovations in {location.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Area */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-container-low rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-charcoal leading-relaxed mb-8 max-w-lg mx-auto">
              We cover all of Hertfordshire and North West London. Contact us to
              discuss your project.
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
            >
              Get in Touch
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
