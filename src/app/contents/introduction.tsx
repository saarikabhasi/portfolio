import { profile } from "../constants";

export function Introduction() {
    return (
        <section id="introduction" className="py-8">
            <h1 className="text-5xl font-bold sm:text-6xl">{profile.name}</h1>
            <p className="text-md sm:text-md mt-4 tracking-widest uppercase opacity-60">
                {profile.role}
            </p>
            <p className="mt-6 max-w-xl text-lg opacity-80 sm:text-lg">{profile.tagline}</p>
        </section>
    );
}
