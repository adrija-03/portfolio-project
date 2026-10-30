import type { SkillGroup } from '../types'

// Based on what you used in AccessiScan. Add your other skills,
// and delete anything you could not comfortably talk about in an interview.
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Vite', 'Responsive design'],
  },
  {
    category: 'Accessibility',
    items: ['WCAG', 'Semantic HTML', 'ARIA', 'Keyboard navigation', 'axe-core'],
  },
  {
    category: 'Tools',
    items: ['Git and GitHub', 'Vercel', 'ESLint', 'Chrome DevTools', 'Lighthouse'],
  },
]