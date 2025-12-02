import { Section } from "@/components/Section";
import { markets } from "@/lib/markets";
import { MarketCard } from "@/components/MarketCard";

export default function MarketsPage() {
  return (
    <div>
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Markets We Serve
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              Our teams deliver commercial drywall and metal framing packages
              across healthcare, education, corporate, industrial, hospitality,
              retail, and government work. We understand the different
              constraints and standards each market demands.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {markets.map((m) => (
            <MarketCard key={m.id} market={m} />
          ))}
        </div>
      </Section>
    </div>
  );
}
