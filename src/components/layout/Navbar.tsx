"use client";

import React from "react";
import Link from "next/link";
import { FiSearch, FiUser } from "react-icons/fi";

export function Navbar() {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo — larger and prominent */}
        <Link href="/" className="flex items-center gap-1 md:gap-1.5">
          <span className="font-montserrat font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight text-[#2f241f]">
            BREW
          </span>
          <span className="font-montserrat font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight text-[#6F4E37]">
            HAVEN
          </span>
        </Link>

        {/* Right side — search & login */}
        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/search"
            className="flex items-center gap-1 md:gap-2 text-[#6f6259] hover:text-[#2f241f] transition-colors"
            aria-label="Search"
          >
            <FiSearch size={20} strokeWidth={2.2} className="w-5 h-5 md:w-5 md:h-5" />
            <span className="hidden sm:inline font-inter text-sm font-semibold tracking-wide">
              Search
            </span>
          </Link>

          <div className="w-px h-4 md:h-5 bg-[#e4d8cf]" />

          <Link
            href="/login"
            className="flex items-center gap-1 md:gap-2 text-[#6f6259] hover:text-[#2f241f] transition-colors"
            aria-label="Login"
          >
            <FiUser size={20} strokeWidth={2.2} className="w-5 h-5 md:w-5 md:h-5" />
            <span className="hidden sm:inline font-inter text-sm font-semibold tracking-wide">
              Login
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
