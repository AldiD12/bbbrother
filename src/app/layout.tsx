import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import { OrganizationSchema } from "@/components/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://bbbrotherbuilding.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Manrope:wght@400;500;700;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-secondary/30">
        <OrganizationSchema />
        <Navbar />
        <main className="pt-24 overflow-x-hidden">{children}</main>
        <Footer />
        <MobileStickyFooter />
      </body>
    </html>
  );
}
