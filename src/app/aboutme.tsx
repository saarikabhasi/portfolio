import { profile } from "./constants";

export function Aboutme() {
    return (<section id="about" className="scroll-mt-20 py-10">
        <p className="max-w-2xl whitespace-pre-line opacity-80">{profile.about}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
                <li key={skill} className="rounded-md bg-mist-400/10 px-3 py-1 text-sm text-cyan-300">
                    {skill}
                </li>
            ))}
        </ul>
    </section>)
}