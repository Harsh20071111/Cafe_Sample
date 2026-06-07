"use client";

import React from "react";
import Link from "next/link";

const GRID_ITEMS = [
  {
    id: "whats-new",
    image: "/grid-1.png",
    href: "/menu",
  },
  {
    id: "find-cafe",
    image: "/grid-2.png",
    href: "/locations",
  },
  {
    id: "shop-now",
    image: "/grid-3.png",
    href: "/shop",
  },
];

export function PromoGrid() {
  return (
    <section className="w-full h-auto md:h-[65vh] min-h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {GRID_ITEMS.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="relative overflow-hidden cursor-pointer min-h-[350px] md:min-h-0 block hover:opacity-95 transition-opacity"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
