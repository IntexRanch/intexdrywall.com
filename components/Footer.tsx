export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} Intex Drywall. All rights reserved.
        </p>
        <p className="text-xs">
          Commercial drywall &amp; metal stud framing contractors.
        </p>
      </div>
    </footer>
  );
}
