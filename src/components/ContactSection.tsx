
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            <span className="inline-block pb-2 border-b-2 border-primary">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to connect, 
            I'll do my best to get back to you!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
            <a 
              href="mailto:darshanparmar.dev@gmail.com" 
              className="glass-card rounded-lg p-6 flex items-center gap-4 hover-lift"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-sm font-medium">darshanparmar.dev@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="tel:+918469108864" 
              className="glass-card rounded-lg p-6 flex items-center gap-4 hover-lift"
            >
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">+91 8469108864</div>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/darshankparmar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover-lift"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/darshankparmar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover-lift"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
