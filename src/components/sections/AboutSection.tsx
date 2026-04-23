"use client";

import { motion } from "framer-motion";
import { currentBuild } from "@/data/currentBuild";
import { skillsData } from "@/data/skills";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">About Me</h2>
          <div className="h-1 w-20 bg-primary mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-lg text-muted/90"
          >
            <motion.p variants={itemVariants}>
              I&apos;m a pre-final year B.Tech CSE student at IIIT Nagpur, heavily focused on building things that ship, scale, and matter. I don&apos;t just write code; I build products that solve real problems.
            </motion.p>
            <motion.p variants={itemVariants}>
              My interests span across Full-Stack Engineering, AI/ML, and emerging tech like Voice AI and AR/VR. I thrive in high-agency environments where I can take ownership of the end-to-end development lifecycle.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-mono text-white/80">
                  Currently building: <span className="text-primary font-bold">{currentBuild}</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Tech Stack Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skillsData.map((category, idx) => (
              <div key={idx} className="col-span-full mb-2 mt-4 first:mt-0">
                <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-3">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="px-3 py-1.5 bg-[#12121a] border border-white/5 text-sm font-mono text-white/70 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,188,212,0.15)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
