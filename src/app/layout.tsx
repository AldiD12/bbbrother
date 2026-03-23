import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://bbbrotherbuilding.co.uk"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    siteName: "BBBrotherBuilding Ltd",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Manrope:wght@400;500;700;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-secondary/30">
        <OrganizationSchema />
        <Analytics />
        <Navbar />
        <main className="pt-24 overflow-x-hidden">{children}</main>
        <Footer />
        <MobileStickyFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
