import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Kisii Teaching and Referral Hospital Website",
    description: "A fully responsive hospital website featuring appointment booking, doctor directories, medical services information, and patient resources. Built with HTML, CSS and JS frontend, Strapi CMS backend, and deployed on Vercel.",
    url: "https://ktrh.vercel.app/",
    image: "/assets/ktrh-vercel.jpg",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Strapi CMS", "Vercel", "Responsive Design"],
    github: "https://github.com/Ocheing/KTRH-FRONTEND.git"
  },

  {
    title: "Trinity Drivig School Website",
    description: "A modern, responsive, and interactive website built for Trinity Driving School to provide an engaging online experience for prospective students. The site features an immersive 3D hero section using Three.js, smooth scroll animations, and a polished glassmorphism UI.",
    url: "https://trinityds.vercel.app/",
    image: "/assets/trinityds.jpg",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "Three.js (r128)", "Google Fonts (Inter)", "FontAwesome"],
    github: "https://github.com/Ocheing/Trinity.git"
  },
  {
    title: "Movie Finder",
    description: "Movie Finder is a sleek, responsive web application that lets users search and explore movies in real-time using the TMDb (The Movie Database) API. It provides live access to movie posters, titles, ratings, release dates, and descriptions. Built to showcase real-time API integration and smooth user interaction through a clean UI.",
    url: "https://moviefinder-4438a9.netlify.app/",
    image: "/assets/moviefinder.jpg",
    skills: ["HTML5", "CSS3", "JavaScript", "TMDb API"],
    github: "https://github.com/Ocheing/moviefinder.git"
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
            href={project.url !== "#" ? project.url : undefined}
            target={project.url !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="section-card group block"
          >
            <div className="grid lg:grid-cols-[200px_1fr] gap-6"> {/* Increased from 120px to 200px */}
              {/* Fixed Image Container with aspect ratio */}
              <div className="relative overflow-hidden rounded-md border border-border/50">
                <div className="aspect-video w-full"> {/* Added fixed aspect ratio */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 inline-flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                {/* Skills with GitHub link if available */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* GitHub link (only for projects with GitHub URL) */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/Ocheing" // Fixed: Added missing "https://"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 text-foreground font-medium hover:text-primary transition-colors duration-300 group"
      >
        View All Projects
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </section>
  );
};