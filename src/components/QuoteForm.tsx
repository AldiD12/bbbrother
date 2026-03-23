"use client";

import { useState } from "react";
import { trackFormSubmit } from "@/lib/track";

const serviceOptions = [
  { value: "extension", label: "Extension", icon: "🏗" },
  { value: "loft-conversion", label: "Loft Conversion", icon: "🏠" },
  { value: "bathroom", label: "Bathroom", icon: "🚿" },
  { value: "kitchen", label: "Kitchen", icon: "🍳" },
  { value: "roofing", label: "Roofing", icon: "🔨" },
  { value: "plastering", label: "Plastering", icon: "🧱" },
  { value: "painting", label: "Painting", icon: "🎨" },
  { value: "other", label: "Other", icon: "📋" },
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    postcode: "",
    message: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    trackFormSubmit();
    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Formspree submission - proceed regardless
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-outline-variant/20 rounded-lg p-8 md:p-10 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 className="font-headline font-bold text-2xl text-primary mb-3">
          Thank You!
        </h3>
        <p className="text-base text-charcoal leading-relaxed">
          We&apos;ve received your enquiry and will be in touch within 24 hours. For
          an immediate response, call us on{" "}
          <a href="tel:07925921222" className="text-secondary font-bold">
            07925 921 222
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-outline-variant/20 rounded-lg p-8 md:p-10 shadow-sm">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-secondary" : "bg-outline-variant/30"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Service selection */}
      {step === 1 && (
        <div>
          <h3 className="font-headline font-bold text-xl text-primary mb-6">
            What&apos;s your project?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {serviceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateField("service", option.value);
                  setStep(2);
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                  formData.service === option.value
                    ? "border-secondary bg-secondary/5"
                    : "border-outline-variant/30 hover:border-secondary/50"
                }`}
                aria-label={`Select ${option.label} as your project type`}
              >
                <span className="text-2xl">{option.icon}</span>
                <span className="font-label font-bold text-sm text-primary">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Postcode */}
      {step === 2 && (
        <div>
          <h3 className="font-headline font-bold text-xl text-primary mb-6">
            Your postcode?
          </h3>
          <input
            type="text"
            value={formData.postcode}
            onChange={(e) => updateField("postcode", e.target.value)}
            placeholder="e.g. AL1 3TJ"
            className="w-full border border-outline-variant/40 rounded-lg px-4 py-3 text-base font-body text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors mb-6"
            aria-label="Enter your postcode"
          />
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="border-2 border-primary text-primary font-label font-bold py-3 px-6 rounded-full transition-colors hover:bg-primary hover:text-white"
              aria-label="Go back to project selection"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!formData.postcode.trim()}
              className="flex-1 bg-secondary text-white font-label font-bold py-3 px-6 rounded-full transition-transform active:scale-95 hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Continue to project details"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Project details */}
      {step === 3 && (
        <div>
          <h3 className="font-headline font-bold text-xl text-primary mb-2">
            Tell us about your project
          </h3>
          <p className="text-base text-muted mb-6">
            You can also send us photos via WhatsApp at 07925 921 222.
          </p>
          <textarea
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Describe what you'd like done, approximate size, any plans or ideas..."
            rows={5}
            className="w-full border border-outline-variant/40 rounded-lg px-4 py-3 text-base font-body text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-vertical mb-6"
            aria-label="Describe your project"
          />
          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="border-2 border-primary text-primary font-label font-bold py-3 px-6 rounded-full transition-colors hover:bg-primary hover:text-white"
              aria-label="Go back to postcode entry"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="flex-1 bg-secondary text-white font-label font-bold py-3 px-6 rounded-full transition-transform active:scale-95 hover:bg-secondary/90"
              aria-label="Continue to contact details"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Contact details */}
      {step === 4 && (
        <div>
          <h3 className="font-headline font-bold text-xl text-primary mb-6">
            Your contact details
          </h3>
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="quote-name" className="font-label font-bold text-sm text-primary mb-2 block">
                Full Name *
              </label>
              <input
                type="text"
                id="quote-name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your name"
                required
                className="w-full border border-outline-variant/40 rounded-lg px-4 py-3 text-base font-body text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                aria-label="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="font-label font-bold text-sm text-primary mb-2 block">
                Phone Number *
              </label>
              <input
                type="tel"
                id="quote-phone"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="07xxx xxx xxx"
                required
                className="w-full border border-outline-variant/40 rounded-lg px-4 py-3 text-base font-body text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                aria-label="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="quote-email" className="font-label font-bold text-sm text-primary mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                id="quote-email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-outline-variant/40 rounded-lg px-4 py-3 text-base font-body text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                aria-label="Enter your email address"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(3)}
              className="border-2 border-primary text-primary font-label font-bold py-3 px-6 rounded-full transition-colors hover:bg-primary hover:text-white"
              aria-label="Go back to project details"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!formData.name.trim() || !formData.phone.trim()}
              className="flex-1 bg-secondary text-white font-label font-bold py-3 px-6 rounded-full transition-transform active:scale-95 hover:bg-secondary/90 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Submit your free quote request"
            >
              Send Enquiry
            </button>
          </div>
          <p className="text-sm text-muted text-center mt-4">
            We typically respond within 24 hours. Your details are never shared
            with third parties.
          </p>
        </div>
      )}
    </div>
  );
}
