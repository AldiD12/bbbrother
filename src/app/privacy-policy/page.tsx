import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BBBrotherBuilding",
  description:
    "Privacy policy for BBBrotherBuilding Ltd. Learn how we collect, use, and protect your personal data in compliance with GDPR.",
  alternates: {
    canonical: "https://bbbrotherbuilding.co.uk/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-tight font-black text-primary mb-8">
            Privacy Policy
          </h1>
          <p className="text-base text-charcoal leading-relaxed mb-6">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-base text-charcoal leading-relaxed">
            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                1. Who We Are
              </h2>
              <p>
                BBBrotherBuilding Ltd (Companies House #16950486) is a building
                contractor based in Borehamwood, Hertfordshire. We are the data
                controller for personal information collected through this website.
              </p>
              <p className="mt-2">
                Contact: bledar@bbbrotherbuilding.co.uk | 07925 921 222
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                2. What Data We Collect
              </h2>
              <p>We may collect the following personal data:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name, email address, and phone number (when you submit a quote request)</li>
                <li>Property address or postcode (to assess your project location)</li>
                <li>Project details you share with us via forms, phone, email, or WhatsApp</li>
                <li>Technical data such as IP address, browser type, and pages visited (via cookies and analytics)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                3. How We Use Your Data
              </h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your enquiry and provide a quotation</li>
                <li>Arrange site surveys and manage your building project</li>
                <li>Send relevant follow-up communications about your enquiry</li>
                <li>Improve our website and understand how visitors use it</li>
              </ul>
              <p className="mt-2">
                Our legal basis for processing is legitimate interest (responding to
                your enquiry) and, where applicable, your consent.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                4. Cookies
              </h2>
              <p>
                This website uses cookies to analyse site traffic and optimise your
                experience. We use Google Analytics, which sets cookies to help us
                understand how visitors interact with our site.
              </p>
              <p className="mt-2">
                You can control cookies through your browser settings or via the
                cookie consent banner displayed when you first visit our site. Essential
                cookies that are necessary for the website to function cannot be
                disabled.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                5. Data Sharing
              </h2>
              <p>
                We do not sell your personal data. We may share your data with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Google Analytics (anonymised usage data)</li>
                <li>Formspree (form submission processing)</li>
              </ul>
              <p className="mt-2">
                We do not share your personal details with any other third parties
                without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain your personal data for as long as necessary to fulfil the
                purposes for which it was collected, typically up to 24 months after
                your last interaction with us. Project-related records may be retained
                longer for warranty and legal compliance purposes.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                7. Your Rights Under GDPR
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict our processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, contact us at
                bledar@bbbrotherbuilding.co.uk.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                8. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal data against unauthorised access, alteration,
                disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes will
                be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-xl text-primary mb-3">
                10. Complaints
              </h2>
              <p>
                If you are unhappy with how we have handled your data, you have the
                right to lodge a complaint with the Information Commissioner&apos;s
                Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-outline-variant/20">
            <Link
              href="/"
              className="font-label font-bold text-secondary hover:underline underline-offset-4"
              aria-label="Return to homepage"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
