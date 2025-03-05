
export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Angular", "React", "WPF"]
    },
    {
      category: "Backend",
      skills: [".NET Core", "Node.js", "Django"]
    },
    {
      category: "Database",
      skills: ["SQL Server", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS", "Docker (Basic)"]
    },
    {
      category: "Security and Networking",
      skills: ["OAuth2", "WebRTC", "PKCE", "TCP/UDP", "RTSP"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="inline-block pb-2 border-b-2 border-primary">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-secondary/70 dark:bg-secondary/40 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
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
