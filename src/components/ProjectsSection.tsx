
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Custom Identity Provider (IDP)",
      description: "Developed a custom IDP using .NET and OpenIDDICT library, functioning as an OpenID Connect/OAuth 2.0 server with PKCE support. Implemented third-party authentication via Google, Microsoft, and Keycloak while maintaining centralized identity management.",
      technologies: [".NET", "OpenIDDICT", "OAuth 2.0", "PKCE", "OpenID Connect", "C#"],
      github: "https://github.com/darshankparmar/custom-idp",
      live: ""
    },
    {
      title: "Real-Time Collaborative Tree Editor",
      description: "A collaborative tree editor allowing multiple users to work simultaneously on hierarchical data structures with real-time synchronization across all connected clients. Features conflict resolution and versioning control.",
      technologies: ["React", "Node.js", "Socket.io", "MySQL", "Express", "WebSockets"],
      github: "https://github.com/darshankparmar/Real-Time-Collaborative-Tree-Editor",
      live: ""
    },
    {
      title: "Restaurant Management System",
      description: "Comprehensive restaurant management solution featuring inventory tracking, order management, table reservations, and detailed sales analytics. Includes responsive design optimized for both staff and management interfaces.",
      technologies: ["Django", "Python", "Sqlite", "JavaScript", "Bootstrap"],
      github: "https://github.com/darshankparmar/Restaurant_management_system",
      live: ""
    },
    {
      title: "Event Management Portal",
      description: "Complete event management platform with user registration, ticketing, attendee tracking, and scheduling capabilities. Includes QR code-based check-in systems and integrated payment processing for seamless event operations.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "QR Code", "Payment Gateway"],
      github: "https://github.com/darshankparmar/event-management",
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
