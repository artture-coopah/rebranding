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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <CustomFlow />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Services />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Pricing />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Process />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Sectoren />
        <Testimonials />
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
