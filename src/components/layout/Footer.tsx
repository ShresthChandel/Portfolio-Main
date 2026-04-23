import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-muted text-sm font-mono">
            © {new Date().getFullYear()} Shresth Singh Chandel
          </p>
          <p className="text-muted/60 text-xs mt-1">
            Designed and built with Next.js & Tailwind
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ShresthChandel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shresth-singh-chandel-5576242a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shresthsingh003@gmail.com"
            className="text-muted hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
