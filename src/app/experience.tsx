import { experiences } from "./constants"

export const Experience = () => {
    return ((<section id="projects" className="scroll-mt-20 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
                <div>TODO</div>

            ))}
        </div>
    </section>))
}