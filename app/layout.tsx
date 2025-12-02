import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Intex Drywall | Commercial Drywall & Metal Stud Framing",
  description:
    "Intex Drywall is a commercial drywall and metal stud framing contractor serving office, healthcare, education, industrial, hospitality, and municipal projects.",
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
