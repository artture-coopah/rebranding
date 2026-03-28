import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProofBar } from "@/components/SocialProofBar";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Examples } from "@/components/Examples";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Sectoren } from "@/components/Sectoren";
import { Testimonials } from "@/components/Testimonials";
import { Comparison } from "@/components/Comparison";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProofBar />
        <Problems />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Services />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Examples />
        <WhyUs />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Process />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Sectoren />
        <Testimonials />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Comparison />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
