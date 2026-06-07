import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center py-20 px-6">
        <h1 className="text-5xl font-montserrat font-bold text-[#2f241f] mb-6 text-center">Shop Now</h1>
        <p className="text-lg text-[#6f6259] max-w-2xl text-center font-inter mb-12">
          Bring the premium Brew Haven experience home with our beans, mugs, and makers.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto w-full">
          {/* Dummy Shop Items */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-[#e4d8cf] flex flex-col items-center text-center">
              <div className="w-full h-40 bg-[#f5f0eb] rounded-md mb-4 flex items-center justify-center text-[#2f241f] opacity-50">
                Product Image
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#2f241f] mb-2">Premium Roast Pack {item}</h3>
              <p className="font-inter text-xs text-[#6f6259] mb-4">100% Arabica Beans, 250g.</p>
              <button className="mt-auto w-full bg-[#2f241f] text-white py-2 rounded-md font-montserrat text-sm font-bold hover:bg-[#6f4e37] transition-colors">
                Add to Cart - $14.99
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
