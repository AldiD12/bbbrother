import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { PersonSchema } from "@/components/PersonSchema";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { Epilogue, Manrope, Noto_Serif } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bbbrotherbuilding.co.uk"),
  title: {
    default: "BBBrotherBuilding Ltd | Extensions & Loft Conversions Hertfordshire",
    template: "%s | BBBrotherBuilding Ltd"
  },
  description: "Premier building company in Hertfordshire & North West London. Specialising in high-end house extensions, loft conversions, and full home luxury renovations.",
  keywords: ["builders Hertfordshire", "house extensions St Albans", "loft conversions Watford", "home renovations North London", "BBBrotherBuilding"],
  authors: [{ name: "Besart Dishani" }],
  creator: "Besart Dishani",
  publisher: "BBBrotherBuilding Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    locale: "en_GB",
    url: "https://bbbrotherbuilding.co.uk",
    images: [{ 
      url: "/images/og-default.webp", 
      width: 1200, 
      height: 630,
      alt: "BBBrotherBuilding Ltd - Premium Construction Services"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBBrotherBuilding Ltd | Extensions & Loft Conversions",
    description: "Premier building company in Hertfordshire & North West London.",
    images: ["/images/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${notoSerif.variable} ${epilogue.variable} ${manrope.variable} font-body antialiased selection:bg-secondary/30`}>
        <OrganizationSchema />
        <PersonSchema />
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
