export interface Project {
  title: string
  /** One or two sentences shown on the card */
  summary: string
  /** The real-world problem this project solves */
  problem: string
  tech: string[]
  /** Leave out if the project is not deployed */
  liveUrl?: string
  githubUrl: string
  /** Imported image path, for example: import shot from '../assets/screenshots/results.webp' */
  image: string
  /** Describe what the screenshot shows, for screen readers */
  imageAlt: string
  /** Optional: gives the project a larger "featured" card */
  featured?: boolean
  /** Optional: 3 to 4 key points for the case study */
  highlights?: string[]
}

export interface Job {
  company: string
  role: string
  /** ISO month, for example "2024-03" (works with the <time> element) */
  startDate: string
  /** null means the current role */
  endDate: string | null
  bullets: string[]
}

export interface SkillGroup {
  /** For example: "Languages", "Frontend", "Tools", "Practices" */
  category: string
  items: string[]
}