# Shresth Singh Chandel - Personal Portfolio

A professional, modern, and interactive personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion+*. It showcases my experience, projects, skills, and daily activity tracking (GitHub contributions & daily habits).

## �� Features

- **Modern UI/UX**: Sleek, dark-themed design with custom cursors and glow effects.
- **Smooth Animations**: Page transitions and scroll animations powered by Framer Motion.
- **3D Elements**: Interactive 3D Spline components.
- **Live Activity Tracking**: 
  - **GitHub Stats**: Real-time GitHub contribution graph and streak stats.
  - **Grind Tracker**: Integrates with a custom external Habit-Tracker API to display a daily heatmap, current streaks, and a pop-out modal of detailed habits.
- **Contact Form**: Functional email integration using Resend.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices.

## 🫠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [clsx](https://github.com/lukeed/clsx)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [@splinetool/react-spline](https://spline.design/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Data Visualizations**: 
  - `react-activity-calendar`
  - `react-github-calendar`
- **Email API**: [Resend](https://resend.com/)

## ⚙️ Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env.local` file:

```env
# Resend Email API for contact form
RESEND_API_KEY=https://resend.com/

# Habit Tracker API configuration (For the Activity Section)
PORTFOLIO_API_KEY=your_habit_tracker_api_key

# Supabase (If interacting directly with database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_anon_key
````

## 💻 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShresthChandel/Portfolio-Main.git
   cd Portfolio-Main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 Folder Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layout, Globals)
│   ├── actions/          # Server actions (Email, Habit Data Fetching)
⒂   �%4․☁ api/              # API routes
├─– components/           # React Components
⒂   ├── layout/           # Navbar, Footer
⒂   ├─– sections/         # About, Activity, Contact, Experience, Hero, Projects, Skills
⒂   ├’– ui/               # Reusable UI component primitives (AnimatedText, GlowBorder)
├’– data/                 # Static data files for projects, skills, and experience
```

## 📝️ License

Designed and developed by Shresth Singh Chandel.