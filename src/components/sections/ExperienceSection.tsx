"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">Experience</h2>
          <div className="h-1 w-20 bg-primary mt-4" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience: exp, index }: { experience: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={cn("relative flex items-start md:items-center", isEven ? "md:flex-row-reverse" : "")}>
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 mt-6 md:mt-0 z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-1/2" />

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "w-full md:w-1/2 pl-12 md:pl-0",
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 text-left"
        )}
      >
        <div
          className="bg-[#12121a] border border-white/5 p-6 md:p-8 hover:border-primary/30 transition-colors cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={cn("flex flex-col gap-1 mb-4", isEven ? "md:items-end" : "md:items-start")}>
            <h3 className="text-xl md:text-2xl font-syne font-bold text-white group-hover:text-primary transition-colors">
              {exp.role}
            </h3>
            <div className="text-lg text-white/80">{exp.company}</div>
            <div className="text-sm font-mono text-muted">
              {exp.duration} | {exp.location}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <ul className={cn("space-y-3 mb-6 text-muted text-sm md:text-base", isEven ? "md:list-none" : "list-disc list-inside")}>
              {exp.description.map((item: string, i: number) => (
                <li key={i} className={cn(isEven ? "md:text-right" : "")}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className={cn("flex flex-wrap gap-2 mt-4", isEven ? "md:justify-end" : "justify-start")}>
            {exp.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-background border border-primary/20 text-xs font-mono text-primary rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className={cn("mt-4 flex", isEven ? "md:justify-end" : "justify-start")}>
             <button className="text-xs text-muted flex items-center gap-1 group-hover:text-white transition-colors">
               {isExpanded ? "Show Less" : "Click to expand"}
               {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
