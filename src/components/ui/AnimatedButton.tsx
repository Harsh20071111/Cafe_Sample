"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  as?: React.ElementType;
  href?: string;
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  as: Component = "button",
  ...props
}: AnimatedButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-montserrat text-sm font-bold uppercase tracking-wider transition-colors duration-300 outline-none";
  
  const variants = {
    primary: "bg-brand-coffee text-white hover:shadow-[0_4px_24px_rgba(111,78,55,0.4)]",
    secondary: "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/10",
    tertiary: "bg-transparent text-brand-cream hover:text-white",
  };

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <motion.span
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative flex items-center justify-center w-full"
      >
        <motion.span
          variants={{
            rest: { x: -20, opacity: 0 },
            hover: { x: -8, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-0"
        >
          <FiArrowRight size={18} />
        </motion.span>
        <motion.span
          variants={{
            rest: { x: 0 },
            hover: { x: 12, opacity: 0.9 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.span>
      </motion.span>
    </Component>
  );
}
