
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
                A full-stack engineer passionate about building scalable, high-performance systems that blend AI and real-time technology.
                Always exploring new tools and patterns that make development faster, smarter, and more impactful.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-primary" />
                  <span>Software Development Engineer</span>
                </div>
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
                Skilled in FastAPI(Python), Node.js, .NET Core, Angular, React, Django, and AWS, with expertise in security,
                real-time data streaming, and performance optimization.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Expertise in developing secure, scalable backend systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Experience with real-time communication protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Skilled in cloud architecture and performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✍🏼 </span>
                  <span>Strong background in security implementation and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
