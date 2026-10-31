import type { Project } from '../types'

interface ProjectCardProps {
    project: Project
}

const focusRing =
    'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-300 dark:focus-visible:ring-offset-gray-950'

const primaryLink = `inline-flex items-center gap-1 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-300 dark:text-gray-950 dark:hover:bg-blue-200 ${focusRing}`

const secondaryLink = `inline-flex items-center gap-1 rounded-lg border border-gray-400 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-500 dark:text-gray-100 dark:hover:bg-gray-800 ${focusRing}`

function ProjectCard({ project }: ProjectCardProps) {
    const {
        title,
        summary,
        problem,
        tech,
        liveUrl,
        githubUrl,
        image,
        imageAlt,
        featured,
        highlights,
    } = project

    return (
        <article
            className={`overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ${featured ? 'md:grid md:grid-cols-2' : ''
                }`}
        >
            <img
                src={image}
                alt={imageAlt}
                width={1280}
                height={720}
                loading="lazy"
                className="aspect-video h-full w-full bg-gray-100 object-cover dark:bg-gray-800"
            />

            <div className="flex flex-col gap-4 p-5 md:p-6">
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{summary}</p>
                </div>

                {featured && (
                    <div className="space-y-3 text-sm">
                        <p>
                            <span className="font-semibold">The problem: </span>
                            <span className="text-gray-700 dark:text-gray-300">{problem}</span>
                        </p>

                        {highlights && highlights.length > 0 && (
                            <div>
                                <h4 className="font-semibold">Key decisions</h4>
                                <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
                                    {highlights.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                <ul aria-label={`Technologies used in ${title}`} className="flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <li
                            key={item}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3">
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noreferrer" className={primaryLink}>
                            Live demo
                            <span className="sr-only"> of {title} (opens in a new tab)</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    )}
                    <a href={githubUrl} target="_blank" rel="noreferrer" className={secondaryLink}>
                        GitHub
                        <span className="sr-only"> repository for {title} (opens in a new tab)</span>
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard