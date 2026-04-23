"use client";

import { motion } from "framer-motion";

export default function GlowBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated Glow Border Background */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-lg opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-500 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative bg-[#12121a] h-full w-full">
        {children}
      </div>
    </div>
  );
}
