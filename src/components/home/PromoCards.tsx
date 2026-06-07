"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const PROMOS = [
  {
    title: "New Brews",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
    href: "#menu",
  },
  {
    title: "Find a Cafe",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    href: "#locations",
  },
  {
    title: "Shop Beans",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
    href: "#shop",
  },
];

export function PromoCards() {
  return (
    <section className="py-section-gap bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMOS.map((promo, idx) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover="hover"
              className="group relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-white/5 cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  variants={{
                    hover: { scale: 1.05 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${promo.image})` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start gap-6">
                <h3 className="text-3xl font-montserrat font-bold text-white tracking-tight">
                  {promo.title}
                </h3>
                <motion.div
                  variants={{
                    hover: { y: 0, opacity: 1 },
                  }}
                  initial={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedButton variant="secondary" as="span">
                    Explore
                  </AnimatedButton>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
