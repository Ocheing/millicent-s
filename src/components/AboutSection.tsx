export const AboutSection = () => {
  return (
    <section id="about" className="mb-24 scroll-mt-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-foreground mb-8 lg:hidden">
        About
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a software developer passionate about crafting accessible, pixel-perfect 
          digital experiences. My favorite work lies at the intersection of design and 
          development, creating solutions that not only look great but are meticulously 
          built for performance and usability.
        </p>
        <p>
          Currently, I specialize in building robust web applications using modern 
          technologies. I contribute to creating and maintaining UI components and 
          full-stack solutions, ensuring platforms meet the highest standards of 
          quality and user experience.
        </p>
        <p>
          I've had the opportunity to develop software across a variety of settings — 
          from{" "}
          <span className="text-primary font-medium">startups</span> and{" "}
          <span className="text-primary font-medium">tech companies</span> to{" "}
          <span className="text-primary font-medium">freelance projects</span> and{" "}
          <span className="text-primary font-medium">open-source contributions</span>.
        </p>
        <p>
          When I'm not at the computer, I'm usually exploring new technologies, 
          mentoring aspiring developers, or enjoying time with family and friends.
        </p>
      </div>
    </section>
  );
};
