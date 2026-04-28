"use server";

import { format, subDays } from "date-fns";

export async function getHabitData() {
  const apiKey = process.env.PORTFOLIO_API_KEY;

  if (!apiKey) {
    console.error("Missing Habit Tracker credentials");
    return { heatmap: [], currentStreak: 0, thirtyDayCompletion: 0, habits: [] };
  }

  try {
    const response = await fetch(`https://grind-tracker-ten.vercel.app/api/public/user-stats?key=${apiKey}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch habit stats: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error("API returned failure");
    }

    const today = new Date();
    const heatmapArr = [];
    const countsByDate = data.heatmap || {};

    for (let i = 365; i >= 0; i--) {
      const d = subDays(today, i);
      const dateStr = format(d, "yyyy-MM-dd");
      const count = countsByDate[dateStr] || 0;
      
      let level = 0;
      if (count > 0) level = 1;
      if (count > 2) level = 2;
      if (count > 4) level = 3;
      if (count > 6) level = 4;

      heatmapArr.push({
        date: dateStr,
        count,
        level,
      });
    }

    let currentStreak = 0;
    for (let i = 0; i <= 365; i++) {
      const d = subDays(today, i);
      const dateStr = format(d, "yyyy-MM-dd");
      if (countsByDate[dateStr] && countsByDate[dateStr] > 0) {
        currentStreak++;
      } else if (i === 0) {
        continue;
      } else {
        break;
      }
    }

    let thirtyDayCompletion = 0;
    for (let i = 0; i < 30; i++) {
      const d = subDays(today, i);
      const dateStr = format(d, "yyyy-MM-dd");
      thirtyDayCompletion += (countsByDate[dateStr] || 0);
    }

    return {
      heatmap: heatmapArr,
      currentStreak,
      thirtyDayCompletion,
      habits: data.habits || [],
    };
  } catch (error) {
    console.error("Error fetching habit data:", error);
    return { heatmap: [], currentStreak: 0, thirtyDayCompletion: 0, habits: [] };
  }
}
