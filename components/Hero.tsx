import { ReactNode } from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-200">{subtitle}</p>
          )}
          {children && <div className="pt-4 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </div>
  );
}
