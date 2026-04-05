import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Sectoren } from "@/components/Sectoren";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";
import Showcase from "@/components/Showcase";
import { CustomFlow } from "@/components/CustomFlow";

export const metadata: Metadata = {
  title: "Aifficient Mail | Van inbox naar actie — AI email platform voor KMO's",
  description:
    "Aifficient Mail leest, sorteert en verwerkt je e-mails automatisch. Gedeelde inbox, AI-agents en automation builder voor Belgische KMO's. Vanaf €19/seat/maand.",
};

export default function MailPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Services />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <CustomFlow />
        <Process />
        <Sectoren />
        <Testimonials />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Pricing />
        <Team />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <FAQ />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-950)" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
