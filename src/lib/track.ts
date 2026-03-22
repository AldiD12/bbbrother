declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "WhatsApp CTA",
    });
  }
}

export function trackCallClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "call_click", {
      event_category: "engagement",
      event_label: "Phone Call CTA",
    });
  }
}

export function trackFormSubmit() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "conversion",
      event_label: "Quote Form Submission",
    });
  }
}
