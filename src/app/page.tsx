import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CTA from "@/components/CTA";
import Service from "@/components/Service";
import Advertising from "@/components/Advertising";
import Slider from "@/components/Slider";

export default function Home() {
  return (
      <main>
        <Hero />
        <Service />
        <Introduction />
        <Advertising />
        <Slider />
        <CTA />
      </main>
  );
}
