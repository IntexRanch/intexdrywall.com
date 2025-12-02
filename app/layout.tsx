import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commercial Drywall & Metal Framing Contractor | Intex Drywall | Central NC",
  description:
    "Intex Drywall is a commercial drywall and metal framing contractor based in Pittsboro, NC serving Central North Carolina. Specializing in metal stud framing, drywall systems, fire-rated assemblies, and tenant improvements for healthcare, education, office, industrial, and municipal projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
