import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/mainlogo.png"
            alt="Intex Drywall Logo"
            width={55}
            height={19}
            className="h-4 w-auto"
          />
          <p>
            &copy; {new Date().getFullYear()} Intex Drywall. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-1 text-xs">
          <p>Commercial drywall &amp; metal stud framing contractors.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <a href="mailto:intexranch@gmail.com" className="hover:text-slate-700">
              Email: intexranch@gmail.com
            </a>
            <a href="tel:9193419259" className="hover:text-slate-700">
              Phone: 919 341-9259
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
