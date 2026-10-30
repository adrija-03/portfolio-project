import type { Project } from '../types'

export const projects: Project[] = [
    {
        title: 'AccessiScan',
        summary:
            'Scans a URL or pasted HTML for accessibility problems, scores the page, and can optionally use AI to explain each issue and suggest a fix in plain English.',
        problem:
            'Most websites fail basic accessibility checks, and existing tools show technical rule codes that developers find hard to act on.',
        tech: [
            'React',
            'JavaScript',
            'Tailwind CSS',
            'axe-core',
            'DOMPurify',
            'Vercel Serverless Functions',
            'Google Gemini API',
        ],
        // TODO: replace with your real live URL after deploying
        liveUrl: 'https://accessibility-auditor-nine.vercel.app/',
        githubUrl: 'https://github.com/adrija-03/accessibility-auditor',
        // TODO: put your screenshot in public/screenshots/ and match this file name
        image: '/screenshots/accessiscan-results.webp',
        imageAlt:
            'AccessiScan results page showing an accessibility score and a list of issues sorted by severity',
        featured: true,
        highlights: [
            'axe-core finds the issues, so detection is reliable. The AI only explains them and suggests fixes.',
            'AI is opt-in. Only up to 3 broken HTML snippets per issue are sent, in one batched request per scan.',
            'Pasted HTML is sanitized with DOMPurify and rendered in a sandboxed iframe before scanning.',
            'URL scanning runs in a serverless function that blocks private addresses, checks every redirect, and limits size and time.',
        ],
    },
]