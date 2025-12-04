"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services/drywall-metal-stud-framing", label: "Services" },
  { href: "/markets", label: "Markets" },
  { href: "/projects", label: "Projects" },
  { href: "/safety-credentials", label: "Safety" },
  { href: "/about", label: "About" },
  { href: "/invite-to-bid", label: "Invite to Bid" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/mainlogo.png"
            alt="Intex Drywall Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-slate-900 border-b-2 border-slate-900 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-2 py-1 text-slate-700"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-sm">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
