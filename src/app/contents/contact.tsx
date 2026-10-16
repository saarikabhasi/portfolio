import { profile } from "../constants";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="mt-16 mb-8 scroll-mt-20 rounded-xl border border-foreground/10 bg-zinc-500/10 p-6"
        >
            <h2 className="mb-6 text-center text-2xl font-semibold">React me out!</h2>

            <ul className="flex justify-center gap-6 text-lg">
                {profile.links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 opacity-80 transition duration-150 ease-in-out hover:text-blue-900 active:scale-95"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${link.icon}`}
                                alt=""
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                            <span className="underline">{link.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};
