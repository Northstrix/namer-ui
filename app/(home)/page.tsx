import type { Metadata } from "next";
import { customMetaDataGenerator } from "@/lib/customMetaDataGenerator";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/Hero"));
const Footer = dynamic(() => import("@/components/home/Footer"));

export const metadata: Metadata = customMetaDataGenerator({
  title: "Namer UI",
  description:
    "A collection of reusable components designed to empower developers in creating beautiful user interfaces.",
  ogImage: "/favicon.ico",
  canonicalUrl: "https://namer-ui.netlify.app/",
});

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center mt-20">
      <Hero />
      <Footer />
    </main>
  );
}
