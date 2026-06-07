"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const POSTERS = [
  {
    id: "1",
    image: "/poster-1.png",
  },
  {
    id: "2",
    image: "/poster-2.png",
  },
  {
    id: "3",
    image: "/poster-3.png",
  },
  {
    id: "4",
    image: "/poster-4.png",
  },
];

export function HeroSlider() {
  const swiperRef = React.useRef<import("swiper").Swiper | null>(null);

  return (
    <section className="relative w-full aspect-video md:aspect-auto md:h-[65vh] md:min-h-[300px] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          // Reset back to normal speed after any manual click transition
          swiper.params.speed = 600;
        }}
        onPaginationUpdate={(swiper) => {
          // Attach fast-speed click handlers to pagination bullets
          const bullets = swiper.pagination?.bullets;
          if (!bullets) return;
          bullets.forEach((bullet: HTMLElement, idx: number) => {
            bullet.onclick = (e) => {
              e.stopPropagation();
              swiper.params.speed = 300;
              swiper.slideToLoop(idx);
            };
          });
        }}
        className="w-full h-full hero-slider"
      >
        {POSTERS.map((poster) => (
          <SwiperSlide key={poster.id} className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center hero-image"
              style={{ backgroundImage: `url(${poster.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-slider .swiper-pagination {
          bottom: 16px;
        }
        .hero-slider .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .hero-slider .swiper-pagination-bullet-active {
          background: #ffffff;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
