export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  category: "AI/ML" | "Full Stack" | "Voice AI" | "AR/VR";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    title: "Enterprise RAG Chatbot",
    description: "A production-grade Retrieval-Augmented Generation chatbot built during internship for enterprise knowledge bases.",
    impact: "Deployed in production, serving enterprise clients.",
    category: "AI/ML",
    techStack: ["LangChain", "FAISS", "FastAPI", "React"],
    githubUrl: "https://github.com/ShresthChandel",
    featured: true,
  },
  {
    id: "friday-voice",
    title: "F.R.I.D.A.Y. Voice Assistant",
    description: "A real-time Voice AI Assistant capable of highly interactive conversational workflows.",
    impact: "Reduced latency by 40% using edge models.",
    category: "Voice AI",
    techStack: ["FastMCP", "LiveKit", "Gemini 2.5 Flash", "Sarvam STT"],
    githubUrl: "https://github.com/ShresthChandel/Ironman-Friday",
  },
  {
    id: "design-code",
    title: "Design Code",
    description: "An AI-powered platform for mastering UML-based Low-Level Design — like LeetCode, but for system design.",
    impact: "Provides AI-generated scores and actionable feedback on SOLID principles and design patterns.",
    category: "Full Stack",
    techStack: ["Next.js", "React Flow", "Prisma", "FastAPI", "CrewAI"],
    githubUrl: "https://github.com/xcurx/design-code.git",
  },
  {
    id: "internmitra",
    title: "InternMitra",
    description: "A full-stack portal connecting students with high-quality internship opportunities.",
    impact: "Scaled to get connected to PM internship scheme. M active student profiles.",
    category: "Full Stack",
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/ShresthChandel/InternMitra",
  },
  {
    id: "the-editor",
    title: "The Editor",
    description: "A collaborative web-based code editor with real-time syncing capabilities.",
    impact: "Enabled pair programming with sub-50ms latency.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "Socket.io", "Monaco Editor"],
    githubUrl: "https://github.com/ShresthChandel/web-ide.git",
  },
  {
    id: "empathy-engine",
    title: "Empathy Engine",
    description: "Emotion-aware TTS synthesis that dynamically modulates prosody based on sentiment.",
    impact: "Achieved high-fidelity emotional resonance in synthesized speech.",
    category: "AI/ML",
    techStack: ["FastAPI", "Hugging Face", "edge-tts", "Python"],
    githubUrl: "https://github.com/ShresthChandel/Empathy-Engine.git",
  },
  {
    id: "nearby-recommender",
    title: "Smart Nearby Places Recommender",
    description: "A personalized location recommender leveraging real-time geospatial data.",
    impact: "Boosted local business discovery engagement by 30%.",
    category: "Full Stack",
    techStack: ["React", "Google Maps API", "Tailwind"],
    githubUrl: "https://github.com/ShresthChandel/Nearby-Place-Recommender.git",
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    description: "A Grind OS habit tracker application with daily habit tracking, streak management, and GitHub-style activity heatmaps.",
    impact: "Features email nudges via Vercel Cron and milestone celebrations.",
    category: "Full Stack",
    techStack: ["Next.js 14", "Supabase", "Tailwind CSS", "shadcn/ui", "Resend"],
    githubUrl: "https://github.com/ShresthChandel/Habit-Tracker.git",
  },
  {
    id: "hand-connect",
    title: "Hand Connect",
    description: "An innovative project developed to bridge communication gaps.",
    impact: "Empowered users with enhanced connectivity.",
    category: "AI/ML",
    techStack: ["Python", "Computer Vision"],
    githubUrl: "https://github.com/ShresthChandel/Hand-Connect.git",
  },
  {
    id: "vrflow",
    title: "VRflow",
    description: "An AR/VR pilot training module providing immersive, low-risk procedural simulations.",
    impact: "Adopted for preliminary pilot procedure familiarization.",
    category: "AR/VR",
    techStack: ["Unity", "C#", "Oculus SDK"],
    githubUrl: "https://github.com/ShresthChandel",
  }
  
];
