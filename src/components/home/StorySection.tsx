"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function StorySection() {
  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden mt-2">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472207-464a4d96597b?q=80&w=1920&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-8 h-[2px] bg-white/80 rounded-full" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}></div>
            <span className="font-montserrat font-semibold text-white text-base md:text-lg tracking-widest uppercase">
              Coffee Tastes Best
            </span>
            <div className="w-8 h-[2px] bg-white/80 rounded-full" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}></div>
          </div>
          <div className="mb-8 flex flex-col items-center">
            <span className="font-serif italic text-white text-4xl md:text-5xl lowercase mb-1 block font-medium" style={{ fontFamily: 'cursive' }}>
              with a dash of
            </span>
            <span className="font-montserrat font-extrabold text-white text-5xl md:text-7xl tracking-widest uppercase block">
              History
            </span>
          </div>
          <Link href="/about" className="bg-[#e22128] hover:bg-[#c81d23] text-white font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider transition-colors duration-300 inline-block">
            Read Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
