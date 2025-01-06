import { customMetaDataGenerator } from "@/lib/customMetaDataGenerator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = customMetaDataGenerator({
  title: "Namer UI",
  description:
    "A collection of reusable components designed to empower developers in creating beautiful user interfaces.",
  ogImage: "/banner.png",
  twitterCard: "summary_large_image",
  canonicalUrl: "https://namer-ui.netlify.app/about",
});

export default function notFound() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center my-20 gap-4">
      <h1 className="text-4xl font-bold text-primary">404</h1>
      <p className="text-primary/70 text-lg">
        The page you're looking for could not be found.
      </p>
      <Link href="/" className="text-primary underline">
        Go back home
      </Link>
    </main>
  );
}
