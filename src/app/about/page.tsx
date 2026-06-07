import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center py-20 px-6">
        <div className="max-w-[800px] w-full text-center">
          <h1 className="text-5xl font-montserrat font-bold text-[#2f241f] mb-8">Our Story</h1>
          <div className="w-full h-64 bg-[#f5f0eb] rounded-lg mb-8 flex items-center justify-center text-[#6f6259]">
            Historical Cafe Image
          </div>
          <p className="text-lg text-[#6f6259] font-inter leading-relaxed mb-6 text-justify">
            Brew Haven started as a small, passionate project to bring authentic, high-quality coffee to the local neighborhood. 
            We believe that every cup tells a story, originating from the farms where the beans are grown, to the meticulous roasting process, 
            and finally to the hands of our skilled baristas.
          </p>
          <p className="text-lg text-[#6f6259] font-inter leading-relaxed text-justify">
            Today, we are proud to serve a community of coffee lovers who appreciate the art of a perfectly brewed cup. 
            Join us in our journey as we continue to explore new flavors and redefine the coffee experience.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
