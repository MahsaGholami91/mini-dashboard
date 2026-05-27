import Link from "next/link";

export function Navbar(props: { title?: string }) {
  const { title = "Dashboard" } = props;
  return (
    <header className="flex items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 md:px-6">
      <div className="flex items-center gap-3">
        <div className="text-sm font-semibold tracking-tight">{title}</div>
        <div className="hidden text-sm text-zinc-500 dark:text-zinc-400 md:block">
          Overview
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <Link
          href="/login"
          className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

