"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-6 mt-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <Link href="#" className="w-10 h-10 rounded-md bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-md bg-[#3b5998] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <FaFacebookF size={20} />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-md bg-[#ff0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <FaYoutube size={20} />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-md bg-[#55acee] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-md bg-[#007bb5] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <FaLinkedinIn size={20} />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h4 className="font-montserrat font-bold text-[#4a4a4a] mb-4 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Cafe menu</Link></li>
              <li><Link href="/locations" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Cafe Finder/ Cafe Locator</Link></li>
              <li><Link href="/contact" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Customer Care</Link></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-montserrat font-bold text-[#4a4a4a] mb-4 text-sm">Cafe Menu</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Food For Mood</Link></li>
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Hot Classic</Link></li>
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">All-Time Chillers</Link></li>
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">All-Day Delights</Link></li>
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Sweet Tooth X 32</Link></li>
              <li><Link href="/menu" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Nutritional Info</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="font-montserrat font-bold text-[#4a4a4a] mb-4 text-sm">Shop</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/shop" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Coffee Mugs & Cups</Link></li>
              <li><Link href="/shop" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Coffee Makers & Wakecup</Link></li>
              <li><Link href="/shop" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Coffee Powders</Link></li>
              <li><Link href="/shop" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Gifts</Link></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="font-montserrat font-bold text-[#4a4a4a] mb-4 text-sm">Business</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/contact" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Lease Enquiry</Link></li>
              <li><Link href="/contact" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Advertise With Us</Link></li>
              <li><Link href="/contact" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Coffee Vending Machine</Link></li>
              <li><Link href="/contact" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Outdoor Catering Service</Link></li>
              <li><Link href="/contact" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h4 className="font-montserrat font-bold text-[#4a4a4a] mb-4 text-sm">About Us</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Awards</Link></li>
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Business</Link></li>
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Governance</Link></li>
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Bean to Cup</Link></li>
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">News & Events</Link></li>
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Careers</Link></li>
              <li><Link href="/about" className="font-inter text-xs font-medium text-[#777] hover:text-[#4a4a4a] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6" />

        {/* Bottom Bar */}
        <div className="flex items-center justify-between">
          <p className="font-inter text-xs font-medium text-[#777]">
            © Cafe Coffee Day. All rights reserved.
          </p>
          <div className="relative">
            {/* Talk To Us Bubble */}
            <Link href="/contact" className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white border-[3px] border-[#e22128] rounded-full flex flex-col items-center justify-center text-[#e22128] font-bold text-[10px] uppercase leading-tight shadow-lg hover:scale-105 transition-transform" style={{ borderBottomLeftRadius: '4px' }}>
              <span>Talk</span>
              <span>To Us</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
