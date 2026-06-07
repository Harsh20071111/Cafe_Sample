import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FiMapPin } from "react-icons/fi";

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center py-20 px-6">
        <h1 className="text-5xl font-montserrat font-bold text-[#2f241f] mb-6 text-center">Find a Café</h1>
        <p className="text-lg text-[#6f6259] max-w-2xl text-center font-inter mb-12">
          Discover a Brew Haven near you and experience the ritual of the perfect cup.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] w-full">
          {/* Location 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e4d8cf] flex items-start gap-4">
            <div className="p-3 bg-[#e22128]/10 text-[#e22128] rounded-full">
              <FiMapPin size={24} />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl text-[#2f241f] mb-2">Downtown Flagship</h3>
              <p className="font-inter text-sm text-[#6f6259] mb-4 leading-relaxed">
                123 Brew Street, Coffee District<br />
                New York, NY 10001
              </p>
              <p className="font-inter text-sm font-semibold text-[#2f241f]">Open: 7 AM - 9 PM</p>
            </div>
          </div>

          {/* Location 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e4d8cf] flex items-start gap-4">
            <div className="p-3 bg-[#e22128]/10 text-[#e22128] rounded-full">
              <FiMapPin size={24} />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl text-[#2f241f] mb-2">Westside Roastery</h3>
              <p className="font-inter text-sm text-[#6f6259] mb-4 leading-relaxed">
                456 Artisan Avenue, Westside<br />
                Los Angeles, CA 90012
              </p>
              <p className="font-inter text-sm font-semibold text-[#2f241f]">Open: 6 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
