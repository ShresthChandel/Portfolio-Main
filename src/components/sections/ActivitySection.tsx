"use client";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function ActivitySection() {
  return (
    <section id="activity" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">Activity</h2>
            <div className="h-1 w-20 bg-primary mt-4" />
          </div>
          <button className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5 group">
            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* GitHub Panel Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#12121a] border border-white/5 p-6 md:p-8 rounded-lg"
          >
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <h3 className="font-syne text-xl text-white">GitHub Contributions</h3>
              <span className="text-xs font-mono text-muted">Last 52 weeks</span>
            </div>
            <div className="flex items-center justify-center p-4 border border-dashed border-white/10 bg-white/5 rounded overflow-x-auto">
              <GitHubCalendar 
                username="ShresthChandel"
                colorScheme="dark"
                theme={{
                  dark: ['#12121a', '#1e1e2d', '#2c2c44', '#3f3f62', '#6b6bf0']
                }}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=ShresthChandel&theme=react&hide_border=true" 
                alt="GitHub Streak" 
                className="w-full rounded object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://github-readme-stats.vercel.app/api?username=ShresthChandel&theme=react&hide_border=true&include_all_commits=false&count_private=false" 
                alt="GitHub Stats" 
                className="w-full rounded object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ShresthChandel&theme=react&hide_border=true&include_all_commits=false&count_private=false&layout=compact" 
                alt="Top Languages" 
                className="w-full rounded xl:col-span-2 object-cover"
              /> */}
            </div>
          </motion.div>

          {/* Habit Tracker Panel Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-[#12121a] border border-white/5 p-6 md:p-8 rounded-lg"
          >
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <h3 className="font-syne text-xl text-white">Grind Tracker</h3>
              <span className="text-xs font-mono text-muted">Daily Habits</span>
            </div>
            <div className="h-[200px] flex items-center justify-center border border-dashed border-white/10 bg-white/5 rounded">
              <p className="text-muted font-mono text-sm">Habit Tracker Space (Pending Integration)</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
               <div className="bg-background/50 p-4 rounded text-center">
                <div className="text-xs font-mono text-muted uppercase">Current Habit Streak</div>
                <div className="text-2xl font-syne text-primary mt-1">-</div>
              </div>
              <div className="bg-background/50 p-4 rounded text-center">
                <div className="text-xs font-mono text-muted uppercase">30-Day Completion</div>
                <div className="text-2xl font-syne text-primary mt-1">-</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
