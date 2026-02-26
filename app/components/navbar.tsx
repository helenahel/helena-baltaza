"use client";

import { useLanguage } from "@/app/lib/language-context";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.navbar.projects, href: "/#projects" },
    { label: t.navbar.about, href: "/#about" },
    {
      label: t.navbar.cv,
      href: "https://drive.google.com/file/d/1EsFzrpFbfArwxXRZsQtnVhN4N9qKWf03/view?usp=sharing",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-[1fr_auto_1fr] items-center bg-background/80 px-6 py-4 backdrop-blur-md sm:px-12">
      <a className="flex flex-col" href="/#hero">
        <span className="font-display text-[16px] text-foreground">
          {t.navbar.name}
        </span>
        <span className="font-light text-[16px] text-accent-text">
          {t.navbar.role}
        </span>
      </a>
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href + link.label}>
            <a
              className="group relative font-light text-[16px] text-foreground"
              href={link.href}
              {...(link.href.startsWith("http")
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              <span className="inline-block transition-transform group-hover:-translate-y-0.5">
                {link.label}
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
