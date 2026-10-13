import { profile } from "./constants"

export const Contact = () => {
    return (<section id="contact" className="scroll-mt-20 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Contact</h2>

        <ul className="mt-4 flex gap-6 text-sm">
            {profile.links.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 opacity-80 transition duration-150 hover:bg-cyan-400/10 hover:text-cyan-300 hover:opacity-100 active:scale-95 active:bg-cyan-400/20"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${link.icon}`} alt="" aria-hidden="true" className="h-5 w-5 invert" />
                        <span className="underline">{link.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    </section>)
}
