export interface Achievement {
  id: string;
  rank: string;
  event: string;
  organizer: string;
  date: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "eureka-iit-bhu",
    rank: "1st Place",
    event: "Eureka Case Study Competition",
    organizer: "IIT BHU",
    date: "2024",
    description: "Developed an innovative case solution for a complex business problem. Outperformed 50+ teams by combining technical feasibility with strong go-to-market strategies."
  }
];
