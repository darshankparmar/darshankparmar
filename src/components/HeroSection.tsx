import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const fullText = "Turning complex problems into reliable, scalable systems.";

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typewriterText === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typewriterText === "") {
        // Start typing again
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      } else if (isDeleting) {
        // Delete character
        setTypewriterText(fullText.substring(0, typewriterText.length - 1));
      } else {
        // Type character
        setTypewriterText(fullText.substring(0, typewriterText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, loopIndex]);

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            {/* Main title with better sizing */}
            <div className="text-center space-y-6">
              <div className="inline-block">
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                    Full Stack Developer
                  </span>
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
              </div>

              {/* Typewriter tagline - loops continuously */}
              <div className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground min-h-[3rem] flex items-center justify-center">
                  <span className="inline-block">{typewriterText}</span>
                  <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse"></span>
                </p>
              </div>
            </div>

            {/* Description cards */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="relative text-base md:text-lg text-muted-foreground leading-relaxed">
                  Designing and developing scalable, secure, and high-performance applications using MERN, .NET Core, and Python microservices.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="relative text-base md:text-lg text-muted-foreground leading-relaxed">
                  Passionate about clean architecture, automation, and cloud-native solutions that deliver real-world impact.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 justify-center max-w-md mx-auto">
              <a 
                href="#contact"
                className="group relative inline-flex h-12 w-full sm:w-52 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="#experience"
                className="group relative inline-flex h-12 w-full sm:w-52 items-center justify-center rounded-lg border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-6 text-base font-medium shadow-sm transition-all hover:border-primary/50 hover:bg-accent hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed positioning */}
      <div className="absolute bottom-3 left-1/2.1 -translate-x-1/2 z-20 animate-bounce">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="text-xs font-medium">Scroll</span>
        </a>
      </div>
    </section>
  );
}