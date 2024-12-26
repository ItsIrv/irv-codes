export interface WorkDetails {
  title: string; // Your title (e.g., "Senior Software Engineer")
  company?: string; // The company name
  timePeriod?: string; // When you worked here
  description: string; // General overview of your time here
  responsibilities?: string[]; // Detailed list of your tasks and responsibilities
  technologies?: {
    name: string; // Technology name (e.g., "PHP")
    description: string; // How the technology was used in this role
    impact?: string[]; // Optional: Specific outcomes or impact from using this technology
  }[]; // Detailed technologies used in this role
  keyAchievements?: string[]; // Measurable outcomes or highlights from this job
  challengesAndSolutions?: {
    challenge: string; // Specific challenge faced
    solution: string; // How you overcame the challenge
  }[]; // Complex problems solved, with details
  projectsOrInitiatives?: {
    name: string; // Project/initiative name
    description: string; // Overview of the project
    role: string; // Your role in the project
    impact: string[]; // Business or technical outcomes
  }[];
  leadershipOrMentorship?: string[]; // Examples of leadership or mentoring others
  trainingOrCertificationsAcquired?: string[]; // Any new skills/certs gained here
  feedbackOrRecognition?: string[]; // Feedback, promotions, awards, or recognition
  roleType: 'Full-Time' | 'Contract' | string;
  resources?: {
    type: 'repository' | 'liveProject' | 'file'; // Type of resource (e.g., repository, live project, or file)
    label: string; // Label for the resource (e.g., "GitHub Repo", "Live Site")
    url: string; // URL or file link to the resource
  }[]; // Optional resources like links, repositories, or files
}
