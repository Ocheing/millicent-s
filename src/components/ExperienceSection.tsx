import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "April 2025- October 2025",
    title: "Web Developer volunteer",
    company: "Hekima Organization,Tanzania",
    companyUrl: "https://hekima-black.vercel.app/",
    description:
      "Collaborating in Designing and developing a responsive web platform using modern web technologies. Collaborating with a remote team on UI/UX design, layout implementation, and version control while supporting the transition to a React-based architecture.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Git & GitHub", "UI/UX", "Remote Collaboration"],
  },
  {
    period: "May 2023- August 2023",
    title: "ICT Attatchee ",
    company: "Kisii Teaching and Referral Hospital",
    companyUrl: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKqKNzTLy7EwYLRSNagwtDBKMk5KMzNNSzNOSjVMsTKoMLIwSTY0STG3NDBKtExJSvHiyi4pylDIzizOzAQAbEwTcQ&q=ktrh+kisii&oq=ktrh&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyCQgAEEUYORiABDINCAEQLhivARjHARiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg90gEJMTE3MjlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8",
    description:
     "Provided comprehensive technical support for computer hardware, network printers, and authorized software systems. Configured workstations, assisted users with daily technical issues, monitored system uptime, and participated in user account management while ensuring secure data practices.",
    skills: ["Technical Support", "Hardware Troubleshooting", "Network Maintenance", "System Administration", "User Support", "Data Security", "IT Infrastructure", "Windows OS"],
  },
  /*{
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "StartUp Hub Nairobi",
    companyUrl: "#",
    description:
      "Collaborated with designers and product teams to build responsive, accessible web interfaces. Implemented modern frontend architectures and contributed to improving development workflows.",
    skills: ["HTML & CSS", "JavaScript", "Vue.js", "Tailwind CSS", "Git"],
  },*/
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
  href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-8 text-foreground font-medium hover:text-primary transition-colors duration-300 group"
>
  View Full Résumé
  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
</a>
    </section>
  );
};