import { profile } from "../constants";

export function Aboutme() {
    return (<section id="about" className="scroll-mt-20 py-10">
        <p className="whitespace-pre-line text-justify text-sm opacity-80 sm:text-xl">{profile.about}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
                <li key={skill} className="rounded-md bg-mist-400/10 px-3 py-1 text-sm text-blue-900 sm:text-lg">
                    {skill}
                </li>
            ))}
        </ul>
    </section>)
}