import { UmbrellaNav } from "@/components/umbrella/UmbrellaNav";
import { UmbrellaHero } from "@/components/umbrella/UmbrellaHero";
import { Story } from "@/components/umbrella/Story";
import { Products } from "@/components/umbrella/Products";
import { Vision } from "@/components/umbrella/Vision";
import { Team } from "@/components/Team";
import { Subsidies } from "@/components/umbrella/Subsidies";
import { UmbrellaFAQ } from "@/components/umbrella/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <UmbrellaNav />
      <main>
        <UmbrellaHero />
        <Story />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Products />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <Vision />
        <Team />
        <WaveDivider from="var(--color-sand-50)" to="var(--color-sand-100)" />
        <Subsidies />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-50)" />
        <UmbrellaFAQ />
        <WaveDivider from="var(--color-sand-100)" to="var(--color-sand-950)" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
