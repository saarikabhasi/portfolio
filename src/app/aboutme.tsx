import { profile } from "./constants";

export function Aboutme() {
    return (<section id="about" className="scroll-mt-20 py-16">
        <h2 className="mb-6 text-2xl font-semibold">About</h2>
        <p className="max-w-2xl whitespace-pre-line opacity-80">{profile.about}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
                <li key={skill} className="rounded-full bg-foreground/10 px-3 py-1 text-sm">
                    {skill}
                </li>
            ))}
        </ul>
    </section>)
}