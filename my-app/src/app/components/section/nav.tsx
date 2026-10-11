const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Nav() {
    return (
        <header
        // className={cn(
        //     "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        //     scrolled
        //         ? "bg-background/90 backdrop-blur border-b border-border"
        //         : "bg-transparent"
        // )}
        >
            <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#about"
                    onClick={(e) => handleClick(e, "#about")}
                    className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
                >
                    YT
                </a>
                <ul className="flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={cn(
                                    "text-sm transition-colors",
                                    activeSection === link.href.slice(1)
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
