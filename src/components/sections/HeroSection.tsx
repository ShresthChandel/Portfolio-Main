"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";
import { ChevronDown, Download, ArrowRight } from "lucide-react";

const roles = ["Software Development Engineer", "AI/ML Engineer", "Product Builder"];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Gradient & Spline Scene */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="hidden md:block w-full h-full opacity-60">
          <Spline
            scene="https://prod.spline.design/O7fIjDuTq8PCwRIb/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
            className="transition-opacity duration-1000 ease-in"
            style={{ opacity: isSplineLoaded ? 1 : 0 }}
          />
        </div>
        {/* Mobile Fallback */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="md:col-span-8 flex flex-col items-start text-left">
          <AnimatedText
            text="Shresth Singh Chandel"
            className="font-syne font-bold text-5xl md:text-7xl lg:text-[80px] leading-tight tracking-tight text-white mb-4"
          />

          <div className="h-10 md:h-12 flex items-center mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRoleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="font-mono text-primary text-xl md:text-2xl"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted/90 max-w-2xl mb-10"
          >
            I build things that ship, scale, and matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 group"
            >
              See My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/5 transition-colors duration-300"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-16 flex items-center gap-6 divide-x divide-white/10"
          >
            <div className="pr-6 flex flex-col">
              <span className="text-3xl font-syne text-white">5+</span>
              <span className="text-xs font-mono text-muted uppercase">Projects Shipped</span>
            </div>
            <div className="px-6 flex flex-col">
              <span className="text-3xl font-syne text-white">2</span>
              <span className="text-xs font-mono text-muted uppercase">Internships</span>
            </div>
            <div className="pl-6 flex flex-col">
              <span className="text-3xl font-syne text-primary">1st</span>
              <span className="text-xs font-mono text-muted uppercase">Place IIT BHU</span>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Card (Desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex md:col-span-4 justify-end pointer-events-none"
        >
          <div className="w-[280px] bg-background/40 backdrop-blur-md border border-white/10 p-6 shadow-2xl relative overflow-hidden pointer-events-auto">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live Status
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/80">GitHub Streak</span>
                <span className="font-mono text-primary font-bold">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/80">Habits Today</span>
                <span className="font-mono text-white">Tracking...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
