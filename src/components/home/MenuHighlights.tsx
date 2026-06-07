"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const MENU_ITEMS = [
  {
    name: "Midnight Espresso",
    description: "Our signature dark roast with notes of dark chocolate and black cherry.",
    price: "$4.50",
    tags: ["Signature", "Dark"],
  },
  {
    name: "Golden Hour Latte",
    description: "Smooth espresso blended with steamed oat milk and infused with honeycomb.",
    price: "$6.00",
    tags: ["Popular"],
  },
  {
    name: "Velvet Pour-Over",
    description: "Single-origin Ethiopian Yirgacheffe, slow-dripped for a bright, floral finish.",
    price: "$5.50",
    tags: ["Artisan"],
  },
  {
    name: "Charcoal Mocha",
    description: "Rich cocoa paired with activated charcoal and espresso, topped with cream.",
    price: "$6.50",
    tags: ["Decadent"],
  },
];

export function MenuHighlights() {
  return (
    <section className="py-section-gap bg-background border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white tracking-tight mb-4">
              Curated Selection
            </h2>
            <p className="text-on-surface-variant font-inter">
              Discover our most sought-after blends and artisanal creations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedButton variant="secondary">Full Menu</AnimatedButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-6 rounded-lg bg-surface hover:bg-surface-container transition-colors border border-transparent hover:border-brand-gold/30"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-widest font-bold text-brand-coffee bg-brand-primary-fixed rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-inter text-on-surface-variant max-w-sm">
                  {item.description}
                </p>
              </div>
              <div className="font-montserrat font-bold text-brand-cream text-lg">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
