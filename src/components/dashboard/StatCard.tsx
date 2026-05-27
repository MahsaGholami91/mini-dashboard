import { cn } from "@/lib/utils/cn";
import type { Stat } from "./stats";

export function StatCard(props: { stat: Stat }) {
  const { stat } = props;
  const isUp = stat.changeDirection === "up";

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {stat.label}
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">
            {stat.value}
          </div>
          {stat.helper ? (
            <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {stat.helper}
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium",
            isUp
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
              : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
          )}
        >
          {stat.change}
        </div>
      </div>
    </div>
  );
}

