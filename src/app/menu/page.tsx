import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-5xl font-montserrat font-bold text-[#2f241f] mb-6">Our Menu</h1>
        <p className="text-lg text-[#6f6259] max-w-2xl text-center font-inter">
          Explore our handcrafted selection of seasonal brews, hot classics, and all-day delights. Designed to satisfy every craving.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto w-full">
          {/* Dummy Menu Items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-[#e4d8cf] flex flex-col items-center text-center">
              <div className="w-full h-48 bg-[#f5f0eb] rounded-md mb-4 flex items-center justify-center text-[#2f241f] opacity-50">
                Image Placeholder
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[#2f241f] mb-2">Signature Brew {item}</h3>
              <p className="font-inter text-sm text-[#6f6259] mb-4">A perfectly balanced blend with notes of caramel and dark chocolate.</p>
              <span className="font-montserrat font-bold text-[#e22128]">$5.99</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
