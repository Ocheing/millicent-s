import { Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>

      <div className="section-card">
        <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether you have a question, 
          a project idea, or just want to say hello, feel free to reach out!
        </p>

        <div className="space-y-4 mb-8">
          <a 
            href="mailto:hello@millicentanyango.com" 
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="group-hover:underline">hello@millicentanyango.com</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Available Worldwide (Remote)</span>
          </div>
        </div>

        <a
          href="mailto:hello@millicentanyango.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Message
        </a>
      </div>
    </section>
  );
};
