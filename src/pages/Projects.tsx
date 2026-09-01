import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Search } from "lucide-react";
import { Spotlight } from "@/components/Spotlight";
import { Footer } from "@/components/Footer";

interface ProjectArchiveItem {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  url?: string;
  github?: string;
  description?: string;
}

const archiveProjects: ProjectArchiveItem[] = [
  {
    year: "2026",
    title: "Trinity Driving School Website",
    madeAt: "Client Project",
    builtWith: [
      "Next.js 15 (App Router)",
      "Tailwind CSS v4",
      "Supabase (PostgreSQL)",
      "Supabase Auth",
      "Lucide React",
    ],
    url: "https://trinityds.vercel.app/",
    github: "https://github.com/Ocheing/Trinity.git",
    description:
      "Interactive driving school website with an immersive 3D hero section using Three.js and glassmorphic UI.",
  },
  {
    year: "2025",
    title: "Creator Connect Hub (MicroMatch)",
    madeAt: "Full-Stack Web App",
    builtWith: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "React Router",
      "TanStack Query",
      "Framer Motion",
    ],
    url: "https://creator-connect-hub-one.vercel.app/",
    github: "https://github.com/Ocheing/creator-connect-hub.git",
    description:
      "A full-stack micro-influencer marketing platform connecting brands with authentic creators for impactful, data-driven marketing campaigns.",
  },
  {
    year: "2025",
    title: "Hekima Organization Platform",
    madeAt: "Hekima Organization",
    builtWith: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Design",
      "Git & GitHub",
      "UI/UX",
    ],
    url: "https://hekima-black.vercel.app/",
    github: "https://github.com/Ocheing",
    description:
      "Modern web platform designed and built for Hekima Organization with responsive layout and React-based architecture.",
  },
  {
    year: "2025",
    title: "Personal Portfolio Website",
    madeAt: "Personal",
    builtWith: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide Icons",
    ],
    url: "https://ocheing-millicent.netlify.app/",
    github: "https://github.com/Ocheing",
    description:
      "Personal developer portfolio featuring responsive design, spotlight cursor glow, and sleek typography.",
  },

  {
    year: "2024",
    title: "Movie Finder",
    madeAt: "Web Application",
    builtWith: ["HTML5", "CSS3", "JavaScript", "TMDb API", "Netlify"],
    url: "https://moviefinder-4438a9.netlify.app/",
    github: "https://github.com/Ocheing/moviefinder.git",
    description:
      "Real-time movie search and exploration web app powered by The Movie Database (TMDb) API.",
  },
  {
    year: "2023",
    title: "Kisii Teaching and Referral Hospital Website",
    madeAt: "KTRH",
    builtWith: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Strapi CMS",
      "Vercel",
      "Responsive Design",
    ],
    url: "https://ktrh.vercel.app/",
    github: "https://github.com/Ocheing/KTRH-FRONTEND.git",
    description:
      "Hospital web portal featuring appointment bookings, medical doctor directories, and patient resources.",
  },
];

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "Client / Volunteer"];

  const filteredProjects = archiveProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.madeAt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.builtWith.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      (project.description &&
        project.description.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === "All") return true;
    if (selectedCategory === "Full-Stack") {
      return (
        project.madeAt.toLowerCase().includes("full-stack") ||
        project.builtWith.some((t) =>
          ["supabase", "postgresql", "node.js", "strapi"].some((backend) =>
            t.toLowerCase().includes(backend)
          )
        )
      );
    }
    if (selectedCategory === "Frontend") {
      return project.builtWith.some((t) =>
        ["react", "html5", "css3", "javascript", "three.js"].some((frontend) =>
          t.toLowerCase().includes(frontend)
        )
      );
    }
    if (selectedCategory === "Client / Volunteer") {
      return (
        project.madeAt.toLowerCase().includes("client") ||
        project.madeAt.toLowerCase().includes("organization") ||
        project.madeAt.toLowerCase().includes("ktrh")
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <Spotlight />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            to="/"
            className="group inline-flex items-center font-semibold leading-tight text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1.5 duration-300" />
            Millicent Anyango
          </Link>
        </div>

        {/* Page Title & Intro */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Projects
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive archive of applications, client solutions, collaborative platforms, and experiments I've built.
          </p>
        </header>

        {/* Controls: Search and Filter Tabs */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-border/50 bg-card/40 pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        {/* Projects Table / Archive List */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-lg border border-border/40 bg-card/20 p-12 text-center text-muted-foreground">
            <p>No projects matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/40 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <th className="py-4 pr-6">Year</th>
                  <th className="py-4 pr-6">Project</th>
                  <th className="hidden md:table-cell py-4 pr-6">Made at</th>
                  <th className="hidden lg:table-cell py-4 pr-6">Built with</th>
                  <th className="py-4 text-right sm:text-left">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-sm">
                {filteredProjects.map((project, index) => (
                  <tr
                    key={index}
                    className="group transition-colors duration-200 hover:bg-card/40"
                  >
                    {/* Year */}
                    <td className="py-4 pr-6 align-top text-xs font-medium text-muted-foreground sm:text-sm whitespace-nowrap">
                      {project.year}
                    </td>

                    {/* Project Title + Description on mobile */}
                    <td className="py-4 pr-6 align-top font-semibold">
                      <div className="flex flex-col gap-1">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-foreground group-hover:text-primary transition-colors duration-200"
                          >
                            <span>{project.title}</span>
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                          </a>
                        ) : (
                          <span className="text-foreground">{project.title}</span>
                        )}

                        {project.description && (
                          <p className="text-xs text-muted-foreground font-normal leading-relaxed md:hidden mt-1">
                            {project.description}
                          </p>
                        )}

                        {/* Made at on mobile */}
                        <span className="text-xs text-muted-foreground/80 font-normal md:hidden mt-0.5">
                          {project.madeAt}
                        </span>

                        {/* Mobile tags */}
                        <div className="flex flex-wrap gap-1.5 lg:hidden mt-2">
                          {project.builtWith.map((tech) => (
                            <span key={tech} className="skill-tag text-[11px] py-0.5 px-2">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* Made At (Desktop) */}
                    <td className="hidden md:table-cell py-4 pr-6 align-top text-muted-foreground">
                      {project.madeAt}
                    </td>

                    {/* Built With (Desktop) */}
                    <td className="hidden lg:table-cell py-4 pr-6 align-top">
                      <div className="flex flex-wrap gap-1.5 max-w-md">
                        {project.builtWith.map((tech) => (
                          <span key={tech} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Links */}
                    <td className="py-4 align-top text-right sm:text-left whitespace-nowrap">
                      <div className="flex items-center justify-end sm:justify-start gap-3">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group/link"
                            title="Live Demo"
                          >
                            <span className="hidden sm:inline font-mono">
                              {project.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "")}
                            </span>
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} GitHub repository`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* GitHub Full Archive Link */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Looking for more experiments and open source repositories?
          </p>
          <a
            href="https://github.com/Ocheing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
