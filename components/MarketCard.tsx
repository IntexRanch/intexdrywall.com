import Link from "next/link";
import type { Market } from "@/lib/markets";

type Props = {
  market: Market;
};

export function MarketCard({ market }: Props) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{market.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{market.description}</p>
      <div className="mt-4">
        <Link
          href={`/projects?market=${market.id}`}
          className="text-xs font-semibold text-slate-900 underline underline-offset-4"
        >
          View projects in this market
        </Link>
      </div>
    </div>
  );
}
