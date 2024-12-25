export interface SkillDetails {
  name: string;
  icon: string;
  description: string;
  highlights: string[];
  experiences: {
    company: string;
    role: string;
    period: string;
    summary: string;
  }[];
}
