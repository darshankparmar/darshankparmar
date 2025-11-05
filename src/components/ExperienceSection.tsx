
export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Matrix Comsec Pvt. Ltd.",
      location: "Vadodara, Gujarat, India",
      duration: "Jan 2023 - Sep 2025",
      responsibilities: [
        "Architected and optimized P2P communication services, scaling system capacity from 3K+ to 30K+ NVRs.",
        "Built an Angular-based monitoring dashboard, cutting troubleshooting time by 50% with real-time visual analytics.",
        "Integrated WhatsApp Meta, WebRTC, and HLS for advanced communication workflows and media streaming.",
        "Implemented OAuth 2.0 with PKCE, enhancing multi-tenant security and centralized user management.",
        "Developed mobile video push capabilities, enabling phones to function as CCTV devices with optimized streaming.",
        "Ensured complete OWASP and STQC compliance, mitigating 95% of vulnerabilities and achieving zero security incidents.",
        "Added BACnet protocol support, expanding integration with building automation and IoT systems.",
        "Implemented OCSP within PKI infrastructure, improving digital certificate validation and response efficiency.",
        "Enhanced RTSP playback and PiPOver handling, reducing video latency and improving overall performance."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "Jul 2025 - Oct 2025",
      responsibilities: [
        "Developed a multi-role dashboard for distributors and retailers using React (TypeScript) and Material-UI.",
        "Implemented real-time stock synchronization, shift-based ordering, and modular UI components for high-volume workflows.",
        "Created scalable modules for bulk operations, dynamic forms, and file handling, improving efficiency across users."
      ]
    },
    {
      title: "Lead Organizer & Developer",
      company: "Mitram Group",
      location: "Nadiad, Gujarat, India",
      duration: "Sep 2021 - Dec 2022",
      responsibilities: [
        "Founded and led a student-run tech organization hosting large-scale campus events for 1,000+ participants.",
        "Developed an event management platform using the MERN stack with QR-based entry validation and UPI payment integration.",
        "Deployed on AWS (EC2, Amplify) for real-time scalability, supporting 600+ concurrent users and 1K+ daily views.",
        "Oversaw logistics, marketing, and execution teams to ensure seamless event operations and user engagement."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="inline-block pb-2 border-b-2 border-primary">Work Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <div className="text-muted-foreground">
                      {experience.company} • {experience.location}
                    </div>
                  </div>
                  <div className="text-sm mt-2 md:mt-0 font-medium bg-secondary dark:bg-secondary/30 px-3 py-1 rounded-full inline-block">
                    {experience.duration}
                  </div>
                </div>

                <ul className="space-y-2 text-sm mt-4">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary">✍🏼 </span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
