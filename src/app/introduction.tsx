import { profile } from "./constants";

export function Introduction() {
    return (<section id="introduction" className="py-8">

        <h1 className="text-4xl font-bold sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 text-sm uppercase tracking-widest opacity-60">{profile.role}</p>
        <p className="mt-6 max-w-xl text-lg opacity-80">{profile.tagline}</p>

    </section>)
}