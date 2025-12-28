import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with modern technologies for optimal performance.",
    url: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application featuring real-time updates, team workspaces, and project tracking. Designed for teams to organize and track their work efficiently.",
    url: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    skills: ["TypeScript", "React", "Firebase", "Tailwind"],
  },
  {
    title: "Healthcare Management System",
    description:
      "A comprehensive healthcare platform for patient management, appointment scheduling, and medical records. Built with security and accessibility in mind.",
    url: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
  },
  {
    title: "Real Estate Listing Platform",
    description:
      "A property listing platform with advanced search filters, virtual tours, and agent-client messaging. Features an intuitive interface for buyers and sellers.",
    url: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    skills: ["Next.js", "Prisma", "AWS", "Mapbox"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-foreground mb-8 lg:hidden">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="section-card group block"
          >
            <div className="grid lg:grid-cols-[120px_1fr] gap-4">
              <div className="relative overflow-hidden rounded-md border border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-20 lg:h-24 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 inline-flex items-center gap-1">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-2 mt-8 text-foreground font-medium hover:text-primary transition-colors duration-300 group"
      >
        View All Projects
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </section>
  );
};
