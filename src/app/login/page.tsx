import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl font-montserrat font-bold text-[#2f241f] mb-8 text-center">Welcome Back</h1>
        
        <form className="bg-white p-8 rounded-lg shadow-sm border border-[#e4d8cf] max-w-[400px] w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-semibold text-[#2f241f]">Email</label>
            <input type="email" placeholder="Enter your email" className="border border-[#e4d8cf] rounded-md px-4 py-2 focus:outline-none focus:border-[#6f4e37]" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-semibold text-[#2f241f]">Password</label>
            <input type="password" placeholder="Enter your password" className="border border-[#e4d8cf] rounded-md px-4 py-2 focus:outline-none focus:border-[#6f4e37]" />
          </div>
          <div className="flex justify-between items-center mt-[-10px]">
            <label className="flex items-center gap-2 font-inter text-xs text-[#6f6259] cursor-pointer">
              <input type="checkbox" className="rounded" /> Remember me
            </label>
            <a href="#" className="font-inter text-xs text-[#e22128] hover:underline">Forgot password?</a>
          </div>
          <button type="button" className="bg-[#2f241f] hover:bg-[#6f4e37] text-white font-bold py-3 rounded-md text-sm uppercase tracking-wider transition-colors duration-300 w-full mt-2">
            Sign In
          </button>
          
          <div className="text-center font-inter text-sm text-[#6f6259] mt-4">
            Don't have an account? <a href="#" className="text-[#e22128] font-semibold hover:underline">Sign Up</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
