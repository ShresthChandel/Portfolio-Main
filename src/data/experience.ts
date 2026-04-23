export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "varnet",
    company: "Varnet Solutions Pvt. Ltd.",
    role: "AI/ML Intern",
    duration: "Jun 2024 – Aug 2024",
    location: "Indore · Internship",
    description: [
      "Engineered an Enterprise RAG Chatbot capable of handling complex domain-specific queries with high accuracy.",
      "Integrated vector databases and optimized retrieval pipelines reducing hallucination rates significantly.",
      "Built a secure backend architecture ensuring scalability and fast response times."
    ],
    skills: ["LangChain", "FAISS", "FastAPI", "Python", "LLMs"]
  },
  {
    id: "catalysist",
    company: "Catalysis'T (IIT Guwahati)",
    role: "Consultant",
    duration: "Jan 2024 – Apr 2024",
    location: "Remote · Consulting",
    description: [
      "Conducted comprehensive B2B market research to identify product-market fit for early-stage tech startups.",
      "Delivered actionable strategic insights directly to founders, improving go-to-market strategies.",
      "Collaborated cross-functionally to synthesize complex market data into accessible reports."
    ],
    skills: ["Market Research", "B2B Strategy", "Data Analysis", "Communication"]
  }
];
