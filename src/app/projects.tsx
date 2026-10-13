"use client";

import { useState, useSyncExternalStore } from "react";
import { projects } from "./constants";

const DESKTOP_PAGE_SIZE = 3;
const MOBILE_PAGE_SIZE = 1;
const DESKTOP_QUERY = "(min-width: 640px)";

function useIsDesktop() {
    return useSyncExternalStore(
        (notify) => {
            const mql = window.matchMedia(DESKTOP_QUERY);
            mql.addEventListener("change", notify);
            return () => mql.removeEventListener("change", notify);
        },
        () => window.matchMedia(DESKTOP_QUERY).matches,
        () => true,
    );
}

export function Projects() {
    const isDesktop = useIsDesktop();
    const [extraPages, setExtraPages] = useState(0);
    const pageSize = isDesktop ? DESKTOP_PAGE_SIZE : MOBILE_PAGE_SIZE;
    const visible = pageSize * (extraPages + 1);
    const hasMore = visible < projects.length;

    return (<section id="projects" className="scroll-mt-20 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, visible).map((project) => (
                <a
                    key={project.title}
                    href={project.href}
                    className="group flex flex-col rounded-xl border border-foreground/10 p-5 transition hover:border-foreground/30 hover:bg-foreground/5"
                >
                    <h3 className="font-semibold group-hover:underline">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm opacity-70">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2 text-xs opacity-60">
                        {project.tags.map((tag) => (
                            <li key={tag} className="rounded-full bg-foreground/10 px-3 py-1 text-sm">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </a>
            ))}
        </div>
        {projects.length > pageSize && (
            <button
                type="button"
                onClick={() => setExtraPages(hasMore ? extraPages + 1 : 0)}
                className="mt-6 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition hover:bg-foreground/5"
            >
                {hasMore ? "Show more" : "Show less"}
            </button>
        )}
    </section>)
}