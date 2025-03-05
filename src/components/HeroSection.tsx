
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">Software Development Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Specializing in scalable architectures, cloud solutions, and high-performance systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Me
              </a>
              <a 
                href="#experience"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
