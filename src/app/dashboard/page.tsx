import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { demoStats } from "@/components/dashboard/stats";

export default function DashboardPage() {
  return (
    <Layout title="Dashboard">
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Modern, responsive UI with reusable layout components.
            </p>
          </div>
          <div className="hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block">
            Last updated: just now
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {demoStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-medium">Activity</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Placeholder panel for charts/table (no API logic).
            </div>
            <div className="mt-4 grid gap-2">
              {[
                { label: "New signups", value: "128" },
                { label: "Upgrades", value: "16" },
                { label: "Churn", value: "4" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900/30"
                >
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {row.label}
                  </span>
                  <span className="font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-medium">Notes</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Keep components modular: cards, panels, navigation.
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Sidebar collapses on mobile (hidden under md).",
                "Navbar is reusable and takes an optional title prop.",
                "Stats are fake constants (no API).",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

