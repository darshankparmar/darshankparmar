
import { User, Award, Briefcase } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            <span className="inline-block pb-2 border-b-2 border-primary">About Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 animate-slide-in">
              <h3 className="text-2xl font-semibold">Darshan Parmar</h3>
              <p className="text-muted-foreground">
                A Full Stack Developer with over 3 years of experience building enterprise-grade platforms and microservices using React, .NET Core, and Python.
              </p>
              <p className="text-muted-foreground">
                I specialize in creating high-performance applications with real-time communication, secure authentication, and cloud scalability.
              </p>
              <p className="text-muted-foreground">
                Currently focused on delivering robust, production-ready solutions that balance user experience, security, and system reliability.
              </p>
              <div className="pt-4 space-y-3">
                {/* <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-primary" />
                  <span>Full Stack Developer</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Bachelor of Technology in Computer Engineering</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Matrix Comsec Pvt. Ltd. - IPVS (Server Team)</span>
                </div> */}
              </div>
            </div>

            <div className="glass-card rounded-lg p-6 animate-scale-in">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-4">
                Skilled in React, .NET Core, Node.js, FastAPI, and AWS, with hands-on experience architecting and deploying cloud-native, full-stack solutions. I focus on performance, scalability, and secure software design, blending backend efficiency with clean, maintainable frontend systems.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Experienced in microservices and distributed system design for scalable enterprise applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Passionate about DevOps automation, continuous integration, and secure deployment pipelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Strong advocate for clean architecture, code reviews, and team mentoring to maintain technical excellence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Skilled at integrating cloud, containerization, and modern authentication flows across multi-tenant platforms.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
