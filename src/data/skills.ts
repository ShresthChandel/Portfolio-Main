export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "C++", "HTML/CSS"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js 14", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"]
  },
  {
    category: "AI/ML",
    skills: ["LangChain", "LLMs", "FAISS", "Hugging Face", "edge-tts", "LiveKit"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase", "Redis"]
  },
  {
    category: "Tools & Cloud",
    skills: ["Git/GitHub", "Vercel", "Docker", "AWS (EC2, S3)", "Postman"]
  }
];
