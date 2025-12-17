import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commercial Drywall & Metal Framing Contractor | Intex Drywall | Central NC",
  description:
    "Intex Drywall is a commercial drywall and metal framing contractor based in Pittsboro, NC serving Central North Carolina. Specializing in metal stud framing, drywall systems, fire-rated assemblies, and tenant improvements for healthcare, education, office, industrial, and municipal projects.",
  keywords: [
    "commercial drywall contractor",
    "residential drywall contractor",
    "metal stud framing",
    "fire rated assemblies",
    "tenant improvements",
    "drywall and framing North Carolina",
    "Intex Drywall",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZG72WTEP6E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZG72WTEP6E');
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Intex Drywall",
              url: "https://intexdrywalls.com",
              logo: "https://intexdrywalls.com/mainlogo.png",
              image: "https://intexdrywalls.com/mainlogo.png",
              telephone: "(919) 391-0325",
              areaServed: [
                "Raleigh",
                "Durham",
                "Chapel Hill",
                "Greensboro",
                "Central North Carolina",
              ],
              serviceType: [
                "Commercial drywall",
                "Residential drywall",
                "Metal stud framing",
                "Fire-rated assemblies",
                "Tenant improvements",
                "Cold-formed steel framing",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Drywall and Framing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Drywall & Metal Stud Framing",
                      description:
                        "Schedule-driven commercial drywall, metal stud framing, and fire-rated assemblies for office, healthcare, education, industrial, and municipal projects.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Drywall & Framing",
                      description:
                        "Full-scope residential drywall and framing for new construction and renovation projects across Central North Carolina.",
                    },
                  },
                ],
              },
            },
            null,
            2
          )}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
