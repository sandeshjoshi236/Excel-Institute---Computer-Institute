import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Courses } from "@/components/site/courses";
import { CTA } from "@/components/site/cta";
import { CursorGlow } from "@/components/site/cursor-glow";
import { Footer } from "@/components/site/footer";
import { Gallery } from "@/components/site/gallery";
import { Hero } from "@/components/site/hero";
import { LoadingScreen } from "@/components/site/loading-screen";
import { Navbar } from "@/components/site/navbar";
import { Projects } from "@/components/site/projects";
import { Reviews } from "@/components/site/reviews";
import { Stats } from "@/components/site/stats";
import { TypingGame } from "@/components/site/typing-game";
import { WhyUs } from "@/components/site/why-us";

const title = "Excel Institute - Computer Institute | Computer Training in Kathmandu";
const description =
  "Excel Institute - Computer Institute in Prayagpokhari, Kathmandu. Explore computer education, digital skills and practical technology learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Excel Institute - Computer Institute",
          telephone: "9769330417",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Prayagpokhari",
            postalCode: "44600",
            addressLocality: "Kathmandu",
            addressCountry: "NP",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "386",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Courses />
        <Projects />
        <TypingGame />
        <WhyUs />
        <Reviews />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
