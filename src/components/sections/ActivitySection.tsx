"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, X, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getHabitData } from "@/app/actions/habit-data";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false }
);

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

interface Habit {
  id: string;
  name: string;
  emoji: string;
  category: string;
  priority: string;
  streak: number;
  completedToday: boolean;
  totalCompletions: number;
}

export default function ActivitySection() {
  const [habitData, setHabitData] = useState<{ date: string; count: number; level: number }[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [habitStats, setHabitStats] = useState({ currentStreak: 0, thirtyDayCompletion: 0 });
  const [loadingHabits, setLoadingHabits] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadHabits() {
      try {
        const data = await getHabitData();
        setHabitData(data.heatmap);
        setHabitStats({
          currentStreak: data.currentStreak,
          thirtyDayCompletion: data.thirtyDayCompletion,
        });
        setHabits(data.habits || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingHabits(false);
      }
    }
    loadHabits();
  }, []);

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

            </div>
          </motion.div>

          {/* Habit Tracker Panel Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-[#12121a] border border-white/5 p-6 md:p-8 rounded-lg relative cursor-pointer group hover:border-primary/50 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <h3 className="font-syne text-xl text-white flex items-center gap-2">
                Grind Tracker
                <ChevronRight size={18} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </h3>
              <span className="text-xs font-mono text-muted group-hover:text-white transition-colors">View Habits Overview</span>
            </div>
            <div className="flex items-center justify-center p-4 border border-dashed border-white/10 bg-white/5 rounded overflow-x-auto min-h-[160px]">
              {loadingHabits ? (
                <p className="text-muted font-mono text-sm animate-pulse">Loading habits...</p>
              ) : habitData.length > 0 ? (
                <ActivityCalendar 
                  data={habitData}
                  theme={{
                    light: ['#12121a', '#1e1e2d', '#2c2c44', '#3f3f62', '#6b6bf0'],
                    dark: ['#12121a', '#1e1e2d', '#2c2c44', '#3f3f62', '#6b6bf0']
                  }}
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                />
              ) : (
                <p className="text-muted font-mono text-sm">No habit data available</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
               <div className="bg-background/50 p-4 rounded text-center">
                <div className="text-xs font-mono text-muted uppercase">Current Habit Streak</div>
                <div className="text-2xl font-syne text-primary mt-1">
                  {loadingHabits ? "-" : `${habitStats.currentStreak} days`}
                </div>
              </div>
              <div className="bg-background/50 p-4 rounded text-center">
                <div className="text-xs font-mono text-muted uppercase">30-Day Completion</div>
                <div className="text-2xl font-syne text-primary mt-1">
                  {loadingHabits ? "-" : habitStats.thirtyDayCompletion}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal for Habits List */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#12121a] border border-white/10 rounded-xl p-6 md:p-8 w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-syne font-bold text-white">Daily Habits</h3>
                    <p className="text-muted text-sm mt-1">What I&apos;m up to every day</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="overflow-y-auto pr-2 pb-4 -mr-2 space-y-4 custom-scrollbar">
                  {loadingHabits ? (
                    <div className="flex justify-center items-center py-12">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : habits.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {habits.map((habit) => (
                        <div 
                          key={habit.id} 
                          className="bg-white/5 border border-white/5 rounded-lg p-4 flex items-start gap-4 hover:border-primary/30 transition-colors"
                        >
                          <div className={`text-3xl p-3 rounded-lg ${habit.completedToday ? "bg-primary/20" : "bg-white/5"}`}>
                            {habit.emoji}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-semibold text-white truncate max-w-[140px]">{habit.name}</h4>
                              {habit.completedToday && (
                                <span className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded font-mono">DONE</span>
                              )}
                            </div>
                            <div className="text-xs text-muted mt-1 capitalize">{habit.category} • {habit.priority}</div>
                            <div className="flex gap-4 mt-3 pt-2 border-t border-white/5">
                              <div className="flex flex-col">
                                <span className="text-[10px] text-muted">Streak</span>
                                <span className="text-sm font-syne text-white">{habit.streak} {habit.streak === 1 ? 'day' : 'days'}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[10px] text-muted">Total</span>
                                <span className="text-sm font-syne text-white">{habit.totalCompletions}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 border border-dashed border-white/10 rounded-lg">
                      <p className="text-muted mb-2">No active habits found.</p>
                      <p className="text-sm text-white/40">Check back later once I start tracking again!</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
