import { HeroSlider } from "@/components/home/HeroSlider";
import { Navbar } from "@/components/layout/Navbar";
import { PromoGrid } from "@/components/home/PromoGrid";
import { StorySection } from "@/components/home/StorySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Navbar />
      <PromoGrid />
      <StorySection />
      <Footer />
    </>
  );
}
