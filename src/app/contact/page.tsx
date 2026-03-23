import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact BBBrotherBuilding | Free Quote | Hertfordshire",
  description:
    "Get a free site survey and fixed-price quotation for your extension, loft conversion, or renovation in Hertfordshire & North West London. Call 07925 921 222.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/contact",
  },
  openGraph: {
    title: "Contact BBBrotherBuilding | Free Quote | Hertfordshire",
    description:
      "Get a free site survey and fixed-price quotation for your extension, loft conversion, or renovation in Hertfordshire & North West London. Call 07925 921 222.",
    url: "https://bbbrotherbuilding.co.uk/contact",
  },
  twitter: {
    title: "Contact BBBrotherBuilding | Free Quote | Hertfordshire",
    description:
      "Get a free site survey and fixed-price quotation for your extension, loft conversion, or renovation in Hertfordshire & North West London. Call 07925 921 222.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-6">
            Get Your{" "}
            <span className="text-secondary italic">Free Quote</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-xl mx-auto">
            Tell us about your project and we&apos;ll arrange a free site survey
            with a detailed, fixed-price quotation. No hidden costs, no
            obligation.
          </p>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Phone */}
            <div>
              <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-2 block">
                Call or Text
              </span>
              <a
                href="tel:07925921222"
                className="font-headline font-black text-2xl text-primary hover:text-secondary transition-colors"
                aria-label="Call BBBrotherBuilding on 07925 921 222"
              >
                07925 921 222
              </a>
              <p className="text-charcoal text-base mt-1">
                Mon&ndash;Sat, 8am&ndash;6pm
              </p>
            </div>

            {/* WhatsApp */}
            <div>
              <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-2 block">
                WhatsApp
              </span>
              <a
                href="https://wa.me/447925921222"
                className="inline-flex items-center gap-2 font-headline font-bold text-lg text-primary hover:text-[#25D366] transition-colors"
                aria-label="Message BBBrotherBuilding on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message on WhatsApp
              </a>
              <p className="text-charcoal text-base mt-1">
                Quick responses, send us photos of your project
              </p>
            </div>

            {/* Email */}
            <div>
              <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-2 block">
                Email
              </span>
              <a
                href="mailto:bledar@bbbrotherbuilding.co.uk"
                className="font-headline font-bold text-lg text-primary hover:text-secondary transition-colors break-all"
                aria-label="Email BBBrotherBuilding"
              >
                bledar@bbbrotherbuilding.co.uk
              </a>
            </div>

            {/* Location */}
            <div>
              <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-2 block">
                Based In
              </span>
              <p className="font-headline font-bold text-lg text-primary">
                Borehamwood, Hertfordshire
              </p>
              <p className="text-charcoal text-base mt-1">
                Serving Hertfordshire &amp; North West London
              </p>
            </div>

            {/* Trust Badges */}
            <div className="bg-surface-container-low rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span className="text-base text-charcoal">Companies House registered #16950486</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span className="text-base text-charcoal">&pound;10 million public liability insurance</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span className="text-base text-charcoal">10/10 Checkatrade rating</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span className="text-base text-charcoal">2-year workmanship guarantee</span>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Prefer to Talk CTA */}
      <section className="relative bg-primary py-16 md:py-20 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
            Prefer to Talk?
          </h2>
          <p className="text-white/80 text-lg font-body mb-8 max-w-md mx-auto">
            Call Besart directly to discuss your project. No call centres, no sales teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07925921222"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
              aria-label="Call BBBrotherBuilding on 07925 921 222"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call 07925 921 222
            </a>
            <a
              href="https://wa.me/447925921222"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-2 transition-colors hover:bg-white hover:text-primary"
              aria-label="Message BBBrotherBuilding on WhatsApp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
