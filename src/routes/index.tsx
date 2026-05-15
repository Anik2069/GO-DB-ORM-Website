import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Compare } from "@/components/landing/Compare";
import { Examples } from "@/components/landing/Examples";
import { Architecture } from "@/components/landing/Architecture";
import { Performance } from "@/components/landing/Performance";
import { OpenSource } from "@/components/landing/OpenSource";
import { DocsPreview } from "@/components/landing/DocsPreview";
import { Testimonials } from "@/components/landing/Testimonials";
import { Developer } from "@/components/landing/Developer";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Go DB ORM — Modern ORM for Golang Developers" },
      {
        name: "description",
        content:
          "Fast, lightweight, type-safe Go ORM with a fluent query builder, auto migrations, and first-class Postgres & MySQL support. Open source, MIT licensed.",
      },
      { property: "og:title", content: "Go DB ORM — Modern ORM for Golang Developers" },
      { property: "og:description", content: "Fast, lightweight, type-safe database toolkit for scalable Go applications." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" as any },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Go DB ORM",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Modern, type-safe ORM for Golang.",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden w-full relative">
      <Navbar />
      <main className="w-full relative">
        <Hero />
        <Features />
        <Compare />
        <Examples />
        <Architecture />
        <Performance />
        <OpenSource />
        <Developer />
        <DocsPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
