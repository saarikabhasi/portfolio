"use client";

import { useState, useSyncExternalStore } from "react";
import { projects } from "../constants";

const DESKTOP_PAGE_SIZE = 2;
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

    return (
        <section id="projects" className="scroll-mt-20 py-16">
            <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
            <div className="grid gap-4 text-justify sm:grid-cols-2">
                {projects.slice(0, visible).map((project) => (
                    <a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-48 flex-col rounded-xl border border-foreground/10 bg-green-600/10 p-5 transition hover:border-foreground/30 hover:bg-foreground/5 hover:bg-yellow-300/40"
                    >
                        <h3 className="flex items-start justify-between gap-2 text-lg font-semibold text-green-900 group-hover:underline">
                            {project.title}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/external-link.svg`}
                                alt=""
                                aria-hidden="true"
                                className="mt-1 h-4 w-4 shrink-0 bg-green-600 opacity-50 transition"
                            />
                            <span className="sr-only">(opens in a new tab)</span>
                        </h3>
                        <p className="text-md mt-2 flex-1 opacity-70">{project.description}</p>
                        <ul className="text-md mt-4 flex flex-wrap gap-2 opacity-60">
                            {project.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="text-md rounded-full bg-mist-400/10 px-3 py-1 font-semibold text-blue-900"
                                >
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
                    className={`mt-6 rounded-full border px-5 py-2 text-sm font-medium transition duration-150 active:scale-95 ${
                        hasMore
                            ? "border-yellow-300 hover:bg-yellow-500/20"
                            : "border-yellow-300 hover:bg-yellow-500/20"
                    }`}
                >
                    {hasMore ? "Show more" : "Show less"}
                </button>
            )}
        </section>
    );
}
