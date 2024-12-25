export interface SkillDetails {
  name: string; // Skill name (e.g., "JavaScript")
  icon: string; // Associated icon for visual appeal
  description: string; // General overview of the skill
  highlights: string[]; // Key aspects or standout points about the skill
  experiences: {
    company: string; // Name of the company where the skill was applied
    role: string; // Your role while using the skill
    period: string; // Time period in this role
    summary: string; // Brief context of how the skill was used
    outcomes: string[]; // Tangible results achieved using the skill
  }[];
  certifications?: string[]; // Relevant certifications (e.g., "AWS Certified Developer")
  tools?: string[]; // Tools, libraries, or frameworks related to the skill (e.g., "React, Redux")
  keywords?: string[]; // Keywords or buzzwords for SEO or ATS optimization
  proficiencyLevel?: string; // Self-rated expertise level (e.g., "Advanced")
  industryApplications?: string[]; // Industries where this skill has been applied
  trainingOrMentorship?: {
    description: string; // Description of training or mentorship
    outcomes: string[]; // Tangible outcomes of mentoring or training others
  }[]; // Mentoring or training instances
  projects?: {
    name: string; // Project or initiative name
    description: string; // Overview of the project where the skill was applied
    role: string; // Your role in the project
    impact: string[]; // Outcomes or business impacts
  }[]; // Projects where the skill was prominently used
  challengesAndSolutions?: {
    challenge: string; // Specific challenge faced related to this skill
    solution: string; // How you overcame the challenge using the skill
  }[]; // Challenges faced and solutions implemented
  learningPath?: {
    resources: string[]; // Books, courses, or tools used to learn or improve this skill
    milestones: string[]; // Significant milestones in mastering the skill
  }; // Learning and development journey for the skill
}
