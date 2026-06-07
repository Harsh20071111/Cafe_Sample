import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FiSearch } from "react-icons/fi";

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl font-montserrat font-bold text-[#2f241f] mb-8 text-center">What are you looking for?</h1>
        
        <div className="max-w-[600px] w-full relative mb-12">
          <input 
            type="text" 
            placeholder="Search for coffee, locations, or merchandise..." 
            className="w-full border-2 border-[#e4d8cf] rounded-full px-6 py-4 pr-12 focus:outline-none focus:border-[#6f4e37] font-inter text-lg" 
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6f4e37]">
            <FiSearch size={24} />
          </button>
        </div>

        <div className="max-w-[800px] w-full">
          <h3 className="font-montserrat font-bold text-lg text-[#2f241f] mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-3">
            {["Dark Roast", "Cold Brew", "Flagship Store", "Coffee Mugs", "Gift Cards", "Nutritional Info"].map((term) => (
              <span key={term} className="px-4 py-2 bg-white border border-[#e4d8cf] rounded-full font-inter text-sm text-[#6f6259] cursor-pointer hover:border-[#6f4e37] hover:text-[#2f241f] transition-colors">
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
