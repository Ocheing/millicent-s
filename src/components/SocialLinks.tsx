import { Github, Linkedin, Instagram, Mail, Code } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https:/github.com/Ocheing",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/millicent-anyango-b8b69b29b",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Email",
  url: "https://mail.google.com/mail/?view=cm&fs=1&to=ocheingmillicent@gmail.com",
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
