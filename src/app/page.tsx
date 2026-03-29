import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustBar } from "@/components/TrustBar";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Builders in Hertfordshire | Extensions & Lofts | BBBrother",
  description:
    "Extensions, loft conversions & renovations in Hertfordshire. 10/10 on Checkatrade. Ltd company. £10M insured. 2-year guarantee. Free quotes.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/",
  },
  openGraph: {
    title: "Builders in Hertfordshire | Extensions & Lofts | BBBrother",
    description:
      "Extensions, loft conversions & renovations in Hertfordshire. 10/10 on Checkatrade. Ltd company. £10M insured. 2-year guarantee. Free quotes.",
    url: "https://bbbrotherbuilding.co.uk/",
  },
  twitter: {
    title: "Builders in Hertfordshire | Extensions & Lofts | BBBrother",
    description:
      "Extensions, loft conversions & renovations in Hertfordshire. 10/10 on Checkatrade. Ltd company. £10M insured. 2-year guarantee. Free quotes.",
  },
};

const services = [
  {
    title: "Extensions",
    href: "/services/extensions",
    description: "Single and double storey extensions that transform your living space.",
    image: "/images/exterior_extension_finished_roof_back_view.webp",
  },
  {
    title: "Loft Conversions",
    href: "/services/loft-conversions",
    description: "Dormer, hip-to-gable, and mansard conversions to maximise your home.",
    image: "/images/interior_skylight_installation_wide.webp",
  },
  {
    title: "Bathrooms",
    href: "/services/bathroom-renovations",
    description: "Complete bathroom renovations from design through to final finish.",
    image: "/images/interior_bathroom_complete_tub_shower_tiling.webp",
  },
  {
    title: "Kitchens",
    href: "/services/kitchen-fitting",
    description: "Full kitchen fitting including plumbing, electrics, and tiling.",
    image: "/images/interior_kitchen_complete_grey_cabinets_wide.webp",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation & Site Survey",
    description:
      "Besart visits your property to understand your vision, assess the site, and discuss your requirements in detail.",
  },
  {
    step: "02",
    title: "Detailed Fixed-Price Quotation",
    description:
      "You receive a comprehensive, itemised quotation with no hidden costs. The price we quote is the price you pay.",
  },
  {
    step: "03",
    title: "Project Management from Foundations to Finish",
    description:
      "One team throughout your project. No subcontractor surprises. Regular updates and meticulous attention to detail.",
  },
  {
    step: "04",
    title: "Final Walkthrough & 2-Year Guarantee",
    description:
      "We walk through every detail together. Your project is backed by our 2-year workmanship guarantee and £10M insurance.",
  },
];

const whyChooseUs = [
  {
    title: "Ltd Company",
    description: "Companies House registered #16950486. Full accountability and transparency.",
  },
  {
    title: "£10M Insurance",
    description: "£10 million public liability insurance. Complete peace of mind for every project.",
  },
  {
    title: "2-Year Guarantee",
    description: "Every project backed by our comprehensive 2-year workmanship guarantee.",
  },
  {
    title: "12 Years Experience",
    description: "Over a decade of delivering extensions, lofts, and renovations across Hertfordshire.",
  },
  {
    title: "Checkatrade Verified",
    description: "10/10 rating on Checkatrade. Vetted, reviewed, and trusted by homeowners.",
  },
  {
    title: "One Team Throughout",
    description: "No subcontractor chaos. Our experienced team manages your project from start to finish.",
  },
];

const galleryImages = [
  { src: "/images/exterior_extension_brickwork_windows_view.webp", alt: "Extension brickwork with window frames fitted" },
  { src: "/images/interior_kitchen_islands_cabinets_marble_flooring_complete.webp", alt: "Completed kitchen with island and marble flooring" },
  { src: "/images/interior_bathroom_complete_sink_tub_tiling.webp", alt: "Completed bathroom renovation with tiling" },
  { src: "/images/exterior_front_driveway_complete_block_paving_view.webp", alt: "Completed block paving driveway" },
  { src: "/images/interior_living_room_plastered_skylight_wide_view.webp", alt: "Plastered living room with skylight" },
  { src: "/images/exterior_extension_roof_guttering_system.webp", alt: "Extension with completed roof and guttering" },
];

const areas = [
  { name: "St Albans", href: "/locations/st-albans" },
  { name: "Watford", href: "/locations/watford" },
  { name: "Edgware", href: "/locations/edgware" },
  { name: "Stanmore", href: "/locations/stanmore" },
  { name: "Barnet", href: "/locations/barnet" },
  { name: "Harrow", href: "/locations/harrow" },
  { name: "Wembley", href: "/locations/wembley" },
  { name: "Wood Green", href: "/locations/wood-green" },
];

const faqs = [
  {
    question: "How much does a house extension cost in Hertfordshire?",
    answer:
      "Extension costs vary depending on size, complexity, and specification. A single-storey rear extension typically ranges from £30,000 to £50,000, while double-storey extensions range from £45,000 to £75,000. We provide free site surveys and detailed fixed-price quotations with no hidden costs.",
  },
  {
    question: "Do I need planning permission for an extension or loft conversion?",
    answer:
      "Many extensions and loft conversions fall under permitted development rights and do not require planning permission. However, this depends on the size, position, and your property type. We assess planning requirements during your free consultation and handle all applications if needed.",
  },
  {
    question: "How long does a typical extension or renovation take?",
    answer:
      "A single-storey extension typically takes 10-14 weeks from foundations to completion. Loft conversions usually take 8-12 weeks. Bathroom renovations take 2-4 weeks. We provide a detailed project timeline in your quotation and keep you updated throughout.",
  },
  {
    question: "Are you insured and registered?",
    answer:
      "Yes. BBBrotherBuilding Ltd is a Companies House registered limited company (#16950486) with £10 million public liability insurance. We are Checkatrade verified with a 10/10 rating. All our work comes with a 2-year workmanship guarantee.",
  },
  {
    question: "Do you use subcontractors?",
    answer:
      "No. One of our key differentiators is that we use our own experienced team from start to finish. You will not have different tradespeople appearing unannounced. Besart personally manages every project, ensuring consistent quality and clear communication throughout.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black mb-6 text-primary">
              Trusted Builders in{" "}
              <span className="text-secondary italic hand-drawn-underline">
                Hertfordshire
              </span>{" "}
              &amp; North West London
            </h1>
            <p className="text-lg text-charcoal mb-8 leading-relaxed max-w-lg">
              Extensions, loft conversions, bathroom renovations, and complete home
              transformations. One team, start to finish, no subcontractor surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-secondary text-white font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-secondary/90"
                aria-label="Get a free quote for your building project"
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a
                href="tel:07925921222"
                className="border-2 border-primary text-primary font-label font-bold py-4 px-8 rounded-full text-center inline-flex items-center justify-center gap-2 transition-colors hover:bg-primary hover:text-white"
                aria-label="Call BBBrotherBuilding on 07925 921 222"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 07925 921 222
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
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

      {/* Trust Bar */}
      <TrustBar />

      {/* Pain & Agitation Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight">
            Worried About Hiring the Wrong Builder?
          </h2>
          <div className="space-y-4 text-lg text-charcoal leading-relaxed mb-10">
            <p>
              Projects going over budget. Builders who disappear mid-job. Poor communication
              and endless delays. Subcontractors you never agreed to showing up on your
              property. Corners cut behind walls where you cannot see.
            </p>
            <p>
              These are the fears every homeowner faces when investing in a major building
              project. And they are justified — the industry is full of sole traders with
              minimal insurance, no guarantees, and no accountability.
            </p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-8 md:p-10">
            <p className="font-headline font-bold text-xl text-primary mb-4">
              BBBrotherBuilding is different.
            </p>
            <p className="text-charcoal leading-relaxed">
              We are a Companies House registered limited company (#16950486) with £10 million
              public liability insurance, a 2-year workmanship guarantee, and a 10/10 rating
              on Checkatrade. We provide fixed-price quotations with no hidden costs, and our
              own experienced team manages your project from foundations to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="mb-20 md:mb-28">
        <div className="px-6 mb-10 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
            What We Build
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
                  alt={`${service.title} by BBBrotherBuilding`}
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
                  <p className="text-white/70 text-base font-label">{service.description}</p>
                </div>
              </Link>
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
                <p className="text-charcoal text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Why Choose BBBrotherBuilding
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20"
              >
                <h3 className="font-headline font-bold text-lg text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
              Recent Projects
            </h2>
            <Link
              href="/gallery"
              className="font-label font-bold text-secondary text-sm hover:underline underline-offset-4"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

      {/* Checkatrade Reviews */}
      <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            What Our Customers Say
          </h2>
          <p className="text-center text-charcoal mb-12 max-w-xl mx-auto">
            Every review below is from a real Checkatrade customer. We don&apos;t cherry-pick — these are our most recent ratings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm border border-outline-variant/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-headline font-black text-2xl text-secondary">{review.rating}/10</span>
                  {review.verified && (
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-secondary"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      Verified
                    </span>
                  )}
                </div>
                <h3 className="font-headline font-bold text-primary mb-3">{review.title}</h3>
                <p className="text-charcoal text-base leading-relaxed mb-4">{review.text}</p>
                <p className="font-label text-xs text-muted">Job location: {review.jobLocation}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.checkatrade.com/trades/bbbrotherbuildingltd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label font-bold text-primary text-sm hover:text-secondary transition-colors underline underline-offset-4 decoration-secondary"
            >
              Read all reviews on Checkatrade
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            12 Years of Building Trust and Quality
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 text-center">
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-primary tracking-tighter">12+</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Years Exp.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-secondary tracking-tighter">
                10/10
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Checkatrade Rating
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-primary tracking-tighter">£10M</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Insurance Cover
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-5xl font-black text-primary tracking-tighter">2yr</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-muted mt-2">
                Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
            Areas We Cover
          </h2>
          <p className="text-center text-charcoal mb-10 max-w-xl mx-auto">
            Based at 31 Arundel Drive, Borehamwood — serving Hertfordshire &amp; North West London
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white border border-outline-variant/20 rounded-lg p-5 text-center font-label font-bold text-primary hover:border-secondary hover:text-secondary transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-outline-variant/20 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-headline font-bold text-primary hover:text-secondary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-charcoal leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="relative bg-primary py-20 md:py-28 mx-6 mb-20 md:mb-28 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg font-body mb-10 max-w-md mx-auto">
            Get a free site survey and fixed-price quotation. No obligation, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-transform active:scale-95 hover:bg-secondary/90"
              aria-label="Get a free quote for your building project"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07925921222"
              className="border-2 border-white text-white font-label font-bold py-4 px-10 rounded-full inline-block transition-colors hover:bg-white hover:text-primary"
              aria-label="Call BBBrotherBuilding on 07925 921 222"
            >
              Call 07925 921 222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
