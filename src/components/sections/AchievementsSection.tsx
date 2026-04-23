"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { Award } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">Achievements</h2>
          <div className="h-1 w-20 bg-primary mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#12121a] border border-white/5 p-8 pt-12 mt-6 hover:border-primary/30 transition-colors group"
            >
              {/* Floating Rank Badge */}
              <div className="absolute -top-6 left-6 bg-gradient-to-br from-yellow-400 to-yellow-600 px-4 py-2 rounded shadow-lg shadow-yellow-500/20 flex items-center gap-2">
                <Award size={18} className="text-black" />
                <span className="font-syne font-bold text-black">{ach.rank}</span>
              </div>

              <div className="flex flex-col h-full">
                <h3 className="text-xl font-syne font-bold text-white mb-2">{ach.event}</h3>
                <div className="text-sm font-mono text-primary mb-4">
                  {ach.organizer} • {ach.date}
                </div>
                <p className="text-muted text-sm leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
