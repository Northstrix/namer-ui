
"use client";

import AppSidebar from "@/components/app-sidebar";
import { usePathname } from "next/navigation";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar key={pathname} />
      <main className="flex-1 overflow-y-auto overflow-x-hidden px-8">
        {children}
      </main>
    </div>
  );
}
