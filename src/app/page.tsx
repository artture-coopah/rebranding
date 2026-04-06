import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Sectoren } from "@/components/sections/Sectoren";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { Subsidies } from "@/components/umbrella/Subsidies";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { WaveDivider } from "@/components/layout/WaveDivider";
import Showcase from "@/components/sections/Showcase";
import { CustomFlow } from "@/components/sections/CustomFlow";

export const metadata: Metadata = {
  title: "Aifficient Mail | Van inbox naar actie. AI email platform voor KMO's",
  description:
    "Aifficient Mail leest, sorteert en verwerkt je e-mails automatisch. Gedeelde inbox, AI-agents en automation builder voor Belgische KMO's.",
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Showcase />
        <Services />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <CustomFlow />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Process />
        <Sectoren />
        <Testimonials />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Pricing />
        <Team />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <FAQ />
        <Subsidies />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-950)" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
