import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export function Layout(props: { title?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-1px)] bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex min-h-[calc(100vh-1px)] w-full max-w-7xl">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar title={props.title} />
          <main className="flex-1 p-4 md:p-6">{props.children}</main>
        </div>
      </div>
    </div>
  );
}

