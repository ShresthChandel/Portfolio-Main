"use server";

import { createClient } from "@supabase/supabase-js";
import { format, subDays } from "date-fns";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getHabitData() {
  const today = new Date();
  const oneYearAgo = subDays(today, 365);

  const { data, error } = await supabase
    .from("completions")
    .select("completed_date")
    .gte("completed_date", format(oneYearAgo, "yyyy-MM-dd"))
    .order("completed_date", { ascending: true });

  if (error) {
    console.error("Error fetching habit data:", error);
    return { heatmap: [], currentStreak: 0, thirtyDayCompletion: 0 };
  }

  const countsByDate: Record<string, number> = {};
  data.forEach((row) => {
    countsByDate[row.completed_date] = (countsByDate[row.completed_date] || 0) + 1;
  });

  const heatmap = [];
  for (let i = 365; i >= 0; i--) {
    const d = subDays(today, i);
    const dateStr = format(d, "yyyy-MM-dd");
    const count = countsByDate[dateStr] || 0;
    
    // Level computation (similar to GitHub contribution scale 0-4)
    let level = 0;
    if (count > 0) level = 1;
    if (count > 2) level = 2;
    if (count > 4) level = 3;
    if (count > 6) level = 4;

    heatmap.push({
      date: dateStr,
      count,
      level,
    });
  }

  // Calculate current streak (days with at least 1 habit completed)
  let currentStreak = 0;
  for (let i = 0; i <= 365; i++) {
    const d = subDays(today, i);
    const dateStr = format(d, "yyyy-MM-dd");
    if (countsByDate[dateStr] && countsByDate[dateStr] > 0) {
      currentStreak++;
    } else if (i === 0) {
      // It's okay if today is 0 (haven't checked off anything today yet)
      continue;
    } else {
      break;
    }
  }

  // Calculate 30-day completion total
  let last30DaysHabits = 0;
  for (let i = 0; i < 30; i++) {
    const d = subDays(today, i);
    const dateStr = format(d, "yyyy-MM-dd");
    last30DaysHabits += (countsByDate[dateStr] || 0);
  }

  return {
    heatmap,
    currentStreak,
    thirtyDayCompletion: last30DaysHabits,
  };
}
