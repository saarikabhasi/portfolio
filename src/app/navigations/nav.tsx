const sections = ["Projects", "Contact"];

export function Nav() {
    return (
        <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
            <nav className="mx-auto max-w-7xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">
                <ul className="text-md flex flex-row flex-wrap justify-center gap-1 font-bold sm:gap-6 sm:text-xl">
                    {sections.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="inline-block rounded-full border-yellow-300 px-3 py-1.5 text-green-950 opacity-70 transition duration-150 hover:bg-yellow-300/40 hover:opacity-100 active:scale-95 sm:px-5 sm:py-2"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
