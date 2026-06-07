"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Menu", href: "#menu" },
  { name: "Story", href: "#story" },
  { name: "Locations", href: "#locations" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface-dim/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-montserrat font-extrabold text-2xl tracking-tighter text-white">
            BREW <span className="text-brand-gold">HAVEN</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-inter text-sm font-semibold tracking-widest uppercase text-on-surface hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-on-surface hover:text-brand-gold transition-colors">
            <FiSearch size={20} />
          </button>
          
          <motion.button
            whileHover="hover"
            className="relative text-on-surface hover:text-brand-gold transition-colors"
          >
            <motion.div
              variants={{
                hover: { rotate: [-5, 5, -5, 0], y: -2 },
              }}
              transition={{ duration: 0.5 }}
            >
              <FiShoppingBag size={20} />
            </motion.div>
            <span className="absolute -top-2 -right-2 bg-brand-coffee text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </motion.button>
          
          <AnimatedButton variant="primary" as="a" href="#order" className="py-2.5 px-5 text-xs">
            Order Now
          </AnimatedButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-on-surface relative">
            <FiShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-coffee text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button
            className="text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-white/5 py-4 px-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat font-bold text-xl text-on-surface hover:text-brand-gold"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="font-inter text-sm text-on-surface-variant">Search</span>
              <FiSearch size={20} className="text-on-surface" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
