import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services/extensions", label: "Extensions" },
  { href: "/services/loft-conversions", label: "Loft Conversions" },
  { href: "/services/bathroom-renovations", label: "Bathrooms" },
  { href: "/services/kitchen-fitting", label: "Kitchens" },
  { href: "/services/plastering", label: "Plastering" },
  { href: "/services/painting-decorating", label: "Painting & Decorating" },
  { href: "/services/roofing", label: "Roofing" },
  { href: "/services/general-renovations", label: "Renovations" },
];

const locationLinks = [
  { href: "/locations/st-albans", label: "St Albans" },
  { href: "/locations/watford", label: "Watford" },
  { href: "/locations/edgware", label: "Edgware" },
  { href: "/locations/stanmore", label: "Stanmore" },
  { href: "/locations/barnet", label: "Barnet" },
  { href: "/locations/harrow", label: "Harrow" },
  { href: "/locations/wembley", label: "Wembley" },
  { href: "/locations/wood-green", label: "Wood Green" },
];

export function Footer() {
  return (
    <footer className="bg-primary w-full pt-20 pb-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo-bbbrotherbuilding.png"
              alt="BBBrother Building Logo"
              width={140}
              height={52}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 font-body text-sm leading-relaxed mb-4">
              Trusted builders in Hertfordshire &amp; North West London. Extensions, loft conversions, and complete home transformations.
            </p>
            <p className="text-white/50 text-xs font-label mb-1">
              Registered Office: 11 Barkham Mews, Reading, RG1 4BX
            </p>
            <p className="text-white/50 text-xs font-label">
              Operations Office: 31 Arundel Drive, Borehamwood, WD6 2LE
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-4 block">
              Services
            </span>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-4 block">
              Areas We Serve
            </span>
            <div className="flex flex-col gap-2">
              {locationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-4 block">
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="tel:07925921222"
                className="text-white/70 text-sm hover:text-secondary transition-colors"
                aria-label="Call BBBrotherBuilding on 07925 921 222"
              >
                07925 921 222
              </a>
              <a
                href="mailto:bledar@bbbrotherbuilding.co.uk"
                className="text-white/70 text-sm hover:text-secondary transition-colors break-all"
                aria-label="Email BBBrotherBuilding"
              >
                bledar@bbbrotherbuilding.co.uk
              </a>
              <Link
                href="/contact"
                className="mt-2 inline-block bg-secondary text-white font-label font-bold py-3 px-6 rounded-full text-sm text-center hover:bg-secondary/90 transition-colors"
                aria-label="Get a free quote for your building project"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-white/40 text-xs font-label">
            <p>&copy; {new Date().getFullYear()} BBBrotherBuilding Ltd. All rights reserved.</p>
            <p className="mt-1">Companies House #16950486 | £10M Public Liability Insurance</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-white/40 text-xs font-label hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
