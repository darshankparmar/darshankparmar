
import { useEffect, useState } from "react";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight">Darshan Parmar</span>
          </a>
          <nav className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-6">
              <li><a href="#about" className="text-sm font-medium hover-lift">About</a></li>
              <li><a href="#experience" className="text-sm font-medium hover-lift">Experience</a></li>
              <li><a href="#skills" className="text-sm font-medium hover-lift">Skills</a></li>
              <li><a href="#projects" className="text-sm font-medium hover-lift">Projects</a></li>
              <li><a href="#contact" className="text-sm font-medium hover-lift">Contact</a></li>
            </ul>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/darshankparmar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/darshankparmar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <button
                onClick={toggleTheme}
                className="rounded-md p-2 hover:bg-accent transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="relative">
        {children}
      </main>
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Darshan Parmar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/darshankparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover-lift"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/darshankparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover-lift"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
