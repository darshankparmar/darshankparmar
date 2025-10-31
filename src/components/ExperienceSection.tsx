
export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Matrix Comsec Pvt. Ltd. - IPVS (Server Team)",
      location: "Vadodara",
      duration: "Jan 2023 - Sep 2025",
      responsibilities: [
        "Redesigned P2P service architecture for mobile-to-NVR communication, increasing capacity from 3,000+ to 30,000+ NVRs.",
        "Developed a new Angular-based P2P service dashboard, reducing troubleshooting time by 50% through interactive visual load analysis and real-time monitoring.",
        "Integrated WhatsApp Meta, WebRTC, and HLS protocols to advance communication services.",
        "Implemented OAuth with PKCE, improving authentication security and user management.",
        "Developed a mobile push video feature, enabling mobile devices to function as CCTV cameras and optimize video streaming.",
        "Enhanced security by ensuring full OWASP STQC compliance, mitigating 95% of critical vulnerabilities and passing all Fortify and Parasoft security audits.",
        "Established BACNET protocol support, enhancing product functionality and facilitating integration with building automation systems.",
        "Implemented OCSP in PKI systems, increasing certificate verification efficiency.",
        "Optimized video streaming and playback with RTSP and PiPOver, reducing latency and improving performance."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "Jul 2025 - Oct 2025",
      responsibilities: [
        "Built a feature-rich dashboard using React (TypeScript), Material-UI, and modern patterns (hooks, context API) with role-based access for distributors, retailers, and admins.",
        "Implemented shift-based order flows (morning/evening), real-time stock updates, and responsive UI components for large-scale operations.",
        "Enabled bulk operations, file uploads, and dynamic forms to support scalable and efficient business processes."
      ]
    },
    {
      title: "Full Stack Developer and Member",
      company: "Mitram Group",
      location: "Nadiad",
      duration: "Oct 2021 - Dec 2022",
      responsibilities: [
        "Designed an event management portal using MERN Stack, streamlining check-ins for 1,000+ attendees with QR-based validation.",
        "Integrated UPI payment gateway, processing 1,000+ transactions securely.",
        "Deployed the application on AWS (EC2, Amplify), supporting 600+ real-time users and handling 1,000+ daily views.",
        "Led event logistics, marketing, and staffing, ensuring seamless event execution for over 1,000+ attendees."
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
