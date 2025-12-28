import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Software Developer",
    company: "Tech Innovations Ltd",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct the company's frontend and backend systems. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in software development.",
    skills: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Africa",
    companyUrl: "#",
    description:
      "Developed and shipped high-quality web applications, design systems, and digital products for a diverse array of projects. Provided technical leadership through close collaboration and spearheading the development of internal tools.",
    skills: ["JavaScript", "React", "Python", "Django", "Docker"],
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "StartUp Hub Nairobi",
    companyUrl: "#",
    description:
      "Collaborated with designers and product teams to build responsive, accessible web interfaces. Implemented modern frontend architectures and contributed to improving development workflows.",
    skills: ["HTML & CSS", "JavaScript", "Vue.js", "Tailwind CSS", "Git"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-foreground mb-8 lg:hidden">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="section-card group"
          >
            <div className="grid lg:grid-cols-[140px_1fr] gap-4">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground mt-1">
                {exp.period}
              </span>
              <div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    {exp.title} · {exp.company}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-2 mt-8 text-foreground font-medium hover:text-primary transition-colors duration-300 group"
      >
        View Full Résumé
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </section>
  );
};
