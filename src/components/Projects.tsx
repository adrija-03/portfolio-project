import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    const featured = projects.filter((project) => project.featured)
    const others = projects.filter((project) => !project.featured)

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="scroll-mt-20 px-4 py-16"
        >
            <div className="mx-auto max-w-5xl">
                <h2 id="projects-heading" className="text-3xl font-bold">
                    Projects
                </h2>
                <p className="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">
                    Things I have built, with the problem each one solves.
                </p>

                {featured.length > 0 && (
                    <ul className="mt-8 space-y-8">
                        {featured.map((project) => (
                            <li key={project.title}>
                                <ProjectCard project={project} />
                            </li>
                        ))}
                    </ul>
                )}

                {others.length > 0 && (
                    <ul className="mt-8 grid gap-8 md:grid-cols-2">
                        {others.map((project) => (
                            <li key={project.title}>
                                <ProjectCard project={project} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default Projects