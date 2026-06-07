import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#faf8f5] flex flex-col items-center py-20 px-6">
        <h1 className="text-5xl font-montserrat font-bold text-[#2f241f] mb-6 text-center">Talk to Us</h1>
        <p className="text-lg text-[#6f6259] max-w-2xl text-center font-inter mb-12">
          We'd love to hear from you. Whether you have a question about our menu, need assistance, or just want to chat coffee.
        </p>
        
        <form className="bg-white p-8 rounded-lg shadow-sm border border-[#e4d8cf] max-w-[600px] w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-semibold text-[#2f241f]">Name</label>
            <input type="text" placeholder="Your Name" className="border border-[#e4d8cf] rounded-md px-4 py-2 focus:outline-none focus:border-[#6f4e37]" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-semibold text-[#2f241f]">Email</label>
            <input type="email" placeholder="Your Email" className="border border-[#e4d8cf] rounded-md px-4 py-2 focus:outline-none focus:border-[#6f4e37]" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-semibold text-[#2f241f]">Message</label>
            <textarea rows={4} placeholder="How can we help?" className="border border-[#e4d8cf] rounded-md px-4 py-2 focus:outline-none focus:border-[#6f4e37]"></textarea>
          </div>
          <button type="button" className="bg-[#e22128] hover:bg-[#c81d23] text-white font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider transition-colors duration-300 w-fit">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
