const sections = ["Projects", "Experience", "Contact"];

export function Nav() {
    return (
        <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur ">
            <nav className="mx-auto  max-w-7xl items-center justify-between px-6 py-4">
                <ul className="flex flex-row justify-center gap-6 text-lg font-bold">
                    {sections.map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="inline-block rounded-full px-3 py-1 opacity-70 transition duration-150 hover:bg-yellow-300/40  hover:opacity-100 active:scale-95 active:bg-cyan-400/20">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}