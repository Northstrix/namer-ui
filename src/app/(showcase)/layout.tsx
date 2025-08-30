"use client";

import { AppProvider, useApp } from "@/context/app-context";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import SearchModal from "@/components/search-modal";

const AppProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  // Suspense boundary wraps all usage of useSearchParams and usePathname.
  return (
    <Suspense fallback={null}>
      <InnerAppProviderWrapper>{children}</InnerAppProviderWrapper>
    </Suspense>
  );
};

const InnerAppProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang, isHydrated } = useApp();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const langParam = searchParams.get("lang");
    // you can do something with langParam if needed
  }, [searchParams, lang, pathname]);

  if (!isHydrated) {
    return null;
  }

  // Only show SearchModal on /components and any nested routes under it
  const showSearchModal = pathname.startsWith("/components");

  return (
    <>
      {showSearchModal && (
        <SearchModal show={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      )}
      {children}
    </>
  );
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <AppProviderWrapper>{children}</AppProviderWrapper>
    </AppProvider>
  );
}
