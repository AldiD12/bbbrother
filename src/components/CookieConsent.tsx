"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function manage() {
    localStorage.setItem("cookie-consent", "essential-only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] bg-primary text-white p-4 md:p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-base leading-relaxed flex-1">
          We use cookies to improve your experience and analyse site traffic. See our{" "}
          <Link href="/privacy-policy" className="text-secondary underline underline-offset-2 hover:text-secondary/80">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={manage}
            className="border border-white/40 text-white font-label font-bold py-2 px-5 rounded-full text-sm hover:bg-white/10 transition-colors"
            aria-label="Manage cookie preferences"
          >
            Manage
          </button>
          <button
            onClick={accept}
            className="bg-secondary text-white font-label font-bold py-2 px-5 rounded-full text-sm hover:bg-secondary/90 transition-colors"
            aria-label="Accept all cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
