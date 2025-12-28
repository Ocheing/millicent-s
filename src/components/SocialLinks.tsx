import { Github, Linkedin, Instagram, Mail, Code } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Email",
    url: "mailto:millicent@example.com",
    icon: Mail,
  },
  {
    name: "CodePen",
    url: "https://codepen.io",
    icon: Code,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 mt-auto pt-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};
