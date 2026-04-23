"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import GlowBorder from "../ui/GlowBorder";
import { Github, ExternalLink } from "lucide-react";

const categories = ["All", "AI/ML", "Full Stack", "Voice AI", "AR/VR"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const featuredProject = projects.find((p) => p.featured);
  // Show featured project only if "All" or its specific category is selected
  const showFeatured =
    featuredProject && (activeCategory === "All" || featuredProject.category === activeCategory);

  const gridProjects = showFeatured
    ? filteredProjects.filter((p) => p.id !== featuredProject.id)
    : filteredProjects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">Projects</h2>
          <div className="h-1 w-20 bg-primary mt-4" />
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-mono transition-colors relative ${
                activeCategory === cat ? "text-primary" : "text-muted hover:text-white"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {/* Featured Project */}
          {showFeatured && featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GlowBorder className="w-full">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 font-mono text-xs uppercase">
                        Featured Project
                      </span>
                      <span className="text-muted font-mono text-xs">{featuredProject.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-syne font-bold text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="text-lg text-white/80">{featuredProject.description}</p>
                    <p className="text-primary font-mono text-sm border-l-2 border-primary pl-4">
                      {featuredProject.impact}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featuredProject.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-muted bg-white/5 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                      {featuredProject.githubUrl && (
                        <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                          <Github size={24} />
                        </a>
                      )}
                      {featuredProject.liveUrl && (
                        <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlowBorder>
            </motion.div>
          )}

          {/* Grid Projects */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {gridProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#12121a] border border-white/5 p-6 flex flex-col h-full hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,188,212,0.1)] transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-muted">{project.category}</span>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-syne font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
                  <p className="text-xs font-mono text-primary/80 mb-6">{project.impact}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-muted bg-white/5 px-2 py-1 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
