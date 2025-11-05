
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "An AI-powered resume evaluation engine built with FastAPI and React that matches resumes to job descriptions using contextual scoring. Supports multi-resume uploads, ATS parsing, and structured JSON export compatible with rxresu.me for recruiter automation.",
      technologies: ["FastAPI", "React", "Python", "Agno", "PostgreSQL"],
      github: "https://github.com/darshankparmar/resume-analyzer",
      live: ""
    },
    {
      title: "LiveCaptions Transcriber",
      description:
        "A real-time speech transcription tool extending Windows LiveCaptions with continuous text display, overlay mode, and modern WPF UI. Ideal for meetings, accessibility, and content creation with support for history logging and quick copy/export.",
      technologies: ["C#", ".NET 8.0", "WPF-UI", "Windows LiveCaptions API"],
      github: "https://github.com/darshankparmar/LiveCaptions-Transcriber",
      live: "https://github.com/darshankparmar/LiveCaptions-Transcriber/releases/tag/v1.0.0.0"
    },
    {
      title: "IntervueBot – AI Interview Platform",
      description:
        "An open-source AI-powered interview platform with adaptive questioning, resume analysis, and automated evaluation via Gemini/OpenAI APIs. Generates real-time candidate scoring and hiring recommendations for recruiters.",
      technologies: ["FastAPI", "React", "Python", "Agno", "Redis"],
      github: "https://github.com/darshankparmar/intervueBot",
      live: ""
    },
    {
      title: "Custom Identity Provider (IDP)",
      description:
        "A .NET-based identity provider using OpenIDDICT, implementing secure OAuth 2.0 and OpenID Connect flows with PKCE. Supports federated authentication via Google, Microsoft, and Keycloak for centralized identity management.",
      technologies: [".NET", "OpenIDDICT", "OAuth 2.0", "PKCE", "OpenID Connect", "C#"],
      github: "https://github.com/darshankparmar/custom-idp",
      live: ""
    },
    {
      title: "Real-Time Collaborative Tree Editor",
      description:
        "A collaborative editor enabling multiple users to manipulate hierarchical data structures in real-time with WebSocket synchronization. Includes conflict resolution, version control, and responsive UI for teamwork scenarios.",
      technologies: ["React", "Node.js", "Socket.io", "MySQL", "Express", "WebSockets"],
      github: "https://github.com/darshankparmar/Real-Time-Collaborative-Tree-Editor",
      live: ""
    },
    {
      title: "Restaurant Management System",
      description:
        "A full-stack restaurant operations suite with inventory tracking, order management, and analytics dashboards. Designed for responsive access and seamless staff coordination across web interfaces.",
      technologies: ["Django", "Python", "SQLite", "JavaScript", "Bootstrap"],
      github: "https://github.com/darshankparmar/Restaurant_management_system",
      live: ""
    }
  ];


  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="inline-block pb-2 border-b-2 border-primary">Notable Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-6 h-full flex flex-col animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary/70 dark:bg-secondary/40 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
